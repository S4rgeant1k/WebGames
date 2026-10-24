// Каталог комплектующих. Цены — в долларах, «perf» — условные очки производительности.
// lvl — уровень мастерской, с которого деталь появляется в магазине.

export const TYPES = {
  case: { name: 'Корпуса', one: 'Корпус', icon: '🗄️' },
  mb: { name: 'Материнские платы', one: 'Материнская плата', icon: '🟩' },
  cpu: { name: 'Процессоры', one: 'Процессор', icon: '🔲' },
  cooler: { name: 'Охлаждение CPU', one: 'Кулер', icon: '❄️' },
  ram: { name: 'Оперативная память', one: 'Оперативная память', icon: '📏' },
  gpu: { name: 'Видеокарты', one: 'Видеокарта', icon: '🎮' },
  storage: { name: 'Накопители', one: 'Накопитель', icon: '💾' },
  psu: { name: 'Блоки питания', one: 'Блок питания', icon: '🔌' },
  fan: { name: 'Вентиляторы', one: 'Вентилятор', icon: '🌀' }
};
export const TYPE_ORDER = ['cpu', 'mb', 'ram', 'gpu', 'storage', 'psu', 'cooler', 'case', 'fan'];

const P = [];
const add = (type, list) => list.forEach(p => P.push({ type, lvl: 1, ...p }));

// ── Процессоры ──────────────────────────────────────────────────────────────
add('cpu', [
  { id: 'r3-3200g', name: 'AMD Ryzen 3 3200G', socket: 'AM4', cores: 4, ghz: 3.6, tdp: 65, perf: 750, igpu: true, price: 85 },
  { id: 'i3-10100', name: 'Intel Core i3-10100', socket: 'LGA1200', cores: 4, ghz: 3.6, tdp: 65, perf: 900, igpu: true, price: 95 },
  { id: 'r5-3600', name: 'AMD Ryzen 5 3600', socket: 'AM4', cores: 6, ghz: 3.6, tdp: 65, perf: 1300, igpu: false, price: 100 },
  { id: 'i5-10400f', name: 'Intel Core i5-10400F', socket: 'LGA1200', cores: 6, ghz: 2.9, tdp: 65, perf: 1250, igpu: false, price: 120 },
  { id: 'i5-12400f', name: 'Intel Core i5-12400F', socket: 'LGA1700', cores: 6, ghz: 2.5, tdp: 65, perf: 1700, igpu: false, price: 150, lvl: 2 },
  { id: 'r5-5600x', name: 'AMD Ryzen 5 5600X', socket: 'AM4', cores: 6, ghz: 3.7, tdp: 65, perf: 1800, igpu: false, price: 160, lvl: 2 },
  { id: 'r5-7600x', name: 'AMD Ryzen 5 7600X', socket: 'AM5', cores: 6, ghz: 4.7, tdp: 105, perf: 2300, igpu: true, price: 230, lvl: 3 },
  { id: 'i7-12700k', name: 'Intel Core i7-12700K', socket: 'LGA1700', cores: 12, ghz: 3.6, tdp: 125, perf: 2600, igpu: true, price: 300, lvl: 3 },
  { id: 'r7-5800x3d', name: 'AMD Ryzen 7 5800X3D', socket: 'AM4', cores: 8, ghz: 3.4, tdp: 105, perf: 2400, igpu: false, price: 320, lvl: 3 },
  { id: 'i9-13900k', name: 'Intel Core i9-13900K', socket: 'LGA1700', cores: 24, ghz: 3.0, tdp: 170, perf: 3800, igpu: true, price: 560, lvl: 4 },
  { id: 'r9-7950x', name: 'AMD Ryzen 9 7950X', socket: 'AM5', cores: 16, ghz: 4.5, tdp: 170, perf: 4000, igpu: true, price: 580, lvl: 4 }
]);

// ── Материнские платы ───────────────────────────────────────────────────────
add('mb', [
  { id: 'a320m', name: 'ASRock A320M-HDV', socket: 'AM4', form: 'mATX', ram: 'DDR4', ramSlots: 2, m2: 1, price: 55, color: 0x1d2a1f },
  { id: 'h410m', name: 'ASUS PRIME H410M-E', socket: 'LGA1200', form: 'mATX', ram: 'DDR4', ramSlots: 2, m2: 1, price: 75, color: 0x1e3a2c },
  { id: 'b450-tmh', name: 'MSI B450 TOMAHAWK MAX', socket: 'AM4', form: 'ATX', ram: 'DDR4', ramSlots: 4, m2: 1, price: 110, color: 0x1a1a1a },
  { id: 'b560-tmh', name: 'MSI MAG B560 TOMAHAWK', socket: 'LGA1200', form: 'ATX', ram: 'DDR4', ramSlots: 4, m2: 2, price: 140, color: 0x202020 },
  { id: 'b660m', name: 'Gigabyte B660M DS3H', socket: 'LGA1700', form: 'mATX', ram: 'DDR4', ramSlots: 4, m2: 1, price: 110, color: 0x22262a, lvl: 2 },
  { id: 'b550i', name: 'ASUS ROG STRIX B550-I', socket: 'AM4', form: 'ITX', ram: 'DDR4', ramSlots: 2, m2: 1, price: 190, color: 0x141414, lvl: 2 },
  { id: 'b650-elite', name: 'Gigabyte B650 AORUS ELITE', socket: 'AM5', form: 'ATX', ram: 'DDR5', ramSlots: 4, m2: 2, price: 220, color: 0x161a20, lvl: 3 },
  { id: 'z690-a', name: 'ASUS ROG STRIX Z690-A', socket: 'LGA1700', form: 'ATX', ram: 'DDR5', ramSlots: 4, m2: 2, price: 300, color: 0x2a2d33, lvl: 3 },
  { id: 'x670e-hero', name: 'ASUS ROG CROSSHAIR X670E HERO', socket: 'AM5', form: 'ATX', ram: 'DDR5', ramSlots: 4, m2: 2, price: 450, color: 0x0f0f12, lvl: 4 }
]);

// ── Оперативная память (одна планка) ────────────────────────────────────────
add('ram', [
  { id: 'ram-4-d4', name: 'Samsung 4 ГБ DDR4-2400', ram: 'DDR4', gb: 4, mhz: 2400, price: 14, color: 0x1f5c2e, rgb: false },
  { id: 'ram-8-d4', name: 'Kingston FURY Beast 8 ГБ DDR4-3200', ram: 'DDR4', gb: 8, mhz: 3200, price: 25, color: 0x111111, rgb: false },
  { id: 'ram-16-d4', name: 'Corsair Vengeance LPX 16 ГБ DDR4-3200', ram: 'DDR4', gb: 16, mhz: 3200, price: 45, color: 0x1a1a1a, rgb: false },
  { id: 'ram-16-d4rgb', name: 'G.Skill Trident Z RGB 16 ГБ DDR4-3600', ram: 'DDR4', gb: 16, mhz: 3600, price: 60, color: 0x9a9a9a, rgb: true, lvl: 2 },
  { id: 'ram-16-d5', name: 'Kingston FURY Beast 16 ГБ DDR5-5600', ram: 'DDR5', gb: 16, mhz: 5600, price: 60, color: 0x151515, rgb: false, lvl: 3 },
  { id: 'ram-32-d5rgb', name: 'Corsair Dominator RGB 32 ГБ DDR5-6000', ram: 'DDR5', gb: 32, mhz: 6000, price: 130, color: 0xb0b0b0, rgb: true, lvl: 3 }
]);

// ── Видеокарты (len — длина в метрах, slots — толщина) ──────────────────────
add('gpu', [
  { id: 'gt1030', name: 'MSI GeForce GT 1030', len: 0.17, slots: 1, tdp: 30, perf: 400, pins: 0, fans: 1, price: 80, color: 0x222222 },
  { id: 'gtx1650', name: 'ASUS GeForce GTX 1650', len: 0.20, slots: 2, tdp: 75, perf: 900, pins: 0, fans: 2, price: 150, color: 0x2b2b2b },
  { id: 'gtx1660s', name: 'Gigabyte GTX 1660 SUPER', len: 0.23, slots: 2, tdp: 125, perf: 1400, pins: 1, fans: 2, price: 220, color: 0x303030 },
  { id: 'rtx2060', name: 'NVIDIA GeForce RTX 2060', len: 0.23, slots: 2, tdp: 160, perf: 1900, pins: 1, fans: 2, price: 280, color: 0x1c1c1c, lvl: 2 },
  { id: 'rtx3060', name: 'ASUS DUAL RTX 3060 12 ГБ', len: 0.24, slots: 2, tdp: 170, perf: 2300, pins: 1, fans: 2, price: 330, color: 0x3a3d42, lvl: 2 },
  { id: 'rx6700xt', name: 'Sapphire Pulse RX 6700 XT', len: 0.27, slots: 2, tdp: 230, perf: 3000, pins: 1, fans: 2, price: 380, color: 0x1b1b1b, accent: 0xd0202a, lvl: 3 },
  { id: 'rtx4070', name: 'MSI RTX 4070 VENTUS 3X', len: 0.27, slots: 2, tdp: 200, perf: 4000, pins: 1, fans: 3, price: 600, color: 0x262626, lvl: 3 },
  { id: 'rtx3080', name: 'EVGA RTX 3080 FTW3', len: 0.30, slots: 3, tdp: 320, perf: 4200, pins: 1, fans: 3, price: 700, color: 0x141414, lvl: 4 },
  { id: 'rtx4090', name: 'ASUS ROG STRIX RTX 4090', len: 0.33, slots: 3, tdp: 450, perf: 7000, pins: 1, fans: 3, price: 1600, color: 0x111111, accent: 0xff2a6d, lvl: 5 }
]);

// ── Накопители ──────────────────────────────────────────────────────────────
add('storage', [
  { id: 'hdd-1t', name: 'Seagate BarraCuda 1 ТБ (HDD)', kind: 'hdd', gb: 1000, speed: 1, price: 45 },
  { id: 'ssd-480', name: 'Kingston A400 480 ГБ (SATA SSD)', kind: 'ssd', gb: 480, speed: 3, price: 35 },
  { id: 'hdd-2t', name: 'WD Blue 2 ТБ (HDD)', kind: 'hdd', gb: 2000, speed: 1, price: 60 },
  { id: 'm2-500', name: 'Samsung 980 500 ГБ (M.2 NVMe)', kind: 'm2', gb: 500, speed: 6, price: 55 },
  { id: 'ssd-1t', name: 'Samsung 870 EVO 1 ТБ (SATA SSD)', kind: 'ssd', gb: 1000, speed: 3, price: 90, lvl: 2 },
  { id: 'm2-2t', name: 'Samsung 990 PRO 2 ТБ (M.2 NVMe)', kind: 'm2', gb: 2000, speed: 9, price: 170, lvl: 3 }
]);

// ── Блоки питания ───────────────────────────────────────────────────────────
add('psu', [
  { id: 'psu-400', name: 'AeroCool VX-400 400 Вт', watt: 400, price: 30 },
  { id: 'psu-550', name: 'be quiet! System Power 10 550 Вт', watt: 550, price: 60 },
  { id: 'psu-750', name: 'Corsair RM750e 750 Вт', watt: 750, price: 100, lvl: 2 },
  { id: 'psu-1000', name: 'Seasonic FOCUS GX-1000 1000 Вт', watt: 1000, price: 190, lvl: 4 }
]);

// ── Охлаждение процессора ───────────────────────────────────────────────────
add('cooler', [
  { id: 'cool-box', name: 'Боксовый кулер (стандартный)', kind: 'box', tdpMax: 65, price: 15 },
  { id: 'cool-ak400', name: 'DeepCool AK400', kind: 'tower', tdpMax: 180, price: 35, color: 0x1a1a1a },
  { id: 'cool-af34', name: 'ARCTIC Freezer 34 eSports', kind: 'tower', tdpMax: 150, price: 30, color: 0xdddddd, lvl: 1 },
  { id: 'cool-nhd15', name: 'Noctua NH-D15', kind: 'tower2', tdpMax: 250, price: 100, color: 0x8b6a52, lvl: 3 }
]);

// ── Корпуса ─────────────────────────────────────────────────────────────────
add('case', [
  { id: 'case-q300l', name: 'Cooler Master Q300L', form: 'mATX', gpuMax: 0.36, price: 45, color: 0x1a1a1a, frontMesh: true },
  { id: 'case-s2', name: 'Zalman S2', form: 'ATX', gpuMax: 0.31, price: 45, color: 0x151515, frontMesh: false },
  { id: 'case-h510', name: 'NZXT H510', form: 'ATX', gpuMax: 0.36, price: 80, color: 0xf2f2f2, frontMesh: false },
  { id: 'case-meshify', name: 'Fractal Design Meshify C', form: 'ATX', gpuMax: 0.31, price: 95, color: 0x101010, frontMesh: true, lvl: 2 },
  { id: 'case-o11', name: 'Lian Li O11 Dynamic', form: 'ATX', gpuMax: 0.42, price: 150, color: 0xeaeaea, frontMesh: false, lvl: 3 }
]);

// ── Корпусные вентиляторы ───────────────────────────────────────────────────
add('fan', [
  { id: 'fan-p12', name: 'ARCTIC P12 120 мм', rgb: false, price: 8 },
  { id: 'fan-rgb', name: 'Corsair iCUE SP120 RGB', rgb: true, price: 25 }
]);

export const PARTS = P;
export const PART = Object.fromEntries(P.map(p => [p.id, p]));

/** Короткое описание характеристик для интерфейса. */
export function specLine(p) {
  switch (p.type) {
    case 'cpu': return `${p.socket} · ${p.cores} ядер · ${p.ghz} ГГц · ${p.tdp} Вт${p.igpu ? ' · встроенная графика' : ''}`;
    case 'mb': return `${p.socket} · ${p.form} · ${p.ram} ×${p.ramSlots} · M.2 ×${p.m2}`;
    case 'ram': return `${p.ram} · ${p.gb} ГБ · ${p.mhz} МГц${p.rgb ? ' · RGB' : ''}`;
    case 'gpu': return `мощность ${p.perf} · ${p.tdp} Вт · ${Math.round(p.len * 1000)} мм${p.pins ? ' · доп. питание' : ''}`;
    case 'storage': return `${p.kind === 'hdd' ? 'HDD 3.5"' : p.kind === 'ssd' ? 'SSD 2.5" SATA' : 'M.2 NVMe'} · ${p.gb >= 1000 ? p.gb / 1000 + ' ТБ' : p.gb + ' ГБ'}`;
    case 'psu': return `${p.watt} Вт · ATX`;
    case 'cooler': return `до ${p.tdpMax} Вт · ${p.kind === 'box' ? 'низкопрофильный' : 'башенный'}`;
    case 'case': return `до ${p.form} · видеокарта до ${Math.round(p.gpuMax * 1000)} мм`;
    case 'fan': return `120 мм${p.rgb ? ' · RGB' : ''}`;
  }
  return '';
}
