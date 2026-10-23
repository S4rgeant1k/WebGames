// Тесты игровой логики: npm test
import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash, randomBytes } from 'node:crypto';

import { ITEMS, ITEM_BY_ID, CASES, RARITY_BY_ID, CATEGORIES, CONFIG } from '../js/data.js';
import {
  chanceFor, resolveUpgrade, hashToInt, pickFromPool,
  caseExpectedValue, upgradeTargets, consolationPrize, fmt
} from '../js/economy.js';
import { sha256Hex, betString } from '../js/fair.js';

const nodeSha = s => createHash('sha256').update(s).digest('hex');

test('каталог: уникальные id, корректные редкости/категории/цены', () => {
  const ids = new Set();
  const cats = new Set(CATEGORIES.map(c => c.id));
  for (const i of ITEMS) {
    assert.ok(!ids.has(i.id), 'дубликат ' + i.id);
    ids.add(i.id);
    assert.ok(RARITY_BY_ID[i.rarity], 'редкость ' + i.id);
    assert.ok(cats.has(i.cat), 'категория ' + i.id);
    assert.ok(Number.isFinite(i.price) && i.price > 0, 'цена ' + i.id);
  }
});

test('кейсы: все предметы существуют, цена ≈ EV / RTP', () => {
  for (const c of CASES) {
    for (const [id, w] of c.pool) {
      assert.ok(ITEM_BY_ID[id], `${c.id}: нет предмета ${id}`);
      assert.ok(w > 0);
    }
    const rtp = caseExpectedValue(c.id) / c.price;
    assert.ok(rtp > 0.75 && rtp < 1.0, `${c.id}: RTP ${rtp.toFixed(3)} вне диапазона`);
  }
});

test('шанс: падает с ростом цели и ограничен 5..95%', () => {
  assert.equal(chanceFor(1000, 0), 0);
  assert.equal(chanceFor(0, 1000), 0);
  const a = chanceFor(1000, 2000), b = chanceFor(1000, 4000);
  assert.ok(a > b);
  assert.ok(Math.abs(a - CONFIG.upgradeRTP * 50) < 1e-9);
  assert.equal(chanceFor(1000, 950), CONFIG.maxChance);
  assert.equal(chanceFor(1000, 1e9), CONFIG.minChance);
});

test('hashToInt в диапазоне 0..9999', () => {
  for (let i = 0; i < 2000; i++) {
    const n = hashToInt(randomBytes(32).toString('hex'));
    assert.ok(n >= 0 && n < 10000 && Number.isInteger(n));
  }
});

test('стрелка всегда попадает в нужную зону', () => {
  for (let i = 0; i < 5000; i++) {
    const chance = 5 + Math.random() * 90;
    const res = resolveUpgrade(randomBytes(32).toString('hex'), chance);
    const sector = chance / 100 * 360;
    assert.ok(res.angle >= 0 && res.angle < 360);
    if (res.win) assert.ok(res.angle > 0 && res.angle < sector, `win, но угол ${res.angle} вне ${sector}`);
    else assert.ok(res.angle > sector && res.angle < 360, `lose, но угол ${res.angle} в секторе ${sector}`);
  }
});

test('частота побед соответствует шансу (Монте-Карло)', () => {
  for (const chance of [10, 25, 50, 80]) {
    let wins = 0;
    const N = 40000;
    for (let i = 0; i < N; i++) if (resolveUpgrade(randomBytes(8).toString('hex'), chance).win) wins++;
    const rate = wins / N * 100;
    assert.ok(Math.abs(rate - chance) < 1.2, `шанс ${chance}%: получили ${rate.toFixed(2)}%`);
  }
});

test('SHA-256: WebCrypto и резервная реализация совпадают с Node', async () => {
  const s = betString('abc123', 'client', 7);
  assert.equal(await sha256Hex(s), nodeSha(s));

  // проверяем резервную реализацию, временно убрав crypto.subtle
  const desc = Object.getOwnPropertyDescriptor(globalThis, 'crypto');
  Object.defineProperty(globalThis, 'crypto', { value: { getRandomValues: a => a }, configurable: true });
  try {
    for (const str of ['', 'a', 'Привет, мир!', 'x'.repeat(55), 'y'.repeat(64), 'z'.repeat(200)]) {
      assert.equal(await sha256Hex(str), nodeSha(str), `fallback на «${str.slice(0, 10)}»`);
    }
  } finally {
    Object.defineProperty(globalThis, 'crypto', desc);
  }
});

test('pickFromPool учитывает веса', () => {
  const pool = [['p9_ash', 3], ['ak_blue', 1]];
  let a = 0;
  for (let i = 0; i < 20000; i++) if (pickFromPool(pool).id === 'p9_ash') a++;
  assert.ok(Math.abs(a / 20000 - 0.75) < 0.02);
  assert.equal(pickFromPool(pool, () => 0).id, 'p9_ash');
  assert.equal(pickFromPool(pool, () => 0.9999).id, 'ak_blue');
});

test('цели апгрейда дороже ставки и отсортированы', () => {
  const t = upgradeTargets(5000);
  assert.ok(t.length > 0);
  for (let i = 0; i < t.length; i++) {
    assert.ok(t[i].price > 5000);
    if (i) assert.ok(t[i].price >= t[i - 1].price);
  }
});

test('утешительный приз: иногда есть, дешевле ставки', () => {
  assert.equal(consolationPrize(10000, () => 0.99), null);
  const p = consolationPrize(10000, () => 0);
  assert.ok(p && p.price < 10000);
});

test('форматирование чисел', () => {
  assert.equal(fmt(1234567), '1 234 567');
  assert.equal(fmt(0), '0');
});
