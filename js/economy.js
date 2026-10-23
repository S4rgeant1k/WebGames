// Чистая игровая логика: шансы, рулетка, кейсы, утешительный приз.
// Здесь нет ни DOM, ни браузера — модуль тестируется в Node (tests/logic.test.mjs).

import { ITEMS, ITEM_BY_ID, CASE_BY_ID, CONFIG } from './data.js';

export const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

/**
 * Шанс апгрейда в процентах.
 * Чем дороже цель относительно ставки — тем ниже шанс.
 */
export function chanceFor(stakeValue, targetValue, rtp = CONFIG.upgradeRTP) {
  if (!(stakeValue > 0) || !(targetValue > 0)) return 0;
  const raw = (rtp * stakeValue * 100) / targetValue;
  return clamp(raw, CONFIG.minChance, CONFIG.maxChance);
}

/** Коэффициент ставки (во сколько раз дороже цель). */
export function multiplierFor(stakeValue, targetValue) {
  if (!(stakeValue > 0) || !(targetValue > 0)) return 0;
  return targetValue / stakeValue;
}

/**
 * 16-ричная строка хеша -> целое 0..9999.
 * Одно и то же число определяет и результат, и угол стрелки,
 * поэтому анимация не может «разойтись» с исходом.
 */
export function hashToInt(hashHex, max = 10000) {
  const slice = hashHex.slice(0, 12);
  const n = parseInt(slice, 16);
  if (!Number.isFinite(n)) return 0;
  return n % max;
}

/**
 * Исход апгрейда.
 * @param {string} hashHex sha256(serverSeed:clientSeed:nonce)
 * @param {number} chancePercent 5..95
 * @returns {{roll:number, win:boolean, angle:number}}
 *   angle — градус, на который должна встать стрелка (0 — верх колеса)
 */
export function resolveUpgrade(hashHex, chancePercent) {
  const roll = hashToInt(hashHex); // 0..9999
  const win = roll < Math.round(chancePercent * 100);
  // Выигрышный сектор — от 12 часов по часовой на chancePercent от круга.
  // Ставим указатель внутрь сектора при победе и снаружи при проигрыше.
  const sectorDeg = (chancePercent / 100) * 360;
  let angle;
  if (win) {
    const t = roll / Math.max(1, Math.round(chancePercent * 100)); // 0..1 внутри сектора
    angle = sectorDeg * (0.12 + 0.76 * t) + sectorDeg * 0.06;
  } else {
    const free = 360 - sectorDeg;
    if (free <= 0) {
      angle = sectorDeg + 1;
    } else {
      const remain = roll - Math.round(chancePercent * 100);
      const denom = Math.max(1, 10000 - Math.round(chancePercent * 100));
      angle = sectorDeg + free * (0.1 + 0.8 * (remain / denom));
    }
  }
  return { roll, win, angle: angle % 360 };
}

/** Взвешенный выбор предмета из пула кейса. */
export function pickFromPool(pool, rng = Math.random) {
  const total = pool.reduce((s, [, w]) => s + w, 0);
  let r = rng() * total;
  for (const [id, w] of pool) {
    r -= w;
    if (r <= 0) return ITEM_BY_ID[id];
  }
  return ITEM_BY_ID[pool[pool.length - 1][0]];
}

/** Ожидаемая стоимость содержимого кейса. */
export function caseExpectedValue(caseId) {
  const c = CASE_BY_ID[caseId];
  if (!c) return 0;
  const total = c.pool.reduce((s, [, w]) => s + w, 0);
  return c.pool.reduce((s, [id, w]) => s + (ITEM_BY_ID[id]?.price || 0) * (w / total), 0);
}

/**
 * Список предметов для цели апгрейда: дороже ставки,
 * с множителем не выше maxMultiplier.
 */
export function upgradeTargets(stakeValue, { maxMultiplier = 20, limit = 40 } = {}) {
  if (!(stakeValue > 0)) return [];
  return ITEMS
    .filter(i => i.price > stakeValue && i.price <= stakeValue * maxMultiplier)
    .sort((a, b) => a.price - b.price)
    .slice(0, limit);
}

/** Ближайший по цене предмет — нужен для утешительного приза. */
export function nearestItemByPrice(value) {
  if (!ITEMS.length) return null;
  return ITEMS.reduce((best, i) =>
    Math.abs(i.price - value) < Math.abs(best.price - value) ? i : best
  );
}

/** Утешительный приз: предмет ~ consolationRatio от ставки или null. */
export function consolationPrize(stakeValue, rng = Math.random) {
  if (rng() >= CONFIG.consolationChance) return null;
  return nearestItemByPrice(Math.max(50, stakeValue * CONFIG.consolationRatio));
}

/** Форматирование монет: 1234567 -> «1 234 567». */
export function fmt(n) {
  return Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ');
}

/** 1234567 -> «1,23 млн» */
export function fmtShort(n) {
  const v = Math.round(n);
  if (v >= 1e9) return (v / 1e9).toFixed(2).replace('.', ',') + ' млрд';
  if (v >= 1e6) return (v / 1e6).toFixed(2).replace('.', ',') + ' млн';
  if (v >= 1e4) return (v / 1e3).toFixed(1).replace('.', ',') + ' тыс';
  return fmt(v);
}
