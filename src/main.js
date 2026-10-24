// PC BUILD SIM — интерфейс и игровой процесс.

import { PART, PARTS, TYPES, TYPE_ORDER, specLine } from './parts.js';
import {
  SLOT_DEFS, slotsForItem, canInstall, canRemove, install, remove, partOf,
  cableIds, connectCable, disconnectCable, CABLE_LABELS, powerOn, benchmark,
  ramTotal, storages, temps, buildPrice, installedItems, powerDraw
} from './logic.js';
import { generateJob, jobChecks, jobDone } from './jobs.js';
import { S, load, save, reset, level, newItem, buildSig, LEVEL_XP } from './state.js';
import { createScene } from './scene.js';
import { createScreen } from './screen.js';
import { sfx, setHum, setSound } from './audio.js';

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const money = n => S.sandbox && n === S.money ? '∞' : '$' + Math.round(n).toLocaleString('ru-RU').replace(/\u00a0/g, ' ');

load();
setSound(S.settings.sound);

// ── 3D ──────────────────────────────────────────────────────────────────────
const view = createScene($('#view'));
const screen = createScreen(view.screen.canvas, view.screen.texture);
view.onFrame = now => screen.tick(now);

const ui = { selected: null, tool: null, powered: false, busy: false, timers: [] };

// ── Тосты, модалки, подсказки ───────────────────────────────────────────────
function toast(msg, kind = '') {
  const t = document.createElement('div');
  t.className = 'toast ' + kind;
  t.innerHTML = msg;
  $('#toasts').appendChild(t);
  setTimeout(() => t.classList.add('out'), 3600);
  setTimeout(() => t.remove(), 4000);
  if (kind === 'err') sfx.error();
}
function openModal(html, cls = '') {
  $('#modalBox').className = 'modal-box ' + cls;
  $('#modalBox').innerHTML = `<button class="m-close" data-close>×</button>${html}`;
  $('#modal').classList.remove('hidden');
}
function closeModal() { $('#modal').classList.add('hidden'); }
$('#modal').addEventListener('click', e => { if (e.target.id === 'modal' || e.target.closest('[data-close]')) closeModal(); });

function hint(text) { $('#hint').innerHTML = text; $('#hint').classList.toggle('hidden', !text); }

// ── Верхняя панель ─────────────────────────────────────────────────────────
function renderTop() {
  $('#money').textContent = money(S.money);
  $('#day').textContent = S.sandbox ? 'Песочница' : `День ${S.day}`;
  const lv = level();
  $('#lvl').textContent = S.sandbox ? '∞' : lv;
  const cur = LEVEL_XP[lv - 1] || 0, next = LEVEL_XP[lv] || cur + 1000;
  $('#xpFill').style.width = S.sandbox ? '100%' : Math.min(100, (S.xp - cur) / (next - cur) * 100) + '%';
  $('#xpText').textContent = S.sandbox ? 'все детали открыты' : `${S.xp - cur} / ${next - cur} XP`;
  $('#mailCount').textContent = S.inbox.length;
  $('#mailCount').classList.toggle('hidden', !S.inbox.length || S.sandbox);
  $('#btnMail').classList.toggle('hidden', S.sandbox);
  $('#btnSound').textContent = S.settings.sound ? '🔊' : '🔇';
}

// ── Инвентарь ───────────────────────────────────────────────────────────────
let invFilter = 'all';
function itemTags(it) {
  const t = [];
  if (it.client) t.push('<span class="tag tag-client">клиента</span>');
  if (it.tested && it.broken) t.push('<span class="tag tag-bad">неисправна</span>');
  if (it.tested && !it.broken) t.push('<span class="tag tag-ok">проверена</span>');
  if (it.dirty) t.push('<span class="tag tag-dust">пыль</span>');
  return t.join('');
}
function renderInventory() {
  const types = ['all', ...TYPE_ORDER.filter(t => S.inventory.some(i => PART[i.pid].type === t))];
  if (!types.includes(invFilter)) invFilter = 'all';
  $('#invTabs').innerHTML = types.map(t => `<button class="${t === invFilter ? 'active' : ''}" data-f="${t}" title="${t === 'all' ? 'Все' : TYPES[t].name}">${t === 'all' ? 'Все' : TYPES[t].icon}</button>`).join('');
  const list = S.inventory.filter(i => invFilter === 'all' || PART[i.pid].type === invFilter)
    .sort((a, b) => TYPE_ORDER.indexOf(PART[a.pid].type) - TYPE_ORDER.indexOf(PART[b.pid].type));
  $('#invCount').textContent = S.inventory.length;
  $('#invList').innerHTML = list.length ? list.map(it => {
    const p = PART[it.pid];
    return `<div class="inv-item ${ui.selected === it.uid ? 'sel' : ''}" data-uid="${it.uid}">
      <div class="ii-icon">${TYPES[p.type].icon}</div>
      <div class="ii-body"><div class="ii-name">${esc(p.name)}</div><div class="ii-spec">${esc(specLine(p))}</div><div>${itemTags(it)}</div></div>
    </div>`;
  }).join('') : `<div class="empty">Пусто.<br>Купите детали в <a href="#" data-open="shop">магазине</a>${S.job ? ' или снимите со стенда' : ''}.</div>`;
  renderDetail();
}

function renderDetail() {
  const it = S.inventory.find(i => i.uid === ui.selected);
  const box = $('#invDetail');
  if (!it) { box.classList.add('hidden'); return; }
  const p = PART[it.pid];
  const sellPrice = it.broken && it.tested ? 0 : Math.round(p.price * 0.5);
  box.classList.remove('hidden');
  box.innerHTML = `<div class="d-title">${TYPES[p.type].icon} ${esc(p.name)}</div>
    <div class="d-spec">${esc(specLine(p))}</div>
    <div class="d-state">Состояние: ${it.tested ? (it.broken ? '<b class="bad">неисправна</b>' : '<b class="ok">исправна</b>') : 'не проверена'}${it.dirty ? ' · в пыли' : ''}</div>
    <div class="d-hint">Нажмите на <b class="ok">зелёную</b> область в корпусе, чтобы установить.</div>
    <div class="d-actions">
      ${!it.tested ? `<button class="btn btn-dark" id="dTest">🔬 Проверить на тестере · $5</button>` : ''}
      ${it.dirty ? `<button class="btn btn-dark" id="dClean">💨 Почистить</button>` : ''}
      ${it.client ? '<span class="muted small">Деталь клиента — продать нельзя</span>'
        : `<button class="btn btn-dark" id="dSell">${sellPrice ? `Продать за $${sellPrice}` : 'Выбросить'}</button>`}
      <button class="btn btn-ghost" id="dCancel">Отмена</button>
    </div>`;
  $('#dTest')?.addEventListener('click', () => {
    if (!pay(5)) return;
    it.tested = true; save(); sfx.click();
    toast(it.broken ? `❌ ${esc(p.name)} — <b>неисправна</b>` : `✅ ${esc(p.name)} — исправна`, it.broken ? 'err' : 'ok');
    renderInventory();
  });
  $('#dClean')?.addEventListener('click', () => { it.dirty = false; save(); sfx.blow(); renderInventory(); });
  $('#dSell')?.addEventListener('click', () => {
    S.inventory = S.inventory.filter(i => i !== it);
    if (!S.sandbox) S.money += sellPrice;
    ui.selected = null; save(); sellPrice ? sfx.cash() : sfx.remove();
    toast(sellPrice ? `Продано: ${esc(p.name)} +$${sellPrice}` : `Выброшено: ${esc(p.name)}`);
    clearGhosts(); renderAll();
  });
  $('#dCancel').addEventListener('click', () => selectItem(null));
}

$('#invTabs').addEventListener('click', e => { const b = e.target.closest('button'); if (b) { invFilter = b.dataset.f; renderInventory(); } });
$('#invList').addEventListener('click', e => {
  const el = e.target.closest('.inv-item');
  if (el) selectItem(Number(el.dataset.uid) === ui.selected ? null : Number(el.dataset.uid));
});
document.addEventListener('click', e => { const a = e.target.closest('[data-open]'); if (a) { e.preventDefault(); a.dataset.open === 'shop' ? openShop() : openMail(); } });

function pay(n) {
  if (S.sandbox) return true;
  if (S.money < n) { toast('Не хватает денег', 'err'); return false; }
  S.money -= n;
  renderTop();
  return true;
}

// ── Выбор детали и установка ────────────────────────────────────────────────
function clearGhosts() { view.setGhosts([], S.bench); }

function selectItem(uid) {
  setTool(null);
  ui.selected = uid;
  closeCtx();
  const it = S.inventory.find(i => i.uid === uid);
  if (!it) { clearGhosts(); hintDefault(); renderInventory(); return; }
  sfx.select();
  const opts = slotsForItem(S.bench, it);
  view.setGhosts(opts, S.bench, it);
  const p = PART[it.pid];
  if (!opts.length) {
    const any = Object.keys(SLOT_DEFS).find(s => SLOT_DEFS[s].type === p.type && (!SLOT_DEFS[s].kind || SLOT_DEFS[s].kind === p.kind));
    const r = canInstall(S.bench, it, any);
    hint(`⚠ Некуда установить: ${esc(r.reason === 'Слот занят' ? 'все подходящие слоты заняты' : r.reason)}`);
  } else if (!opts.some(o => o.ok)) {
    hint(`⚠ ${esc(opts[0].reason)}`);
  } else {
    hint(`Нажмите на <b class="ok">зелёную</b> область, чтобы установить <b>${esc(p.name)}</b>. Esc — отмена.`);
  }
  renderInventory();
}

function ensureOff() {
  if (ui.powered) { powerOff(); toast('Компьютер выключен — с деталями работают только на выключенном ПК'); }
}

function doInstall(slot) {
  $('#tooltip').classList.add('hidden');
  const it = S.inventory.find(i => i.uid === ui.selected);
  if (!it) return;
  ensureOff();
  const r = install(S.bench, it, slot);
  if (!r.ok) { toast(esc(r.reason), 'err'); return; }
  S.inventory = S.inventory.filter(i => i !== it);
  ui.selected = null;
  sfx.install();
  save();
  view.setBuild(S.bench, { animateSlot: slot });
  clearGhosts();
  renderAll();
  hintDefault();
  const p = PART[it.pid];
  if (cableIds(S.bench).some(id => !S.bench.cables[id]) && S.bench.slots.psu && ['mb', 'gpu', 'storage', 'psu'].includes(p.type)) {
    toast('Не забудьте подключить кабели: кнопка <b>🔌 Кабели</b>');
  }
}

function doRemove(slot) {
  ensureOff();
  const r = remove(S.bench, slot);
  if (!r.ok) { toast(esc(r.reason), 'err'); return; }
  S.inventory.push(r.item);
  sfx.remove();
  save();
  view.setBuild(S.bench);
  if (ui.tool === 'cables') showCablePoints();
  renderAll();
}

// ── Контекстное меню детали на стенде ───────────────────────────────────────
function openCtx(slot, x, y) {
  const it = S.bench.slots[slot];
  if (!it) return;
  const p = PART[it.pid];
  const rm = canRemove(S.bench, slot);
  const box = $('#ctx');
  box.innerHTML = `<div class="ctx-title">${TYPES[p.type].icon} ${esc(p.name)}</div>
    <div class="ctx-spec">${esc(specLine(p))}</div>
    ${it.client ? '<div class="ctx-spec">Деталь клиента</div>' : ''}
    ${it.dirty ? '<button data-a="clean">💨 Продуть от пыли</button>' : ''}
    <button data-a="remove" ${rm.ok ? '' : 'disabled'}>🔧 Снять${rm.ok ? '' : ` <small>(${esc(rm.reason)})</small>`}</button>
    <button data-a="close">Закрыть</button>`;
  box.classList.remove('hidden');
  const r = box.getBoundingClientRect();
  box.style.left = Math.min(x + 8, innerWidth - r.width - 8) + 'px';
  box.style.top = Math.min(y + 8, innerHeight - r.height - 8) + 'px';
  box.onclick = e => {
    const b = e.target.closest('button');
    if (!b || b.disabled) return;
    closeCtx();
    if (b.dataset.a === 'remove') doRemove(slot);
    if (b.dataset.a === 'clean') cleanSlot(slot);
  };
}
function closeCtx() { $('#ctx').classList.add('hidden'); }

function cleanSlot(slot) {
  const it = S.bench.slots[slot];
  if (!it?.dirty) return;
  it.dirty = false;
  sfx.blow();
  view.blowDust(slot);
  save();
  setTimeout(() => { view.setBuild(S.bench); renderJob(); }, 350);
  invalidateBench();
}

// ── Инструменты ─────────────────────────────────────────────────────────────
function setTool(t) {
  ui.tool = ui.tool === t ? null : t;
  $('#btnCables').classList.toggle('on', ui.tool === 'cables');
  $('#btnDust').classList.toggle('on', ui.tool === 'dust');
  document.body.classList.toggle('tool-dust', ui.tool === 'dust');
  if (ui.tool) { ui.selected = null; clearGhosts(); renderInventory(); }
  if (ui.tool === 'cables') { showCablePoints(); hint('Нажмите на <b class="warn">жёлтую</b> точку, чтобы подключить кабель от блока питания. <b class="ok">Зелёную</b> — отключить.'); }
  else view.setCablePoints([], S.bench);
  if (ui.tool === 'dust') hint('💨 Баллон со сжатым воздухом: нажимайте на запылённые детали.');
  if (!ui.tool) hintDefault();
}
function showCablePoints() {
  const ids = cableIds(S.bench);
  view.setCablePoints(ids.map(id => ({ id, connected: !!S.bench.cables[id] })), S.bench);
  if (!ids.length) hint('Пока нечего подключать: установите материнскую плату, видеокарту с доп. питанием или накопители.');
  else if (!S.bench.slots.psu) hint('⚠ Сначала установите блок питания — от него идут все кабели.');
}
$('#btnCables').addEventListener('click', () => { sfx.click(); setTool('cables'); });
$('#btnDust').addEventListener('click', () => { sfx.click(); setTool('dust'); });
$('#btnCam').addEventListener('click', () => { sfx.click(); view.resetCamera(); });
$('#btnScreen').addEventListener('click', () => { sfx.click(); view.lookAtScreen(); });

// ── Клики по сцене ──────────────────────────────────────────────────────────
view.on('pick', (pk, x, y) => {
  $('#tooltip').classList.add('hidden');
  closeCtx();
  if (!pk) return;
  if (pk.kind === 'ghost') {
    if (pk.ok) doInstall(pk.slot);
    else toast(esc(pk.reason), 'err');
    return;
  }
  if (pk.kind === 'cable') {
    ensureOff();
    const r = pk.connected ? disconnectCable(S.bench, pk.id) : connectCable(S.bench, pk.id);
    if (!r.ok) { toast(esc(r.reason), 'err'); return; }
    sfx.cable();
    save();
    view.setBuild(S.bench);
    showCablePoints();
    invalidateBench();
    renderJob();
    return;
  }
  if (pk.kind === 'part') {
    if (ui.tool === 'dust') {
      if (S.bench.slots[pk.slot]?.dirty) cleanSlot(pk.slot);
      else toast('Эта деталь уже чистая');
      return;
    }
    if (ui.selected) return;
    sfx.click();
    openCtx(pk.slot, x, y);
  }
});
view.on('hover', (pk, x, y) => {
  const tip = $('#tooltip');
  if (!pk || pk.kind === 'part' && ui.tool !== 'dust' && !S.bench.slots[pk.slot]) { tip.classList.add('hidden'); return; }
  let text = '';
  if (pk.kind === 'part') { const p = partOf(S.bench.slots[pk.slot]); text = `<b>${esc(p.name)}</b>${S.bench.slots[pk.slot].dirty ? ' · <span class="warn">в пыли</span>' : ''}`; }
  if (pk.kind === 'ghost') text = pk.ok ? `<span class="ok">Установить сюда:</span> ${SLOT_DEFS[pk.slot].label}` : `<span class="bad">✕</span> ${esc(pk.reason)}`;
  if (pk.kind === 'cable') text = `${pk.connected ? '🟢 Отключить' : '🟡 Подключить'}: ${CABLE_LABELS[pk.id]}`;
  tip.innerHTML = text;
  tip.classList.remove('hidden');
  tip.style.left = x + 14 + 'px';
  tip.style.top = y + 14 + 'px';
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closeCtx(); if (ui.selected) selectItem(null); else if (ui.tool) setTool(ui.tool); }
});

// ── Включение и тест ────────────────────────────────────────────────────────
function clearTimers() { ui.timers.forEach(clearTimeout); ui.timers = []; }
const later = (fn, ms) => ui.timers.push(setTimeout(fn, ms));

function sysInfo() {
  const b = S.bench;
  const drives = storages(b).map(s => partOf(b.slots[s]).name.split(' (')[0]).join(', ');
  return {
    mb: partOf(b.slots.mb)?.name, cpu: partOf(b.slots.cpu)?.name, gpu: partOf(b.slots.gpu)?.name,
    ram: ramTotal(b) * 1024, drives, cpuTemp: temps(b).cpu
  };
}

function powerOffVisual() {
  ui.powered = false;
  view.setPower(false);
  setHum(false);
  screen.set('off');
  $('#btnPower').classList.remove('on');
  $('#btnPower').innerHTML = '⏻ Включить';
  $('#btnBench').disabled = true;
  hintDefault();
}
function powerOff() { clearTimers(); ui.busy = false; powerOffVisual(); }

function powerOnFlow() {
  if (ui.powered) { powerOff(); sfx.click(); return; }
  setTool(null);
  selectItem(null);
  const r = powerOn(S.bench);
  sfx.click();
  if (!r.power) { toast('⏻ ' + esc(r.error), 'err'); return; }
  ui.powered = true;
  view.setPower(true);
  setHum(true);
  $('#btnPower').classList.add('on');
  $('#btnPower').innerHTML = '⏻ Выключить';
  hintDefault();
  if (!r.post) {
    screen.set('nosignal');
    later(() => { if (r.beep) sfx.beepCode(r.beep); toast(`🔊 ${r.beep ? 'Писк: ' + r.beep + '. ' : ''}${esc(r.error)}`, 'err'); }, 900);
    return;
  }
  screen.set('post', { ...sysInfo(), error: r.boot ? '' : r.error });
  later(() => sfx.postBeep(), 300);
  if (!r.boot) {
    later(() => toast('🖥 ' + esc(r.error), 'err'), 1400);
    if (r.shutdown) later(() => { powerOff(); toast('Компьютер аварийно выключился'); }, 3200);
    return;
  }
  const sig = buildSig({ slots: Object.fromEntries(storages(S.bench).map(s => [s, S.bench.slots[s]])), cables: {} });
  const install = S.osSig !== sig;
  later(() => screen.set('boot', { install }), 1500);
  later(() => {
    S.osSig = sig; save();
    screen.set('desktop', sysInfo());
    $('#btnBench').disabled = false;
    toast('✅ Компьютер загрузился! Можно запускать <b>📊 Тест</b>', 'ok');
    hintDefault();
    renderJob();
  }, install ? 5200 : 3000);
}
$('#btnPower').addEventListener('click', powerOnFlow);

function invalidateBench() { if (S.bench_score && S.bench_score.sig !== buildSig(S.bench)) { S.bench_score = null; save(); } }
const benchScore = () => (S.bench_score && S.bench_score.sig === buildSig(S.bench)) ? S.bench_score.score : null;

$('#btnBench').addEventListener('click', () => {
  if (!ui.powered || ui.busy || !['desktop', 'result'].includes(screen.mode)) return;
  const r = benchmark(S.bench);
  if (!r.ok) { toast(esc(r.error), 'err'); return; }
  ui.busy = true;
  $('#btnBench').disabled = true;
  view.lookAtScreen();
  screen.set('bench', { ...sysInfo(), ...r, dur: 6000 });
  later(() => {
    ui.busy = false;
    $('#btnBench').disabled = false;
    screen.set('result', { ...sysInfo(), ...r });
    S.bench_score = { sig: buildSig(S.bench), score: r.score };
    save();
    sfx.levelUp();
    toast(`📊 Результат теста: <b>${r.score}</b> очков (≈${r.fps} FPS)${r.throttle ? ' — <span class="warn">перегрев!</span>' : ''}`, 'ok');
    renderJob();
  }, 6000);
});

// ── Заказ ───────────────────────────────────────────────────────────────────
function renderJob() {
  const box = $('#jobBody');
  const j = S.job;
  if (!j) {
    const b = S.bench;
    const hasOwn = installedItems(b).length > 0;
    const pw = powerOn(b);
    const price = Math.round(buildPrice(b) * 1.15 + (benchScore() || 0) * 0.02);
    box.innerHTML = `<div class="job-empty">
      ${S.sandbox ? '<p><b>Песочница.</b> Деньги бесконечны, все детали открыты. Покупайте в магазине и собирайте что угодно!</p>'
        : `<p>Нет активного заказа.</p><button class="btn btn-yellow btn-wide" data-open="mail">📧 Открыть почту ${S.inbox.length ? `(${S.inbox.length})` : ''}</button>`}
      <p class="muted small">Можно собрать свой ПК из купленных деталей${S.sandbox ? '' : ' и продать его с наценкой 15%'}.</p>
      ${hasOwn ? `<div class="own-stats">
        <div>Стоимость деталей: <b>$${buildPrice(b)}</b></div>
        <div>Потребление: <b>${powerDraw(b)} Вт</b>${b.slots.psu ? ` из ${partOf(b.slots.psu).watt}` : ''}</div>
        <div>Последний тест: <b>${benchScore() ?? '—'}</b></div>
      </div>
      ${S.sandbox ? '' : `<button class="btn btn-dark btn-wide" id="sellBuild" ${pw.boot ? '' : 'disabled'}>💰 Продать сборку за $${price}</button>
      ${pw.boot ? '' : '<div class="muted small">Продать можно только рабочий ПК</div>'}`}
      <button class="btn btn-ghost btn-wide" id="clearBench">Разобрать всё в инвентарь</button>` : ''}
    </div>`;
    $('#sellBuild')?.addEventListener('click', () => {
      if (!powerOn(S.bench).boot) return;
      powerOff();
      S.money += price; S.earned += price;
      S.bench = { slots: {}, cables: {} };
      S.bench_score = null;
      S.xp += 30;
      save(); sfx.cash();
      view.setBuild(S.bench);
      toast(`Сборка продана за <b>$${price}</b> · +30 XP`, 'ok');
      renderAll();
    });
    $('#clearBench')?.addEventListener('click', () => { powerOff(); returnBench(); toast('Все детали перенесены в инвентарь'); });
    $('#jobTitle').textContent = 'Заказ';
    return;
  }
  const checks = jobChecks(j, S.bench, { bench: benchScore() });
  const done = checks.every(c => c.ok);
  $('#jobTitle').textContent = 'Заказ: ' + j.customer;
  box.innerHTML = `<div class="job-subject">${esc(j.subject)}</div>
    <details class="job-text"><summary>Письмо клиента</summary><p>${esc(j.text)}</p></details>
    <ul class="checks">${checks.map(c => `<li class="${c.ok ? 'ok' : ''}">${c.ok ? '✅' : '⬜'} ${esc(c.label)}</li>`).join('')}</ul>
    <div class="job-reward">Оплата: <b>$${j.reward}</b> · +${j.xp} XP</div>
    <button class="btn btn-yellow btn-wide" id="jobDone" ${done ? '' : 'disabled'}>✔ Сдать заказ</button>
    <button class="btn btn-ghost btn-wide" id="jobCancel">Отказаться</button>`;
  $('#jobDone').addEventListener('click', completeJob);
  $('#jobCancel').addEventListener('click', () => {
    openModal(`<h2>Отказаться от заказа?</h2><p class="muted">Компьютер вернётся клиенту, ваши установленные детали — в инвентарь.</p>
      <div class="m-actions"><button class="btn btn-yellow" id="mYes">Отказаться</button><button class="btn btn-dark" data-close>Нет</button></div>`);
    $('#mYes').addEventListener('click', () => { closeModal(); powerOff(); finishJob(false); toast('Заказ отменён'); });
  });
}

function returnBench() {
  for (const it of installedItems(S.bench)) if (!it.client) S.inventory.push(it);
  S.bench = { slots: {}, cables: {} };
  S.bench_score = null;
  save();
  view.setBuild(S.bench);
  renderAll();
}

function finishJob(success) {
  // детали клиента возвращаются клиенту, ваши — остаются (если не сдаёте их вместе с ПК)
  if (!success) for (const it of installedItems(S.bench)) if (!it.client) S.inventory.push(it);
  S.inventory = S.inventory.filter(i => !i.client);
  S.bench = { slots: {}, cables: {} };
  S.bench_score = null;
  S.job = null;
  save();
  view.setBuild(S.bench);
  renderAll();
}

function completeJob() {
  const j = S.job;
  if (!j || !jobDone(j, S.bench, { bench: benchScore() })) return;
  powerOff();
  const lvBefore = level();
  S.money += j.reward; S.earned += j.reward;
  S.xp += j.xp;
  S.jobsDone++;
  finishJob(true);
  addMail(1);
  sfx.cash();
  const lvAfter = level();
  openModal(`<h2>Заказ выполнен! 🎉</h2>
    <p>${esc(j.customer)} доволен(а) работой.</p>
    <div class="big-money">+$${j.reward}</div>
    <p class="muted">+${j.xp} XP · выполнено заказов: ${S.jobsDone}</p>
    ${lvAfter > lvBefore ? `<div class="lvl-up">⭐ Новый уровень мастерской: ${lvAfter}! В магазине появились новые детали.</div>` : ''}
    <div class="m-actions"><button class="btn btn-yellow" data-close>Отлично</button><button class="btn btn-dark" data-open="mail">📧 Почта</button></div>`, 'gold');
  if (lvAfter > lvBefore) setTimeout(sfx.levelUp, 300);
}

// ── Почта ───────────────────────────────────────────────────────────────────
function addMail(n) {
  for (let i = 0; i < n; i++) {
    const seed = S.seedBase + S.day * 100 + S.inbox.length * 7 + S.jobsDone * 13 + i * 31 + Math.floor(Math.random() * 1e6);
    S.inbox.push({ ...generateJob(seed, level(), (pid, extra) => newItem(pid, extra)), day: S.day, read: false });
  }
  while (S.inbox.length > 8) S.inbox.shift();
  save();
  renderTop();
}

let mailSel = 0;
function openMail() {
  closeModal();
  if (!S.inbox.length) addMail(2);
  mailSel = Math.min(mailSel, S.inbox.length - 1);
  renderMail();
}
function renderMail() {
  const m = S.inbox[mailSel];
  if (m) m.read = true;
  openModal(`<div class="mail">
    <div class="mail-list">
      <div class="mail-head">📧 Входящие <span class="muted small">· День ${S.day}</span></div>
      ${S.inbox.map((j, i) => `<div class="mail-item ${i === mailSel ? 'sel' : ''} ${j.read ? '' : 'unread'}" data-i="${i}">
        <div class="mi-from">${esc(j.customer)} <span class="mi-pay">$${j.reward}</span></div>
        <div class="mi-subj">${esc(j.subject)}</div></div>`).join('')}
      <button class="btn btn-dark btn-wide" id="nextDay">🌙 Следующий день</button>
    </div>
    <div class="mail-read">${m ? `
      <div class="mr-subj">${esc(m.subject)}</div>
      <div class="mr-from">От: <b>${esc(m.customer)}</b></div>
      <p class="mr-text">${esc(m.text)}</p>
      <div class="mr-info">
        <div>Оплата: <b class="ok">$${m.reward}</b></div><div>Опыт: <b>+${m.xp} XP</b></div>
        <div>Тип: ${({ repair: '🔧 Ремонт', clean: '💨 Чистка', upgrade_gpu: '🎮 Апгрейд видеокарты', upgrade_ram: '📏 Апгрейд памяти', upgrade_ssd: '💾 Установка SSD', build: '🖥 Сборка с нуля' })[m.type]}</div>
      </div>
      <div class="m-actions"><button class="btn btn-yellow" id="accept">Принять заказ</button><button class="btn btn-ghost" id="decline">Удалить письмо</button></div>`
      : '<div class="empty">Писем нет. Перейдите к следующему дню.</div>'}
    </div></div>`, 'wide');
  $$('.mail-item').forEach(el => el.addEventListener('click', () => { mailSel = Number(el.dataset.i); sfx.click(); renderMail(); }));
  $('#nextDay').addEventListener('click', () => {
    if (S.job) { toast('Сначала завершите текущий заказ', 'err'); return; }
    S.day++; addMail(2 + (Math.random() < 0.5 ? 1 : 0)); sfx.select(); renderMail(); renderTop();
  });
  $('#accept')?.addEventListener('click', () => acceptJob(mailSel));
  $('#decline')?.addEventListener('click', () => { S.inbox.splice(mailSel, 1); save(); renderTop(); renderMail(); });
}

function acceptJob(i) {
  if (S.job) { toast('Сначала завершите или отмените текущий заказ', 'err'); return; }
  const j = S.inbox[i];
  powerOff();
  for (const it of installedItems(S.bench)) if (!it.client) S.inventory.push(it);
  S.inbox.splice(i, 1);
  S.job = j;
  S.bench = j.pc;
  delete j.pc;
  S.bench_score = null;
  save();
  closeModal();
  view.setBuild(S.bench, { animateSlot: 'case' });
  view.resetCamera();
  sfx.install();
  toast(`Компьютер клиента на столе. ${j.type === 'build' ? 'Купите детали в магазине 🛒' : 'Попробуйте включить его ⏻'}`, 'ok');
  renderAll();
}

// ── Магазин ─────────────────────────────────────────────────────────────────
let shopCat = 'cpu', shopCompat = false;
function openShop() { closeModal(); renderShop(); }
function renderShop() {
  const lv = level();
  const b = S.bench;
  const mb = partOf(b.slots.mb), cs = partOf(b.slots.case);
  const list = PARTS.filter(p => p.type === shopCat).filter(p => {
    if (!shopCompat) return true;
    if (p.type === 'cpu' && mb) return p.socket === mb.socket;
    if (p.type === 'ram' && mb) return p.ram === mb.ram;
    if (p.type === 'mb') return (!cs || ['ATX', 'mATX', 'ITX'].slice(['ATX', 'mATX', 'ITX'].indexOf(cs.form)).includes(p.form)) && (!b.slots.cpu || p.socket === partOf(b.slots.cpu).socket);
    if (p.type === 'gpu' && cs) return p.len <= cs.gpuMax;
    return true;
  }).sort((a, b2) => a.price - b2.price);
  openModal(`<div class="shop">
    <div class="shop-head"><h2>🛒 Магазин комплектующих</h2>
      <div class="shop-money">Баланс: <b>${money(S.money)}</b></div></div>
    <div class="shop-tabs">${TYPE_ORDER.map(t => `<button class="${t === shopCat ? 'active' : ''}" data-cat="${t}">${TYPES[t].icon} ${TYPES[t].name}</button>`).join('')}</div>
    <label class="chk"><input type="checkbox" id="shopCompat" ${shopCompat ? 'checked' : ''}> Только совместимые с ПК на столе</label>
    <div class="shop-grid">${list.map(p => {
      const locked = p.lvl > lv;
      return `<div class="shop-card ${locked ? 'locked' : ''}">
        <div class="sc-icon">${TYPES[p.type].icon}</div>
        <div class="sc-name">${esc(p.name)}</div>
        <div class="sc-spec">${esc(specLine(p))}</div>
        <div class="sc-foot"><span class="sc-price">$${p.price}</span>
          ${locked ? `<span class="sc-lock">🔒 Уровень ${p.lvl}</span>` : `<button class="btn btn-yellow" data-buy="${p.id}">Купить</button>`}</div>
      </div>`;
    }).join('') || '<div class="empty">Нет совместимых деталей</div>'}</div></div>`, 'wide');
  $$('.shop-tabs button').forEach(bt => bt.addEventListener('click', () => { shopCat = bt.dataset.cat; sfx.click(); renderShop(); }));
  $('#shopCompat').addEventListener('change', e => { shopCompat = e.target.checked; renderShop(); });
  $$('[data-buy]').forEach(bt => bt.addEventListener('click', () => {
    const p = PART[bt.dataset.buy];
    if (!pay(p.price)) return;
    const it = newItem(p.id);
    S.inventory.push(it);
    save(); sfx.cash();
    toast(`Куплено: <b>${esc(p.name)}</b>`, 'ok');
    renderInventory();
    $('.shop-money b').textContent = money(S.money);
  }));
}
$('#btnShop').addEventListener('click', () => { sfx.click(); openShop(); });
$('#btnMail').addEventListener('click', () => { sfx.click(); openMail(); });
$('#btnSound').addEventListener('click', () => { S.settings.sound = !S.settings.sound; setSound(S.settings.sound); if (ui.powered) setHum(true); save(); renderTop(); });

// ── Меню ────────────────────────────────────────────────────────────────────
$('#btnMenu').addEventListener('click', () => {
  sfx.click();
  openModal(`<h2>Меню</h2>
    <div class="menu-btns">
      <button class="btn btn-dark btn-wide" id="mHelp">❓ Как играть</button>
      <button class="btn btn-dark btn-wide" id="mCareer">🧰 Новая карьера</button>
      <button class="btn btn-dark btn-wide" id="mSandbox">🏖 Песочница (бесконечные деньги)</button>
      <a class="btn btn-dark btn-wide" href="https://github.com/S4rgeant1k/WebGames">← Вернуться на GitHub</a>
    </div>
    <p class="muted small">Выполнено заказов: ${S.jobsDone} · заработано: $${S.earned}</p>`);
  $('#mHelp').addEventListener('click', showHelp);
  $('#mCareer').addEventListener('click', () => confirmReset(false));
  $('#mSandbox').addEventListener('click', () => confirmReset(true));
});
function confirmReset(sandbox) {
  openModal(`<h2>${sandbox ? 'Песочница' : 'Новая карьера'}</h2><p class="muted">Текущий прогресс будет удалён.</p>
    <div class="m-actions"><button class="btn btn-yellow" id="mGo">Начать</button><button class="btn btn-dark" data-close>Отмена</button></div>`);
  $('#mGo').addEventListener('click', () => {
    powerOff();
    reset(sandbox);
    if (!sandbox) addMail(3);
    ui.selected = null;
    view.setBuild(S.bench);
    closeModal(); renderAll();
    toast(sandbox ? 'Песочница: всё бесплатно!' : 'Новая карьера началась. Загляните в почту!', 'ok');
  });
}

function showHelp() {
  openModal(`<h2>Как играть</h2>
    <div class="help">
      <p>🖱 <b>Камера:</b> левая кнопка мыши — вращать, колесо — приблизить, правая — сдвинуть. На телефоне — пальцами.</p>
      <p>📧 <b>Почта:</b> берите заказы клиентов — ремонт, чистка, апгрейд, сборка с нуля.</p>
      <p>🛒 <b>Магазин:</b> покупайте детали. Новые появляются с ростом уровня мастерской.</p>
      <p>📦 <b>Установка:</b> выберите деталь в инвентаре справа → нажмите на <b class="ok">зелёную</b> область в корпусе. Красная — значит несовместимо (наведите, чтобы узнать почему).</p>
      <p>🔧 <b>Снять деталь:</b> нажмите на неё в корпусе. Порядок как в жизни: кулер → процессор → плата.</p>
      <p>🔌 <b>Кабели:</b> после установки блока питания подключите 24-pin, 8-pin CPU, питание видеокарты и SATA.</p>
      <p>⏻ <b>Включение:</b> смотрите на монитор и слушайте писк — он подскажет, что не так. Подозрительную деталь можно проверить на тестере в инвентаре.</p>
      <p>💨 <b>Пыль:</b> возьмите баллон и нажимайте на грязные детали.</p>
      <p>📊 <b>Тест:</b> после загрузки запустите бенчмарк — для заказов «Сборка» нужен определённый результат.</p>
    </div>
    <div class="m-actions"><button class="btn btn-yellow" data-close>Понятно!</button></div>`);
}

// ── Подсказки и общая отрисовка ─────────────────────────────────────────────
function hintDefault() {
  const b = S.bench;
  if (ui.selected || ui.tool) return;
  if (ui.powered) { hint(screen.mode === 'desktop' || screen.mode === 'result' ? 'Компьютер работает. Запустите 📊 Тест или выключите ⏻, чтобы менять детали.' : 'Компьютер включён…'); return; }
  if (!S.job && !installedItems(b).length) {
    hint(S.sandbox ? 'Купите корпус в магазине 🛒 и начните сборку.' : 'Откройте почту 📧 и возьмите заказ — или купите детали и соберите свой ПК на продажу.');
    return;
  }
  if (!b.slots.case) { hint('Выберите корпус в инвентаре и поставьте его на стол.'); return; }
  const miss = ['mb', 'cpu', 'cooler', 'psu'].filter(s => !b.slots[s]);
  if (miss.length) { hint(`Не хватает: ${miss.map(s => ({ mb: 'материнская плата', cpu: 'процессор', cooler: 'кулер', psu: 'блок питания' })[s]).join(', ')}.`); return; }
  const cables = cableIds(b).filter(id => !b.cables[id]);
  if (cables.length) { hint(`Не подключены кабели: ${cables.map(c => CABLE_LABELS[c]).join(', ')} → кнопка 🔌`); return; }
  hint('Нажмите ⏻ Включить, чтобы проверить компьютер. Нажмите на деталь, чтобы её снять.');
}

function renderAll() {
  renderTop();
  renderInventory();
  renderJob();
  hintDefault();
  invalidateBench();
}

// Мобильные кнопки панелей
$('#tglJob').addEventListener('click', () => { document.body.classList.toggle('show-job'); document.body.classList.remove('show-inv'); });
$('#tglInv').addEventListener('click', () => { document.body.classList.toggle('show-inv'); document.body.classList.remove('show-job'); });

// ── Старт ───────────────────────────────────────────────────────────────────
view.setBuild(S.bench);
if (!S.sandbox && !S.inbox.length && !S.job) addMail(3);
renderAll();
powerOffVisual();
if (S.tutorial) {
  S.tutorial = false; save();
  openModal(`<h2>Добро пожаловать в PC BUILD SIM!</h2>
    <p>Вы открыли свою мастерскую по ремонту и сборке компьютеров. Стартовый капитал — <b>$${S.money}</b>.</p>
    <p>Клиенты пишут на почту 📧: кому-то нужно починить ПК, кому-то — почистить, а кто-то хочет новый игровой компьютер.</p>
    <p class="muted">Совет: начните с простого заказа на ремонт или чистку.</p>
    <div class="m-actions"><button class="btn btn-yellow" data-open="mail">📧 Открыть почту</button><button class="btn btn-dark" id="tHelp">❓ Как играть</button></div>`, 'gold');
  $('#tHelp').addEventListener('click', showHelp);
}
window.__game = { S, view };
