// Звуки генерируются через Web Audio API — никаких аудиофайлов.

let ctx = null;
let enabled = true;

export function setSoundEnabled(v) { enabled = !!v; }

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

function tone(freq, dur = 0.08, type = 'square', vol = 0.05, when = 0, slideTo = null) {
  if (!enabled) return;
  const a = ac();
  if (!a) return;
  const t0 = a.currentTime + when;
  const o = a.createOscillator();
  const g = a.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t0 + dur);
  g.gain.setValueAtTime(vol, t0);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g).connect(a.destination);
  o.start(t0);
  o.stop(t0 + dur + 0.02);
}

export const sfx = {
  click: () => tone(660, 0.04, 'square', 0.03),
  tick:  () => tone(1200, 0.025, 'square', 0.02),
  coin:  () => { tone(988, 0.07, 'square', 0.04); tone(1319, 0.12, 'square', 0.04, 0.07); },
  win:   () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.16, 'triangle', 0.07, i * 0.09)),
  bigWin:() => [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.2, 'triangle', 0.08, i * 0.08)),
  lose:  () => tone(320, 0.45, 'sawtooth', 0.05, 0, 90),
  open:  () => tone(220, 0.25, 'triangle', 0.05, 0, 660),
  error: () => { tone(200, 0.08, 'square', 0.04); tone(160, 0.12, 'square', 0.04, 0.09); }
};
