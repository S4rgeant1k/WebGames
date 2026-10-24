// Генерация заказов клиентов: у каждого клиента свой, случайно собранный ПК.

import { PART, PARTS, rub } from './parts.js';
import {
  emptyBuild, powerOn, ramTotal, partOf, installedItems, dirtyItems, buildPrice, cableIds,
  benchmark, powerDraw, temps, FORM_FITS
} from './logic.js';

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const pick = (r, arr) => arr[Math.floor(r() * arr.length)];
const round = (n, k = 100) => Math.round(n / k) * k;
const of = type => PARTS.filter(p => p.type === type);
const cheapest = list => list.slice().sort((a, b) => a.price - b.price)[0];

const NAMES = ['Алексей', 'Мария', 'Дмитрий', 'Анна', 'Иван', 'Екатерина', 'Сергей', 'Ольга', 'Никита', 'Татьяна',
  'Артём', 'Юлия', 'Максим', 'Полина', 'Кирилл', 'Виктория', 'Егор', 'Дарья', 'Денис', 'Ксения', 'Гоша', 'Михаил',
  'Владимир', 'Алина', 'Роман', 'Софья', 'Тимур', 'Вероника', 'Глеб', 'Елизавета', 'Павел', 'Яна', 'Фёдор', 'Арина'];
const MAILS = ['mail.ru', 'yandex.ru', 'gmail.com', 'rambler.ru', 'bk.ru', 'inbox.ru'];
const TRANSLIT = { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'e', ж: 'zh', з: 'z', и: 'i', й: 'y', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sch', ы: 'y', ь: '', ъ: '', э: 'e', ю: 'yu', я: 'ya' };
const latin = s => s.toLowerCase().split('').map(c => TRANSLIT[c] ?? c).join('');

/** Уровень «железа» клиента: 1 — бюджет, 2 — средний, 3 — топ. */
function tierRange(tier) {
  return tier === 1 ? [1, 1] : tier === 2 ? [1, 3] : [3, 5];
}

/** Случайный рабочий ПК клиента. */
export function randomPC(r, tier, newItem) {
  for (let attempt = 0; attempt < 30; attempt++) {
    const b = tryPC(r, tier, newItem);
    if (b && powerOn(b).boot) return b;
  }
  // запасной вариант — простейший ПК
  const b = emptyBuild();
  const set = (slot, pid) => { b.slots[slot] = newItem(pid, { client: true }); };
  set('case', 'zalman-s2'); set('mb', 'a520m-a'); set('cpu', 'r5-5600g'); set('cooler', 'wraith-stealth');
  set('ram0', 'd4-8-3200'); set('ram1', 'd4-8-3200'); set('sata0', 'ssd-480'); set('psu', 'pf500');
  for (const id of cableIds(b)) b.cables[id] = true;
  return b;
}

function tryPC(r, tier, newItem) {
  const [lo, hi] = tierRange(tier);
  const inT = p => p.lvl >= lo && p.lvl <= hi;
  const cpu = pick(r, of('cpu').filter(inT));
  const mbs = of('mb').filter(p => p.socket === cpu.socket && p.lvl >= Math.max(1, lo - 1) && p.lvl <= hi);
  if (!mbs.length) return null;
  const mb = pick(r, mbs);
  const cases = of('case').filter(c => FORM_FITS[c.form].includes(mb.form) && c.lvl <= hi + 1 && c.lvl >= Math.max(1, lo - 1));
  const cs = pick(r, cases);
  let gpu = null;
  if (!(cpu.igpu && tier === 1 && r() < 0.45)) {
    const gl = of('gpu').filter(g => g.len <= cs.gpuMax && g.lvl >= lo && g.lvl <= hi);
    if (!gl.length) return null;
    gpu = pick(r, gl);
  } else if (!cpu.igpu) return null;
  const sizes = tier === 1 ? [4, 8, 8] : tier === 2 ? [8, 16, 16] : [16, 16, 32];
  const gb = pick(r, sizes);
  const sticks = of('ram').filter(x => x.ram === mb.ram && x.gb === gb);
  const stick = sticks.length ? pick(r, sticks) : cheapest(of('ram').filter(x => x.ram === mb.ram));
  let n = tier === 1 ? (r() < 0.5 ? 1 : 2) : tier === 2 ? 2 : (r() < 0.3 && mb.ramSlots === 4 ? 4 : 2);
  n = Math.min(n, mb.ramSlots);
  const coolers = of('cooler').filter(c => c.tdpMax >= cpu.tdp && (c.rad ? (cs.rad || 0) >= c.rad : c.height <= cs.coolerMax));
  if (!coolers.length) return null;
  let cooler;
  if (tier === 1) cooler = coolers.find(c => c.kind === 'box') || cheapest(coolers);
  else if (tier === 2) cooler = pick(r, coolers.filter(c => c.lvl <= 2).length ? coolers.filter(c => c.lvl <= 2) : coolers);
  else cooler = pick(r, coolers.filter(c => c.lvl >= 2).length ? coolers.filter(c => c.lvl >= 2) : coolers);

  const b = emptyBuild();
  const set = (slot, p) => { b.slots[slot] = newItem(p.id, { client: true }); };
  set('case', cs); set('mb', mb); set('cpu', cpu); set('cooler', cooler);
  const ramSlots = n === 1 ? ['ram0'] : n === 2 ? (mb.ramSlots === 4 ? ['ram1', 'ram3'] : ['ram0', 'ram1']) : ['ram0', 'ram1', 'ram2', 'ram3'];
  ramSlots.forEach(s => set(s, stick));
  if (gpu) set('gpu', gpu);
  // накопители
  const pickSt = kind => pick(r, of('storage').filter(x => x.kind === kind && x.lvl <= hi));
  if (tier === 1) {
    if (r() < 0.5) set('hdd0', pickSt('hdd')); else set('sata0', pickSt('ssd'));
    if (r() < 0.3 && !b.slots.hdd0) set('hdd0', pickSt('hdd'));
  } else if (tier === 2) {
    if (r() < 0.6) set('m2_0', pickSt('m2')); else set('sata0', pickSt('ssd'));
    if (r() < 0.5) set('hdd0', pickSt('hdd'));
  } else {
    set('m2_0', pickSt('m2'));
    if (r() < 0.4 && mb.m2 > 1) set('m2_1', pickSt('m2'));
    if (r() < 0.3) set('hdd0', pickSt('hdd'));
  }
  // вентиляторы
  const fanCount = Math.floor(r() * (tier === 1 ? 2 : 4));
  const fan = pick(r, of('fan').filter(f => tier > 1 || !f.rgb));
  ['fanR0', 'fanF0', 'fanF1'].slice(0, fanCount).forEach(s => set(s, fan));
  // блок питания с запасом
  const need = powerDraw(b) * (1.1 + r() * 0.4);
  const psus = of('psu').filter(p => p.watt >= need && (!gpu?.hpwr || p.atx3)).sort((a, c) => a.price - c.price).slice(0, 4);
  if (!psus.length) return null;
  set('psu', pick(r, psus));
  for (const id of cableIds(b)) b.cables[id] = true;
  return b;
}

// ── Лучший возможный результат за бюджет (для заказов «Сборка») ────────────
const bestCache = new Map();
export function bestScoreFor(budget, caseId, level) {
  const key = [budget, caseId, level].join('|');
  if (bestCache.has(key)) return bestCache.get(key);
  const cs = PART[caseId];
  const ok = p => p.lvl <= level;
  const it = pid => ({ pid });
  let best = { score: 0, price: 0 };
  const store = cheapest(of('storage').filter(ok));
  for (const cpu of of('cpu').filter(ok)) {
    const mb = cheapest(of('mb').filter(m => ok(m) && m.socket === cpu.socket && FORM_FITS[cs.form].includes(m.form)));
    if (!mb) continue;
    const stick = cheapest(of('ram').filter(x => ok(x) && x.ram === mb.ram && x.gb === 8)) || cheapest(of('ram').filter(x => ok(x) && x.ram === mb.ram));
    const cooler = cheapest(of('cooler').filter(c => ok(c) && c.tdpMax >= cpu.tdp && (c.rad ? (cs.rad || 0) >= c.rad : c.height <= cs.coolerMax)));
    if (!stick || !cooler) continue;
    const gpus = [null, ...of('gpu').filter(g => ok(g) && g.len <= cs.gpuMax)];
    for (const gpu of gpus) {
      if (!gpu && !cpu.igpu) continue;
      const base = mb.price + cpu.price + stick.price * 2 + cooler.price + store.price + (gpu?.price || 0);
      if (base > budget) continue;
      const b = { slots: { case: it(caseId), mb: it(mb.id), cpu: it(cpu.id), cooler: it(cooler.id), ram0: it(stick.id), ram1: it(stick.id), sata0: it(store.id) }, cables: {} };
      if (gpu) b.slots.gpu = it(gpu.id);
      const psu = cheapest(of('psu').filter(p => ok(p) && p.watt >= powerDraw(b) && (!gpu?.hpwr || p.atx3)));
      if (!psu || base + psu.price > budget) continue;
      b.slots.psu = it(psu.id);
      for (const id of cableIds(b)) b.cables[id] = true;
      const res = benchmark(b);
      if (res.ok && res.score > best.score) best = { score: res.score, price: base + psu.price };
    }
  }
  bestCache.set(key, best);
  return best;
}

const FAULTS = {
  ram: { slots: ['ram0', 'ram1', 'ram2', 'ram3'], subject: 'Компьютер пищит и не включается', text: 'Включаю компьютер — он долго пищит, а на экране ничего нет. Вчера всё работало! Посмотрите, пожалуйста.' },
  gpu: { slots: ['gpu'], subject: 'Нет изображения', text: 'Компьютер вроде включается, вентиляторы шумят, но монитор пишет «нет сигнала». Кабель монитора проверял.' },
  psu: { slots: ['psu'], subject: 'Компьютер вообще не включается', text: 'Нажимаю кнопку питания — ноль реакции. Ни лампочек, ни звука. Розетка рабочая. Спасите!' },
  storage: { slots: ['m2_0', 'm2_1', 'sata0', 'hdd0'], subject: 'Не загружается Windows', text: 'Пишет что-то про загрузочное устройство и дальше не идёт. Кажется, диск умер. Данные не важны, просто нужен рабочий ПК.' },
  cpu: { slots: ['cpu'], subject: 'Чёрный экран после чистки', text: 'Решил сам почистить компьютер, снял кулер, поставил обратно — и всё, чёрный экран. Кажется, что-то сломал…' },
  mb: { slots: ['mb'], subject: 'После грозы ПК не подаёт признаков жизни', text: 'Ночью была гроза, утром компьютер не включается. Блок питания вроде щёлкает… Найдите, что сгорело, и замените.' }
};

/** Сгенерировать один заказ. level — уровень мастерской, newItem(pid, extra) — фабрика предметов. */
export function generateJob(seed, level, newItem) {
  const r = rng(seed);
  const customer = pick(r, NAMES);
  const email = `${latin(customer)}${Math.floor(r() * 900 + 10)}@${pick(r, MAILS)}`;
  const tier = Math.max(1, Math.min(3, pick(r, level <= 1 ? [1] : level <= 2 ? [1, 1, 2] : level <= 3 ? [1, 2, 2, 3] : [2, 3, 3])));
  const types = ['repair', 'repair', 'clean', 'upgrade_gpu', 'upgrade_ram', 'upgrade_ssd'];
  if (level >= 2) types.push('build', 'build', 'upgrade_cpu', 'cooling');
  if (level >= 3) types.push('build', 'repair');
  const type = pick(r, types);
  const job = { id: 'j' + seed, seed, type, customer, email, xp: 40, reward: 0, req: {} };

  if (type === 'build') {
    const budget = pick(r, level <= 2 ? [45000, 55000, 65000, 80000] : level <= 3 ? [80000, 100000, 120000, 150000] : [120000, 160000, 200000, 260000, 350000]);
    const cases = of('case').filter(c => c.lvl <= Math.min(4, level));
    const caseP = pick(r, cases);
    const pc = emptyBuild();
    pc.slots.case = newItem(caseP.id, { client: true });
    const best = bestScoreFor(Math.round(budget * 0.85), caseP.id, Math.min(level, 5));
    const target = Math.max(1000, round(best.score * 0.85, 100));
    const labor = round(budget * 0.1, 500);
    Object.assign(job, {
      pc, reward: budget + labor, xp: 90,
      req: { score: target, budget },
      subject: `Соберите игровой ПК до ${rub(budget)}`,
      text: `Здравствуйте! Хочу новый компьютер для игр. Корпус ${caseP.name} у меня уже есть — привёз его вам. ` +
        `На комплектующие готов потратить ${rub(budget)}, плюс ${rub(labor)} за работу. Всё, что сэкономите на деталях, — ваше. ` +
        `Главное, чтобы в 3DMark было не меньше ${target} очков.`
    });
    return job;
  }

  let pc = randomPC(r, type === 'cooling' || type === 'upgrade_cpu' ? Math.max(2, tier) : tier, newItem);
  job.pc = pc;

  if (type === 'repair') {
    const keys = Object.keys(FAULTS).filter(k => (k !== 'cpu' && k !== 'mb') || level >= 2).filter(k => FAULTS[k].slots.some(s => pc.slots[s]));
    const fk = pick(r, keys);
    const f = FAULTS[fk];
    const slot = pick(r, f.slots.filter(s => pc.slots[s]));
    pc.slots[slot].broken = true;
    const part = partOf(pc.slots[slot]);
    const repl = cheapest(of(part.type).filter(p => p.lvl <= level && (part.type !== 'mb' || (p.socket === part.socket && FORM_FITS[partOf(pc.slots.case).form].includes(p.form) && p.ram === part.ram)) && (part.type !== 'cpu' || p.socket === part.socket) && (part.type !== 'ram' || p.ram === part.ram) && (part.type !== 'storage' || p.kind === part.kind)));
    if (!repl) return generateJob(seed + 7919, level, newItem);
    Object.assign(job, {
      subject: f.subject, text: f.text, xp: 50,
      reward: round((repl ? repl.price : part.price) * 1.2 + 2000 + r() * 1500, 100)
    });
  } else if (type === 'clean') {
    const slots = Object.keys(pc.slots).filter(s => s !== 'case');
    for (const s of slots) if (r() < 0.55 || s === 'cooler' || s === 'gpu') pc.slots[s].dirty = true;
    Object.assign(job, {
      subject: 'Компьютер греется и гудит как самолёт',
      text: 'Компьютеру лет пять, внутрь ни разу не заглядывал. Стал жутко шуметь и иногда выключается в играх. Почистите, пожалуйста, от пыли.',
      reward: round(2500 + r() * 2000, 100), xp: 35
    });
  } else if (type === 'upgrade_gpu') {
    const cur = partOf(pc.slots.gpu)?.perf || partOf(pc.slots.cpu).igpu;
    const cs = partOf(pc.slots.case);
    const opts = of('gpu').filter(p => p.perf > cur * 1.3 && p.lvl <= level && p.len <= cs.gpuMax).sort((a, b) => a.perf - b.perf);
    if (!opts.length) return generateJob(seed + 7919, level, newItem);
    const want = opts[Math.min(opts.length - 1, Math.floor(r() * 3))];
    const cheap = cheapest(of('gpu').filter(p => p.perf >= want.perf && p.len <= cs.gpuMax && p.lvl <= level)) || want;
    // хватит ли блока питания?
    const test = { slots: { ...pc.slots, gpu: { pid: cheap.id } }, cables: {} };
    const psuP = partOf(pc.slots.psu);
    const needPsu = powerDraw(test) > psuP.watt || (cheap.hpwr && !psuP.atx3);
    const psuCost = needPsu ? cheapest(of('psu').filter(p => p.lvl <= level && p.watt >= powerDraw(test) && (!cheap.hpwr || p.atx3)))?.price || 10000 : 0;
    Object.assign(job, {
      subject: 'Нужна видеокарта помощнее',
      text: `Хочу поиграть в новые игры, а мой компьютер не тянет. Поставьте видеокарту уровня ${want.name} или мощнее. ` +
        `Проверьте, чтобы блок питания справлялся${needPsu ? ' — кажется, мой слабоват' : ''}! Старую видеокарту можете оставить себе.`,
      req: { gpuPerf: want.perf, gpuName: want.name },
      reward: round((cheap.price + psuCost) * 1.15 + 2500, 100), xp: 55
    });
    if (pc.slots.gpu) pc.slots.gpu.client = false;
  } else if (type === 'upgrade_ram') {
    const now = ramTotal(pc);
    const want = now >= 16 ? 32 : 16;
    const mbP = partOf(pc.slots.mb);
    const stick = cheapest(of('ram').filter(x => x.lvl <= level && x.ram === mbP.ram && x.gb >= want / mbP.ramSlots));
    if (now >= 32 || !stick) return generateJob(seed + 7919, level, newItem);
    const cost = stick ? stick.price * Math.ceil(want / stick.gb) : want * 300;
    Object.assign(job, {
      subject: `Добавьте оперативной памяти до ${want} ГБ`,
      text: `Сейчас у меня ${now} ГБ, браузер и игры постоянно тормозят. Нужно минимум ${want} ГБ ОЗУ. Старые планки можете оставить себе.`,
      req: { ramGb: want },
      reward: round(cost * 1.2 + 1500, 100), xp: 40
    });
    for (const s of ['ram0', 'ram1', 'ram2', 'ram3']) if (pc.slots[s]) pc.slots[s].client = false;
  } else if (type === 'upgrade_ssd') {
    Object.assign(job, {
      subject: 'Хочу, чтобы компьютер быстрее загружался',
      text: 'Говорят, что SSD сильно ускоряет загрузку. Поставьте мне, пожалуйста, SSD (обычный SATA или M.2 — без разницы).',
      req: { ssd: true },
      reward: round(3000 * 1.2 + 1500, 100), xp: 35
    });
    const ssdSlot = ['m2_0', 'm2_1', 'sata0'].find(s => pc.slots[s]);
    if (ssdSlot) {
      pc.slots[ssdSlot].broken = true;
      if (!pc.slots.hdd0) pc.slots.hdd0 = newItem('hdd-1t', { client: true });
      for (const id of cableIds(pc)) pc.cables[id] = true;
      job.text = 'SSD перестал определяться, компьютер грузится только со старого HDD, и то не всегда. Поставьте новый SSD!';
    }
  } else if (type === 'upgrade_cpu') {
    const cpuP = partOf(pc.slots.cpu);
    const opts = of('cpu').filter(c => c.socket === cpuP.socket && c.perf > cpuP.perf * 1.2 && c.lvl <= level && (c.igpu || pc.slots.gpu)).sort((a, b) => a.perf - b.perf);
    if (!opts.length) return generateJob(seed + 7919, level, newItem);
    const want = opts[Math.min(opts.length - 1, Math.floor(r() * 3))];
    Object.assign(job, {
      subject: 'Процессор не вытягивает игры',
      text: `Видеокарта загружена наполовину, а процессор — на 100%. Поставьте, пожалуйста, ${want.name} или что-то не слабее на мой сокет ${cpuP.socket}. ` +
        `Старый процессор можете оставить себе. И проследите, чтобы не перегревался!`,
      req: { cpuPerf: want.perf, cpuName: want.name, maxTemp: 85 },
      reward: round(want.price * 1.15 + 2500, 100), xp: 55
    });
    pc.slots.cpu.client = false;
  } else if (type === 'cooling') {
    // ставим слабый кулер на горячий процессор
    const cpuP = partOf(pc.slots.cpu);
    const csP = partOf(pc.slots.case);
    const fits = c => c.tdpMax >= cpuP.tdp && (c.rad ? (csP.rad || 0) >= c.rad : c.height <= csP.coolerMax);
    const weak = of('cooler').filter(c => !c.rad && fits(c) && c.tdpMax < 250).sort((a, c) => a.tdpMax - c.tdpMax || a.price - c.price)[0];
    const strong = of('cooler').filter(c => fits(c) && c.lvl <= level).sort((a, c) => c.tdpMax - a.tdpMax)[0];
    if (!weak || !strong) return generateJob(seed + 7919, level, newItem);
    pc.slots.cooler = newItem(weak.id, { client: false });
    for (const s of ['fanF0', 'fanF1']) delete pc.slots[s];
    const cleanTemp = temps(pc).cpu;
    const bestTemp = Math.round(30 + 45 * cpuP.tdp / strong.tdpMax - 3);
    const limit = Math.max(bestTemp + 4, cleanTemp - 8);
    if (limit >= cleanTemp) return generateJob(seed + 7919, level, newItem);
    pc.slots.cooler.dirty = true;
    Object.assign(job, {
      subject: `Процессор греется до ${temps(pc).cpu} градусов`,
      text: `В играх процессор разогревается так, что компьютер тормозит. Поставьте охлаждение получше, чтобы под нагрузкой было не больше ${limit} °C. Старый кулер можете забрать.`,
      req: { maxTemp: limit },
      reward: round(Math.max(3500, cpuP.tdp * 40) * 1.15 + 2000, 100), xp: 50
    });
  }
  return job;
}

/** Чек-лист заказа. ctx.bench — результат последнего теста для текущей сборки. */
export function jobChecks(job, b, ctx = {}) {
  const checks = [];
  const pw = powerOn(b);
  checks.push({ label: 'Компьютер включается и загружается', ok: pw.boot });
  const broken = installedItems(b).filter(i => i.broken);
  if (job.type === 'repair' || job.type === 'upgrade_ssd') checks.push({ label: 'Неисправные детали заменены', ok: broken.length === 0 });
  if (job.type === 'clean') checks.push({ label: 'Вся пыль удалена', ok: dirtyItems(b).length === 0 });
  if (job.req.gpuPerf) {
    const g = partOf(b.slots.gpu);
    checks.push({ label: `Видеокарта не хуже ${job.req.gpuName}`, ok: !!g && g.perf >= job.req.gpuPerf && !b.slots.gpu.broken });
  }
  if (job.req.cpuPerf) {
    const c = partOf(b.slots.cpu);
    checks.push({ label: `Процессор не хуже ${job.req.cpuName}`, ok: !!c && c.perf >= job.req.cpuPerf });
  }
  if (job.req.maxTemp) {
    const t = b.slots.cpu && b.slots.cooler ? temps(b).cpu : 999;
    checks.push({ label: `Процессор под нагрузкой ≤ ${job.req.maxTemp} °C (сейчас ${t === 999 ? '—' : t + ' °C'})`, ok: t <= job.req.maxTemp });
  }
  if (job.req.ramGb) checks.push({ label: `Оперативной памяти ≥ ${job.req.ramGb} ГБ (сейчас ${ramTotal(b)})`, ok: ramTotal(b) >= job.req.ramGb });
  if (job.req.ssd) {
    const has = ['m2_0', 'm2_1', 'sata0', 'sata1'].some(s => b.slots[s] && !b.slots[s].broken && (s.startsWith('m2') || b.cables[s]));
    checks.push({ label: 'Установлен и подключён рабочий SSD', ok: has });
  }
  if (job.req.score) {
    checks.push({ label: `3DMark ≥ ${job.req.score} (последний: ${ctx.bench ?? '—'})`, ok: (ctx.bench || 0) >= job.req.score });
    const price = buildPrice({ slots: Object.fromEntries(Object.entries(b.slots).filter(([, it]) => !it.client)) });
    checks.push({ label: `Детали уложились в ${rub(job.req.budget)} (потрачено ${rub(price)})`, ok: price <= job.req.budget });
  }
  return checks;
}

export const jobDone = (job, b, ctx) => jobChecks(job, b, ctx).every(c => c.ok);
