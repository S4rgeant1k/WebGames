// Изображение на мониторе (рисуется в canvas → текстура в 3D).

export function createScreen(canvas, texture) {
  const x = canvas.getContext('2d');
  const W = canvas.width, H = canvas.height;
  let st = { mode: 'off', t0: performance.now() };
  let dirty = true;

  function set(mode, data = {}) {
    st = { mode, t0: performance.now(), ...data };
    dirty = true;
  }

  const mono = (size, color = '#d0d0d0') => { x.font = `${size}px "Courier New", monospace`; x.fillStyle = color; x.textAlign = 'left'; x.textBaseline = 'top'; };
  const sans = (size, color = '#fff', weight = 'bold', align = 'left') => { x.font = `${weight} ${size}px Arial, sans-serif`; x.fillStyle = color; x.textAlign = align; x.textBaseline = 'middle'; };

  function wrap(text, maxW) {
    const words = text.split(' '); const lines = []; let cur = '';
    for (const w of words) { const t = cur ? cur + ' ' + w : w; if (x.measureText(t).width > maxW && cur) { lines.push(cur); cur = w; } else cur = t; }
    if (cur) lines.push(cur);
    return lines;
  }

  function drawPost(el) {
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    const lines = [
      'American Megatrends BIOS v2.21',
      `Материнская плата: ${st.mb || '—'}`,
      `Процессор: ${st.cpu || '—'}`,
      `Память: ${st.ram || 0} МБ ... OK`,
      `Видео: ${st.gpu || 'встроенная графика'}`,
      `Накопители: ${st.drives || 'нет'}`
    ];
    mono(24, '#cfcfcf');
    const n = Math.min(lines.length, Math.floor(el / 180) + 1);
    for (let i = 0; i < n; i++) x.fillText(lines[i], 40, 40 + i * 34);
    if (st.error && el > 1300) {
      mono(26, '#ff5555');
      wrap(st.error, W - 80).forEach((l, i) => x.fillText(l, 40, 300 + i * 34));
      mono(20, '#888');
      x.fillText('Нажмите «Выключить», чтобы исправить проблему', 40, H - 50);
    }
  }

  function drawBoot(el) {
    x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
    const cx = W / 2, cy = H / 2 - 30;
    const s = 46;
    x.fillStyle = '#2b8cff';
    for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) x.fillRect(cx + (dx < 0 ? -s - 3 : 3), cy + (dy < 0 ? -s - 3 : 3), s, s);
    for (let i = 0; i < 6; i++) {
      const a = el / 300 + i * 0.5;
      x.fillStyle = `rgba(255,255,255,${1 - i * 0.15})`;
      x.beginPath(); x.arc(cx + Math.cos(a) * 26, cy + 130 + Math.sin(a) * 26, 4, 0, 7); x.fill();
    }
    sans(22, '#aaa', 'normal', 'center');
    x.fillText(st.install ? 'Установка операционной системы…' : 'Загрузка…', cx, H - 60);
  }

  function drawDesktop(el) {
    const g = x.createLinearGradient(0, 0, W, H);
    g.addColorStop(0, '#0b3d91'); g.addColorStop(1, '#1b8fd6');
    x.fillStyle = g; x.fillRect(0, 0, W, H);
    x.fillStyle = 'rgba(255,255,255,0.08)';
    x.beginPath(); x.ellipse(W * 0.7, H * 0.55, 380, 160, -0.4, 0, 7); x.fill();
    // иконки
    const icons = [['💻', 'Этот компьютер'], ['📊', 'Бенчмарк'], ['🗑️', 'Корзина']];
    icons.forEach(([ic, name], i) => {
      sans(44, '#fff', 'normal', 'center'); x.fillText(ic, 70, 70 + i * 110);
      sans(16, '#fff', 'normal', 'center'); x.fillText(name, 70, 112 + i * 110);
    });
    // окно с характеристиками
    x.fillStyle = 'rgba(20,24,32,0.92)';
    x.fillRect(W - 470, 50, 420, 260);
    x.fillStyle = '#2b8cff'; x.fillRect(W - 470, 50, 420, 34);
    sans(18, '#fff', 'bold'); x.fillText('Сведения о системе', W - 455, 67);
    const rows = [['Процессор', st.cpu], ['Видеокарта', st.gpu || 'встроенная'], ['Память', `${(st.ram || 0) / 1024} ГБ`], ['Накопитель', st.drives], ['Темп. CPU', st.cpuTemp ? st.cpuTemp + ' °C' : '—']];
    rows.forEach(([k, v], i) => {
      sans(17, '#8fa3bf', 'normal'); x.fillText(k, W - 450, 112 + i * 38);
      sans(17, '#fff', 'bold'); x.fillText(String(v || '—').slice(0, 30), W - 320, 112 + i * 38);
    });
    // панель задач
    x.fillStyle = 'rgba(10,12,18,0.9)'; x.fillRect(0, H - 44, W, 44);
    x.fillStyle = '#2b8cff'; x.fillRect(12, H - 36, 28, 28);
    const d = new Date();
    sans(18, '#fff', 'normal', 'right'); x.fillText(d.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }), W - 20, H - 22);
  }

  function drawBench(el) {
    const dur = st.dur || 6000;
    const k = Math.min(1, el / dur);
    x.fillStyle = '#05070c'; x.fillRect(0, 0, W, H);
    // «3D-сцена» бенчмарка: летящие звёзды и вращающийся куб
    const t = el / 1000;
    for (let i = 0; i < 160; i++) {
      const s = (i * 97.13) % 1, r = ((i * 31.7 + t * (0.4 + s)) % 1);
      const a = i * 2.39;
      const px = W / 2 + Math.cos(a) * r * W * 0.7, py = H / 2 + Math.sin(a) * r * H * 0.7;
      x.fillStyle = `rgba(150,200,255,${r})`;
      x.fillRect(px, py, 2 + r * 3, 2 + r * 3);
    }
    x.save();
    x.translate(W / 2, H / 2);
    const pts = [];
    for (let i = 0; i < 8; i++) {
      let [px, py, pz] = [(i & 1) ? 1 : -1, (i & 2) ? 1 : -1, (i & 4) ? 1 : -1];
      let a = t * 1.1, b = t * 0.7;
      [px, pz] = [px * Math.cos(a) - pz * Math.sin(a), px * Math.sin(a) + pz * Math.cos(a)];
      [py, pz] = [py * Math.cos(b) - pz * Math.sin(b), py * Math.sin(b) + pz * Math.cos(b)];
      const f = 260 / (pz + 4);
      pts.push([px * f, py * f]);
    }
    x.strokeStyle = '#ffcc33'; x.lineWidth = 3;
    for (const [a, b] of [[0, 1], [1, 3], [3, 2], [2, 0], [4, 5], [5, 7], [7, 6], [6, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) {
      x.beginPath(); x.moveTo(...pts[a]); x.lineTo(...pts[b]); x.stroke();
    }
    x.restore();
    const fps = Math.max(1, Math.round((st.fps || 60) * (0.9 + Math.sin(el / 230) * 0.08 + Math.random() * 0.04)));
    sans(30, '#fff', 'bold'); x.fillText(`FPS: ${fps}`, 30, 40);
    sans(18, '#9fb3d1', 'normal'); x.fillText(`CPU ${Math.round(40 + (st.cpuTemp - 40) * k)} °C   GPU ${Math.round(40 + ((st.gpuTemp || 40) - 40) * k)} °C`, 30, 78);
    sans(20, '#fff', 'bold', 'right'); x.fillText('3D BENCH SIM', W - 30, 40);
    x.fillStyle = '#222'; x.fillRect(30, H - 40, W - 60, 12);
    x.fillStyle = '#ffcc33'; x.fillRect(30, H - 40, (W - 60) * k, 12);
  }

  function drawResult() {
    drawDesktop(0);
    x.fillStyle = 'rgba(10,14,22,0.95)';
    x.fillRect(W / 2 - 300, H / 2 - 170, 600, 320);
    x.strokeStyle = '#ffcc33'; x.lineWidth = 3; x.strokeRect(W / 2 - 300, H / 2 - 170, 600, 320);
    sans(26, '#ffcc33', 'bold', 'center'); x.fillText('Результат теста', W / 2, H / 2 - 125);
    sans(86, '#fff', 'bold', 'center'); x.fillText(String(st.score), W / 2, H / 2 - 30);
    sans(22, '#9fb3d1', 'normal', 'center'); x.fillText(`≈ ${st.fps} FPS в играх · CPU ${st.cpuTemp} °C · GPU ${st.gpuTemp || '—'} °C`, W / 2, H / 2 + 50);
    if (st.throttle) { sans(20, '#ff7755', 'bold', 'center'); x.fillText('⚠ Перегрев: частоты снижены!', W / 2, H / 2 + 95); }
  }

  function draw(now) {
    const el = now - st.t0;
    switch (st.mode) {
      case 'off': x.fillStyle = '#050505'; x.fillRect(0, 0, W, H); break;
      case 'nosignal':
        x.fillStyle = '#000'; x.fillRect(0, 0, W, H);
        x.fillStyle = '#16213a'; x.fillRect(W / 2 - 170, H / 2 - 40, 340, 80);
        sans(26, '#cfd8ea', 'bold', 'center'); x.fillText('Нет сигнала', W / 2, H / 2);
        break;
      case 'post': drawPost(el); break;
      case 'boot': drawBoot(el); break;
      case 'desktop': drawDesktop(el); break;
      case 'bench': drawBench(el); break;
      case 'result': drawResult(); break;
    }
    texture.needsUpdate = true;
  }

  // перерисовываем, только когда что-то движется
  function tick(now) {
    const animated = ['post', 'boot', 'bench'].includes(st.mode) || (st.mode === 'nosignal' && now - st.t0 < 100);
    if (dirty || animated || (st.mode === 'desktop' && Math.floor(now / 1000) !== st.sec)) {
      draw(now);
      dirty = false;
      st.sec = Math.floor(now / 1000);
    }
  }
  draw(performance.now());
  return { set, tick, get mode() { return st.mode; } };
}
