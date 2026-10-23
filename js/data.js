// Каталог предметов, редкости и кейсы.
// Все цены — виртуальные «монеты». Настоящих денег в игре нет.


import { SKINS, CRATE_IMAGES } from './skins.js';

// Редкости — как в CS2 (русские названия из игры)
export const RARITIES = [
  { id: 'consumer',   name: 'Ширпотреб',          color: '#b0c3d9' },
  { id: 'industrial', name: 'Промышленное',       color: '#5e98d9' },
  { id: 'milspec',    name: 'Армейское',          color: '#4b69ff' },
  { id: 'restricted', name: 'Запрещённое',        color: '#8847ff' },
  { id: 'classified', name: 'Засекреченное',      color: '#d32ce6' },
  { id: 'covert',     name: 'Тайное',             color: '#eb4b4b' },
  { id: 'special',    name: '★ Нож / перчатки',   color: '#ffd259' }
];

export const RARITY_BY_ID = Object.fromEntries(RARITIES.map(r => [r.id, r]));

export const CATEGORIES = [
  { id: 'pistol', name: 'Пистолеты' },
  { id: 'smg',    name: 'Пистолеты-пулемёты' },
  { id: 'rifle',  name: 'Винтовки' },
  { id: 'sniper', name: 'Снайперские' },
  { id: 'heavy',  name: 'Тяжёлое' },
  { id: 'knife',  name: 'Ножи' },
  { id: 'gloves', name: 'Перчатки' }
];

// Каталог: реальные скины CS2 (см. js/skins.js). Цена — примерная рыночная, 1 ◆ ≈ 1 цент.
export const ITEMS = SKINS.map(([id, weapon, skin, cat, rarity, price, img]) => ({
  id, weapon, skin, cat, rarity, price, img
}));

export const ITEM_BY_ID = Object.fromEntries(ITEMS.map(i => [i.id, i]));

// ── Кейсы ─────────────────────────────────────────────────────────────────
// Пул собирается по фильтру, вес предмета ~ 1 / цена^power (дешёвое выпадает чаще).
// Цена кейса считается автоматически: ожидаемая стоимость / CASE_RTP.
const CASE_RTP = 0.9;

function makePool(filter, power = 0.8) {
  return ITEMS.filter(filter).map(i => [i.id, +(1e6 / Math.pow(i.price, power)).toFixed(3)]);
}

function priceFor(pool) {
  const total = pool.reduce((s, [, w]) => s + w, 0);
  const ev = pool.reduce((s, [id, w]) => s + ITEM_BY_ID[id].price * w / total, 0);
  const raw = ev / CASE_RTP;
  const step = raw < 1000 ? 10 : raw < 10000 ? 50 : raw < 100000 ? 500 : 1000;
  return Math.round(raw / step) * step;
}

const notSpecial = i => i.rarity !== 'special';

const CASE_DEFS = [
  { id: 'case_starter', name: 'Стартовый кейс', crate: 'Operation Phoenix Weapon Case', color: '#5e98d9',
    desc: 'Дешёвые скины для первых апгрейдов.',
    filter: i => notSpecial(i) && i.price <= 650, power: 0.6 },
  { id: 'case_weapon', name: 'Оружейный кейс', crate: 'Chroma 2 Case', color: '#4b69ff',
    desc: 'Популярные скины: Redline, Asiimov, Neon Rider.',
    filter: i => notSpecial(i) && i.price >= 300 && i.price <= 9000, power: 0.8 },
  { id: 'case_awp', name: 'Снайперский кейс', crate: 'Prisma Case', color: '#22d3ee',
    desc: 'Только снайперки — шанс на AWP | Dragon Lore!',
    filter: i => i.cat === 'sniper' && i.price >= 1200, power: 0.9 },
  { id: 'case_elite', name: 'Элитный кейс', crate: 'Gamma Case', color: '#8847ff',
    desc: 'Тайные скины и легенды CS.',
    filter: i => notSpecial(i) && i.price >= 3000 && i.price <= 65000, power: 0.8 },
  { id: 'case_predator', name: 'Кейс «Хищник»', crate: 'Spectrum Case', color: '#eb4b4b',
    desc: 'Howl, Medusa, Gungnir, Dragon Lore.',
    filter: i => notSpecial(i) && i.price >= 12000, power: 0.85 },
  { id: 'case_knife', name: 'Ножевой кейс', crate: 'Huntsman Weapon Case', color: '#ffd259',
    desc: 'Только ★ ножи и перчатки.',
    filter: i => i.rarity === 'special', power: 0.9 }
];

export const CASES = CASE_DEFS.map(d => {
  const pool = makePool(d.filter, d.power);
  return { id: d.id, name: d.name, color: d.color, desc: d.desc, img: CRATE_IMAGES[d.crate] || null, pool, price: priceFor(pool) };
});

export const CASE_BY_ID = Object.fromEntries(CASES.map(c => [c.id, c]));

// Настройки игры
export const CONFIG = {
  startBalance: 12000,
  upgradeRTP: 0.92,          // доля ставки, возвращаемая игроку на дистанции
  caseRTP: 0.90,
  minChance: 5,              // %
  maxChance: 95,             // %
  sellRatio: 1,              // продажа по полной цене (симулятор)
  consolationChance: 0.25,   // шанс утешительного приза при проигрыше
  consolationRatio: 0.10,    // стоимость приза относительно ставки
  dailyBonus: 6000,
  dailyStreakBonus: 1500,
  demoCredit: 12000,
  demoCreditMinBalance: 1000,
  demoCreditCooldownMs: 10 * 60 * 1000,
  maxHistory: 40,
  storageKey: 'upgrader-sim-save-v2'
};
