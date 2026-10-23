// Интерфейс игры: роутинг, апгрейд, кейсы, рынок, инвентарь, профиль.

import { ITEMS, ITEM_BY_ID, RARITIES, RARITY_BY_ID, CATEGORIES, CASES, CASE_BY_ID, CONFIG } from './data.js';
import {
  chanceFor, multiplierFor, resolveUpgrade, pickFromPool, hashToInt,
  consolationPrize, caseExpectedValue, fmt, fmtShort
} from './economy.js';
import { sha256Hex, betString } from './fair.js';
import { itemArt, categoryIcon } from './art.js';
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
let artUid = 0;

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
  box.innerHTML = html;
  $('#modal').classList.remove('hidden');
}
function closeModal() { $('#modal').classList.add('hidden'); }
$('#modal').addEventListener('click', e => {
  if (e.target.id === 'modal' || e.target.closest('[data-close]')) closeModal();
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

function rarityStyle(item) {
  return `--rc:${RARITY_BY_ID[item.rarity].color}`;
}

/** HTML карточки предмета. */
function cardHTML(item, { uid = '', cls = '', chance = null, actions = '', check = false, extra = '' } = {}) {
  return `<div class="card ${cls}" style="${rarityStyle(item)}" data-id="${item.id}" ${uid !== '' ? `data-uid="${uid}"` : ''}>
    ${check ? '<span class="c-check"></span>' : ''}
    ${chance !== null ? `<span class="c-chance" style="color:${chanceColor(chance)}">${chance.toFixed(1)}%</span>` : ''}
    ${extra}
    ${itemArt(item, { uid: artUid++ })}
    <div class="c-weapon" title="${item.weapon}">${item.weapon}</div>
    <div class="c-skin" title="${item.skin}">${item.skin}</div>
    <div class="c-price">◆ ${fmt(item.price)}</div>
    ${actions ? `<div class="c-actions">${actions}</div>` : ''}
  </div>`;
}

function chanceColor(c) {
  if (c >= 60) return '#34d399';
  if (c >= 30) return '#facc15';
  if (c >= 15) return '#fb923c';
  return '#f87171';
}

// ── Баланс / шапка ────────────────────────────────────────────────────────
let shownBalance = 0;
function renderHeader(bump = false) {
  const target = state.balance;
  const el = $('#balance');
  const from = shownBalance;
  shownBalance = target;
  if (from === target) { el.textContent = fmt(target); }
  else {
    const t0 = performance.now(), dur = 450;
    const step = now => {
      const k = Math.min(1, (now - t0) / dur);
      el.textContent = fmt(from + (target - from) * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  if (bump) {
    const b = $('.balance');
    b.classList.remove('bump'); void b.offsetWidth; b.classList.add('bump');
  }
  $('#invCount').textContent = state.inventory.length;
  $('#soundBtn').textContent = state.settings.sound ? '🔊' : '🔇';
  renderDaily();
}

function changeBalance(delta) {
  state.balance = Math.max(0, Math.round(state.balance + delta));
  renderHeader(delta > 0);
}

// ── Ежедневный бонус ──────────────────────────────────────────────────────
const DAY = 24 * 3600 * 1000;
function dailyReady() { return Date.now() - state.daily.last >= DAY; }
function dailyAmount() {
  const streak = Date.now() - state.daily.last < 2 * DAY ? state.daily.streak + 1 : 1;
  return { streak, amount: CONFIG.dailyBonus + Math.min(streak - 1, 6) * CONFIG.dailyStreakBonus };
}
function renderDaily() {
  const btn = $('#dailyBtn');
  if (dailyReady()) {
    btn.classList.add('ready');
    $('#dailyLabel').textContent = 'Забрать бонус';
  } else {
    btn.classList.remove('ready');
    const left = DAY - (Date.now() - state.daily.last);
    const h = Math.floor(left / 3600000), m = Math.floor((left % 3600000) / 60000);
    $('#dailyLabel').textContent = `${h}ч ${String(m).padStart(2, '0')}м`;
  }
}
$('#dailyBtn').addEventListener('click', () => {
  if (!dailyReady()) { toast('Бонус уже получен. Возвращайтесь позже!', true); return; }
  const { streak, amount } = dailyAmount();
  state.daily = { last: Date.now(), streak };
  changeBalance(amount);
  pushHistory({ type: 'daily', amount });
  save();
  sfx.coin();
  openModal(`<h2>🎁 Ежедневный бонус</h2>
    <p class="muted">Серия: ${streak} ${streak > 1 ? 'дня подряд' : 'день'} (до +${fmt(6 * CONFIG.dailyStreakBonus)} за серию)</p>
    <div style="font-size:40px;font-weight:900;color:var(--gold);margin:14px 0">+ ◆ ${fmt(amount)}</div>
    <div class="m-actions"><button class="btn btn-primary" data-close>Отлично</button></div>`, 'win');
});
setInterval(renderDaily, 30000);

$('#soundBtn').addEventListener('click', () => {
  state.settings.sound = !state.settings.sound;
  setSoundEnabled(state.settings.sound);
  save(); renderHeader(); sfx.click();
});

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
const up = { stake: [], targetId: null, spinning: false, rotation: 0 };
const MAX_STAKE = 6;

function stakeItemsValue() {
  return up.stake.reduce((s, uid) => s + (ITEM_BY_ID[invItem(uid)?.id]?.price || 0), 0);
}
function stakeBalanceValue() {
  const v = Math.floor(Number($('#stakeBalance').value) || 0);
  return Math.max(0, v);
}
function stakeTotal() { return stakeItemsValue() + stakeBalanceValue(); }

function sectorPath(chance) {
  const cx = 100, cy = 100, r = 86;
  const a = Math.min(chance, 99.99) / 100 * Math.PI * 2;
  const x = cx + r * Math.sin(a), y = cy - r * Math.cos(a);
  const large = chance > 50 ? 1 : 0;
  return chance <= 0 ? '' : `M ${cx} ${cy - r} A ${r} ${r} 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)}`;
}

function buildTicks() {
  const g = $('#wheelTicks');
  let s = '';
  for (let i = 0; i < 40; i++) {
    const a = i / 40 * Math.PI * 2;
    const r1 = 74, r2 = i % 5 === 0 ? 98 : 96;
    s += `<line x1="${100 + r1 * Math.sin(a)}" y1="${100 - r1 * Math.cos(a)}" x2="${100 + r2 * Math.sin(a)}" y2="${100 - r2 * Math.cos(a)}"/>`;
  }
  g.innerHTML = s;
  g.classList.add('wheel-ticks');
}

function currentChance() {
  const t = ITEM_BY_ID[up.targetId];
  const s = stakeTotal();
  if (!t || s <= 0 || t.price <= s) return 0;
  return chanceFor(s, t.price);
}

function renderUpgrade() {
  // убираем из ставки проданные предметы
  up.stake = up.stake.filter(uid => invItem(uid));
  if (stakeBalanceValue() > state.balance) $('#stakeBalance').value = state.balance;

  renderStakeSlot();
  renderTargetSlot();
  renderWheelInfo();
  renderUpInventory();
  renderUpTargets();
}

function renderStakeSlot() {
  const body = $('#stakeBody');
  const items = up.stake.map(uid => ({ uid, item: ITEM_BY_ID[invItem(uid).id] }));
  if (!items.length) {
    const bal = stakeBalanceValue();
    body.innerHTML = `<div class="slot-empty">${categoryIcon('rifle')}
      <div>${bal > 0 ? `Ставка с баланса: <b style="color:var(--gold)">◆ ${fmt(bal)}</b>` : 'Выберите предметы из инвентаря ниже<br>или поставьте монеты с баланса'}</div></div>`;
  } else if (items.length === 1) {
    const { item } = items[0];
    const r = RARITY_BY_ID[item.rarity];
    body.innerHTML = `<div class="slot-big">${itemArt(item, { uid: artUid++ })}
      <div class="sb-weapon">${item.weapon}</div><div class="sb-skin">${item.skin}</div>
      <span class="sb-rarity" style="background:${r.color}22;color:${r.color}">${r.name}</span></div>`;
  } else {
    body.innerHTML = `<div class="stake-multi">${items.map(({ uid, item }) => cardHTML(item, { uid, cls: 'clickable' })).join('')}</div>`;
    body.querySelectorAll('.card').forEach(c => c.addEventListener('click', () => toggleStake(Number(c.dataset.uid))));
  }
  $('#stakeItemsValue').textContent = fmt(stakeItemsValue());
  $('#stakeTotal').textContent = fmt(stakeTotal());
}

function renderTargetSlot() {
  const body = $('#targetBody');
  const t = ITEM_BY_ID[up.targetId];
  if (!t) {
    body.innerHTML = `<div class="slot-empty">${categoryIcon('knife')}<div>Выберите предмет, который хотите получить</div></div>`;
    $('#targetValue').textContent = '0';
    return;
  }
  const r = RARITY_BY_ID[t.rarity];
  body.innerHTML = `<div class="slot-big">${itemArt(t, { uid: artUid++ })}
    <div class="sb-weapon">${t.weapon}</div><div class="sb-skin">${t.skin}</div>
    <span class="sb-rarity" style="background:${r.color}22;color:${r.color}">${r.name}</span></div>`;
  $('#targetValue').textContent = fmt(t.price);
}

function renderWheelInfo() {
  const chance = currentChance();
  const t = ITEM_BY_ID[up.targetId];
  const s = stakeTotal();
  $('#wheelSector').setAttribute('d', sectorPath(chance));
  $('#chanceValue').textContent = chance ? chance.toFixed(2).replace('.', ',') + '%' : '—';
  $('#chanceValue').style.color = chance ? chanceColor(chance) : '';
  $('#multValue').textContent = t && s > 0 ? 'x' + multiplierFor(s, t.price).toFixed(2) : 'x0.00';

  const btn = $('#upgradeBtn');
  let reason = '';
  if (s <= 0) reason = 'Выберите ставку';
  else if (!t) reason = 'Выберите цель';
  else if (t.price <= s) reason = 'Цель должна быть дороже ставки';
  else if (stakeBalanceValue() > state.balance) reason = 'Не хватает баланса';
  btn.disabled = !!reason || up.spinning;
  btn.textContent = up.spinning ? 'Крутим…' : (reason || 'Апгрейд');
}

function renderUpInventory() {
  const q = $('#upInvSearch').value.trim().toLowerCase();
  const grid = $('#upInvGrid');
  const list = state.inventory
    .map(e => ({ e, item: ITEM_BY_ID[e.id] }))
    .filter(({ item }) => !q || (item.weapon + ' ' + item.skin).toLowerCase().includes(q))
    .sort((a, b) => b.item.price - a.item.price);
  if (!list.length) {
    grid.innerHTML = `<div class="empty" style="grid-column:1/-1;padding:30px 10px">
      ${state.inventory.length ? 'Ничего не найдено' : 'Инвентарь пуст — купите предмет на <a href="#market">рынке</a>, откройте <a href="#cases">кейс</a> или ставьте монеты с баланса.'}</div>`;
    return;
  }
  grid.innerHTML = list.map(({ e, item }) => cardHTML(item, {
    uid: e.uid, cls: 'clickable' + (up.stake.includes(e.uid) ? ' selected' : '')
  })).join('');
}

function renderUpTargets() {
  const q = $('#upTargetSearch').value.trim().toLowerCase();
  const sort = $('#upTargetSort').value;
  const s = stakeTotal();
  let list = ITEMS.filter(i => !q || (i.weapon + ' ' + i.skin).toLowerCase().includes(q));
  if (s > 0) list = list.filter(i => i.price > s);
  list.sort((a, b) => sort === 'asc' ? a.price - b.price : b.price - a.price);
  if (!list.length) {
    $('#upTargetGrid').innerHTML = `<div class="empty" style="grid-column:1/-1;padding:30px 10px">Нет предметов дороже ставки 🤯</div>`;
    return;
  }
  $('#upTargetGrid').innerHTML = list.map(i => cardHTML(i, {
    cls: 'clickable' + (i.id === up.targetId ? ' selected' : ''),
    chance: s > 0 ? chanceFor(s, i.price) : null
  })).join('');
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
  // если цель стала дешевле ставки — сбрасываем
  const t = ITEM_BY_ID[up.targetId];
  if (t && t.price <= stakeTotal()) up.targetId = null;
  resetWheelLook();
  renderUpgrade();
}

function resetWheelLook() {
  $('#wheel').classList.remove('win', 'lose');
  $('#wheelResult').textContent = '';
  $('#wheelResult').className = 'wheel-result';
}

$('#upInvGrid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (c) toggleStake(Number(c.dataset.uid));
});
$('#upTargetGrid').addEventListener('click', e => {
  const c = e.target.closest('.card');
  if (!c || up.spinning) return;
  up.targetId = up.targetId === c.dataset.id ? null : c.dataset.id;
  sfx.click();
  resetWheelLook();
  renderTargetSlot(); renderWheelInfo(); renderUpTargets();
});
$('#upInvSearch').addEventListener('input', renderUpInventory);
$('#upTargetSearch').addEventListener('input', renderUpTargets);
$('#upTargetSort').addEventListener('change', renderUpTargets);
$('#stakeBalance').addEventListener('input', () => {
  if (up.spinning) return;
  if (stakeBalanceValue() > state.balance) $('#stakeBalance').value = state.balance;
  afterStakeChange();
});
$('#fastSpin').addEventListener('change', e => { state.settings.fast = e.target.checked; save(); });

$('#multButtons').addEventListener('click', e => {
  const b = e.target.closest('button[data-mult]');
  if (!b || up.spinning) return;
  const s = stakeTotal();
  if (s <= 0) { toast('Сначала выберите ставку', true); return; }
  const want = s * Number(b.dataset.mult);
  const candidates = ITEMS.filter(i => i.price > s);
  if (!candidates.length) { toast('Нет предметов дороже ставки', true); return; }
  const best = candidates.reduce((a, c) => Math.abs(c.price - want) < Math.abs(a.price - want) ? c : a);
  up.targetId = best.id;
  sfx.click();
  resetWheelLook();
  renderTargetSlot(); renderWheelInfo(); renderUpTargets();
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
  resetWheelLook();
  renderWheelInfo();
  $$('#page-upgrade .picker').forEach(p => p.style.pointerEvents = 'none');

  // Анимация стрелки
  const fast = state.settings.fast;
  const dur = fast ? 1200 : 5200;
  const pointer = $('#pointer');
  const base = up.rotation - (up.rotation % 360);
  const finalRot = base + 360 * (fast ? 2 : 6) + res.angle;
  pointer.style.transition = `transform ${dur}ms cubic-bezier(.12,.7,.15,1)`;
  pointer.style.transform = `rotate(${finalRot}deg)`;
  up.rotation = finalRot;
  sfx.open();
  tickDuring(dur);
  await sleep(dur + 150);

  // Итог
  state.stats.upgrades++;
  state.stats.totalStaked += total;
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
    $('#wheel').classList.add('win');
    $('#wheelResult').textContent = 'ПОБЕДА!';
    $('#wheelResult').className = 'wheel-result win';
    chance < 20 ? sfx.bigWin() : sfx.win();
  } else {
    state.stats.losses++;
    up.stake = [];
    $('#wheel').classList.add('lose');
    $('#wheelResult').textContent = 'Не повезло';
    $('#wheelResult').className = 'wheel-result lose';
    sfx.lose();
    consolation = consolationPrize(total);
    if (consolation) addItem(consolation.id);
    if (balPart > state.balance) $('#stakeBalance').value = 0;
  }
  pushHistory({
    type: 'upgrade', win: res.win, target: target.id, stake: stakeIds, stakeBal: balPart,
    total, chance, roll: res.roll, nonce, consolation: consolation?.id || null
  });
  addFeed(target, res.win ? 'x' + multiplierFor(total, target.price).toFixed(1) : null, !res.win);
  save();

  up.spinning = false;
  $$('#page-upgrade .picker').forEach(p => p.style.pointerEvents = '');
  renderHeader();
  renderUpgrade();
  showUpgradeResult(res, target, total, chance, consolation, nonce);
}

function tickDuring(dur) {
  // щелчки, замедляющиеся вместе со стрелкой
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
    openModal(`<h2 style="color:var(--green2)">Апгрейд успешен!</h2>
      <div class="muted">Шанс был ${chance.toFixed(2)}% · ставка ◆ ${fmt(total)}</div>
      <div class="m-art">${itemArt(target, { uid: artUid++ })}</div>
      <div style="font-weight:800;font-size:18px">${target.weapon} | ${target.skin}</div>
      <div style="color:${r.color};font-size:13px">${r.name}</div>
      <div style="font-size:26px;font-weight:900;color:var(--gold);margin-top:8px">◆ ${fmt(target.price)}</div>
      <div class="m-actions">
        <button class="btn btn-primary" data-close>Апгрейдить дальше</button>
        <button class="btn btn-ghost" id="mSell">Продать</button>
      </div>
      <div class="muted" style="margin-top:12px">Ролл: ${res.roll} / 10000 · nonce ${nonce}</div>`, 'win');
    $('#mSell').addEventListener('click', () => {
      const uid = up.stake[0];
      if (uid && invItem(uid)) sellItems([uid]);
      closeModal();
    });
  } else {
    openModal(`<h2 style="color:#fca5a5">Не повезло…</h2>
      <div class="muted">Шанс был ${chance.toFixed(2)}% · ролл ${res.roll} (нужно меньше ${Math.round(chance * 100)})</div>
      <div class="m-art" style="opacity:.35;filter:grayscale(1)">${itemArt(target, { uid: artUid++ })}</div>
      ${consolation ? `<div style="margin-top:6px">Утешительный приз: <b>${consolation.weapon} | ${consolation.skin}</b> <span style="color:var(--gold)">◆ ${fmt(consolation.price)}</span></div>` : ''}
      <div class="m-actions"><button class="btn btn-primary" data-close>Ещё раз</button></div>`, 'lose');
  }
}

// ══════════════════════════════════════════════════════════════════════════
// КЕЙСЫ
// ══════════════════════════════════════════════════════════════════════════
const cs = { caseId: null, qty: 1, spinning: false, lastDrops: [] };

function caseBoxHTML(c) {
  return `<div class="case-box"><div class="body"></div><div class="lid"></div><div class="lock"></div><div class="stripe"></div></div>`;
}

function renderCases() {
  if (cs.caseId) { renderCaseOpen(); return; }
  $('#caseOpen').classList.add('hidden');
  $('#caseList').classList.remove('hidden');
  $('#caseList').innerHTML = CASES.map(c => `
    <div class="case-card" data-case="${c.id}" style="--cc:${c.color}">
      ${caseBoxHTML(c)}
      <h3>${c.name}</h3>
      <p>${c.desc}</p>
      <span class="case-price">◆ ${fmt(c.price)}</span>
    </div>`).join('');
}

$('#caseList').addEventListener('click', e => {
  const c = e.target.closest('.case-card');
  if (!c) return;
  cs.caseId = c.dataset.case;
  sfx.click();
  renderCases();
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
  btn.textContent = cs.spinning ? 'Открываем…' : `Открыть за ◆ ${fmt(cost)}`;
  btn.disabled = cs.spinning || state.balance < cost;
}

function renderCaseOpen() {
  const c = CASE_BY_ID[cs.caseId];
  $('#caseList').classList.add('hidden');
  $('#caseOpen').classList.remove('hidden');
  $('#caseTitle').innerHTML = `${c.name} <span class="case-price" style="font-size:15px;margin-left:8px">◆ ${fmt(c.price)}</span>`;
  const total = c.pool.reduce((s, [, w]) => s + w, 0);
  $('#caseContents').innerHTML = c.pool
    .map(([id, w]) => ({ item: ITEM_BY_ID[id], p: w / total * 100 }))
    .sort((a, b) => b.item.price - a.item.price)
    .map(({ item, p }) => cardHTML(item, { extra: `<span class="odds">${p < 1 ? p.toFixed(2) : p.toFixed(1)}%</span>` }))
    .join('');
  updateCaseButton();
  if (!cs.spinning) buildIdleRoulettes();
}

function randomPoolItem(c) { return pickFromPool(c.pool); }

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
      card.querySelector('svg').style.height = Math.max(34, h - 80) + 'px';
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

  // Результаты — через provably fair
  const drops = [];
  for (let i = 0; i < qty; i++) {
    const nonce = state.fair.nonce++;
    const hash = await sha256Hex(betString(state.fair.serverSeed, state.fair.clientSeed, nonce));
    const r = hashToInt(hash, 1e8) / 1e8;
    drops.push({ item: pickFromPool(c.pool, () => r), nonce });
  }
  save();

  // Строим ленты
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

  // В инвентарь
  const entries = drops.map(d => addItem(d.item.id));
  state.stats.casesOpened += qty;
  state.stats.totalStaked += cost;
  const got = drops.reduce((s, d) => s + d.item.price, 0);
  state.stats.totalWon += got;
  for (const d of drops) {
    if (!state.stats.biggestDrop || d.item.price > state.stats.biggestDrop.price)
      state.stats.biggestDrop = { id: d.item.id, price: d.item.price };
    addFeed(d.item, 'КЕЙС');
  }
  pushHistory({ type: 'case', caseId: c.id, items: drops.map(d => d.item.id), cost, got });
  save();
  cs.spinning = false;
  cs.lastDrops = entries.map(e => e.uid);
  got >= cost * 1.5 ? sfx.bigWin() : got >= cost ? sfx.win() : sfx.coin();
  renderHeader();
  updateCaseButton();
  showCaseDrops(drops.map((d, i) => ({ item: d.item, uid: entries[i].uid })), cost);
}

function showCaseDrops(list, cost) {
  const box = $('#caseDrops');
  const total = list.reduce((s, x) => s + x.item.price, 0);
  box.innerHTML = `<div class="grid">${list.map(x => cardHTML(x.item, { uid: x.uid })).join('')}</div>
    <div class="drops-actions">
      <span style="align-self:center;color:${total >= cost ? 'var(--green2)' : 'var(--muted)'}">
        Выпало на ◆ ${fmt(total)} (${total >= cost ? '+' : ''}${fmt(total - cost)})</span>
      <button class="btn btn-ghost" id="dropsSell">Продать за ◆ ${fmt(total)}</button>
      <button class="btn btn-primary" id="dropsUpgrade">В апгрейд</button>
      <button class="btn btn-ghost" id="dropsKeep">Оставить</button>
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
    actions: `<button class="btn btn-primary" data-buy="${i.id}" ${i.price > state.balance ? 'disabled' : ''}>Купить</button>`
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
  toast(`Продано ${uids.length} шт. за ◆ ${fmt(total)}`);
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
  $('#invSellSelected').textContent = `Продать выбранное (${inv.selected.size}) · ◆ ${fmt(selVal)}`;
  $('#invSellSelected').disabled = !inv.selected.size;

  $('#invGrid').innerHTML = list.map(({ e, item }) => cardHTML(item, {
    uid: e.uid, check: true,
    cls: (inv.selectMode ? 'clickable' : '') + (inv.selected.has(e.uid) ? ' selected' : ''),
    actions: inv.selectMode ? '' : `<button class="btn btn-primary" data-up="${e.uid}">Апгрейд</button>
      <button class="btn btn-ghost" data-sell="${e.uid}">Продать</button>`
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
  openModal(`<h2>Продать всё?</h2>
    <p class="muted">${state.inventory.length} предметов на сумму</p>
    <div style="font-size:30px;font-weight:900;color:var(--gold)">◆ ${fmt(total)}</div>
    <div class="m-actions"><button class="btn btn-danger" id="mConfirmSell">Продать</button>
    <button class="btn btn-ghost" data-close>Отмена</button></div>`);
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

function renderProfile() {
  const st = state.stats;
  const winrate = st.upgrades ? (st.wins / st.upgrades * 100).toFixed(1) + '%' : '—';
  const worth = state.balance + inventoryValue();
  const stats = [
    ['Общее состояние', '◆ ' + fmtShort(worth)],
    ['Баланс', '◆ ' + fmtShort(state.balance)],
    ['Апгрейдов', st.upgrades],
    ['Процент побед', winrate],
    ['Побед / поражений', `${st.wins} / ${st.losses}`],
    ['Открыто кейсов', st.casesOpened],
    ['Лучший апгрейд', st.bestWin ? `◆ ${fmtShort(st.bestWin.price)} <small class="muted">(${st.bestWin.chance.toFixed(1)}%)</small>` : '—'],
    ['Лучший дроп', st.biggestDrop ? '◆ ' + fmtShort(st.biggestDrop.price) : '—']
  ];
  $('#stats').innerHTML = stats.map(([l, v]) => `<div class="stat"><div class="s-label">${l}</div><div class="s-value">${v}</div></div>`).join('');

  $('#history').innerHTML = state.history.length ? state.history.map(h => {
    let cls = '', text = '';
    switch (h.type) {
      case 'upgrade':
        cls = h.win ? 'win' : 'lose';
        text = `${h.win ? '✅' : '❌'} Апгрейд ◆ ${fmt(h.total)} → <b>${iname(h.target)}</b> (${h.chance.toFixed(1)}%, ролл ${h.roll}, nonce ${h.nonce})${h.consolation ? ' · утешение: ' + iname(h.consolation) : ''}`;
        break;
      case 'case':
        cls = h.got >= h.cost ? 'win' : 'lose';
        text = `📦 ${CASE_BY_ID[h.caseId]?.name || 'Кейс'}: ${h.items.map(iname).join(', ')} (◆ ${fmt(h.got)} из ◆ ${fmt(h.cost)})`;
        break;
      case 'buy': text = `🛒 Куплено ${iname(h.item)} за ◆ ${fmt(h.price)}`; break;
      case 'sell': text = `💰 Продано ${h.count} шт. за ◆ ${fmt(h.amount)}`; break;
      case 'daily': cls = 'win'; text = `🎁 Ежедневный бонус ◆ ${fmt(h.amount)}`; break;
      case 'credit': text = `🆘 Пособие ◆ ${fmt(h.amount)}`; break;
      default: text = h.type;
    }
    return `<div class="h-row ${cls}"><span>${text}</span><span class="h-time">${timeAgo(h.t)}</span></div>`;
  }).join('') : '<div class="muted">Пока пусто — сделайте первый апгрейд!</div>';

  const f = state.fair;
  $('#fairHash').textContent = f.serverHash;
  $('#fairNonce').textContent = f.nonce;
  if (document.activeElement !== $('#fairClient')) $('#fairClient').value = f.clientSeed;
  $('#fairRevealed').innerHTML = f.revealed.map(r => `<div class="fr">
      <div>Серверный сид: <code>${esc(r.serverSeed)}</code></div>
      <div>Хеш: <code>${esc(r.serverHash)}</code></div>
      <div>Клиентский сид: <code>${esc(r.clientSeed)}</code> · ставок: ${r.nonces}</div>
      <button class="btn btn-ghost" style="padding:4px 10px;font-size:12px" data-fill='${esc(JSON.stringify({ s: r.serverSeed, c: r.clientSeed }))}'>Подставить в проверку</button>
    </div>`).join('');

  const canCredit = creditAvailable();
  $('#creditBtn').disabled = !canCredit.ok;
  $('#creditInfo').textContent = canCredit.msg;
}

function creditAvailable() {
  const worth = state.balance + inventoryValue();
  if (worth >= CONFIG.demoCreditMinBalance) return { ok: false, msg: `Доступно, когда общее состояние меньше ◆ ${fmt(CONFIG.demoCreditMinBalance)}.` };
  const left = CONFIG.demoCreditCooldownMs - (Date.now() - state.lastCredit);
  if (left > 0) return { ok: false, msg: `Следующее пособие через ${Math.ceil(left / 60000)} мин.` };
  return { ok: true, msg: `Вы получите ◆ ${fmt(CONFIG.demoCredit)}.` };
}

$('#creditBtn').addEventListener('click', () => {
  if (!creditAvailable().ok) return;
  state.lastCredit = Date.now();
  changeBalance(CONFIG.demoCredit);
  pushHistory({ type: 'credit', amount: CONFIG.demoCredit });
  save(); sfx.coin();
  toast(`Начислено ◆ ${fmt(CONFIG.demoCredit)}`);
  renderProfile();
});

$('#resetBtn').addEventListener('click', () => {
  openModal(`<h2>Сбросить прогресс?</h2><p class="muted">Баланс, инвентарь, история и статистика будут удалены.</p>
    <div class="m-actions"><button class="btn btn-danger" id="mReset">Сбросить</button><button class="btn btn-ghost" data-close>Отмена</button></div>`);
  $('#mReset').addEventListener('click', async () => {
    resetAll();
    await ensureSeeds();
    up.stake = []; up.targetId = null; cs.caseId = null;
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
  if (ch > 0) html += ` → ${roll < Math.round(ch * 100) ? '<b style="color:var(--green2)">ПОБЕДА</b>' : '<b style="color:var(--red)">ПРОИГРЫШ</b>'} при шансе ${ch}%`;
  html += `<br>Для кейса: случайное число ${(hashToInt(hash, 1e8) / 1e8).toFixed(8)}`;
  $('#vResult').innerHTML = html;
});

// ══════════════════════════════════════════════════════════════════════════
// ЛЕНТА «ЖИВЫХ» ДРОПОВ (боты для атмосферы)
// ══════════════════════════════════════════════════════════════════════════
function addFeed(item, tag, lost = false) {
  if (lost) return;
  const feed = $('#feed');
  const d = document.createElement('div');
  d.className = 'feed-item';
  d.style.cssText = rarityStyle(item);
  d.title = `${item.weapon} | ${item.skin} — ◆ ${fmt(item.price)}`;
  d.innerHTML = `${itemArt(item, { uid: artUid++, bg: false })}
    <span class="fi-tag ${tag === 'КЕЙС' ? 'case' : ''}">${tag}</span>
    <span class="fi-name">${item.weapon} | ${item.skin}</span>`;
  feed.prepend(d);
  while (feed.children.length > 30) feed.lastChild.remove();
}

function botFeedOnce() {
  // дешёвые предметы встречаются чаще
  const weights = ITEMS.map(i => 1 / Math.sqrt(i.price));
  const total = weights.reduce((a, b) => a + b, 0);
  let r = Math.random() * total, item = ITEMS[0];
  for (let i = 0; i < ITEMS.length; i++) { r -= weights[i]; if (r <= 0) { item = ITEMS[i]; break; } }
  const isCase = Math.random() < 0.35;
  const tag = isCase ? 'КЕЙС' : 'x' + (1.2 + Math.random() * Math.random() * 12).toFixed(1);
  addFeed(item, tag);
}
function botTick() {
  botFeedOnce();
  setTimeout(botTick, 1500 + Math.random() * 3500);
}

// ══════════════════════════════════════════════════════════════════════════
// СТАРТ
// ══════════════════════════════════════════════════════════════════════════
async function init() {
  load();
  await ensureSeeds();
  setSoundEnabled(state.settings.sound);
  $('#fastSpin').checked = !!state.settings.fast;
  shownBalance = state.balance;
  buildTicks();
  initMarketFilters();
  renderHeader();
  route();
  for (let i = 0; i < 12; i++) botFeedOnce();
  setTimeout(botTick, 2000);
  window.addEventListener('resize', () => { if (currentPage === 'cases' && !cs.spinning && cs.caseId) fitRouletteCards(); });

  // первый запуск — приветствие
  if (!state.history.length && !state.inventory.length && state.stats.upgrades === 0) {
    openModal(`<h2>Добро пожаловать в UPGRADER SIM!</h2>
      <p class="muted" style="text-align:left">
        🎯 <b>Апгрейд</b> — поставьте предмет или монеты, выберите цель дороже и крутите колесо.
        Чем дороже цель, тем меньше шанс.<br><br>
        📦 <b>Кейсы</b> — открывайте ящики и выбивайте скины.<br><br>
        🛒 <b>Рынок</b> — покупайте предметы для апгрейда.<br><br>
        🎁 Каждый день забирайте бонус. Все монеты виртуальные.
      </p>
      <div style="font-size:24px;font-weight:900;color:var(--gold);margin:10px 0">Стартовый баланс: ◆ ${fmt(state.balance)}</div>
      <div class="m-actions"><button class="btn btn-primary" data-close>Начать</button></div>`, 'win');
  }
}

init();
