// Чистая логика сборки: совместимость, установка/снятие, кабели, включение, тест.
// Ничего не знает про 3D и DOM — поэтому покрыта тестами.

import { PART } from './parts.js';

export const FORM_FITS = { ATX: ['ATX', 'mATX', 'ITX'], mATX: ['mATX', 'ITX'], ITX: ['ITX'] };

/** Все возможные слоты стенда и какой тип детали в них ставится. */
export const SLOT_DEFS = {
  case: { type: 'case', label: 'Корпус' },
  mb: { type: 'mb', label: 'Материнская плата' },
  cpu: { type: 'cpu', label: 'Сокет процессора' },
  cooler: { type: 'cooler', label: 'Крепление кулера' },
  ram0: { type: 'ram', label: 'Слот ОЗУ 1' },
  ram1: { type: 'ram', label: 'Слот ОЗУ 2' },
  ram2: { type: 'ram', label: 'Слот ОЗУ 3' },
  ram3: { type: 'ram', label: 'Слот ОЗУ 4' },
  gpu: { type: 'gpu', label: 'Слот PCIe x16' },
  m2_0: { type: 'storage', kind: 'm2', label: 'Слот M.2 №1' },
  m2_1: { type: 'storage', kind: 'm2', label: 'Слот M.2 №2' },
  sata0: { type: 'storage', kind: 'ssd', label: 'Отсек 2.5" №1' },
  sata1: { type: 'storage', kind: 'ssd', label: 'Отсек 2.5" №2' },
  hdd0: { type: 'storage', kind: 'hdd', label: 'Отсек 3.5"' },
  psu: { type: 'psu', label: 'Отсек блока питания' },
  fanF0: { type: 'fan', label: 'Передний вентилятор 1' },
  fanF1: { type: 'fan', label: 'Передний вентилятор 2' },
  fanR0: { type: 'fan', label: 'Задний вентилятор' }
};
export const SLOT_NAMES = Object.keys(SLOT_DEFS);

export const emptyBuild = () => ({ slots: {}, cables: {} });
export const partOf = item => item ? PART[item.pid] : null;
const get = (b, s) => partOf(b.slots[s]);

/** Слоты, которые сейчас физически существуют (зависит от корпуса и платы). */
export function availableSlots(b) {
  if (!b.slots.case) return ['case'];
  const out = ['case', 'mb', 'psu', 'sata0', 'sata1', 'hdd0', 'fanF0', 'fanF1', 'fanR0'];
  const mb = get(b, 'mb');
  if (mb) {
    out.push('cpu', 'gpu');
    for (let i = 0; i < mb.ramSlots; i++) out.push('ram' + i);
    for (let i = 0; i < mb.m2; i++) out.push('m2_' + i);
    if (b.slots.cpu) out.push('cooler');
  }
  return out;
}

/** Можно ли поставить деталь item в слот slot. */
export function canInstall(b, item, slot) {
  const p = partOf(item);
  const def = SLOT_DEFS[slot];
  if (!p || !def) return { ok: false, reason: 'Неизвестная деталь' };
  if (def.type !== p.type) return { ok: false, reason: 'Сюда ставится другая деталь' };
  if (def.kind && def.kind !== p.kind) {
    return { ok: false, reason: def.kind === 'm2' ? 'Это не M.2 накопитель' : def.kind === 'hdd' ? 'Отсек только для 3.5" HDD' : 'Отсек только для 2.5" SSD' };
  }
  if (b.slots[slot]) return { ok: false, reason: 'Слот занят' };
  if (!availableSlots(b).includes(slot)) {
    if (slot === 'cooler') return { ok: false, reason: 'Сначала установите процессор' };
    if (slot !== 'case' && !b.slots.case) return { ok: false, reason: 'Сначала поставьте корпус' };
    return { ok: false, reason: 'Сначала установите материнскую плату' };
  }
  const cs = get(b, 'case'), mb = get(b, 'mb'), cpu = get(b, 'cpu');
  switch (p.type) {
    case 'mb':
      if (!FORM_FITS[cs.form].includes(p.form)) return { ok: false, reason: `Плата ${p.form} не влезет в корпус ${cs.form}` };
      break;
    case 'cpu':
      if (p.socket !== mb.socket) return { ok: false, reason: `Сокет ${p.socket} ≠ ${mb.socket} у платы` };
      break;
    case 'ram':
      if (p.ram !== mb.ram) return { ok: false, reason: `Плата поддерживает только ${mb.ram}` };
      break;
    case 'gpu':
      if (p.len > cs.gpuMax) return { ok: false, reason: `Видеокарта ${Math.round(p.len * 1000)} мм длиннее допустимой ${Math.round(cs.gpuMax * 1000)} мм` };
      break;
    case 'cooler':
      if (!cpu) return { ok: false, reason: 'Сначала установите процессор' };
      break;
  }
  return { ok: true };
}

/** Какие слоты подходят для детали (с причиной, если нет). */
export function slotsForItem(b, item) {
  const p = partOf(item);
  if (!p) return [];
  return SLOT_NAMES
    .filter(s => SLOT_DEFS[s].type === p.type && (!SLOT_DEFS[s].kind || SLOT_DEFS[s].kind === p.kind))
    .filter(s => !b.slots[s])
    .filter(s => availableSlots(b).includes(s) || (s === 'cooler' && b.slots.mb))
    .map(s => ({ slot: s, ...canInstall(b, item, s) }));
}

const DEPENDENTS = {
  case: SLOT_NAMES.filter(s => s !== 'case'),
  mb: ['cpu', 'cooler', 'ram0', 'ram1', 'ram2', 'ram3', 'gpu', 'm2_0', 'm2_1'],
  cpu: ['cooler']
};

export function canRemove(b, slot) {
  if (!b.slots[slot]) return { ok: false, reason: 'Слот пуст' };
  const blockers = (DEPENDENTS[slot] || []).filter(s => b.slots[s]);
  if (blockers.length) {
    const p = get(b, blockers[blockers.length - 1]);
    return { ok: false, reason: `Сначала снимите: ${p ? p.name : SLOT_DEFS[blockers[0]].label}` };
  }
  return { ok: true };
}

export function install(b, item, slot) {
  const r = canInstall(b, item, slot);
  if (!r.ok) return r;
  b.slots[slot] = item;
  return { ok: true };
}

export function remove(b, slot) {
  const r = canRemove(b, slot);
  if (!r.ok) return r;
  const item = b.slots[slot];
  delete b.slots[slot];
  for (const c of cableIds(b, true)) if (!cablePossible(b, c)) delete b.cables[c];
  if (slot === 'psu') b.cables = {};
  return { ok: true, item };
}

// ── Кабели ──────────────────────────────────────────────────────────────────
export const CABLE_LABELS = {
  mb24: '24-pin питание платы', cpu8: '8-pin питание процессора', gpu: 'Питание видеокарты',
  sata0: 'SATA к SSD №1', sata1: 'SATA к SSD №2', hdd0: 'SATA к HDD'
};

function cablePossible(b, id) {
  if (id === 'mb24' || id === 'cpu8') return !!b.slots.mb;
  if (id === 'gpu') return !!get(b, 'gpu')?.pins;
  return !!b.slots[id];
}

/** Нужные кабели для текущей сборки (all=true — все когда-либо подключённые). */
export function cableIds(b, all = false) {
  const ids = all ? Object.keys(b.cables) : [];
  if (!all) {
    if (b.slots.mb) ids.push('mb24', 'cpu8');
    if (get(b, 'gpu')?.pins) ids.push('gpu');
    for (const s of ['sata0', 'sata1', 'hdd0']) if (b.slots[s]) ids.push(s);
  }
  return ids;
}

export function connectCable(b, id) {
  if (!b.slots.psu) return { ok: false, reason: 'Сначала установите блок питания' };
  if (!cableIds(b).includes(id)) return { ok: false, reason: 'Некуда подключать' };
  b.cables[id] = true;
  return { ok: true };
}
export function disconnectCable(b, id) { delete b.cables[id]; return { ok: true }; }
export const missingCables = b => cableIds(b).filter(id => !b.cables[id]);

// ── Параметры сборки ────────────────────────────────────────────────────────
export const ramSticks = b => ['ram0', 'ram1', 'ram2', 'ram3'].map(s => b.slots[s]).filter(Boolean);
export const ramTotal = b => ramSticks(b).reduce((s, it) => s + partOf(it).gb, 0);
export const storages = b => ['m2_0', 'm2_1', 'sata0', 'sata1', 'hdd0'].filter(s => b.slots[s]);
export const fansCount = b => ['fanF0', 'fanF1', 'fanR0'].filter(s => b.slots[s]).length;
export const installedItems = b => Object.values(b.slots);
export const dirtyItems = b => Object.entries(b.slots).filter(([, it]) => it.dirty).map(([s]) => s);

export function powerDraw(b) {
  const cpu = get(b, 'cpu'), gpu = get(b, 'gpu');
  return Math.round(40 + (cpu?.tdp || 0) * 1.1 + (gpu?.tdp || 0) + ramSticks(b).length * 5 + fansCount(b) * 3 + storages(b).length * 7);
}

/** Температуры под нагрузкой. */
export function temps(b) {
  const cpu = get(b, 'cpu'), cooler = get(b, 'cooler'), gpu = get(b, 'gpu');
  const fans = fansCount(b);
  const dust = dirtyItems(b).length;
  const airflow = (fans === 0 ? 9 : fans === 1 ? 4 : 0) - (fans >= 3 ? 3 : 0);
  let cpuT = 32;
  if (cpu) cpuT = cooler ? 30 + 45 * (cpu.tdp / cooler.tdpMax) + airflow + dust * 6 : 110;
  if (b.slots.cooler?.dirty) cpuT += 12;
  let gpuT = gpu ? 38 + gpu.tdp / 9 + airflow + (b.slots.gpu?.dirty ? 18 : 0) : 0;
  return { cpu: Math.round(Math.min(cpuT, 110)), gpu: Math.round(Math.min(gpuT, 105)) };
}

/**
 * Попытка включения. Возвращает, что увидит игрок:
 *  power — закрутились ли вентиляторы; post — появилось ли изображение;
 *  boot — загрузилась ли ОС; error — текст ошибки; beep — код писка.
 */
export function powerOn(b) {
  const res = { power: false, post: false, boot: false, error: '', beep: '', shutdown: false };
  const psu = get(b, 'psu'), mb = get(b, 'mb'), cpu = get(b, 'cpu');
  if (!b.slots.case) return { ...res, error: 'Нет корпуса' };
  if (!psu) return { ...res, error: 'Не установлен блок питания' };
  if (b.slots.psu.broken) return { ...res, error: 'Ничего не происходит. Возможно, неисправен блок питания' };
  if (!mb) return { ...res, error: 'Не установлена материнская плата' };
  if (!b.cables.mb24) return { ...res, error: 'Ничего не происходит: не подключено 24-pin питание платы' };
  if (b.slots.mb.broken) return { ...res, error: 'Ничего не происходит. Возможно, неисправна материнская плата' };
  res.power = true;
  if (!b.cables.cpu8) return { ...res, error: 'Вентиляторы крутятся, но изображения нет: не подключено питание процессора (8-pin)' };
  if (!cpu) return { ...res, error: 'Нет изображения: процессор не установлен', beep: '1 длинный, 3 коротких' };
  if (b.slots.cpu.broken) return { ...res, error: 'Нет изображения. Возможно, неисправен процессор', beep: '1 длинный, 3 коротких' };
  const sticks = ramSticks(b);
  if (!sticks.length) return { ...res, error: 'Нет изображения: не установлена оперативная память', beep: 'длинные повторяющиеся' };
  if (sticks.some(s => s.broken)) return { ...res, error: 'Ошибка памяти! Одна из планок ОЗУ неисправна', beep: 'длинные повторяющиеся' };
  const gpu = get(b, 'gpu');
  if (!gpu && !cpu.igpu) return { ...res, error: 'Нет изображения: у процессора нет встроенной графики, нужна видеокарта', beep: '1 длинный, 2 коротких' };
  if (gpu && gpu.pins && !b.cables.gpu) return { ...res, error: 'Нет изображения: не подключено питание видеокарты', beep: '1 длинный, 2 коротких' };
  if (gpu && b.slots.gpu.broken) return { ...res, error: 'Нет изображения. Возможно, неисправна видеокарта', beep: '1 длинный, 2 коротких' };
  res.post = true;
  if (!b.slots.cooler) return { ...res, error: 'CPU OVERHEAT! Кулер не установлен — аварийное выключение', shutdown: true };
  if (powerDraw(b) > psu.watt) return { ...res, error: `Блок питания перегружен (${powerDraw(b)} Вт из ${psu.watt}) — компьютер выключился`, shutdown: true };
  const drives = storages(b);
  if (!drives.length) return { ...res, error: 'Загрузочное устройство не найдено. Установите накопитель' };
  const usable = drives.filter(s => (s.startsWith('m2') || b.cables[s]));
  if (!usable.length) return { ...res, error: 'Загрузочное устройство не найдено. Подключите SATA-кабель к накопителю' };
  if (usable.every(s => b.slots[s].broken)) return { ...res, error: 'Ошибка чтения диска. Накопитель неисправен' };
  res.boot = true;
  return res;
}

/** Тест производительности (как 3DMark). */
export function benchmark(b) {
  const pw = powerOn(b);
  if (!pw.boot) return { ok: false, error: pw.error || 'Компьютер не загружается' };
  const cpu = get(b, 'cpu'), gpu = get(b, 'gpu');
  const t = temps(b);
  const gpuPerf = gpu ? gpu.perf : 250;
  const total = ramTotal(b);
  const sticks = ramSticks(b).length;
  let ramF = total < 8 ? 0.72 : total < 16 ? 0.88 : total < 32 ? 1 : 1.04;
  if (sticks === 1) ramF *= 0.93;
  const avgMhz = ramSticks(b).reduce((s, it) => s + partOf(it).mhz, 0) / Math.max(1, sticks);
  ramF *= 0.94 + Math.min(avgMhz, 6000) / 100000;
  let thermal = 1;
  if (t.cpu > 90) thermal -= 0.18;
  else if (t.cpu > 80) thermal -= 0.07;
  if (t.gpu > 85) thermal -= 0.1;
  // «узкое горлышко»: слабый процессор тормозит мощную видеокарту и наоборот
  const balance = Math.min(1, (cpu.perf * 2.2) / gpuPerf) * 0.25 + 0.75;
  const score = Math.round((gpuPerf * 0.7 + cpu.perf * 0.3) * ramF * thermal * balance * 4.2);
  const fps = Math.round(score / 95);
  return { ok: true, score, fps, cpuTemp: t.cpu, gpuTemp: t.gpu, throttle: thermal < 1 };
}

export const buildPrice = b => installedItems(b).reduce((s, it) => s + (partOf(it)?.price || 0), 0);
