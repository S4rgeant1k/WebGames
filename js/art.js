// Графика предметов: стилизованные SVG-силуэты + градиент по названию скина.
// Никаких внешних картинок — всё рисуется кодом, работает офлайн.

const SHAPES = {
  rifle: [
    'M10 40 L58 36 L58 60 L10 66 Z',
    'M58 34 L150 34 L150 60 L58 60 Z',
    'M150 28 L200 30 L200 36 L150 34 Z',
    'M150 36 L202 38 L202 58 L150 60 Z',
    'M202 44 L232 44 L232 50 L202 50 Z',
    'M214 34 L221 34 L221 44 L214 44 Z',
    'M232 43 L240 43 L240 51 L232 51 Z',
    'M96 60 C94 74 88 86 82 94 L62 88 C70 80 76 70 78 60 Z',
    'M130 60 L146 60 L142 86 L128 84 Z'
  ],
  sniper: [
    'M8 38 L70 34 L70 60 L8 64 Z',
    'M70 34 L140 34 L140 56 L70 56 Z',
    'M84 18 L150 18 L150 30 L84 30 Z',
    'M96 30 L104 30 L104 36 L96 36 Z',
    'M132 30 L140 30 L140 36 L132 36 Z',
    'M140 42 L232 42 L232 47 L140 47 Z',
    'M224 36 L231 36 L231 42 L224 42 Z',
    'M232 39 L240 39 L240 50 L232 50 Z',
    'M110 56 L126 56 L124 74 L108 74 Z',
    'M92 56 L106 56 L102 82 L88 80 Z',
    'M176 47 L182 47 L190 74 L183 76 Z',
    'M166 47 L172 47 L164 74 L157 72 Z'
  ],
  smg: [
    'M12 44 L40 40 L40 58 L12 60 Z',
    'M40 36 L120 34 L120 58 L40 58 Z',
    'M120 38 L170 38 L170 56 L120 56 Z',
    'M170 42 L204 42 L204 48 L170 48 Z',
    'M186 36 L192 36 L192 42 L186 42 Z',
    'M204 40 L212 40 L212 50 L204 50 Z',
    'M106 58 L126 58 L122 90 L102 88 Z',
    'M86 58 L100 58 L96 82 L82 80 Z'
  ],
  pistol: [
    'M70 30 L200 30 L200 48 L70 48 Z',
    'M200 34 L214 34 L214 46 L200 46 Z',
    'M60 30 L70 26 L74 36 L64 40 Z',
    'M70 48 L152 48 L152 58 L70 58 Z',
    'M70 58 L110 58 L96 92 L58 86 Z',
    'M112 58 C128 64 128 78 112 82 L110 72 C118 70 118 64 110 60 Z',
    'M188 26 L196 26 L196 32 L188 32 Z'
  ],
  heavy: [
    'M20 40 L60 38 L60 60 L20 62 Z',
    'M60 32 L150 32 L150 58 L60 58 Z',
    'M100 20 L132 20 L132 32 L100 32 Z',
    'M150 40 L228 40 L228 47 L150 47 Z',
    'M228 37 L238 37 L238 50 L228 50 Z',
    'M96 58 L132 58 L132 86 L96 86 Z',
    'M72 58 L88 58 L84 82 L70 80 Z',
    'M176 47 L183 47 L191 76 L184 78 Z',
    'M166 47 L173 47 L164 76 L157 74 Z'
  ],
  knife: [
    'M60 58 L198 36 C214 34 218 44 206 48 L78 68 Z',
    'M50 52 L62 50 L68 68 L56 70 Z',
    'M12 70 L54 58 L62 74 L20 86 Z',
    'M10 78 m-9 0 a9 9 0 1 0 18 0 a9 9 0 1 0 -18 0'
  ],
  gloves: [
    'M62 94 C50 80 50 58 64 44 L72 28 C74 21 85 21 87 28 L89 40 L93 22 C95 15 106 15 108 22 L110 40 L114 20 C116 13 127 13 129 20 L131 42 L135 27 C137 20 148 20 150 27 L152 54 C154 74 146 88 132 94 Z',
    'M64 46 C46 48 34 58 32 71 C31 80 41 84 47 77 L62 62 Z',
    'M60 92 L134 92 L138 100 L56 100 Z'
  ]
};

// Палитры покрасов: выбираются детерминированно по названию скина.
const PALETTES = [
  ['#ff6b6b', '#8b1e3f'], ['#ffd166', '#7a3e00'], ['#4ecdc4', '#0b6b62'],
  ['#a78bfa', '#3b1d8f'], ['#60a5fa', '#123a8a'], ['#f472b6', '#7a1148'],
  ['#34d399', '#0f5c3f'], ['#f97316', '#7c2d12'], ['#e2e8f0', '#475569'],
  ['#facc15', '#713f12'], ['#22d3ee', '#0e4f5c'], ['#c084fc', '#4c1d95']
];

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

// Картинки скинов — официальный CDN Steam. Если основной сервер недоступен,
// пробуем зеркало на Cloudflare, а затем рисуем SVG-силуэт (см. installImageFallback).
export const STEAM_CDN = 'https://community.akamai.steamstatic.com/economy/image/';
export const STEAM_CDN_ALT = 'https://community.cloudflare.steamstatic.com/economy/image/';

export const steamImage = (path, size = '360fx360f', cdn = STEAM_CDN) => `${cdn}${path}/${size}`;

/** Картинка предмета: фото скина из Steam или SVG, если фото нет. */
export function itemArt(item, opts = {}) {
  if (item.img) {
    return `<img class="skin-img" src="${steamImage(item.img)}" data-id="${item.id}" alt="${item.weapon} | ${item.skin}" loading="lazy" decoding="async" referrerpolicy="no-referrer" draggable="false">`;
  }
  return itemSvg(item, opts);
}

/**
 * Глобальный обработчик ошибок загрузки картинок:
 * akamai → cloudflare → SVG-силуэт. findItem(id) возвращает предмет по id.
 */
export function installImageFallback(findItem) {
  document.addEventListener('error', e => {
    const img = e.target;
    if (!(img instanceof HTMLImageElement)) return;
    if (img.classList.contains('skin-img')) {
      if (!img.dataset.alt && img.src.startsWith(STEAM_CDN)) {
        img.dataset.alt = '1';
        img.src = img.src.replace(STEAM_CDN, STEAM_CDN_ALT);
        return;
      }
      const item = findItem(img.dataset.id);
      if (!item) return;
      const tpl = document.createElement('template');
      tpl.innerHTML = itemSvg(item, { uid: Math.random().toString(36).slice(2, 8) }).trim();
      img.replaceWith(tpl.content.firstChild);
    } else if (img.classList.contains('crate-img')) {
      if (!img.dataset.alt && img.src.startsWith(STEAM_CDN)) {
        img.dataset.alt = '1';
        img.src = img.src.replace(STEAM_CDN, STEAM_CDN_ALT);
        return;
      }
      img.remove(); // останется нарисованный CSS-ящик
    }
  }, true);
}

/** SVG-силуэт предмета (запасной вариант, работает офлайн). */
export function itemSvg(item, { uid = 0, bg = true } = {}) {
  const paths = SHAPES[item.cat] || SHAPES.rifle;
  const pal = PALETTES[hashString(item.skin + item.weapon) % PALETTES.length];
  const gid = `g${uid}_${hashString(item.id)}`;
  const isSpecial = item.rarity === 'special';
  const glow = isSpecial ? 0.55 : 0.3;

  return `<svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${item.weapon} | ${item.skin}">
    <defs>
      <linearGradient id="${gid}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${pal[0]}"/>
        <stop offset="55%" stop-color="${pal[1]}"/>
        <stop offset="100%" stop-color="#1b1f2e"/>
      </linearGradient>
      <radialGradient id="${gid}b" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="${pal[0]}" stop-opacity="${glow}"/>
        <stop offset="100%" stop-color="${pal[0]}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    ${bg ? `<ellipse cx="120" cy="52" rx="104" ry="40" fill="url(#${gid}b)"/>` : ''}
    <g fill="url(#${gid})" stroke="rgba(255,255,255,0.16)" stroke-width="1.2" stroke-linejoin="round">
      ${paths.map(d => `<path d="${d}"/>`).join('')}
    </g>
  </svg>`;
}

/** Маленькая иконка категории (для пустых слотов). */
export function categoryIcon(cat, fill = 'rgba(255,255,255,0.10)') {
  const paths = SHAPES[cat] || SHAPES.rifle;
  return `<svg viewBox="0 0 240 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <g fill="${fill}">${paths.map(d => `<path d="${d}"/>`).join('')}</g>
  </svg>`;
}
