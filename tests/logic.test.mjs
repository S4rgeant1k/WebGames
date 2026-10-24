import test from 'node:test';
import assert from 'node:assert/strict';
import { PART, PARTS } from '../src/parts.js';
import {
  emptyBuild, install, remove, canInstall, canRemove, connectCable, cableIds, powerOn, benchmark,
  slotsForItem, ramTotal, buildPrice, powerDraw
} from '../src/logic.js';
import { generateJob, jobChecks, jobDone, bestScoreFor as bestFromJobs } from '../src/jobs.js';
import { TYPE_ORDER } from '../src/parts.js';

let uid = 1;
const it = (pid, extra = {}) => ({ uid: uid++, pid, ...extra });

function fullBuild(parts) {
  const b = emptyBuild();
  for (const [slot, pid] of Object.entries(parts)) {
    const r = install(b, it(pid), slot);
    assert.ok(r.ok, `${pid} → ${slot}: ${r.reason}`);
  }
  if (b.slots.psu) for (const id of cableIds(b)) assert.ok(connectCable(b, id).ok);
  return b;
}
const GOOD = { case: 'zalman-s2', mb: 'b550-tmh', cpu: 'r5-5600', cooler: 'ak400', ram0: 'd4-8-3200', ram1: 'd4-8-3200', gpu: 'rtx3060', m2_0: 'm2-500', psu: 'mwe650' };

test('каталог: у всех деталей есть цена и уникальный id', () => {
  assert.equal(new Set(PARTS.map(p => p.id)).size, PARTS.length);
  for (const p of PARTS) assert.ok(p.price > 0 && p.name, p.id);
});

test('полная сборка включается и проходит тест', () => {
  const b = fullBuild(GOOD);
  const r = powerOn(b);
  assert.ok(r.boot, r.error);
  const bm = benchmark(b);
  assert.ok(bm.ok && bm.score > 1000, JSON.stringify(bm));
  assert.equal(ramTotal(b), 16);
});

test('совместимость: сокет, тип памяти, форм-фактор, длина видеокарты', () => {
  const b = fullBuild({ case: 'matrexx30', mb: 'a320m-h' });
  assert.match(canInstall(b, it('i5-12400f'), 'cpu').reason, /Сокет/);
  assert.match(canInstall(b, it('d5-16-5600'), 'ram0').reason, /DDR4/);
  assert.equal(canInstall(b, it('d4-8-3200'), 'ram2').ok, false, 'у mATX-платы A320 только 2 слота');
  const b2 = fullBuild({ case: 'matrexx30' });
  assert.match(canInstall(b2, it('b550-tmh'), 'mb').reason, /не влезет/);
  const b3 = fullBuild({ case: 'zalman-s2', mb: 'b550-tmh', cpu: 'r5-5600' });
  assert.match(canInstall(b3, it('rtx4090'), 'gpu').reason, /длиннее/);
  assert.match(canInstall(b3, it('ssd-480'), 'hdd0').reason, /3\.5/);
  assert.match(canInstall(b3, it('fx240'), 'cooler').reason, /СЖО/);
  const b4 = fullBuild({ case: 'matrexx30', mb: 'a520m-a', cpu: 'r5-5600' });
  assert.match(canInstall(b4, it('nhd15'), 'cooler').reason, /выше/);
});

test('порядок снятия: кулер → процессор → плата', () => {
  const b = fullBuild(GOOD);
  assert.equal(canRemove(b, 'mb').ok, false);
  assert.equal(canRemove(b, 'cpu').ok, false);
  assert.ok(remove(b, 'cooler').ok);
  assert.ok(remove(b, 'cpu').ok);
  assert.equal(canRemove(b, 'mb').ok, false, 'ещё стоят ОЗУ, видеокарта, M.2');
});

test('диагностика: кабели, ОЗУ, видеокарта, БП, кулер, накопитель', () => {
  let b = fullBuild(GOOD);
  delete b.cables.mb24;
  assert.equal(powerOn(b).power, false);
  b = fullBuild(GOOD); delete b.cables.gpu;
  assert.match(powerOn(b).error, /питание видеокарты/);
  b = fullBuild(GOOD); b.slots.ram1.broken = true;
  assert.match(powerOn(b).error, /памяти/);
  b = fullBuild(GOOD); b.slots.psu.broken = true;
  assert.equal(powerOn(b).power, false);
  b = fullBuild(GOOD); remove(b, 'cooler');
  assert.ok(powerOn(b).shutdown);
  b = fullBuild(GOOD); remove(b, 'm2_0');
  assert.match(powerOn(b).error, /Загрузочное/);
  // процессор без встроенной графики и без видеокарты
  b = fullBuild(GOOD); remove(b, 'gpu');
  assert.match(powerOn(b).error, /встроенной графики/);
  // слабый БП
  b = fullBuild({ ...GOOD, case: 'o11evo', mb: 'z790-a', cpu: 'i9-14900kf', ram0: 'd5-16-6000', ram1: 'd5-16-6000', gpu: 'rx7900xtx', psu: 'pf500', cooler: 'ls720' });
  assert.ok(powerDraw(b) > 500);
  assert.match(powerOn(b).error, /перегружен/);
});

test('призраки слотов показывают причину несовместимости', () => {
  const b = fullBuild({ case: 'zalman-s2', mb: 'b550-tmh' });
  const r = slotsForItem(b, it('i5-12400f'));
  assert.equal(r.length, 1);
  assert.equal(r[0].ok, false);
  assert.equal(slotsForItem(b, it('d4-8-3200')).filter(s => s.ok).length, 4);
});

/** Лучший результат, который можно получить за указанные деньги (перебор CPU × GPU). */
function bestScoreFor(money, caseId) {
  const cheapest = (type, f = () => true) => PARTS.filter(p => p.type === type && f(p)).sort((a, b) => a.price - b.price)[0];
  let best = 0;
  const cs = PART[caseId];
  for (const cpu of PARTS.filter(p => p.type === 'cpu')) {
    for (const gpu of [null, ...PARTS.filter(p => p.type === 'gpu' && p.len <= cs.gpuMax)]) {
      if (!gpu && !cpu.igpu) continue;
      const mb = cheapest('mb', m => m.socket === cpu.socket && ['ATX', 'mATX', 'ITX'].slice(['ATX', 'mATX', 'ITX'].indexOf(cs.form)).includes(m.form));
      if (!mb) continue;
      const ram = cheapest('ram', r => r.ram === mb.ram && r.gb >= 8);
      const cooler = cheapest('cooler', c => c.tdpMax >= cpu.tdp);
      const draw = 40 + cpu.tdp * 1.1 + (gpu?.tdp || 0) + 10 + 7;
      const psu = cheapest('psu', p => p.watt >= draw);
      if (!psu || !cooler) continue;
      const parts = { case: caseId, mb: mb.id, cpu: cpu.id, cooler: cooler.id, ram0: ram.id, ram1: ram.id, m2_0: 'm2-500', psu: psu.id };
      if (gpu) parts.gpu = gpu.id;
      const b = fullBuild(parts);
      const price = buildPrice(b) - cs.price;
      if (price > money) continue;
      const r = benchmark(b);
      if (r.ok) best = Math.max(best, r.score);
    }
  }
  return best;
}

test('заказы «сборка» выполнимы в рамках бюджета', () => {
  for (let seed = 1; seed < 400; seed++) {
    const j = generateJob(seed, 5, (pid, extra) => it(pid, extra));
    if (j.type !== 'build') continue;
    const best = bestFromJobs(Math.round(j.req.budget * 0.85), j.pc.slots.case.pid, 5).score;
    assert.ok(best >= j.req.score, `бюджет ${j.req.budget}: цель ${j.req.score}, максимум ${best}`);
  }
});

test('заказы на ремонт решаются заменой неисправной детали', () => {
  let n = 0;
  for (let seed = 1; seed < 300 && n < 30; seed++) {
    const j = generateJob(seed, 3, (pid, extra) => it(pid, extra));
    if (j.type !== 'repair') continue;
    n++;
    const b = j.pc;
    assert.equal(jobDone(j, b), false, 'сломанный ПК не должен засчитываться');
    for (const [slot, item] of Object.entries(b.slots)) if (item.broken) b.slots[slot] = it(item.pid);
    assert.ok(jobDone(j, b), JSON.stringify(jobChecks(j, b)));
  }
  assert.ok(n > 5);
});

test('чистка, апгрейды памяти и видеокарты проверяются', () => {
  const mk = type => { for (let s = 1; s < 2000; s++) { const j = generateJob(s, 4, (pid, e) => it(pid, e)); if (j.type === type) return j; } };
  const c = mk('clean');
  assert.equal(jobDone(c, c.pc), false);
  for (const item of Object.values(c.pc.slots)) item.dirty = false;
  assert.ok(jobDone(c, c.pc));
  const g = mk('upgrade_gpu');
  assert.equal(jobDone(g, g.pc), false);
  const r = mk('upgrade_ram');
  assert.equal(jobDone(r, r.pc), false);
});

test('каталог: не меньше 20 вариантов основных деталей', () => {
  for (const t of TYPE_ORDER.filter(t => t !== 'fan')) {
    const n = PARTS.filter(p => p.type === t).length;
    assert.ok(n >= 18, `${t}: ${n}`);
  }
});

test('12VHPWR: топовой видеокарте нужен БП ATX 3.0', () => {
  const base = { ...GOOD, case: 'o11evo', mb: 'b650-tmh', cpu: 'r7-7800x3d', ram0: 'd5-16-6000', ram1: 'd5-16-6000', cooler: 'ak620' };
  const { psu, ...noPsu } = base;
  const b = fullBuild({ ...noPsu, gpu: 'rtx4070s' });
  install(b, it('pk650d'), 'psu');
  for (const id of cableIds(b)) connectCable(b, id);
  assert.equal(connectCable(b, 'gpu').ok, false);
  assert.equal(powerOn(b).boot, false);
  assert.match(powerOn(b).error, /12VHPWR/);
  const b2 = fullBuild({ ...base, gpu: 'rtx4070s', psu: 'a850gl' });
  assert.ok(powerOn(b2).boot, powerOn(b2).error);
});

test('у клиентов разные компьютеры', () => {
  const cpus = new Set(), gpus = new Set(), cases = new Set(), mbs = new Set();
  for (let seed = 1; seed < 120; seed++) {
    const j = generateJob(seed * 7919, 3, (pid, extra) => it(pid, extra));
    const b = j.pc;
    if (b.slots.cpu) cpus.add(b.slots.cpu.pid);
    if (b.slots.gpu) gpus.add(b.slots.gpu.pid);
    if (b.slots.mb) mbs.add(b.slots.mb.pid);
    cases.add(b.slots.case.pid);
  }
  assert.ok(cpus.size >= 15, 'процессоров: ' + cpus.size);
  assert.ok(gpus.size >= 10, 'видеокарт: ' + gpus.size);
  assert.ok(mbs.size >= 15, 'плат: ' + mbs.size);
  assert.ok(cases.size >= 10, 'корпусов: ' + cases.size);
});
