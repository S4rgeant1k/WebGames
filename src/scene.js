// 3D-мастерская: комната, ходьба от первого лица, верстак со сборкой, стеллаж с ПК, компьютер мастерской.

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { PART } from './parts.js';
import {
  CASE, DESK_Y, CASE_POS, labelTex, patternTex, std, box, cyl, plane,
  collectAnim, placePart, slotBox, cablePoint, buildCable, buildWholePC
} from './models.js';

// ── Планировка комнаты (метры) ──────────────────────────────────────────────
const ROOM = { x0: -1.6, x1: 5.4, z0: -0.75, z1: 5.25, h: 2.8 };
const EYE = 1.62;
const RADIUS = 0.28;
const OFFICE = { x: 4.95, z: 2.2 };        // стол с компьютером мастерской (у правой стены)
const RACK = { x: -1.2, z: 2.2, top: 0.62 }; // стеллаж для ПК клиентов (у левой стены)
const RACK_Z = [1.45, 2.2, 2.95];
const OBSTACLES = [
  [-0.72, -0.75, 1.22, 0.3],     // верстак
  [1.7, -0.75, 3.05, -0.28],     // полки с коробками
  [4.45, 1.3, 5.4, 3.1],         // офисный стол
  [-1.6, 1.05, -0.78, 3.35],     // стеллаж с ПК
  [4.85, 4.65, 5.4, 5.25],       // растение
  [-1.6, 4.4, -0.6, 5.25]        // диван
];
const BENCH_STAND = { x: 0.25, z: 1.05, yaw: 0, pitch: -0.32 };

export function createScene(container) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);
  const canvas = renderer.domElement;
  canvas.tabIndex = 0;

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xbfc8d2);
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.4;

  const camera = new THREE.PerspectiveCamera(65, container.clientWidth / container.clientHeight, 0.02, 40);
  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.dampingFactor = 0.09;
  controls.minDistance = 0.28;
  controls.maxDistance = 1.6;
  controls.maxPolarAngle = Math.PI * 0.62;
  controls.screenSpacePanning = true;
  controls.enabled = false;

  // ── Свет ──────────────────────────────────────────────────────────────────
  scene.add(new THREE.HemisphereLight(0xf2f5ff, 0x5a5048, 0.9));
  const sun = new THREE.DirectionalLight(0xffffff, 1.4);
  sun.position.set(1.4, 3, 2.2);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -1.2, right: 1.4, top: 1.2, bottom: -0.6, near: 0.5, far: 7 });
  sun.shadow.bias = -0.0004;
  scene.add(sun);
  const lamp = new THREE.SpotLight(0xffe2b8, 5, 3, 0.75, 0.6, 1.4);
  lamp.position.set(-0.55, 1.55, 0.15);
  lamp.target.position.copy(CASE_POS);
  scene.add(lamp, lamp.target);
  for (const [x, z] of [[0.6, 1.4], [3.4, 1.4], [0.6, 3.9], [3.4, 3.9]]) {
    const pl = new THREE.PointLight(0xfff4e6, 5, 6, 1.6);
    pl.position.set(x, ROOM.h - 0.15, z);
    scene.add(pl);
  }
  const caseLight = new THREE.PointLight(0x66aaff, 0, 0.6, 2);
  caseLight.position.copy(CASE_POS).add(new THREE.Vector3(0.02, 0.05, 0));
  scene.add(caseLight);

  // ── Комната ───────────────────────────────────────────────────────────────
  const W = ROOM.x1 - ROOM.x0, Dz = ROOM.z1 - ROOM.z0, cx = (ROOM.x0 + ROOM.x1) / 2, cz = (ROOM.z0 + ROOM.z1) / 2;
  const floorTex = patternTex('floor').clone(); floorTex.needsUpdate = true; floorTex.repeat.set(W / 1.2, Dz / 1.2);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(W, Dz), std(0xffffff, 0, 0.85, { map: floorTex }));
  floor.rotation.x = -Math.PI / 2; floor.position.set(cx, 0, cz); floor.receiveShadow = true;
  scene.add(floor);
  const ceil = new THREE.Mesh(new THREE.PlaneGeometry(W, Dz), std(0xf4f4f2, 0, 1));
  ceil.rotation.x = Math.PI / 2; ceil.position.set(cx, ROOM.h, cz);
  scene.add(ceil);
  const wallMat = std(0xdfe3e6, 0, 0.95);
  const accentWall = std(0x34495e, 0, 0.9);
  const wallBack = plane(W, ROOM.h, accentWall, cx, ROOM.h / 2, ROOM.z0); wallBack.receiveShadow = true; scene.add(wallBack);
  const wallFront = plane(W, ROOM.h, wallMat, cx, ROOM.h / 2, ROOM.z1); wallFront.rotation.y = Math.PI; scene.add(wallFront);
  const wallL = plane(Dz, ROOM.h, wallMat, ROOM.x0, ROOM.h / 2, cz); wallL.rotation.y = Math.PI / 2; scene.add(wallL);
  const wallR = plane(Dz, ROOM.h, wallMat, ROOM.x1, ROOM.h / 2, cz); wallR.rotation.y = -Math.PI / 2; scene.add(wallR);
  // плинтусы
  const skirt = std(0x2b2f33, 0.1, 0.8);
  scene.add(box(W, 0.08, 0.02, skirt, cx, 0.04, ROOM.z1 - 0.01), box(0.02, 0.08, Dz, skirt, ROOM.x0 + 0.01, 0.04, cz), box(0.02, 0.08, Dz, skirt, ROOM.x1 - 0.01, 0.04, cz));
  // потолочные светильники
  const lampMat = new THREE.MeshBasicMaterial({ color: 0xfffcf2 });
  for (const [x, z] of [[0.6, 1.4], [3.4, 1.4], [0.6, 3.9], [3.4, 3.9]]) {
    const l = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.03, 0.3), lampMat);
    l.position.set(x, ROOM.h - 0.02, z);
    scene.add(l);
  }
  // окна на правой стене
  const skyTex = (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 128;
    const x = c.getContext('2d'); const g = x.createLinearGradient(0, 0, 0, 128);
    g.addColorStop(0, '#6fa8e8'); g.addColorStop(0.7, '#cfe6ff'); g.addColorStop(0.72, '#7f9a7a'); g.addColorStop(1, '#5d7a58');
    x.fillStyle = g; x.fillRect(0, 0, 64, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  for (const z of [0.6, 4.0]) {
    const win = plane(1.3, 1.3, new THREE.MeshBasicMaterial({ map: skyTex }), ROOM.x1 - 0.005, 1.55, z);
    win.rotation.y = -Math.PI / 2; scene.add(win);
    const fr = std(0xf5f5f5, 0.1, 0.5);
    scene.add(box(0.05, 1.38, 0.05, fr, ROOM.x1 - 0.02, 1.55, z - 0.67), box(0.05, 1.38, 0.05, fr, ROOM.x1 - 0.02, 1.55, z + 0.67),
      box(0.05, 0.05, 1.38, fr, ROOM.x1 - 0.02, 2.22, z), box(0.05, 0.05, 1.38, fr, ROOM.x1 - 0.02, 0.88, z), box(0.04, 1.3, 0.03, fr, ROOM.x1 - 0.02, 1.55, z),
      box(0.18, 0.03, 1.4, fr, ROOM.x1 - 0.09, 0.86, z));
  }
  // дверь
  const door = new THREE.Group();
  door.add(box(1.0, 2.1, 0.05, std(0x6b4a33, 0.1, 0.6), 0, 1.05, 0));
  door.add(box(1.12, 0.06, 0.08, std(0xf0f0f0, 0.1, 0.5), 0, 2.13, 0));
  const handle = cyl(0.02, 0.12, std(0xcccccc, 0.9, 0.2)); handle.rotation.z = Math.PI / 2; handle.position.set(0.38, 1.0, -0.05); door.add(handle);
  const exitSign = plane(0.36, 0.12, new THREE.MeshBasicMaterial({ map: labelTex('ВЫХОД', { bg: '#1c8f3c', fg: '#fff', font: 'bold 48px Arial', w: 256, h: 86 }) }), 0, 2.32, -0.03);
  exitSign.rotation.y = Math.PI; door.add(exitSign);
  door.position.set(2.2, 0, ROOM.z1 - 0.03);
  scene.add(door);

  // ── Верстак ───────────────────────────────────────────────────────────────
  const wood = std(0xffffff, 0.05, 0.7, { map: (() => { const t = patternTex('wood'); t.repeat.set(2, 1); return t; })() });
  scene.add(box(1.9, 0.04, 0.85, wood, 0.25, DESK_Y - 0.02, -0.15));
  const legMat = std(0x222222, 0.7, 0.4);
  for (const [x, z] of [[-0.65, -0.52], [1.15, -0.52], [-0.65, 0.22], [1.15, 0.22]]) scene.add(box(0.04, DESK_Y - 0.04, 0.04, legMat, x, (DESK_Y - 0.04) / 2, z));
  scene.add(box(1.8, 0.02, 0.7, std(0x333333, 0.4, 0.6), 0.25, 0.18, -0.15));       // нижняя полка
  scene.add(box(0.62, 0.003, 0.42, std(0x1a2533, 0, 0.95), 0.02, DESK_Y + 0.0015, 0.0)); // коврик
  scene.add(box(0.2, 0.08, 0.14, std(0x9c7a4f, 0, 0.85), -0.55, DESK_Y + 0.04, -0.35));
  scene.add(box(0.16, 0.06, 0.12, std(0xb48d5b, 0, 0.85), -0.55, DESK_Y + 0.11, -0.35));
  const toolMat = std(0xd23a2a, 0.3, 0.5), steel = std(0xb8bcc2, 0.9, 0.3);
  const sd = cyl(0.008, 0.11, toolMat); sd.rotation.z = Math.PI / 2; sd.position.set(-0.32, DESK_Y + 0.008, 0.2); scene.add(sd);
  const sd2 = cyl(0.002, 0.08, steel); sd2.rotation.z = Math.PI / 2; sd2.position.set(-0.225, DESK_Y + 0.008, 0.2); scene.add(sd2);
  // перфопанель, инструменты, вывеска
  const peg = plane(1.3, 0.62, std(0xffffff, 0, 0.9, { map: (() => { const t = patternTex('peg').clone(); t.needsUpdate = true; t.repeat.set(10, 5); return t; })() }), 0.05, 1.42, ROOM.z0 + 0.005);
  scene.add(peg);
  scene.add(box(0.02, 0.16, 0.012, toolMat, -0.45, 1.45, -0.735), box(0.006, 0.12, 0.006, steel, -0.45, 1.32, -0.735));
  scene.add(box(0.02, 0.14, 0.012, std(0xf0c419, 0.3, 0.5), -0.38, 1.47, -0.735), box(0.005, 0.1, 0.005, steel, -0.38, 1.35, -0.735));
  scene.add(box(0.16, 0.05, 0.03, std(0x2e7dd1, 0.3, 0.5), 0.45, 1.5, -0.73));
  scene.add(box(0.03, 0.18, 0.02, std(0x333333, 0.4, 0.5), 0.28, 1.42, -0.735));
  scene.add(plane(0.62, 0.12, new THREE.MeshBasicMaterial({ map: labelTex('ВЕРСТАК · СБОРКА И РЕМОНТ', { bg: '#10151c', fg: '#ffcc33', font: 'bold 44px Arial', w: 1024, h: 200, border: '#ffcc33' }) }), 0.05, 1.86, ROOM.z0 + 0.01));
  // монитор верстака (показывает тестируемый ПК)
  const mon = new THREE.Group();
  const monDark = std(0x111216, 0.4, 0.45);
  mon.add(box(0.56, 0.33, 0.02, monDark, 0, 0.27, 0));
  const scrCanvas = document.createElement('canvas');
  scrCanvas.width = 1024; scrCanvas.height = 576;
  const scrTex = new THREE.CanvasTexture(scrCanvas);
  scrTex.colorSpace = THREE.SRGBColorSpace;
  mon.add(plane(0.535, 0.301, new THREE.MeshBasicMaterial({ map: scrTex, toneMapped: false }), 0, 0.27, 0.0105));
  mon.add(box(0.04, 0.16, 0.03, monDark, 0, 0.08, -0.03));
  mon.add(box(0.22, 0.012, 0.16, monDark, 0, 0.006, -0.02));
  mon.position.set(0.56, DESK_Y, -0.22);
  mon.rotation.y = -0.3;
  scene.add(mon);
  scene.add(box(0.36, 0.018, 0.12, std(0x1b1b1f, 0.3, 0.6), 0.66, DESK_Y + 0.009, 0.16));
  const keyMat = std(0x2c2c32, 0.2, 0.7);
  const keyGeo = new THREE.BoxGeometry(0.018, 0.006, 0.018);
  const keys = new THREE.InstancedMesh(keyGeo, keyMat, 60);
  { const m = new THREE.Matrix4(); let i = 0; for (let r = 0; r < 4; r++) for (let c = 0; c < 15; c++) { m.makeTranslation(0.66 - 0.16 + c * 0.0228, DESK_Y + 0.021, 0.16 - 0.04 + r * 0.025); keys.setMatrixAt(i++, m); } }
  scene.add(keys);
  scene.add(box(0.06, 0.025, 0.1, std(0x1b1b1f, 0.3, 0.5), 0.92, DESK_Y + 0.0125, 0.18));

  // ── Полки с коробками ─────────────────────────────────────────────────────
  const shelfMat = std(0x50575f, 0.6, 0.45);
  const shelf = new THREE.Group();
  for (const x of [1.72, 3.02]) for (const z of [-0.72, -0.3]) shelf.add(box(0.03, 2.0, 0.03, shelfMat, x, 1.0, z));
  const boxColors = [0x9c7a4f, 0xb48d5b, 0x2d3a4a, 0x8b1e1e, 0x1e5a8b, 0xe8e8e8, 0x222222, 0x2d6b3a];
  let bi = 0;
  for (const y of [0.25, 0.75, 1.25, 1.75]) {
    shelf.add(box(1.32, 0.025, 0.45, shelfMat, 2.37, y, -0.51));
    let x = 1.8;
    while (x < 2.9) {
      const w = 0.16 + ((bi * 37) % 10) / 50, h = 0.14 + ((bi * 53) % 10) / 40;
      if (x + w > 2.95) break;
      shelf.add(box(w, h, 0.32, std(boxColors[bi % boxColors.length], 0, 0.85), x + w / 2, y + 0.0125 + h / 2, -0.52));
      x += w + 0.03; bi++;
    }
  }
  scene.add(shelf);
  scene.add(plane(0.7, 0.14, new THREE.MeshBasicMaterial({ map: labelTex('СКЛАД ДЕТАЛЕЙ', { bg: '#10151c', fg: '#fff', font: 'bold 50px Arial', w: 512, h: 100 }) }), 2.37, 2.2, ROOM.z0 + 0.01));

  // ── Офисный стол с компьютером мастерской ─────────────────────────────────
  const office = new THREE.Group();
  const deskTop = std(0xe9e4dc, 0.05, 0.6);
  office.add(box(0.8, 0.035, 1.6, deskTop, 0, DESK_Y - 0.018, 0));
  for (const [x, z] of [[-0.36, -0.76], [0.36, -0.76], [-0.36, 0.76], [0.36, 0.76]]) office.add(box(0.035, DESK_Y - 0.035, 0.035, legMat, x, (DESK_Y - 0.035) / 2, z));
  const omon = new THREE.Group();
  omon.add(box(0.025, 0.4, 0.68, monDark, 0, 0.32, 0));
  const offCanvas = document.createElement('canvas');
  offCanvas.width = 1024; offCanvas.height = 600;
  const offTex = new THREE.CanvasTexture(offCanvas);
  offTex.colorSpace = THREE.SRGBColorSpace;
  const offScr = plane(0.655, 0.375, new THREE.MeshBasicMaterial({ map: offTex, toneMapped: false }), -0.0135, 0.32, 0);
  offScr.rotation.y = -Math.PI / 2;
  omon.add(offScr);
  omon.add(box(0.03, 0.18, 0.05, monDark, 0.03, 0.1, 0));
  omon.add(box(0.18, 0.012, 0.24, monDark, 0.02, 0.006, 0));
  omon.position.set(0.2, DESK_Y, 0);
  office.add(omon);
  office.add(box(0.14, 0.018, 0.42, std(0x1b1b1f, 0.3, 0.6), -0.15, DESK_Y + 0.009, 0));
  office.add(box(0.1, 0.025, 0.06, std(0x1b1b1f, 0.3, 0.5), -0.15, DESK_Y + 0.0125, -0.32));
  // системный блок под столом
  office.add(box(0.42, 0.45, 0.2, std(0x18191c, 0.4, 0.5), 0.1, 0.25, 0.55));
  const pcLed = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.01, 0.1), new THREE.MeshBasicMaterial({ color: 0x3a8cff }));
  pcLed.position.set(-0.11, 0.42, 0.55); office.add(pcLed);
  // кружка и лампа
  const mug = cyl(0.04, 0.09, std(0xc0392b, 0.1, 0.4)); mug.position.set(-0.05, DESK_Y + 0.045, 0.55); office.add(mug);
  // кресло
  const chair = new THREE.Group();
  const chMat = std(0x222428, 0.2, 0.7);
  chair.add(box(0.48, 0.08, 0.48, chMat, 0, 0.48, 0), box(0.08, 0.6, 0.46, chMat, -0.22, 0.85, 0));
  const post = cyl(0.03, 0.42, std(0x888888, 0.8, 0.3)); post.position.y = 0.23; chair.add(post);
  chair.add(box(0.5, 0.03, 0.06, chMat, 0, 0.04, 0), box(0.06, 0.03, 0.5, chMat, 0, 0.04, 0));
  chair.position.set(-0.78, 0, 0.1); chair.rotation.y = 0.15;
  office.add(chair);
  office.position.set(OFFICE.x, 0, OFFICE.z);
  scene.add(office);
  // доска с заказами над столом
  const boardCanvas = document.createElement('canvas');
  boardCanvas.width = 768; boardCanvas.height = 512;
  const boardTex = new THREE.CanvasTexture(boardCanvas);
  boardTex.colorSpace = THREE.SRGBColorSpace;
  const board = plane(1.2, 0.8, new THREE.MeshBasicMaterial({ map: boardTex }), ROOM.x1 - 0.045, 1.75, OFFICE.z);
  board.rotation.y = -Math.PI / 2;
  scene.add(board);
  scene.add(Object.assign(box(0.03, 0.84, 1.24, std(0x8a8f96, 0.5, 0.5), ROOM.x1 - 0.02, 1.75, OFFICE.z)));

  // ── Стеллаж для компьютеров ───────────────────────────────────────────────
  const rack = new THREE.Group();
  rack.add(box(0.72, 0.04, 2.25, std(0x3d434b, 0.5, 0.5), 0, RACK.top - 0.02, 0));
  rack.add(box(0.72, 0.03, 2.25, std(0x3d434b, 0.5, 0.5), 0, 0.12, 0));
  for (const z of [-1.1, 1.1]) for (const x of [-0.33, 0.33]) rack.add(box(0.03, RACK.top, 0.03, shelfMat, x, RACK.top / 2, z));
  rack.position.set(RACK.x, 0, RACK.z);
  scene.add(rack);
  { const lab = plane(0.9, 0.16, new THREE.MeshBasicMaterial({ map: labelTex('КОМПЬЮТЕРЫ', { bg: '#10151c', fg: '#ffcc33', font: 'bold 50px Arial', w: 512, h: 90 }) }), ROOM.x0 + 0.01, 1.55, RACK.z); lab.rotation.y = Math.PI / 2; scene.add(lab); }
  const rackPCs = new THREE.Group();
  scene.add(rackPCs);

  // ── Декор: диван, растение, урна, постер ──────────────────────────────────
  const sofa = new THREE.Group();
  const sofaMat = std(0x3b5068, 0, 0.9);
  sofa.add(box(0.85, 0.4, 1.7, sofaMat, 0, 0.22, 0), box(0.22, 0.45, 1.7, sofaMat, -0.32, 0.6, 0), box(0.85, 0.3, 0.2, sofaMat, 0, 0.5, -0.85), box(0.85, 0.3, 0.2, sofaMat, 0, 0.5, 0.85));
  sofa.position.set(-1.12, 0, 4.4);
  scene.add(sofa);
  const pot = cyl(0.18, 0.4, std(0xb3541e, 0, 0.8)); pot.position.set(5.12, 0.2, 4.95); scene.add(pot);
  const leaves = new THREE.Mesh(new THREE.IcosahedronGeometry(0.42, 1), std(0x2f7d32, 0, 0.8)); leaves.position.set(5.12, 0.85, 4.95); leaves.scale.set(1, 1.3, 1); scene.add(leaves);
  const bin = cyl(0.14, 0.38, std(0x2b2f33, 0.6, 0.4)); bin.position.set(1.45, 0.19, -0.45); scene.add(bin);
  const poster = plane(0.8, 1.1, new THREE.MeshBasicMaterial({ map: labelTex('PC BUILD\nSIM\n\nсобери\nсвой ПК', { bg: '#1d2b3a', fg: '#ffcc33', font: 'bold 60px Arial', w: 400, h: 560, border: '#ffcc33' }) }), 0.4, 1.6, ROOM.z1 - 0.01);
  poster.rotation.y = Math.PI; scene.add(poster);

  // ── Зоны взаимодействия ───────────────────────────────────────────────────
  const hitMat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false });
  const hits = [];
  function hitBox(id, label, w, h, d, x, y, z) {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), hitMat);
    m.position.set(x, y, z);
    m.userData.interact = { id, label };
    scene.add(m); hits.push(m);
    return m;
  }
  hitBox('bench', 'Работать за верстаком', 1.9, 0.8, 0.95, 0.25, DESK_Y + 0.35, -0.15);
  hitBox('office', 'Компьютер мастерской — почта, магазин, заказы', 0.9, 0.8, 1.6, OFFICE.x, DESK_Y + 0.3, OFFICE.z);
  hitBox('shelf', 'Склад деталей', 1.35, 2.0, 0.5, 2.37, 1.0, -0.5);
  hitBox('door', 'Закончить день', 1.0, 2.1, 0.2, 2.2, 1.05, ROOM.z1 - 0.1);
  hitBox('board', 'Доска заказов', 0.2, 0.8, 1.2, ROOM.x1 - 0.1, 1.75, OFFICE.z);
  const rackHits = RACK_Z.map((z, i) => hitBox('park:' + i, '', 0.7, 0.6, 0.6, RACK.x, RACK.top + 0.25, z));

  // ── Корень корпуса на верстаке ────────────────────────────────────────────
  const caseRoot = new THREE.Group();
  caseRoot.position.copy(CASE_POS);
  scene.add(caseRoot);
  const ghostRoot = new THREE.Group(); caseRoot.add(ghostRoot);
  const cableRoot = new THREE.Group(); caseRoot.add(cableRoot);
  const pointRoot = new THREE.Group(); caseRoot.add(pointRoot);
  const dustRoot = new THREE.Group(); scene.add(dustRoot);

  const partGroups = {};
  let anim = null;
  let powered = false;
  let rgbOn = false;
  let A = { spinners: [], rgbMats: [], glowMats: [] };
  const flyDust = [];

  function disposeTree(o) {
    o.traverse(c => {
      if (c.geometry) c.geometry.dispose();
      if (c.material && c.material !== hitMat) (Array.isArray(c.material) ? c.material : [c.material]).forEach(m => { if (!m.map || !m.map.isCanvasTexture) m.dispose(); });
    });
  }

  /** Перестроить сборку на верстаке. */
  function setBuild(b, { animateSlot = null } = {}) {
    for (const k of Object.keys(partGroups)) { caseRoot.remove(partGroups[k]); disposeTree(partGroups[k]); delete partGroups[k]; }
    cableRoot.children.slice().forEach(c => { cableRoot.remove(c); disposeTree(c); });
    dustRoot.children.slice().forEach(c => { dustRoot.remove(c); disposeTree(c); });
    rgbOn = false;
    b = b || { slots: {}, cables: {} };
    const order = ['case', 'mb', 'cpu', 'cooler', 'ram0', 'ram1', 'ram2', 'ram3', 'gpu', 'm2_0', 'm2_1', 'sata0', 'sata1', 'hdd0', 'psu', 'fanF0', 'fanF1', 'fanR0'];
    A = collectAnim(() => {
      for (const slot of order) {
        const item = b.slots[slot];
        if (!item || !PART[item.pid]) continue;
        const g = placePart(slot, b, item);
        if (!g) continue;
        g.userData.pick = { kind: 'part', slot };
        g.traverse(c => { if (c.isMesh) { c.castShadow = true; c.receiveShadow = true; } });
        caseRoot.add(g);
        partGroups[slot] = g;
        if (PART[item.pid].rgb) rgbOn = true;
      }
      for (const id of Object.keys(b.cables)) if (b.slots.psu) cableRoot.add(buildCable(id, b));
    });
    for (const slot of order) if (b.slots[slot]?.dirty && partGroups[slot]) addDust(slot, partGroups[slot]);
    if (animateSlot && partGroups[animateSlot]) {
      const g = partGroups[animateSlot];
      const to = g.position.clone();
      const off = animateSlot === 'case' ? new THREE.Vector3(0, 0.25, 0) : ['psu', 'hdd0', 'sata0', 'sata1'].includes(animateSlot) ? new THREE.Vector3(0, 0, 0.22) : new THREE.Vector3(0, 0.02, 0.18);
      g.position.add(off);
      anim = { g, from: g.position.clone(), to, t0: performance.now(), dur: 380 };
    }
    applyPower();
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
    g.traverse(c => {
      if (c.isMesh && c.material && c.material.color && !c.material.map) {
        c.material = c.material.clone();
        c.material.color.lerp(new THREE.Color(0x8d877c), 0.28);
        c.material.roughness = 1;
      }
    });
  }

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
      const sb = slotBox(gh.slot, b || { slots: {}, cables: {} }, item);
      if (!sb) continue;
      const color = gh.ok ? 0x3cff8f : 0xff4d4d;
      const m = new THREE.Mesh(new THREE.BoxGeometry(sb.size.x + 0.004, sb.size.y + 0.004, sb.size.z + 0.004),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.22, depthWrite: false }));
      m.position.copy(sb.pos);
      m.add(new THREE.LineSegments(new THREE.EdgesGeometry(m.geometry), new THREE.LineBasicMaterial({ color })));
      m.userData.pick = { kind: 'ghost', slot: gh.slot, ok: gh.ok, reason: gh.reason };
      m.renderOrder = 10;
      ghostRoot.add(m);
    }
  }

  function setCablePoints(list, b) {
    pointRoot.children.slice().forEach(c => { pointRoot.remove(c); disposeTree(c); });
    for (const cp of list) {
      const color = cp.connected ? 0x3cff8f : 0xffc531;
      const m = new THREE.Mesh(new THREE.SphereGeometry(cp.id === 'mb24' ? 0.014 : 0.011, 16, 12),
        new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.75, depthTest: false }));
      m.position.copy(cablePoint(cp.id, b));
      m.renderOrder = 20;
      m.userData.pick = { kind: 'cable', id: cp.id, connected: cp.connected };
      m.userData.pulse = !cp.connected;
      pointRoot.add(m);
    }
  }

  function setPower(on) { powered = on; applyPower(); }
  function applyPower() {
    for (const g of A.glowMats) { g.mat.emissive.setHex(powered ? g.color : 0x000000); g.mat.emissiveIntensity = g.intensity; }
    caseLight.intensity = powered && rgbOn ? 0.35 : 0;
    if (!powered) A.rgbMats.forEach(m => m.emissive.setHex(0x000000));
  }

  /** ПК на стеллаже: [{ build, label }] по местам 0..2 (null — пусто). */
  function setParked(list) {
    rackPCs.children.slice().forEach(c => { rackPCs.remove(c); disposeTree(c); });
    list.forEach((pc, i) => {
      rackHits[i].userData.interact.label = pc ? pc.label : '';
      rackHits[i].visible = !!pc;
      if (!pc) return;
      const { result: g } = collectAnim(() => buildWholePC(pc.build));
      g.position.set(RACK.x + 0.02, RACK.top + CASE.H / 2 + 0.012, RACK_Z[i]);
      g.rotation.y = Math.PI / 2;
      g.traverse(c => { if (c.isMesh) { c.castShadow = false; c.receiveShadow = false; } });
      const tag = plane(0.2, 0.06, new THREE.MeshBasicMaterial({ map: labelTex(pc.tag, { bg: pc.own ? '#2e7dd1' : '#ffcc33', fg: pc.own ? '#fff' : '#111', font: 'bold 34px Arial', w: 256, h: 76 }) }));
      tag.position.set(0.0, -CASE.H / 2 + 0.06, CASE.W / 2 + 0.03);
      g.add(tag);
      rackPCs.add(g);
    });
  }

  // ── Режимы камеры ─────────────────────────────────────────────────────────
  // walk — ходьба; build — верстак (орбитальная камера); screen — смотрим на монитор; fly — перелёт
  let mode = 'walk';
  const player = { x: 1.6, z: 2.8, yaw: 0.35, pitch: -0.12 };
  const moveKeys = { f: 0, b: 0, l: 0, r: 0, run: false };
  const joy = { x: 0, y: 0 };
  let inputEnabled = true;
  const HOME = { pos: new THREE.Vector3(0.42, 1.34, 1.18), target: CASE_POS.clone().add(new THREE.Vector3(0.16, -0.02, 0)) };
  const HOME_WIDE = { pos: HOME.pos.clone(), target: HOME.target.clone() };
  const lookDir = (yaw, pitch) => new THREE.Vector3(-Math.sin(yaw) * Math.cos(pitch), Math.sin(pitch), -Math.cos(yaw) * Math.cos(pitch));
  function walkCam() {
    camera.position.set(player.x, EYE, player.z);
    camera.lookAt(camera.position.clone().add(lookDir(player.yaw, player.pitch)));
  }
  let fly = null;
  function flyTo(pos, target, dur, done) {
    const fromT = mode === 'build' ? controls.target.clone() : camera.position.clone().add(camera.getWorldDirection(new THREE.Vector3()).multiplyScalar(0.8));
    fly = { fromP: camera.position.clone(), toP: pos.clone(), fromT, toT: target.clone(), t0: performance.now(), dur, done };
  }
  function setMode(m) {
    mode = m;
    controls.enabled = m === 'build';
    if (m === 'build') { controls.target.copy(HOME.target); controls.update(); }
    handlers.mode(m);
  }
  function enterBuild() {
    if (document.pointerLockElement) document.exitPointerLock();
    targetSet(null);
    mode = 'fly';
    handlers.mode('fly');
    flyTo(HOME.pos, HOME.target, 700, () => setMode('build'));
  }
  function exitToWalk() {
    Object.assign(player, BENCH_STAND);
    const p = new THREE.Vector3(player.x, EYE, player.z);
    const fromMode = mode;
    mode = 'fly';
    controls.enabled = false;
    handlers.mode('fly');
    const t = fromMode === 'screen-office'
      ? (Object.assign(player, { x: OFFICE.x - 1.15, z: OFFICE.z, yaw: Math.PI / 2, pitch: -0.25 }), new THREE.Vector3(OFFICE.x - 1.15, EYE, OFFICE.z))
      : p;
    flyTo(t, t.clone().add(lookDir(player.yaw, player.pitch)), 650, () => setMode('walk'));
  }
  function resetCamera() { if (mode === 'build') { mode = 'fly'; controls.enabled = false; flyTo(HOME.pos, HOME.target, 600, () => setMode('build')); } }
  function lookAtScreen(cb) {
    const t = mon.localToWorld(new THREE.Vector3(0, 0.27, 0));
    const p = mon.localToWorld(new THREE.Vector3(0, 0.29, 0.62));
    mode = 'fly'; controls.enabled = false; handlers.mode('fly');
    flyTo(p, t, 650, () => { mode = 'screen-bench'; handlers.mode('screen-bench'); cb && cb(); });
  }
  function backToBench() { mode = 'fly'; flyTo(HOME.pos, HOME.target, 600, () => setMode('build')); }
  function lookAtOffice(cb) {
    if (document.pointerLockElement) document.exitPointerLock();
    targetSet(null);
    const t = omon.localToWorld(new THREE.Vector3(0, 0.32, 0));
    const p = omon.localToWorld(new THREE.Vector3(-0.6, 0.33, 0));
    mode = 'fly'; handlers.mode('fly');
    flyTo(p, t, 650, () => { mode = 'screen-office'; handlers.mode('screen-office'); cb && cb(); });
  }

  // ── Ввод: клавиатура, мышь, сенсор ────────────────────────────────────────
  const handlers = { pick: () => {}, hover: () => {}, interact: () => {}, target: () => {}, mode: () => {}, lock: () => {} };
  const KEYMAP = { KeyW: 'f', ArrowUp: 'f', KeyS: 'b', ArrowDown: 'b', KeyA: 'l', ArrowLeft: 'l', KeyD: 'r', ArrowRight: 'r' };
  addEventListener('keydown', e => {
    if (!inputEnabled || e.target.closest?.('input,textarea')) return;
    if (KEYMAP[e.code]) { moveKeys[KEYMAP[e.code]] = 1; if (mode === 'walk') e.preventDefault(); }
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') moveKeys.run = true;
  });
  addEventListener('keyup', e => {
    if (KEYMAP[e.code]) moveKeys[KEYMAP[e.code]] = 0;
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') moveKeys.run = false;
  });
  addEventListener('blur', () => { moveKeys.f = moveKeys.b = moveKeys.l = moveKeys.r = 0; });

  const sens = () => 0.0022 * (handlers.sens ? handlers.sens() : 1);
  function look(dx, dy) {
    player.yaw -= dx * sens();
    player.pitch = THREE.MathUtils.clamp(player.pitch - dy * sens(), -1.35, 1.35);
  }
  document.addEventListener('pointerlockchange', () => handlers.lock(document.pointerLockElement === canvas));
  function lock() {
    if (matchMedia('(pointer: coarse)').matches) return;
    try { const r = canvas.requestPointerLock(); if (r && r.catch) r.catch(() => {}); } catch { /* нет поддержки */ }
  }

  // Мышь
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  let hover = null;
  const hoverBox = new THREE.BoxHelper(new THREE.Object3D(), 0xffcc33);
  hoverBox.visible = false;
  scene.add(hoverBox);

  function pickAt(clientX, clientY) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((clientX - r.left) / r.width) * 2 - 1, -((clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const targets = [...pointRoot.children, ...ghostRoot.children, ...Object.values(partGroups)];
    const hitsList = ray.intersectObjects(targets, true);
    const order = { cable: 0, ghost: 1, part: 2 };
    let best = null;
    for (const h of hitsList) {
      let o = h.object;
      while (o && !o.userData.pick) o = o.parent;
      if (!o) continue;
      const pk = o.userData.pick;
      if (!best || order[pk.kind] < order[best.pick.kind]) best = { pick: pk, obj: o, dist: h.distance };
      if (pk.kind === 'cable') break;
    }
    if (best && best.pick.kind === 'part' && best.pick.slot === 'case') {
      const find = fn => hitsList.find(h => { let o = h.object; while (o && !o.userData.pick) o = o.parent; return o && fn(o.userData.pick); });
      const inner = find(pk => pk.kind === 'part' && pk.slot !== 'case');
      const caseHit = find(pk => pk.slot === 'case');
      if (inner && caseHit && inner.distance < caseHit.distance + 0.001) {
        let o = inner.object; while (!o.userData.pick) o = o.parent;
        best = { pick: o.userData.pick, obj: o };
      }
    }
    return best;
  }

  let down = null;
  let dragLook = null;
  canvas.addEventListener('pointerdown', e => {
    canvas.focus({ preventScroll: true });
    down = { x: e.clientX, y: e.clientY, t: performance.now(), id: e.pointerId, type: e.pointerType };
    if (mode === 'walk' && e.pointerType !== 'touch' && !document.pointerLockElement) dragLook = { x: e.clientX, y: e.clientY };
  });
  addEventListener('pointerup', e => {
    dragLook = null;
    if (!down || e.pointerId !== down.id) return;
    const moved = Math.hypot(e.clientX - down.x, e.clientY - down.y);
    const d = down; down = null;
    if (e.target !== canvas) return;
    if (moved > 6) return;
    if (mode === 'walk') {
      if (d.type === 'touch') { if (target) handlers.interact(target); return; }
      if (document.pointerLockElement === canvas) { if (target) handlers.interact(target); }
      else lock();
      return;
    }
    if (mode !== 'build') return;
    const hit = pickAt(e.clientX, e.clientY);
    handlers.pick(hit ? hit.pick : null, e.clientX, e.clientY);
  });
  addEventListener('pointermove', e => {
    if (mode === 'walk') {
      if (document.pointerLockElement === canvas) look(e.movementX, e.movementY);
      else if (dragLook) { look((e.clientX - dragLook.x) * 1.4, (e.clientY - dragLook.y) * 1.4); dragLook = { x: e.clientX, y: e.clientY }; }
      return;
    }
    if (mode !== 'build' || e.target !== canvas || e.pointerType === 'touch') return;
    const hit = pickAt(e.clientX, e.clientY);
    const key = hit ? JSON.stringify(hit.pick) : null;
    if (key !== (hover && hover.key)) {
      hover = hit ? { ...hit, key } : null;
      if (hover && hover.pick.kind === 'part') { hoverBox.setFromObject(hover.obj); hoverBox.visible = true; }
      else hoverBox.visible = false;
      ghostRoot.children.forEach(g => { g.material.opacity = hover && hover.obj === g ? 0.45 : 0.22; });
      canvas.style.cursor = hover ? 'pointer' : 'grab';
    }
    handlers.hover(hover ? hover.pick : null, e.clientX, e.clientY);
  });
  canvas.addEventListener('pointerleave', () => { hoverBox.visible = false; handlers.hover(null); });

  // Сенсор: левая половина — джойстик (рисует main), правая — обзор
  const touchLook = new Map();
  canvas.addEventListener('touchstart', e => {
    if (mode !== 'walk') return;
    for (const t of e.changedTouches) if (t.clientX > innerWidth * 0.4) touchLook.set(t.identifier, { x: t.clientX, y: t.clientY });
  }, { passive: true });
  canvas.addEventListener('touchmove', e => {
    if (mode !== 'walk') return;
    for (const t of e.changedTouches) {
      const p = touchLook.get(t.identifier);
      if (!p) continue;
      look((t.clientX - p.x) * 2.2, (t.clientY - p.y) * 2.2);
      touchLook.set(t.identifier, { x: t.clientX, y: t.clientY });
    }
  }, { passive: true });
  const endTouch = e => { for (const t of e.changedTouches) touchLook.delete(t.identifier); };
  canvas.addEventListener('touchend', endTouch);
  canvas.addEventListener('touchcancel', endTouch);

  // ── Цель взгляда в режиме ходьбы ──────────────────────────────────────────
  let target = null;
  function targetSet(t) {
    const key = t ? t.id + '|' + t.label : null;
    if (key === (target ? target.id + '|' + target.label : null)) return;
    target = t;
    handlers.target(t);
  }
  const center = new THREE.Vector2(0, 0);
  function updateTarget() {
    ray.setFromCamera(center, camera);
    ray.far = 2.4;
    const h = ray.intersectObjects(hits.filter(m => m.visible), false)[0];
    ray.far = Infinity;
    targetSet(h ? { ...h.object.userData.interact } : null);
  }

  function collide(x, z) {
    x = THREE.MathUtils.clamp(x, ROOM.x0 + RADIUS, ROOM.x1 - RADIUS);
    z = THREE.MathUtils.clamp(z, ROOM.z0 + RADIUS, ROOM.z1 - RADIUS);
    for (const [ax, az, bx, bz] of OBSTACLES) {
      const nx = THREE.MathUtils.clamp(x, ax, bx), nz = THREE.MathUtils.clamp(z, az, bz);
      const dx = x - nx, dz = z - nz, d = Math.hypot(dx, dz);
      if (d < RADIUS) {
        if (d < 1e-6) { // внутри — выталкиваем по ближайшей стороне
          const opts = [[ax - RADIUS, z, x - ax], [bx + RADIUS, z, bx - x], [x, az - RADIUS, z - az], [x, bz + RADIUS, bz - z]].sort((a, b) => a[2] - b[2]);
          x = opts[0][0]; z = opts[0][1];
        } else { x = nx + dx / d * RADIUS; z = nz + dz / d * RADIUS; }
      }
    }
    return [x, z];
  }

  function walk(dt) {
    let f = moveKeys.f - moveKeys.b - joy.y, s = moveKeys.r - moveKeys.l + joy.x;
    const len = Math.hypot(f, s);
    if (len > 1) { f /= len; s /= len; }
    if (len > 0.01) {
      const sp = (moveKeys.run ? 3.4 : 2.1) * dt;
      const fx = -Math.sin(player.yaw), fz = -Math.cos(player.yaw);
      const rx = Math.cos(player.yaw), rz = -Math.sin(player.yaw);
      const [x, z] = collide(player.x + (fx * f + rx * s) * sp, player.z + (fz * f + rz * s) * sp);
      player.x = x; player.z = z;
    }
    walkCam();
  }

  // ── Размер окна ───────────────────────────────────────────────────────────
  let narrowPrev = null;
  function resize() {
    const w = container.clientWidth, h = container.clientHeight;
    renderer.setSize(w, h);
    const aspect = w / h;
    camera.aspect = aspect;
    camera.fov = aspect >= 1.3 ? 60 : Math.min(80, THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(30)) * 1.3 / aspect)));
    camera.updateProjectionMatrix();
    const narrow = aspect < 1.1;
    HOME.target.copy(HOME_WIDE.target);
    HOME.pos.copy(HOME_WIDE.pos);
    if (narrow) {
      HOME.target.x = CASE_POS.x + 0.01;
      HOME.target.y = CASE_POS.y - 0.03;
      const dir = HOME_WIDE.pos.clone().sub(HOME_WIDE.target);
      HOME.pos.copy(HOME.target).add(dir.multiplyScalar(aspect < 0.7 ? 0.62 : 0.8));
      HOME.pos.x = HOME.target.x + 0.06;
    } else {
      const dir = HOME_WIDE.pos.clone().sub(HOME_WIDE.target);
      HOME.pos.copy(HOME.target).add(dir.multiplyScalar(0.72));
    }
    if (narrowPrev !== null && narrowPrev !== narrow && mode === 'build') resetCamera();
    narrowPrev = narrow;
  }
  addEventListener('resize', resize);
  resize();
  walkCam();

  // ── Цикл отрисовки ────────────────────────────────────────────────────────
  let last = performance.now();
  let onFrame = () => {};
  function loop(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    if (anim) {
      const k = Math.min(1, (now - anim.t0) / anim.dur);
      anim.g.position.lerpVectors(anim.from, anim.to, 1 - Math.pow(1 - k, 3));
      if (k >= 1) anim = null;
    }
    if (fly) {
      const k = Math.min(1, (now - fly.t0) / fly.dur);
      const e = k < 0.5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2;
      camera.position.lerpVectors(fly.fromP, fly.toP, e);
      const t = new THREE.Vector3().lerpVectors(fly.fromT, fly.toT, e);
      camera.lookAt(t);
      if (k >= 1) { const f = fly; fly = null; controls.target.copy(f.toT); f.done && f.done(); }
    } else if (mode === 'walk') {
      if (inputEnabled) walk(dt); else walkCam();
      updateTarget();
    } else if (mode === 'build') controls.update();
    if (powered) {
      for (const s of A.spinners) s.obj.rotation.z += s.speed * dt;
      const hue = (now / 4000) % 1;
      A.rgbMats.forEach((m, i) => { m.emissive.setHSL((hue + i * 0.07) % 1, 1, 0.5); m.emissiveIntensity = 1.6; });
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
    if (mode !== 'build') hoverBox.visible = false;
    onFrame(now, dt);
    renderer.render(scene, camera);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  return {
    setBuild, setGhosts, setCablePoints, setPower, blowDust, setParked,
    enterBuild, exitToWalk, resetCamera, lookAtScreen, backToBench, lookAtOffice, lock,
    get mode() { return mode; },
    get target() { return target; },
    set inputEnabled(v) { inputEnabled = v; if (!v) { moveKeys.f = moveKeys.b = moveKeys.l = moveKeys.r = 0; joy.x = joy.y = 0; } },
    setJoystick(x, y) { joy.x = x; joy.y = y; },
    screen: { canvas: scrCanvas, texture: scrTex },
    office: { canvas: offCanvas, texture: offTex },
    board: { canvas: boardCanvas, texture: boardTex },
    on(name, fn) { handlers[name] = fn; },
    set onFrame(fn) { onFrame = fn; },
    renderer, camera, caseRoot, ghostRoot, pointRoot, player,
    teleport(x, z, yaw, pitch = -0.1) { Object.assign(player, { x, z, yaw, pitch }); walkCam(); },
    /** экранные координаты точки сцены (для автотестов) */
    project(obj) { const v = new THREE.Vector3(); obj.getWorldPosition(v); v.project(camera); const r = canvas.getBoundingClientRect(); return { x: r.left + (v.x + 1) / 2 * r.width, y: r.top + (1 - v.y) / 2 * r.height }; }
  };
}
