// Каталог комплектующих. Цены — в рублях, «perf» — условные очки производительности.
// lvl — уровень мастерской, с которого деталь появляется в магазине (считается по цене).

export const TYPES = {
  cpu: { name: 'Процессоры', one: 'Процессор' },
  mb: { name: 'Материнские платы', one: 'Материнская плата' },
  ram: { name: 'Оперативная память', one: 'Оперативная память' },
  gpu: { name: 'Видеокарты', one: 'Видеокарта' },
  storage: { name: 'Накопители', one: 'Накопитель' },
  psu: { name: 'Блоки питания', one: 'Блок питания' },
  cooler: { name: 'Охлаждение', one: 'Кулер' },
  case: { name: 'Корпуса', one: 'Корпус' },
  fan: { name: 'Вентиляторы', one: 'Вентилятор' }
};
export const TYPE_ORDER = ['cpu', 'mb', 'ram', 'gpu', 'storage', 'psu', 'cooler', 'case', 'fan'];

const P = [];
const LVL = {
  cpu: [12000, 22000, 35000, 55000], mb: [12000, 22000, 35000, 55000], gpu: [25000, 45000, 75000, 140000],
  psu: [6000, 9000, 14000], ram: [4000, 6500, 10000], storage: [5000, 9000, 17000],
  cooler: [3000, 6000, 10000], case: [5000, 9000, 13000], fan: [2000]
};
const lvlFor = (type, price) => 1 + LVL[type].filter(t => price >= t).length;
const add = (type, list) => list.forEach(p => P.push({ type, lvl: lvlFor(type, p.price), ...p }));

// ── Процессоры ──────────────────────────────────────────────────────────────
// ipc — условная «скорость ядра» архитектуры, igpu — мощность встроенной графики (0 — нет)
const cpu = (id, name, socket, cores, threads, boost, tdp, ipc, igpu, price, note = '') =>
  ({ id, name, socket, cores, threads, boost, tdp, ipc, igpu, price, note, perf: Math.round(170 * ipc * boost * Math.pow(Math.min(cores, 16), 0.42)) });
add('cpu', [
  // AMD — APU со встроенной графикой
  cpu('r3-3200g', 'AMD Ryzen 3 3200G', 'AM4', 4, 4, 4.0, 65, 0.78, 300, 5500, 'Народный чип для офиса и простых игр'),
  cpu('r5-4600g', 'AMD Ryzen 5 4600G', 'AM4', 6, 12, 4.2, 65, 0.88, 350, 7500, 'Доступные 6 ядер со встроенной графикой'),
  cpu('r5-5600g', 'AMD Ryzen 5 5600G', 'AM4', 6, 12, 4.4, 65, 0.95, 400, 9800, 'Лучший APU на Zen 3'),
  cpu('r5-8500g', 'AMD Ryzen 5 8500G', 'AM5', 6, 12, 5.0, 65, 1.05, 500, 14500, 'Встройка Radeon 740M'),
  cpu('r5-8600g', 'AMD Ryzen 5 8600G', 'AM5', 6, 12, 5.0, 65, 1.1, 700, 18500, 'Мощная встройка Radeon 760M'),
  // AM4
  cpu('r5-3600', 'AMD Ryzen 5 3600', 'AM4', 6, 12, 4.2, 65, 0.88, 0, 6500, 'Легендарный бюджетный чип'),
  cpu('r5-5500', 'AMD Ryzen 5 5500', 'AM4', 6, 12, 4.2, 65, 0.95, 0, 7200, 'Без PCIe 4.0'),
  cpu('r5-5600', 'AMD Ryzen 5 5600', 'AM4', 6, 12, 4.4, 65, 1.0, 0, 9500, 'Лучший по цене/качеству'),
  cpu('r5-5600x', 'AMD Ryzen 5 5600X', 'AM4', 6, 12, 4.6, 65, 1.0, 0, 10500, 'Отобранные кристаллы'),
  cpu('r7-5700x', 'AMD Ryzen 7 5700X', 'AM4', 8, 16, 4.6, 65, 1.0, 0, 14000, '8 ядер при 65 Вт'),
  cpu('r7-5700x3d', 'AMD Ryzen 7 5700X3D', 'AM4', 8, 16, 4.1, 105, 1.18, 0, 17500, '3D V-Cache для AM4'),
  cpu('r7-5800x3d', 'AMD Ryzen 7 5800X3D', 'AM4', 8, 16, 4.5, 105, 1.18, 0, 27000, 'Легендарный игровой чип'),
  cpu('r9-5900x', 'AMD Ryzen 9 5900X', 'AM4', 12, 24, 4.8, 105, 1.0, 0, 24500, 'Многопоток для AM4'),
  // AM5
  cpu('r5-7500f', 'AMD Ryzen 5 7500F', 'AM5', 6, 12, 5.0, 65, 1.15, 0, 13500, 'Без видеоядра, топ за свои деньги'),
  cpu('r5-7600', 'AMD Ryzen 5 7600', 'AM5', 6, 12, 5.1, 65, 1.15, 200, 16000, 'Есть базовое видеоядро'),
  cpu('r5-7600x', 'AMD Ryzen 5 7600X', 'AM5', 6, 12, 5.3, 105, 1.15, 200, 18500, 'Повышенные частоты'),
  cpu('r5-9600x', 'AMD Ryzen 5 9600X', 'AM5', 6, 12, 5.4, 65, 1.25, 200, 24000, 'Архитектура Zen 5'),
  cpu('r7-9700x', 'AMD Ryzen 7 9700X', 'AM5', 8, 16, 5.5, 65, 1.25, 200, 33000, 'Zen 5, 8 ядер'),
  cpu('r7-7800x3d', 'AMD Ryzen 7 7800X3D', 'AM5', 8, 16, 5.0, 120, 1.4, 200, 43000, 'Главный хит для геймеров'),
  cpu('r7-9800x3d', 'AMD Ryzen 7 9800X3D', 'AM5', 8, 16, 5.2, 120, 1.55, 200, 55000, 'Игровой флагман Zen 5 с 3D-кэшем'),
  cpu('r9-7900x', 'AMD Ryzen 9 7900X', 'AM5', 12, 24, 5.6, 170, 1.15, 200, 34000, 'Баланс работы и игр'),
  cpu('r9-9900x', 'AMD Ryzen 9 9900X', 'AM5', 12, 24, 5.6, 120, 1.25, 200, 44000, 'Zen 5, 12 ядер'),
  cpu('r9-7950x', 'AMD Ryzen 9 7950X', 'AM5', 16, 32, 5.7, 170, 1.15, 200, 46000, 'Флагман для тяжёлого софта'),
  cpu('r9-7950x3d', 'AMD Ryzen 9 7950X3D', 'AM5', 16, 32, 5.7, 120, 1.35, 200, 54000, 'Половина ядер с 3D-кэшем'),
  cpu('r9-9950x', 'AMD Ryzen 9 9950X', 'AM5', 16, 32, 5.7, 170, 1.25, 200, 59000, 'Максимум для рабочих станций'),
  // Intel LGA1700
  cpu('i3-12100f', 'Intel Core i3-12100F', 'LGA1700', 4, 8, 4.3, 58, 1.05, 0, 6500, 'Популярный бюджетный без видеоядра'),
  cpu('i3-12100', 'Intel Core i3-12100', 'LGA1700', 4, 8, 4.3, 60, 1.05, 200, 8500, 'С графикой Intel UHD 730'),
  cpu('i3-13100f', 'Intel Core i3-13100F', 'LGA1700', 4, 8, 4.5, 58, 1.08, 0, 7800, 'Обновлённый 12100F'),
  cpu('i3-14100f', 'Intel Core i3-14100F', 'LGA1700', 4, 8, 4.7, 58, 1.1, 0, 9200, 'Начальный игровой уровень'),
  cpu('i5-12400f', 'Intel Core i5-12400F', 'LGA1700', 6, 12, 4.4, 65, 1.05, 0, 10500, 'Народный игровой'),
  cpu('i5-12400', 'Intel Core i5-12400', 'LGA1700', 6, 12, 4.4, 65, 1.05, 200, 12500, 'С видеоядром'),
  cpu('i5-13400f', 'Intel Core i5-13400F', 'LGA1700', 10, 16, 4.6, 65, 1.08, 0, 14500, '6P + 4E ядер'),
  cpu('i5-14400f', 'Intel Core i5-14400F', 'LGA1700', 10, 16, 4.7, 65, 1.1, 0, 16500, '6P + 4E ядер'),
  cpu('i5-13600kf', 'Intel Core i5-13600KF', 'LGA1700', 14, 20, 5.1, 125, 1.12, 0, 24500, 'Отличный чип под разгон'),
  cpu('i5-14600kf', 'Intel Core i5-14600KF', 'LGA1700', 14, 20, 5.3, 125, 1.12, 0, 26500, '6P + 8E ядер'),
  cpu('i7-12700f', 'Intel Core i7-12700F', 'LGA1700', 12, 20, 4.9, 65, 1.05, 0, 21000, '8P + 4E ядер'),
  cpu('i7-13700kf', 'Intel Core i7-13700KF', 'LGA1700', 16, 24, 5.4, 150, 1.12, 0, 32000, '8P + 8E ядер'),
  cpu('i7-14700kf', 'Intel Core i7-14700KF', 'LGA1700', 20, 28, 5.6, 160, 1.12, 0, 36500, '8P + 12E ядер'),
  cpu('i9-12900kf', 'Intel Core i9-12900KF', 'LGA1700', 16, 24, 5.2, 150, 1.05, 0, 29000, 'Флагман 12-го поколения'),
  cpu('i9-13900kf', 'Intel Core i9-13900KF', 'LGA1700', 24, 32, 5.8, 190, 1.12, 0, 44000, 'Нужна СЖО'),
  cpu('i9-14900kf', 'Intel Core i9-14900KF', 'LGA1700', 24, 32, 6.0, 200, 1.12, 0, 49000, 'Нужна СЖО'),
  cpu('i9-14900ks', 'Intel Core i9-14900KS', 'LGA1700', 24, 32, 6.2, 220, 1.13, 200, 64000, 'Отобранный кремний, экстремальный чип'),
  // Intel LGA1851
  cpu('u5-245kf', 'Intel Core Ultra 5 245KF', 'LGA1851', 14, 14, 5.2, 125, 1.15, 0, 27000, 'Холодный и эффективный'),
  cpu('u7-265kf', 'Intel Core Ultra 7 265KF', 'LGA1851', 20, 20, 5.5, 125, 1.15, 0, 41000, 'Игровой и рабочий'),
  cpu('u9-285k', 'Intel Core Ultra 9 285K', 'LGA1851', 24, 24, 5.7, 125, 1.16, 300, 62000, 'Флагман LGA1851')
]);

// ── Материнские платы ───────────────────────────────────────────────────────
function boardColors(name) {
  if (/ROG|Crosshair|Maximus/.test(name)) return { color: 0x161616, accent: 0x2b2b2b, glow: 0xff2040 };
  if (/TUF/.test(name)) return { color: 0x2a2a24, accent: 0x6a6040, glow: 0xffb000 };
  if (/Aorus|AORUS/.test(name)) return { color: 0x121212, accent: 0x3a3a3a, glow: 0xff7a00 };
  if (/Prime/.test(name)) return { color: 0x24282c, accent: 0xcfd3d6 };
  if (/MEG|Ace|Taichi/.test(name)) return { color: 0x141414, accent: 0x9c8250, glow: 0xffd070 };
  if (/Tomahawk|Mortar|Carbon/.test(name)) return { color: 0x1c1d20, accent: 0x6c7480 };
  if (/Biostar|Maxsun/.test(name)) return { color: 0x1a2a3a, accent: 0x40576e };
  return { color: 0x1e2226, accent: 0x50565e };
}
const mb = (id, name, socket, form, ram, ramSlots, m2, price) => ({ id, name, socket, form, ram, ramSlots, m2, price, chipset: (name.match(/\b([ABHXZ]\d{3}E?)/) || [])[1] || '', ...boardColors(name) });
add('mb', [
  // бюджет
  mb('h610m-e', 'MSI Pro H610M-E DDR4', 'LGA1700', 'mATX', 'DDR4', 2, 1, 6500),
  mb('h610m-h', 'GIGABYTE H610M H V2 DDR4', 'LGA1700', 'mATX', 'DDR4', 2, 1, 6800),
  mb('h610m-k', 'ASUS Prime H610M-K D4', 'LGA1700', 'mATX', 'DDR4', 2, 1, 7200),
  mb('h610m-hdv', 'ASRock H610M-HDV/M.2', 'LGA1700', 'mATX', 'DDR4', 2, 1, 7000),
  mb('h610mhp', 'Biostar H610MHP', 'LGA1700', 'mATX', 'DDR4', 2, 1, 6200),
  mb('a320m-h', 'GIGABYTE GA-A320M-H', 'AM4', 'mATX', 'DDR4', 2, 1, 5500),
  mb('a320m-k', 'ASUS Prime A320M-K', 'AM4', 'mATX', 'DDR4', 2, 1, 5800),
  mb('a520m-a', 'MSI A520M-A Pro', 'AM4', 'mATX', 'DDR4', 2, 1, 6300),
  mb('a520m-kv2', 'GIGABYTE A520M K V2', 'AM4', 'mATX', 'DDR4', 2, 1, 6500),
  mb('b450m-hdv', 'ASRock B450M-HDV R4.0', 'AM4', 'mATX', 'DDR4', 2, 1, 6700),
  mb('maxsun-a520m', 'Maxsun Challenger A520M', 'AM4', 'mATX', 'DDR4', 2, 1, 5900),
  mb('b450m-vdh', 'MSI B450M Pro-VDH Max', 'AM4', 'mATX', 'DDR4', 4, 1, 7800),
  // средний
  mb('b760m-ds3h', 'GIGABYTE B760M DS3H DDR4', 'LGA1700', 'mATX', 'DDR4', 4, 2, 11500),
  mb('b760m-p', 'MSI Pro B760M-P DDR4', 'LGA1700', 'mATX', 'DDR4', 4, 2, 11000),
  mb('b760m-a', 'ASUS Prime B760M-A WiFi D4', 'LGA1700', 'mATX', 'DDR4', 4, 2, 14500),
  mb('b760m-prors', 'ASRock B760M Pro RS', 'LGA1700', 'mATX', 'DDR5', 4, 2, 13200),
  mb('b760m-mortar', 'MSI MAG B760M Mortar WiFi', 'LGA1700', 'mATX', 'DDR5', 4, 2, 17800),
  mb('b760-gx', 'GIGABYTE B760 Gaming X AX', 'LGA1700', 'ATX', 'DDR5', 4, 2, 18500),
  mb('b760-tuf', 'ASUS TUF Gaming B760-Plus WiFi', 'LGA1700', 'ATX', 'DDR5', 4, 2, 19800),
  mb('b550m-ds3h', 'GIGABYTE B550M DS3H', 'AM4', 'mATX', 'DDR4', 4, 2, 10500),
  mb('b550-tmh', 'MSI MAG B550 Tomahawk', 'AM4', 'ATX', 'DDR4', 4, 2, 16000),
  mb('b550-tuf', 'ASUS TUF Gaming B550-Plus', 'AM4', 'ATX', 'DDR4', 4, 2, 15500),
  mb('b550-pro4', 'ASRock B550 Pro4', 'AM4', 'ATX', 'DDR4', 4, 2, 12800),
  mb('b650m-k', 'GIGABYTE B650M K', 'AM5', 'mATX', 'DDR5', 4, 2, 12500),
  mb('b650m-p', 'MSI Pro B650M-P', 'AM5', 'mATX', 'DDR5', 4, 2, 13800),
  mb('b650m-hdv', 'ASRock B650M-HDV/M.2', 'AM5', 'mATX', 'DDR5', 2, 2, 14200),
  mb('b650-gx', 'GIGABYTE B650 Gaming X AX', 'AM5', 'ATX', 'DDR5', 4, 2, 19500),
  // продвинутый
  mb('z790-tmh', 'MSI MAG Z790 Tomahawk WiFi', 'LGA1700', 'ATX', 'DDR5', 4, 2, 28500),
  mb('z790-elite', 'GIGABYTE Z790 Aorus Elite AX', 'LGA1700', 'ATX', 'DDR5', 4, 2, 29000),
  mb('z790-a', 'ASUS Prime Z790-A WiFi', 'LGA1700', 'ATX', 'DDR5', 4, 2, 31000),
  mb('z790-prors', 'ASRock Z790 Pro RS', 'LGA1700', 'ATX', 'DDR5', 4, 2, 22500),
  mb('z790-amax', 'MSI PRO Z790-A Max WiFi', 'LGA1700', 'ATX', 'DDR5', 4, 2, 26000),
  mb('z790-tuf', 'ASUS TUF Gaming Z790-Pro WiFi', 'LGA1700', 'ATX', 'DDR5', 4, 2, 32500),
  mb('b650-tmh', 'MSI MAG B650 Tomahawk WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 23000),
  mb('b650-tuf', 'ASUS TUF Gaming B650-Plus WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 22500),
  mb('b650-elite', 'GIGABYTE B650 Aorus Elite AX', 'AM5', 'ATX', 'DDR5', 4, 2, 24500),
  mb('b650-prors', 'ASRock B650 Pro RS', 'AM5', 'ATX', 'DDR5', 4, 2, 21000),
  mb('b650-strix', 'ASUS ROG Strix B650-A Gaming WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 27000),
  mb('x670e-carbon', 'MSI MPG X670E Carbon WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 39000),
  mb('x670-gx', 'GIGABYTE X670 Gaming X AX V2', 'AM5', 'ATX', 'DDR5', 4, 2, 28000),
  mb('x670-p', 'ASUS Prime X670-P WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 26500),
  // премиум
  mb('z790-strix-e', 'ASUS ROG Strix Z790-E Gaming WiFi II', 'LGA1700', 'ATX', 'DDR5', 4, 2, 48000),
  mb('z790-ace', 'MSI MEG Z790 Ace Max', 'LGA1700', 'ATX', 'DDR5', 4, 2, 65000),
  mb('z790-master', 'GIGABYTE Z790 Aorus Master X', 'LGA1700', 'ATX', 'DDR5', 4, 2, 58000),
  mb('z790-darkhero', 'ASUS ROG Maximus Z790 Dark Hero', 'LGA1700', 'ATX', 'DDR5', 4, 2, 75000),
  mb('z790-taichi', 'ASRock Z790 Taichi Lite', 'LGA1700', 'ATX', 'DDR5', 4, 2, 42000),
  mb('x670e-strix-e', 'ASUS ROG Strix X670E-E Gaming WiFi', 'AM5', 'ATX', 'DDR5', 4, 2, 49500),
  mb('x670e-ace', 'MSI MEG X670E Ace', 'AM5', 'ATX', 'DDR5', 4, 2, 68000),
  mb('x670e-master', 'GIGABYTE X670E Aorus Master', 'AM5', 'ATX', 'DDR5', 4, 2, 52000),
  mb('x670e-taichi', 'ASRock X670E Taichi', 'AM5', 'ATX', 'DDR5', 4, 2, 55000),
  mb('x670e-hero', 'ASUS ROG Crosshair X670E Hero', 'AM5', 'ATX', 'DDR5', 4, 2, 72000),
  mb('z790-apex', 'ASUS ROG Maximus Z790 Apex EnCore', 'LGA1700', 'ATX', 'DDR5', 2, 2, 82000),
  // LGA1851 для Core Ultra
  mb('b860m-a', 'MSI PRO B860M-A WiFi', 'LGA1851', 'mATX', 'DDR5', 4, 2, 14500),
  mb('b860-elite', 'GIGABYTE B860 Aorus Elite WiFi7', 'LGA1851', 'ATX', 'DDR5', 4, 2, 21000),
  mb('z890-tuf', 'ASUS TUF Gaming Z890-Plus WiFi', 'LGA1851', 'ATX', 'DDR5', 4, 2, 33000),
  mb('z890-tmh', 'MSI MAG Z890 Tomahawk WiFi', 'LGA1851', 'ATX', 'DDR5', 4, 2, 36000)
]);

// ── Оперативная память (одна планка) ────────────────────────────────────────
const ram = (id, name, type, gb, mhz, price, color, rgb = false) => ({ id, name, ram: type, gb, mhz, price, color, rgb });
add('ram', [
  ram('d4-4-2666', 'Samsung 4 ГБ DDR4-2666', 'DDR4', 4, 2666, 1200, 0x1f5c2e),
  ram('d4-8-3200c', 'Crucial 8 ГБ DDR4-3200', 'DDR4', 8, 3200, 1800, 0x1f5c2e),
  ram('d4-8-3200', 'Kingston FURY Beast 8 ГБ DDR4-3200', 'DDR4', 8, 3200, 2000, 0x111111),
  ram('d4-8-3600', 'Patriot Viper Steel 8 ГБ DDR4-3600', 'DDR4', 8, 3600, 2400, 0x55585c),
  ram('d4-16-3200', 'Kingston FURY Beast 16 ГБ DDR4-3200', 'DDR4', 16, 3200, 3600, 0x111111),
  ram('d4-16-lpx', 'Corsair Vengeance LPX 16 ГБ DDR4-3200', 'DDR4', 16, 3200, 3900, 0x1a1a1a),
  ram('d4-16-rgb', 'Kingston FURY Beast RGB 16 ГБ DDR4-3600', 'DDR4', 16, 3600, 4800, 0x151515, true),
  ram('d4-16-tz', 'G.Skill Trident Z RGB 16 ГБ DDR4-3600', 'DDR4', 16, 3600, 5200, 0x9a9a9a, true),
  ram('d4-32-3200', 'Kingston FURY Beast 32 ГБ DDR4-3200', 'DDR4', 32, 3200, 7000, 0x111111),
  ram('d4-32-rgb', 'Corsair Vengeance RGB Pro 32 ГБ DDR4-3600', 'DDR4', 32, 3600, 8200, 0x1a1a1a, true),
  ram('d5-8-4800', 'Kingston 8 ГБ DDR5-4800', 'DDR5', 8, 4800, 2600, 0x1f5c2e),
  ram('d5-16-5600', 'Crucial 16 ГБ DDR5-5600', 'DDR5', 16, 5600, 4200, 0x1f5c2e),
  ram('d5-16-6000', 'Kingston FURY Beast 16 ГБ DDR5-6000', 'DDR5', 16, 6000, 4800, 0x111111),
  ram('d5-16-flare', 'G.Skill Flare X5 16 ГБ DDR5-6000', 'DDR5', 16, 6000, 5000, 0x141414),
  ram('d5-16-lancer', 'ADATA XPG Lancer RGB 16 ГБ DDR5-6000', 'DDR5', 16, 6000, 5500, 0x202020, true),
  ram('d5-16-rgb', 'Kingston FURY Beast RGB 16 ГБ DDR5-6000', 'DDR5', 16, 6000, 5600, 0x151515, true),
  ram('d5-32-6000', 'Corsair Vengeance 32 ГБ DDR5-6000', 'DDR5', 32, 6000, 9500, 0x1a1a1a),
  ram('d5-32-tz5', 'G.Skill Trident Z5 RGB 32 ГБ DDR5-6400', 'DDR5', 32, 6400, 12000, 0xb0b0b0, true),
  ram('d5-32-dom', 'Corsair Dominator Titanium RGB 32 ГБ DDR5-7200', 'DDR5', 32, 7200, 16000, 0x2a2a2a, true)
]);

// ── Видеокарты (len — длина в метрах, slots — толщина, hpwr — разъём 12VHPWR) ─
const gpu = (id, name, len, slots, tdp, perf, pins, fans, price, color = 0x222222, extra = {}) => ({ id, name, len, slots, tdp, perf, pins, fans, price, color, ...extra });
add('gpu', [
  gpu('gt1030', 'MSI GeForce GT 1030 2 ГБ', 0.17, 1, 30, 400, 0, 1, 7500),
  gpu('gtx1650', 'ASUS GeForce GTX 1650 4 ГБ', 0.20, 2, 75, 900, 0, 2, 13500, 0x2b2b2b),
  gpu('rx6500xt', 'Sapphire Pulse RX 6500 XT 4 ГБ', 0.19, 2, 107, 1000, 1, 2, 14000, 0x1b1b1b, { accent: 0xd0202a }),
  gpu('gtx1660s', 'Gigabyte GTX 1660 SUPER 6 ГБ', 0.23, 2, 125, 1400, 1, 2, 17000, 0x303030),
  gpu('rtx2060', 'MSI GeForce RTX 2060 Ventus 6 ГБ', 0.23, 2, 160, 1800, 1, 2, 20000, 0x2a2a2a),
  gpu('rtx3050', 'Palit GeForce RTX 3050 StormX 8 ГБ', 0.17, 2, 130, 1500, 1, 1, 21000, 0x1c1c1c),
  gpu('rx6600', 'PowerColor RX 6600 Fighter 8 ГБ', 0.20, 2, 132, 1900, 1, 2, 22000, 0x1e1e1e, { accent: 0xd0202a }),
  gpu('rtx3060', 'ASUS DUAL RTX 3060 12 ГБ', 0.24, 2, 170, 2100, 1, 2, 27000, 0x3a3d42),
  gpu('rx7600', 'Sapphire Pulse RX 7600 8 ГБ', 0.24, 2, 165, 2300, 1, 2, 28000, 0x1b1b1b, { accent: 0xd0202a }),
  gpu('rtx4060', 'MSI GeForce RTX 4060 Ventus 2X 8 ГБ', 0.20, 2, 115, 2400, 1, 2, 31000, 0x262626),
  gpu('rtx5060', 'ASUS Dual GeForce RTX 5060 8 ГБ', 0.23, 2, 145, 2900, 1, 2, 36000, 0xd8d8d8),
  gpu('rtx4060ti', 'Gigabyte RTX 4060 Ti Gaming OC 8 ГБ', 0.28, 2, 160, 2800, 1, 3, 42000, 0x202020),
  gpu('rx7700xt', 'Sapphire Pulse RX 7700 XT 12 ГБ', 0.28, 2, 245, 3200, 1, 2, 45000, 0x1b1b1b, { accent: 0xd0202a }),
  gpu('rtx4070', 'MSI GeForce RTX 4070 Ventus 3X 12 ГБ', 0.31, 2, 200, 3500, 1, 3, 58000, 0x262626),
  gpu('rx7800xt', 'Sapphire Nitro+ RX 7800 XT 16 ГБ', 0.31, 3, 263, 3800, 1, 3, 60000, 0x2a2d33, { accent: 0x3a8cff }),
  gpu('rtx5070', 'Gigabyte RTX 5070 Windforce 12 ГБ', 0.29, 2, 250, 4300, 1, 3, 68000, 0x1c1c1c, { hpwr: true }),
  gpu('rtx4070s', 'ASUS TUF RTX 4070 SUPER 12 ГБ', 0.30, 3, 220, 4200, 1, 3, 72000, 0x3a3a34, { hpwr: true }),
  gpu('rx7900xt', 'PowerColor Hellhound RX 7900 XT 20 ГБ', 0.32, 3, 315, 5100, 1, 3, 90000, 0x15151a, { accent: 0x7a5cff }),
  gpu('rtx4070tis', 'MSI RTX 4070 Ti SUPER Gaming X Slim 16 ГБ', 0.31, 3, 285, 4900, 1, 3, 95000, 0x1a1a1a, { hpwr: true, accent: 0xff3030 }),
  gpu('rtx5070ti', 'Palit RTX 5070 Ti GamingPro 16 ГБ', 0.33, 3, 300, 5400, 1, 3, 105000, 0x202020, { hpwr: true }),
  gpu('rx7900xtx', 'Sapphire Nitro+ RX 7900 XTX 24 ГБ', 0.32, 3, 355, 6100, 1, 3, 125000, 0x2a2d33, { accent: 0x3a8cff }),
  gpu('rtx4080s', 'Gigabyte RTX 4080 SUPER Gaming OC 16 ГБ', 0.34, 3, 320, 6000, 1, 3, 130000, 0x1c1c1c, { hpwr: true }),
  gpu('rtx5080', 'ASUS Prime RTX 5080 16 ГБ', 0.30, 3, 360, 6500, 1, 3, 150000, 0x2c2f34, { hpwr: true }),
  gpu('rtx4090', 'ASUS ROG Strix RTX 4090 24 ГБ', 0.36, 3, 450, 7600, 1, 3, 230000, 0x111111, { hpwr: true, accent: 0xff2a6d }),
  gpu('rtx5090', 'MSI RTX 5090 Suprim 32 ГБ', 0.36, 3, 575, 9500, 1, 3, 340000, 0x1a1a1a, { hpwr: true, accent: 0xc0c0c0 })
]);

// ── Накопители ──────────────────────────────────────────────────────────────
const st = (id, name, kind, gb, speed, price) => ({ id, name, kind, gb, speed, price });
add('storage', [
  st('hdd-1t', 'Seagate BarraCuda 1 ТБ (HDD)', 'hdd', 1000, 1, 4200),
  st('hdd-2t', 'WD Blue 2 ТБ (HDD)', 'hdd', 2000, 1, 5800),
  st('hdd-4t', 'Seagate BarraCuda 4 ТБ (HDD)', 'hdd', 4000, 1, 9000),
  st('hdd-4t-red', 'WD Red Plus 4 ТБ (HDD)', 'hdd', 4000, 1, 11000),
  st('ssd-240', 'Kingston A400 240 ГБ (SATA SSD)', 'ssd', 240, 3, 1900),
  st('ssd-480', 'Kingston A400 480 ГБ (SATA SSD)', 'ssd', 480, 3, 2800),
  st('ssd-512', 'ADATA SU650 512 ГБ (SATA SSD)', 'ssd', 512, 3, 2700),
  st('ssd-500', 'Crucial MX500 500 ГБ (SATA SSD)', 'ssd', 500, 3, 4000),
  st('ssd-1t', 'Samsung 870 EVO 1 ТБ (SATA SSD)', 'ssd', 1000, 3, 8000),
  st('m2-500', 'Kingston NV2 500 ГБ (M.2 NVMe)', 'm2', 500, 5, 3000),
  st('m2-1t-adata', 'ADATA Legend 800 1 ТБ (M.2 NVMe)', 'm2', 1000, 6, 5500),
  st('m2-1t-nv3', 'Kingston NV3 1 ТБ (M.2 NVMe)', 'm2', 1000, 6, 5800),
  st('m2-1t-sn770', 'WD Black SN770 1 ТБ (M.2 NVMe)', 'm2', 1000, 7, 7000),
  st('m2-1t-980', 'Samsung 980 1 ТБ (M.2 NVMe)', 'm2', 1000, 6, 7500),
  st('m2-1t-990', 'Samsung 990 PRO 1 ТБ (M.2 NVMe)', 'm2', 1000, 9, 11000),
  st('m2-2t-sn850', 'WD Black SN850X 2 ТБ (M.2 NVMe)', 'm2', 2000, 9, 16000),
  st('m2-2t-990', 'Samsung 990 PRO 2 ТБ (M.2 NVMe)', 'm2', 2000, 9, 18000),
  st('m2-2t-t700', 'Crucial T700 2 ТБ (M.2 NVMe Gen5)', 'm2', 2000, 12, 25000)
]);

// ── Блоки питания (atx3 — есть кабель 12VHPWR для новых видеокарт) ──────────
const psu = (id, name, watt, cert, price, atx3 = false, modular = false) => ({ id, name, watt, cert, price, atx3, modular });
add('psu', [
  psu('pf500', 'Deepcool PF500', 500, '80 PLUS', 3800),
  psu('fsp500', 'FSP ATX-500PNR PRO', 500, 'без сертификата', 3500),
  psu('tps500', 'Chieftec Task TPS-500S', 500, '80 PLUS Bronze', 4300),
  psu('blacksir500', '1STPLAYER Black.Sir 500W', 500, '80 PLUS', 3200),
  psu('mwe550', 'Cooler Master MWE Bronze 550 V2', 550, '80 PLUS Bronze', 5600),
  psu('pk550d', 'Deepcool PK550D', 550, '80 PLUS Bronze', 4900),
  psu('xn052', 'Xilence Redwing XN052 500W', 500, 'офисный', 3000),
  psu('pk650d', 'Deepcool PK650D', 650, '80 PLUS Bronze', 5500),
  psu('mwe650', 'Cooler Master MWE Bronze 650 V2', 650, '80 PLUS Bronze', 6400),
  psu('bdf650', 'Chieftec Proton BDF-650C', 650, '80 PLUS Bronze', 6900, false, true),
  psu('ar75', '1STPLAYER AR 7.5 Armor', 750, '80 PLUS Gold', 7200),
  psu('pm750d', 'Deepcool PM750D', 750, '80 PLUS Gold', 8300),
  psu('gamma750', 'Montech Gamma II 750', 750, '80 PLUS Gold', 7800),
  psu('pps750', 'Chieftec Polaris PPS-750FC', 750, '80 PLUS Gold', 9200, false, true),
  psu('century750', 'Montech Century G5 750W', 750, '80 PLUS Gold', 9500, true, true),
  psu('pn750m', 'Deepcool PN750M', 750, '80 PLUS Gold', 10500, true, true),
  psu('a850gl', 'MSI MAG A850GL', 850, '80 PLUS Gold', 11800, true, true),
  psu('pps850', 'Chieftec Polaris 3.0 PPS-850FC', 850, '80 PLUS Gold', 12200, true, true),
  psu('gex850', 'Cougar GEX X2 850', 850, '80 PLUS Gold', 11500, true, true),
  psu('gf3-850', 'Thermaltake Toughpower GF3 850W', 850, '80 PLUS Gold', 13800, true, true),
  psu('pp12m850', 'be quiet! Pure Power 12 M 850W', 850, '80 PLUS Gold', 15500, true, true),
  psu('leadex7-850', 'Super Flower Leadex VII Gold 850W', 850, '80 PLUS Gold', 16500, true, true),
  psu('px1000g', 'Deepcool PX1000G', 1000, '80 PLUS Gold', 17000, true, true),
  psu('a1000g', 'MSI MPG A1000G PCIE5', 1000, '80 PLUS Gold', 18500, true, true),
  psu('titan1000', 'Montech Titan Gold 1000W', 1000, '80 PLUS Gold', 15200, true, true),
  psu('thor850', 'ASUS ROG Thor 850W Platinum II', 850, '80 PLUS Platinum', 26000, true, true),
  psu('gx1000', 'Seasonic Focus GX-1000 ATX 3.0', 1000, '80 PLUS Gold', 24000, true, true),
  psu('leadex6-1000', 'Super Flower Leadex VI Platinum 1000W', 1000, '80 PLUS Platinum', 22800, false, true)
]);

// ── Охлаждение процессора (height — высота башни в метрах, rad — размер радиатора СЖО) ─
const cool = (id, name, kind, tdpMax, price, color = 0x1a1a1a, extra = {}) => ({ id, name, kind, tdpMax, price, color, height: kind === 'box' ? 0.06 : kind.startsWith('aio') ? 0.055 : 0.155, rad: kind === 'aio240' ? 240 : kind === 'aio360' ? 360 : 0, ...extra });
add('cooler', [
  cool('wraith-stealth', 'AMD Wraith Stealth (боксовый)', 'box', 65, 800),
  cool('laminar', 'Intel Laminar RM1 (боксовый)', 'box', 65, 800),
  cool('wraith-prism', 'AMD Wraith Prism RGB (боксовый)', 'box', 105, 2500, 0x1a1a1a, { rgb: true }),
  cool('se214', 'ID-Cooling SE-214-XT', 'tower', 180, 1300),
  cool('ax120', 'Thermalright Assassin X 120 Refined SE', 'tower', 200, 1700, 0xb9bec4),
  cool('ag400', 'DeepCool AG400', 'tower', 190, 1900),
  cool('ak400', 'DeepCool AK400', 'tower', 220, 2600),
  cool('fz36', 'ARCTIC Freezer 36', 'tower', 210, 2800, 0x111111),
  cool('purerock2', 'be quiet! Pure Rock 2', 'tower', 150, 3600, 0x111111),
  cool('pa120', 'Thermalright Peerless Assassin 120 SE', 'tower2', 245, 3500, 0xb9bec4),
  cool('ps120', 'Thermalright Phantom Spirit 120 SE', 'tower2', 265, 3900, 0xb9bec4),
  cool('ak620', 'DeepCool AK620', 'tower2', 260, 5200, 0x111111, { height: 0.16 }),
  cool('nhu12s', 'Noctua NH-U12S', 'tower', 200, 7500, 0x8b6a52, { height: 0.158 }),
  cool('drp5', 'be quiet! Dark Rock Pro 5', 'tower2', 270, 9500, 0x111111, { height: 0.168 }),
  cool('nhd15', 'Noctua NH-D15', 'tower2', 260, 11000, 0x8b6a52, { height: 0.165 }),
  cool('nhd15g2', 'Noctua NH-D15 G2', 'tower2', 280, 14000, 0x8b6a52, { height: 0.168 }),
  cool('fx240', 'ID-Cooling FX240', 'aio240', 220, 4500),
  cool('le520', 'DeepCool LE520 240', 'aio240', 230, 5500, 0x111111, { rgb: true }),
  cool('lf3-240', 'ARCTIC Liquid Freezer III 240', 'aio240', 280, 7500),
  cool('ls720', 'DeepCool LS720 360', 'aio360', 300, 9500, 0x111111, { rgb: true }),
  cool('lf3-360', 'ARCTIC Liquid Freezer III 360', 'aio360', 320, 10000),
  cool('galahad360', 'Lian Li Galahad II Trinity 360', 'aio360', 320, 16000, 0xeeeeee, { rgb: true }),
  cool('kraken360', 'NZXT Kraken 360', 'aio360', 300, 18000, 0x111111, { rgb: true })
]);

// ── Корпуса (gpuMax — длина видеокарты, coolerMax — высота кулера, rad — макс. СЖО) ─
const cs = (id, name, form, gpuMax, coolerMax, rad, price, color, extra = {}) => ({ id, name, form, gpuMax, coolerMax, rad, price, color, frontMesh: false, ...extra });
add('case', [
  cs('matrexx30', 'Deepcool Matrexx 30', 'mATX', 0.25, 0.151, 0, 2700, 0x141414),
  cs('zalman-s2', 'Zalman S2', 'ATX', 0.31, 0.155, 0, 2900, 0x151515),
  cs('cylon', 'Aerocool Cylon', 'ATX', 0.37, 0.155, 240, 3300, 0x121212, { stripe: true }),
  cs('q300l', 'Cooler Master Q300L', 'mATX', 0.36, 0.157, 240, 3800, 0x1a1a1a, { frontMesh: true }),
  cs('mx330', 'Cougar MX330-G', 'ATX', 0.35, 0.155, 240, 4000, 0x161616),
  cs('i3neo', 'Zalman i3 Neo', 'ATX', 0.34, 0.16, 240, 4500, 0x111111, { frontMesh: true }),
  cs('cc560', 'Deepcool CC560', 'ATX', 0.37, 0.163, 360, 5200, 0x101010, { frontMesh: true }),
  cs('ch360', 'Deepcool CH360', 'mATX', 0.32, 0.155, 360, 6000, 0x101010, { frontMesh: true }),
  cs('d31', 'Jonsbo D31 Mesh', 'mATX', 0.40, 0.168, 240, 6500, 0xf0f0f0, { frontMesh: true }),
  cs('d41', 'Jonsbo D41 Mesh', 'ATX', 0.40, 0.17, 360, 7000, 0x111111, { frontMesh: true }),
  cs('h510', 'NZXT H510', 'ATX', 0.36, 0.165, 240, 7500, 0xf2f2f2),
  cs('air903', 'Montech AIR 903 MAX', 'ATX', 0.40, 0.18, 360, 7900, 0x111111, { frontMesh: true }),
  cs('ch560w', 'Deepcool CH560 White', 'ATX', 0.38, 0.175, 360, 8500, 0xeeeeee, { frontMesh: true }),
  cs('h5flow', 'NZXT H5 Flow', 'ATX', 0.365, 0.165, 360, 9000, 0xf2f2f2, { frontMesh: true }),
  cs('meshifyc', 'Fractal Design Meshify C', 'ATX', 0.315, 0.17, 360, 9500, 0x101010, { frontMesh: true }),
  cs('lancool216', 'Lian Li Lancool 216', 'ATX', 0.39, 0.18, 360, 9500, 0x121212, { frontMesh: true }),
  cs('4000d', 'Corsair 4000D Airflow', 'ATX', 0.36, 0.17, 360, 9800, 0x131313, { frontMesh: true }),
  cs('4000dw', 'Corsair 4000D Airflow White', 'ATX', 0.36, 0.17, 360, 10200, 0xefefef, { frontMesh: true }),
  cs('pb500dx', 'be quiet! Pure Base 500DX', 'ATX', 0.369, 0.19, 360, 11000, 0x111111, { frontMesh: true, stripe: true }),
  cs('north', 'Fractal Design North', 'ATX', 0.355, 0.17, 360, 13000, 0x1a1a1a, { wood: true }),
  cs('o11evo', 'Lian Li O11 Dynamic EVO', 'ATX', 0.42, 0.167, 360, 15000, 0xeaeaea),
  cs('y60', 'HYTE Y60', 'ATX', 0.375, 0.16, 360, 18000, 0xf4f4f4)
]);

// ── Корпусные вентиляторы ───────────────────────────────────────────────────
add('fan', [
  { id: 'p12', name: 'ARCTIC P12 120 мм', rgb: false, price: 900 },
  { id: 'fk120', name: 'DeepCool FK120', rgb: false, price: 1200 },
  { id: 'p12argb', name: 'ARCTIC P12 PWM PST A-RGB', rgb: true, price: 1300 },
  { id: 'pw3', name: 'be quiet! Pure Wings 3 120 мм', rgb: false, price: 1400 },
  { id: 'sp120', name: 'Corsair iCUE SP120 RGB', rgb: true, price: 2200 },
  { id: 'sl120', name: 'Lian Li UNI FAN SL120 V2 RGB', rgb: true, price: 3200 },
  { id: 'nfa12', name: 'Noctua NF-A12x25', rgb: false, price: 3500, color: 0x6b4a36 }
]);

export const PARTS = P;
export const PART = Object.fromEntries(P.map(p => [p.id, p]));

export const rub = n => Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ') + ' ₽';

/** Короткое описание характеристик для интерфейса. */
export function specLine(p) {
  switch (p.type) {
    case 'cpu': return `${p.socket} · ${p.cores} ядер / ${p.threads} потоков · до ${p.boost} ГГц · ${p.tdp} Вт${p.igpu ? ' · есть видеоядро' : ''}`;
    case 'mb': return `${p.socket} · ${p.form} · ${p.ram} ×${p.ramSlots} · M.2 ×${p.m2}`;
    case 'ram': return `${p.ram} · ${p.gb} ГБ · ${p.mhz} МГц${p.rgb ? ' · RGB' : ''}`;
    case 'gpu': return `${Math.round(p.len * 1000)} мм · ${p.tdp} Вт · ${p.hpwr ? 'разъём 12VHPWR' : p.pins ? 'доп. питание 8-pin' : 'без доп. питания'}`;
    case 'storage': return `${p.kind === 'hdd' ? 'HDD 3.5"' : p.kind === 'ssd' ? 'SSD 2.5" SATA' : 'M.2 NVMe'} · ${p.gb >= 1000 ? p.gb / 1000 + ' ТБ' : p.gb + ' ГБ'}`;
    case 'psu': return `${p.watt} Вт · ${p.cert}${p.atx3 ? ' · ATX 3.0 (12VHPWR)' : ''}${p.modular ? ' · модульный' : ''}`;
    case 'cooler': return `до ${p.tdpMax} Вт · ${p.kind === 'box' ? 'боксовый' : p.rad ? `СЖО ${p.rad} мм` : `башня ${Math.round(p.height * 1000)} мм`}`;
    case 'case': return `до ${p.form} · видеокарта до ${Math.round(p.gpuMax * 1000)} мм · кулер до ${Math.round(p.coolerMax * 1000)} мм${p.rad ? ` · СЖО до ${p.rad}` : ''}`;
    case 'fan': return `120 мм${p.rgb ? ' · RGB' : ''}`;
  }
  return '';
}
