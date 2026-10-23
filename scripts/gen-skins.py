#!/usr/bin/env python3
"""
Генерирует js/skins.js из открытой базы ByMykel/CSGO-API (skins.json).
Картинки — официальный CDN Steam. Цены — примерные рыночные в «монетах» (1 ◆ ≈ 1 цент).

Запуск:
  curl -L -o /tmp/skins.json https://bymykel.github.io/CSGO-API/api/en/skins.json
  python3 scripts/gen-skins.py /tmp/skins.json
"""
import json, re, sys, hashlib

SRC = sys.argv[1] if len(sys.argv) > 1 else '/tmp/skins.json'

# (точное название в CS2, цена в монетах)
PICK = [
    # ── дешёвые ──
    ('P250 | Sand Dune', 10), ('Nova | Predator', 12), ('MP7 | Army Recon', 15),
    ('UMP-45 | Urban DDPAT', 16), ('G3SG1 | Desert Storm', 18), ('SSG 08 | Sand Dune', 20),
    ('FAMAS | Colony', 25), ('MAC-10 | Silver', 45), ('Galil AR | Sandstorm', 60),
    ('Tec-9 | Isaac', 55), ('P90 | Elite Build', 60), ('MP9 | Ruby Poison Dart', 80),
    ('Negev | Power Loader', 90), ('M249 | Emerald Poison Dart', 95), ('USP-S | Torque', 120),
    ('AK-47 | Elite Build', 200), ('Dual Berettas | Cobra Strike', 190), ('Five-SeveN | Monkey Business', 210),
    ('UMP-45 | Primal Saber', 220), ('XM1014 | Tranquility', 230), ('P250 | Asiimov', 300),
    ('MP7 | Nemesis', 320), ('Nova | Hyper Beast', 330), ('Tec-9 | Fuel Injector', 340),
    ('MAG-7 | Justice', 350), ('AK-47 | Slate', 380), ('CZ75-Auto | Victoria', 420),
    ('MAC-10 | Neon Rider', 450), ('AWP | Atheris', 480), ('P2000 | Fire Elemental', 500),
    ('P90 | Asiimov', 520), ('MP9 | Hydra', 600), ('Five-SeveN | Hyper Beast', 620),
    ('FAMAS | Roll Cage', 650), ('AWP | Worm God', 380), ('Glock-18 | Water Elemental', 350),
    ('Desert Eagle | Conspiracy', 400),
    # ── средние ──
    ('SG 553 | Integrale', 1000), ('Glock-18 | Vogue', 1100), ('AWP | Elite Build', 1200),
    ('M4A4 | Desert-Strike', 1300), ('USP-S | Neo-Noir', 1500), ('Galil AR | Chatterbox', 1600),
    ('SSG 08 | Dragonfire', 1700), ('Desert Eagle | Kumicho Dragon', 1800), ('M4A4 | Desolate Space', 2000),
    ('M4A1-S | Cyrex', 2400), ('M4A4 | The Emperor', 2500), ('M4A1-S | Decimator', 2600),
    ('SSG 08 | Blood in the Water', 2700), ('M4A4 | Hellfire', 2800), ('AK-47 | Redline', 3000),
    ('M4A1-S | Hyper Beast', 3100), ('M4A4 | Neo-Noir', 3200), ('USP-S | The Traitor', 3300),
    ('AWP | Redline', 3500), ('M4A4 | Buzz Kill', 3600), ('AK-47 | Neon Revolution', 4000),
    ('Desert Eagle | Code Red', 4200), ('AWP | Hyper Beast', 4500), ('AWP | Electric Hive', 4800),
    ('AWP | Neo-Noir', 5200), ('AK-47 | Neon Rider', 6000), ('AUG | Akihabara Accept', 6500),
    ('Desert Eagle | Printstream', 6800), ('AWP | Wildfire', 7000), ('AK-47 | The Empress', 7200),
    ('USP-S | Printstream', 7500), ('AK-47 | Asiimov', 7800), ('AWP | Containment Breach', 8000),
    ('M4A1-S | Golden Coil', 8200), ('AK-47 | Bloodsport', 8500), ('USP-S | Kill Confirmed', 9000),
    # ── дорогие ──
    ('AK-47 | Vulcan', 12000), ('AK-47 | Fuel Injector', 12500), ('AWP | Asiimov', 13000),
    ('M4A4 | Asiimov', 15000), ('M4A1-S | Printstream', 16000), ('AK-47 | Case Hardened', 30000),
    ('AWP | Lightning Strike', 32000), ('M4A1-S | Hot Rod', 34000), ('Desert Eagle | Blaze', 50000),
    ('AK-47 | Fire Serpent', 60000), ('M4A4 | Poseidon', 65000), ('Glock-18 | Fade', 120000),
    ('AWP | Fade', 125000), ('M4A1-S | Welcome to the Jungle', 150000), ('AWP | Medusa', 350000),
    ('M4A4 | Howl', 400000), ('AK-47 | Gold Arabesque', 420000), ('AK-47 | Wild Lotus', 500000),
    ('AWP | Gungnir', 900000), ('AWP | Dragon Lore', 1000000),
    # ── ножи ──
    ('★ Navaja Knife | Case Hardened', 10000), ('★ Gut Knife | Fade', 15000), ('★ Shadow Daggers | Fade', 16000),
    ('★ Falchion Knife | Crimson Web', 17000), ('★ Huntsman Knife | Slaughter', 25000), ('★ Ursus Knife | Tiger Tooth', 30000),
    ('★ Flip Knife | Fade', 50000), ('★ Bayonet | Tiger Tooth', 60000), ('★ M9 Bayonet | Autotronic', 90000),
    ('★ Talon Knife | Fade', 95000), ('★ Karambit | Tiger Tooth', 120000), ('★ Karambit | Crimson Web', 125000),
    ('★ Skeleton Knife | Fade', 130000), ('★ Karambit | Lore', 150000), ('★ M9 Bayonet | Marble Fade', 155000),
    ('★ Karambit | Fade', 200000), ('★ Butterfly Knife | Slaughter', 210000), ('★ Butterfly Knife | Fade', 250000),
    # ── перчатки ──
    ('★ Bloodhound Gloves | Charred', 12000), ('★ Hydra Gloves | Case Hardened', 15000),
    ('★ Hand Wraps | Cobalt Skulls', 30000), ('★ Driver Gloves | King Snake', 40000),
    ('★ Moto Gloves | Spearmint', 50000), ('★ Specialist Gloves | Crimson Kimono', 90000),
    ('★ Sport Gloves | Vice', 150000), ("★ Sport Gloves | Pandora's Box", 300000),
]

RARITY = {
    'rarity_common_weapon': 'consumer', 'rarity_uncommon_weapon': 'industrial',
    'rarity_rare_weapon': 'milspec', 'rarity_mythical_weapon': 'restricted',
    'rarity_legendary_weapon': 'classified', 'rarity_ancient_weapon': 'covert',
}
SNIPERS = {'weapon_awp', 'weapon_ssg08', 'weapon_scar20', 'weapon_g3sg1'}
CAT = {
    'csgo_inventory_weapon_category_pistols': 'pistol', 'csgo_inventory_weapon_category_smgs': 'smg',
    'csgo_inventory_weapon_category_rifles': 'rifle', 'csgo_inventory_weapon_category_heavy': 'heavy',
    'sfui_invpanel_filter_melee': 'knife', 'sfui_invpanel_filter_gloves': 'gloves',
}

data = json.load(open(SRC, encoding='utf-8'))
by_name = {}
for s in data:
    by_name.setdefault(s['name'], s)

out, missing, crates = [], [], {}
for name, price in PICK:
    s = by_name.get(name)
    if not s:
        missing.append(name); continue
    weapon, skin = [x.strip() for x in name.split('|', 1)]
    wid = s['weapon']['id']
    cat_id = (s.get('category') or {}).get('id', '')
    cat = 'sniper' if wid in SNIPERS else CAT.get(cat_id) or ('knife' if '★' in name and 'Gloves' not in name and 'Wraps' not in name else 'gloves' if '★' in name else 'rifle')
    rarity = 'special' if name.startswith('★') else RARITY.get(s['rarity']['id'], 'milspec')
    img = s['image'].split('/economy/image/', 1)[1]
    iid = re.sub(r'[^a-z0-9]+', '_', name.lower().replace('★', '')).strip('_')
    out.append([iid, weapon, skin, cat, rarity, price, img])
    for c in s.get('crates') or []:
        if 'Case' in c['name'] and c.get('image'):
            crates.setdefault(c['name'], c['image'].split('/economy/image/', 1)[1])

if missing:
    print('НЕ НАЙДЕНО:', *missing, sep='\n  ', file=sys.stderr)

WANT_CRATES = ['Operation Phoenix Weapon Case', 'Chroma 2 Case', 'Gamma Case', 'Spectrum Case',
               'Operation Breakout Weapon Case', 'Huntsman Weapon Case', 'Prisma Case', 'Clutch Case']
case_imgs = {k: crates[k] for k in WANT_CRATES if k in crates}

with open('js/skins.js', 'w', encoding='utf-8') as f:
    f.write('// АВТОМАТИЧЕСКИ СГЕНЕРИРОВАНО scripts/gen-skins.py — не редактируйте вручную.\n')
    f.write('// Источник: github.com/ByMykel/CSGO-API. Картинки © Valve, загружаются с CDN Steam.\n')
    f.write('// [id, оружие, скин, категория, редкость, цена, путь картинки на CDN]\n')
    f.write('export const SKINS = [\n')
    for row in sorted(out, key=lambda r: r[5]):
        f.write('  ' + json.dumps(row, ensure_ascii=False) + ',\n')
    f.write('];\n\n')
    f.write('export const CRATE_IMAGES = ' + json.dumps(case_imgs, ensure_ascii=False, indent=2) + ';\n')
print(f'OK: {len(out)} скинов, {len(case_imgs)} картинок кейсов, не найдено: {len(missing)}')
