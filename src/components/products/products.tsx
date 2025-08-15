// Product data for Bullfrog Spas
const products = [
  {
    id: 1,
    name: "M9",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/nOWYeovpeUeHqQQfr-9mNQ/lnKvUfsEvkW-WZ7f7DLDeg/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/0rWIGXMQb0G3MEa5rRptrA/_-1qjtHKg0S_z0T4i8hYgw/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
    ],
    seats: 10,
    loungeSeats: 3,
    jetpaks: 7,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.79m x 2.39m x 0.96m",
    waterCapacity: "1,800 liter",
    dryWeight: "450 kg",
    filledWeight: "2,250 kg",
    emptyWeight: "450 kg",
    fullWeight: "2,250 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.9,
    reviews: 127,
    description: "A M9 a Bullfrog Spas M szériájának zászlóshajója, amely 10 személynek biztosít luxus spa élményt. 3 lounge ülésével és 7 cserélhető JetPak rendszerével tökéletes választás nagyobb családok és baráti társaságok számára.",
    features: [
      { icon: 'Users', label: "10 Pozíció" },
      { icon: 'Layout', label: "3 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "Jetpak: 7" },
      { icon: 'Droplet', label: "Simplicity Water Care" },
      { icon: 'Ruler', label: "2.79m x 2.39m x 0.96m" }
    ],
    highlights: [
      "Legnagyobb kapacitás az M szériában",
      "Három különböző lounge pozíció",
      "Prémium JetPak™ masszázs rendszer",
      "Energiahatékony FullFoam™ szigetelés",
      "Simplicity™ automatikus vízkezelés"
    ],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™", 
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      },
      {
        name: "Bluetooth audio",
        description: "Vezeték nélküli hangrendszer víz alatti hangszórókkal"
      }
    ]
  },
  {
    id: 2,
    name: "M8",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/nOWYeovpeUeHqQQfr-9mNQ/lnKvUfsEvkW-WZ7f7DLDeg/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/0rWIGXMQb0G3MEa5rRptrA/_-1qjtHKg0S_z0T4i8hYgw/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 2,
    jetpaks: 6,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.39m x 0.96m",
    waterCapacity: "1,650 liter",
    dryWeight: "420 kg",
    filledWeight: "2,070 kg",
    emptyWeight: "420 kg",
    fullWeight: "2,070 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 89,
    description: "A M8 tökéletes egyensúlyt teremt a méret és a funkcionalitás között. 9 ülésével és 2 lounge pozíciójával ideális választás közepes méretű családok számára, akik nem szeretnének kompromisszumot kötni a luxus terén.",
    features: [
      { icon: 'Users', label: "9 Ülés" },
      { icon: 'Layout', label: "2 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "6 JetPak" },
      { icon: 'Droplet', label: "Simplicity Total Water Care" },
      { icon: 'Ruler', label: "2.39m x 2.39m x 0.96m" }
    ],
    highlights: [
      "Kompakt, mégis tágas design",
      "Két ergonomikus lounge ülés",
      "Hatékony JetPak™ elrendezés",
      "Optimalizált vízforgalom",
      "Prémium LED világítás"
    ],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 3,
    name: "M7",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/nOWYeovpeUeHqQQfr-9mNQ/lnKvUfsEvkW-WZ7f7DLDeg/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/0rWIGXMQb0G3MEa5rRptrA/_-1qjtHKg0S_z0T4i8hYgw/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 0,
    jetpaks: 6,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.31m x 2.31m x 0.94m",
    waterCapacity: "1,500 liter",
    dryWeight: "380 kg",
    filledWeight: "1,880 kg",
    emptyWeight: "380 kg",
    fullWeight: "1,880 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.7,
    reviews: 76,
    description: "A M7 a társasági spa élmény bajnoka. 9 hagyományos ülésével minden vendég kényelmesen elfér, míg a kompakt design kisebb teraszokra és udvarokra is tökéletesen illeszkedik.",
    features: [
      { icon: 'Users', label: "9 Ülés" },
      { icon: 'Layout', label: "0 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "6 JetPak" },
      { icon: 'Droplet', label: "Simplicity Total Water Care" },
      { icon: 'Ruler', label: "2.31m x 2.31m x 0.94m" }
    ],
    highlights: [
      "Társasági használatra optimalizált",
      "Kompakt, négyzetes design",
      "Egyenletes JetPak™ eloszlás",
      "Könnyű karbantartás",
      "Kiváló ár-érték arány"
    ],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 4,
    name: "M6",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/nOWYeovpeUeHqQQfr-9mNQ/lnKvUfsEvkW-WZ7f7DLDeg/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/0rWIGXMQb0G3MEa5rRptrA/_-1qjtHKg0S_z0T4i8hYgw/Large/M-Series_Oxidium-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 0,
    jetpaks: 4,
    therapyPumps: '2',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.31m x 2.03m x 0.86m",
    waterCapacity: "1,300 liter",
    dryWeight: "340 kg",
    filledWeight: "1,640 kg",
    emptyWeight: "340 kg",
    fullWeight: "1,640 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.6,
    reviews: 54,
    description: "A M6 a tökéletes belépő modell az M szériába. Kompakt mérete ellenére 7 személynek biztosít kényelmes helyet, míg a 4 JetPak rendszer garantálja a prémium masszázs élményt.",
    features: [
      { icon: 'Users', label: "7 Ülés" },
      { icon: 'Layout', label: "0 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "4 JetPak" },
      { icon: 'Droplet', label: "Simplicity Total Water Care" },
      { icon: 'Ruler', label: "2.31m x 2.03m x 0.86m" }
    ],
    highlights: [
      "Kompakt és hatékony design",
      "Kiváló kezdő modell",
      "Alacsony üzemeltetési költség",
      "Gyors felfűtés",
      "Könnyű telepítés"
    ],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 5,
    name: "A9L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 1,
    jetpaks: 7,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.77m x 2.39m x 0.97m",
    waterCapacity: "1,750 liter",
    dryWeight: "430 kg",
    filledWeight: "2,180 kg",
    emptyWeight: "430 kg",
    fullWeight: "2,180 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 92,
    description: "Az A9L az A széria csúcsmodellje, amely egyesíti a luxust és a funkcionalitást. Az egyedi lounge ülés és a 7 JetPak rendszer garantálja a személyre szabott wellness élményt.",
    features: [
      { icon: 'Users', label: "9 Ülés" },
      { icon: 'Layout', label: "1 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "7 JetPak" },
      { icon: 'Droplet', label: "Simplicity Total Water Care" },
      { icon: 'Ruler', label: "2.77m x 2.39m x 0.97m" }
    ],
    highlights: [
      "A széria legnagyobb modellje",
      "Luxus lounge ülés",
      "Maximális JetPak™ kapacitás",
      "Prémium felszereltség",
      "Kiváló ár-érték arány"
    ],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      },
      {
        name: "Bluetooth audio",
        description: "Vezeték nélküli hangrendszer víz alatti hangszórókkal"
      }
    ]
  },
  {
    id: 6,
    name: "A8",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 0,
    jetpaks: 6,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "1,600 liter",
    dryWeight: "400 kg",
    filledWeight: "2,000 kg",
    emptyWeight: "400 kg",
    fullWeight: "2,000 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.7,
    reviews: 68,
    description: "Az A8 a tökéletes választás azok számára, akik kiváló minőséget keresnek megfizethető áron. 8 ülésével és 6 JetPak rendszerével minden családtag megtalálja a számára ideális masszázs élményt.",
    features: [
      { icon: 'Users', label: "8 Ülés" },
      { icon: 'Layout', label: "0 Lounge Ülés" },
      { icon: 'ShieldCheck', label: "4-6 JetPak" },
      { icon: 'Droplet', label: "Simplicity Total Water Care" },
      { icon: 'Ruler', label: "2.39m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Kiváló ár-érték arány",
      "Flexibilis JetPak™ konfiguráció",
      "Négyzetes, praktikus design",
      "Közepes méretű családoknak",
      "Egyszerű karbantartás"
    ],
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 7,
    name: "A8L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 5,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "1,600 liter",
    dryWeight: "410 kg",
    filledWeight: "2,010 kg",
    emptyWeight: "410 kg",
    fullWeight: "2,010 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 73,
    description: "Az A8L 7 személyes terápiás spa prémium lounger-rel és kapitány székkel - minden ülésben más élmény várja.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 8,
    name: "A7",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 0,
    jetpaks: 5,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.31m x 2.31m x 0.94m",
    waterCapacity: "1,500 liter",
    dryWeight: "380 kg",
    filledWeight: "1,880 kg",
    emptyWeight: "380 kg",
    fullWeight: "1,880 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.6,
    reviews: 61,
    description: "Közepes méretű spa, amely sokkal nagyobbnak érződik - kettős kapitány székekkel és optimalizált helyfelhasználással.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 9,
    name: "A7L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 5,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.31m x 0.94m",
    waterCapacity: "1,550 liter",
    dryWeight: "390 kg",
    filledWeight: "1,940 kg",
    emptyWeight: "390 kg",
    fullWeight: "1,940 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.7,
    reviews: 58,
    description: "Jól arányos közepes méretű spa a legkényelmesebb ülésekkel és prémium lounger-rel teljes test relaxációhoz.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 10,
    name: "A7D",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7D_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7D_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 2,
    jetpaks: 5,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.31m x 0.94m",
    waterCapacity: "1,550 liter",
    dryWeight: "395 kg",
    filledWeight: "1,945 kg",
    emptyWeight: "395 kg",
    fullWeight: "1,945 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 84,
    description: "Exkluzív kettős lounger elrendezés - az egyik legjobban fogyó modell a végső terápiás élményért.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 11,
    name: "A6",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 6,
    loungeSeats: 0,
    jetpaks: 4,
    therapyPumps: '1',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.13m x 2.13m x 0.89m",
    waterCapacity: "1,200 liter",
    dryWeight: "320 kg",
    filledWeight: "1,520 kg",
    emptyWeight: "320 kg",
    fullWeight: "1,520 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.5,
    reviews: 42,
    description: "Prémium helytakarékos spa - kis külső lábnyom, bőséges belső tér városi életstílushoz.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 12,
    name: "A6L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 6,
    loungeSeats: 1,
    jetpaks: 4,
    therapyPumps: '1',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.13m x 2.13m x 0.89m",
    waterCapacity: "1,200 liter",
    dryWeight: "330 kg",
    filledWeight: "1,530 kg",
    emptyWeight: "330 kg",
    fullWeight: "1,530 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.6,
    reviews: 47,
    description: "Kis spa nagy funkcionalitással - népszerű egyedülállók, városlakók és kis családok számára.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 13,
    name: "A5L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A5L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A5L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 5,
    loungeSeats: 1,
    jetpaks: 3,
    therapyPumps: '1',
    auxiliaryControls: '2-funkciós',
    dimensions: "1.98m x 1.98m x 0.86m",
    waterCapacity: "950 liter",
    dryWeight: "280 kg",
    filledWeight: "1,230 kg",
    emptyWeight: "280 kg",
    fullWeight: "1,230 kg",
    electrical: "230V, 20A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.7,
    reviews: 38,
    description: "A legfunkciósabb kompakt spa - olyan kényelmes, mint a kétszer akkora spa-k.",
    trimLevels: ["Select", "Luxury", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      }
    ],
    includedFeatures: [
      {
        name: "FullFoam™ szigetelés",
        description: "Energiahatékony teljes hab szigetelés optimális hőmegtartásért"
      },
      {
        name: "Simplicity™ vízkezelés",
        description: "Automatikus vízkezelő rendszer egyszerű karbantartásért"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 14,
    name: "X8",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 0,
    jetpaks: 0,
    therapyPumps: '1-2',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.39m x 2.39m x 0.94m",
    waterCapacity: "1,550 liter",
    dryWeight: "375 kg",
    filledWeight: "1,925 kg",
    emptyWeight: "375 kg",
    fullWeight: "1,925 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.5,
    reviews: 63,
    description: "Nagy spa kiváló áron - luxus és tágas élmény prémium minőségben, olyan áron, amelyet csak az X Series tud kínálni.",
    trimLevels: ["Select", "Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Hagyományos jet rendszer",
        description: "Megbízható hagyományos jet masszázs rendszer"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      },
      {
        name: "Digitális vezérlés",
        description: "Egyszerű digitális vezérlőpanel könnyű használatért"
      }
    ]
  },
  {
    id: 15,
    name: "X8L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 1,
    jetpaks: 0,
    therapyPumps: '1-2',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.39m x 2.39m x 0.94m",
    waterCapacity: "1,550 liter",
    dryWeight: "385 kg",
    filledWeight: "1,935 kg",
    emptyWeight: "385 kg",
    fullWeight: "1,935 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.6,
    reviews: 51,
    description: "Tágas, minőségi spa prémium lounger üléssel - különféle relaxációs típusok hidroterápiás élményhez megfizethető áron.",
    trimLevels: ["Select", "Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Prémium lounger ülés",
        description: "Teljes testhosszúságú relaxáció ergonomikus lounger üléssel"
      },
      {
        name: "Hagyományos jet rendszer",
        description: "Megbízható hagyományos jet masszázs rendszer"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 16,
    name: "X7L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 0,
    therapyPumps: '1-2',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.31m x 2.13m x 0.89m",
    waterCapacity: "1,350 liter",
    dryWeight: "350 kg",
    filledWeight: "1,700 kg",
    emptyWeight: "350 kg",
    fullWeight: "1,700 kg",
    electrical: "230V, 25A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.5,
    reviews: 44,
    description: "Változatos és kivételesen kényelmes kontúrök, ergonomikus dizájn - fejlett hidroterápia kevesebb helyen.",
    trimLevels: ["Select", "Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Ergonomikus ülések",
        description: "Változatos és kivételesen kényelmes kontúrök minden testméretre"
      },
      {
        name: "Prémium lounger ülés",
        description: "Teljes testhosszúságú relaxáció ergonomikus lounger üléssel"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 17,
    name: "X6R",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6R_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6R_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 6,
    loungeSeats: 0,
    jetpaks: 0,
    therapyPumps: '1',
    auxiliaryControls: '1-funkciós',
    dimensions: "2.01m átmérő x 0.86m",
    waterCapacity: "1,100 liter",
    dryWeight: "295 kg",
    filledWeight: "1,395 kg",
    emptyWeight: "295 kg",
    fullWeight: "1,395 kg",
    electrical: "230V, 20A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.3,
    reviews: 29,
    description: "Szórakoztató és értékben gazdag kerek spa - klasszikus dizájn beszélgetéshez és szórakozáshoz.",
    trimLevels: ["Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Kerek klasszikus dizájn",
        description: "Időtlen kerek forma társasági beszélgetéshez"
      },
      {
        name: "Hagyományos jet rendszer",
        description: "Megbízható hagyományos jet masszázs rendszer"
      },
      {
        name: "Alapvető világítás",
        description: "Standard LED világítás spa élményért"
      }
    ]
  },
  {
    id: 18,
    name: "X6L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 0,
    therapyPumps: '1',
    auxiliaryControls: '2-funkciós',
    dimensions: "2.13m x 2.13m x 0.89m",
    waterCapacity: "1,200 liter",
    dryWeight: "325 kg",
    filledWeight: "1,525 kg",
    emptyWeight: "325 kg",
    fullWeight: "1,525 kg",
    electrical: "230V, 20A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.4,
    reviews: 36,
    description: "Kompakt spa páratlan tér és kényelem - sokoldalúság szórakoztatáshoz és intim estékhez.",
    trimLevels: ["Select", "Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Kompakt dizájn",
        description: "Páratlan tér és kényelem a méretéhez képest"
      },
      {
        name: "Prémium lounger ülés",
        description: "Teljes testhosszúságú relaxáció ergonomikus lounger üléssel"
      },
      {
        name: "LED világítás",
        description: "Színes LED világítás hangulatos spa élményért"
      }
    ]
  },
  {
    id: 19,
    name: "X5L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X5L_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X5L_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/v7-rC7gHL0qVRIedQ4O95g/UKQYkRKYskms5EmOYkjWbg/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/jZszwiYD6E-_rtAgfA27Nw/jseTyL29CkKJ2PRfyvvUCQ/Large/A-Series_Ebony-Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 5,
    loungeSeats: 1,
    jetpaks: 0,
    therapyPumps: '1',
    auxiliaryControls: '1-funkciós',
    dimensions: "1.98m x 1.98m x 0.86m",
    waterCapacity: "950 liter",
    dryWeight: "275 kg",
    filledWeight: "1,225 kg",
    emptyWeight: "275 kg",
    fullWeight: "1,225 kg",
    electrical: "230V, 20A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.4,
    reviews: 31,
    description: "Kis spa nagy minőségben - tökéletes szűkös helyekhez és beltéri használatra.",
    trimLevels: ["Select", "Choice"],
    includedFeatures: [
      {
        name: "EnduraFrame™ konstrukció",
        description: "Erős és tartós váz konstrukció hosszú élettartamért"
      },
      {
        name: "Kompakt méret",
        description: "Kis spa nagy minőségben, tökéletes szűkös helyekhez"
      },
      {
        name: "Prémium lounger ülés",
        description: "Kényelmes lounger ülés relaxáló terápiával"
      },
      {
        name: "Láb jet terápia",
        description: "Speciális láb jet-ek célzott lábterápiához"
      }
    ]
  },
  {
    id: 20,
    name: "S200",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S200_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S200_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/IJb0btN_gEOn9eS8whSgBg/-ux3g605-k-l56i2DowR_A/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 0,
    jetpaks: 4,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "6.10m x 2.29m x 1.37m",
    waterCapacity: "11,400 liter",
    dryWeight: "1,225 kg",
    filledWeight: "12,625 kg",
    emptyWeight: "1,225 kg",
    fullWeight: "12,625 kg",
    electrical: "230V, 50A",
    heater: "6kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.9,
    reviews: 67,
    description: "Multifunkciós hátsókert vízi élmény - úszás, fitnesz, terápia és családi szórakozás egyben.",
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      },
      {
        name: "JetStream™",
        description: "Erős, egyirányú vízsugár masszázs",
        jetCount: 3,
        jetTypes: ["Directional", "High-pressure"],
        targetAreas: ["Célzott területek", "Trigger pontok"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System™",
        description: "Egyedülálló cserélhető JetPak masszázsok személyre szabható terápiáért"
      },
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram könnyebb úszásért"
      },
      {
        name: "Splash Zone",
        description: "Tágas játékterület családi szórakozáshoz"
      },
      {
        name: "SwimDek® burkolat",
        description: "Csúszásgátló burkolat biztonságos használatért"
      }
    ]
  },
  {
    id: 21,
    name: "S180XD",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S180XD_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S180XD_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/IJb0btN_gEOn9eS8whSgBg/-ux3g605-k-l56i2DowR_A/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 5,
    loungeSeats: 0,
    jetpaks: 3,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "4.57m x 2.29m x 1.52m",
    waterCapacity: "9,500 liter",
    dryWeight: "950 kg",
    filledWeight: "10,450 kg",
    emptyWeight: "950 kg",
    fullWeight: "10,450 kg",
    electrical: "230V, 40A",
    heater: "6kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 43,
    description: "15 láb hosszú és extra mély - úszásra és fitneszre optimalizált egyedülálló ülésrendezéssel.",
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System™",
        description: "Egyedülálló cserélhető JetPak masszázsok személyre szabható terápiáért"
      },
      {
        name: "Extra mély design",
        description: "1.52m mélység optimális úszásélményért"
      },
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram könnyebb úszásért"
      },
      {
        name: "SwimDek® burkolat",
        description: "Csúszásgátló burkolat biztonságos használatért"
      }
    ]
  },
  {
    id: 22,
    name: "S150",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S150_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S150_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/IJb0btN_gEOn9eS8whSgBg/-ux3g605-k-l56i2DowR_A/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/6l27k9lOy0K-mDg0iAMkXQ/WWwDVCPS7UeCHpZ8B2wtpw/Large/Swim-Series_Timber-Snow_Lifestyle.jpeg"
    ],
    seats: 13,
    loungeSeats: 0,
    jetpaks: 6,
    therapyPumps: '3',
    auxiliaryControls: '4-funkciós',
    dimensions: "4.57m x 2.29m x 1.37m",
    waterCapacity: "10,800 liter",
    dryWeight: "1,150 kg",
    filledWeight: "11,950 kg",
    emptyWeight: "1,150 kg",
    fullWeight: "11,950 kg",
    electrical: "230V, 50A",
    heater: "6kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 5.0,
    reviews: 89,
    description: "A legnagyobb Swim Series™ modell - 13 ülőhellyel és fejlett hátsókert vízi élménnyel.",
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      },
      {
        name: "JetStream™",
        description: "Erős, egyirányú vízsugár masszázs",
        jetCount: 3,
        jetTypes: ["Directional", "High-pressure"],
        targetAreas: ["Célzott területek", "Trigger pontok"]
      },
      {
        name: "AquaRoll™",
        description: "Gördülő masszázs a teljes hátnak",
        jetCount: 4,
        jetTypes: ["Rolling", "Sequential"],
        targetAreas: ["Gerinc", "Háti izmok"]
      },
      {
        name: "PulseWave™",
        description: "Pulzáló hullám masszázs",
        jetCount: 6,
        jetTypes: ["Pulsating", "Wave"],
        targetAreas: ["Teljes test", "Relaxáció"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System™",
        description: "Egyedülálló cserélhető JetPak masszázsok személyre szabható terápiáért"
      },
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram könnyebb úszásért"
      },
      {
        name: "Splash Zone",
        description: "Tágas játékterület családi szórakozáshoz"
      },
      {
        name: "SwimDek® burkolat",
        description: "Csúszásgátló burkolat biztonságos használatért"
      }
    ]
  },
  {
    id: 23,
    name: "STIL7",
    category: "stilseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL7_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL7_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/g0F-p1HTIkqidBSjny3ibA/-AAVobIt1E6KvsjBzeQ_8w/Large/Stil_Snow-Slate_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/kQ1XbkGatkW0Ss-LSI1dEw/rc0SWj-yyUeG4cXBaLepAA/Large/Stil_Snow-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/g0F-p1HTIkqidBSjny3ibA/-AAVobIt1E6KvsjBzeQ_8w/Large/Stil_Snow-Slate_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 2,
    jetpaks: 5,
    therapyPumps: '2',
    auxiliaryControls: '3-funkciós',
    dimensions: "2.39m x 2.31m x 0.94m",
    waterCapacity: "1,500 liter",
    dryWeight: "395 kg",
    filledWeight: "1,895 kg",
    emptyWeight: "395 kg",
    fullWeight: "1,895 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.8,
    reviews: 52,
    description: "Egyedülálló modern design esztétika - átgondoltan egyszerű, nyitott koncepció elegáns megjelenéssel.",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      },
      {
        name: "JetStream™",
        description: "Erős, egyirányú vízsugár masszázs",
        jetCount: 3,
        jetTypes: ["Directional", "High-pressure"],
        targetAreas: ["Célzott területek", "Trigger pontok"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System™",
        description: "Forradalmi cserélhető JetPak masszázsok személyes spa tervezésért"
      },
      {
        name: "Modern design esztétika",
        description: "Tiszta vonalak és elegáns megjelenés"
      },
      {
        name: "Kettős lounger elrendezés",
        description: "Minden ülés használható egyenes vagy relaxált dőlésszögben"
      },
      {
        name: "Prémium világítás",
        description: "Fejlett LED világítási rendszer hangulatos élményért"
      }
    ]
  },
  {
    id: 24,
    name: "STIL5",
    category: "stilseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL5_Top-Down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL5_Top-Down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/g0F-p1HTIkqidBSjny3ibA/-AAVobIt1E6KvsjBzeQ_8w/Large/Stil_Snow-Slate_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/kQ1XbkGatkW0Ss-LSI1dEw/rc0SWj-yyUeG4cXBaLepAA/Large/Stil_Snow-Timber_Lifestyle.jpeg"
    ],
    seats: 5,
    loungeSeats: 1,
    jetpaks: 3,
    therapyPumps: '1',
    auxiliaryControls: '2-funkciós',
    dimensions: "1.98m x 1.98m x 0.86m",
    waterCapacity: "950 liter",
    dryWeight: "285 kg",
    filledWeight: "1,235 kg",
    emptyWeight: "285 kg",
    fullWeight: "1,235 kg",
    electrical: "230V, 20A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    rating: 4.6,
    reviews: 34,
    description: "Inspirált funkcionális modern design - tökéletes városi környezethez és beltéri használathoz.",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [
      {
        name: "DeepRelief™",
        description: "Mély izommasszázs erős, célzott vízsugárral",
        jetCount: 5,
        jetTypes: ["Rotary", "Directional"],
        targetAreas: ["Háti izmok", "Vállak", "Nyak"]
      },
      {
        name: "EuroSoak™",
        description: "Lágy, körkörösen örvénylő masszázs",
        jetCount: 4,
        jetTypes: ["Swirl", "Pulsating"],
        targetAreas: ["Teljes hát", "Oldal", "Csípő"]
      },
      {
        name: "WaveLounge™",
        description: "Hullámzó masszázs a teljes hátnak",
        jetCount: 6,
        jetTypes: ["Wave", "Oscillating"],
        targetAreas: ["Gerinc", "Nyak", "Alsó hát"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System™",
        description: "Forradalmi cserélhető JetPak masszázsok személyes spa tervezésért"
      },
      {
        name: "Kompakt modern design",
        description: "Inspirált funkcionális design városi környezethez"
      },
      {
        name: "Okos dőlésszög",
        description: "Intelligensen tervezett dőlésszög különféle relaxációs pozíciókhoz"
      },
      {
        name: "Beltéri kompatibilitás",
        description: "Kompakt méret beltéri használatra optimalizálva"
      }
    ]
  }
];

export default products;