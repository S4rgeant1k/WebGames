// Процедурные 3D-модели комплектующих и расположение слотов в корпусе (Three.js).

import * as THREE from 'three';
import { PART } from './parts.js';

// ── Размеры (метры) ─────────────────────────────────────────────────────────
export const CASE = { D: 0.46, H: 0.47, W: 0.21 };
export const DESK_Y = 0.76;
export const CASE_POS = new THREE.Vector3(0, DESK_Y + CASE.H / 2 + 0.012, 0);
const ZT = -CASE.W / 2 + 0.008;      // поверхность поддона
const ZS = ZT + 0.009;               // лицевая сторона платы (на стойках)
const XR = -CASE.D / 2 + 0.03;       // задний край платы
const YT = CASE.H / 2 - 0.035;       // верхний край платы

const BOARD = { ATX: [0.244, 0.305], mATX: [0.244, 0.244], ITX: [0.17, 0.17] };
const LAYOUT = {
  ATX: { socket: [0.105, 0.075], ram: [0.168, 0.0105, 0.0965], pcie: 0.165, m2: [[0.10, 0.135], [0.10, 0.245]], m24: [0.237, 0.12], cpu8: [0.02, 0.012] },
  mATX: { socket: [0.105, 0.075], ram: [0.168, 0.0105, 0.0965], pcie: 0.165, m2: [[0.10, 0.135]], m24: [0.237, 0.12], cpu8: [0.02, 0.012] },
  ITX: { socket: [0.075, 0.065], ram: [0.128, 0.011, 0.075], pcie: 0.15, m2: [[0.06, 0.12]], m24: [0.164, 0.035], cpu8: [0.015, 0.01] }
};
const FAN_POS = { fanF0: [CASE.D / 2 - 0.03, 0.12, 0], fanF1: [CASE.D / 2 - 0.03, -0.01, 0], fanR0: [-CASE.D / 2 + 0.022, 0.135, 0] };
const DRIVE_POS = { hdd0: [0.13, -0.2, 0], sata0: [0.13, -0.163, 0.0], sata1: [0.13, -0.145, 0.0] };
const PSU_POS = [-CASE.D / 2 + 0.09, -CASE.H / 2 + 0.056, -0.01];

// ── Помощники ───────────────────────────────────────────────────────────────
const texCache = new Map();
export function labelTex(text, { w = 256, h = 64, bg = '#111', fg = '#fff', font = 'bold 30px Arial, sans-serif', border = null } = {}) {
  const key = [text, w, h, bg, fg, font, border].join('|');
  if (texCache.has(key)) return texCache.get(key);
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const x = c.getContext('2d');
  if (bg) { x.fillStyle = bg; x.fillRect(0, 0, w, h); }
  if (border) { x.strokeStyle = border; x.lineWidth = 4; x.strokeRect(2, 2, w - 4, h - 4); }
  x.fillStyle = fg; x.font = font; x.textAlign = 'center'; x.textBaseline = 'middle';
  const lines = String(text).split('\n');
  lines.forEach((l, i) => x.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * (parseInt(font.match(/(\d+)px/)?.[1] || 30) * 1.15)));
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  texCache.set(key, t);
  return t;
}

export function patternTex(kind) {
  if (texCache.has(kind)) return texCache.get(kind);
  const c = document.createElement('canvas');
  const x = c.getContext('2d');
  if (kind === 'mesh') {
    c.width = c.height = 64;
    x.fillStyle = '#0c0c0c'; x.fillRect(0, 0, 64, 64);
    x.fillStyle = '#2a2a2a';
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.beginPath(); x.arc(i * 8 + 4 + (j % 2) * 4, j * 8 + 4, 2.4, 0, 7); x.fill(); }
  } else if (kind === 'wood') {
    c.width = 512; c.height = 512;
    x.fillStyle = '#5b3d27'; x.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 160; i++) {
      x.strokeStyle = `rgba(${30 + Math.random() * 40},${18 + Math.random() * 20},10,${0.15 + Math.random() * 0.25})`;
      x.lineWidth = 1 + Math.random() * 3;
      x.beginPath(); const y = Math.random() * 512; x.moveTo(0, y);
      x.bezierCurveTo(170, y + Math.random() * 20 - 10, 340, y + Math.random() * 20 - 10, 512, y + Math.random() * 10 - 5); x.stroke();
    }
  } else if (kind === 'floor') {
    c.width = c.height = 512;
    x.fillStyle = '#3a3f46'; x.fillRect(0, 0, 512, 512);
    for (let i = 0; i < 4; i++) for (let j = 0; j < 4; j++) {
      x.fillStyle = (i + j) % 2 ? '#353a41' : '#3d434b';
      x.fillRect(i * 128 + 1, j * 128 + 1, 126, 126);
    }
  } else if (kind === 'pcb') {
    c.width = c.height = 256;
    x.fillStyle = '#000'; x.fillRect(0, 0, 256, 256);
    x.strokeStyle = 'rgba(255,255,255,0.10)'; x.lineWidth = 1;
    for (let i = 0; i < 70; i++) {
      x.beginPath(); let px = Math.random() * 256, py = Math.random() * 256; x.moveTo(px, py);
      for (let k = 0; k < 3; k++) { if (Math.random() < 0.5) px += Math.random() * 60 - 30; else py += Math.random() * 60 - 30; x.lineTo(px, py); }
      x.stroke();
    }
  } else if (kind === 'peg') {
    c.width = c.height = 128;
    x.fillStyle = '#c9b48f'; x.fillRect(0, 0, 128, 128);
    x.fillStyle = '#6d5f47';
    for (let i = 0; i < 8; i++) for (let j = 0; j < 8; j++) { x.beginPath(); x.arc(i * 16 + 8, j * 16 + 8, 2, 0, 7); x.fill(); }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  texCache.set(kind, t);
  return t;
}

export const std = (color, metal = 0.2, rough = 0.6, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough, ...extra });
export function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
export function cyl(r, h, material, seg = 24) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), material);
  m.castShadow = true;
  return m;
}
export function plane(w, h, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  m.position.set(x, y, z);
  return m;
}
export const shortName = p => p.name.replace(/^(AMD|Intel|NVIDIA|ASUS|MSI|Gigabyte|GIGABYTE|Sapphire|EVGA|ASRock|Palit|PowerColor)\s+/i, '');

// Списки для анимации
// Списки для анимации (заполняются при постройке моделей; см. collectAnim)
export const anim = { spinners: [], rgbMats: [], glowMats: [] };
let spinners = anim.spinners, rgbMats = anim.rgbMats, glowMats = anim.glowMats;
/** Построить модели, собрав анимируемые элементы в отдельные списки. */
export function collectAnim(fn) {
  const prev = [spinners, rgbMats, glowMats];
  const out = { spinners: [], rgbMats: [], glowMats: [] };
  spinners = out.spinners; rgbMats = out.rgbMats; glowMats = out.glowMats;
  try { out.result = fn(); } finally { [spinners, rgbMats, glowMats] = prev; }
  return out;
}

function makeFan(size, frameColor = 0x1a1a1a, bladeColor = 0x222222, rgb = false, speed = 14) {
  const g = new THREE.Group();
  const t = 0.025, bar = size * 0.07;
  const fm = std(frameColor, 0.2, 0.6);
  for (const [x, y, w, h] of [[0, size / 2 - bar / 2, size, bar], [0, -size / 2 + bar / 2, size, bar], [size / 2 - bar / 2, 0, bar, size], [-size / 2 + bar / 2, 0, bar, size]]) {
    g.add(box(w, h, t, fm, x, y, 0));
  }
  const ringMat = rgb ? std(0xffffff, 0, 0.4, { emissive: 0x000000 }) : fm;
  if (rgb) rgbMats.push(ringMat);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(size * 0.455, size * 0.022, 6, 40), ringMat);
  g.add(ring);
  const rotor = new THREE.Group();
  const hub = cyl(size * 0.17, t * 0.8, std(bladeColor, 0.1, 0.5));
  hub.rotation.x = Math.PI / 2;
  rotor.add(hub);
  const bm = std(bladeColor, 0.05, 0.45, rgb ? { transparent: true, opacity: 0.85 } : {});
  const n = 7;
  for (let i = 0; i < n; i++) {
    const a = i / n * Math.PI * 2;
    const blade = new THREE.Mesh(new THREE.BoxGeometry(size * 0.3, size * 0.13, 0.0015), bm);
    blade.position.set(Math.cos(a) * size * 0.28, Math.sin(a) * size * 0.28, 0);
    blade.rotation.set(0.45, 0, a, 'ZYX');
    rotor.add(blade);
  }
  g.add(rotor);
  spinners.push({ obj: rotor, speed });
  return g;
}

// ── Модели деталей ──────────────────────────────────────────────────────────
function buildCase(p) {
  const g = new THREE.Group();
  const { D, H, W } = CASE;
  const white = p.color > 0x888888;
  const body = std(p.color, 0.35, 0.5);
  const inner = std(white ? 0xe6e6e6 : 0x141414, 0.3, 0.6);
  g.add(box(D, H, 0.004, inner, 0, 0, -W / 2));                    // поддон
  g.add(box(D, 0.006, W, body, 0, H / 2, 0));                      // верх
  g.add(box(D, 0.006, W, body, 0, -H / 2, 0));                     // низ
  // фронт
  const front = box(0.012, H, W + 0.006, p.frontMesh ? std(0xffffff, 0.2, 0.8, { map: (() => { const t = patternTex('mesh').clone(); t.needsUpdate = true; t.repeat.set(6, 13); return t; })() }) : body, D / 2 + 0.006, 0, 0);
  g.add(front);
  // задняя стенка с отверстием под вентилятор
  const back = std(white ? 0xd8d8d8 : 0x0f0f0f, 0.4, 0.55);
  g.add(box(0.004, H * 0.28, W, back, -D / 2, -H * 0.36, 0));
  g.add(box(0.004, 0.05, W, back, -D / 2, H / 2 - 0.025, 0));
  g.add(box(0.004, H * 0.34, 0.03, back, -D / 2, 0.04, W / 2 - 0.015));
  g.add(box(0.004, H * 0.34, 0.03, back, -D / 2, 0.04, -W / 2 + 0.015));
  // рамка открытой стороны
  for (const [w, h, x, y] of [[D, 0.012, 0, H / 2 - 0.006], [D, 0.012, 0, -H / 2 + 0.006], [0.012, H, D / 2 - 0.006, 0], [0.012, H, -D / 2 + 0.006, 0]]) {
    g.add(box(w, h, 0.01, body, x, y, W / 2 - 0.005));
  }
  // корзина накопителей
  const cage = std(white ? 0xcfcfcf : 0x202020, 0.5, 0.5);
  g.add(box(0.15, 0.004, W - 0.02, cage, 0.13, -0.135, 0));
  g.add(box(0.004, 0.09, W - 0.02, cage, 0.055, -0.18, 0));
  // кожух БП
  g.add(box(D * 0.42, 0.004, W - 0.01, std(white ? 0xe0e0e0 : 0x181818, 0.3, 0.6), -D / 2 + D * 0.21, -H / 2 + 0.105, 0));
  // ножки
  for (const [x, z] of [[-D / 2 + 0.04, -W / 2 + 0.03], [D / 2 - 0.04, -W / 2 + 0.03], [-D / 2 + 0.04, W / 2 - 0.03], [D / 2 - 0.04, W / 2 - 0.03]]) {
    const f = cyl(0.014, 0.012, std(0x111111, 0, 0.9));
    f.position.set(x, -H / 2 - 0.006, z);
    g.add(f);
  }
  // кнопка питания
  const btnMat = std(0x222222, 0.6, 0.3, { emissive: 0x000000 });
  glowMats.push({ mat: btnMat, color: 0x2a8cff, intensity: 2 });
  const btn = cyl(0.008, 0.004, btnMat);
  btn.position.set(D / 2 - 0.05, H / 2 + 0.004, 0.03);
  g.add(btn);
  if (p.stripe) {
    const sm = std(0xffffff, 0, 0.4, { emissive: 0x000000 });
    rgbMats.push(sm);
    g.add(box(0.004, H * 0.8, 0.008, sm, D / 2 + 0.013, 0, W / 2 - 0.02));
  }
  if (p.wood) {
    const wm = std(0x9a6a3e, 0, 0.7);
    for (let i = 0; i < 9; i++) g.add(box(0.006, H * 0.9, 0.012, wm, D / 2 + 0.014, 0, -W / 2 + 0.02 + i * (W - 0.04) / 8));
  }
  // логотип на фронте
  const logo = plane(0.06, 0.015, new THREE.MeshBasicMaterial({ map: labelTex(p.name.split(' ')[0].toUpperCase(), { bg: null, fg: white ? '#333' : '#bbb', w: 256, h: 64 }), transparent: true }));
  logo.position.set(D / 2 + 0.0125, -H / 2 + 0.04, 0); logo.rotation.y = Math.PI / 2;
  g.add(logo);
  return g;
}

function buildBoard(p) {
  const g = new THREE.Group();
  const [w, h] = BOARD[p.form];
  const L = LAYOUT[p.form];
  const pcbMat = std(p.color, 0.1, 0.55, { emissiveMap: patternTex('pcb'), emissive: 0x333333 });
  g.add(box(w, h, 0.002, pcbMat, w / 2, -h / 2, -0.001));
  const metal = std(p.accent || 0x3b3f45, 0.85, 0.35);
  const dark = std(0x111111, 0.2, 0.6);
  // сокет
  const [su, sv] = L.socket;
  g.add(box(0.05, 0.05, 0.004, std(0xb8b8b8, 0.6, 0.4), su, -sv, 0.002));
  g.add(box(0.042, 0.042, 0.0045, std(0x2a2a2a, 0.2, 0.5), su, -sv, 0.0025));
  // радиаторы VRM
  g.add(box(Math.min(0.11, w * 0.45), 0.02, 0.022, metal, su, -0.018, 0.011));
  g.add(box(0.02, 0.09, 0.022, metal, 0.03, -sv - 0.005, 0.011));
  // I/O кожух
  g.add(box(0.022, Math.min(0.15, h * 0.5), 0.035, std(0x2b2e33, 0.7, 0.4), 0.011, -Math.min(0.15, h * 0.5) / 2 - 0.01, 0.0175));
  // слоты ОЗУ
  const [ru, rdu, rv] = L.ram;
  for (let i = 0; i < p.ramSlots; i++) g.add(box(0.0055, 0.138, 0.007, i % 2 ? std(0x555555) : dark, ru + i * rdu, -rv, 0.0035));
  // PCIe
  g.add(box(0.089, 0.0065, 0.009, dark, 0.06, -L.pcie, 0.0045));
  if (p.form === 'ATX') {
    for (const v of [0.205, 0.265]) g.add(box(0.089, 0.0065, 0.008, dark, 0.06, -v, 0.004));
  }
  // M.2 разъёмы
  for (const [mu, mv] of L.m2) g.add(box(0.006, 0.024, 0.004, dark, mu - 0.042, -mv, 0.002));
  // чипсет
  g.add(box(0.04, 0.04, 0.008, metal, w - 0.05, -h + 0.06, 0.004));
  const chipLbl = plane(0.036, 0.012, new THREE.MeshBasicMaterial({ map: labelTex(p.name.split(' ').slice(-2).join(' '), { bg: '#2b2e33', fg: '#e6e6e6', font: 'bold 26px Arial' }) }));
  chipLbl.position.set(w - 0.05, -h + 0.06, 0.0085);
  g.add(chipLbl);
  // 24-pin и 8-pin
  g.add(box(0.009, 0.052, 0.012, dark, L.m24[0], -L.m24[1], 0.006));
  g.add(box(0.02, 0.009, 0.011, dark, L.cpu8[0], -L.cpu8[1], 0.0055));
  if (p.glow) {
    const gm = std(0x222222, 0.2, 0.4, { emissive: 0x000000 });
    glowMats.push({ mat: gm, color: p.glow, intensity: 2.2 });
    g.add(box(0.004, Math.min(0.12, h * 0.45), 0.004, gm, 0.026, -Math.min(0.15, h * 0.5) / 2 - 0.01, 0.037));
    g.add(box(0.03, 0.004, 0.004, gm, w - 0.05, -h + 0.035, 0.009));
  }
  // конденсаторы
  const cap = std(0x222222, 0.6, 0.35);
  for (let i = 0; i < 6; i++) {
    const c = cyl(0.003, 0.008, cap, 10);
    c.rotation.x = Math.PI / 2;
    c.position.set(su - 0.035 + i * 0.012, -sv + 0.035, 0.004);
    g.add(c);
  }
  return g;
}

function buildCPU(p) {
  const g = new THREE.Group();
  g.add(box(0.04, 0.04, 0.0015, std(0x1f5c2e, 0.2, 0.6), 0, 0, 0.0055));
  const amd = p.name.startsWith('AMD');
  const lbl = new THREE.MeshStandardMaterial({ map: labelTex(amd ? 'AMD\nRYZEN' : 'intel\nCORE', { bg: '#c7c9cc', fg: '#3a3a3a', font: 'bold 44px Arial', w: 256, h: 256 }), metalness: 0.7, roughness: 0.35 });
  g.add(box(0.034, 0.034, 0.003, lbl, 0, 0, 0.0075));
  return g;
}

function buildCooler(p, socketPos) {
  const g = new THREE.Group();
  if (p.kind === 'box') {
    const big = p.tdpMax > 65;
    const base = cyl(big ? 0.05 : 0.046, big ? 0.04 : 0.03, std(0x9aa0a6, 0.8, 0.4), 32);
    base.rotation.x = Math.PI / 2; base.position.z = big ? 0.028 : 0.024;
    g.add(base);
    const fan = makeFan(big ? 0.09 : 0.08, 0x111111, 0x1a1a1a, !!p.rgb, 18);
    fan.position.z = big ? 0.052 : 0.044;
    g.add(fan);
    return g;
  }
  if (p.rad) {
    // помпа на процессоре
    const pm = std(p.color, 0.4, 0.4);
    const pump = cyl(0.03, 0.028, pm, 32);
    pump.rotation.x = Math.PI / 2; pump.position.z = 0.02;
    g.add(pump);
    const capMat = p.rgb ? std(0xffffff, 0, 0.3, { emissive: 0x000000 }) : std(0x333333, 0.6, 0.3);
    if (p.rgb) rgbMats.push(capMat);
    const cap = cyl(0.024, 0.003, capMat, 32);
    cap.rotation.x = Math.PI / 2; cap.position.z = 0.035;
    g.add(cap);
    // радиатор под крышкой корпуса (координаты корпуса → относительно сокета)
    const len = p.rad === 360 ? 0.395 : 0.275;
    const sp = socketPos || new THREE.Vector3();
    const rc = new THREE.Vector3(0.02, CASE.H / 2 - 0.04, 0.0).sub(sp);
    const radMat = std(p.color === 0xeeeeee ? 0xe8e8e8 : 0x151515, 0.6, 0.45);
    g.add(box(len, 0.027, 0.124, radMat, rc.x, rc.y + 0.01, rc.z));
    const n = p.rad / 120;
    for (let i = 0; i < n; i++) {
      const f = makeFan(0.118, p.color === 0xeeeeee ? 0xf0f0f0 : 0x151515, p.color === 0xeeeeee ? 0xdddddd : 0x202020, !!p.rgb, 12);
      f.rotation.x = Math.PI / 2;
      f.position.set(rc.x - len / 2 + 0.06 + i * 0.12 + (len - n * 0.12) / 2 - 0.0, rc.y - 0.017, rc.z);
      f.scale.set(1, 1, 0.9);
      g.add(f);
    }
    // шланги
    const tubeMat = std(0x111111, 0.1, 0.7);
    for (const dz of [-0.012, 0.012]) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.025, 0.0, 0.025 + dz * 0),
        new THREE.Vector3(0.06, 0.02 + dz, 0.05),
        new THREE.Vector3(rc.x + len / 2 - 0.05, rc.y - 0.06, rc.z + 0.07 + dz),
        new THREE.Vector3(rc.x + len / 2 - 0.02, rc.y, rc.z + 0.05 + dz)
      ]);
      const t = new THREE.Mesh(new THREE.TubeGeometry(curve, 24, 0.0055, 8, false), tubeMat);
      t.castShadow = true;
      g.add(t);
    }
    return g;
  }
  const towers = p.kind === 'tower2' ? [-0.035, 0.04] : [0];
  const finMat = std(p.color === 0x8b6a52 ? 0xc8c8c8 : 0xb9bec4, 0.85, 0.3);
  const finGeo = new THREE.BoxGeometry(0.048, 0.125, 0.0009);
  const pipeMat = std(0xc58b4f, 0.9, 0.25);
  for (const tx of towers) {
    for (let i = 0; i < 26; i++) {
      const f = new THREE.Mesh(finGeo, finMat);
      f.position.set(tx, 0, 0.035 + i * 0.0045);
      f.castShadow = true;
      g.add(f);
    }
    g.add(box(0.05, 0.127, 0.006, std(p.color, 0.5, 0.4), tx, 0, 0.035 + 26 * 0.0045 + 0.002));
    for (let k = 0; k < 4; k++) {
      const pipe = cyl(0.003, 0.13, pipeMat, 8);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(tx + (k % 2 ? 0.01 : -0.01), -0.03 + k * 0.02, 0.07);
      g.add(pipe);
    }
  }
  g.add(box(0.04, 0.04, 0.01, std(0xc58b4f, 0.9, 0.3), 0, 0, 0.012));
  const noctua = p.color === 0x8b6a52;
  const fanX = towers[towers.length - 1] + 0.038;
  const fan = makeFan(0.12, noctua ? 0x6b4a36 : p.color, noctua ? 0xc9a07e : 0x202020, false, 12);
  fan.rotation.y = Math.PI / 2;
  fan.position.set(fanX, 0, 0.095);
  g.add(fan);
  if (towers.length > 1) {
    const fan2 = makeFan(0.12, 0x6b4a36, 0xc9a07e, false, 12);
    fan2.rotation.y = Math.PI / 2;
    fan2.position.set(0.002, 0, 0.095);
    g.add(fan2);
  }
  return g;
}

function buildRAM(p) {
  const g = new THREE.Group();
  g.add(box(0.0013, 0.133, 0.03, std(0x1f5c2e, 0.2, 0.6), 0, 0, 0.022));
  const spread = std(p.color, 0.6, 0.35);
  g.add(box(0.0065, 0.132, p.rgb ? 0.03 : 0.032, spread, 0, 0, 0.024));
  if (p.rgb) {
    const m = std(0xffffff, 0, 0.3, { emissive: 0x000000, transparent: true, opacity: 0.9 });
    rgbMats.push(m);
    g.add(box(0.006, 0.13, 0.006, m, 0, 0, 0.042));
  }
  const lbl = plane(0.09, 0.016, new THREE.MeshBasicMaterial({ map: labelTex(shortName(p).split(' ').slice(0, 2).join(' ').toUpperCase(), { bg: null, fg: '#ddd', font: 'bold 30px Arial' }), transparent: true }));
  lbl.rotation.y = Math.PI / 2; lbl.rotation.z = Math.PI / 2;
  lbl.position.set(0.0034, 0, 0.026);
  g.add(lbl);
  return g;
}

function buildGPU(p) {
  const g = new THREE.Group();
  const L = p.len, thick = p.slots * 0.02, Hc = 0.112;
  g.add(box(L - 0.01, 0.0016, Hc, std(0x14331f, 0.2, 0.6), L / 2 - 0.012, -0.001, Hc / 2));
  g.add(box(L - 0.012, 0.002, Hc - 0.004, std(0x2a2c30, 0.7, 0.4), L / 2 - 0.012, 0.001, Hc / 2));
  const shroud = std(p.color, 0.5, 0.45);
  g.add(box(L - 0.008, thick - 0.004, Hc + 0.004, shroud, L / 2 - 0.012, -thick / 2 - 0.002, Hc / 2 + 0.002));
  // светящаяся надпись на торце
  const nm = shortName(p).replace(/^GeForce\s+/i, '');
  const logoMat = new THREE.MeshStandardMaterial({ map: labelTex(nm.toUpperCase(), { bg: '#151515', fg: '#f2f2f2', font: 'bold 34px Arial', w: 512, h: 64 }), emissive: 0x000000, emissiveMap: labelTex(nm.toUpperCase(), { bg: '#000', fg: '#fff', font: 'bold 34px Arial', w: 512, h: 64 }) });
  glowMats.push({ mat: logoMat, color: 0xffffff, intensity: 1.2 });
  const logo = plane(Math.min(0.2, L * 0.6), Math.max(0.012, thick * 0.4), logoMat, L * 0.42, -thick / 2 - 0.002, Hc + 0.0045);
  g.add(logo);
  if (p.accent) {
    const am = std(p.accent, 0.3, 0.4, { emissive: 0x000000 });
    glowMats.push({ mat: am, color: p.accent, intensity: 1.5 });
    g.add(box(L * 0.25, 0.004, 0.003, am, L * 0.82, -thick / 2, Hc + 0.004));
  }
  // вентиляторы снизу
  const fs = Math.min(0.092, (L - 0.03) / p.fans * 0.96);
  for (let i = 0; i < p.fans; i++) {
    const fan = makeFan(fs, p.color, 0x1c1c1c, false, 16);
    fan.rotation.x = Math.PI / 2;
    fan.position.set(0.012 + (L - 0.03) * (i + 0.5) / p.fans, -thick - 0.0015, Hc / 2);
    fan.scale.set(1, 1, 0.5);
    g.add(fan);
  }
  // планка и разъём питания
  g.add(box(0.0015, thick + 0.006, 0.12, std(0xb0b0b0, 0.9, 0.3), -0.016, -thick / 2, 0.06));
  if (p.pins) g.add(box(0.02, 0.008, 0.006, std(0x111111), L * 0.72, -0.006, Hc + 0.004));
  return g;
}

function buildStorage(p) {
  const g = new THREE.Group();
  if (p.kind === 'm2') {
    g.add(box(0.08, 0.022, 0.0012, std(0x1b3d26, 0.2, 0.6), 0, 0, 0.0006));
    g.add(box(0.06, 0.018, 0.002, new THREE.MeshStandardMaterial({ map: labelTex(shortName(p).split(' (')[0], { bg: '#0f0f0f', fg: '#ddd', font: 'bold 26px Arial' }) }), 0.005, 0, 0.002));
    return g;
  }
  if (p.kind === 'hdd') {
    g.add(box(0.147, 0.026, 0.102, std(0x8c9096, 0.8, 0.35)));
    const lbl = plane(0.1, 0.07, new THREE.MeshStandardMaterial({ map: labelTex(shortName(p).split(' (')[0].replace(' ', '\n'), { bg: '#e8e8e8', fg: '#222', font: 'bold 30px Arial', w: 256, h: 180 }) }));
    lbl.rotation.x = -Math.PI / 2; lbl.position.y = 0.0131;
    g.add(lbl);
    return g;
  }
  g.add(box(0.1, 0.007, 0.07, std(0x1d1d1f, 0.5, 0.4)));
  const lbl = plane(0.085, 0.055, new THREE.MeshStandardMaterial({ map: labelTex(shortName(p).split(' (')[0].replace(' ', '\n'), { bg: '#2b2f36', fg: '#fff', font: 'bold 30px Arial', w: 256, h: 170 }) }));
  lbl.rotation.x = -Math.PI / 2; lbl.position.y = 0.0036;
  g.add(lbl);
  return g;
}

function buildPSU(p) {
  const g = new THREE.Group();
  g.add(box(0.15, 0.086, 0.14, std(0x1a1a1a, 0.5, 0.45)));
  const lbl = plane(0.11, 0.05, new THREE.MeshStandardMaterial({ map: labelTex(`${p.watt} W\n${p.name.split(' ')[0]}`, { bg: '#262626', fg: '#f0f0f0', font: 'bold 40px Arial', w: 256, h: 128, border: '#555' }) }));
  lbl.position.z = 0.0705;
  g.add(lbl);
  g.add(box(0.004, 0.05, 0.1, std(0x0a0a0a), 0.076, 0, 0));
  return g;
}

function buildFan(p) {
  const f = makeFan(0.12, p.color || 0x151515, p.color ? 0xc9a07e : p.rgb ? 0xdddddd : 0x2a2a2a, p.rgb, 10);
  f.rotation.y = Math.PI / 2;
  return f;
}

// ── Позиции слотов ──────────────────────────────────────────────────────────
function boardForm(b) { return PART[b.slots.mb?.pid]?.form || 'ATX'; }
const bp = (form, u, v) => new THREE.Vector3(XR + u, YT - v, ZS);

/** Позиция и размер «призрака» слота в координатах корпуса. */
export function slotBox(slot, b, item) {
  const form = boardForm(b);
  const L = LAYOUT[form];
  const p = item ? PART[item.pid] : null;
  if (slot === 'case') return { pos: new THREE.Vector3(0, 0, 0), size: new THREE.Vector3(CASE.D, CASE.H, CASE.W) };
  if (slot === 'mb') {
    const f = p?.form || 'ATX';
    const [w, h] = BOARD[f];
    return { pos: new THREE.Vector3(XR + w / 2, YT - h / 2, ZS + 0.003), size: new THREE.Vector3(w, h, 0.008) };
  }
  if (slot === 'cpu') return { pos: bp(form, ...L.socket).add(new THREE.Vector3(0, 0, 0.006)), size: new THREE.Vector3(0.045, 0.045, 0.01) };
  if (slot === 'cooler') return { pos: bp(form, ...L.socket).add(new THREE.Vector3(0, 0, 0.06)), size: new THREE.Vector3(0.09, 0.12, 0.12) };
  if (slot.startsWith('ram')) {
    const i = Number(slot[3]);
    return { pos: bp(form, L.ram[0] + i * L.ram[1], L.ram[2]).add(new THREE.Vector3(0, 0, 0.02)), size: new THREE.Vector3(0.008, 0.135, 0.036) };
  }
  if (slot === 'gpu') {
    const len = p?.len || 0.24, th = (p?.slots || 2) * 0.02;
    return { pos: new THREE.Vector3(-CASE.D / 2 + 0.03 + len / 2 - 0.012, YT - L.pcie - th / 2, ZS + 0.06), size: new THREE.Vector3(len, th, 0.115) };
  }
  if (slot.startsWith('m2')) {
    const [mu, mv] = L.m2[Number(slot[3])] || L.m2[0];
    return { pos: bp(form, mu, mv).add(new THREE.Vector3(0, 0, 0.003)), size: new THREE.Vector3(0.08, 0.024, 0.006) };
  }
  if (DRIVE_POS[slot]) {
    const s = slot === 'hdd0' ? [0.147, 0.026, 0.102] : [0.1, 0.008, 0.07];
    return { pos: new THREE.Vector3(...DRIVE_POS[slot]), size: new THREE.Vector3(...s) };
  }
  if (slot === 'psu') return { pos: new THREE.Vector3(...PSU_POS), size: new THREE.Vector3(0.15, 0.086, 0.14) };
  if (FAN_POS[slot]) return { pos: new THREE.Vector3(...FAN_POS[slot]), size: new THREE.Vector3(0.026, 0.12, 0.12) };
  return null;
}

export function placePart(slot, b, item) {
  const p = PART[item.pid];
  const form = boardForm(b);
  const L = LAYOUT[form];
  let g;
  switch (p.type) {
    case 'case': g = buildCase(p); break;
    case 'mb': g = buildBoard(p); g.position.set(XR, YT, ZS); break;
    case 'cpu': g = buildCPU(p); g.position.copy(bp(form, ...L.socket)); break;
    case 'cooler': { const sp = bp(form, ...L.socket); g = buildCooler(p, sp); g.position.copy(sp); break; }
    case 'ram': { g = buildRAM(p); const i = Number(slot[3]); g.position.copy(bp(form, L.ram[0] + i * L.ram[1], L.ram[2])); break; }
    case 'gpu': g = buildGPU(p); g.position.set(-CASE.D / 2 + 0.03, YT - L.pcie + 0.004, ZS + 0.004); break;
    case 'storage':
      g = buildStorage(p);
      if (p.kind === 'm2') { const [mu, mv] = L.m2[Number(slot[3])] || L.m2[0]; g.position.copy(bp(form, mu, mv)); }
      else g.position.set(...DRIVE_POS[slot]);
      break;
    case 'psu': g = buildPSU(p); g.position.set(...PSU_POS); break;
    case 'fan': g = buildFan(p); g.position.set(...FAN_POS[slot]); break;
  }
  return g;
}

/** Точки подключения кабелей (координаты корпуса). */
export function cablePoint(id, b) {
  const form = boardForm(b);
  const L = LAYOUT[form];
  if (id === 'mb24') return bp(form, L.m24[0] + 0.006, L.m24[1]).add(new THREE.Vector3(0, 0, 0.008));
  if (id === 'cpu8') return bp(form, L.cpu8[0], L.cpu8[1] - 0.006).add(new THREE.Vector3(0, 0, 0.008));
  if (id === 'gpu') {
    const p = PART[b.slots.gpu?.pid];
    return new THREE.Vector3(-CASE.D / 2 + 0.03 + (p?.len || 0.24) * 0.72, YT - L.pcie - 0.002, ZS + 0.124);
  }
  const d = DRIVE_POS[id];
  if (d) return new THREE.Vector3(d[0] - (id === 'hdd0' ? 0.075 : 0.052), d[1], d[2] + 0.02);
  return new THREE.Vector3();
}
const PSU_OUT = new THREE.Vector3(PSU_POS[0] + 0.08, PSU_POS[1] + 0.01, PSU_POS[2] + 0.03);

export function buildCable(id, b) {
  const end = cablePoint(id, b);
  const s = PSU_OUT.clone().add(new THREE.Vector3(0, (id.length % 3) * 0.01, 0));
  let pts;
  if (id === 'mb24') pts = [s, new THREE.Vector3(s.x + 0.12, s.y + 0.03, 0.04), new THREE.Vector3(end.x + 0.05, end.y - 0.06, 0.02), new THREE.Vector3(end.x + 0.03, end.y, end.z + 0.01), end];
  else if (id === 'cpu8') pts = [s, new THREE.Vector3(s.x - 0.02, s.y + 0.08, -0.04), new THREE.Vector3(-CASE.D / 2 + 0.02, 0.1, -0.06), new THREE.Vector3(end.x - 0.01, end.y + 0.02, end.z + 0.02), end];
  else if (id === 'gpu') pts = [s, new THREE.Vector3(s.x + 0.06, s.y + 0.04, 0.08), new THREE.Vector3(end.x, end.y - 0.02, end.z + 0.03), end];
  else pts = [s, new THREE.Vector3(0.0, s.y - 0.01, 0.06), new THREE.Vector3(end.x - 0.03, end.y, end.z + 0.02), end];
  const curve = new THREE.CatmullRomCurve3(pts);
  const r = id === 'mb24' ? 0.0075 : id === 'cpu8' || id === 'gpu' ? 0.005 : 0.003;
  const color = id.startsWith('sata') || id === 'hdd0' ? 0x202020 : 0x111111;
  const m = new THREE.Mesh(new THREE.TubeGeometry(curve, 48, r, 8, false), std(color, 0.1, 0.8));
  m.castShadow = true;
  const plug = box(id === 'mb24' ? 0.012 : 0.01, id === 'mb24' ? 0.054 : 0.012, 0.012, std(0x0a0a0a, 0.1, 0.7), end.x, end.y, end.z);
  if (id === 'cpu8') { plug.scale.set(2, 0.8, 1); }
  const g = new THREE.Group();
  g.add(m, plug);
  return g;
}


/** Модель целого ПК (для стеллажа): корпус со всеми деталями и кабелями. */
export function buildWholePC(b) {
  const root = new THREE.Group();
  const order = ['case', 'mb', 'cpu', 'cooler', 'ram0', 'ram1', 'ram2', 'ram3', 'gpu', 'm2_0', 'm2_1', 'sata0', 'sata1', 'hdd0', 'psu', 'fanF0', 'fanF1', 'fanR0'];
  for (const slot of order) {
    const it = b.slots[slot];
    if (!it || !PART[it.pid]) continue;
    const g = placePart(slot, b, it);
    if (g) root.add(g);
  }
  if (b.slots.psu) for (const id of Object.keys(b.cables)) root.add(buildCable(id, b));
  return root;
}
