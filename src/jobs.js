// Генератор заказов клиентов и проверка их выполнения.

import { PART, PARTS } from './parts.js';
import { emptyBuild, powerOn, ramTotal, partOf, installedItems, dirtyItems, buildPrice, cableIds } from './logic.js';

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

const NAMES = ['Алексей', 'Мария', 'Дмитрий', 'Анна', 'Иван', 'Екатерина', 'Сергей', 'Ольга', 'Никита', 'Татьяна',
  'Артём', 'Юлия', 'Максим', 'Полина', 'Кирилл', 'Виктория', 'Егор', 'Дарья', 'Денис', 'Ксения', 'Гоша', 'Михаил'];

// Готовые ПК клиентов разного уровня
const TEMPLATES = [
  { tier: 1, parts: { case: 'case-q300l', mb: 'a320m', cpu: 'r3-3200g', cooler: 'cool-box', ram0: 'ram-8-d4', hdd0: 'hdd-1t', psu: 'psu-400' } },
  { tier: 1, parts: { case: 'case-s2', mb: 'h410m', cpu: 'i3-10100', cooler: 'cool-box', ram0: 'ram-4-d4', ram1: 'ram-4-d4', gpu: 'gt1030', hdd0: 'hdd-1t', psu: 'psu-400', fanR0: 'fan-p12' } },
  { tier: 2, parts: { case: 'case-s2', mb: 'b450-tmh', cpu: 'r5-3600', cooler: 'cool-box', ram0: 'ram-8-d4', ram2: 'ram-8-d4', gpu: 'gtx1660s', sata0: 'ssd-480', hdd0: 'hdd-1t', psu: 'psu-550', fanF0: 'fan-p12', fanR0: 'fan-p12' } },
  { tier: 2, parts: { case: 'case-h510', mb: 'b560-tmh', cpu: 'i5-10400f', cooler: 'cool-af34', ram0: 'ram-8-d4', ram2: 'ram-8-d4', gpu: 'gtx1650', m2_0: 'm2-500', psu: 'psu-550', fanF0: 'fan-p12', fanR0: 'fan-p12' } },
  { tier: 3, parts: { case: 'case-meshify', mb: 'b660m', cpu: 'i5-12400f', cooler: 'cool-ak400', ram0: 'ram-16-d4', ram1: 'ram-16-d4', gpu: 'rtx3060', m2_0: 'm2-500', hdd0: 'hdd-2t', psu: 'psu-750', fanF0: 'fan-p12', fanF1: 'fan-p12', fanR0: 'fan-p12' } },
  { tier: 3, parts: { case: 'case-h510', mb: 'b650-elite', cpu: 'r5-7600x', cooler: 'cool-ak400', ram0: 'ram-16-d5', ram2: 'ram-16-d5', gpu: 'rx6700xt', m2_0: 'm2-2t', psu: 'psu-750', fanF0: 'fan-rgb', fanF1: 'fan-rgb', fanR0: 'fan-rgb' } }
];

function makePC(tpl, newItem) {
  const b = emptyBuild();
  for (const [slot, pid] of Object.entries(tpl.parts)) b.slots[slot] = newItem(pid, { client: true });
  for (const id of cableIds(b)) b.cables[id] = true;
  return b;
}

const FAULTS = {
  ram: { slots: ['ram0', 'ram1', 'ram2', 'ram3'], subject: 'Компьютер пищит и не включается', text: 'Включаю компьютер — он долго пищит, а на экране ничего нет. Вчера всё работало! Посмотрите, пожалуйста.' },
  gpu: { slots: ['gpu'], subject: 'Нет изображения', text: 'Компьютер вроде включается, вентиляторы шумят, но монитор пишет «нет сигнала». Кабель монитора проверял.' },
  psu: { slots: ['psu'], subject: 'Компьютер вообще не включается', text: 'Нажимаю кнопку питания — ноль реакции. Ни лампочек, ни звука. Розетка рабочая. Спасите!' },
  storage: { slots: ['m2_0', 'sata0', 'hdd0'], subject: 'Не загружается Windows', text: 'Пишет что-то про загрузочное устройство и дальше не идёт. Кажется, диск умер. Данные не важны, просто нужен рабочий ПК.' },
  cpu: { slots: ['cpu'], subject: 'Чёрный экран после чистки', text: 'Решил сам почистить компьютер, снял кулер, поставил обратно — и всё, чёрный экран. Кажется, что-то сломал…' }
};

/** Сгенерировать один заказ. level — уровень мастерской, newItem(pid, extra) — фабрика предметов. */
export function generateJob(seed, level, newItem) {
  const r = rng(seed);
  const customer = pick(r, NAMES);
  const tiers = TEMPLATES.filter(t => t.tier <= Math.min(3, 1 + Math.floor((level + 1) / 2)));
  const types = ['repair', 'repair', 'clean', 'upgrade_gpu', 'upgrade_ram', 'upgrade_ssd'];
  if (level >= 2) types.push('build', 'build');
  if (level >= 4) types.push('build');
  const type = pick(r, types);
  const job = { id: 'j' + seed, seed, type, customer, xp: 40, reward: 0, req: {} };

  if (type === 'build') {
    const budget = pick(r, level >= 3 ? [800, 1000, 1200, 1500, 2000] : [450, 550, 650, 800]);
    const caseId = pick(r, ['case-s2', 'case-h510', 'case-meshify', 'case-q300l']);
    const pc = emptyBuild();
    pc.slots.case = newItem(caseId, { client: true });
    // цель — 85% от максимума, достижимого за 85% бюджета: есть и задача, и прибыль
    const target = Math.round(scoreForBudget(budget * 0.85) * 0.85 / 100) * 100;
    Object.assign(job, {
      pc, reward: budget, xp: 90,
      req: { score: target, budget },
      subject: `Соберите игровой ПК до $${budget}`,
      text: `Привет! Хочу новый компьютер для игр. Корпус ${PART[caseId].name} у меня уже есть — привёз его вам. ` +
        `Бюджет на всё — $${budget} (это и есть оплата, всё, что сэкономите на деталях — ваше). ` +
        `Главное, чтобы в тесте производительности было не меньше ${target} очков.`
    });
    return job;
  }

  const tpl = pick(r, tiers);
  const pc = makePC(tpl, newItem);
  job.pc = pc;

  if (type === 'repair') {
    const fk = pick(r, Object.keys(FAULTS).filter(k => k !== 'cpu' || level >= 2));
    const f = FAULTS[fk];
    const slot = pick(r, f.slots.filter(s => pc.slots[s]));
    pc.slots[slot].broken = true;
    const part = partOf(pc.slots[slot]);
    Object.assign(job, {
      subject: f.subject, text: f.text, xp: 50,
      reward: Math.round((part.price * 1.25 + 40 + r() * 30) / 5) * 5
    });
  } else if (type === 'clean') {
    const slots = Object.keys(pc.slots).filter(s => s !== 'case');
    for (const s of slots) if (r() < 0.55 || s === 'cooler' || s === 'gpu') pc.slots[s].dirty = true;
    Object.assign(job, {
      subject: 'Компьютер греется и гудит как самолёт',
      text: 'Компьютеру лет пять, внутрь ни разу не заглядывал. Стал жутко шуметь и иногда выключается в играх. Почистите, пожалуйста, от пыли.',
      reward: 45 + Math.round(r() * 4) * 5, xp: 35
    });
  } else if (type === 'upgrade_gpu') {
    const cur = partOf(pc.slots.gpu)?.perf || 250;
    const opts = PARTS.filter(p => p.type === 'gpu' && p.perf > cur * 1.3 && p.lvl <= level + 1);
    const want = opts.length ? opts[Math.min(opts.length - 1, Math.floor(r() * 2))] : PART.rtx3060;
    const cheapest = PARTS.filter(p => p.type === 'gpu' && p.perf >= want.perf).sort((a, b) => a.price - b.price)[0];
    Object.assign(job, {
      subject: 'Нужна видеокарта помощнее',
      text: `Хочу поиграть в новые игры, а мой компьютер не тянет. Поставьте видеокарту уровня ${want.name} или мощнее. ` +
        `Проверьте, чтобы блок питания справлялся! Старую видеокарту можете оставить себе.`,
      req: { gpuPerf: want.perf, gpuName: want.name },
      reward: Math.round((cheapest.price * 1.2 + 50) / 5) * 5, xp: 55
    });
    // старая видеокарта достаётся мастеру
    if (pc.slots.gpu) pc.slots.gpu.client = false;
  } else if (type === 'upgrade_ram') {
    const now = ramTotal(pc);
    const want = now >= 16 ? 32 : 16;
    Object.assign(job, {
      subject: `Добавьте оперативной памяти до ${want} ГБ`,
      text: `Сейчас у меня ${now} ГБ, браузер и игры постоянно тормозят. Нужно минимум ${want} ГБ ОЗУ. Старые планки можете оставить себе.`,
      req: { ramGb: want },
      reward: Math.round((want * 3.2 + 40) / 5) * 5, xp: 40
    });
    for (const s of ['ram0', 'ram1', 'ram2', 'ram3']) if (pc.slots[s]) pc.slots[s].client = false;
  } else if (type === 'upgrade_ssd') {
    Object.assign(job, {
      subject: 'Хочу, чтобы компьютер быстрее загружался',
      text: 'Говорят, что SSD сильно ускоряет загрузку. Поставьте мне, пожалуйста, SSD (обычный SATA или M.2 — без разницы).',
      req: { ssd: true },
      reward: 85, xp: 35
    });
    if (pc.slots.sata0 || pc.slots.m2_0) {
      // если SSD уже есть — его надо заменить на новый, старый «умер»
      const s = pc.slots.m2_0 ? 'm2_0' : 'sata0';
      pc.slots[s].broken = true;
      job.text = 'SSD перестал определяться, компьютер грузится только со старого HDD, и то не всегда. Поставьте новый SSD!';
    }
  }
  return job;
}

/** Максимальный результат теста, достижимый за указанные деньги (посчитано перебором каталога). */
const BEST = [[0, 0], [300, 1519], [400, 2544], [450, 3246], [550, 5201], [650, 7593], [800, 10424], [1000, 12649], [1200, 14945], [1500, 15859], [2000, 16818]];
export function scoreForBudget(money) {
  for (let i = 1; i < BEST.length; i++) {
    const [m1, s1] = BEST[i - 1], [m2, s2] = BEST[i];
    if (money <= m2) return s1 + (s2 - s1) * (money - m1) / (m2 - m1);
  }
  return BEST[BEST.length - 1][1];
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
  if (job.req.ramGb) checks.push({ label: `Оперативной памяти ≥ ${job.req.ramGb} ГБ (сейчас ${ramTotal(b)})`, ok: ramTotal(b) >= job.req.ramGb });
  if (job.req.ssd) {
    const has = ['m2_0', 'm2_1', 'sata0', 'sata1'].some(s => b.slots[s] && !b.slots[s].broken && (s.startsWith('m2') || b.cables[s]));
    checks.push({ label: 'Установлен и подключён рабочий SSD', ok: has });
  }
  if (job.req.score) {
    checks.push({ label: `Тест производительности ≥ ${job.req.score} (последний: ${ctx.bench ?? '—'})`, ok: (ctx.bench || 0) >= job.req.score });
    const price = buildPrice({ slots: Object.fromEntries(Object.entries(b.slots).filter(([, it]) => !it.client)) });
    checks.push({ label: `Детали уложились в бюджет $${job.req.budget} (потрачено $${price})`, ok: price <= job.req.budget });
  }
  return checks;
}

export const jobDone = (job, b, ctx) => jobChecks(job, b, ctx).every(c => c.ok);
