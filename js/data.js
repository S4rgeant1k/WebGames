// Каталог предметов, редкости и кейсы.
// Все цены — виртуальные «монеты». Настоящих денег в игре нет.

export const RARITIES = [
  { id: 'consumer',   name: 'Потребительское',   short: 'ПОТ', color: '#b0c3d9' },
  { id: 'industrial', name: 'Промышленное',      short: 'ПРО', color: '#5e98d9' },
  { id: 'milspec',    name: 'Армейское',         short: 'АРМ', color: '#4b69ff' },
  { id: 'restricted', name: 'Запрещённое',       short: 'ЗАП', color: '#8847ff' },
  { id: 'classified', name: 'Засекреченное',     short: 'ЗАС', color: '#d32ce6' },
  { id: 'covert',     name: 'Тайное',            short: 'ТАЙ', color: '#eb4b4b' },
  { id: 'special',    name: '★ Редкое особое',   short: '★',   color: '#ffd259' }
];

export const RARITY_BY_ID = Object.fromEntries(RARITIES.map(r => [r.id, r]));

export const CATEGORIES = [
  { id: 'pistol', name: 'Пистолеты' },
  { id: 'smg',    name: 'Пистолеты-пулемёты' },
  { id: 'rifle',  name: 'Винтовки' },
  { id: 'sniper', name: 'Снайперские' },
  { id: 'heavy',  name: 'Тяжёлое' },
  { id: 'knife',  name: 'Ножи' },
  { id: 'gloves', name: 'Перчатки' }
];

// [ключ, оружие, скин, категория, редкость, цена]
const RAW = [
  // ── дешёвая лестница для старта ────────────────────────────────
  ['p9_ash',        'П-9',        'Пепельная спираль',    'pistol', 'consumer', 120],
  ['nova_sand',     'Нова',       'Песок и пепел',        'heavy',  'consumer', 180],
  ['p9_dust',       'П-9',        'Песчаная буря',        'pistol', 'consumer', 250],
  ['ump_city',      'УМП-45',     'Городской шторм',      'smg',    'consumer', 320],
  ['p9_viper_dust', 'П-9 «Гадюка»','Песчаная буря',       'pistol', 'consumer', 420],
  ['ssg_dust',      'ССГ-08',     'Песчаная буря',        'sniper', 'consumer', 520],
  ['glock_blue',    'Глок-17',    'Синий ламинат',        'pistol', 'consumer', 600],
  ['mp7_siege',     'МП-7',       'Осадный',              'smg',    'consumer', 700],
  ['famas_phalanx', 'ФАМАС',      'Фаланга',              'rifle',  'consumer', 780],

  // ── промышленное ───────────────────────────────────────────────
  ['usp_neon',      'USP',        'Неоновая сетка',       'pistol', 'industrial', 1100],
  ['p250_steel',    'П-250',      'Стальные заросли',     'pistol', 'industrial', 1450],
  ['ssg_ultra',     'ССГ-08',     'Ультрафиолет',         'sniper', 'industrial', 3600],
  ['galil_blue',    'Галиль',     'Синий ламинат',        'rifle',  'industrial', 1900],
  ['galil_ash',     'Галиль',     'Песок и пепел',        'rifle',  'industrial', 2400],
  ['mp7_moon',      'МП-7',       'Лунная пыль',          'smg',    'industrial', 2050],
  ['ump_moon',      'УМП-45',     'Лунная пыль',          'smg',    'industrial', 1600],

  // ── армейское ──────────────────────────────────────────────────
  ['tec9_toxic',    'Тec-9',      'Токсичный дождь',      'pistol', 'milspec', 2300],
  ['mag7_hardcase', 'МАГ-7',      'Поверхностная закалка','heavy',  'milspec', 2900],
  ['mp9_ivy',       'МП-9',       'Ядовитый плющ',        'smg',    'milspec', 3100],
  ['beretta_cobalt','Беретты',    'Кобальтовый разлом',   'pistol', 'milspec', 3400],
  ['ak_blue',       'АК-47',      'Синий ламинат',        'rifle',  'milspec', 7600],
  ['scout_ivy',     'СКАУТ',      'Ядовитый плющ',        'sniper', 'milspec', 8900],
  ['m4_master',     'М4А4',       'Мастер-класс',         'rifle',  'milspec', 9800],

  // ── запрещённое ────────────────────────────────────────────────
  ['deagle_cobalt', 'Дезерт Игл', 'Кобальтовый разлом',   'pistol', 'restricted', 6800],
  ['p90_asimov',    'P90',        'Азимов',               'smg',    'restricted', 7200],
  ['p250_asimov',   'П-250',      'Азимов',               'pistol', 'restricted', 8200],
  ['vector_neon',   'Вектор',     'Неоновый гонщик',      'smg',    'restricted', 9400],
  ['revolver_blood','Револьвер',  'Кровавая паутина',     'pistol', 'restricted', 9900],
  ['negev_blood',   'Негев',      'Кровавая паутина',     'heavy',  'restricted', 11000],
  ['ak_redline',    'АК-47',      'Красная линия',        'rifle',  'restricted', 19500],
  ['scout_ice',     'СКАУТ',      'Ледяной осколок',      'sniper', 'restricted', 22000],
  ['m4_casehardened','М4А4',      'Поверхностная закалка','rifle',  'restricted', 24000],

  // ── засекреченное ──────────────────────────────────────────────
  ['five7_hyper',   'Five-SeveN', 'Гиперзверь',           'pistol', 'classified', 14500],
  ['bizon_blood',   'ПП-19',      'Кровавая паутина',     'smg',    'classified', 18000],
  ['m249_asimov',   'М249',       'Азимов',               'heavy',  'classified', 21000],
  ['ak_neon',       'АК-47',      'Неоновый гонщик',      'rifle',  'classified', 52000],
  ['awp_asimov',    'AWP',        'Азимов',               'sniper', 'classified', 65000],
  ['m4_howl',       'М4А4',       'Вой',                  'rifle',  'classified', 88000],
  ['awp_hive',      'AWP',        'Электрический улей',   'sniper', 'classified', 96000],

  // ── тайное ─────────────────────────────────────────────────────
  ['deagle_blood',  'Дезерт Игл', 'Кровавая паутина',     'pistol', 'covert', 26000],
  ['mp5_cyber',     'МП-5',       'Киберсекьюрити',       'smg',    'covert', 27500],
  ['glock_gradient','Глок-17',    'Градиент',             'pistol', 'covert', 31500],
  ['nova_hyper',    'Нова',       'Гиперзверь',           'heavy',  'covert', 34000],
  ['m4_dragonking', 'М4А4',       'Драконий король',      'rifle',  'covert', 120000],
  ['scout_casehard','СКАУТ',      'Поверхностная закалка','sniper', 'covert', 130000],
  ['ak_fireserpent','АК-47',      'Огненный змей',        'rifle',  'covert', 145000],
  ['ak_bloodsport', 'АК-47',      'Кровавый спорт',       'rifle',  'covert', 175000],
  ['awp_dragon',    'AWP',        'Драконье пламя',       'sniper', 'covert', 420000],
  ['awp_gungnir',   'AWP',        'Гунгнир',              'sniper', 'covert', 780000],

  // ── ножи и перчатки ────────────────────────────────────────────
  ['knife_hydra_ice',   '★ Гидра',            'Ледяной осколок',      'gloves', 'special', 88000],
  ['knife_flip_ursa',   '★ Складной нож',     'Убийство подтверждено','knife',  'special', 95000],
  ['knife_push_bayonet','★ Штык-нож',         'Поверхностная закалка','knife',  'special', 150000],
  ['knife_wrap_phosphor','★ Обмотки',         'Синий фосфор',         'gloves', 'special', 145000],
  ['knife_huntsman_gold','★ Охотничий нож',   'Золотая лихорадка',    'knife',  'special', 175000],
  ['knife_bayonet_tiger','★ Штык-нож',        'Тигровое сияние',      'knife',  'special', 185000],
  ['knife_driver_royal','★ Водительские',     'Королевская кожа',     'gloves', 'special', 195000],
  ['knife_karambit_grad','★ Керамбит',        'Градиент',             'knife',  'special', 210000],
  ['knife_specops_blood','★ Перчатки спецназа','Кровавая паутина',    'gloves', 'special', 260000],
  ['knife_bloodweb_karam','★ Керамбит',       'Кровавая паутина',     'knife',  'special', 265000],
  ['knife_kukri_ice',   '★ Кукри',            'Ледяной осколок',      'knife',  'special', 300000],
  ['knife_moto_toxic',  '★ Мотоциклетные',    'Токсичный дождь',      'gloves', 'special', 330000],
  ['knife_karambit_marble','★ Керамбит',      'Мраморный градиент',   'knife',  'special', 340000],
  ['knife_sport_pandora','★ Спортивные',      'Пандора',              'gloves', 'special', 415000],
  ['knife_butterfly_wave','★ Бабочка',        'Волны',                'knife',  'special', 430000],
  ['knife_talon_night', '★ Коготь',           'Ночная вахта',         'knife',  'special', 640000]
];

export const ITEMS = RAW.map(([id, weapon, skin, cat, rarity, price]) => ({
  id, weapon, skin, cat, rarity, price
}));

export const ITEM_BY_ID = Object.fromEntries(ITEMS.map(i => [i.id, i]));

// Кейсы. Цена кейса = ожидаемая стоимость содержимого / CASE_RTP (см. economy.js).
export const CASES = [
  {
    id: 'case_starter', name: 'Стартовый ящик', price: 550, color: '#5e98d9',
    desc: 'Дешёвое оружие для первых апгрейдов.',
    pool: [
      ['p9_ash', 14], ['nova_sand', 13], ['p9_dust', 12], ['ump_city', 11],
      ['p9_viper_dust', 10], ['ssg_dust', 9], ['glock_blue', 8], ['mp7_siege', 7],
      ['famas_phalanx', 6], ['usp_neon', 5], ['p250_steel', 3], ['galil_ash', 2]
    ]
  },
  {
    id: 'case_weapon', name: 'Оружейный контейнер', price: 5600, color: '#4b69ff',
    desc: 'Армейское и запрещённое оружие.',
    pool: [
      ['tec9_toxic', 12], ['mag7_hardcase', 11], ['mp9_ivy', 10], ['beretta_cobalt', 10],
      ['galil_blue', 8], ['mp7_moon', 7], ['ak_blue', 9], ['scout_ivy', 7],
      ['m4_master', 7], ['deagle_cobalt', 6], ['p90_asimov', 5], ['p250_asimov', 4],
      ['vector_neon', 2], ['revolver_blood', 1], ['negev_blood', 1]
    ]
  },
  {
    id: 'case_elite', name: 'Элитный кейс', price: 50500, color: '#8847ff',
    desc: 'Засекреченное и тайное оружие.',
    pool: [
      ['ak_redline', 10], ['scout_ice', 9], ['m4_casehardened', 9], ['five7_hyper', 8],
      ['bizon_blood', 8], ['m249_asimov', 7], ['deagle_blood', 6], ['mp5_cyber', 6],
      ['glock_gradient', 6], ['nova_hyper', 5], ['ak_neon', 6], ['m4_howl', 4],
      ['awp_asimov', 5], ['awp_hive', 4], ['ak_fireserpent', 3], ['m4_dragonking', 3],
      ['ak_bloodsport', 2], ['awp_dragon', 1]
    ]
  },
  {
    id: 'case_predator', name: 'Кейс «Хищник»', price: 163000, color: '#eb4b4b',
    desc: 'Топовые винтовки и снайперки.',
    pool: [
      ['ak_neon', 10], ['m4_howl', 9], ['awp_asimov', 9], ['awp_hive', 9],
      ['ak_fireserpent', 8], ['m4_dragonking', 8], ['scout_casehard', 7],
      ['ak_bloodsport', 8], ['awp_dragon', 6], ['awp_gungnir', 2],
      ['knife_hydra_ice', 2], ['knife_wrap_phosphor', 2]
    ]
  },
  {
    id: 'case_trophy', name: 'Трофейный кейс', price: 202000, color: '#ffd259',
    desc: 'Ножи и перчатки. Только ★ редкое особое.',
    pool: [
      ['knife_hydra_ice', 14], ['knife_flip_ursa', 12], ['knife_wrap_phosphor', 11],
      ['knife_push_bayonet', 10], ['knife_huntsman_gold', 9], ['knife_bayonet_tiger', 9],
      ['knife_driver_royal', 8], ['knife_karambit_grad', 7], ['knife_specops_blood', 5],
      ['knife_bloodweb_karam', 4], ['knife_kukri_ice', 4], ['knife_moto_toxic', 3],
      ['knife_karambit_marble', 2], ['knife_sport_pandora', 1.5], ['knife_butterfly_wave', 1],
      ['knife_talon_night', 0.5]
    ]
  }
];

export const CASE_BY_ID = Object.fromEntries(CASES.map(c => [c.id, c]));

// Настройки игры
export const CONFIG = {
  startBalance: 12000,
  upgradeRTP: 0.92,          // доля ставки, возвращаемая игроку на дистанции
  caseRTP: 0.90,
  minChance: 5,              // %
  maxChance: 95,             // %
  sellRatio: 1,              // продажа по полной цене (симулятор)
  consolationChance: 0.25,   // шанс утешительного приза при проигрыше
  consolationRatio: 0.10,    // стоимость приза относительно ставки
  dailyBonus: 6000,
  dailyStreakBonus: 1500,
  demoCredit: 12000,
  demoCreditMinBalance: 1000,
  demoCreditCooldownMs: 10 * 60 * 1000,
  maxHistory: 40,
  storageKey: 'upgrader-sim-save-v1'
};
