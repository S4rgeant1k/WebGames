// SVG-иконки интерфейса (вместо эмодзи — одинаково выглядят на всех системах).

const svg = (body, vb = '0 0 24 24') => `<svg class="ic" viewBox="${vb}" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;

export const ICON = {
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  cart: svg('<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.6 12.2a1 1 0 0 0 1 .8h9.7a1 1 0 0 0 1-.8L21 7H6"/>'),
  jobs: svg('<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 12h18"/>'),
  box: svg('<path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/>'),
  bank: svg('<path d="M3 10l9-6 9 6M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18"/>'),
  gear: svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>'),
  chart: svg('<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>'),
  info: svg('<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>'),
  temp: svg('<path d="M14 14.8V4a2 2 0 1 0-4 0v10.8a4 4 0 1 0 4 0z"/><path d="M12 10v6"/>'),
  power: svg('<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.8 0"/>'),
  plug: svg('<path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8zM12 18v4"/>'),
  wind: svg('<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>'),
  camera: svg('<path d="M15 10l5-3v10l-5-3z"/><rect x="2" y="6" width="13" height="12" rx="2"/>'),
  exit: svg('<path d="M10 17l-5-5 5-5M5 12h11"/><path d="M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4"/>'),
  star: '<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"/></svg>',
  wrench: svg('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z"/>'),
  user: svg('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  monitor: svg('<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),
  check: svg('<path d="M4 12.5l5 5L20 6.5"/>'),
  x: svg('<path d="M6 6l12 12M18 6L6 18"/>'),
  lock: svg('<rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  hand: svg('<path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.9-6-2.4l-3.6-3.6a2 2 0 0 1 2.8-2.8L6 14"/>'),
  sound: svg('<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/>'),
  mute: svg('<path d="M11 5L6 9H2v6h4l5 4z"/><path d="M23 9l-6 6M17 9l6 6"/>'),
  door: svg('<path d="M4 21h16M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17"/><circle cx="14.5" cy="12" r="1"/>'),
  menu: svg('<path d="M4 6h16M4 12h16M4 18h16"/>'),
  github: '<svg class="ic" viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
  trash: svg('<path d="M3 6h18M8 6V4h8v2M6 6l1 15h10l1-15"/>'),
  test: svg('<path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-9V3"/>'),
  home: svg('<path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/>'),
  plus: svg('<path d="M12 5v14M5 12h14"/>'),
  rub: svg('<path d="M8 21V3h6a4.5 4.5 0 0 1 0 9H6M6 16h9"/>'),
  minus: svg('<path d="M5 12h14"/>')
};

// Иконки типов деталей (цветные плитки)
const T = (bg, body) => `<svg class="pi" viewBox="0 0 48 48" aria-hidden="true"><rect width="48" height="48" rx="10" fill="${bg}"/>${body}</svg>`;
export const PART_ICON = {
  cpu: T('#3d4a5c', '<rect x="12" y="12" width="24" height="24" rx="2" fill="#c7ccd2"/><rect x="17" y="17" width="14" height="14" fill="#8a929c"/><path stroke="#c7ccd2" stroke-width="2" d="M16 8v4M22 8v4M28 8v4M34 8v4M16 36v4M22 36v4M28 36v4M34 36v4M8 16h4M8 22h4M8 28h4M36 16h4M36 22h4M36 28h4"/>'),
  mb: T('#1f4d33', '<rect x="9" y="8" width="30" height="32" rx="2" fill="#2f6b47"/><rect x="14" y="13" width="10" height="10" fill="#c7ccd2"/><path stroke="#111" stroke-width="2.5" d="M29 12v14M33 12v14M13 30h22M13 35h16"/>'),
  ram: T('#2d3a4a', '<rect x="7" y="17" width="34" height="13" rx="1.5" fill="#1a1f26" stroke="#7fd3ff" stroke-width="1.5"/><path stroke="#c9a227" stroke-width="2" d="M10 33v3M14 33v3M18 33v3M22 33v3M27 33v3M31 33v3M35 33v3M39 33v3"/><rect x="11" y="20" width="6" height="7" fill="#3a4656"/><rect x="21" y="20" width="6" height="7" fill="#3a4656"/><rect x="31" y="20" width="6" height="7" fill="#3a4656"/>'),
  gpu: T('#33302d', '<rect x="5" y="14" width="38" height="20" rx="3" fill="#1d1d1f"/><circle cx="16" cy="24" r="7" fill="#3a3a3e" stroke="#76b900" stroke-width="1.5"/><circle cx="32" cy="24" r="7" fill="#3a3a3e" stroke="#76b900" stroke-width="1.5"/><path stroke="#c9a227" stroke-width="2" d="M10 36h22"/>'),
  storage: T('#3b3f58', '<rect x="8" y="17" width="32" height="14" rx="2" fill="#1d2230"/><rect x="11" y="20" width="16" height="8" rx="1" fill="#6f7bd8"/><circle cx="34" cy="24" r="2" fill="#5fe08a"/>'),
  psu: T('#2b2e33', '<rect x="8" y="11" width="32" height="26" rx="2" fill="#141518"/><circle cx="24" cy="24" r="9" fill="#2b2e33" stroke="#888" stroke-width="1.5"/><path stroke="#888" stroke-width="1.5" d="M24 15v18M15 24h18M18 18l12 12M30 18L18 30"/>'),
  cooler: T('#24445a', '<path fill="#c8d0d8" d="M12 10h24v4H12zM12 16h24v3H12zM12 21h24v3H12zM12 26h24v3H12zM12 31h24v3H12z"/><rect x="20" y="35" width="8" height="4" fill="#c58b4f"/>'),
  case: T('#30343a', '<rect x="14" y="7" width="20" height="34" rx="2" fill="#18191c" stroke="#5c6470" stroke-width="1.5"/><circle cx="24" cy="15" r="3" fill="#3a8cff"/><path stroke="#5c6470" stroke-width="1.5" d="M18 24h12M18 28h12M18 32h12"/>'),
  fan: T('#2c3640', '<circle cx="24" cy="24" r="15" fill="#151a20" stroke="#7a8794" stroke-width="2"/><path fill="#7a8794" d="M24 24c0-7 3-10 7-9-1 4-4 7-7 9zm0 0c7 0 10 3 9 7-4-1-7-4-9-7zm0 0c0 7-3 10-7 9 1-4 4-7 7-9zm0 0c-7 0-10-3-9-7 4 1 7 4 9 7z"/><circle cx="24" cy="24" r="3" fill="#2c3640"/>')
};
