// Состояние игры и сохранение в localStorage.

import { PART } from './parts.js';
import { emptyBuild } from './logic.js';

const KEY = 'pc-build-sim-save-v2';
export const LEVEL_XP = [0, 150, 400, 800, 1400, 2200, 3200];
export const START_MONEY = 40000;
export const PARK_SPOTS = 3;     // мест на стеллаже для компьютеров
export const MAX_JOBS = 4;

export function freshState(sandbox = false) {
  return {
    v: 2,
    sandbox,
    money: sandbox ? 1e12 : START_MONEY,
    xp: 0,
    day: 1,
    uid: 1,
    pcSeq: 1,
    inventory: [],          // [{ uid, pid, broken?, dirty?, client?, tested? }]
    pcs: [],                // [{ id, owner: 'job'|'own', jobId?, build, score?: {sig, score}, osSig? }]
    benchPc: null,          // id ПК на верстаке
    jobs: [],               // принятые заказы
    inbox: [],              // письма-заказы
    seedBase: Math.floor(Math.random() * 1e9),
    seedN: 0,
    jobsDone: 0,
    earned: 0,
    rep: 2.5,               // репутация, 0..5 звёзд
    settings: { sound: true, sens: 1 },
    tutorial: true
  };
}

export let S = freshState();

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const d = JSON.parse(raw);
      if (d && d.v === 2) S = Object.assign(freshState(), d);
    }
  } catch { /* битое сохранение — начинаем заново */ }
  // удаляем детали, которых больше нет в каталоге
  S.inventory = S.inventory.filter(i => PART[i.pid]);
  for (const pc of S.pcs) for (const [s, it] of Object.entries(pc.build.slots)) if (!PART[it.pid]) delete pc.build.slots[s];
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

export function newPC(owner, build = emptyBuild(), jobId = null) {
  const pc = { id: 'pc' + S.pcSeq++, owner, jobId, build, score: null, osSig: null };
  S.pcs.push(pc);
  return pc;
}
export const benchPC = () => S.pcs.find(p => p.id === S.benchPc) || null;
export const parkedPCs = () => S.pcs.filter(p => p.id !== S.benchPc);
export const pcJob = pc => pc && pc.jobId ? S.jobs.find(j => j.id === pc.jobId) : null;
export const jobPC = job => S.pcs.find(p => p.jobId === job.id) || null;

/** «Отпечаток» сборки — чтобы понимать, что тест устарел. */
export function buildSig(b) {
  return JSON.stringify([Object.entries(b.slots).map(([s, it]) => s + ':' + it.uid + (it.dirty ? 'd' : '')).sort(), Object.keys(b.cables).sort()]);
}
