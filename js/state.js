// Состояние игрока и сохранение в localStorage.

import { CONFIG, ITEM_BY_ID } from './data.js';
import { randomHex, sha256Hex } from './fair.js';

function freshState() {
  return {
    version: 1,
    balance: CONFIG.startBalance,
    inventory: [],              // [{ uid, id, t }]
    nextUid: 1,
    stats: {
      upgrades: 0, wins: 0, losses: 0,
      casesOpened: 0, itemsBought: 0, itemsSold: 0,
      bestWin: null,            // { id, price, chance }
      biggestDrop: null,        // { id, price }
      totalStaked: 0, totalWon: 0
    },
    history: [],                // последние события
    daily: { last: 0, streak: 0 },
    lastCredit: 0,
    fair: { serverSeed: '', serverHash: '', clientSeed: '', nonce: 0, revealed: [] },
    settings: { sound: true, fast: false },
    playerId: 100000 + Math.floor(Math.random() * 900000),
    nickname: 'Игрок',
    usedPromos: [],
    createdAt: Date.now()
  };
}

export const state = freshState();

export function load() {
  try {
    const raw = localStorage.getItem(CONFIG.storageKey);
    if (raw) {
      const saved = JSON.parse(raw);
      const base = freshState();
      Object.assign(state, base, saved, {
        stats: { ...base.stats, ...(saved.stats || {}) },
        daily: { ...base.daily, ...(saved.daily || {}) },
        fair: { ...base.fair, ...(saved.fair || {}) },
        settings: { ...base.settings, ...(saved.settings || {}) }
      });
      // выкидываем предметы, которых больше нет в каталоге
      state.inventory = (state.inventory || []).filter(e => ITEM_BY_ID[e.id]);
    }
  } catch (e) {
    console.warn('Сохранение повреждено, начинаем заново', e);
  }
}

let saveTimer = null;
export function save() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(state)); } catch { /* приватный режим */ }
  }, 50);
}

export function resetAll() {
  const fresh = freshState();
  for (const k of Object.keys(state)) delete state[k];
  Object.assign(state, fresh);
  localStorage.removeItem(CONFIG.storageKey);
}

// ── Provably fair ─────────────────────────────────────────────────────────
export async function ensureSeeds() {
  const f = state.fair;
  if (!f.serverSeed) {
    f.serverSeed = randomHex(32);
    f.serverHash = await sha256Hex(f.serverSeed);
    f.nonce = 0;
  }
  if (!f.clientSeed) f.clientSeed = randomHex(8);
  save();
}

/** Раскрыть текущий серверный сид и сгенерировать новый. */
export async function rotateSeed() {
  const f = state.fair;
  f.revealed.unshift({ serverSeed: f.serverSeed, serverHash: f.serverHash, clientSeed: f.clientSeed, nonces: f.nonce, t: Date.now() });
  f.revealed = f.revealed.slice(0, 10);
  f.serverSeed = '';
  await ensureSeeds();
}

// ── Инвентарь ─────────────────────────────────────────────────────────────
export function addItem(id) {
  const entry = { uid: state.nextUid++, id, t: Date.now() };
  state.inventory.unshift(entry);
  return entry;
}

export function removeItems(uids) {
  const set = new Set(uids);
  state.inventory = state.inventory.filter(e => !set.has(e.uid));
}

export const invItem = uid => state.inventory.find(e => e.uid === uid);

export function inventoryValue() {
  return state.inventory.reduce((s, e) => s + (ITEM_BY_ID[e.id]?.price || 0), 0);
}

export function pushHistory(entry) {
  state.history.unshift({ t: Date.now(), ...entry });
  state.history = state.history.slice(0, CONFIG.maxHistory);
}
