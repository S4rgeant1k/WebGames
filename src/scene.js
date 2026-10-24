// 3D-сцена: мастерская, стол, монитор и процедурные модели комплектующих (Three.js).

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { PART } from './parts.js';

// ── Размеры (метры) ─────────────────────────────────────────────────────────
export const CASE = { D: 0.46, H: 0.47, W: 0.21 };
const DESK_Y = 0.76;
const CASE_POS = new THREE.Vector3(0, DESK_Y + CASE.H / 2 + 0.012, 0);
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
function labelTex(text, { w = 256, h = 64, bg = '#111', fg = '#fff', font = 'bold 30px Arial, sans-serif', border = null } = {}) {
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

function patternTex(kind) {
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

const std = (color, metal = 0.2, rough = 0.6, extra = {}) => new THREE.MeshStandardMaterial({ color, metalness: metal, roughness: rough, ...extra });
function box(w, h, d, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), material);
  m.position.set(x, y, z);
  m.castShadow = true; m.receiveShadow = true;
  return m;
}
function cyl(r, h, material, seg = 24) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, seg), material);
  m.castShadow = true;
  return m;
}
function plane(w, h, material, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
  m.position.set(x, y, z);
  return m;
}
const shortName = p => p.name.replace(/^(AMD|Intel|NVIDIA|ASUS|MSI|Gigabyte|Sapphire|EVGA|ASRock)\s+/i, '');

// Списки для анимации
let spinners = [];      // { obj, speed }
let rgbMats = [];       // материалы с переливом
let glowMats = [];      // материалы, светящиеся при включении

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
  const metal = std(0x3b3f45, 0.85, 0.35);
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

function buildCooler(p) {
  const g = new THREE.Group();
  if (p.kind === 'box') {
    const base = cyl(0.046, 0.03, std(0x9aa0a6, 0.8, 0.4), 32);
    base.rotation.x = Math.PI / 2; base.position.z = 0.024;
    g.add(base);
    const fan = makeFan(0.08, 0x111111, 0x1a1a1a, false, 18);
    fan.position.z = 0.044;
    g.add(fan);
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
  const f = makeFan(0.12, 0x151515, p.rgb ? 0xdddddd : 0x2a2a2a, p.rgb, 10);
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

function placePart(slot, b, item) {
  const p = PART[item.pid];
  const form = boardForm(b);
  const L = LAYOUT[form];
  let g;
  switch (p.type) {
    case 'case': g = buildCase(p); break;
    case 'mb': g = buildBoard(p); g.position.set(XR, YT, ZS); break;
    case 'cpu': g = buildCPU(p); g.position.copy(bp(form, ...L.socket)); break;
    case 'cooler': g = buildCooler(p); g.position.copy(bp(form, ...L.socket)); break;
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
function cablePoint(id, b) {
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

function buildCable(id, b) {
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

// ── Сцена ───────────────────────────────────────────────────────────────────
export function createScene(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1d222a);
  scene.fog = new THREE.Fog(0x1d222a, 3.5, 7);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.45;

  const camera = new THREE.PerspectiveCamera(42, container.clientWidth / container.clientHeight, 0.02, 30);
  const HOME = { pos: new THREE.Vector3(0.42, 1.34, 1.18), target: CASE_POS.clone().add(new THREE.Vector3(0.16, -0.02, 0)) };
  camera.position.copy(HOME.pos);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.target.copy(HOME.target);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.minDistance = 0.28;
  controls.maxDistance = 2.2;
  controls.maxPolarAngle = Math.PI * 0.62;
  controls.screenSpacePanning = true;
  controls.update();

  // Свет
  scene.add(new THREE.HemisphereLight(0xdfe8ff, 0x2a2420, 0.55));
  const sun = new THREE.DirectionalLight(0xffffff, 1.6);
  sun.position.set(1.4, 3, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -1.2, right: 1.4, top: 1.2, bottom: -0.6, near: 0.5, far: 7 });
  sun.shadow.bias = -0.0004;
  scene.add(sun);
  const lamp = new THREE.SpotLight(0xffd9a8, 6, 3, 0.75, 0.6, 1.4);
  lamp.position.set(-0.55, 1.55, 0.15);
  lamp.target.position.copy(CASE_POS);
  scene.add(lamp, lamp.target);
  const caseLight = new THREE.PointLight(0x66aaff, 0, 0.6, 2);
  caseLight.position.copy(CASE_POS).add(new THREE.Vector3(0.02, 0.05, 0));
  scene.add(caseLight);

  // Комната
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), std(0xffffff, 0, 0.9, { map: (() => { const t = patternTex('floor'); t.repeat.set(8, 8); return t; })() }));
  floor.rotation.x = -Math.PI / 2; floor.receiveShadow = true;
  scene.add(floor);
  const wallMat = std(0x3b4656, 0, 0.95);
  const wall = plane(10, 4, wallMat, 0, 2, -0.75); wall.receiveShadow = true; scene.add(wall);
  const wall2 = plane(10, 4, wallMat, -1.6, 2, 0); wall2.rotation.y = Math.PI / 2; scene.add(wall2);
  // перфопанель с инструментами
  const peg = plane(1.3, 0.62, std(0xffffff, 0, 0.9, { map: (() => { const t = patternTex('peg').clone(); t.needsUpdate = true; t.repeat.set(10, 5); return t; })() }), 0.05, 1.42, -0.745);
  scene.add(peg);
  const toolMat = std(0xd23a2a, 0.3, 0.5), steel = std(0xb8bcc2, 0.9, 0.3);
  scene.add(box(0.02, 0.16, 0.012, toolMat, -0.45, 1.45, -0.735), box(0.006, 0.12, 0.006, steel, -0.45, 1.32, -0.735));
  scene.add(box(0.02, 0.14, 0.012, std(0xf0c419, 0.3, 0.5), -0.38, 1.47, -0.735), box(0.005, 0.1, 0.005, steel, -0.38, 1.35, -0.735));
  scene.add(box(0.16, 0.05, 0.03, std(0x2e7dd1, 0.3, 0.5), 0.45, 1.5, -0.73));
  scene.add(box(0.03, 0.18, 0.02, std(0x333333, 0.4, 0.5), 0.28, 1.42, -0.735));
  // вывеска
  const sign = plane(0.62, 0.12, new THREE.MeshBasicMaterial({ map: labelTex('PC BUILD SIM · МАСТЕРСКАЯ', { bg: '#10151c', fg: '#ffcc33', font: 'bold 44px Arial', w: 1024, h: 200, border: '#ffcc33' }) }), 0.05, 1.86, -0.74);
  scene.add(sign);

  // Стол
  const wood = std(0xffffff, 0.05, 0.7, { map: (() => { const t = patternTex('wood'); t.repeat.set(2, 1); return t; })() });
  const desk = box(1.9, 0.04, 0.85, wood, 0.25, DESK_Y - 0.02, -0.15);
  scene.add(desk);
  const legMat = std(0x222222, 0.7, 0.4);
  for (const [x, z] of [[-0.65, -0.52], [1.15, -0.52], [-0.65, 0.22], [1.15, 0.22]]) scene.add(box(0.04, DESK_Y - 0.04, 0.04, legMat, x, (DESK_Y - 0.04) / 2, z));
  // коврик
  scene.add(box(0.62, 0.003, 0.42, std(0x1a2533, 0, 0.95), 0.02, DESK_Y + 0.0015, 0.0));
  // коробки с деталями и отвёртка на столе
  scene.add(box(0.2, 0.08, 0.14, std(0x9c7a4f, 0, 0.85), -0.55, DESK_Y + 0.04, -0.35));
  scene.add(box(0.16, 0.06, 0.12, std(0xb48d5b, 0, 0.85), -0.55, DESK_Y + 0.11, -0.35));
  const sd = cyl(0.008, 0.11, toolMat); sd.rotation.z = Math.PI / 2; sd.position.set(-0.32, DESK_Y + 0.008, 0.2); scene.add(sd);
  const sd2 = cyl(0.002, 0.08, steel); sd2.rotation.z = Math.PI / 2; sd2.position.set(-0.225, DESK_Y + 0.008, 0.2); scene.add(sd2);

  // Монитор
  const mon = new THREE.Group();
  const monDark = std(0x111216, 0.4, 0.45);
  mon.add(box(0.56, 0.33, 0.02, monDark, 0, 0.27, 0));
  const scrCanvas = document.createElement('canvas');
  scrCanvas.width = 1024; scrCanvas.height = 576;
  const scrTex = new THREE.CanvasTexture(scrCanvas);
  scrTex.colorSpace = THREE.SRGBColorSpace;
  const screen = plane(0.535, 0.301, new THREE.MeshBasicMaterial({ map: scrTex, toneMapped: false }), 0, 0.27, 0.0105);
  mon.add(screen);
  mon.add(box(0.04, 0.16, 0.03, monDark, 0, 0.08, -0.03));
  mon.add(box(0.22, 0.012, 0.16, monDark, 0, 0.006, -0.02));
  mon.position.set(0.56, DESK_Y, -0.22);
  mon.rotation.y = -0.3;
  scene.add(mon);
  // клавиатура и мышь
  scene.add(box(0.36, 0.018, 0.12, std(0x1b1b1f, 0.3, 0.6), 0.66, DESK_Y + 0.009, 0.16));
  const keyMat = std(0x2c2c32, 0.2, 0.7);
  for (let r = 0; r < 4; r++) for (let c = 0; c < 15; c++) scene.add(box(0.018, 0.006, 0.018, keyMat, 0.66 - 0.16 + c * 0.0228, DESK_Y + 0.021, 0.16 - 0.04 + r * 0.025));
  scene.add(box(0.06, 0.025, 0.1, std(0x1b1b1f, 0.3, 0.5), 0.92, DESK_Y + 0.0125, 0.18));

  // Корень корпуса — все детали внутри
  const caseRoot = new THREE.Group();
  caseRoot.position.copy(CASE_POS);
  scene.add(caseRoot);
  const ghostRoot = new THREE.Group();
  caseRoot.add(ghostRoot);
  const cableRoot = new THREE.Group();
  caseRoot.add(cableRoot);
  const pointRoot = new THREE.Group();
  caseRoot.add(pointRoot);
  const dustRoot = new THREE.Group();
  scene.add(dustRoot);

  const partGroups = {};
  let anim = null;
  let powered = false;
  let rgbOn = false;
  const flyDust = [];

  function disposeTree(o) {
    o.traverse(c => {
      if (c.geometry) c.geometry.dispose();
      if (c.material) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => m.dispose());
    });
  }

  /** Перестроить сборку на столе. */
  function setBuild(b, { animateSlot = null } = {}) {
    for (const k of Object.keys(partGroups)) { caseRoot.remove(partGroups[k]); disposeTree(partGroups[k]); delete partGroups[k]; }
    cableRoot.children.slice().forEach(c => { cableRoot.remove(c); disposeTree(c); });
    dustRoot.children.slice().forEach(c => { dustRoot.remove(c); disposeTree(c); });
    spinners = []; rgbMats = []; glowMats = [];
    const order = ['case', 'mb', 'cpu', 'cooler', 'ram0', 'ram1', 'ram2', 'ram3', 'gpu', 'm2_0', 'm2_1', 'sata0', 'sata1', 'hdd0', 'psu', 'fanF0', 'fanF1', 'fanR0'];
    rgbOn = false;
    for (const slot of order) {
      const item = b.slots[slot];
      if (!item) continue;
      const g = placePart(slot, b, item);
      if (!g) continue;
      g.userData.pick = { kind: 'part', slot };
      g.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
      caseRoot.add(g);
      partGroups[slot] = g;
      if (PART[item.pid].rgb) rgbOn = true;
      if (item.broken) markBroken(g);
      if (item.dirty) addDust(slot, g);
    }
    for (const id of Object.keys(b.cables)) if (b.slots.psu) cableRoot.add(buildCable(id, b));
    if (animateSlot && partGroups[animateSlot]) {
      const g = partGroups[animateSlot];
      const to = g.position.clone();
      const off = animateSlot === 'case' ? new THREE.Vector3(0, 0.25, 0) : ['psu', 'hdd0', 'sata0', 'sata1'].includes(animateSlot) ? new THREE.Vector3(0, 0, 0.22) : new THREE.Vector3(0, 0.02, 0.18);
      g.position.add(off);
      anim = { g, from: g.position.clone(), to, t0: performance.now(), dur: 380 };
    }
    applyPower();
  }

  function markBroken(g) {
    // едва заметный тёмный налёт — визуальная подсказка неисправности незаметна, искать надо тестом
    g.userData.broken = true;
  }

  function addDust(slot, g) {
    caseRoot.updateMatrixWorld(true);
    const bb = new THREE.Box3().setFromObject(g);
    if (bb.isEmpty()) return;
    const n = Math.min(900, Math.max(120, Math.round(bb.getSize(new THREE.Vector3()).length() * 1600)));
    const pos = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      pos[i * 3] = THREE.MathUtils.lerp(bb.min.x, bb.max.x, Math.random());
      pos[i * 3 + 1] = THREE.MathUtils.lerp(bb.min.y, bb.max.y, Math.random());
      pos[i * 3 + 2] = THREE.MathUtils.lerp(bb.min.z, bb.max.z, Math.random());
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x9a948a, size: 0.0045, transparent: true, opacity: 0.9, depthWrite: false }));
    pts.userData.slot = slot;
    dustRoot.add(pts);
    // слой пыли на поверхности
    g.traverse(c => {
      if (c.isMesh && c.material && c.material.color && !c.material.map) {
        c.material = c.material.clone();
        c.material.color.lerp(new THREE.Color(0x8d877c), 0.28);
        c.material.roughness = 1;
      }
    });
  }

  /** Анимация сдувания пыли с детали. */
  function blowDust(slot) {
    const pts = dustRoot.children.find(p => p.userData.slot === slot);
    if (!pts) return;
    dustRoot.remove(pts);
    scene.add(pts);
    const n = pts.geometry.attributes.position.count;
    const vel = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) { vel[i * 3] = (Math.random() - 0.3) * 0.6; vel[i * 3 + 1] = Math.random() * 0.5; vel[i * 3 + 2] = 0.3 + Math.random() * 0.8; }
    flyDust.push({ pts, vel, t: 0 });
  }

  function setGhosts(list, b, item) {
    ghostRoot.children.slice().forEach(c => { ghostRoot.remove(c); disposeTree(c); });
    for (const gh of list) {
      const sb = slotBox(gh.slot, b, item);
      if (!sb) continue;
      const color = gh.ok ? 0x3cff8f : 0xff4d4d;
      const m = new THREE.Mesh(new THREE.BoxGeometry(sb.size.x + 0.004, sb.size.y + 0.004, sb.size.z + 0.004),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, depthWrite: false }));
      m.position.copy(sb.pos);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), new THREE.LineBasicMaterial({ color }));
      m.add(edges);
      m.userData.pick = { kind: 'ghost', slot: gh.slot, ok: gh.ok, reason: gh.reason };
      m.renderOrder = 10;
      ghostRoot.add(m);
    }
  }

  function setCablePoints(list, b) {
    pointRoot.children.slice().forEach(c => { pointRoot.remove(c); disposeTree(c); });
    for (const cp of list) {
      const pos = cablePoint(cp.id, b);
      const color = cp.connected ? 0x3cff8f : 0xffc531;
      const m = new THREE.Mesh(new THREE.SphereGeometry(cp.id === 'mb24' ? 0.014 : 0.011, 16, 12),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, depthTest: false }));
      m.position.copy(pos);
      m.renderOrder = 20;
      m.userData.pick = { kind: 'cable', id: cp.id, connected: cp.connected };
      m.userData.pulse = !cp.connected;
      pointRoot.add(m);
    }
  }

  function setPower(on) { powered = on; applyPower(); }
  function applyPower() {
    for (const g of glowMats) { g.mat.emissive.setHex(powered ? g.color : 0x000000); g.mat.emissiveIntensity = g.intensity; }
    caseLight.intensity = powered && rgbOn ? 0.35 : 0;
    if (!powered) rgbMats.forEach(m => m.emissive.setHex(0x000000));
  }

  // ── Наведение и клики ────────────────────────────────────────────────────
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let hover = null;
  const hoverBox = new THREE.BoxHelper(new THREE.Object3D(), 0xffcc33);
  hoverBox.visible = false;
  scene.add(hoverBox);
  const handlers = { pick: () => {}, hover: () => {} };

  function pickAt(clientX, clientY) {
    const r = renderer.domElement.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const targets = [...pointRoot.children, ...ghostRoot.children, ...Object.values(partGroups)];
    const hits = ray.intersectObjects(targets, true);
    // сначала точки кабелей, потом призраки, потом детали
    const order = { cable: 0, ghost: 1, part: 2 };
    let best = null;
    for (const h of hits) {
      let o = h.object;
      while (o && !o.userData.pick) o = o.parent;
      if (!o) continue;
      const pk = o.userData.pick;
      if (!best || order[pk.kind] < order[best.pick.kind] || (order[pk.kind] === order[best.pick.kind] && h.distance < best.dist - 1e-6 && false)) best = { pick: pk, obj: o, dist: h.distance };
      if (pk.kind === 'cable') break;
    }
    // если есть деталь ближе корпуса — выбираем её, а не корпус
    if (best && best.pick.kind === 'part' && best.pick.slot === 'case') {
      const inner = hits.find(h => { let o = h.object; while (o && !o.userData.pick) o = o.parent; return o && o.userData.pick.kind === 'part' && o.userData.pick.slot !== 'case'; });
      const caseHit = hits.find(h => { let o = h.object; while (o && !o.userData.pick) o = o.parent; return o && o.userData.pick.slot === 'case'; });
      if (inner && caseHit && inner.distance < caseHit.distance + 0.001) {
        let o = inner.object; while (!o.userData.pick) o = o.parent;
        best = { pick: o.userData.pick, obj: o };
      }
    }
    return best;
  }

  let down = null;
  renderer.domElement.addEventListener('pointerdown', e => { down = { x: e.clientX, y: e.clientY, t: performance.now() }; });
  renderer.domElement.addEventListener('pointerup', e => {
    if (!down) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    down = null;
    if (moved > 6) return;
    const hit = pickAt(e.clientX, e.clientY);
    handlers.pick(hit ? hit.pick : null, e.clientX, e.clientY);
  });
  renderer.domElement.addEventListener('pointermove', e => {
    if (e.pointerType === 'touch') return;
    const hit = pickAt(e.clientX, e.clientY);
    const key = hit ? JSON.stringify(hit.pick) : null;
    if (key !== (hover && hover.key)) {
      hover = hit ? { ...hit, key } : null;
      if (hover && hover.pick.kind === 'part') { hoverBox.setFromObject(hover.obj); hoverBox.visible = true; }
      else hoverBox.visible = false;
      ghostRoot.children.forEach(g => { g.material.opacity = hover && hover.obj === g ? 0.45 : 0.22; });
      renderer.domElement.style.cursor = hover ? 'pointer' : 'grab';
    }
    handlers.hover(hover ? hover.pick : null, e.clientX, e.clientY);
  });
  renderer.domElement.addEventListener('pointerleave', () => { hoverBox.visible = false; handlers.hover(null); });

  // на узких (телефон) экранах сохраняем горизонтальный угол обзора и отодвигаем камеру
  const HOME_WIDE = { pos: HOME.pos.clone(), target: HOME.target.clone() };
  let narrowPrev = null;
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h);
    const aspect = w / h;
    camera.aspect = aspect;
    const hTan = Math.tan(THREE.MathUtils.degToRad(21)) * 1.6;
    camera.fov = aspect >= 1.6 ? 42 : Math.min(72, THREE.MathUtils.radToDeg(2 * Math.atan(hTan / aspect)));
    camera.updateProjectionMatrix();
    const narrow = aspect < 1.1;
    HOME.target.copy(HOME_WIDE.target);
    HOME.pos.copy(HOME_WIDE.pos);
    if (narrow) {
      HOME.target.x = CASE_POS.x + 0.01;
      HOME.target.y = CASE_POS.y - 0.03;
      const dir = HOME.pos.clone().sub(HOME_WIDE.target);
      const k = aspect < 0.7 ? 0.82 : 0.95;
      HOME.pos.copy(HOME.target).add(dir.multiplyScalar(k));
      HOME.pos.x = HOME.target.x + 0.08;
    }
    if (narrowPrev !== null && narrowPrev !== narrow) resetCamera();
    if (narrowPrev === null) { camera.position.copy(HOME.pos); controls.target.copy(HOME.target); controls.update(); }
    narrowPrev = narrow;
  }
  window.addEventListener('resize', resize);
  resize();

  let camAnim = null;
  function resetCamera() { camAnim = { fromP: camera.position.clone(), toP: HOME.pos.clone(), fromT: controls.target.clone(), toT: HOME.target.clone(), t0: performance.now() }; }
  function lookAtScreen() {
    const t = mon.localToWorld(new THREE.Vector3(0, 0.27, 0));
    const p = mon.localToWorld(new THREE.Vector3(0, 0.29, 0.75));
    camAnim = { fromP: camera.position.clone(), toP: p, fromT: controls.target.clone(), toT: t, t0: performance.now() };
  }

  // ── Цикл отрисовки ───────────────────────────────────────────────────────
  let last = performance.now();
  let onFrame = () => {};
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (anim) {
      const k = Math.min(1, (now - anim.t0) / anim.dur);
      const e = 1 - Math.pow(1 - k, 3);
      anim.g.position.lerpVectors(anim.from, anim.to, e);
      if (k >= 1) anim = null;
    }
    if (camAnim) {
      const k = Math.min(1, (now - camAnim.t0) / 600);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      camera.position.lerpVectors(camAnim.fromP, camAnim.toP, e);
      controls.target.lerpVectors(camAnim.fromT, camAnim.toT, e);
      if (k >= 1) camAnim = null;
    }
    if (powered) {
      for (const s of spinners) s.obj.rotation.z += s.speed * dt;
      const hue = (now / 4000) % 1;
      rgbMats.forEach((m, i) => { m.emissive.setHSL((hue + i * 0.07) % 1, 1, 0.5); m.emissiveIntensity = 1.6; });
      if (rgbOn) caseLight.color.setHSL(hue, 1, 0.55);
    }
    const pulse = 0.45 + Math.sin(now / 180) * 0.3;
    pointRoot.children.forEach(p => { if (p.userData.pulse) p.material.opacity = pulse; });
    for (let i = flyDust.length - 1; i >= 0; i--) {
      const f = flyDust[i];
      f.t += dt;
      const a = f.pts.geometry.attributes.position;
      for (let j = 0; j < a.count; j++) { a.array[j * 3] += f.vel[j * 3] * dt; a.array[j * 3 + 1] += f.vel[j * 3 + 1] * dt; a.array[j * 3 + 2] += f.vel[j * 3 + 2] * dt; }
      a.needsUpdate = true;
      f.pts.material.opacity = Math.max(0, 0.9 - f.t * 0.9);
      if (f.t > 1.1) { scene.remove(f.pts); disposeTree(f.pts); flyDust.splice(i, 1); }
    }
    if (hoverBox.visible && hover?.obj) hoverBox.setFromObject(hover.obj);
    controls.update();
    onFrame(now, dt);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  return {
    setBuild, setGhosts, setCablePoints, setPower, blowDust, resetCamera, lookAtScreen,
    screen: { canvas: scrCanvas, texture: scrTex },
    on(name, fn) { handlers[name] = fn; },
    set onFrame(fn) { onFrame = fn; },
    renderer, camera, caseRoot, ghostRoot, pointRoot,
    /** экранные координаты точки сцены (для автотестов) */
    project(obj) { const v = new THREE.Vector3(); obj.getWorldPosition(v); v.project(camera); const r = renderer.domElement.getBoundingClientRect(); return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height }; }
  };
}
