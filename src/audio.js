// Простые звуки на Web Audio API — без файлов.

let ctx = null;
let enabled = true;
let hum = null;

function ac() {
  if (!ctx) {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return null;
    ctx = new C();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, dur = 0.1, type = 'sine', vol = 0.15, delay = 0, slide = 0) {
  if (!enabled) return;
  const a = ac(); if (!a) return;
  const t = a.currentTime + delay;
  const o = a.createOscillator(), g = a.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(30, freq + slide), t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination);
  o.start(t); o.stop(t + dur + 0.02);
}

function noise(dur = 0.3, vol = 0.2, freq = 1200, delay = 0) {
  if (!enabled) return;
  const a = ac(); if (!a) return;
  const len = Math.floor(a.sampleRate * dur);
  const buf = a.createBuffer(1, len, a.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = a.createBufferSource(); s.buffer = buf;
  const f = a.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = freq; f.Q.value = 0.7;
  const g = a.createGain(); g.gain.value = vol;
  s.connect(f).connect(g).connect(a.destination);
  s.start(a.currentTime + delay);
}

export const sfx = {
  click: () => tone(900, 0.04, 'square', 0.04),
  select: () => tone(660, 0.06, 'triangle', 0.08),
  install: () => { noise(0.06, 0.25, 500); tone(180, 0.09, 'square', 0.08, 0.02, -60); tone(1400, 0.03, 'square', 0.05, 0.07); },
  remove: () => { tone(300, 0.08, 'triangle', 0.08, 0, 200); noise(0.05, 0.15, 900); },
  error: () => { tone(220, 0.12, 'sawtooth', 0.07); tone(170, 0.18, 'sawtooth', 0.07, 0.12); },
  cash: () => { tone(1320, 0.08, 'square', 0.06); tone(1760, 0.16, 'square', 0.06, 0.08); },
  blow: () => noise(0.5, 0.35, 2600),
  cable: () => { tone(500, 0.04, 'square', 0.06); tone(800, 0.04, 'square', 0.05, 0.05); },
  postBeep: () => tone(1000, 0.18, 'square', 0.06),
  beepCode(code) {
    // «1 длинный, 3 коротких» и т.п.
    let t = 0;
    const long = /длин/.test(code), shorts = Number((code.match(/(\d)\s*корот/) || [])[1] || 0);
    if (/повтор/.test(code)) { for (let i = 0; i < 3; i++) { tone(880, 0.45, 'square', 0.06, t); t += 0.65; } return; }
    if (long) { tone(880, 0.5, 'square', 0.06, t); t += 0.7; }
    for (let i = 0; i < shorts; i++) { tone(880, 0.12, 'square', 0.06, t); t += 0.25; }
  },
  levelUp: () => [523, 659, 784, 1046].forEach((f, i) => tone(f, 0.18, 'triangle', 0.1, i * 0.1))
};

export function setHum(on) {
  if (!enabled) on = false;
  const a = on ? ac() : ctx;
  if (!a) return;
  if (on && !hum) {
    const len = a.sampleRate * 2;
    const buf = a.createBuffer(1, len, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    const s = a.createBufferSource(); s.buffer = buf; s.loop = true;
    const f = a.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 380;
    const g = a.createGain(); g.gain.value = 0;
    g.gain.linearRampToValueAtTime(0.05, a.currentTime + 0.8);
    s.connect(f).connect(g).connect(a.destination);
    s.start();
    hum = { s, g };
  } else if (!on && hum) {
    const h = hum; hum = null;
    h.g.gain.linearRampToValueAtTime(0, a.currentTime + 0.5);
    setTimeout(() => h.s.stop(), 600);
  }
}

export function setSound(on) { enabled = on; if (!on) setHum(false); }
