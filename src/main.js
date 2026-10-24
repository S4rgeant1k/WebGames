// PC BUILD SIM — главный модуль: режимы (ходьба / верстак / ОС), интерфейс, заказы.

import { createScene } from './scene.js';
import { createScreen } from './screen.js';
import { sfx, setHum, setSound } from './audio.js';
import { ICON, PART_ICON } from './icons.js';
import { PART, PARTS, TYPES, TYPE_ORDER, rub, specLine } from './parts.js';
import {
  SLOT_DEFS, slotsForItem, canRemove, install, remove, partOf, cableIds, connectCable, disconnectCable,
  CABLE_LABELS, powerOn, benchmark, temps, powerDraw, ramTotal, ramSticks, storages, installedItems,
  dirtyItems, buildPrice, emptyBuild, fansCount
} from './logic.js';
import { generateJob, jobChecks, jobDone } from './jobs.js';
import {
  S, load, save, reset, level, newItem, newPC, benchPC, pcJob, jobPC, buildSig,
  LEVEL_XP, PARK_SPOTS, MAX_JOBS
} from './state.js';

// ── Утилиты ─────────────────────────────────────────────────────────────────
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const money = n => S.sandbox ? '∞' : rub(n);
const TEST_COST = 300;
const JOB_TYPE = {
  repair: 'Ремонт', clean: 'Чистка от пыли', upgrade_gpu: 'Замена видеокарты', upgrade_ram: 'Больше памяти',
  upgrade_ssd: 'Установка SSD', upgrade_cpu: 'Замена процессора', cooling: 'Охлаждение', build: 'Сборка с нуля'
};
const isTouch = matchMedia('(pointer: coarse)').matches;

function toast(html, kind = '') {
  const el = document.createElement('div');
  el.className = 'toast ' + kind;
  el.innerHTML = html;
  $('#toasts').appendChild(el);
  while ($('#toasts').children.length > 4) $('#toasts').firstChild.remove();
  setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 320); }, kind === 'err' ? 4200 : 3200);
  if (kind === 'err') sfx.error();
}

function openModal({ title, body, buttons = [], color = '', wide = false, onClose = null }) {
  const m = $('#modal');
  m.className = 'modal' + (wide ? ' wide' : '');
  m.innerHTML = `<div class="modal-h ${color}">${title}</div><div class="modal-b">${body}</div>
    ${buttons.length ? `<div class="modal-f">${buttons.map((b, i) => `<button class="btn ${b.cls || 'btn-line'}" data-mb="${i}" ${b.disabled ? 'disabled' : ''}>${b.label}</button>`).join('')}</div>` : ''}`;
  $('#modalWrap').classList.remove('hidden');
  ui.modalClose = onClose;
  m.querySelectorAll('[data-mb]').forEach(el => el.addEventListener('click', () => {
    const b = buttons[Number(el.dataset.mb)];
    sfx.click();
    if (!b.keep) closeModal(true);
    b.fn && b.fn();
  }));
  releaseLock();
}
function closeModal(silent = false) {
  if ($('#modalWrap').classList.contains('hidden')) return false;
  $('#modalWrap').classList.add('hidden');
  const fn = ui.modalClose; ui.modalClose = null;
  if (!silent && fn) fn();
  return true;
}
const modalOpen = () => !$('#modalWrap').classList.contains('hidden');
$('#modalWrap').addEventListener('pointerdown', e => { if (e.target.id === 'modalWrap') closeModal(); });

// ── Инициализация ───────────────────────────────────────────────────────────
load();
setSound(S.settings.sound);
const ui = {
  selected: null, tool: null, powered: false, booted: false, busy: false, timers: [],
  invTab: 'all', invDetail: null, shopCat: 'cpu', shopQ: '', shopSort: 'price', cart: {},
  mailSel: 0, started: false, modalClose: null, markRun: null
};
for (const pc of S.pcs) if (pc.id !== S.benchPc && (pc.spot == null)) pc.spot = freeSpot();

const view = createScene($('#view'));
const screen = createScreen(view.screen.canvas, view.screen.texture);
view.on('sens', () => S.settings.sens);
view.handlers && (view.handlers.sens = () => S.settings.sens);

// Иконки в статичных кнопках
$('#btnExit').innerHTML = ICON.exit + '<span>Отойти</span>';
$('#osExit').innerHTML = ICON.exit + '<span>Выйти</span>';
$('#jobMin').innerHTML = ICON.minus;
$('#invClose').innerHTML = ICON.x;
$('#ghFloat').innerHTML = ICON.github + 'GitHub';
$('#btnInvMob').innerHTML = ICON.box;
$('#btnMenuMob').innerHTML = ICON.menu;
if (innerWidth <= 640) $('#jobPanel').classList.add('min');

const EMPTY = emptyBuild();
const bench = () => benchPC();
const B = () => bench()?.build || EMPTY;
const scoreOf = pc => pc && pc.score && pc.score.sig === buildSig(pc.build) ? pc.score.score : null;
const pcAt = spot => S.pcs.find(p => p.id !== S.benchPc && p.spot === spot) || null;
function freeSpot() {
  for (let i = 0; i < PARK_SPOTS; i++) if (!S.pcs.some(p => p.id !== S.benchPc && p.spot === i)) return i;
  return null;
}
const pcName = pc => {
  if (!pc) return '';
  if (pc.owner === 'own') return 'Ваш ПК';
  const j = pcJob(pc);
  return j ? `ПК: ${j.customer}` : 'ПК клиента';
};
const pcLocation = pc => pc.id === S.benchPc ? 'на верстаке' : pc.spot != null ? `на стеллаже, место ${pc.spot + 1}` : '—';

// ── HUD ─────────────────────────────────────────────────────────────────────
function renderHUD() {
  const lv = level();
  const cur = LEVEL_XP[Math.min(lv - 1, LEVEL_XP.length - 1)] || 0;
  const next = LEVEL_XP[lv] ?? null;
  const pct = S.sandbox || next == null ? 100 : Math.round((S.xp - cur) / (next - cur) * 100);
  const stars = Array.from({ length: 5 }, (_, i) => `<span class="${S.rep >= i + 0.5 ? '' : 'off'}">${ICON.star}</span>`).join('');
  $('#hudStats').innerHTML = `
    <div class="hud-stars" title="Репутация">${stars}</div>
    <div class="hud-lvl"><div class="hud-lvl-t">УРОВЕНЬ ${S.sandbox ? '∞' : lv}</div><div class="hud-xp"><i style="width:${pct}%"></i></div></div>
    <div class="hud-money"><span class="coin">${ICON.rub}</span>${S.sandbox ? '∞' : rub(S.money).replace(' ₽', '')}</div>`;
  $('#hudDay').innerHTML = `ДЕНЬ ${S.day}<small>${S.sandbox ? 'Песочница' : 'PC BUILD SIM'}</small>`;
  // трекер заказов
  const items = [];
  items.push(`<div class="trk goal"><b>Цель</b>${esc(goal())}</div>`);
  for (const j of S.jobs) {
    const pc = jobPC(j);
    const done = pc && jobDone(j, pc.build, { bench: scoreOf(pc) });
    items.push(`<div class="trk ${done ? 'done' : ''}"><b>${esc(j.customer)} · ${JOB_TYPE[j.type]}</b><span class="muted">${done ? 'Готово — можно сдавать' : pc ? 'ПК ' + pcLocation(pc) : ''}</span></div>`);
  }
  $('#tracker').innerHTML = items.join('');
  $('#keysHelp').innerHTML = '<kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd> ходить · <kbd>Shift</kbd> бег · мышь — осмотреться · <kbd>E</kbd> действие · <kbd>Tab</kbd> склад · <kbd>Esc</kbd> меню';
}

function goal() {
  if (S.sandbox) return 'Покупайте детали на компьютере мастерской (у правой стены) и собирайте ПК на верстаке.';
  const bp = bench();
  if (bp && bp.owner === 'job') {
    const j = pcJob(bp);
    if (j && jobDone(j, bp.build, { bench: scoreOf(bp) })) return 'Заказ выполнен! Сдайте его в панели заказа за верстаком.';
    return 'Работайте за верстаком: выполните все пункты заказа.';
  }
  if (S.jobs.length) {
    const ready = S.jobs.find(j => { const pc = jobPC(j); return pc && jobDone(j, pc.build, { bench: scoreOf(pc) }); });
    if (ready) return `Заказ ${ready.customer} готов — сдайте его (стеллаж или «Заказы»).`;
    return 'Возьмите компьютер клиента со стеллажа (у левой стены) и поставьте на верстак.';
  }
  if (S.inbox.length) return 'Проверьте почту на компьютере мастерской (у правой стены).';
  return 'Новых писем нет. Завершите день у двери — завтра придут новые заказы.';
}

// ── Синхронизация 3D-мира ───────────────────────────────────────────────────
function syncWorld({ animateSlot = null } = {}) {
  view.setBuild(B(), { animateSlot });
  view.setParked(Array.from({ length: PARK_SPOTS }, (_, i) => {
    const pc = pcAt(i);
    if (!pc) return null;
    const j = pcJob(pc);
    return {
      build: pc.build, own: pc.owner === 'own',
      label: pc.owner === 'own' ? 'Ваш компьютер' : `ПК клиента: ${j ? j.customer + ' (' + JOB_TYPE[j.type] + ')' : ''}`,
      tag: pc.owner === 'own' ? 'МОЙ ПК' : (j ? j.customer : 'КЛИЕНТ')
    };
  }));
  drawBoard();
  drawOfficeScreen();
}

function renderAll() {
  renderHUD();
  if (document.body.classList.contains('m-build')) { renderToolbar(); renderJobPanel(); }
  renderInventory();
  drawBoard();
  drawOfficeScreen();
  if (!$('#os').classList.contains('hidden')) osRefresh();
}

// Доска заказов на стене
function drawBoard() {
  const c = view.board.canvas, x = c.getContext('2d');
  const W = c.width, H = c.height;
  x.fillStyle = '#f7f7f3'; x.fillRect(0, 0, W, H);
  x.fillStyle = '#1d2733'; x.font = 'bold 46px Arial'; x.textBaseline = 'top';
  x.fillText('ЗАКАЗЫ', 30, 22);
  x.font = '26px Arial'; x.fillStyle = '#666'; x.textAlign = 'right'; x.fillText('День ' + S.day, W - 30, 34); x.textAlign = 'left';
  x.fillStyle = '#1fa9e1'; x.fillRect(30, 80, W - 60, 4);
  if (!S.jobs.length) {
    x.fillStyle = '#555'; x.font = '30px Arial';
    x.fillText('Заказов пока нет.', 30, 120);
    x.fillText('Проверьте почту на компьютере!', 30, 165);
  }
  S.jobs.forEach((j, i) => {
    const y = 110 + i * 96;
    const pc = jobPC(j);
    const done = pc && jobDone(j, pc.build, { bench: scoreOf(pc) });
    x.fillStyle = done ? '#2fa84f' : '#f39200';
    x.beginPath(); x.arc(48, y + 26, 14, 0, 7); x.fill();
    x.fillStyle = '#1d2733'; x.font = 'bold 32px Arial';
    x.fillText(`${j.customer} — ${JOB_TYPE[j.type]}`, 76, y + 6);
    x.font = '24px Arial'; x.fillStyle = '#555';
    x.fillText(`${rub(j.reward)} · ${done ? 'готово!' : pc ? pcLocation(pc) : ''}`, 76, y + 46);
  });
  view.board.texture.needsUpdate = true;
}

// Экран компьютера мастерской (виден из комнаты)
function drawOfficeScreen() {
  const c = view.office.canvas, x = c.getContext('2d');
  const W = c.width, H = c.height;
  const g = x.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, '#20163a'); g.addColorStop(0.55, '#43215a'); g.addColorStop(1, '#7a2d4f');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  const rg = x.createRadialGradient(W * 0.75, H * 0.3, 10, W * 0.75, H * 0.3, 420);
  rg.addColorStop(0, 'rgba(255,138,61,.9)'); rg.addColorStop(1, 'rgba(255,138,61,0)');
  x.fillStyle = rg; x.fillRect(0, 0, W, H);
  const icons = [['#1fa9e1', 'Почта'], ['#f39200', 'Магазин'], ['#2fa84f', 'Заказы'], ['#8e5bd6', 'Склад'], ['#3a4a5c', 'Статистика']];
  icons.forEach(([col, name], i) => {
    x.fillStyle = col; x.fillRect(34, 26 + i * 100, 62, 62);
    x.fillStyle = '#fff'; x.font = '18px Arial'; x.textAlign = 'center'; x.fillText(name, 65, 108 + i * 100);
  });
  const unread = S.inbox.filter(m => !m.read).length;
  if (unread) {
    x.fillStyle = '#e0453a'; x.beginPath(); x.arc(98, 28, 16, 0, 7); x.fill();
    x.fillStyle = '#fff'; x.font = 'bold 20px Arial'; x.textAlign = 'center'; x.fillText(String(unread), 98, 35);
    x.fillStyle = 'rgba(255,255,255,.95)'; x.fillRect(W - 420, H - 160, 390, 90);
    x.fillStyle = '#1fa9e1'; x.fillRect(W - 420, H - 160, 8, 90);
    x.fillStyle = '#23292f'; x.font = 'bold 26px Arial'; x.textAlign = 'left';
    x.fillText('Новые письма: ' + unread, W - 395, H - 122);
    x.font = '20px Arial'; x.fillStyle = '#5b6670'; x.fillText('Клиенты ждут ответа', W - 395, H - 90);
  }
  x.fillStyle = '#111418'; x.fillRect(0, H - 44, W, 44);
  x.strokeStyle = '#ff5a3c'; x.lineWidth = 3; x.strokeRect(12, H - 37, 44, 30);
  x.fillStyle = '#ff5a3c'; x.font = 'italic 900 20px Arial'; x.textAlign = 'center'; x.fillText('Os', 34, H - 15);
  x.fillStyle = '#fff'; x.font = '20px Arial'; x.textAlign = 'right'; x.fillText('День ' + S.day, W - 20, H - 15);
  x.textAlign = 'left';
  view.office.texture.needsUpdate = true;
}

// ── Режимы ──────────────────────────────────────────────────────────────────
function setBodyMode(m) {
  const b = document.body;
  b.classList.toggle('m-walk', m === 'walk');
  b.classList.toggle('m-build', m === 'build' || m === 'screen-bench' || (m === 'fly' && b.classList.contains('m-build')));
  if (m === 'walk') b.classList.remove('m-build');
}
view.on('mode', m => {
  if (m === 'build') { setBodyMode('build'); renderToolbar(); renderJobPanel(); renderInventory(); hintDefault(); }
  if (m !== 'walk' && m !== 'fly') $('#menu').classList.add('hidden');
  if (m === 'walk') { setBodyMode('walk'); closeCtx(); $('#tooltip').classList.add('hidden'); renderHUD(); }
});

function releaseLock() { if (document.pointerLockElement) { ui.quietUnlock = performance.now() + 400; document.exitPointerLock(); } }
view.on('lock', locked => {
  if (locked) { $('#menu').classList.add('hidden'); return; }
  if (ui.quietUnlock > performance.now()) return;
  if (view.mode === 'walk' && !modalOpen() && !document.body.classList.contains('inv-open') && $('#os').classList.contains('hidden') && ui.started) showMenu('pause');
});

// ── Ходьба: цель и взаимодействие ───────────────────────────────────────────
view.on('target', t => {
  const p = $('#prompt');
  $('#cross').classList.toggle('on', !!t);
  if (!t || !t.label) { p.classList.add('hidden'); $('#btnAct').classList.add('dim'); $('#btnAct').innerHTML = ICON.hand + '<span>Действие</span>'; return; }
  p.innerHTML = `<kbd>${isTouch ? ICON.hand : 'E'}</kbd>${esc(t.label)}`;
  p.classList.remove('hidden');
  $('#btnAct').classList.remove('dim');
  $('#btnAct').innerHTML = ICON.hand + `<span>${esc(shortLabel(t))}</span>`;
});
const shortLabel = t => ({ bench: 'Верстак', office: 'Компьютер', shelf: 'Склад', door: 'Дверь', board: 'Доска' })[t.id] || 'Взять ПК';
view.on('interact', interact);

function interact(t) {
  if (!t || modalOpen()) return;
  sfx.click();
  if (t.id === 'bench') { releaseLock(); closeInventory(); view.enterBuild(); }
  else if (t.id === 'office') { closeInventory(); view.lookAtOffice(() => openOS('office', S.inbox.some(m => !m.read) ? 'mail' : null)); }
  else if (t.id === 'shelf') openInventory();
  else if (t.id === 'door') endDayDialog();
  else if (t.id === 'board') jobsDialog();
  else if (t.id.startsWith('park:')) parkDialog(Number(t.id.slice(5)));
}

// ── Верстак: панель инструментов ────────────────────────────────────────────
function renderToolbar() {
  const pc = bench();
  const tools = [
    { id: 'hand', ic: ICON.hand, t: 'Руки', on: !ui.tool, k: '1' },
    { id: 'cables', ic: ICON.plug, t: 'Кабели', on: ui.tool === 'cables', k: 'C', dis: !pc },
    { id: 'dust', ic: ICON.wind, t: 'Продувка', on: ui.tool === 'dust', k: 'B', dis: !pc },
    { id: 'power', ic: ICON.power, t: ui.powered ? 'Выключить' : 'Включить', on: ui.powered, k: 'P', dis: !pc, cls: 'pw' },
    { id: 'monitor', ic: ICON.monitor, t: 'Монитор', k: 'M', dis: !ui.booted },
    { id: 'camera', ic: ICON.camera, t: 'Камера', k: 'R' },
    { id: 'rack', ic: ICON.box, t: 'На стеллаж', dis: !pc }
  ];
  $('#toolbar').innerHTML = tools.map(b => `<button class="tool ${b.cls || ''} ${b.on ? 'on' : ''}" data-tool="${b.id}" ${b.dis ? 'disabled' : ''}>${b.k ? `<span class="k">${b.k}</span>` : ''}${b.ic}<span>${b.t}</span></button>`).join('');
  $('#pcTitle').textContent = pc ? `${pcName(pc)}${pc.owner === 'job' && pcJob(pc) ? ' · ' + JOB_TYPE[pcJob(pc).type] : ''}` : 'Верстак пуст';
}
$('#toolbar').addEventListener('click', e => {
  const b = e.target.closest('[data-tool]');
  if (!b || b.disabled) return;
  sfx.click();
  toolAction(b.dataset.tool);
});
function toolAction(id) {
  if (id === 'hand') setTool(null);
  else if (id === 'cables' || id === 'dust') setTool(id);
  else if (id === 'power') powerOnFlow();
  else if (id === 'monitor') { if (ui.booted) { setTool(null); selectItem(null); view.lookAtScreen(() => openOS('bench')); } }
  else if (id === 'camera') view.resetCamera();
  else if (id === 'rack') moveBenchToRack();
}
$('#btnExit').addEventListener('click', () => { sfx.click(); exitBuild(); });
function exitBuild() {
  setTool(null); selectItem(null); closeCtx();
  $('#tooltip').classList.add('hidden');
  view.exitToWalk();
}

function hint(html) { $('#hint').innerHTML = html; }
function hintDefault() {
  if (ui.tool || ui.selected) return;
  const pc = bench();
  if (innerWidth <= 640 && pc && !ui.booted) { hint(''); return; }
  if (!pc) hint('Верстак пуст. Выберите <b>корпус</b> в инвентаре, чтобы начать сборку своего ПК, или принесите ПК клиента со стеллажа.');
  else if (ui.booted) hint('Компьютер работает. Нажмите <b>«Монитор»</b>, чтобы открыть систему и запустить 3DMark.');
  else hint('Выберите деталь в инвентаре, чтобы установить. Нажмите на деталь в корпусе, чтобы снять её.' + (isTouch ? ' Двумя пальцами — приблизить.' : ' Колёсико — приблизить, правая кнопка — сдвинуть.'));
}

// ── Панель заказа (слева) ───────────────────────────────────────────────────
$('#jobMin').addEventListener('click', () => { $('#jobPanel').classList.toggle('min'); });
function checksHTML(checks) {
  return `<ul class="checks">${checks.map(c => `<li class="${c.ok ? 'ok' : ''}"><span class="box">${c.ok ? ICON.check : ''}</span><span>${esc(c.label)}</span></li>`).join('')}</ul>`;
}
function renderJobPanel() {
  const pc = bench();
  const body = $('#jobBody');
  if (!pc) {
    $('#jobTitle').textContent = 'Верстак';
    body.innerHTML = `<p class="small">На верстаке ничего нет.</p>
      <p class="small muted">Компьютеры клиентов стоят на стеллаже у левой стены — подойдите и нажмите <b>E</b>, чтобы поставить ПК на верстак.</p>
      <p class="small muted">Чтобы собрать <b>свой ПК</b>, купите детали в магазине и установите корпус из инвентаря. Готовый ПК можно продать дороже стоимости деталей.</p>`;
    return;
  }
  const b = pc.build;
  if (pc.owner === 'job') {
    const j = pcJob(pc);
    if (!j) { body.innerHTML = '<p>Заказ не найден.</p>'; return; }
    const checks = jobChecks(j, b, { bench: scoreOf(pc) });
    const done = checks.every(c => c.ok);
    $('#jobTitle').textContent = 'Заказ: ' + j.customer;
    body.innerHTML = `<div class="job-subject">${esc(j.subject)}</div>
      <div class="job-from">${esc(JOB_TYPE[j.type])} · ${esc(j.email)}</div>
      ${checksHTML(checks)}
      <div class="reward"><span>Оплата · +${j.xp} XP</span><b>${rub(j.reward)}</b></div>
      <div class="job-btns">
        <button class="btn btn-green btn-wide" id="jpDone" ${done ? '' : 'disabled'}>${ICON.check} Сдать заказ</button>
        <button class="btn btn-line btn-wide" id="jpLetter">${ICON.mail} Письмо клиента</button>
      </div>`;
    $('#jpDone').onclick = () => completeJob(j);
    $('#jpLetter').onclick = () => openModal({ title: ICON.mail + ' ' + esc(j.subject), body: `<p class="muted small">От: ${esc(j.customer)} &lt;${esc(j.email)}&gt;</p><p>${esc(j.text)}</p>`, buttons: [{ label: 'Закрыть', cls: 'btn-cyan' }] });
  } else {
    const pw = powerOn(b);
    const price = ownSellPrice(pc);
    $('#jobTitle').textContent = 'Ваш компьютер';
    body.innerHTML = `<div class="stat-rows">
        <span>Стоимость деталей</span><span>${rub(ownPartsPrice(pc))}</span>
        <span>Потребление</span><span>${powerDraw(b)} Вт${b.slots.psu ? ' / ' + partOf(b.slots.psu).watt : ''}</span>
        <span>Оценка 3DMark</span><span>${scoreOf(pc) ?? '—'}</span>
      </div>
      ${S.sandbox ? '' : `<button class="btn btn-orange btn-wide" id="jpSell" ${pw.boot ? '' : 'disabled'}>Продать ПК за ${rub(price)}</button>
      <p class="small muted">${pw.boot ? 'Покупатель платит на 15% больше стоимости деталей + бонус за 3DMark.' : 'Продать можно только рабочий ПК (должен загружаться).'}</p>`}
      <button class="btn btn-line btn-wide" id="jpStrip">Разобрать на детали</button>`;
    $('#jpSell')?.addEventListener('click', () => sellOwnPC(pc));
    $('#jpStrip').onclick = () => confirmBox('Разобрать компьютер?', 'Все детали вернутся в инвентарь.', () => stripPC(pc));
  }
}
const ownPartsPrice = pc => installedItems(pc.build).filter(i => !i.client).reduce((s, it) => s + (partOf(it)?.price || 0), 0);
const ownSellPrice = pc => Math.round((ownPartsPrice(pc) * 1.15 + (scoreOf(pc) || 0) * 0.5) / 100) * 100;

function confirmBox(title, text, fn, yes = 'Да') {
  openModal({ title, body: `<p>${text}</p>`, buttons: [{ label: 'Отмена' }, { label: yes, cls: 'btn-cyan', fn }] });
}

// ── Инвентарь ───────────────────────────────────────────────────────────────
const sellPrice = it => {
  if (it.client) return 0;
  const p = PART[it.pid];
  return it.broken && it.tested ? Math.round(p.price * 0.1) : Math.round(p.price * 0.5);
};
function itemTags(it) {
  const t = [];
  if (it.client) t.push('<span class="tag tag-client">клиента</span>');
  if (it.tested && it.broken) t.push('<span class="tag tag-bad">неисправна</span>');
  if (it.tested && !it.broken) t.push('<span class="tag tag-ok">проверена</span>');
  if (it.dirty) t.push('<span class="tag tag-dust">пыль</span>');
  return t.join('');
}
function openInventory() {
  if (document.body.classList.contains('m-build')) return;
  document.body.classList.add('inv-open');
  releaseLock();
  view.inputEnabled = false;
  renderInventory();
}
function closeInventory() {
  if (!document.body.classList.contains('inv-open')) return false;
  document.body.classList.remove('inv-open');
  view.inputEnabled = true;
  ui.invDetail = null;
  return true;
}
$('#invClose').addEventListener('click', () => { sfx.click(); closeInventory(); if (!isTouch && view.mode === 'walk') view.lock(); });

function renderInventory() {
  const inBuild = document.body.classList.contains('m-build');
  $('#invTitle').textContent = inBuild ? 'Инвентарь' : 'Склад деталей';
  const counts = {};
  for (const it of S.inventory) { const ty = PART[it.pid].type; counts[ty] = (counts[ty] || 0) + 1; }
  if (ui.invTab !== 'all' && !counts[ui.invTab]) ui.invTab = 'all';
  $('#invTabs').innerHTML = `<button class="inv-tab ${ui.invTab === 'all' ? 'on' : ''}" data-tab="all">Все <span class="n">${S.inventory.length}</span></button>` +
    TYPE_ORDER.filter(t => counts[t]).map(t => `<button class="inv-tab ${ui.invTab === t ? 'on' : ''}" data-tab="${t}" title="${TYPES[t].name}">${TYPES[t].one.split(' ')[0]} <span class="n">${counts[t]}</span></button>`).join('');
  const list = S.inventory.filter(it => ui.invTab === 'all' || PART[it.pid].type === ui.invTab)
    .sort((a, b) => TYPE_ORDER.indexOf(PART[a.pid].type) - TYPE_ORDER.indexOf(PART[b.pid].type) || PART[b.pid].price - PART[a.pid].price);
  const b = B();
  $('#invList').innerHTML = list.length ? list.map(it => {
    const p = PART[it.pid];
    const fits = !inBuild || slotsForItem(b, it).some(o => o.ok);
    return `<button class="item ${ui.selected === it.uid || ui.invDetail === it.uid ? 'sel' : ''} ${fits ? '' : 'no'}" data-uid="${it.uid}">
      ${PART_ICON[p.type]}
      <div class="item-t"><div class="item-n">${esc(p.name)}</div><div class="item-s">${esc(specLine(p))}</div><div class="tags">${itemTags(it)}</div></div>
    </button>`;
  }).join('') : `<div class="inv-empty">${S.inventory.length ? 'В этой категории пусто' : 'Инвентарь пуст.<br>Детали покупаются в <b>Магазине</b> на компьютере мастерской.'}</div>`;
  renderInvDetail();
}
$('#invTabs').addEventListener('click', e => { const t = e.target.closest('[data-tab]'); if (!t) return; ui.invTab = t.dataset.tab; sfx.click(); renderInventory(); });
$('#invList').addEventListener('click', e => {
  const el = e.target.closest('[data-uid]');
  if (!el) return;
  const uid = Number(el.dataset.uid);
  sfx.select();
  if (document.body.classList.contains('m-build')) selectItem(ui.selected === uid ? null : uid);
  else { ui.invDetail = ui.invDetail === uid ? null : uid; renderInventory(); }
});

function renderInvDetail() {
  const uid = ui.selected ?? ui.invDetail;
  const it = S.inventory.find(i => i.uid === uid);
  const box = $('#invDetail');
  if (!it) { box.innerHTML = ''; return; }
  const p = PART[it.pid];
  const sp = sellPrice(it);
  box.innerHTML = `<div class="d-name">${esc(p.name)}</div>
    <div class="d-spec">${esc(specLine(p))} · цена ${rub(p.price)}</div>
    ${p.note ? `<div class="d-note">${esc(p.note)}</div>` : ''}
    <div class="d-btns">
      ${ui.selected ? `<button class="btn btn-sm btn-line" data-d="cancel">${ICON.x} Отменить</button>` : ''}
      ${!it.tested ? `<button class="btn btn-sm btn-line" data-d="test">${ICON.test} Проверить · ${S.sandbox ? '0 ₽' : rub(TEST_COST)}</button>` : ''}
      ${it.dirty ? `<button class="btn btn-sm btn-line" data-d="clean">${ICON.wind} Почистить</button>` : ''}
      ${it.client ? '<span class="small muted">Деталь клиента — вернётся ему после заказа</span>' : `<button class="btn btn-sm btn-orange" data-d="sell">Продать · ${rub(sp)}</button>`}
    </div>`;
}
$('#invDetail').addEventListener('click', e => {
  const b = e.target.closest('[data-d]');
  if (!b) return;
  const uid = ui.selected ?? ui.invDetail;
  const it = S.inventory.find(i => i.uid === uid);
  if (!it) return;
  const p = PART[it.pid];
  const a = b.dataset.d;
  if (a === 'cancel') selectItem(null);
  else if (a === 'test') {
    if (!S.sandbox && S.money < TEST_COST) { toast('Не хватает денег', 'err'); return; }
    if (!S.sandbox) S.money -= TEST_COST;
    it.tested = true; save(); sfx.click();
    toast(it.broken ? `${esc(p.name)} — <b class="bad">неисправна</b>` : `${esc(p.name)} — исправна`, it.broken ? 'err' : 'ok');
    renderAll();
  } else if (a === 'clean') { it.dirty = false; save(); sfx.blow(); renderInventory(); }
  else if (a === 'sell') {
    const sp = sellPrice(it);
    S.inventory = S.inventory.filter(i => i !== it);
    if (!S.sandbox) S.money += sp;
    if (ui.selected === uid) selectItem(null);
    ui.invDetail = null;
    save(); sfx.cash();
    toast(`Продано: ${esc(p.name)} за ${rub(sp)}`, 'ok');
    renderAll();
  }
});

// ── Выбор детали и установка ────────────────────────────────────────────────
function clearGhosts() { view.setGhosts([], B()); }
function selectItem(uid) {
  ui.selected = uid;
  closeCtx();
  if (uid == null) { clearGhosts(); renderInventory(); hint(''); hintDefault(); return; }
  setTool(null, true);
  const it = S.inventory.find(i => i.uid === uid);
  if (!it) { ui.selected = null; return; }
  const p = PART[it.pid];
  const b = B();
  if (!bench() && p.type !== 'case') {
    clearGhosts();
    hint('Сначала поставьте <b>корпус</b> — с него начинается любая сборка.');
    renderInventory();
    return;
  }
  const opts = slotsForItem(b, it);
  view.setGhosts(opts, b, it);
  if (!opts.length) hint(`Для «${esc(p.name)}» сейчас нет свободного места.`);
  else if (!opts.some(o => o.ok)) hint(`<b class="bad">Не подходит:</b> ${esc(opts[0].reason)}`);
  else hint(`Нажмите на <b class="ok-t">зелёную</b> область, чтобы установить <b>${esc(p.name)}</b>. Esc — отмена.`);
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
  let pc = bench();
  let created = false;
  if (!pc) {
    if (PART[it.pid].type !== 'case') return;
    pc = newPC('own'); pc.spot = null; S.benchPc = pc.id; created = true;
  }
  const r = install(pc.build, it, slot);
  if (!r.ok) { if (created) { S.pcs = S.pcs.filter(p => p !== pc); S.benchPc = null; } toast(esc(r.reason), 'err'); return; }
  S.inventory = S.inventory.filter(i => i !== it);
  ui.selected = null;
  sfx.install();
  save();
  syncWorld({ animateSlot: slot });
  clearGhosts();
  if (ui.tool === 'cables') showCablePoints();
  renderAll();
  hint(''); hintDefault();
  if (created) toast('Вы начали сборку <b>своего ПК</b>. Готовый компьютер можно продать или оставить себе.', 'ok');
  const p = PART[it.pid];
  if (pc.build.slots.psu && ['mb', 'gpu', 'storage', 'psu'].includes(p.type) && cableIds(pc.build).some(id => !pc.build.cables[id])) {
    toast('Не забудьте подключить кабели — инструмент <b>«Кабели»</b>');
  }
}

function doRemove(slot) {
  const pc = bench();
  if (!pc) return;
  if (pc.owner === 'job' && slot === 'case') { toast('Корпус клиента снимать не нужно', 'err'); return; }
  ensureOff();
  const r = remove(pc.build, slot);
  if (!r.ok) { toast(esc(r.reason), 'err'); return; }
  const job = pcJob(pc);
  if (r.item.client && job) r.item.job = job.id;
  S.inventory.push(r.item);
  sfx.remove();
  if (!Object.keys(pc.build.slots).length && pc.owner === 'own') { S.pcs = S.pcs.filter(p => p !== pc); S.benchPc = null; }
  save();
  syncWorld();
  if (ui.tool === 'cables') showCablePoints();
  renderAll();
}

// ── Контекстное меню детали в корпусе ───────────────────────────────────────
function openCtx(slot, x, y) {
  const pc = bench();
  const it = pc?.build.slots[slot];
  if (!it) return;
  const p = PART[it.pid];
  let rm = canRemove(pc.build, slot);
  if (pc.owner === 'job' && slot === 'case') rm = { ok: false, reason: 'корпус клиента' };
  const box = $('#ctx');
  box.innerHTML = `<div class="ctx-t">${esc(p.name)}</div>
    <div class="ctx-s">${esc(specLine(p))}</div>
    <div class="ctx-s tags">${itemTags(it)}</div>
    ${it.dirty ? `<button data-a="clean">${ICON.wind} Продуть от пыли</button>` : ''}
    <button data-a="remove" ${rm.ok ? '' : 'disabled'}>${ICON.wrench} Снять${rm.ok ? '' : ` <small>(${esc(rm.reason)})</small>`}</button>
    <button data-a="close">${ICON.x} Закрыть</button>`;
  box.classList.remove('hidden');
  const r = box.getBoundingClientRect();
  box.style.left = Math.max(8, Math.min(x + 8, innerWidth - r.width - 8)) + 'px';
  box.style.top = Math.max(8, Math.min(y + 8, innerHeight - r.height - 8)) + 'px';
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
  const it = bench()?.build.slots[slot];
  if (!it?.dirty) return;
  it.dirty = false;
  sfx.blow();
  view.blowDust(slot);
  save();
  setTimeout(() => { view.setBuild(B()); renderAll(); }, 350);
}

// ── Инструменты ─────────────────────────────────────────────────────────────
function setTool(t, silent = false) {
  ui.tool = t && ui.tool !== t ? t : null;
  document.body.classList.toggle('tool-dust', ui.tool === 'dust');
  if (ui.tool && ui.selected) { ui.selected = null; clearGhosts(); renderInventory(); }
  if (ui.tool === 'cables') showCablePoints();
  else view.setCablePoints([], B());
  if (ui.tool === 'cables') { if (!showCablePoints.msg) hint('Нажмите на <b class="warn-t">жёлтую</b> точку, чтобы подключить кабель от блока питания. <b class="ok-t">Зелёную</b> — отключить.'); }
  else if (ui.tool === 'dust') hint('Баллон со сжатым воздухом: нажимайте на запылённые детали.');
  else if (!silent) { hint(''); hintDefault(); }
  if (document.body.classList.contains('m-build')) renderToolbar();
}
function showCablePoints() {
  const b = B();
  const ids = cableIds(b);
  view.setCablePoints(ids.map(id => ({ id, connected: !!b.cables[id] })), b);
  showCablePoints.msg = false;
  if (!ids.length) { hint('Пока нечего подключать: установите материнскую плату, видеокарту с доп. питанием или накопители.'); showCablePoints.msg = true; }
  else if (!b.slots.psu) { hint('Сначала установите <b>блок питания</b> — от него идут все кабели.'); showCablePoints.msg = true; }
}

// ── Клики по сцене (верстак) ────────────────────────────────────────────────
view.on('pick', onPick);
function onPick(pk, x, y) {
  $('#tooltip').classList.add('hidden');
  closeCtx();
  if (!pk) return;
  const pc = bench();
  if (pk.kind === 'ghost') {
    if (pk.ok) doInstall(pk.slot);
    else toast(esc(pk.reason), 'err');
    return;
  }
  if (!pc) return;
  if (pk.kind === 'cable') {
    ensureOff();
    const r = pk.connected ? disconnectCable(pc.build, pk.id) : connectCable(pc.build, pk.id);
    if (!r.ok) { toast(esc(r.reason), 'err'); return; }
    sfx.cable();
    save();
    view.setBuild(pc.build);
    showCablePoints();
    renderAll();
    return;
  }
  if (pk.kind === 'part') {
    if (ui.tool === 'dust') {
      if (pc.build.slots[pk.slot]?.dirty) cleanSlot(pk.slot);
      else toast('Эта деталь уже чистая');
      return;
    }
    if (ui.selected) return;
    sfx.click();
    openCtx(pk.slot, x, y);
  }
}
view.on('hover', (pk, x, y) => {
  const tip = $('#tooltip');
  const b = B();
  if (!pk || (pk.kind === 'part' && !b.slots[pk.slot])) { tip.classList.add('hidden'); return; }
  let text = '';
  if (pk.kind === 'part') { const it = b.slots[pk.slot]; text = `<b>${esc(partOf(it).name)}</b>${it.dirty ? ' · <span class="warn-t">в пыли</span>' : ''}`; }
  if (pk.kind === 'ghost') text = pk.ok ? `Установить сюда: ${SLOT_DEFS[pk.slot].label}` : `Нельзя: ${esc(pk.reason)}`;
  if (pk.kind === 'cable') text = `${pk.connected ? 'Отключить' : 'Подключить'}: ${CABLE_LABELS[pk.id]}`;
  tip.innerHTML = text;
  tip.classList.remove('hidden');
  tip.style.left = Math.min(x + 14, innerWidth - 300) + 'px';
  tip.style.top = y + 14 + 'px';
});

// ── Включение ───────────────────────────────────────────────────────────────
function clearTimers() { ui.timers.forEach(clearTimeout); ui.timers = []; }
const later = (fn, ms) => ui.timers.push(setTimeout(fn, ms));

function sysInfo() {
  const b = B();
  const drives = storages(b).map(s => partOf(b.slots[s]).name.split(' (')[0]).join(', ');
  return {
    mb: partOf(b.slots.mb)?.name, cpu: partOf(b.slots.cpu)?.name, gpu: partOf(b.slots.gpu)?.name,
    ram: ramTotal(b) * 1024, drives, cpuTemp: temps(b).cpu
  };
}
function powerOff() {
  clearTimers();
  ui.busy = false; ui.powered = false; ui.booted = false; ui.markRun = null;
  view.setPower(false);
  setHum(false);
  screen.set('off');
  if (document.body.classList.contains('m-build')) { renderToolbar(); hintDefault(); }
}
function powerOnFlow() {
  if (ui.powered) { powerOff(); sfx.click(); return; }
  const pc = bench();
  if (!pc) return;
  setTool(null, true);
  selectItem(null);
  const r = powerOn(pc.build);
  if (!r.power) { toast(esc(r.error), 'err'); return; }
  ui.powered = true;
  view.setPower(true);
  setHum(true);
  renderToolbar();
  hint('Компьютер включается…');
  if (!r.post) {
    screen.set('nosignal');
    later(() => { if (r.beep) sfx.beepCode(r.beep); toast(`${r.beep ? 'Писк: ' + r.beep + '. ' : ''}${esc(r.error)}`, 'err'); hint(esc(r.error)); }, 900);
    return;
  }
  screen.set('post', { ...sysInfo(), error: r.boot ? '' : r.error });
  later(() => sfx.postBeep(), 300);
  if (!r.boot) {
    later(() => { toast(esc(r.error), 'err'); hint(esc(r.error)); }, 1400);
    if (r.shutdown) later(() => { powerOff(); toast('Компьютер аварийно выключился', 'warn'); }, 3200);
    return;
  }
  const sig = buildSig({ slots: Object.fromEntries(storages(pc.build).map(s => [s, pc.build.slots[s]])), cables: {} });
  const installOS = pc.osSig !== sig;
  later(() => screen.set('boot', { install: installOS }), 1500);
  later(() => {
    pc.osSig = sig; save();
    ui.booted = true;
    screen.set('desktop', sysInfo());
    renderToolbar();
    hint(''); hintDefault();
    toast('Компьютер загрузился! Нажмите <b>«Монитор»</b>, чтобы запустить 3DMark.', 'ok');
    renderAll();
  }, installOS ? 5200 : 3000);
}

// ── Перемещение ПК ──────────────────────────────────────────────────────────
function moveBenchToRack() {
  const pc = bench();
  if (!pc) return;
  const spot = freeSpot();
  if (spot == null) { toast('На стеллаже нет свободных мест', 'err'); return; }
  powerOff(); setTool(null, true); selectItem(null);
  pc.spot = spot; S.benchPc = null;
  save(); syncWorld(); renderAll();
  toast(`${pcName(pc)} — на стеллаже, место ${spot + 1}`);
}
function takeToBench(spot) {
  const pc = pcAt(spot);
  if (!pc) return;
  powerOff();
  const cur = bench();
  if (cur) cur.spot = spot;
  pc.spot = null;
  S.benchPc = pc.id;
  save(); syncWorld({ animateSlot: 'case' }); renderAll();
  toast(cur ? `Компьютеры поменялись местами: ${pcName(pc)} — на верстаке` : `${pcName(pc)} — на верстаке`, 'ok');
}

function parkDialog(spot) {
  const pc = pcAt(spot);
  if (!pc) return;
  const j = pcJob(pc);
  const b = pc.build;
  const goBench = () => { takeToBench(spot); view.enterBuild(); };
  if (pc.owner === 'job' && j) {
    const checks = jobChecks(j, b, { bench: scoreOf(pc) });
    const done = checks.every(c => c.ok);
    openModal({
      title: ICON.user + ' ' + esc(j.customer) + ' · ' + JOB_TYPE[j.type],
      body: `<p><b>${esc(j.subject)}</b></p>${checksHTML(checks)}<div class="reward"><span>Оплата · +${j.xp} XP</span><b>${rub(j.reward)}</b></div>`,
      buttons: [{ label: 'Закрыть' }, ...(done ? [{ label: ICON.check + ' Сдать заказ', cls: 'btn-green', fn: () => completeJob(j) }] : []),
        { label: bench() ? 'Поменять с верстаком' : 'На верстак', cls: 'btn-cyan', fn: goBench }],
      onClose: relockLater
    });
  } else {
    const pw = powerOn(b);
    openModal({
      title: ICON.monitor + ' Ваш компьютер',
      body: `<div class="stat-rows"><span>Стоимость деталей</span><span>${rub(ownPartsPrice(pc))}</span><span>Загружается</span><span>${pw.boot ? 'да' : 'нет'}</span><span>3DMark</span><span>${scoreOf(pc) ?? '—'}</span></div>`,
      buttons: [{ label: 'Закрыть' },
        ...(S.sandbox ? [] : [{ label: `Продать · ${rub(ownSellPrice(pc))}`, cls: 'btn-orange', disabled: !pw.boot, fn: () => sellOwnPC(pc) }]),
        { label: 'Разобрать', fn: () => stripPC(pc) },
        { label: bench() ? 'Поменять с верстаком' : 'На верстак', cls: 'btn-cyan', fn: goBench }],
      onClose: relockLater
    });
  }
}
function relockLater() { if (!isTouch && view.mode === 'walk') view.lock(); }

function removePC(pc) {
  if (pc.id === S.benchPc) { powerOff(); S.benchPc = null; }
  S.pcs = S.pcs.filter(p => p !== pc);
}
function sellOwnPC(pc) {
  if (!powerOn(pc.build).boot) return;
  const price = ownSellPrice(pc);
  for (const it of installedItems(pc.build)) if (it.client) S.inventory.push(it);
  removePC(pc);
  S.money += price; S.earned += price;
  addXP(30);
  save(); sfx.cash();
  syncWorld(); renderAll();
  openModal({ title: 'Компьютер продан!', color: 'green', body: `<div class="big-num">+${rub(price)}</div><p class="muted">+30 XP</p>`, buttons: [{ label: 'Отлично', cls: 'btn-cyan' }], onClose: relockLater });
}
function stripPC(pc) {
  for (const it of installedItems(pc.build)) S.inventory.push(it);
  removePC(pc);
  save(); syncWorld(); renderAll();
  toast('Компьютер разобран, детали — в инвентаре', 'ok');
}

// ── Заказы ──────────────────────────────────────────────────────────────────
function addXP(n) {
  const before = level();
  S.xp += n;
  const after = level();
  if (after > before && !S.sandbox) {
    setTimeout(() => {
      sfx.levelUp();
      const unlocked = PARTS.filter(p => p.lvl === after).length;
      toast(`<b>Новый уровень: ${after}!</b> В магазине открылось деталей: ${unlocked}`, 'ok');
    }, 400);
  }
}
function addMail(n) {
  for (let i = 0; i < n; i++) {
    const seed = (S.seedBase + (S.seedN++) * 7919) >>> 0;
    const job = generateJob(seed, level(), (pid, extra) => newItem(pid, extra));
    job.id = 'j' + seed + '_' + S.seedN;
    S.inbox.push({ ...job, day: S.day, read: false });
  }
  while (S.inbox.length > 8) S.inbox.shift();
  save();
}
function acceptJob(i) {
  const j = S.inbox[i];
  if (!j) return;
  if (S.jobs.length >= MAX_JOBS) { toast(`Одновременно можно вести не больше ${MAX_JOBS} заказов`, 'err'); return; }
  const spot = freeSpot();
  const toBench = spot == null && !bench();
  if (spot == null && !toBench) { toast('Нет места: стеллаж и верстак заняты. Сдайте или уберите какой-нибудь ПК.', 'err'); return; }
  S.inbox.splice(i, 1);
  const pc = newPC('job', j.pc, j.id);
  delete j.pc;
  for (const it of Object.values(pc.build.slots)) if (it.client) it.job = j.id;
  if (toBench) { pc.spot = null; S.benchPc = pc.id; } else pc.spot = spot;
  S.jobs.push(j);
  save(); sfx.select();
  syncWorld(); renderAll();
  toast(`Заказ принят! Компьютер привезли — он ${toBench ? 'на верстаке' : `на стеллаже, место ${spot + 1}`}.`, 'ok');
}
function stripClientItems(job) {
  S.inventory = S.inventory.filter(i => !(i.client && i.job === job.id));
  for (const pc of S.pcs) for (const [s, it] of Object.entries(pc.build.slots)) if (it.client && it.job === job.id) delete pc.build.slots[s];
}
function completeJob(j) {
  const pc = jobPC(j);
  if (!pc || !jobDone(j, pc.build, { bench: scoreOf(pc) })) return;
  removePC(pc);
  stripClientItems(j);
  S.jobs = S.jobs.filter(x => x !== j);
  S.money += j.reward; S.earned += j.reward;
  S.jobsDone++;
  S.rep = Math.min(5, S.rep + 0.25);
  addXP(j.xp);
  save(); sfx.cash();
  syncWorld(); renderAll();
  openModal({
    title: ICON.check + ' Заказ выполнен!', color: 'green',
    body: `<p>${esc(j.customer)} доволен(а) работой и оставил(а) хороший отзыв.</p><div class="big-num">+${rub(j.reward)}</div><p class="muted">+${j.xp} XP · выполнено заказов: ${S.jobsDone}</p>`,
    buttons: [{ label: 'Отлично', cls: 'btn-cyan' }],
    onClose: () => { if (view.mode === 'walk') relockLater(); }
  });
}
function cancelJob(j) {
  const pc = jobPC(j);
  if (pc) {
    for (const it of installedItems(pc.build)) if (!it.client) S.inventory.push(it);
    removePC(pc);
  }
  stripClientItems(j);
  S.jobs = S.jobs.filter(x => x !== j);
  S.rep = Math.max(0, S.rep - 0.5);
  save(); syncWorld(); renderAll();
  toast('Заказ отменён. Репутация немного снизилась.', 'warn');
}

function jobsHTML() {
  if (!S.jobs.length) return '<div class="empty-pane">Нет активных заказов.<br>Загляните в <b>Почту</b> на компьютере мастерской.</div>';
  return S.jobs.map((j, i) => {
    const pc = jobPC(j);
    const checks = pc ? jobChecks(j, pc.build, { bench: scoreOf(pc) }) : [];
    const done = pc && checks.every(c => c.ok);
    return `<div class="jobcard ${done ? 'done' : ''}">
      <div class="jobcard-h"><b>${esc(j.customer)} · ${JOB_TYPE[j.type]}</b><span class="reward" style="border:0;padding:0;margin:0"><b>${rub(j.reward)}</b></span></div>
      <div class="small">${esc(j.subject)}</div>
      <div class="small muted">Компьютер ${pc ? pcLocation(pc) : '—'}</div>
      ${checksHTML(checks)}
      <div class="btns">
        <button class="btn btn-sm btn-green" data-job="done" data-i="${i}" ${done ? '' : 'disabled'}>${ICON.check} Сдать</button>
        <button class="btn btn-sm btn-line" data-job="cancel" data-i="${i}">Отказаться</button>
      </div></div>`;
  }).join('');
}
function bindJobBtns(root, after) {
  root.querySelectorAll('[data-job]').forEach(b => b.addEventListener('click', () => {
    const j = S.jobs[Number(b.dataset.i)];
    if (!j) return;
    sfx.click();
    if (b.dataset.job === 'done') completeJob(j);
    else confirmBox('Отказаться от заказа?', 'Компьютер вернётся клиенту, ваши детали из него — в инвентарь. Репутация снизится.', () => { cancelJob(j); after && after(); }, 'Отказаться');
    after && after();
  }));
}
function jobsDialog() {
  openModal({ title: ICON.jobs + ' Доска заказов', wide: true, body: jobsHTML(), buttons: [{ label: 'Закрыть', cls: 'btn-cyan' }], onClose: relockLater });
  bindJobBtns($('#modal'));
}

function endDayDialog() {
  openModal({
    title: ICON.door + ' Закончить день?',
    body: `<p>Мастерская закроется до утра. Завтра придут новые письма с заказами.</p>${S.jobs.length ? `<p class="muted small">Активных заказов: ${S.jobs.length} — они никуда не денутся.</p>` : ''}`,
    buttons: [{ label: 'Остаться' }, { label: 'Закончить день', cls: 'btn-orange', fn: nextDay }],
    onClose: relockLater
  });
}
function nextDay() {
  S.day++;
  const n = 2 + (Math.random() < 0.5 ? 1 : 0);
  addMail(n);
  save(); sfx.select();
  renderAll();
  openModal({ title: `День ${S.day}`, body: `<p>Доброе утро! Новых писем: <b>${n}</b>.</p><p class="muted small">Почта — на компьютере мастерской у правой стены.</p>`, buttons: [{ label: 'Начать день', cls: 'btn-cyan', fn: relockLater }] });
}

// ── «ОС» ────────────────────────────────────────────────────────────────────
const OFFICE_APPS = [
  { id: 'mail', name: 'Почта', icon: ICON.mail, color: '#1fa9e1', render: appMail },
  { id: 'shop', name: 'Магазин', icon: ICON.cart, color: '#f39200', render: appShop },
  { id: 'jobs', name: 'Заказы', icon: ICON.jobs, color: '#2fa84f', render: appJobs, live: true },
  { id: 'stock', name: 'Склад', icon: ICON.box, color: '#8e5bd6', render: appStock, live: true },
  { id: 'bank', name: 'Статистика', icon: ICON.bank, color: '#3a4a5c', render: appBank, live: true },
  { id: 'settings', name: 'Настройки', icon: ICON.gear, color: '#6b7785', render: appSettings }
];
const BENCH_APPS = [
  { id: 'mark', name: '3DMark', icon: ICON.chart, color: '#f39200', render: appMark },
  { id: 'sys', name: 'Сведения о системе', icon: ICON.info, color: '#1fa9e1', render: appSys },
  { id: 'occt', name: 'Датчики OCCT', icon: ICON.temp, color: '#e0453a', render: appSensors },
  { id: 'off', name: 'Выключить', icon: ICON.power, color: '#3a4a5c', action: () => { closeOS(); powerOff(); } }
];
const os = { kind: null, app: null };
const osApps = () => os.kind === 'office' ? OFFICE_APPS : BENCH_APPS;

function openOS(kind, app = null) {
  os.kind = kind;
  document.body.classList.add('m-os');
  $('#os').classList.remove('hidden');
  view.inputEnabled = false;
  renderDesk();
  osOpen(app);
}
function closeOS() {
  if ($('#os').classList.contains('hidden')) return false;
  const kind = os.kind;
  if (ui.markRun) { const c = view.screen.canvas; c.remove(); }
  $('#os').classList.add('hidden');
  document.body.classList.remove('m-os');
  view.inputEnabled = true;
  os.kind = null; os.app = null;
  $('#osWins').innerHTML = '';
  if (kind === 'office') view.exitToWalk(); else view.backToBench();
  return true;
}
$('#osExit').addEventListener('click', () => { sfx.click(); closeOS(); });

function renderDesk() {
  const unread = S.inbox.filter(m => !m.read).length;
  $('#osDesk').innerHTML = osApps().map(a => `<button class="os-ico" data-app="${a.id}"><span class="sq" style="background:${a.color}">${a.icon}</span>${esc(a.name)}${a.id === 'mail' && unread ? `<span class="badge">${unread}</span>` : ''}</button>`).join('');
  const clock = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  $('#osTray').innerHTML = os.kind === 'office'
    ? `<button class="btn btn-sm btn-orange" id="osEndDay">${ICON.door} Завершить день</button><span>День ${S.day}</span><span>${clock}</span>`
    : `<span>${ICON.temp} CPU ${temps(B()).cpu}°</span><span>${clock}</span>`;
  $('#osEndDay')?.addEventListener('click', () => { sfx.click(); endDayDialog(); });
  const a = osApps().find(x => x.id === os.app);
  $('#osTabs').innerHTML = a ? `<div class="os-tab">${a.icon}${esc(a.name)}</div>` : '';
}
$('#osDesk').addEventListener('click', e => {
  const b = e.target.closest('[data-app]');
  if (!b) return;
  sfx.click();
  const a = osApps().find(x => x.id === b.dataset.app);
  if (a.action) a.action(); else osOpen(a.id);
});
function osOpen(id) {
  os.app = id;
  const a = osApps().find(x => x.id === id);
  if (!a) { $('#osWins').innerHTML = ''; renderDesk(); return; }
  $('#osWins').innerHTML = `<div class="win"><div class="win-h">${a.icon}<span>${esc(a.name)}</span><span class="sp"></span><button id="winX" title="Закрыть">${ICON.x}</button></div><div class="win-b" id="winB"></div></div>`;
  $('#winX').onclick = () => { sfx.click(); if (ui.markRun) view.screen.canvas.remove(); osOpen(null); };
  a.render($('#winB'));
  renderDesk();
}
function osRefresh() {
  renderDesk();
  const a = osApps().find(x => x.id === os.app);
  if (a && a.live) a.render($('#winB'));
}

// Почта
function appMail(body) {
  if (!S.inbox.length) {
    body.innerHTML = `<div class="mail-list"><div class="mail-head">Входящие <span>0</span></div><div class="mail-items"></div></div>
      <div class="mail-read"><div class="empty-pane">Новых писем нет.<br>Заказы приходят каждый день — нажмите <b>«Завершить день»</b> внизу.</div></div>`;
    return;
  }
  ui.mailSel = Math.max(0, Math.min(ui.mailSel, S.inbox.length - 1));
  const m = S.inbox[ui.mailSel];
  m.read = true;
  const full = S.jobs.length >= MAX_JOBS;
  body.innerHTML = `<div class="mail-list"><div class="mail-head">Входящие <span>${S.inbox.length}</span></div>
    <div class="mail-items">${S.inbox.map((j, i) => `<button class="mail-item ${i === ui.mailSel ? 'sel' : ''} ${j.read ? '' : 'unread'}" data-i="${i}">
      <span class="av">${ICON.wrench}</span>
      <span class="mi-t"><span class="mi-f"><span>${esc(j.customer)}</span><span>День ${j.day}</span></span><span class="mi-s" style="display:block">${esc(j.subject)}</span></span>
    </button>`).join('')}</div></div>
    <div class="mail-read">
      <div class="mr-body">
        <div class="mr-subj">${esc(m.subject)}</div>
        <div class="mr-from">От: <b>${esc(m.customer)}</b> &lt;${esc(m.email)}&gt;</div>
        <div class="mr-text">${esc(m.text)}</div>
        <div class="mr-meta"><span>Оплата<b>${rub(m.reward)}</b></span><span>Опыт<b>+${m.xp} XP</b></span><span>Тип работы<b>${JOB_TYPE[m.type]}</b></span></div>
        ${full ? `<p class="small bad-t" style="margin-top:12px">У вас уже ${MAX_JOBS} заказа — сначала сдайте какой-нибудь.</p>` : ''}
      </div>
      <div class="mr-act"><button class="btn btn-line" id="mDecline">Отклонить</button><button class="btn btn-cyan" id="mAccept" ${full ? 'disabled' : ''}>Принять</button></div>
    </div>`;
  body.querySelectorAll('.mail-item').forEach(el => el.addEventListener('click', () => { ui.mailSel = Number(el.dataset.i); sfx.click(); appMail(body); renderDesk(); drawOfficeScreen(); }));
  $('#mAccept').onclick = () => { acceptJob(ui.mailSel); appMail(body); renderDesk(); };
  $('#mDecline').onclick = () => { sfx.click(); S.inbox.splice(ui.mailSel, 1); save(); appMail(body); renderAll(); };
  drawOfficeScreen();
}

// Магазин
function appShop(body) {
  body.innerHTML = `<div class="shop-cats" id="shCats"></div>
    <div class="shop-main"><div class="shop-top">
      <input id="shQ" type="search" placeholder="Поиск…" value="${esc(ui.shopQ)}">
      <select id="shSort"><option value="price">Сначала дешёвые</option><option value="-price">Сначала дорогие</option><option value="perf">По мощности</option></select>
    </div><div class="shop-grid" id="shGrid"></div></div>
    <div class="cart"><div class="cart-h">${ICON.cart} Корзина</div><div class="cart-items" id="cartItems"></div><div class="cart-f" id="cartF"></div></div>`;
  $('#shSort').value = ui.shopSort;
  $('#shCats').innerHTML = TYPE_ORDER.map(t => `<button class="shop-cat ${ui.shopCat === t ? 'on' : ''}" data-cat="${t}" title="${TYPES[t].name}">${PART_ICON[t]}<span>${TYPES[t].name}</span></button>`).join('');
  $('#shCats').onclick = e => { const c = e.target.closest('[data-cat]'); if (!c) return; ui.shopCat = c.dataset.cat; sfx.click(); $$('.shop-cat').forEach(x => x.classList.toggle('on', x === c)); renderShopGrid(); };
  $('#shQ').oninput = e => { ui.shopQ = e.target.value; renderShopGrid(); };
  $('#shQ').onkeydown = e => e.stopPropagation();
  $('#shSort').onchange = e => { ui.shopSort = e.target.value; renderShopGrid(); };
  renderShopGrid();
  renderCart();
}
function renderShopGrid() {
  const q = ui.shopQ.trim().toLowerCase();
  const lv = level();
  let list = PARTS.filter(p => q ? p.name.toLowerCase().includes(q) : p.type === ui.shopCat);
  const key = { price: (a, b) => a.price - b.price, '-price': (a, b) => b.price - a.price, perf: (a, b) => (b.perf || b.watt || b.tdpMax || b.gb || 0) - (a.perf || a.watt || a.tdpMax || a.gb || 0) }[ui.shopSort];
  list = list.sort(key);
  $('#shGrid').innerHTML = list.map(p => {
    const locked = p.lvl > lv;
    return `<div class="card ${locked ? 'locked' : ''}">
      ${PART_ICON[p.type]}
      <div class="card-n">${esc(p.name)}</div>
      <div class="card-s">${esc(specLine(p))}${p.note ? '<br>' + esc(p.note) : ''}</div>
      <div class="card-f"><span class="card-p">${rub(p.price)}</span>
        ${locked ? `<span class="tag tag-lock">${ICON.lock} ур. ${p.lvl}</span>` : `<button class="btn btn-sm btn-cyan" data-add="${p.id}">${ICON.plus} В корзину</button>`}
      </div></div>`;
  }).join('') || '<div class="empty-pane">Ничего не найдено</div>';
  $('#shGrid').onclick = e => {
    const b = e.target.closest('[data-add]');
    if (!b) return;
    ui.cart[b.dataset.add] = (ui.cart[b.dataset.add] || 0) + 1;
    sfx.select();
    renderCart();
  };
}
const cartTotal = () => Object.entries(ui.cart).reduce((s, [pid, q]) => s + PART[pid].price * q, 0);
function renderCart() {
  if (!$('#cartItems')) return;
  const ids = Object.keys(ui.cart).filter(id => ui.cart[id] > 0);
  $('#cartItems').innerHTML = ids.length ? ids.map(id => `<div class="cart-it">
    <div class="t"><div>${esc(PART[id].name)}</div><div class="muted">${rub(PART[id].price)}</div></div>
    <div class="q"><button data-q="-" data-id="${id}">${ICON.minus}</button><b>${ui.cart[id]}</b><button data-q="+" data-id="${id}">${ICON.plus}</button></div>
  </div>`).join('') : '<div class="empty-pane small">Корзина пуста.<br>Выберите детали слева.</div>';
  const total = cartTotal();
  const enough = S.sandbox || total <= S.money;
  $('#cartF').innerHTML = `<div class="cart-total"><span>Итого</span><span>${rub(total)}</span></div>
    <div class="small muted" style="margin-bottom:8px">Баланс: ${money(S.money)}</div>
    <button class="btn btn-orange btn-wide" id="cartBuy" ${ids.length && enough ? '' : 'disabled'}>${enough ? 'Оформить заказ' : 'Не хватает денег'}</button>`;
  $('#cartItems').onclick = e => {
    const b = e.target.closest('[data-q]');
    if (!b) return;
    ui.cart[b.dataset.id] = Math.max(0, (ui.cart[b.dataset.id] || 0) + (b.dataset.q === '+' ? 1 : -1));
    if (!ui.cart[b.dataset.id]) delete ui.cart[b.dataset.id];
    sfx.click(); renderCart();
  };
  $('#cartBuy').onclick = checkout;
}
function checkout() {
  const total = cartTotal();
  if (!S.sandbox && total > S.money) return;
  let n = 0;
  for (const [pid, q] of Object.entries(ui.cart)) for (let i = 0; i < q; i++) { S.inventory.push(newItem(pid, { tested: true })); n++; }
  if (!S.sandbox) S.money -= total;
  ui.cart = {};
  save(); sfx.cash();
  renderCart(); renderHUD(); renderInventory(); renderDesk();
  toast(`Покупка оформлена: ${n} шт. на ${rub(total)}. Детали уже на складе.`, 'ok');
}

// Заказы
function appJobs(body) {
  body.innerHTML = `<div class="app-pad"><h2 class="app-h2">Активные заказы · ${S.jobs.length} из ${MAX_JOBS}</h2>${jobsHTML()}</div>`;
  bindJobBtns(body);
}

// Склад
function appStock(body) {
  const list = S.inventory.slice().sort((a, b) => TYPE_ORDER.indexOf(PART[a.pid].type) - TYPE_ORDER.indexOf(PART[b.pid].type) || PART[b.pid].price - PART[a.pid].price);
  body.innerHTML = `<div class="app-pad"><h2 class="app-h2">Склад деталей · ${list.length} шт.</h2>
    ${list.length ? `<table class="tbl"><tr><th></th><th>Деталь</th><th>Состояние</th><th class="r">Продажа</th><th></th></tr>
    ${list.map(it => { const p = PART[it.pid]; return `<tr><td>${PART_ICON[p.type]}</td><td><b>${esc(p.name)}</b><div class="small muted">${esc(specLine(p))}</div></td>
      <td><div class="tags">${itemTags(it) || '<span class="small muted">не проверена</span>'}</div></td>
      <td class="r">${it.client ? '—' : rub(sellPrice(it))}</td>
      <td class="r">${it.client ? '' : `<button class="btn btn-sm btn-orange" data-sell="${it.uid}">Продать</button>`}</td></tr>`; }).join('')}</table>`
    : '<div class="empty-pane">Склад пуст. Купите детали в <b>Магазине</b>.</div>'}</div>`;
  body.querySelectorAll('[data-sell]').forEach(b => b.addEventListener('click', () => {
    const it = S.inventory.find(i => i.uid === Number(b.dataset.sell));
    if (!it) return;
    const sp = sellPrice(it);
    S.inventory = S.inventory.filter(i => i !== it);
    if (!S.sandbox) S.money += sp;
    save(); sfx.cash();
    toast(`Продано за ${rub(sp)}`, 'ok');
    renderAll();
  }));
}

// Статистика
function appBank(body) {
  const lv = level();
  const next = LEVEL_XP[lv];
  const nextParts = PARTS.filter(p => p.lvl === lv + 1).length;
  body.innerHTML = `<div class="app-pad"><h2 class="app-h2">Ваша мастерская</h2>
    <div class="tiles">
      <div class="tile"><span>Баланс</span><b>${money(S.money)}</b></div>
      <div class="tile"><span>Заработано всего</span><b>${rub(S.earned)}</b></div>
      <div class="tile"><span>Выполнено заказов</span><b>${S.jobsDone}</b></div>
      <div class="tile"><span>Репутация</span><b>${S.rep.toFixed(1)} / 5</b></div>
      <div class="tile"><span>Уровень</span><b>${S.sandbox ? '∞' : lv}</b></div>
      <div class="tile"><span>Опыт</span><b>${S.xp}${next != null && !S.sandbox ? ' / ' + next : ''} XP</b></div>
    </div>
    ${!S.sandbox && next != null ? `<p class="muted">До следующего уровня: ${next - S.xp} XP. На уровне ${lv + 1} в магазине откроются ещё ${nextParts} деталей.</p>` : ''}
    <p class="muted small">Опыт дают выполненные заказы и проданные собственные ПК. Репутация растёт за сданные заказы и падает за отказы.</p></div>`;
}

// Настройки
function appSettings(body) {
  body.innerHTML = `<div class="app-pad">${settingsHTML()}</div>`;
  bindSettings(body);
}
function settingsHTML() {
  return `<div class="set-row"><span>Звук</span><button class="switch ${S.settings.sound ? 'on' : ''}" id="setSound"></button></div>
    <div class="set-row"><span>Чувствительность мыши</span><input type="range" id="setSens" min="0.3" max="2.5" step="0.1" value="${S.settings.sens}"></div>
    <div class="set-row"><span>Как играть</span><button class="btn btn-sm btn-line" id="setHelp">Открыть</button></div>
    <div class="set-row"><span>Начать карьеру заново</span><button class="btn btn-sm btn-red" id="setNew">Новая карьера</button></div>
    <div class="set-row"><span>Песочница (бесконечные деньги)</span><button class="btn btn-sm btn-line" id="setSand">Запустить</button></div>
    <div class="set-row"><span>Страница проекта</span><a class="btn btn-sm btn-line" href="https://github.com/S4rgeant1k/WebGames">${ICON.github} Вернуться на GitHub</a></div>`;
}
function bindSettings(root) {
  root.querySelector('#setSound').onclick = e => { S.settings.sound = !S.settings.sound; setSound(S.settings.sound); if (S.settings.sound && ui.powered) setHum(true); e.currentTarget.classList.toggle('on', S.settings.sound); save(); };
  root.querySelector('#setSens').oninput = e => { S.settings.sens = Number(e.target.value); save(); };
  root.querySelector('#setHelp').onclick = () => helpDialog();
  root.querySelector('#setNew').onclick = () => confirmBox('Начать заново?', 'Весь прогресс будет удалён.', () => newGame(false), 'Начать заново');
  root.querySelector('#setSand').onclick = () => confirmBox('Запустить песочницу?', 'Текущая карьера будет заменена песочницей: бесконечные деньги, все детали открыты.', () => newGame(true), 'Запустить');
}

// 3DMark
function appMark(body) {
  const pc = bench();
  const sc = scoreOf(pc);
  const running = !!ui.markRun;
  body.innerHTML = `<div class="mark"><div class="mark-top"><div class="mark-logo">3D<span>MARK</span> <small style="font-size:13px;opacity:.6">Time Spy</small></div>
    <button class="btn btn-orange" id="mkRun" ${running ? 'disabled' : ''}>${running ? 'Идёт тест…' : 'Запустить тест'}</button></div>
    <div class="mark-view" id="mkView">${running ? '' : sc != null ? markResultHTML(pc) : `<div class="mark-res"><p>Тест покажет, насколько быстр этот компьютер в играх.</p><p class="muted">Результат нужен для заказов на сборку и влияет на цену вашего ПК.</p></div>`}</div>
    <div class="mark-bar"><i id="mkBar" style="width:${running ? 0 : sc != null ? 100 : 0}%"></i></div></div>`;
  if (running) $('#mkView').appendChild(view.screen.canvas);
  $('#mkRun').onclick = runMark;
}
function markResultHTML(pc) {
  const r = benchmark(pc.build);
  return `<div class="mark-res"><div class="muted">Ваш результат</div><div class="score">${scoreOf(pc)}</div>
    <div>≈ ${r.fps || '—'} FPS в играх · CPU ${r.cpuTemp ?? '—'} °C · GPU ${r.gpuTemp || '—'} °C</div>
    ${r.throttle ? '<p class="warn-t"><b>Перегрев: частоты снижены!</b> Поставьте охлаждение получше.</p>' : ''}</div>`;
}
function runMark() {
  const pc = bench();
  if (!pc || !ui.booted || ui.markRun) return;
  const r = benchmark(pc.build);
  if (!r.ok) { toast(esc(r.error), 'err'); return; }
  const dur = 6000;
  ui.markRun = { t0: performance.now() };
  screen.set('bench', { ...sysInfo(), ...r, dur });
  if (os.app === 'mark') appMark($('#winB'));
  const iv = setInterval(() => {
    if (!ui.markRun) { clearInterval(iv); return; }
    const k = Math.min(1, (performance.now() - ui.markRun.t0) / dur);
    const bar = $('#mkBar'); if (bar) bar.style.width = k * 100 + '%';
  }, 200);
  later(() => {
    clearInterval(iv);
    ui.markRun = null;
    view.screen.canvas.remove();
    screen.set('result', { ...sysInfo(), ...r });
    pc.score = { sig: buildSig(pc.build), score: r.score };
    save(); sfx.levelUp();
    toast(`Результат 3DMark: <b>${r.score}</b> (≈${r.fps} FPS)${r.throttle ? ' — <span class="warn-t">перегрев!</span>' : ''}`, 'ok');
    if (os.app === 'mark') appMark($('#winB'));
    renderAll();
  }, dur);
}

// Сведения о системе
function appSys(body) {
  const b = B();
  const row = (k, v) => `<tr><td class="muted">${k}</td><td><b>${esc(v || '—')}</b></td></tr>`;
  const cpu = partOf(b.slots.cpu), gpu = partOf(b.slots.gpu);
  const sticks = ramSticks(b).map(it => partOf(it));
  body.innerHTML = `<div class="app-pad"><h2 class="app-h2">Сведения о системе</h2><table class="tbl">
    ${row('Процессор', cpu ? `${cpu.name} (${cpu.cores} ядер, ${cpu.boost} ГГц)` : '')}
    ${row('Видеокарта', gpu ? gpu.name : cpu?.igpu ? 'Встроенная графика процессора' : '')}
    ${row('Память', `${ramTotal(b)} ГБ (${sticks.length} шт.${sticks[0] ? ', ' + sticks[0].ram + ' ' + sticks[0].mhz + ' МГц' : ''})`)}
    ${row('Материнская плата', partOf(b.slots.mb)?.name)}
    ${row('Накопители', storages(b).map(s => partOf(b.slots[s]).name).join(', '))}
    ${row('Блок питания', partOf(b.slots.psu) ? `${partOf(b.slots.psu).name}` : '')}
    ${row('Охлаждение', partOf(b.slots.cooler)?.name)}
    ${row('Корпус', partOf(b.slots.case)?.name)}
    ${row('Вентиляторы корпуса', String(fansCount(b)))}
  </table></div>`;
}

// Датчики
function appSensors(body) {
  const b = B();
  const t = temps(b);
  const draw = powerDraw(b), watt = partOf(b.slots.psu)?.watt || 1;
  const cls = (v, w, d) => v >= d ? 'b' : v >= w ? 'w' : '';
  const j = pcJob(bench());
  body.innerHTML = `<div class="app-pad"><h2 class="app-h2">Стресс-тест OCCT — показания под нагрузкой</h2><div class="sens">
    <div class="sens-c"><div class="muted">Температура CPU</div><div class="v">${t.cpu} °C</div><div class="meter"><i class="${cls(t.cpu, 80, 90)}" style="width:${Math.min(100, t.cpu)}%"></i></div></div>
    <div class="sens-c"><div class="muted">Температура GPU</div><div class="v">${t.gpu ? t.gpu + ' °C' : '—'}</div><div class="meter"><i class="${cls(t.gpu, 80, 88)}" style="width:${Math.min(100, t.gpu)}%"></i></div></div>
    <div class="sens-c"><div class="muted">Потребление</div><div class="v">${draw} Вт</div><div class="meter"><i class="${cls(draw / watt, 0.8, 0.95)}" style="width:${Math.min(100, draw / watt * 100)}%"></i></div><div class="small muted">из ${watt} Вт блока питания</div></div>
    <div class="sens-c"><div class="muted">Вентиляторы корпуса</div><div class="v">${fansCount(b)}</div><div class="small muted">${dirtyItems(b).length ? 'Внутри есть пыль — она греет детали' : 'Пыли нет'}</div></div>
  </div>
  ${j?.req.maxTemp ? `<p style="margin-top:14px">Требование клиента: CPU не выше <b>${j.req.maxTemp} °C</b> — ${t.cpu <= j.req.maxTemp ? '<b class="ok">выполнено</b>' : '<b class="bad">не выполнено</b>'}</p>` : ''}
  <p class="muted small">Под нагрузкой процессору лучше быть холоднее 80 °C. Выше 90 °C он сбрасывает частоты.</p></div>`;
}

// ── Меню, помощь ────────────────────────────────────────────────────────────
function showMenu(kind) {
  const m = $('#menu');
  const hasSave = S.jobsDone > 0 || S.day > 1 || S.pcs.length || S.inventory.length || S.jobs.length;
  const btns = [];
  if (kind === 'start') {
    btns.push({ id: 'go', cls: 'btn-cyan', t: hasSave ? `${ICON.home} Продолжить · день ${S.day}` : `${ICON.home} Начать карьеру` });
    if (hasSave) btns.push({ id: 'new', cls: 'btn-line', t: `${ICON.plus} Новая карьера` });
  } else btns.push({ id: 'go', cls: 'btn-cyan', t: `${ICON.home} Продолжить` });
  btns.push({ id: 'sand', cls: 'btn-line', t: `${ICON.box} Песочница` });
  if (kind !== 'start') btns.push({ id: 'set', cls: 'btn-line', t: `${ICON.gear} Настройки` });
  btns.push({ id: 'help', cls: 'btn-line', t: `${ICON.info} Как играть` });
  $('#menuBtns').innerHTML = btns.map(b => `<button class="btn ${b.cls}" data-m="${b.id}">${b.t}</button>`).join('') +
    `<a class="btn btn-line" href="https://github.com/S4rgeant1k/WebGames">${ICON.github} Вернуться на GitHub</a>`;
  m.classList.remove('hidden');
  m.dataset.kind = kind;
}
$('#menuBtns').addEventListener('click', e => {
  const b = e.target.closest('[data-m]');
  if (!b) return;
  sfx.click();
  const id = b.dataset.m;
  if (id === 'go') startPlaying();
  else if (id === 'new') confirmBox('Начать заново?', 'Весь прогресс будет удалён.', () => newGame(false), 'Начать заново');
  else if (id === 'sand') confirmBox('Запустить песочницу?', 'Бесконечные деньги и все детали открыты. Текущая карьера будет заменена.', () => newGame(true), 'Запустить');
  else if (id === 'set') { openModal({ title: ICON.gear + ' Настройки', body: settingsHTML(), buttons: [{ label: 'Готово', cls: 'btn-cyan' }] }); bindSettings($('#modal')); }
  else if (id === 'help') helpDialog();
});
function startPlaying() {
  $('#menu').classList.add('hidden');
  ui.started = true;
  if (S.tutorial) { S.tutorial = false; save(); helpDialog(true); return; }
  relockLater();
}
function newGame(sandbox) {
  powerOff();
  reset(sandbox);
  setSound(S.settings.sound);
  ui.selected = null; ui.tool = null; ui.cart = {};
  if (!sandbox) addMail(2);
  else for (const pid of ['zalman-s2', 'a520m-a', 'r5-5600g', 'wraith-stealth', 'd4-8-3200', 'd4-8-3200', 'ssd-480', 'pf500']) S.inventory.push(newItem(pid, { tested: true }));
  S.tutorial = false;
  save();
  if (view.mode !== 'walk') { if (!$('#os').classList.contains('hidden')) closeOS(); else view.exitToWalk(); }
  view.teleport(1.6, 2.8, 0.35, -0.12);
  syncWorld(); renderAll();
  $('#menu').classList.add('hidden');
  ui.started = true;
  toast(sandbox ? 'Песочница: деньги бесконечны, все детали открыты.' : 'Новая карьера! На почте уже ждут первые заказы.', 'ok');
  relockLater();
}
function helpDialog(first = false) {
  openModal({
    title: ICON.info + (first ? ' Добро пожаловать в мастерскую!' : ' Как играть'), wide: true,
    body: `<p>Вы — мастер компьютерной мастерской. Принимайте заказы, чините и собирайте компьютеры, зарабатывайте деньги и опыт.</p>
      <ol class="help-list">
        <li><b>Компьютер мастерской</b> (у правой стены): почта с заказами, магазин деталей, список заказов.</li>
        <li>Принятый заказ: компьютер клиента появится на <b>стеллаже</b> у левой стены. Подойдите и поставьте его на верстак.</li>
        <li><b>Верстак</b>: снимайте и ставьте детали, подключайте кабели, продувайте пыль, включайте ПК и запускайте 3DMark через монитор.</li>
        <li>Когда все пункты заказа отмечены — нажмите <b>«Сдать заказ»</b>.</li>
        <li>Можно собрать <b>свой ПК</b>: купите детали и поставьте корпус на пустой верстак. Готовый ПК продаётся дороже деталей.</li>
        <li>Писем нет — выйдите через <b>дверь</b>, чтобы закончить день.</li>
      </ol>
      <div class="keys-tbl">${isTouch
        ? '<span><b>Джойстик</b></span><span>ходить</span><span><b>Свайп справа</b></span><span>осмотреться</span><span><b>Кнопка-рука</b></span><span>действие</span>'
        : '<kbd>W A S D</kbd><span>ходить (Shift — бег)</span><kbd>Мышь</kbd><span>осмотреться</span><kbd>E</kbd><span>действие / взаимодействие</span><kbd>Tab</kbd><span>склад деталей</span><kbd>Esc</kbd><span>назад / меню</span><kbd>C B P M R</kbd><span>за верстаком: кабели, продувка, питание, монитор, камера</span>'}</div>`,
    buttons: [{ label: first ? 'Начать работу' : 'Понятно', cls: 'btn-cyan', fn: relockLater }],
    onClose: relockLater
  });
}

// ── Клавиатура ──────────────────────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('input,textarea,select')) return;
  const mode = view.mode;
  if (e.code === 'Escape') {
    if (closeModal()) return;
    if (!$('#ctx').classList.contains('hidden')) { closeCtx(); return; }
    if (closeInventory()) { relockLater(); return; }
    if (closeOS()) return;
    if (mode === 'build') { if (ui.selected) selectItem(null); else if (ui.tool) setTool(null); else exitBuild(); return; }
    if (mode === 'walk' && ui.started) { if ($('#menu').classList.contains('hidden')) showMenu('pause'); else startPlaying(); }
    return;
  }
  if (modalOpen() || !$('#menu').classList.contains('hidden') || !$('#os').classList.contains('hidden')) return;
  if (e.code === 'Tab' || e.code === 'KeyI') {
    e.preventDefault();
    if (mode === 'walk') { if (!closeInventory()) openInventory(); else relockLater(); }
    return;
  }
  if (mode === 'walk' && e.code === 'KeyE' && !document.body.classList.contains('inv-open')) { interact(view.target); return; }
  if (mode === 'build') {
    const map = { Digit1: 'hand', KeyC: 'cables', KeyB: 'dust', KeyP: 'power', KeyM: 'monitor', KeyR: 'camera' };
    const id = map[e.code];
    if (id) {
      const btn = $(`[data-tool="${id}"]`);
      if (btn && !btn.disabled) { sfx.click(); toolAction(id); }
    }
  }
});

// ── Мобильное управление ────────────────────────────────────────────────────
{
  const joy = $('#joy'), knob = $('#joyKnob');
  let id = null, cx = 0, cy = 0;
  const R = 50;
  joy.addEventListener('touchstart', e => {
    const t = e.changedTouches[0];
    id = t.identifier;
    const r = joy.getBoundingClientRect();
    cx = r.left + r.width / 2; cy = r.top + r.height / 2;
    move(t); e.preventDefault();
  }, { passive: false });
  const move = t => {
    let dx = t.clientX - cx, dy = t.clientY - cy;
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = dx / d * R; dy = dy / d * R; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    view.setJoystick(dx / R, dy / R);
  };
  joy.addEventListener('touchmove', e => { for (const t of e.changedTouches) if (t.identifier === id) move(t); e.preventDefault(); }, { passive: false });
  const end = e => { for (const t of e.changedTouches) if (t.identifier === id) { id = null; knob.style.transform = ''; view.setJoystick(0, 0); } };
  joy.addEventListener('touchend', end);
  joy.addEventListener('touchcancel', end);
  $('#btnAct').addEventListener('click', () => interact(view.target));
  $('#btnInvMob').addEventListener('click', () => { sfx.click(); if (document.body.classList.contains('m-build')) return; if (!closeInventory()) openInventory(); });
  $('#btnMenuMob').addEventListener('click', () => { sfx.click(); showMenu('pause'); });
}
$('#btnAct').innerHTML = ICON.hand + '<span>Действие</span>';
$('#btnAct').classList.add('dim');

// ── Кадр ────────────────────────────────────────────────────────────────────
view.onFrame = now => screen.tick(now);

// ── Старт ───────────────────────────────────────────────────────────────────
if (!S.sandbox && !S.inbox.length && !S.jobs.length && S.day === 1 && !S.jobsDone) addMail(2);
syncWorld();
renderAll();
setBodyMode('walk');
showMenu('start');

// Для автотестов
window.__game = {
  get S() { return S; }, view, ui, screen, PART,
  interact, onPick, acceptJob, completeJob, takeToBench, moveBenchToRack, selectItem, doInstall, doRemove, openOS, closeOS, osOpen,
  powerOnFlow, runMark, startPlaying, newGame, checkout, nextDay, toolAction, exitBuild, openInventory, closeInventory
};
