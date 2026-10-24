// Состояние игры и сохранение в localStorage.

import { PART } from './parts.js';
import { emptyBuild } from './logic.js';

const KEY = 'pc-build-sim-save-v1';
export const LEVEL_XP = [0, 120, 320, 650, 1100, 1800, 2800];
export const START_MONEY = 600;

export function freshState(sandbox = false) {
  return {
    v: 1,
    sandbox,
    money: sandbox ? 1e9 : START_MONEY,
    xp: 0,
    day: 1,
    uid: 1,
    inventory: [],          // [{ uid, pid, broken?, dirty?, client? }]
    bench: emptyBuild(),    // сборка на столе
    job: null,              // активный заказ
    inbox: [],              // письма-заказы
    seedBase: Math.floor(Math.random() * 1e9),
    jobsDone: 0,
    earned: 0,
    bench_score: null,      // { sig, score }
    settings: { sound: true },
    tutorial: true
  };
}

export let S = freshState();

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && d.v === 1) S = Object.assign(freshState(), d);
    }
  } catch { /* битое сохранение — начинаем заново */ }
  return S;
}
export function save() {
  try { localStorage.setItem(KEY, JSON.stringify(S)); } catch { /* приватный режим */ }
}
export function reset(sandbox = false) {
  S = freshState(sandbox);
  save();
  return S;
}

export const level = () => {
  if (S.sandbox) return 99;
  let l = 1;
  for (let i = 1; i < LEVEL_XP.length; i++) if (S.xp >= LEVEL_XP[i]) l = i + 1;
  return l;
};

export function newItem(pid, extra = {}) {
  if (!PART[pid]) throw new Error('Нет детали ' + pid);
  return { uid: S.uid++, pid, ...extra };
}

/** «Отпечаток» сборки — чтобы понимать, что тест устарел. */
export function buildSig(b) {
  return JSON.stringify([Object.entries(b.slots).map(([s, it]) => s + ':' + it.uid + (it.dirty ? 'd' : '')).sort(), Object.keys(b.cables).sort()]);
}
