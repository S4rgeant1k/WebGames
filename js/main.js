// Интерфейс игры: роутинг, апгрейд, кейсы, рынок, инвентарь, профиль, лента.

import { ITEMS, ITEM_BY_ID, RARITIES, RARITY_BY_ID, CATEGORIES, CASES, CASE_BY_ID, CONFIG } from './data.js';
import {
  chanceFor, multiplierFor, resolveUpgrade, pickFromPool, hashToInt,
  consolationPrize, fmt, fmtShort
} from './economy.js';
import { sha256Hex, betString } from './fair.js';
import { itemArt, categoryIcon, steamImage, installImageFallback } from './art.js';
import { sfx, setSoundEnabled } from './audio.js';
import {
  state, load, save, resetAll, ensureSeeds, rotateSeed,
  addItem, removeItems, invItem, inventoryValue, pushHistory
} from './state.js';

// ── Утилиты ───────────────────────────────────────────────────────────────
const $ = sel => document.querySelector(sel);
const $$ = sel => [...document.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const rand = (a, b) => a + Math.random() * (b - a);
let artUid = 0;

// ── Иконки ────────────────────────────────────────────────────────────────
const CHEV_PATH = 'M0 16 20 2l20 14v8L20 10 0 24z';
const CHEV2_PATH = 'M5 28 20 17.5 35 28v6L20 23.5 5 34z';
const ICON = {
  chev: `<svg viewBox="0 0 40 34"><path d="${CHEV_PATH}"/></svg>`,
  soundOn: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9zm13.5 3A4.5 4.5 0 0 0 14 8v8a4.5 4.5 0 0 0 2.5-4zM14 3.2v2.1a7 7 0 0 1 0 13.4v2.1a9 9 0 0 0 0-17.6z"/></svg>',
  soundOff: '<svg viewBox="0 0 24 24"><path fill="currentColor" d="M3 9v6h4l5 5V4L7 9zm18.3 6.9-1.4 1.4L17 14.4l-2.9 2.9-1.4-1.4 2.9-2.9-2.9-2.9 1.4-1.4 2.9 2.9 2.9-2.9 1.4 1.4-2.9 2.9z"/></svg>'
};
const chevStack = dir => {
  const d = dir === 'down' ? 'M0 0 33 18 66 0v11L33 30 0 11z' : 'M0 30 33 12 66 30V19L33 0 0 19z';
  return `<div class="chevs ${dir}">${[0, 1, 2].map(() => `<svg viewBox="0 0 66 30"><path d="${d}" fill="#ffd200"/></svg>`).join('')}</div>`;
};
const bigChevron = () => `<svg class="wc-chev" viewBox="0 0 40 34" aria-hidden="true">
  <defs><linearGradient id="cg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe14d"/><stop offset="1" stop-color="#ffc400"/></linearGradient></defs>
  <path d="${CHEV_PATH}" fill="url(#cg1)"/><path d="${CHEV2_PATH}" fill="#8f7500"/></svg>`;

function avatarSVG(seed) {
  const h = (seed * 47) % 360;
  return `<svg viewBox="0 0 64 64" aria-hidden="true">
    <defs><linearGradient id="av${seed}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="hsl(${h},70%,55%)"/><stop offset="1" stop-color="hsl(${(h + 40) % 360},70%,30%)"/></linearGradient></defs>
    <rect width="64" height="64" fill="url(#av${seed})"/>
    <circle cx="32" cy="25" r="12" fill="rgba(0,0,0,.35)"/>
    <path d="M8 64c2-15 12-22 24-22s22 7 24 22z" fill="rgba(0,0,0,.35)"/>
  </svg>`;
}

// ── Тосты и модалки ───────────────────────────────────────────────────────
function toast(msg, err = false) {
  const t = document.createElement('div');
  t.className = 'toast' + (err ? ' err' : '');
  t.textContent = msg;
  $('#toasts').appendChild(t);
  setTimeout(() => t.remove(), 3200);
  if (err) sfx.error();
}

function openModal(html, cls = '') {
  const box = $('#modalBox');
  box.className = 'modal-box ' + cls;
  box.innerHTML = `<button class="m-close" data-close aria-label="Закрыть">×</button>${html}`;
  $('#modal').classList.remove('hidden');
}
function closeModal() { $('#modal').classList.add('hidden'); }
$('#modal').addEventListener('click', e => {
  if (e.target.id === 'modal' || e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

const rcolor = item => RARITY_BY_ID[item.rarity].color;
const rarityStyle = item => `--rc:${rcolor(item)}`;

function chanceColor(c) {
  if (c >= 60) return '#9be15d';
  if (c >= 30) return '#ffd200';
  if (c >= 15) return '#ff9d3a';
  return '#ff5c5c';
}

/** Карточка предмета в стиле апгрейдера. */
function cardHTML(item, { uid = '', cls = '', chance = null, actions = '', check = false, extra = '' } = {}) {
  return `<div class="card ${cls}" style="${rarityStyle(item)}" data-id="${item.id}" ${uid !== '' ? `data-uid="${uid}"` : ''}>
    ${check ? '<span class="c-check"></span>' : ''}
    <div class="c-top">
      <span class="c-price"><span class="coin"></span>${fmt(item.price)}</span>
      ${chance !== null ? `<span class="c-chance" style="color:${chanceColor(chance)}">${chance.toFixed(1)}%</span>` : ''}
      ${extra}
    </div>
    ${itemArt(item, { uid: artUid++ })}
    <div class="c-name" title="${item.skin}">${item.skin}</div>
    <div class="c-weapon" title="${item.weapon}">${item.weapon}</div>
    ${actions ? `<div class="c-actions">${actions}</div>` : ''}
  </div>`;
}

// ── Шапка: баланс, счётчики, бонус, звук ──────────────────────────────────
let shownBalance = 0;
function animateNumber(el, from, to, dur = 450) {
  if (from === to) { el.textContent = fmt(to); return; }
  const t0 = performance.now();
  const step = now => {
    const k = Math.min(1, (now - t0) / dur);
    el.textContent = fmt(from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function renderHeader(bump = false) {
  animateNumber($('#balance'), shownBalance, state.balance);
  shownBalance = state.balance;
  if (bump) {
    const b = $('.balance-box');
    b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  }
  $('#invCount').textContent = state.inventory.length;
  const snd = state.settings.sound ? ICON.soundOn : ICON.soundOff;
  $('#soundBtn').innerHTML = snd;
  $('#soundTool').innerHTML = snd;
  $('#fastTool').classList.toggle('on', !!state.settings.fast);
  $('#topAvatar').innerHTML = avatarSVG(state.playerId);
  renderDaily();
}

function changeBalance(delta) {
  state.balance = Math.max(0, Math.round(state.balance + delta));
  renderHeader(delta > 0);
}

// «Живые» счётчики сайта (симуляция)
const counters = { online: 5536, upgrades: 553013936, cases: 462065 };
function renderCounters() {
  $('#cOnline').textContent = fmt(counters.online);
  $('#cUpgrades').textContent = fmt(counters.upgrades);
  $('#cCases').textContent = fmt(counters.cases);
}
setInterval(() => {
  counters.online = Math.round(Math.min(7200, Math.max(4200, counters.online + rand(-60, 64))));
  counters.upgrades += Math.floor(rand(3, 18));
  renderCounters();
}, 2500);

// Ежедневный бонус
const DAY = 24 * 3600 * 1000;
const dailyReady = () => Date.now() - state.daily.last >= DAY;
function dailyAmount() {
  const streak = Date.now() - state.daily.last < 2 * DAY ? state.daily.streak + 1 : 1;
  return { streak, amount: CONFIG.dailyBonus + Math.min(streak - 1, 6) * CONFIG.dailyStreakBonus };
}
function dailyLeftText() {
  const left = DAY - (Date.now() - state.daily.last);
  const h = Math.floor(left / 3600000), m = Math.floor((left % 3600000) / 60000);
  return `${h}ч ${String(m).padStart(2, '0')}м`;
}
function renderDaily() {
  const ready = dailyReady();
  const btn = $('#dailyBtn');
  btn.classList.toggle('ready', ready);
  btn.classList.toggle('cooldown', !ready);
  $('#dailyLabel').textContent = ready ? 'Бонус' : dailyLeftText();
  const pf = $('#pfDailyBtn');
  if (pf) {
    pf.disabled = !ready;
    $('#pfDailyLabel').textContent = ready ? `Забрать бонус ${fmt(dailyAmount().amount)}` : `Бонус через ${dailyLeftText()}`;
  }
}
function claimDaily() {
  if (!dailyReady()) { toast(`Бонус уже получен. Следующий через ${dailyLeftText()}`, true); return; }
  const { streak, amount } = dailyAmount();
  state.daily = { last: Date.now(), streak };
  changeBalance(amount);
  pushHistory({ type: 'daily', amount });
  save();
  sfx.coin();
  openModal(`<h2>Ежедневный бонус</h2>
    <p class="muted">Серия: ${streak} ${streak > 1 ? 'дня подряд' : 'день'} · за серию до +${fmt(6 * CONFIG.dailyStreakBonus)}</p>
    <div class="m-big">+ ${fmt(amount)} <span class="coin coin-lg"></span></div>
    <div class="m-actions"><button class="btn btn-yellow" data-close>Отлично</button></div>`, 'gold');
  if (currentPage === 'profile') renderProfile();
}
$('#dailyBtn').addEventListener('click', claimDaily);
setInterval(renderDaily, 30000);

function toggleSound() {
  state.settings.sound = !state.settings.sound;
  setSoundEnabled(state.settings.sound);
  save(); renderHeader(); sfx.click();
}
$('#soundBtn').addEventListener('click', toggleSound);
$('#soundTool').addEventListener('click', toggleSound);
$('#fastTool').addEventListener('click', () => {
  state.settings.fast = !state.settings.fast;
  save(); renderHeader(); sfx.click();
  toast(state.settings.fast ? 'Быстрая прокрутка включена' : 'Быстрая прокрутка выключена');
});
$('#infoBtn').addEventListener('click', showRules);

function showRules() {
  openModal(`<h2>Как играть</h2>
    <div class="m-text">
      <p><b>1.</b> Выберите предметы из инвентаря (до 6) и/или сумму баланса ползунком.</p>
      <p><b>2.</b> Выберите предмет, который хотите получить. Чем он дороже ставки — тем ниже шанс.
        Кнопки <b>x2 / x3 / x4</b> подбирают цель по множителю, <b>60% / 70% / 80%</b> — по шансу.</p>
      <p><b>3.</b> Нажмите <b>«Улучшить»</b>. Если стрелка остановится в жёлтой зоне — предмет ваш.
        Иначе ставка сгорает (иногда выпадает утешительный приз).</p>
      <p>⚡ — быстрая прокрутка. Каждый день забирайте бонус, а купоны вводите в профиле.</p>
      <p class="muted">Все монеты виртуальные. Реальные деньги не используются.</p>
    </div>
    <div class="m-actions"><button class="btn btn-yellow" data-close>Понятно</button></div>`, 'gold');
}

// ── Роутер ────────────────────────────────────────────────────────────────
const PAGES = ['upgrade', 'cases', 'market', 'inventory', 'profile'];
let currentPage = '';
function route() {
  const page = PAGES.includes(location.hash.slice(1)) ? location.hash.slice(1) : 'upgrade';
  currentPage = page;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + page));
  $$('.nav a').forEach(a => a.classList.toggle('active', a.dataset.page === page));
  renderPage();
  window.scrollTo({ top: 0 });
}
function renderPage() {
  ({ upgrade: renderUpgrade, cases: renderCases, market: renderMarket, inventory: renderInventory, profile: renderProfile })[currentPage]();
}
window.addEventListener('hashchange', route);

// ══════════════════════════════════════════════════════════════════════════
// АПГРЕЙД
// ══════════════════════════════════════════════════════════════════════════
// snap — «снимок» ставки на время прокрутки и показа результата,
// чтобы колесо не обнулялось, когда предметы уже списаны.
const up = { stake: [], targetId: null, spinning: false, rotation: 0, snap: null, result: null };
const MAX_STAKE = 6;
const WHEEL = { cx: 150, cy: 150, r: 112, rOuter: 144 };

const stakeItemsValue = () => up.stake.reduce((s, uid) => s + (ITEM_BY_ID[invItem(uid)?.id]?.price || 0), 0);
function stakeBalanceValue() {
  const v = Math.floor(Number($('#stakeBalance').value) || 0);
  return Math.max(0, Math.min(v, state.balance));
}
const stakeTotal = () => stakeItemsValue() + stakeBalanceValue();

/** Дуга сектора шанса, симметричная относительно низа колеса. */
function arcPath(r, chance) {
  if (!(chance > 0)) return '';
  const { cx, cy } = WHEEL;
  const deg = Math.min(chance, 99.9) / 100 * 360;
  const half = deg / 2 * Math.PI / 180;
  const sx = cx + r * Math.sin(half), sy = cy + r * Math.cos(half);
  const ex = cx - r * Math.sin(half), ey = cy + r * Math.cos(half);
  return `M ${sx.toFixed(2)} ${sy.toFixed(2)} A ${r} ${r} 0 ${deg > 180 ? 1 : 0} 1 ${ex.toFixed(2)} ${ey.toFixed(2)}`;
}

function buildTicks() {
  let s = '';
  for (let i = 0; i < 72; i++) {
    const a = i / 72 * Math.PI * 2;
    const r1 = 131, r2 = 136;
    s += `<line x1="${(150 + r1 * Math.sin(a)).toFixed(1)}" y1="${(150 - r1 * Math.cos(a)).toFixed(1)}" x2="${(150 + r2 * Math.sin(a)).toFixed(1)}" y2="${(150 - r2 * Math.cos(a)).toFixed(1)}"/>`;
  }
  $('#wheelTicks').innerHTML = s;
}

function currentChance() {
  const t = ITEM_BY_ID[up.targetId];
  const s = stakeTotal();
  if (!t || s <= 0 || t.price <= s) return 0;
  return chanceFor(s, t.price);
}

function renderUpgrade() {
  up.stake = up.stake.filter(uid => invItem(uid));
  syncSlider();
  renderStakeSlot();
  renderTargetSlot();
  renderWheelInfo();
  renderUpInventory();
  renderUpTargets();
}

function syncSlider() {
  const sl = $('#stakeBalance');
  sl.max = String(state.balance);
  if (Number(sl.value) > state.balance) sl.value = String(state.balance);
  const v = stakeBalanceValue();
  sl.style.setProperty('--fill', state.balance > 0 ? (v / state.balance * 100) + '%' : '0%');
  sl.step = state.balance > 20000 ? '100' : state.balance > 2000 ? '10' : '1';
  $('#stakeBalanceLabel').textContent = fmt(v);
  $('#stakeBalanceMax').textContent = fmt(state.balance);
}

function upItemHTML(item) {
  return `<div class="up-item" style="${rarityStyle(item)}">
    ${itemArt(item, { uid: artUid++ })}
    <div class="up-item-name">${item.skin}</div>
    <div class="up-item-weapon">${item.weapon}</div>
    <div class="up-item-price"><span class="coin"></span>${fmt(item.price)}</div>
  </div>`;
}

function renderStakeSlot() {
  const body = $('#stakeBody');
  const items = up.stake.map(uid => ({ uid, item: ITEM_BY_ID[invItem(uid).id] }));
  const bal = stakeBalanceValue();
  if (!items.length && !bal) {
    body.innerHTML = `
      <div class="up-empty-title">Выберите предметы и/или баланс для использования</div>
      <div class="up-empty-sub">Вы можете выбрать несколько предметов</div>
      <div class="up-sil">${categoryIcon('rifle', '#141414')}</div>
      ${chevStack('down')}`;
    return;
  }
  if (!items.length) {
    body.innerHTML = `<div class="up-item" style="--rc:#ffd200">
      <span class="coin" style="width:130px;height:130px;filter:drop-shadow(0 12px 24px rgba(255,190,0,.35))"></span>
      <div class="up-item-name" style="margin-top:14px">Баланс</div>
      <div class="up-item-price"><span class="coin"></span>${fmt(bal)}</div></div>`;
    return;
  }
  if (items.length === 1) {
    body.innerHTML = upItemHTML(items[0].item) +
      (bal ? `<div class="up-panel-foot">+ <span class="coin"></span><b>${fmt(bal)}</b> с баланса</div>` : '');
    return;
  }
  body.innerHTML = `<div class="up-empty-title">Выбрано предметов: ${items.length}</div>
    <div class="stake-multi">${items.map(({ uid, item }) => cardHTML(item, { uid, cls: 'clickable' })).join('')}</div>
    <div class="up-panel-foot">Итого: <span class="coin"></span><b>${fmt(stakeTotal())}</b>${bal ? ` (вкл. ${fmt(bal)} с баланса)` : ''}</div>`;
  body.querySelectorAll('.card').forEach(c => c.addEventListener('click', () => toggleStake(Number(c.dataset.uid))));
}

function renderTargetSlot() {
  const body = $('#targetBody');
  const t = ITEM_BY_ID[up.targetId];
  if (!t) {
    body.innerHTML = `
      <div class="up-empty-title">Выберите предмет для апгрейда</div>
      <div class="up-sil">${categoryIcon('rifle', '#141414')}</div>
      ${chevStack('up')}`;
    return;
  }
  body.innerHTML = upItemHTML(t);
}

function renderWheelInfo() {
  const t = ITEM_BY_ID[up.targetId];
  const s = stakeTotal();
  const shown = up.snap || { chance: currentChance(), total: s, price: t?.price || 0 };
  const chance = shown.chance;
  $('#wheelSector').setAttribute('d', arcPath(WHEEL.r, chance));
  $('#wheelSectorOuter').setAttribute('d', arcPath(WHEEL.rOuter, chance));

  const center = $('#wheelCenter');
  if (up.result) {
    center.innerHTML = `<div class="wc-result ${up.result}">${up.result === 'win' ? 'Победа!' : 'Не повезло'}</div>
      <div class="wc-label" style="color:#8a8a8a">шанс был ${chance.toFixed(2)}%</div>`;
  } else if (chance) {
    center.innerHTML = `<div class="wc-chance" style="color:${chanceColor(chance)}">${chance.toFixed(2)}%</div>
      <div class="wc-label" style="color:${chanceColor(chance)}">шанс апгрейда</div>
      <div class="wc-mult">x${multiplierFor(shown.total, shown.price).toFixed(2)}</div>`;
  } else {
    center.innerHTML = bigChevron();
  }

  const btn = $('#upgradeBtn');
  let reason = '';
  if (s <= 0) reason = 'Выберите ставку';
  else if (!t) reason = 'Выберите предмет';
  else if (t.price <= s) reason = 'Цель дешевле ставки';
  btn.disabled = !!reason || up.spinning;
  $('#upgradeLabel').textContent = up.spinning ? 'Крутим…' : (reason || 'Улучшить');
}

function renderUpInventory() {
  const q = $('#upInvSearch').value.trim().toLowerCase();
  const grid = $('#upInvGrid');
  const list = state.inventory
    .map(e => ({ e, item: ITEM_BY_ID[e.id] }))
    .filter(({ item }) => !q || (item.weapon + ' ' + item.skin).toLowerCase().includes(q))
    .sort((a, b) => b.item.price - a.item.price);
  if (!list.length) {
    grid.innerHTML = `<div class="empty">${state.inventory.length ? 'Ничего не найдено'
      : 'У вас пока нет предметов<div class="muted" style="margin-top:8px">Купите скин на <a href="#market">рынке</a>, откройте <a href="#cases">кейс</a> или поставьте баланс ползунком</div>'}</div>`;
    return;
  }
  grid.innerHTML = list.map(({ e, item }) => cardHTML(item, {
    uid: e.uid, cls: 'clickable' + (up.stake.includes(e.uid) ? ' selected' : '')
  })).join('');
}

function renderUpTargets() {
  const q = $('#upTargetSearch').value.trim().toLowerCase();
  const dir = $('#upTargetSort').dataset.dir;
  const from = Number($('#upPriceFrom').value) || 0;
  const to = Number($('#upPriceTo').value) || Infinity;
  const s = stakeTotal();
  let list = ITEMS.filter(i => (!q || (i.weapon + ' ' + i.skin).toLowerCase().includes(q)) && i.price >= from && i.price <= to);
  if (s > 0) list = list.filter(i => i.price > s);
  list.sort((a, b) => dir === 'asc' ? a.price - b.price : b.price - a.price);
  $('#upTargetGrid').innerHTML = list.length ? list.map(i => cardHTML(i, {
    cls: 'clickable' + (i.id === up.targetId ? ' selected' : ''),
    chance: s > 0 ? chanceFor(s, i.price) : null
  })).join('') : `<div class="empty">${s > 0 ? 'Нет предметов дороже ставки' : 'Ничего не найдено'}</div>`;
}

function toggleStake(uid) {
  if (up.spinning) return;
  const i = up.stake.indexOf(uid);
  if (i >= 0) up.stake.splice(i, 1);
  else {
    if (up.stake.length >= MAX_STAKE) { toast(`Максимум ${MAX_STAKE} предметов в ставке`, true); return; }
    up.stake.push(uid);
  }
  sfx.click();
  afterStakeChange();
}

function afterStakeChange() {
  const t = ITEM_BY_ID[up.targetId];
  if (t && t.price <= stakeTotal()) up.targetId = null;
  resetWheelLook();
  renderUpgrade();
}

function resetWheelLook() {
  if (up.spinning) return;
  up.snap = null;
  up.result = null;
  $('#wheel').classList.remove('win', 'lose');
}

function setTarget(id) {
  up.targetId = id;
  sfx.click();
  resetWheelLook();
  renderTargetSlot(); renderWheelInfo(); renderUpTargets();
}

$('#upInvGrid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) toggleStake(Number(c.dataset.uid));
});
$('#upTargetGrid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (!c || up.spinning) return;
  setTarget(up.targetId === c.dataset.id ? null : c.dataset.id);
});
$('#upInvSearch').addEventListener('input', renderUpInventory);
['#upTargetSearch', '#upPriceFrom', '#upPriceTo'].forEach(s => $(s).addEventListener('input', renderUpTargets));
$('#upTargetSort').addEventListener('click', e => {
  const b = e.currentTarget;
  b.dataset.dir = b.dataset.dir === 'asc' ? 'desc' : 'asc';
  renderUpTargets();
});
$('#stakeBalance').addEventListener('input', () => {
  if (up.spinning) return;
  afterStakeChange();
});

$('#multButtons').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b || up.spinning) return;
  const s = stakeTotal();
  if (s <= 0) { toast('Сначала выберите ставку', true); return; }
  const candidates = ITEMS.filter(i => i.price > s);
  if (!candidates.length) { toast('Нет предметов дороже ставки', true); return; }
  let best;
  if (b.dataset.mult) {
    const want = s * Number(b.dataset.mult);
    best = candidates.reduce((a, c) => Math.abs(c.price - want) < Math.abs(a.price - want) ? c : a);
  } else {
    const want = Number(b.dataset.chance);
    best = candidates.reduce((a, c) => Math.abs(chanceFor(s, c.price) - want) < Math.abs(chanceFor(s, a.price) - want) ? c : a);
  }
  setTarget(best.id);
});

$('#upgradeBtn').addEventListener('click', doUpgrade);

async function doUpgrade() {
  if (up.spinning) return;
  const target = ITEM_BY_ID[up.targetId];
  const balPart = stakeBalanceValue();
  const total = stakeTotal();
  if (!target || total <= 0 || target.price <= total || balPart > state.balance) return;

  const chance = chanceFor(total, target.price);
  const stakeIds = up.stake.map(uid => invItem(uid).id);

  // Результат определяется ДО анимации
  const f = state.fair;
  const nonce = f.nonce++;
  const hash = await sha256Hex(betString(f.serverSeed, f.clientSeed, nonce));
  const res = resolveUpgrade(hash, chance);

  // Списываем ставку
  up.spinning = true;
  removeItems(up.stake);
  state.balance -= balPart;
  renderHeader();
  save();
  up.snap = { chance, total, price: target.price };
  up.result = null;
  $('#wheel').classList.remove('win', 'lose');
  renderWheelInfo();
  $$('#page-upgrade .picker, #multButtons, .bal-slider').forEach(p => p.style.pointerEvents = 'none');

  // Анимация стрелки. Сектор шанса симметричен относительно низа колеса.
  const sectorDeg = chance / 100 * 360;
  const display = (res.angle - sectorDeg / 2 + 360) % 360;
  const fast = state.settings.fast;
  const dur = fast ? 1200 : 5200;
  const pointer = $('#pointer');
  const base = up.rotation - (up.rotation % 360);
  const finalRot = base + 360 * (fast ? 2 : 6) + display;
  pointer.style.transition = `transform ${dur}ms cubic-bezier(.12,.7,.15,1)`;
  pointer.style.transform = `rotate(${finalRot}deg)`;
  up.rotation = finalRot;
  sfx.open();
  tickDuring(dur);
  await sleep(dur + 150);

  // Итог
  state.stats.upgrades++;
  state.stats.totalStaked += total;
  counters.upgrades++;
  let consolation = null;
  if (res.win) {
    const entry = addItem(target.id);
    state.stats.wins++;
    state.stats.totalWon += target.price;
    if (!state.stats.bestWin || target.price > state.stats.bestWin.price)
      state.stats.bestWin = { id: target.id, price: target.price, chance };
    up.stake = [entry.uid];
    $('#stakeBalance').value = 0;
    up.targetId = null;
    up.result = 'win';
    $('#wheel').classList.add('win');
    chance < 20 ? sfx.bigWin() : sfx.win();
    addFeed(target, { chance });
  } else {
    state.stats.losses++;
    up.stake = [];
    up.result = 'lose';
    $('#wheel').classList.add('lose');
    sfx.lose();
    consolation = consolationPrize(total);
    if (consolation) addItem(consolation.id);
  }
  pushHistory({
    type: 'upgrade', win: res.win, target: target.id, stake: stakeIds, stakeBal: balPart,
    total, chance, roll: res.roll, nonce, consolation: consolation?.id || null
  });
  save();

  up.spinning = false;
  $$('#page-upgrade .picker, #multButtons, .bal-slider').forEach(p => p.style.pointerEvents = '');
  renderHeader();
  renderUpgrade();
  renderCounters();
  showUpgradeResult(res, target, total, chance, consolation, nonce);
}

function tickDuring(dur) {
  let t = 0, gap = 40;
  while (t < dur - 200) {
    setTimeout(sfx.tick, t);
    gap *= 1.07;
    t += gap;
  }
}

function showUpgradeResult(res, target, total, chance, consolation, nonce) {
  const r = RARITY_BY_ID[target.rarity];
  if (res.win) {
    openModal(`<h2 style="color:var(--green)">Апгрейд успешен!</h2>
      <div class="muted">Шанс ${chance.toFixed(2)}% · ставка ${fmt(total)}</div>
      <div class="m-art" style="${rarityStyle(target)}">${itemArt(target, { uid: artUid++ })}</div>
      <div style="font-weight:800;font-size:18px;text-transform:uppercase">${target.skin}</div>
      <div class="muted">${target.weapon} · <span style="color:${r.color}">${r.name}</span></div>
      <div class="m-big">${fmt(target.price)} <span class="coin coin-lg"></span></div>
      <div class="m-actions">
        <button class="btn btn-yellow" data-close>Улучшить дальше</button>
        <button class="btn btn-dark" id="mSell">Продать</button>
      </div>
      <div class="muted small" style="margin-top:12px">Ролл ${res.roll} / 10000 · nonce ${nonce}</div>`, 'win');
    $('#mSell').addEventListener('click', () => {
      const uid = up.stake[0];
      if (uid && invItem(uid)) sellItems([uid]);
      closeModal();
    });
  } else {
    openModal(`<h2 style="color:var(--red)">Не повезло…</h2>
      <div class="muted">Шанс ${chance.toFixed(2)}% · ролл ${res.roll} (нужно меньше ${Math.round(chance * 100)})</div>
      <div class="m-art" style="opacity:.35;filter:grayscale(1)">${itemArt(target, { uid: artUid++ })}</div>
      ${consolation ? `<div>Утешительный приз: <b>${consolation.weapon} | ${consolation.skin}</b>
        <span style="color:var(--yellow)">${fmt(consolation.price)}</span></div>` : ''}
      <div class="m-actions"><button class="btn btn-yellow" data-close>Ещё раз</button></div>`, 'lose');
  }
}

// ══════════════════════════════════════════════════════════════════════════
// КЕЙСЫ
// ══════════════════════════════════════════════════════════════════════════
const cs = { caseId: null, qty: 1, spinning: false, lastDrops: [] };

function caseBoxHTML(c) {
  return `<div class="case-box">
    <div class="body"></div><div class="lid"></div><div class="lock"></div><div class="stripe"></div>
    ${c.img ? `<img class="crate-img" src="${steamImage(c.img, '256fx256f')}" alt="${c.name}" loading="lazy" referrerpolicy="no-referrer" draggable="false">` : ''}
  </div>`;
}

function renderCases() {
  if (cs.caseId) { renderCaseOpen(); return; }
  $('#caseOpen').classList.add('hidden');
  $('#caseList').classList.remove('hidden');
  $('#page-cases .page-title').classList.remove('hidden');
  $('#caseList').innerHTML = CASES.map(c => `
    <div class="case-card" data-case="${c.id}" style="--cc:${c.color}">
      ${caseBoxHTML(c)}
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="case-price"><span class="coin"></span>${fmt(c.price)}</span>
    </div>`).join('');
}

$('#caseList').addEventListener('click', e => {
  const c = e.target.closest('.case-card');
  if (!c) return;
  cs.caseId = c.dataset.case;
  sfx.click();
  renderCases();
  window.scrollTo({ top: 0 });
});
$('#caseBack').addEventListener('click', () => {
  if (cs.spinning) return;
  cs.caseId = null;
  $('#caseDrops').classList.add('hidden');
  renderCases();
});
$('#caseQty').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b || cs.spinning) return;
  cs.qty = Number(b.dataset.q);
  $$('#caseQty button').forEach(x => x.classList.toggle('active', x === b));
  updateCaseButton();
  buildIdleRoulettes();
});

function updateCaseButton() {
  const c = CASE_BY_ID[cs.caseId];
  const cost = c.price * cs.qty;
  const btn = $('#caseOpenBtn');
  btn.innerHTML = cs.spinning ? 'Открываем…' : `Открыть за <span class="coin" style="width:18px;height:18px"></span> ${fmt(cost)}`;
  btn.disabled = cs.spinning || state.balance < cost;
}

function renderCaseOpen() {
  const c = CASE_BY_ID[cs.caseId];
  $('#caseList').classList.add('hidden');
  $('#page-cases .page-title').classList.add('hidden');
  $('#caseOpen').classList.remove('hidden');
  $('#caseTitle').innerHTML = `${c.name} <span class="case-price"><span class="coin"></span>${fmt(c.price)}</span>`;
  const total = c.pool.reduce((s, [, w]) => s + w, 0);
  $('#caseContents').innerHTML = c.pool
    .map(([id, w]) => ({ item: ITEM_BY_ID[id], p: w / total * 100 }))
    .sort((a, b) => b.item.price - a.item.price)
    .map(({ item, p }) => cardHTML(item, { extra: `<span class="odds">${p < 1 ? p.toFixed(2) : p.toFixed(1)}%</span>` }))
    .join('');
  updateCaseButton();
  if (!cs.spinning) buildIdleRoulettes();
}

const randomPoolItem = c => pickFromPool(c.pool);

function buildIdleRoulettes() {
  const c = CASE_BY_ID[cs.caseId];
  const wrap = $('#roulettes');
  wrap.innerHTML = '';
  for (let r = 0; r < cs.qty; r++) {
    const div = document.createElement('div');
    div.className = 'roulette';
    div.innerHTML = `<div class="roulette-marker"></div><div class="roulette-track">${
      Array.from({ length: 14 }, () => cardHTML(randomPoolItem(c))).join('')}</div>`;
    if (cs.qty > 1) div.style.height = cs.qty > 3 ? '120px' : '150px';
    wrap.appendChild(div);
  }
  fitRouletteCards();
}

function fitRouletteCards() {
  if (cs.qty <= 1) return;
  $$('#roulettes .roulette').forEach(r => {
    const h = r.clientHeight - 24;
    r.querySelectorAll('.card').forEach(card => {
      card.style.height = h + 'px';
      card.style.flexBasis = Math.round(h * 1.03) + 'px';
      const art = card.querySelector('svg:not(.coin), img');
      if (art) art.style.height = Math.max(30, h - 76) + 'px';
    });
  });
}

$('#caseOpenBtn').addEventListener('click', openCases);

async function openCases() {
  if (cs.spinning) return;
  const c = CASE_BY_ID[cs.caseId];
  const qty = cs.qty;
  const cost = c.price * qty;
  if (state.balance < cost) { toast('Недостаточно монет', true); return; }

  cs.spinning = true;
  changeBalance(-cost);
  updateCaseButton();
  $('#caseDrops').classList.add('hidden');

  const drops = [];
  for (let i = 0; i < qty; i++) {
    const nonce = state.fair.nonce++;
    const hash = await sha256Hex(betString(state.fair.serverSeed, state.fair.clientSeed, nonce));
    const r = hashToInt(hash, 1e8) / 1e8;
    drops.push({ item: pickFromPool(c.pool, () => r), nonce });
  }
  save();

  const WIN_INDEX = 48, LEN = 56;
  const wrap = $('#roulettes');
  wrap.innerHTML = '';
  const tracks = drops.map(d => {
    const div = document.createElement('div');
    div.className = 'roulette';
    if (qty > 1) div.style.height = qty > 3 ? '120px' : '150px';
    const items = Array.from({ length: LEN }, (_, i) => i === WIN_INDEX ? d.item : randomPoolItem(c));
    div.innerHTML = `<div class="roulette-marker"></div><div class="roulette-track">${
      items.map((it, i) => cardHTML(it, { cls: i === WIN_INDEX ? 'is-win' : '' })).join('')}</div>`;
    wrap.appendChild(div);
    return div;
  });
  fitRouletteCards();

  const fast = state.settings.fast;
  const dur = fast ? 1800 : 6200;
  sfx.open();
  tracks.forEach(div => {
    const track = div.querySelector('.roulette-track');
    const card = track.querySelector('.is-win');
    const cw = card.offsetWidth;
    const cardCenter = card.offsetLeft + cw / 2;
    const jitter = (Math.random() - 0.5) * cw * 0.7;
    const x = -(cardCenter - div.clientWidth / 2 + jitter);
    track.style.transition = 'none';
    track.style.transform = 'translateX(0)';
    void track.offsetWidth;
    track.style.transition = `transform ${dur}ms cubic-bezier(.08,.62,.12,1)`;
    track.style.transform = `translateX(${x}px)`;
  });
  tickDuring(dur);
  await sleep(dur + 200);
  tracks.forEach(div => div.querySelector('.is-win').classList.add('winner'));

  const entries = drops.map(d => addItem(d.item.id));
  state.stats.casesOpened += qty;
  state.stats.totalStaked += cost;
  counters.cases += qty;
  const got = drops.reduce((s, d) => s + d.item.price, 0);
  state.stats.totalWon += got;
  for (const d of drops) {
    if (!state.stats.biggestDrop || d.item.price > state.stats.biggestDrop.price)
      state.stats.biggestDrop = { id: d.item.id, price: d.item.price };
    addFeed(d.item, { isCase: true });
  }
  pushHistory({ type: 'case', caseId: c.id, items: drops.map(d => d.item.id), cost, got });
  save();
  cs.spinning = false;
  cs.lastDrops = entries.map(e => e.uid);
  got >= cost * 1.5 ? sfx.bigWin() : got >= cost ? sfx.win() : sfx.coin();
  renderHeader();
  renderCounters();
  updateCaseButton();
  showCaseDrops(drops.map((d, i) => ({ item: d.item, uid: entries[i].uid })), cost);
}

function showCaseDrops(list, cost) {
  const box = $('#caseDrops');
  const total = list.reduce((s, x) => s + x.item.price, 0);
  box.innerHTML = `<div class="grid">${list.map(x => cardHTML(x.item, { uid: x.uid })).join('')}</div>
    <div class="drops-actions">
      <span style="color:${total >= cost ? 'var(--green)' : 'var(--muted)'}">
        Выпало на ${fmt(total)} (${total >= cost ? '+' : ''}${fmt(total - cost)})</span>
      <button class="btn btn-dark" id="dropsSell">Продать за ${fmt(total)}</button>
      <button class="btn btn-yellow" id="dropsUpgrade">В апгрейд</button>
      <button class="btn btn-outline" id="dropsKeep">Оставить</button>
    </div>`;
  box.classList.remove('hidden');
  $('#dropsSell').addEventListener('click', () => {
    sellItems(cs.lastDrops.filter(uid => invItem(uid)));
    box.classList.add('hidden');
  });
  $('#dropsKeep').addEventListener('click', () => { box.classList.add('hidden'); toast('Предметы в инвентаре'); });
  $('#dropsUpgrade').addEventListener('click', () => {
    up.stake = cs.lastDrops.filter(uid => invItem(uid)).slice(0, MAX_STAKE);
    up.targetId = null;
    $('#stakeBalance').value = 0;
    box.classList.add('hidden');
    resetWheelLook();
    location.hash = '#upgrade';
  });
}

// ══════════════════════════════════════════════════════════════════════════
// РЫНОК
// ══════════════════════════════════════════════════════════════════════════
function initMarketFilters() {
  $('#mkCat').innerHTML += CATEGORIES.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
  $('#mkRarity').innerHTML += RARITIES.map(r => `<option value="${r.id}">${r.name}</option>`).join('');
  ['#mkSearch', '#mkCat', '#mkRarity', '#mkSort', '#mkAfford'].forEach(s =>
    $(s).addEventListener(s === '#mkSearch' ? 'input' : 'change', renderMarket));
}

function renderMarket() {
  const q = $('#mkSearch').value.trim().toLowerCase();
  const cat = $('#mkCat').value, rar = $('#mkRarity').value, sort = $('#mkSort').value;
  const afford = $('#mkAfford').checked;
  const list = ITEMS.filter(i =>
    (!q || (i.weapon + ' ' + i.skin).toLowerCase().includes(q)) &&
    (!cat || i.cat === cat) && (!rar || i.rarity === rar) &&
    (!afford || i.price <= state.balance)
  ).sort((a, b) =>
    sort === 'asc' ? a.price - b.price : sort === 'desc' ? b.price - a.price :
      (a.weapon + a.skin).localeCompare(b.weapon + b.skin, 'ru'));
  $('#mkGrid').innerHTML = list.length ? list.map(i => cardHTML(i, {
    actions: `<button class="btn btn-yellow" data-buy="${i.id}" ${i.price > state.balance ? 'disabled' : ''}>Купить</button>`
  })).join('') : '<div class="empty" style="grid-column:1/-1">Ничего не найдено</div>';
}

$('#mkGrid').addEventListener('click', e => {
  const b = e.target.closest('[data-buy]');
  if (!b) return;
  const item = ITEM_BY_ID[b.dataset.buy];
  if (state.balance < item.price) { toast('Недостаточно монет', true); return; }
  changeBalance(-item.price);
  addItem(item.id);
  state.stats.itemsBought++;
  pushHistory({ type: 'buy', item: item.id, price: item.price });
  save();
  sfx.coin();
  toast(`Куплено: ${item.weapon} | ${item.skin}`);
  renderHeader();
  renderMarket();
});

// ══════════════════════════════════════════════════════════════════════════
// ИНВЕНТАРЬ
// ══════════════════════════════════════════════════════════════════════════
const inv = { selectMode: false, selected: new Set() };

function sellItems(uids) {
  if (!uids.length) return;
  const total = uids.reduce((s, uid) => s + (ITEM_BY_ID[invItem(uid)?.id]?.price || 0), 0) * CONFIG.sellRatio;
  removeItems(uids);
  up.stake = up.stake.filter(u => !uids.includes(u));
  changeBalance(total);
  state.stats.itemsSold += uids.length;
  pushHistory({ type: 'sell', count: uids.length, amount: total });
  save();
  sfx.coin();
  toast(`Продано ${uids.length} шт. за ${fmt(total)}`);
  renderHeader();
  if (currentPage !== 'cases') renderPage();
}

function renderInventory() {
  const q = $('#invSearch').value.trim().toLowerCase();
  const sort = $('#invSort').value;
  for (const uid of inv.selected) if (!invItem(uid)) inv.selected.delete(uid);
  const list = state.inventory
    .map(e => ({ e, item: ITEM_BY_ID[e.id] }))
    .filter(({ item }) => !q || (item.weapon + ' ' + item.skin).toLowerCase().includes(q))
    .sort((a, b) => sort === 'new' ? b.e.t - a.e.t || b.e.uid - a.e.uid : sort === 'asc' ? a.item.price - b.item.price : b.item.price - a.item.price);

  $('#invTotalCount').textContent = state.inventory.length;
  $('#invTotalValue').textContent = fmt(inventoryValue());
  $('#invEmpty').classList.toggle('hidden', state.inventory.length > 0);
  $('#invSellAll').disabled = !state.inventory.length;
  $('#invGrid').classList.toggle('select-mode', inv.selectMode);
  $('#invSelectMode').textContent = inv.selectMode ? 'Отмена' : 'Выбрать';
  $('#invSellSelected').classList.toggle('hidden', !inv.selectMode);
  const selVal = [...inv.selected].reduce((s, uid) => s + ITEM_BY_ID[invItem(uid).id].price, 0);
  $('#invSellSelected').textContent = `Продать выбранное (${inv.selected.size}) · ${fmt(selVal)}`;
  $('#invSellSelected').disabled = !inv.selected.size;

  $('#invGrid').innerHTML = list.map(({ e, item }) => cardHTML(item, {
    uid: e.uid, check: true,
    cls: (inv.selectMode ? 'clickable' : '') + (inv.selected.has(e.uid) ? ' selected' : ''),
    actions: inv.selectMode ? '' : `<button class="btn btn-yellow" data-up="${e.uid}">Апгрейд</button>
      <button class="btn btn-dark" data-sell="${e.uid}">Продать</button>`
  })).join('');
}

$('#invGrid').addEventListener('click', e => {
  const sell = e.target.closest('[data-sell]');
  const upg = e.target.closest('[data-up]');
  if (sell) { sellItems([Number(sell.dataset.sell)]); return; }
  if (upg) {
    up.stake = [Number(upg.dataset.up)];
    up.targetId = null;
    $('#stakeBalance').value = 0;
    resetWheelLook();
    location.hash = '#upgrade';
    return;
  }
  if (inv.selectMode) {
    const c = e.target.closest('.card');
    if (!c) return;
    const uid = Number(c.dataset.uid);
    inv.selected.has(uid) ? inv.selected.delete(uid) : inv.selected.add(uid);
    sfx.click();
    renderInventory();
  }
});
$('#invSearch').addEventListener('input', renderInventory);
$('#invSort').addEventListener('change', renderInventory);
$('#invSelectMode').addEventListener('click', () => {
  inv.selectMode = !inv.selectMode;
  inv.selected.clear();
  renderInventory();
});
$('#invSellSelected').addEventListener('click', () => {
  sellItems([...inv.selected]);
  inv.selected.clear();
  inv.selectMode = false;
  renderInventory();
});
$('#invSellAll').addEventListener('click', () => {
  const total = inventoryValue();
  openModal(`<h2>Продать все?</h2>
    <p class="muted">${state.inventory.length} предметов на сумму</p>
    <div class="m-big">${fmt(total)} <span class="coin coin-lg"></span></div>
    <div class="m-actions"><button class="btn btn-yellow" id="mConfirmSell">Продать</button>
    <button class="btn btn-dark" data-close>Отмена</button></div>`);
  $('#mConfirmSell').addEventListener('click', () => {
    sellItems(state.inventory.map(e => e.uid));
    closeModal();
  });
});

// ══════════════════════════════════════════════════════════════════════════
// ПРОФИЛЬ
// ══════════════════════════════════════════════════════════════════════════
function timeAgo(t) {
  const s = Math.floor((Date.now() - t) / 1000);
  if (s < 60) return 'только что';
  if (s < 3600) return Math.floor(s / 60) + ' мин назад';
  if (s < 86400) return Math.floor(s / 3600) + ' ч назад';
  return new Date(t).toLocaleDateString('ru-RU');
}
const iname = id => { const i = ITEM_BY_ID[id]; return i ? `${i.weapon} | ${i.skin}` : '?'; };
let pfTab = 'history';

function renderProfile() {
  const st = state.stats;
  $('#pfAvatar').innerHTML = avatarSVG(state.playerId);
  $('#pfName').textContent = state.nickname || 'Игрок';
  $('#pfId').textContent = 'ID ' + state.playerId;
  $('#pfBalance').textContent = fmt(state.balance);
  $('#pfInvCount').textContent = state.inventory.length;
  $('#pfInvValue').textContent = fmt(inventoryValue());
  $('#pfUpgrades').textContent = fmt(st.upgrades);
  $('#pfCases').textContent = fmt(st.casesOpened);
  const streak = Date.now() - state.daily.last < 2 * DAY ? state.daily.streak : 0;
  $('#pfDailyInfo').textContent = `Серия: ${streak} дн. · ${dailyReady() ? 'можно забрать!' : 'следующий через ' + dailyLeftText()}`;
  renderDaily();

  // Лучший дроп
  const best = st.bestWin && (!st.biggestDrop || st.bestWin.price >= st.biggestDrop.price) ? st.bestWin : st.biggestDrop;
  const bestItem = best && ITEM_BY_ID[best.id];
  $('#pfBest').innerHTML = bestItem ? `
      <div class="pf-best-title">Лучший дроп</div>
      ${best.chance ? `<span class="pf-best-chance">${ICON.chev} ${best.chance.toFixed(2)}%</span>` : '<span class="pf-best-chance">Кейс</span>'}
      ${itemArt(bestItem, { uid: artUid++ })}
      <div class="pf-best-name"><small>${bestItem.weapon}</small><b>${bestItem.skin}</b></div>
      <div class="pf-best-price">${fmt(bestItem.price)} <span class="coin"></span></div>`
    : `<div class="pf-best-title">Лучший дроп</div><div class="muted" style="margin-top:34px;position:relative">Сделайте первый апгрейд<br>или откройте кейс</div>`;

  // Табы
  $$('#pfTabs button').forEach(b => b.classList.toggle('active', b.dataset.tab === pfTab));
  ['history', 'stats', 'fair'].forEach(t => $('#tab-' + t).classList.toggle('hidden', t !== pfTab));

  // Статистика
  const winrate = st.upgrades ? (st.wins / st.upgrades * 100).toFixed(1) + '%' : '—';
  const stats = [
    ['Общее состояние', fmtShort(state.balance + inventoryValue())],
    ['Апгрейдов', st.upgrades], ['Процент побед', winrate],
    ['Побед / поражений', `${st.wins} / ${st.losses}`], ['Открыто кейсов', st.casesOpened],
    ['Куплено / продано', `${st.itemsBought} / ${st.itemsSold}`],
    ['Лучший апгрейд', st.bestWin ? `${fmtShort(st.bestWin.price)} <small class="muted">(${st.bestWin.chance.toFixed(1)}%)</small>` : '—'],
    ['Лучший дроп из кейса', st.biggestDrop ? fmtShort(st.biggestDrop.price) : '—']
  ];
  $('#stats').innerHTML = stats.map(([l, v]) => `<div class="stat"><div class="s-label">${l}</div><div class="s-value">${v}</div></div>`).join('');

  // История
  $('#history').innerHTML = state.history.length ? state.history.map(h => {
    let cls = '', text = '';
    switch (h.type) {
      case 'upgrade':
        cls = h.win ? 'win' : 'lose';
        text = `${h.win ? '✅' : '❌'} Апгрейд ${fmt(h.total)} → <b>${iname(h.target)}</b> (${h.chance.toFixed(1)}%, ролл ${h.roll}, nonce ${h.nonce})${h.consolation ? ' · утешение: ' + iname(h.consolation) : ''}`;
        break;
      case 'case':
        cls = h.got >= h.cost ? 'win' : 'lose';
        text = `📦 ${CASE_BY_ID[h.caseId]?.name || 'Кейс'}: ${h.items.map(iname).join(', ')} (${fmt(h.got)} из ${fmt(h.cost)})`;
        break;
      case 'buy': text = `🛒 Куплено ${iname(h.item)} за ${fmt(h.price)}`; break;
      case 'sell': text = `💰 Продано ${h.count} шт. за ${fmt(h.amount)}`; break;
      case 'daily': cls = 'win'; text = `🎁 Ежедневный бонус ${fmt(h.amount)}`; break;
      case 'credit': text = `🆘 Пособие ${fmt(h.amount)}`; break;
      case 'promo': cls = 'win'; text = `🎟️ Купон ${esc(h.code)}: +${fmt(h.amount)}`; break;
      default: text = h.type;
    }
    return `<div class="h-row ${cls}"><span>${text}</span><span class="h-time">${timeAgo(h.t)}</span></div>`;
  }).join('') : '<div class="empty">Пока пусто — сделайте первый апгрейд!</div>';

  // Честная игра
  const f = state.fair;
  $('#fairHash').textContent = f.serverHash;
  $('#fairNonce').textContent = f.nonce;
  if (document.activeElement !== $('#fairClient')) $('#fairClient').value = f.clientSeed;
  $('#fairRevealed').innerHTML = f.revealed.map(r => `<div class="fr">
      <div>Серверный сид: <code>${esc(r.serverSeed)}</code></div>
      <div>Хеш: <code>${esc(r.serverHash)}</code></div>
      <div>Клиентский сид: <code>${esc(r.clientSeed)}</code> · ставок: ${r.nonces}</div>
      <button class="btn btn-dark" style="height:30px;font-size:12px;margin-top:6px" data-fill='${esc(JSON.stringify({ s: r.serverSeed, c: r.clientSeed }))}'>Подставить в проверку</button>
    </div>`).join('');

  const canCredit = creditAvailable();
  $('#creditBtn').disabled = !canCredit.ok;
  $('#creditInfo').textContent = canCredit.msg;
}

$('#pfTabs').addEventListener('click', e => {
  const b = e.target.closest('button[data-tab]');
  if (!b) return;
  pfTab = b.dataset.tab;
  renderProfile();
});
$('#pfHistoryLink').addEventListener('click', e => {
  e.preventDefault();
  pfTab = 'history';
  renderProfile();
  $('.pf-tabs-wrap').scrollIntoView({ behavior: 'smooth' });
});
$('#pfDailyBtn').addEventListener('click', claimDaily);

$('#promoBtn').addEventListener('click', applyPromo);
$('#promoInput').addEventListener('keydown', e => { if (e.key === 'Enter') applyPromo(); });
function applyPromo() {
  const code = $('#promoInput').value.trim().toUpperCase();
  if (!code) return;
  const amount = CONFIG.promoCodes[code];
  if (!amount) { toast('Такого купона нет', true); return; }
  if (state.usedPromos.includes(code)) { toast('Этот купон уже использован', true); return; }
  state.usedPromos.push(code);
  changeBalance(amount);
  pushHistory({ type: 'promo', code, amount });
  save(); sfx.coin();
  $('#promoInput').value = '';
  openModal(`<h2>Купон активирован!</h2><div class="m-big">+ ${fmt(amount)} <span class="coin coin-lg"></span></div>
    <div class="m-actions"><button class="btn btn-yellow" data-close>Супер</button></div>`, 'gold');
  renderProfile();
}

$('#pfEditName').addEventListener('click', () => {
  openModal(`<h2>Сменить ник</h2>
    <input type="text" id="mNick" maxlength="20" value="${esc(state.nickname || '')}" style="width:100%;margin:14px 0">
    <div class="m-actions"><button class="btn btn-yellow" id="mNickSave">Сохранить</button><button class="btn btn-dark" data-close>Отмена</button></div>`);
  const input = $('#mNick');
  input.focus(); input.select();
  const saveNick = () => {
    state.nickname = input.value.trim().slice(0, 20) || 'Игрок';
    save(); closeModal(); renderProfile();
  };
  $('#mNickSave').addEventListener('click', saveNick);
  input.addEventListener('keydown', e => { if (e.key === 'Enter') saveNick(); });
});

function creditAvailable() {
  const worth = state.balance + inventoryValue();
  if (worth >= CONFIG.demoCreditMinBalance) return { ok: false, msg: `Пособие доступно, когда баланс + инвентарь меньше ${fmt(CONFIG.demoCreditMinBalance)}.` };
  const left = CONFIG.demoCreditCooldownMs - (Date.now() - state.lastCredit);
  if (left > 0) return { ok: false, msg: `Следующее пособие через ${Math.ceil(left / 60000)} мин.` };
  return { ok: true, msg: `Вы получите ${fmt(CONFIG.demoCredit)} монет.` };
}

$('#creditBtn').addEventListener('click', () => {
  if (!creditAvailable().ok) return;
  state.lastCredit = Date.now();
  changeBalance(CONFIG.demoCredit);
  pushHistory({ type: 'credit', amount: CONFIG.demoCredit });
  save(); sfx.coin();
  toast(`Начислено ${fmt(CONFIG.demoCredit)}`);
  renderProfile();
});

$('#pfReset').addEventListener('click', () => {
  openModal(`<h2>Сбросить прогресс?</h2><p class="muted">Баланс, инвентарь, история и статистика будут удалены.</p>
    <div class="m-actions"><button class="btn btn-yellow" id="mReset">Сбросить</button><button class="btn btn-dark" data-close>Отмена</button></div>`);
  $('#mReset').addEventListener('click', async () => {
    resetAll();
    await ensureSeeds();
    up.stake = []; up.targetId = null; cs.caseId = null;
    resetWheelLook();
    closeModal();
    renderHeader();
    renderPage();
    toast('Прогресс сброшен');
  });
});

$('#fairClient').addEventListener('change', e => {
  const v = e.target.value.trim().slice(0, 64);
  if (!v) { e.target.value = state.fair.clientSeed; return; }
  state.fair.clientSeed = v;
  save();
  toast('Клиентский сид обновлён');
});
$('#fairRotate').addEventListener('click', async () => {
  await rotateSeed();
  toast('Сид раскрыт, новый сгенерирован');
  renderProfile();
});
$('#fairRevealed').addEventListener('click', e => {
  const b = e.target.closest('[data-fill]');
  if (!b) return;
  const { s, c } = JSON.parse(b.dataset.fill);
  $('#vServer').value = s; $('#vClient').value = c;
});
$('#vBtn').addEventListener('click', async () => {
  const s = $('#vServer').value.trim(), c = $('#vClient').value.trim();
  const n = Number($('#vNonce').value), ch = Number($('#vChance').value);
  if (!s || !c || !Number.isInteger(n) || n < 0) { $('#vResult').textContent = 'Заполните сиды и nonce.'; return; }
  const hash = await sha256Hex(betString(s, c, n));
  const serverHash = await sha256Hex(s);
  const roll = hashToInt(hash);
  let html = `Хеш сида: <code>${serverHash}</code><br>Хеш ставки: <code>${hash}</code><br>Ролл: <b>${roll}</b> / 10000`;
  if (ch > 0) html += ` → ${roll < Math.round(ch * 100) ? '<b style="color:var(--green)">ПОБЕДА</b>' : '<b style="color:var(--red)">ПРОИГРЫШ</b>'} при шансе ${ch}%`;
  html += `<br>Для кейса: случайное число ${(hashToInt(hash, 1e8) / 1e8).toFixed(8)}`;
  $('#vResult').innerHTML = html;
});

// ══════════════════════════════════════════════════════════════════════════
// ЛЕНТА СЛЕВА («живые» апгрейды ботов + ваши)
// ══════════════════════════════════════════════════════════════════════════
const recent = [];
function liveCardHTML({ item, chance, isCase }, top = false) {
  return `<div class="live-card${top ? ' top' : ''}" style="${rarityStyle(item)}" title="${item.weapon} | ${item.skin} — ${fmt(item.price)}">
    <span class="lc-chance${isCase ? ' case' : ''}">${isCase ? 'КЕЙС' : ICON.chev + ' ' + chance.toFixed(2) + '%'}</span>
    ${itemArt(item, { uid: artUid++, bg: false })}
    <div class="lc-name">${item.skin}</div>
    <div class="lc-weapon">${item.weapon}</div>
  </div>`;
}

function addFeed(item, { chance = 50, isCase = false } = {}) {
  const entry = { item, chance, isCase, t: Date.now() };
  recent.unshift(entry);
  if (recent.length > 30) recent.pop();
  const feed = $('#feed');
  feed.insertAdjacentHTML('afterbegin', liveCardHTML(entry));
  while (feed.children.length > 16) feed.lastElementChild.remove();
  const top = recent.reduce((a, b) => (b.item.price > a.item.price ? b : a));
  $('#liveTop').innerHTML = liveCardHTML(top, true);
}

function botFeedOnce() {
  const weights = ITEMS.map(i => 1 / Math.pow(i.price, 0.45));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total, item = ITEMS[0];
  for (let i = 0; i < ITEMS.length; i++) { r -= weights[i]; if (r <= 0) { item = ITEMS[i]; break; } }
  const isCase = Math.random() < 0.3;
  addFeed(item, { isCase, chance: rand(18, 88) });
  if (isCase) counters.cases++;
}
function botTick() {
  botFeedOnce();
  setTimeout(botTick, 1800 + Math.random() * 3500);
}

// ══════════════════════════════════════════════════════════════════════════
// СТАРТ
// ══════════════════════════════════════════════════════════════════════════
async function init() {
  installImageFallback(id => ITEM_BY_ID[id]);
  load();
  await ensureSeeds();
  setSoundEnabled(state.settings.sound);
  shownBalance = state.balance;
  counters.upgrades += state.stats.upgrades;
  buildTicks();
  initMarketFilters();
  renderHeader();
  renderCounters();
  route();
  for (let i = 0; i < 14; i++) botFeedOnce();
  setTimeout(botTick, 2000);
  window.addEventListener('resize', () => { if (currentPage === 'cases' && !cs.spinning && cs.caseId) fitRouletteCards(); });

  if (!state.history.length && !state.inventory.length && state.stats.upgrades === 0) {
    openModal(`<h2>Добро пожаловать в UPGRADER SIM!</h2>
      <div class="m-text">
        <p>🎯 <b>Upgrade</b> — поставьте скины или баланс, выберите предмет дороже и жмите «Улучшить».</p>
        <p>📦 <b>Кейсы</b> — открывайте ящики и выбивайте скины.</p>
        <p>🛒 <b>Рынок</b> — покупайте скины для апгрейда.</p>
        <p>🎁 Каждый день забирайте бонус. Купон <b>GITHUB</b> в профиле даст ещё 10 000.</p>
      </div>
      <div class="m-big">${fmt(state.balance)} <span class="coin coin-lg"></span></div>
      <div class="muted">стартовый баланс · все монеты виртуальные</div>
      <div class="m-actions"><button class="btn btn-yellow btn-tall" data-close style="min-width:200px">Начать</button></div>`, 'gold');
  }
}

init();
