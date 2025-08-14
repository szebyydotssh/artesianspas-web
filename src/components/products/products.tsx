import { Users, Layout, ShieldCheck, Droplet, Ruler } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  images: string[];
  seats: number;
  loungeSeats: number;
  jetpaks: number;
  dimensions: string;
  waterCapacity: string;
  emptyWeight: string;
  fullWeight: string;
  electrical: string;
  heater: string;
  insulation: string;
  warranty: string;
  description: string;
  features: Array<{ icon: any; label: string }>;
  highlights: string[];
  rating?: number;
  reviews?: number;
  therapyPumps?: number;
  auxiliaryControls?: number;
  dryWeight?: string;
  filledWeight?: string;
  jetPakOptions?: JetPakOption[];
  includedFeatures?: IncludedFeature[];
  trimLevels?: string[];
}

export interface JetPakOption {
  name: string;
  description: string;
  jetCount: number;
  jetTypes: string[];
  targetAreas: string[];
}

export interface IncludedFeature {
  name: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "M9",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 10,
    loungeSeats: 3,
    jetpaks: 7,
    dimensions: "2.79m x 2.39m x 0.96m",
    waterCapacity: "2,143 liter",
    emptyWeight: "548 kg",
    fullWeight: "3,476 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Tapasztalja meg a luxus és a terápia tökéletes kombinációját az M9-cel. Több hely, több JetPak® és egyéb terápiás lehetőségek, változatosabb ülésrendszer, átgondoltabb kényelmi funkciók, egyszerűbb vízkezelés, intuitív kezelés a spa több pontjáról, több világítás és hangulat.",
    features: [
      { icon: Users, label: "10 Pozíció" },
      { icon: Layout, label: "3 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 7" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.79m x 2.39m x 0.96m" }
    ],
    highlights: [
      "Legnagyobb kapacitás az M szériában",
      "Három különböző lounge pozíció",
      "Prémium JetPak™ masszázs rendszer",
      "Energiahatékony FullFoam™ szigetelés",
      "Simplicity™ automatikus vízkezelés"
    ],
    rating: 4.2,
    reviews: 19,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "548 kg",
    filledWeight: "3,476 kg",
    jetPakOptions: [
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Patio Performance™ fedél",
        description: "Az M Series™ spa-k beépített intelligens érzékelőkkel rendelkeznek a biztonság és a kényelem érdekében."
      },
      {
        name: "Prémium spa világítás",
        description: "Az M Series™ spa prémium LED környezeti világítással rendelkezik a tökéletes hangulat megteremtéséhez."
      }
    ]
  },
  {
    id: 2,
    name: "M8",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 2,
    jetpaks: 6,
    dimensions: "2.39m x 2.39m x 0.96m",
    waterCapacity: "1,794 liter",
    emptyWeight: "464 kg",
    fullWeight: "2,834 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az elsőként megjelenő kettős lounge üléssel és a valaha kínált legflexibilisebb ülésrendszerrel ez a méretű spa-ban, az M8 figyelemre méltó és páratlan spa élményt teremt. Biztosan szeretni fogja a nyújtózkodást, loungeolást, a gyerekekkel való pancsolást, felülést egy beszélgetésre, vagy egyszerűen csak becsukni a szemét és elmenekülni a világból, mindezt ugyanazon a helyen, az M8 spa-jában.",
    features: [
      { icon: Users, label: "9 Pozíció" },
      { icon: Layout, label: "2 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 6" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.39m x 2.39m x 0.96m" }
    ],
    highlights: [
      "Elsőként megjelenő kettős lounge ülés",
      "Legflexibilisebb ülésrendszer ebben a méretben",
      "Prémium JetPak™ masszázs rendszer",
      "Energiahatékony FullFoam™ szigetelés",
      "Simplicity™ automatikus vízkezelés"
    ],
    rating: 3.3,
    reviews: 28,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "464 kg",
    filledWeight: "2,834 kg",
    jetPakOptions: [
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      }
    ],
    includedFeatures: [
      {
        name: "Patio Performance™ fedél",
        description: "Az M Series™ spa-k beépített intelligens érzékelőkkel rendelkeznek. Ha megszerzi az opcionális CloudControl 2™ wifi modult, push értesítéseket kaphat, amikor a spa fedelet eltávolították a további biztonság és nyugalom érdekében."
      },
      {
        name: "CoverMate I fedél emelő",
        description: "A Bullfrog tartós fedélemelőinek egyszerű dizájnja valódi kényelmet és funkcionalitást biztosít. Emelje fel a spa fedelet és élvezze a relaxációt néhány másodperc alatt."
      },
      {
        name: "Prémium spa világítás",
        description: "Az M Series™ spa prémium LED környezeti világítással rendelkezik a tökéletes hangulat megteremtéséhez. Élvezzen egy biztonságosabb és luxusabb spa élményt teljes színű spa világítással."
      },
      {
        name: "JetPak terápiás rendszer™",
        description: "Az M Series™ spa a szabadalmaztatott JetPak terápiás rendszerrel® rendelkezik. Ez az egyedi és tulajdonosi technológia akár 18 különböző masszázs választékát kínálja."
      },
      {
        name: "Prémium érintőképernyős főkontroll",
        description: "Az összes spa funkciót és beállítást vezérelje a fejlett és intuitív M Series™ érintőképernyős vezérlőközponttal."
      },
      {
        name: "Többfunkciós segédvezérlők",
        description: "Az ülésben lévő többfunkciós vezérlőközpontok lehetővé teszik az összes sugárfúvóka vezérlését, a világítás aktiválását, a nyomógombos vízi funkciók vezérlését."
      }
    ]
},
{
    id: 3,
    name: "M7",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 0,
    jetpaks: 6,
    dimensions: "2.31m x 2.31m x 0.94m",
    waterCapacity: "1,716 liter",
    emptyWeight: "408 kg",
    fullWeight: "2,689 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Élvezze a két elsőként megjelenő Adirondack-stílusú prémium terápiás ülést, a hihetetlen kettős JetPak® szerelmes ülést, terápiás emelt üléseket, vagy az új M7 spa számos más kényelmes és sokoldalú üléslehetőségét. Intuitív vezérlőkkel, egyszerű vízkezeléssel, a híres JetPak terápiás rendszerrel®, lenyűgöző esztétikával és több hellyel, mint amennyit bármely más közepes méretű spa-ban talál, az M7 by Bullfrog Spas teljesen el fogja ragadni.",
    features: [
      { icon: Users, label: "9 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 6" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.31m x 2.31m x 0.94m" }
    ],
    highlights: [
      "Adirondack-stílusú prémium terápiás ülések",
      "Kettős JetPak® szerelmes ülés",
      "Terápiás emelt ülések",
      "Közepes méretű lábnyom, maximális hely",
      "Prémium JetPak™ masszázs rendszer"
    ],
    rating: 3.8,
    reviews: 24,
    therapyPumps: 2,
    auxiliaryControls: 1,
    dryWeight: "408 kg",
    filledWeight: "2,689 kg",
    jetPakOptions: [
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Versa",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "DualPulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Spinalssage",
        description: "Egyszerű gerinc könnyebbség",
        jetCount: 2,
        jetTypes: ["DualPulse"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "AcuTherapy",
        description: "Célzott terápia stressz enyhítésére",
        jetCount: 8,
        jetTypes: ["Deep Relief", "Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Reliever",
        description: "Kombinált terápia",
        jetCount: 6,
        jetTypes: ["Oscillator", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Lumbar",
        description: "Célzott alsó háti terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "FirmRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Gyrossage",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Patio Performance™ fedél",
        description: "Az M Series™ spa-k beépített intelligens érzékelőkkel rendelkeznek. Ha megszerzi az opcionális CloudControl 2™ wifi modult, push értesítéseket kaphat, amikor a spa fedelet eltávolították a további biztonság és nyugalom érdekében."
      },
      {
        name: "CoverMate I fedél emelő",
        description: "A Bullfrog tartós fedélemelőinek egyszerű dizájnja valódi kényelmet és funkcionalitást biztosít. Emelje fel a spa fedelet és élvezze a relaxációt néhány másodperc alatt."
      },
      {
        name: "Prémium spa világítás",
        description: "Az M Series™ spa prémium LED környezeti világítással rendelkezik a tökéletes hangulat megteremtéséhez. Élvezzen egy biztonságosabb és luxusabb spa élményt teljes színű spa világítással."
      },
      {
        name: "JetPak terápiás rendszer™",
        description: "Az M Series™ spa a szabadalmaztatott JetPak terápiás rendszerrel® rendelkezik. Ez az egyedi és tulajdonosi technológia akár 18 különböző masszázs választékát kínálja."
      },
      {
        name: "Prémium érintőképernyős főkontroll",
        description: "Az összes spa funkciót és beállítást vezérelje a fejlett és intuitív M Series™ érintőképernyős vezérlőközponttal."
      },
      {
        name: "Többfunkciós segédvezérlők",
        description: "Az ülésben lévő többfunkciós vezérlőközpontok lehetővé teszik az összes sugárfúvóka vezérlését, a világítás aktiválását, a nyomógombos vízi funkciók vezérlését."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezték."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Az M Series™ spa a teljesen új Simplicity szűrőrendszerrel rendelkezik. Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez."
      },
      {
        name: "Állítható fejtámlák",
        description: "Az M Series™ spa minden prémium JetPaks® ülése ultra-kényelmes állítható fejtámlákkal rendelkezik, amelyek felfelé állíthatók, hogy éppen a megfelelő helyzetben találkozzanak a fejével."
      },
      {
        name: "Prémium integrált vízesések",
        description: "Semmi sem járul hozzá a spa relaxáció hangulatához úgy, mint egy békés és nyugtató vízesés. A zuhanó vizek nyugtató hangjai gyönyörű trópusi zuhatagokra emlékeztetnek."
      },
      {
        name: "EOS™ O3 rendszer",
        description: "A Bullfrog Spas EOS O3 fejlett ózonrendszer akár 2-szer több O3 gázt termel, mint a standard ózonrendszerek. Az ózon egy erős víztisztító. Az EOS 99,9%-ban eliminálja a mikroorganizmusokat."
      },
      {
        name: "Dedikált szűrőszivattyú",
        description: "A dedikált szűrőszivattyú kalibrált a szűrőrendszer hatékonyságához, mivel naponta többször keringeti a spa összes vizét. Emellett sokkal csendesebben és hatékonyabban működik."
      }
    ]
  },
   {
    id: 4,
    name: "M6",
    category: "mseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/M-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 0,
    jetpaks: 4,
    dimensions: "2.31m x 2.03m x 0.86m",
    waterCapacity: "1,464 liter",
    emptyWeight: "363 kg",
    fullWeight: "2,292 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Vegyünk egy mély levegőt és kapcsolódjunk ki ebben a prémium szintű, helytakarékos spa-ban. Értékelni fogja a négy egyénileg választott JetPak élményét, amelyeket két terápiás szivattyú támogat - a legerősebb terápia megvalósítása érdekében. Ez a luxus spa többfunkciós segédvezérlővel van felszerelve és több üléshelyet és prémium funkciókat tartalmaz, mint bármely más helytakarékos spa a piacon. A kompakt M6 azért van itt, hogy nagy hatást gyakoroljon a Bullfrog Spas békés ígéretének teljesítésével kis helyen, kiváló spa élményt nyújtva.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.31m x 2.03m x 0.86m" }
    ],
    highlights: [
      "Prémium szintű, helytakarékos dizájn",
      "Erős terápia két terápiás szivattyúval",
      "Több ülőhely mint bármelyik másik kompakt spa",
      "Többfunkciós segédvezérlő",
      "Kiváló spa élmény kis helyen"
    ],
    rating: 5.0,
    reviews: 3,
    therapyPumps: 2,
    auxiliaryControls: 1,
    dryWeight: "363 kg",
    filledWeight: "2,292 kg",
    jetPakOptions: [
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Versa",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "DualPulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Spinalssage",
        description: "Egyszerű gerinc könnyebbség",
        jetCount: 2,
        jetTypes: ["DualPulse"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "AcuTherapy",
        description: "Célzott terápia stressz enyhítésére",
        jetCount: 8,
        jetTypes: ["Deep Relief", "Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Reliever",
        description: "Kombinált terápia",
        jetCount: 6,
        jetTypes: ["Oscillator", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Lumbar",
        description: "Célzott alsó háti terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "FirmRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Gyrossage",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Patio Performance™ fedél",
        description: "Az M Series™ spa-k beépített intelligens érzékelőkkel rendelkeznek. Ha megszerzi az opcionális CloudControl 2™ wifi modult, push értesítéseket kaphat, amikor a spa fedelet eltávolították a további biztonság és nyugalom érdekében."
      },
      {
        name: "CoverMate I fedél emelő",
        description: "A Bullfrog tartós fedélemelőinek egyszerű dizájnja valódi kényelmet és funkcionalitást biztosít. Emelje fel a spa fedelet és élvezze a relaxációt néhány másodperc alatt."
      },
      {
        name: "Prémium spa világítás",
        description: "Az M Series™ spa prémium LED környezeti világítással rendelkezik a tökéletes hangulat megteremtéséhez. Élvezzen egy biztonságosabb és luxusabb spa élményt teljes színű spa világítással."
      },
      {
        name: "JetPak terápiás rendszer™",
        description: "Az M Series™ spa a szabadalmaztatott JetPak terápiás rendszerrel® rendelkezik. Ez az egyedi és tulajdonosi technológia akár 18 különböző masszázs választékát kínálja."
      },
      {
        name: "Prémium érintőképernyős főkontroll",
        description: "Az összes spa funkciót és beállítást vezérelje a fejlett és intuitív M Series™ érintőképernyős vezérlőközponttal."
      },
      {
        name: "Többfunkciós segédvezérlők",
        description: "Az ülésben lévő többfunkciós vezérlőközpontok lehetővé teszik az összes sugárfúvóka vezérlését, a világítás aktiválását, a nyomógombos vízi funkciók vezérlését."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezték."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Az M Series™ spa a teljesen új Simplicity szűrőrendszerrel rendelkezik. Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez."
      },
      {
        name: "Állítható fejtámlák",
        description: "Az M Series™ spa minden prémium JetPaks® ülése ultra-kényelmes állítható fejtámlákkal rendelkezik, amelyek felfelé állíthatók, hogy éppen a megfelelő helyzetben találkozzanak a fejével."
      },
      {
        name: "Prémium integrált vízesések",
        description: "Semmi sem járul hozzá a spa relaxáció hangulatához úgy, mint egy békés és nyugtató vízesés. A zuhanó vizek nyugtató hangjai gyönyörű trópusi zuhatagokra emlékeztetnek."
      },
      {
        name: "EOS™ O3 rendszer",
        description: "A Bullfrog Spas EOS O3 fejlett ózonrendszer akár 2-szer több O3 gázt termel, mint a standard ózonrendszerek. Az ózon egy erős víztisztító. Az EOS 99,9%-ban eliminálja a mikroorganizmusokat."
      },
      {
        name: "Dedikált szűrőszivattyú",
        description: "A dedikált szűrőszivattyú kalibrált a szűrőrendszer hatékonyságához, mivel naponta többször keringeti a spa összes vizét. Emellett sokkal csendesebben és hatékonyabban működik."
      }
    ]
  },
    {
    id: 5,
    name: "A9L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 9,
    loungeSeats: 1,
    jetpaks: 7,
    dimensions: "2.77m x 2.39m x 0.97m",
    waterCapacity: "2,650 liter",
    emptyWeight: "680 kg",
    fullWeight: "3,850 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A9L by Bullfrog Spas emeli a mércét az extra nagy luxus spa-k terén 7 testreszabható JetPak®-kal, 9 prémium üléssel, egy luxus lounger-rel, 2 további flex-lounge üléssel, bőséges lábtérrel és erős lábterápiával. A márka egyik legnagyobb és legnépszerűbb modellje, az A9L ideális azok számára, akik egy előkelő spa-t szeretnének, amely elég tágas egy tömeg számára. Bőséges térrel, terápiával, innovációval és stílussal, a Bullfrog Spas A9L a következő szintre emelheti relaxációját és megkönnyebbülését.",
    features: [
      { icon: Users, label: "9 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 7" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.77m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Extra nagy luxus spa legnagyobb kapacitással",
      "7 testreszabható JetPak® és 9 prémium ülés",
      "Luxus lounger és 2 flex-lounge ülés",
      "Erős lábterápia és bőséges lábtér",
      "A márka legnagyobb és legnépszerűbb modellje"
    ],
    rating: 4.3,
    reviews: 58,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "680 kg",
    filledWeight: "3,850 kg",
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került, hogy optimális terápiás élményt nyújtson a lehető legnagyobb változatosságú emberek és helyzetek számára."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "EOS™ O3 rendszer",
        description: "A Bullfrog Spas EOS O3 fejlett ózonrendszer akár 2-szer több O3 gázt termel, mint a standard ózonrendszerek. Az ózon egy erős víztisztító."
      },
      {
        name: "Prémium fedél és emelő",
        description: "A prémium minőségű spa fedél kiváló védelmet nyújt és kiegészíti a külső teret. Minden A Series™ spa tartós fedélemelővel érkezik."
      },
      {
        name: "Lábterápia rendszer",
        description: "Speciális lábterápiás funkciók erős masszázzsal és célzott jet elhelyezéssel a tökéletes lábkényeztetésért."
      }
    ]
  },
    {
    id: 6,
    name: "A8",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 0,
    jetpaks: 6,
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "2,271 liter",
    emptyWeight: "590 kg",
    fullWeight: "3,450 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Nyújtózkodjon ki és relaxáljon kényelemben és stílusban, vagy hívja meg barátait egy szórakoztató összejövetelre ebben a prémium nagy spa-ban. Bőven van hely. Az A8 egy 8 személyes spa, amely meghatározza a tágas kényelem mércéjét. Nyitott elrendezéssel és 6 választható JetPak®-kal teljes masszázs választékot élvezhet. Emellett az egyedi kontúrozott lábterápiás kupola személyre szabott lábmasszázst biztosít.",
    features: [
      { icon: Users, label: "8 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4-6" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Tágas 8 személyes spa nyitott elrendezéssel",
      "6 választható JetPak® teljes masszázs választékhoz",
      "Egyedi kontúrozott lábterápiás kupola",
      "Három szint opcióban elérhető",
      "Prémium nagy spa a legmagasabb komforttal"
    ],
    rating: 4.7,
    reviews: 75,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "590 kg",
    filledWeight: "3,450 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került, hogy optimális terápiás élményt nyújtson. Ez magában foglalja az ülésmélyégek átgondolt keverékét, javított ergonómiát és jobb jet igazítást."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja, nem csak egy kis részét, mint a legtöbb kerek szűrő."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők, amelyek könnyebben kezelhetők éjszaka."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek, Choice spa-k 2 funkciós vezérlőkkel."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva, miközben zökkenőmentesen illeszkednek a spa természetes kontúrjaihoz."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "EOS™ O3 rendszer",
        description: "A Bullfrog Spas EOS O3 fejlett ózonrendszer akár 2-szer több O3 gázt termel, mint a standard ózonrendszerek. Az ózon egy erős víztisztító."
      },
      {
        name: "Lábterápiás kupola",
        description: "Az egyedi kontúrozott lábterápiás kupola személyre szabott lábmasszázst biztosít, ami tökéletes kiegészítője a teljes spa élménynek."
      },
      {
        name: "Többszintű trim opciók",
        description: "Három szint opcióban elérhető: Select, Choice Luxury Package-dzsel, és Choice - mindegyik különböző prémium funkciókkal és testreszabási lehetőségekkel."
      }
    ]
  },
    {
    id: 7,
    name: "A8L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 6,
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "2,120 liter",
    emptyWeight: "550 kg",
    fullWeight: "3,280 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A8L egy tágas 7 személyes terápiás spa különféle üléslehetőségekkel a teljes relaxációért. A kényelmes ülések közé tartozik egy prémium hajlított térdű lounger és egy terápiás sarok kapitány szék, valamint 6 egyedi JetPak® választékával. Ez a spa minden igénynek megfelelő terápiás lehetőséget kínál, miközben bőséges helyet biztosít a társasági élethez. Az A8L minden ülésben különböző hidroterápiás élményt nyújt. Kiváló párok számára, akik szeretik a változatos üléslehetőségeket.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4-6" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Tágas 7 személyes terápiás spa",
      "Prémium hajlított térdű lounger",
      "Terápiás sarok kapitány szék",
      "6 egyedi JetPak® különböző terápiás élményhez",
      "Kiváló párok számára változatos üléslehetőségekkel"
    ],
    rating: 4.4,
    reviews: 69,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "550 kg",
    filledWeight: "3,280 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Változatos ülésmélységek, javított ergonómia és biztonságos be/kilépés az A8L-ben."
      },
      {
        name: "Prémium hajlított térdű lounger",
        description: "Kényelmes és ergonomikus lounger ülés, amely tökéletes relaxációt biztosít teljes testhosszúságú terápiával és kényelmes térd támasztással."
      },
      {
        name: "Terápiás sarok kapitány szék",
        description: "Speciális sarok elhelyezésű kapitány szék, amely célzott terápiát nyújt és kiváló kilátást biztosít a spa többi részére a társasági élményért."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Változatos hidroterápiás élmények",
        description: "Minden ülésben különböző hidroterápiás élmény várja Önt. A prémium lounger, a kapitány szék és a standard ülések mind egyedi terápiás lehetőségeket kínálnak."
      }
    ]
  },
    {
    id: 8,
    name: "A7",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 0,
    jetpaks: 5,
    dimensions: "2.24m x 2.24m x 0.92m",
    waterCapacity: "1,850 liter",
    emptyWeight: "480 kg",
    fullWeight: "2,950 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A7 egy teljes funkcionalitású közepes méretű spa, amely sokkal nagyobbnak érződik a méreteinek megfelelőnél. Az A7 kettős prémium sarok kapitány székekkel rendelkezik, mindegyik csukló, csípő, lábikra és lábfej jet-ekkel, valamint akár 5 választható JetPak®-kal. Abszolút semmi helyet nem pazarol el ebben a spa-ban, sokkal nagyobb spa érzetét keltve, és ideálissá teszi barátok vagy családok szórakoztatására.",
    features: [
      { icon: Users, label: "8 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4-5" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.24m x 2.24m x 0.92m" }
    ],
    highlights: [
      "Teljes funkcionalitású közepes méretű spa",
      "Kettős prémium sarok kapitány székek",
      "Csukló, csípő, lábikra és lábfej jet-ek",
      "Akár 5 választható JetPak® személyre szabáshoz",
      "Nagyobb spa érzete kompakt méretben"
    ],
    rating: 4.5,
    reviews: 86,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "480 kg",
    filledWeight: "2,950 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A7 változatos ülésmélységekkel, javított ergonómiával és biztonságos be/kilépéssel rendelkezik."
      },
      {
        name: "Kettős prémium sarok kapitány székek",
        description: "Mindkét sarok kapitány szék csukló, csípő, lábikra és lábfej jet-ekkel felszerelt, komplett terápiás élményt nyújtva minden ülésben."
      },
      {
        name: "Optimalizált helyfelhasználás",
        description: "Abszolút semmi helyet nem pazarol el az A7, sokkal nagyobb spa érzetét keltve a tényleges méreteinél, ideális szórakoztatáshoz."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Közepes méret, nagy spa élmény",
        description: "Az A7 tökéletes egyensúlyt teremt a kompakt méret és a nagy spa funkcionalitás között, ideális családok és barátok szórakoztatására korlátozott térben."
      }
    ]
  },
    {
    id: 9,
    name: "A7L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 5,
    dimensions: "2.24m x 2.24m x 0.92m",
    waterCapacity: "1,920 liter",
    emptyWeight: "520 kg",
    fullWeight: "3,080 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A7L egy jól arányos közepes méretű spa, amely a masszázstípusok tökéletes kombinációját nyújtja ebben a méretben elérhető legkényelmesebb spa ülések közül. Akár 5 JetPak®-kal, mindegyik egyedi ülésben, teljes skálájú nyugtató hidromasszázsokat élvezhet. Az A7L prémium hajlított térdű lounger-t is tartalmaz csípő, lábikra és lábfej jet-ekkel, amelyek az Ön által választott JetPak®-kal kombinálva boldog teljes test relaxációs élményt teremtenek.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4-5" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.24m x 2.24m x 0.92m" }
    ],
    highlights: [
      "Jól arányos közepes méretű spa tökéletes kombinációval",
      "Legkényelmesebb spa ülések ebben a méretben",
      "Prémium hajlított térdű lounger csípő, lábikra és lábfej jet-ekkel",
      "Akár 5 JetPak® egyedi ülésekben",
      "Teljes test relaxációs élmény"
    ],
    rating: 4.4,
    reviews: 91,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "520 kg",
    filledWeight: "3,080 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A7L változatos ülésmélységekkel, javított ergonómiával és biztonságos be/kilépéssel rendelkezik."
      },
      {
        name: "Prémium hajlított térdű lounger",
        description: "Kényelmes és ergonomikus lounger ülés csípő, lábikra és lábfej jet-ekkel, amely teljes test relaxációs élményt nyújt a választott JetPak®-kal kombinálva."
      },
      {
        name: "Legkényelmesebb spa ülések",
        description: "Ebben a méretben elérhető legkényelmesebb spa ülések közül, mindegyik egyedi masszázstípussal és optimális kényelemmel."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Jól arányos tervezés",
        description: "Az A7L tökéletes egyensúlyt teremt a méret és funkcionalitás között, közepes méretben nyújtva a legkényelmesebb spa üléseket és teljes test relaxációt."
      }
    ]
  },
    {
    id: 10,
    name: "A7D",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7D_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7D_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 2,
    jetpaks: 5,
    dimensions: "2.24m x 2.24m x 0.92m",
    waterCapacity: "1,980 liter",
    emptyWeight: "540 kg",
    fullWeight: "3,140 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A7D egy exkluzív 2-lounger elrendezés finomított funkciókkal, maximális terápiás lehetőségekkel és jellegzetes stílussal. Ez az elrendezés olyan népszerű, hogy a legjobban fogyó modellek egyike. Ez egy tágas és relaxáló 5-6 személyes spa akár 5 egyedi JetPak®-kal. A prémium hajlított térdű lounger felszerelhető kedvenc JetPak®-jával, és csukló, csípő, lábikra és lábfej jet-eket tartalmaz a teljes relaxációs élményért. Az egyedi kettős lounger ülések és masszázstípusok választéka teszi ezt a spa-t a végső terápiás élménnyé.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "2 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 4-5" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.24m x 2.24m x 0.92m" }
    ],
    highlights: [
      "Exkluzív 2-lounger elrendezés finomított funkciókkal",
      "Az egyik legjobban fogyó modell népszerű elrendezéssel",
      "Prémium hajlított térdű lounger csukló, csípő, lábikra és lábfej jet-ekkel",
      "Egyedi kettős lounger ülések maximális relaxációért",
      "Akár 5 JetPak® a végső terápiás élményhez"
    ],
    rating: 4.7,
    reviews: 6,
    therapyPumps: 3,
    auxiliaryControls: 3,
    dryWeight: "540 kg",
    filledWeight: "3,140 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A7D exkluzív kettős lounger elrendezéssel rendelkezik optimális terápiához."
      },
      {
        name: "Exkluzív kettős lounger elrendezés",
        description: "Az A7D egyedi 2-lounger elrendezése finomított funkciókkal és maximális terápiás lehetőségekkel rendelkezik, ami a legjobban fogyó modellek egyikévé teszi."
      },
      {
        name: "Prémium hajlított térdű lounger",
        description: "A prémium lounger csukló, csípő, lábikra és lábfej jet-ekkel felszerelt, kedvenc JetPak®-jával kombinálva teljes relaxációs élményt nyújt."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Végső terápiás élmény",
        description: "Az egyedi kettős lounger ülések és masszázstípusok változatos választéka teszi az A7D-t a végső terápiás élménnyé, jellegzetes stílussal és finomított funkciókkal."
      }
    ]
  },
    {
    id: 11,
    name: "A6",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 6,
    loungeSeats: 0,
    jetpaks: 4,
    dimensions: "2.24m x 2.03m x 0.86m",
    waterCapacity: "1,580 liter",
    emptyWeight: "420 kg",
    fullWeight: "2,580 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A6 egy prémium helytakarékos spa modell minden kívánt funkcióval. A kis külső lábnyom tökéletes a szűkös helyekhez, amelyek a városi életstílus vagy modern kert kialakítás részei, miközben bőséges belső teret biztosít. A nyitott ülésrendszer lehetővé teszi a kinyújtózást és relaxálást, miközben tökéletesen illeszkedik kisebb teraszokra, erkélyekre és fedélzetekre. Négy kényelmes prémium sarok ülés mindegyike egyedi masszázst kínál, lehetővé téve a tökéletes spa élmény megtervezését.",
    features: [
      { icon: Users, label: "6 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 3-4" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.24m x 2.03m x 0.86m" }
    ],
    highlights: [
      "Prémium helytakarékos spa modell kis külső lábnyommal",
      "Tökéletes városi életstílushoz és modern kert kialakításhoz",
      "Nyitott ülésrendszer bőséges belső térrel",
      "Négy kényelmes prémium sarok ülés egyedi masszázzsal",
      "Ideális kisebb teraszokra, erkélyekre és fedélzetekre"
    ],
    rating: 4.7,
    reviews: 50,
    therapyPumps: 2,
    auxiliaryControls: 2,
    dryWeight: "420 kg",
    filledWeight: "2,580 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A6 nyitott ülésrendszerrel és prémium sarok ülésekkel rendelkezik."
      },
      {
        name: "Prémium helytakarékos dizájn",
        description: "A kis külső lábnyom tökéletes szűkös helyekhez, városi életstílushoz vagy modern kert kialakításhoz, miközben bőséges belső teret biztosít."
      },
      {
        name: "Négy prémium sarok ülés",
        description: "Mindegyik sarok ülés egyedi masszázst kínál, lehetővé téve a tökéletes spa élmény megtervezését személyre szabható JetPak® lehetőségekkel."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Városi és modern kert kompatibilitás",
        description: "Az A6 tökéletesen illeszkedik kisebb teraszokra, erkélyekre és fedélzetekre, ideális városi életstílushoz és modern külső terek kialakításához."
      }
    ]
  },
    {
    id: 12,
    name: "A6L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 4,
    dimensions: "2.24m x 2.03m x 0.86m",
    waterCapacity: "1,640 liter",
    emptyWeight: "440 kg",
    fullWeight: "2,640 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A6L kis spa-nak számítana, de ez a prémium spa szinte minden funkciót biztosít, amelyek sokkal több helyet elfoglaló spa-kban találhatók. Kívülről kompakt, az A6L népszerű spa egyedülállók, városlakók és kis családok számára. Az A6L kényelmesen befogad 4 felnőttet és valójában akár 6 személyt is, mégis elfér a legtöbb fedélzeten, erkélyen és teraszon. Az A6L 3 vagy 4 JetPak®-kal rendelkezik a választott trim csomag szerint, valamint kényelmes lounger üléssel terápiás lábikra és lábfej jet-ekkel.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 3-4" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "2.24m x 2.03m x 0.86m" }
    ],
    highlights: [
      "Kis spa nagy funkcionalitással és prémium szolgáltatásokkal",
      "Népszerű egyedülállók, városlakók és kis családok számára",
      "Kényelmesen befogad 4 felnőttet, akár 6 személyt",
      "Elfér a legtöbb fedélzeten, erkélyen és teraszon",
      "Kényelmes lounger terápiás lábikra és lábfej jet-ekkel"
    ],
    rating: 4.7,
    reviews: 88,
    therapyPumps: 2,
    auxiliaryControls: 2,
    dryWeight: "440 kg",
    filledWeight: "2,640 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A6L kompakt külsővel, de bőséges belső térrel rendelkezik."
      },
      {
        name: "Kompakt prémium dizájn",
        description: "Kis spa nagy funkcionalitással - szinte minden funkciót biztosít, amelyek sokkal több helyet elfoglaló spa-kban találhatók, kompakt külső méretek mellett."
      },
      {
        name: "Kényelmes lounger ülés",
        description: "Prémium lounger ülés terápiás lábikra és lábfej jet-ekkel, amely teljes alsó test relaxációt biztosít a választott JetPak®-kal kombinálva."
      },
      {
        name: "Sokoldalú ülőkapacitás",
        description: "Kényelmesen befogad 4 felnőttet és valójában akár 6 személyt is, ideális egyedülállók, városlakók és kis családok számára."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Univerzális kompatibilitás",
        description: "Az A6L elfér a legtöbb fedélzeten, erkélyen és teraszon, így nem kell lemondania a terápiáról vagy relaxációról, ha nincs nagy helye."
      },
      {
        name: "Változó JetPak® konfiguráció",
        description: "3 vagy 4 JetPak® a választott trim csomag szerint, lehetővé téve a személyre szabott terápiás élmény megteremtését a rendelkezésre álló helyhez igazodva."
      }
    ]
  },
    {
    id: 13,
    name: "A5L",
    category: "aseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A5L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A5L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/A-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 3,
    loungeSeats: 1,
    jetpaks: 3,
    dimensions: "1.72m x 2.13m x 0.81m",
    waterCapacity: "1,200 liter",
    emptyWeight: "320 kg",
    fullWeight: "1,900 kg",
    electrical: "230V, 16A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az A5L a piacon ma elérhető legfunkciósabb kompakt 2-3 személyes spa. Elég kicsi beltéri, terasz és erkély telepítéshez, mégis olyan kényelmes és terápiás, mint a közel kétszer akkora spa-k. Az A5L tökéletes párok, üres fészkesek, egyedülállók vagy olyan személyek számára, akik személyes spa terápiát szeretnének túl sok hely elfoglalása nélkül.",
    features: [
      { icon: Users, label: "3 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Jetpak: 2-3" },
      { icon: Droplet, label: "Simplicity Water Care" },
      { icon: Ruler, label: "1.72m x 2.13m x 0.81m" }
    ],
    highlights: [
      "Legfunkciósabb kompakt 2-3 személyes spa",
      "Beltéri, terasz és erkély telepítéshez alkalmas",
      "Olyan kényelmes, mint a kétszer akkora spa-k",
      "Prémium lounger csukló, combhajlító és lábikra jet-ekkel",
      "Akár 3 JetPak® végleges személyre szabott relaxációhoz"
    ],
    rating: 4.5,
    reviews: 100,
    therapyPumps: 2,
    auxiliaryControls: 2,
    dryWeight: "320 kg",
    filledWeight: "1,900 kg",
    trimLevels: ["Select", "Choice w/ Luxury Package", "Choice"],
    jetPakOptions: [
      {
        name: "Gyrossage ST",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness CT",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Versa CT",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Trio ST",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth ST",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Refresh XT",
        description: "Nyugtató terápia, személyre szabható",
        jetCount: 8,
        jetTypes: ["Precision XT"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Recover XT",
        description: "Erős terápia, személyre szabható",
        jetCount: 4,
        jetTypes: ["Precision XT"],
        targetAreas: ["Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Rain ST",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Pulsator ST",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator ST",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "NeckPlus NX",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase NX",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Fusion CT",
        description: "Három lehetőség, válassza ki a masszázst",
        jetCount: 4,
        jetTypes: ["Fusion X3"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "FibroTherapy CT",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "DeepRelief ST",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate ST",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Átgondolt ülésrendszer",
        description: "Az A Series™ spa-k minden elrendezése, ülése és jet elhelyezése gondosan újraértékelésre került. Az A5L kompakt méretben optimális terápiás élményt nyújt."
      },
      {
        name: "Legfunkciósabb kompakt dizájn",
        description: "A piacon ma elérhető legfunkciósabb kompakt 2-3 személyes spa, amely elég kicsi beltéri, terasz és erkély telepítéshez."
      },
      {
        name: "Prémium lounger ülés",
        description: "Kényelmes prémium lounger ülés masszírozó csukló, combhajlító és lábikra jet-ekkel a teljes alsó test relaxációhoz."
      },
      {
        name: "Kompakt, mégis tágas",
        description: "Olyan kényelmes és terápiás, mint a közel kétszer akkora spa-k, miközben minimális helyet foglal el."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel a hatékonyabb leszíváshoz, fali kialakítással, ami hihetetlen helyet takarít meg az ülésekhez. Ez az iparági első lapos szűrő a szűrő teljes felületét használja."
      },
      {
        name: "Környezeti és fejtámla világítás",
        description: "Az A Series™ világítást újragondoltuk oly módon, hogy a spa használata biztonságos és élvezetesebb legyen. Világított pohártartók, vízi funkciók és vezérlők."
      },
      {
        name: "Érintőképernyős vezérlők",
        description: "A prémium érintőképernyős vezérlő javított ikonokat és olvashatóbb értesítő szöveget tartalmaz. Az A Series® Select spa-k 3 funkciós segédvezérlőkkel rendelkeznek."
      },
      {
        name: "Kényelmi fejtámlák",
        description: "Prémium A Series® fejtámlák minden szinten. Ezek a kényelemtesztelt fejtámlák nyak és gerinc kényelemre vannak igazítva, javított illeszkedést kínálva."
      },
      {
        name: "Prémium vízi funkciók",
        description: "Az A Series® prémium vízesés fokozza a relaxációs élmény hangulatát tiszta és sima, nem fröccsenő esésével. Ez a forradalmi funkció egy gomb megnyomásával vezérelhető."
      },
      {
        name: "Prémium audió rendszer",
        description: "Bővítse A Series® spa-ját egy opcionális prémium minőségű audiorendszerrel. Megbízható héj mögötti hangszórórendszer, prémium hangminőség és könnyű Bluetooth kapcsolat."
      },
      {
        name: "CloudControl 2™ Wifi",
        description: "Az opcionális CloudControl 2™ Wifi modullal és az intuitív okostelefon alkalmazással a vásárlók bárhonnan figyelemmel kísérhetik és vezérelhetik spa-jukat WiFi vagy digitális cellajellel."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető szerepet tölt be a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet hosszú élettartamra tervezett."
      },
      {
        name: "Univerzális telepíthetőség",
        description: "Tökéletes párok, üres fészkesek, egyedülállók számára, valamint beltéri, terasz és erkély telepítéshez - személyes spa terápia túl sok hely elfoglalása nélkül."
      },
      {
        name: "Személyre szabott relaxáció",
        description: "Akár 3 JetPak® választékával és masszírozó csukló, combhajlító és lábikra jet-ekkel a végleges személyre szabott relaxációs élményhez."
      }
    ]
  },
    {
    id: 14,
    name: "X8",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 0,
    jetpaks: 0,
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "1,840 liter",
    emptyWeight: "344 kg",
    fullWeight: "2,658 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "A tágas X8 spa egy nagy spa kiváló áron. Az X8 luxus és tágas spa élményt nyújt, amely megegyezik más prémium spa-kkal, mindezt olyan áron, amelyet csak az X Series tud kínálni. Élvezni fogja a bőséges lábteret és nyitott ülésrendszert ebben a kényelmes 8 üléses spa-ban, miközben maradandó kapcsolatokat épít családjával és barátaival.",
    features: [
      { icon: Users, label: "8 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Nagy spa kiváló áron",
      "Luxus és tágas spa élmény prémium minőségben",
      "Bőséges lábtér és nyitott ülésrendszer",
      "Kényelmes 8 üléses kialakítás",
      "Kiváló ár-érték arány az X Series-ben"
    ],
    rating: 3.9,
    reviews: 67,
    therapyPumps: 2,
    auxiliaryControls: 0,
    dryWeight: "344 kg",
    filledWeight: "2,658 kg",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Tágas nyitott ülésrendszer",
        description: "A kényelmes 8 üléses kialakítás bőséges lábteret és nyitott ülésrendszert biztosít, ideális családi és baráti összejövetelekhez."
      },
      {
        name: "Kiváló ár-érték arány",
        description: "Luxus és tágas spa élmény, amely megegyezik más prémium spa-kkal, olyan áron, amelyet csak az X Series tud kínálni."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és prémium színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      },
      {
        name: "Hatékony vezetékrendszer",
        description: "Az X Series® vezetékrendszer lehetővé teszi minden felhasználó számára a kielégítő masszázs élményt egyszerre, miközben energiahatékony működést biztosít."
      },
      {
        name: "Prémium külső megjelenés",
        description: "Tartós és stílusos fedél védi a spa-t és kiegészíti a külső dekorációt, biztosítva, hogy a spa egyedi és luxus kiegészítője legyen otthonának."
      }
    ]
  },
    {
    id: 15,
    name: "X8L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 8,
    loungeSeats: 1,
    jetpaks: 0,
    dimensions: "2.39m x 2.39m x 0.97m",
    waterCapacity: "1,703 liter",
    emptyWeight: "353 kg",
    fullWeight: "2,541 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "A kényelmes X8L spa egy tágas, minőségi spa prémium lounger üléssel. Az X8L különféle relaxációs típusokat kínál hidroterápiás élményhez, amely megegyezik a prémium spa-kkal, megfizethető X Series™ értéken. Nyújtózzon ki és relaxáljon a lounger-ben vagy élvezze a több másik prémium spa ülést barátokkal vagy családdal.",
    features: [
      { icon: Users, label: "8 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "2.39m x 2.39m x 0.97m" }
    ],
    highlights: [
      "Tágas, minőségi spa prémium lounger üléssel",
      "Különféle relaxációs típusok hidroterápiás élményhez",
      "Prémium spa élmény megfizethető X Series™ értéken",
      "Több prémium spa ülés társasági élményhez",
      "Tágas 8 üléses kialakítás lounger funkcióval"
    ],
    rating: 3.9,
    reviews: 34,
    therapyPumps: 2,
    auxiliaryControls: 0,
    dryWeight: "353 kg",
    filledWeight: "2,541 kg",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Prémium lounger ülés",
        description: "Kényelmes prémium lounger ülés, amely teljes testhosszúságú relaxációt és hidroterápiás élményt biztosít, tökéletes kinyújtózáshoz és pihenéshez."
      },
      {
        name: "Változatos relaxációs lehetőségek",
        description: "Különféle relaxációs típusokat kínál hidroterápiás élményhez, amely megegyezik a prémium spa-kkal, de megfizethető X Series™ értéken."
      },
      {
        name: "Társasági spa élmény",
        description: "Több prémium spa ülés barátokkal vagy családdal való élvezéshez, ideális társasági összejövetelekhez és családi időtöltéshez."
      },
      {
        name: "Hatékony vezetékrendszer",
        description: "Az X Series® vezetékrendszer lehetővé teszi minden felhasználó számára a kielégítő masszázs élményt egyszerre, miközben energiahatékony működést biztosít."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és prémium színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      }
    ]
  },
    {
    id: 16,
    name: "X7L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 0,
    dimensions: "2.24m x 2.24m x 0.91m",
    waterCapacity: "1,473 liter",
    emptyWeight: "308 kg",
    fullWeight: "2,212 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az X7L változatos és kivételesen kényelmes kontúrjai, ergonomikus dizájn és jól megtervezett ülésrendszere fejlett hidroterápiát és minőséget biztosít, mindezt egy minőségi 6 üléses spa-ban, amely kevesebb helyet igényel. Menjen előre, relaxáljon, élvezze és takarítson meg az X7L spa-jában.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "2.24m x 2.24m x 0.91m" }
    ],
    highlights: [
      "Változatos és kivételesen kényelmes kontúrök",
      "Ergonomikus dizájn és jól megtervezett ülésrendszer",
      "Fejlett hidroterápia minőségi 6 üléses spa-ban",
      "Kevesebb helyet igényel, mégis prémium élmény",
      "Lounger ülés a tökéletes relaxációhoz"
    ],
    rating: 3.7,
    reviews: 39,
    therapyPumps: 2,
    auxiliaryControls: 0,
    dryWeight: "308 kg",
    filledWeight: "2,212 kg",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Kivételesen kényelmes kontúrök",
        description: "Az X7L változatos és kivételesen kényelmes kontúrjai ergonomikus dizájnt és jól megtervezett ülésrendszert biztosítanak fejlett hidroterápiás élményhez."
      },
      {
        name: "Kompakt mégis tágas",
        description: "Minőségi 6 üléses spa, amely kevesebb helyet igényel, miközben fejlett hidroterápiát és prémium minőséget biztosít."
      },
      {
        name: "Lounger kényelem",
        description: "Prémium lounger ülés lehetővé teszi a teljes relaxációt és kinyújtózást a minőségi spa élményhez."
      },
      {
        name: "Hatékony vezetékrendszer",
        description: "Az X Series® vezetékrendszer lehetővé teszi minden felhasználó számára a kielégítő masszázs élményt egyszerre, miközben energiahatékony működést biztosít."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és prémium színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      }
    ]
  },
    {
    id: 17,
    name: "X6R",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6R_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6R_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 5,
    loungeSeats: 0,
    jetpaks: 0,
    dimensions: "2.01m átmérő x 0.86m",
    waterCapacity: "1,102 liter",
    emptyWeight: "228 kg",
    fullWeight: "1,651 kg",
    electrical: "230V, 16A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az X6R spa egy szórakoztató és értékben gazdag kerek spa akár 5-6 személy számára. A klasszikus kerek spa dizájn tökéletes elrendezést kínál beszélgetéshez és szórakozáshoz barátokkal és családdal, és az X6R nem fogja felrobbantani a költségvetését. Az X6R kizárólag Choice trim csomagban érhető el.",
    features: [
      { icon: Users, label: "5 Pozíció" },
      { icon: Layout, label: "0 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "2.01m átmérő x 0.86m" }
    ],
    highlights: [
      "Szórakoztató és értékben gazdag kerek spa dizájn",
      "Tökéletes beszélgetéshez és szórakozáshoz",
      "Klasszikus kerek elrendezés 5-6 személy számára",
      "Költségvetés-barát X Series™ érték",
      "Kizárólag Choice trim csomagban"
    ],
    rating: 4.3,
    reviews: 25,
    therapyPumps: 1,
    auxiliaryControls: 0,
    dryWeight: "228 kg",
    filledWeight: "1,651 kg",
    trimLevels: ["Choice"], // Only available in Choice trim
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Klasszikus kerek dizájn",
        description: "A hagyományos kerek spa forma tökéletes elrendezést biztosít társasági összejövetelekhez, beszélgetéshez és szórakozáshoz barátokkal és családdal."
      },
      {
        name: "Kompakt mégis tágas",
        description: "5-6 személy kényelmes elhelyezését biztosítja kompakt 2.01m átmérőjű kialakításban, ideális kisebb terekhez és költségvetés-tudatos vásárlóknak."
      },
      {
        name: "Értékben gazdag csomag",
        description: "Kiváló ár-érték arányt biztosít az X Series™ vonalban, költségvetés-barát megoldással prémium spa élményhez."
      },
      {
        name: "Hatékony vezetékrendszer",
        description: "Az X Series® vezetékrendszer lehetővé teszi minden felhasználó számára a kielégítő masszázs élményt egyszerre, miközben energiahatékony működést biztosít."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      }
    ]
  },
    {
    id: 18,
    name: "X6L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 0,
    dimensions: "2.24m x 2.03m x 0.86m",
    waterCapacity: "1,189 liter",
    emptyWeight: "261 kg",
    fullWeight: "1,944 kg",
    electrical: "230V, 32A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az X6L spa egy kompakt spa, amely kényelmes, helytakarékos és sokoldalúságra épült. A méretéhez képest páratlan tér és kényelem büszkélkedve, az X6L valójában akár 6 személynek biztosít ülőhelyet. Intenzív hidroterápiát biztosít a kényelmes lounger és sarok kapitány ülések. Legyen szó szórakoztatásról vagy intim este élvezéséről, az X6L spa teljesít.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "2.24m x 2.03m x 0.86m" }
    ],
    highlights: [
      "Kompakt spa páratlan tér és kényelem",
      "Akár 6 személynek biztosít ülőhelyet",
      "Kényelmes lounger és sarok kapitány ülések",
      "Intenzív hidroterápia helytakarékos dizájnban",
      "Sokoldalúság szórakoztatáshoz és intim estékhez"
    ],
    rating: 4.5,
    reviews: 75,
    therapyPumps: 1, // Select trim comes with 2nd pump upgrade
    auxiliaryControls: 0,
    dryWeight: "261 kg",
    filledWeight: "1,944 kg",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Kompakt sokoldalúság",
        description: "Az X6L spa kompakt mérete ellenére sokoldalúságra épült, kényelmes és helytakarékos, miközben páratlan teret és kényelmet biztosít a méretéhez képest."
      },
      {
        name: "Kényelmes lounger ülés",
        description: "Prémium lounger ülés teljes testhosszúságú relaxációhoz, amely intenzív hidroterápiás élményt nyújt kompakt térben."
      },
      {
        name: "Sarok kapitány ülések",
        description: "Speciálisan tervezett sarok kapitány ülések, amelyek optimális hidroterápiát és kényelmet biztosítanak minden felhasználó számára."
      },
      {
        name: "Intim és társasági funkció",
        description: "Tökéletes mind szórakoztatáshoz, mind intim esték élvezéséhez - a sokoldalúság teszi igazán különlegessé az X6L spa-t."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és prémium színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      },
      {
        name: "Select trim fejlesztések",
        description: "A Select trim csomag második szivattyú fejlesztéssel érkezik, prémium szűréssel, érintőképernyős vezérlőkkel és prémium belső világítási csomaggal."
      }
    ]
  },
    {
    id: 19,
    name: "X5L",
    category: "xseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X5L_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X5L_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/X-Series_Solitude-Timber_Lifestyle.jpeg"
    ],
    seats: 3,
    loungeSeats: 1,
    jetpaks: 0,
    dimensions: "1.73m x 2.13m x 0.79m",
    waterCapacity: "821 liter",
    emptyWeight: "206 kg",
    fullWeight: "1,350 kg",
    electrical: "230V, 16A",
    heater: "3kW Titanium",
    insulation: "Magas sűrűségű",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az X5L egy kis spa, amely nagy minőségben, kényelemben és terápiás lehetőségekben gazdag. Méretei tökéletessé teszik szűkös helyekhez és beltéri használatra, miközben a kényelmes lounger ülés és láb jet-ek relaxáló terápiát biztosítanak.",
    features: [
      { icon: Users, label: "3 Pozíció" },
      { icon: Layout, label: "1 Lounge Ülés" },
      { icon: ShieldCheck, label: "Hagyományos jet-ek" },
      { icon: Droplet, label: "Hatékony szűrés" },
      { icon: Ruler, label: "1.73m x 2.13m x 0.79m" }
    ],
    highlights: [
      "Kis spa nagy minőségben, kényelemben és terápiában",
      "Tökéletes szűkös helyekhez és beltéri használatra",
      "Kényelmes lounger ülés relaxáló terápiával",
      "Láb jet-ek speciális lábterápiához",
      "Kompakt méret, prémium funkcionalitás"
    ],
    rating: 4.4,
    reviews: 41,
    therapyPumps: 1,
    auxiliaryControls: 0,
    dryWeight: "206 kg",
    filledWeight: "1,350 kg",
    trimLevels: ["Select", "Choice"],
    jetPakOptions: [], // X Series uses conventional jets, not JetPaks
    includedFeatures: [
      {
        name: "LED hangulat világítás",
        description: "Stratégiailag elhelyezett világítás a spa-ban békésebb élményt teremt a hátsó kertben. Az X Series® világítás tartalmazza a jet világítást, fejtámla és weir világítást, főfényt, vízesés világítást, nyak jet világítást, külső világítást."
      },
      {
        name: "Tulajdonosi jet dizájn",
        description: "Az összes új X Series® jet egyedi és tulajdonosi dizájnja lehetővé teszi, hogy ez a széria kiemelkedjen. Szinte minden versenytárs ezen az árszinten ugyanazokat az unalmas polcról levett jet-eket kínálja."
      },
      {
        name: "Áramlás terelők",
        description: "Az X Series® vezetékrendszer továbbra is az egyik leghatékonyabb dizájn bármely hagyományos spa vonalban. Az áramlás terelő szelepek hozzáadása lehetővé teszi a nyomás növelését a spa egy adott részében."
      },
      {
        name: "Nyugtató vízi funkció",
        description: "Az X Series® spa vízi funkciója koordinált trim színeket, háttérvilágítást, spa héjba való integrációt és kényelmesen elhelyezett szelepet kínál be-ki és áramlás moduláció vezérléshez."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas minőségű megjelenés mellett ezek a hosszan tartó prémium spa fedél fejlett terasz szövettel rendelkeznek, UV és fakulás elleni kezeléssel, valamint időjárás állóak, és akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas vezető a 100%-ban famentesen spa építési technológiában. A tulajdonosi és szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a Bullfrog Spa hosszú élettartamra tervezett."
      },
      {
        name: "Magas sűrűségű szigetelés",
        description: "Az X Series® spa-kban használt magas R-értékű szigetelő hab maximális vezetékrendszer támogatást és nagymértékben javított energiahatékonyságot biztosít az alsóbbrendű vagy szigetelés nélküli spa-khoz képest."
      },
      {
        name: "Kis méret, nagy minőség",
        description: "Az X5L kis spa, amely nagy minőségben, kényelemben és terápiás lehetőségekben gazdag, ideális szűkös helyekhez és beltéri használatra."
      },
      {
        name: "Kényelmes lounger ülés",
        description: "Prémium lounger ülés relaxáló terápiával, amely teljes testhosszúságú kényelmet biztosít kompakt térben."
      },
      {
        name: "Láb jet terápia",
        description: "Speciális láb jet-ek célzott lábterápiához, amely kiegészíti a lounger ülés teljes test relaxációs élményét."
      },
      {
        name: "Szűkös hely optimalizáció",
        description: "Méretei tökéletessé teszik szűkös helyekhez és beltéri használatra, miközben prémium spa élményt nyújt."
      },
      {
        name: "Testreszabható színopciók",
        description: "Kibővített belső színopciók és prémium színkoordinált trim opciók, hogy testre szabhassa X Series™ spa-ját a tökéletes kiegészítőként a külső teréhez."
      },
      {
        name: "Hatékony működés",
        description: "Kompakt mérete ellenére hatékony vezetékrendszerrel és energiahatékony működéssel rendelkezik, biztosítva az optimális teljesítményt."
      }
    ]
  },
  {
    id: 20,
    name: "S200",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S200_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S200_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle_2.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle_3.jpeg"
    ],
    seats: 7,
    loungeSeats: 1,
    jetpaks: 4,
    dimensions: "5.18m x 2.38m x 1.32m",
    waterCapacity: "7,381 liter",
    emptyWeight: "1,233 kg",
    fullWeight: "8,595 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Élvezze az úszást és áztatást ebben a multifunkciós hátsókert vízi élményben. Az egyedülálló úszóáram rendszer, a testreszabható JetPak Therapy System™, többszintű terápiás ülések, ergonomikus fejtámlák, láb- és lábfejterápia, valamint végtelen lehetőség fitneszre és vízi játékra. Tökéletes családoknak, prémium terápiára és fitnesz rajongóknak.",
    features: [
      { icon: Users, label: "7 Pozíció" },
      { icon: Layout, label: "4 JetPak Ülés" },
      { icon: ShieldCheck, label: "JetPak: 4" },
      { icon: Droplet, label: "Simplicity Szűrés" },
      { icon: Ruler, label: "5.18m x 2.38m x 1.32m" }
    ],
    highlights: [
      "Egyedülálló úszóáram rendszer könnyebb úszáshoz",
      "JetPak Therapy System™ 16 cserélhető masszázzsal",
      "Többszintű terápiás ülések és ergonomikus fejtámlák",
      "Splash Zone játékterület családi szórakozáshoz",
      "Úszás, fitnesz, terápia és játék egyben"
    ],
    rating: 0,
    reviews: 0,
    therapyPumps: 3,
    auxiliaryControls: 1,
    dryWeight: "1,233 kg",
    filledWeight: "8,595 kg",
    trimLevels: ["Standard"],
    jetPakOptions: [
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Spinalssage",
        description: "Egyszerű gerinc könnyebbség",
        jetCount: 2,
        jetTypes: ["DualPulse"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Versa",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "DualPulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "AcuTherapy",
        description: "Célzott terápia stressz enyhítésére",
        jetCount: 8,
        jetTypes: ["Deep Relief", "Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Reliever",
        description: "Kombinált terápia",
        jetCount: 6,
        jetTypes: ["Oscillator", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Lumbar",
        description: "Célzott alsó háti terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "FirmRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Gyrossage",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram rendszer, amely segít a testet és lábakat vízszintesen tartani az úszósávban, könnyebb és hatékonyabb edzésekért."
      },
      {
        name: "JetPak Therapy System™",
        description: "Az egyetlen Swim Series™ spa az egyedülálló JetPak Therapy System™-mel, akár 16 cserélhető JetPak® masszázs opcióval személyre szabható terápiáért."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel hatékonyabb felszínszűréshez, helytakarékos fali kialakítás több ülőhelyért, iparági első lapos szűrő a kényelemért."
      },
      {
        name: "Clear Comfort AOP",
        description: "Szabadalmaztatott, díjnyertes fejlett oxidációs technológia automatikus működéshez, tiszta, biztonságos és egészséges fürdővízért."
      },
      {
        name: "Luxus biztonsági funkciók",
        description: "Többszintű ülések, beépített lépcsők, kapaszkodók az egyensúlyért, SwimDek® csúszásgátló burkolat a padlón és lépcsőkön a biztonságért."
      },
      {
        name: "Splash Zone játékterület",
        description: "Tágas terület, ahol az egész család együtt tölthet értékes időt, gyakorolhat úszást, játszhat vagy fröcsköl a Splash Pad területen."
      },
      {
        name: "Prémium spa világítás",
        description: "Vonzó világított funkciók a spa-ban és kívül, békés és biztonságos élményért. Világított úszóáram jet-ek vizuális jelzésért az edzésekhez."
      },
      {
        name: "Prémium vezérlők",
        description: "Érintőképernyős vezérlők, kényelmes multifunkciós segédvezérlők, egyérintéses úszás/spa mód váltás a gyors átállásért."
      },
      {
        name: "Patio Performance™ fedél",
        description: "Páratlan biztonság, minőség és tartósság fejlett esztétikai megjelenéssel, amely javítja a hátsókert kinézetét."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "100% famentes spa építési technológia vezető. Szabadalmaztatott EnduraFrame™ szerkezet hosszú élettartamért és megbízhatóságért."
      },
      {
        name: "Úszás edzések és gyakorlatok",
        description: "Testreszabható edzések és úszóprogramok a testípushoz és edzésstílushoz igazítva optimális eredményekért - kardiovaszkuláris egészség, súlykontroll, izomtónus."
      },
      {
        name: "Családi vízi szórakozás",
        description: "Tágas hely az egész család számára értékes közös időtöltésre, úszásgyakorlásra, játékokra vagy fröcskolésre a Splash Zone területen."
      }
    ]
  },
    {
    id: 21,
    name: "S180XD",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S180XD_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S180XD_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle_2.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_Lifestyle_3.jpeg"
    ],
    seats: 5,
    loungeSeats: 1,
    jetpaks: 4,
    dimensions: "4.57m x 2.38m x 1.52m",
    waterCapacity: "8,555 liter",
    emptyWeight: "1,148 kg",
    fullWeight: "9,698 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az S180XD 15 láb hosszú és extra mély, egyedülálló ülésrendezéssel, amely az úszást és fitneszet helyezi előtérbe. Multifunkciós spa élmény terápiával, változatos ülésekkel és beépített szórakozással. Úszóáram rendszer, JetPak Therapy System™ és tágas Splash Zone családi élményekhez.",
    features: [
      { icon: Users, label: "5 Pozíció" },
      { icon: Layout, label: "4 JetPak Ülés" },
      { icon: ShieldCheck, label: "JetPak: 4" },
      { icon: Droplet, label: "Simplicity Szűrés" },
      { icon: Ruler, label: "4.57m x 2.38m x 1.52m" }
    ],
    highlights: [
      "15 láb hosszú és extra mély - úszásra és fitneszre optimalizált",
      "Egyedülálló ülésrendezés prioritással az úszóterületre",
      "JetPak Therapy System™ 16+ cserélhető masszázzsal",
      "Anatomikusan hangolt úszóáram rendszer",
      "Multifunkciós spa élmény - úszás, terápia, család"
    ],
    rating: 0,
    reviews: 0,
    therapyPumps: 3,
    auxiliaryControls: 1,
    dryWeight: "1,148 kg",
    filledWeight: "9,698 kg",
    trimLevels: ["Standard"],
    jetPakOptions: [
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Versa",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "DualPulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Spinalssage",
        description: "Egyszerű gerinc könnyebbség",
        jetCount: 2,
        jetTypes: ["DualPulse"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "AcuTherapy",
        description: "Célzott terápia stressz enyhítésére",
        jetCount: 8,
        jetTypes: ["Deep Relief", "Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Reliever",
        description: "Kombinált terápia",
        jetCount: 6,
        jetTypes: ["Oscillator", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Lumbar",
        description: "Célzott alsó háti terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "FirmRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Gyrossage",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram rendszer, amely segít a testet és lábakat vízszintesen tartani az úszósávban, könnyebb és hatékonyabb edzésekért."
      },
      {
        name: "JetPak Therapy System™",
        description: "Az egyetlen Swim Series™ spa az egyedülálló JetPak Therapy System™-mel, akár 16+ cserélhető JetPak® masszázs opcióval személyre szabható terápiáért."
      },
      {
        name: "Extra mély design",
        description: "15 láb hosszú és extra mély kialakítás, amely az úszást és fitneszet helyezi előtérbe, miközben fenntartja a terápiás és családi funkciókat."
      },
      {
        name: "Prioritás az úszásra",
        description: "Egyedülálló ülésrendezés, amely prioritást ad az úszótérnek azok számára, akik komolyan veszik az úszást és fitneszet."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel hatékonyabb felszínszűréshez, helytakarékos fali kialakítás több ülőhelyért, iparági első lapos szűrő a kényelemért."
      },
      {
        name: "Clear Comfort AOP",
        description: "Szabadalmaztatott, díjnyertes fejlett oxidációs technológia automatikus működéshez, tiszta, biztonságos és egészséges fürdővízért."
      },
      {
        name: "Luxus biztonsági funkciók",
        description: "Többszintű ülések, beépített lépcsők, kapaszkodók az egyensúlyért, SwimDek® csúszásgátló burkolat a padlón és lépcsőkön a biztonságért."
      },
      {
        name: "Splash Zone játékterület",
        description: "Tágas terület, ahol az egész család együtt tölthet értékes időt, gyakorolhat úszást, játszhat vagy fröcsköl a Splash Pad területen."
      },
      {
        name: "Prémium spa világítás",
        description: "Vonzó világított funkciók a spa-ban és kívül, békés és biztonságos élményért. Világított úszóáram jet-ek vizuális jelzésért az edzésekhez."
      },
      {
        name: "Prémium vezérlők",
        description: "Érintőképernyős vezérlők, kényelmes multifunkciós segédvezérlők, egyérintéses úszás/spa mód váltás a gyors átállásért."
      },
      {
        name: "Patio Performance™ fedél",
        description: "Páratlan biztonság, minőség és tartósság fejlett esztétikai megjelenéssel, amely javítja a hátsókert kinézetét."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "100% famentes spa építési technológia vezető. Szabadalmaztatott EnduraFrame™ szerkezet hosszú élettartamért és megbízhatóságért."
      },
      {
        name: "Úszás edzések és gyakorlatok",
        description: "Testreszabható edzések és úszóprogramok a testípushoz és edzésstílushoz igazítva optimális eredményekért - kardiovaszkuláris egészség, súlykontroll, izomtónus."
      },
      {
        name: "Fitnesz-központú kialakítás",
        description: "15 láb hosszú és extra mély méret biztosítja a maximális úszóteret komoly fitnesz használóknak, miközben megőrzi a spa funkcionalitást."
      }
    ]
  },
    {
    id: 22,
    name: "S150",
    category: "swimseries",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S150_top-down.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S150_top-down.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_S150_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_S150_Lifestyle_2.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/Swim-Series_S150_Lifestyle_3.jpeg"
    ],
    seats: 13,
    loungeSeats: 1,
    jetpaks: 4,
    dimensions: "3.86m x 2.38m x 1.32m",
    waterCapacity: "4,504 liter",
    emptyWeight: "907 kg",
    fullWeight: "5,409 kg",
    electrical: "400V, 32A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Élvezze a fejlett hátsókert vízi élményt a teljesen új Swim Series™-szel. Építse fel állóképességét és erejét előre beállított vagy testreszabható fitnesz programokkal, ellenállásos edzéssel és hellyel bármilyen számú alacsony hatású, vízi edzéshez. A hagyományos Bullfrog Spas minőség és megbízhatóság, vonzó esztétika, végtelen használati lehetőségekre tervezett funkciók és rendkívül funkcionális elrendezés.",
    features: [
      { icon: Users, label: "13 Pozíció" },
      { icon: Layout, label: "4 JetPak Ülés" },
      { icon: ShieldCheck, label: "JetPak: 4" },
      { icon: Droplet, label: "Simplicity Szűrés" },
      { icon: Ruler, label: "3.86m x 2.38m x 1.32m" }
    ],
    highlights: [
      "13 ülőhellyel a legnagyobb Swim Series™ modell",
      "Egyedülálló úszóáram rendszer könnyebb úszáshoz",
      "JetPak Therapy System™ 16+ cserélhető masszázzsal",
      "Splash Zone játékterület családi szórakozáshoz",
      "Állóképesség építés és erő fejlesztés egy helyen"
    ],
    rating: 5.0,
    reviews: 12,
    therapyPumps: 2,
    auxiliaryControls: 1,
    dryWeight: "907 kg",
    filledWeight: "5,409 kg",
    trimLevels: ["Standard"],
    jetPakOptions: [
      {
        name: "FibroTherapy",
        description: "Terápia fájdalomcsillapításra és optimális egészségért",
        jetCount: 6,
        jetTypes: ["Deep Relief", "Oscillator"],
        targetAreas: ["Alsó hát", "Felső hát"]
      },
      {
        name: "NeckPlus",
        description: "Erős nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief Neck", "FirmRelief", "Oscillator"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "NeckEase",
        description: "Relaxáló nyak és váll terápia",
        jetCount: 8,
        jetTypes: ["DeepRelief (Hát és nyak)", "FirmRelief"],
        targetAreas: ["Nyak és vállak", "Alsó hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Trio",
        description: "Optimális könnyebbség és relaxáció",
        jetCount: 3,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Versa",
        description: "Sokoldalú terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "Oscillator", "DualPulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "DeepRelief",
        description: "Erős terápia fájdalmak és fájások ellen",
        jetCount: 10,
        jetTypes: ["Deep Relief"],
        targetAreas: ["Alsó hát", "Felső hát", "Gerinc"]
      },
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Spinalssage",
        description: "Egyszerű gerinc könnyebbség",
        jetCount: 2,
        jetTypes: ["DualPulse"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "AcuTherapy",
        description: "Célzott terápia stressz enyhítésére",
        jetCount: 8,
        jetTypes: ["Deep Relief", "Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Reliever",
        description: "Kombinált terápia",
        jetCount: 6,
        jetTypes: ["Oscillator", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Lumbar",
        description: "Célzott alsó háti terápia",
        jetCount: 6,
        jetTypes: ["DeepRelief", "FirmRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Gyrossage",
        description: "Mély nyugtató hatás",
        jetCount: 5,
        jetTypes: ["Single Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "Egyedi úszóáram rendszer",
        description: "Anatómiailag hangolt úszóáram rendszer, amely segít a testet és lábakat vízszintesen tartani az úszósávban, könnyebb és hatékonyabb edzésekért."
      },
      {
        name: "JetPak Therapy System™",
        description: "Az egyetlen Swim Series™ spa az egyedülálló JetPak Therapy System™-mel, akár 16+ cserélhető JetPak® masszázs opcióval személyre szabható terápiáért."
      },
      {
        name: "Simplicity® szűrőrendszer",
        description: "Kettős beömlővel hatékonyabb felszínszűréshez, helytakarékos fali kialakítás több ülőhelyért, iparági első lapos szűrő a kényelemért."
      },
      {
        name: "Clear Comfort AOP",
        description: "Szabadalmaztatott, díjnyertes fejlett oxidációs technológia automatikus működéshez, tiszta, biztonságos és egészséges fürdővízért."
      },
      {
        name: "Luxus biztonsági funkciók",
        description: "Többszintű ülések, beépített lépcsők, kapaszkodók az egyensúlyért, SwimDek® csúszásgátló burkolat a padlón és lépcsőkön a biztonságért."
      },
      {
        name: "Splash Zone játékterület",
        description: "Tágas terület, ahol az egész család együtt tölthet értékes időt, gyakorolhat úszást, játszhat vagy fröcsköl a Splash Pad területen."
      },
      {
        name: "Prémium spa világítás",
        description: "Vonzó világított funkciók a spa-ban és kívül, békés és biztonságos élményért. Világított úszóáram jet-ek vizuális jelzésért az edzésekhez."
      },
      {
        name: "Prémium vezérlők",
        description: "Érintőképernyős vezérlők, kényelmes multifunkciós segédvezérlők, egyérintéses úszás/spa mód váltás a gyors átállásért."
      },
      {
        name: "Patio Performance™ fedél",
        description: "Páratlan biztonság, minőség és tartósság fejlett esztétikai megjelenéssel, amely javítja a hátsókert kinézetét."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "100% famentes spa építési technológia vezető. Szabadalmaztatott EnduraFrame™ szerkezet hosszú élettartamért és megbízhatóságért."
      },
      {
        name: "Állóképesség és erő építés",
        description: "Előre beállított vagy testreszabható fitnesz programok, ellenállásos edzés és hely bármilyen számú alacsony hatású vízi edzéshez."
      },
      {
        name: "13 ülőhelyes nagy kapacitás",
        description: "A legnagyobb Swim Series™ modell 13 ülőhellyel, bőséges helyet biztosítva mindenki számára a szórakozáshoz."
      },
      {
        name: "Rendkívül funkcionális elrendezés",
        description: "Végtelen használati lehetőségekre tervezett funkciók és rendkívül funkcionális elrendezés, amelyet biztosan imádni fog."
      },
      {
        name: "Multifunkciós hátsókert élmény",
        description: "Dolgozzon, játsszon vagy relaxáljon feszültségoldás céljából, egész évben, saját hátsókertje kényelméből."
      }
    ]
  },
    {
    id: 24,
    name: "STIL7",
    category: "stil",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL7_Crop_Final.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL7_Crop_Final.png",
      "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL7_3pt-crop-final.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/STIL_Lifestyle.jpeg",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/STIL_Modern_Design.jpeg"
    ],
    seats: 6,
    loungeSeats: 2,
    jetpaks: 3,
    dimensions: "2.24m x 2.13m x 0.86m",
    waterCapacity: "1,488 liter",
    emptyWeight: "299 kg",
    fullWeight: "2,315 kg",
    electrical: "230V, 16A",
    heater: "3kW Titanium",
    insulation: "Nagy sűrűségű hab",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "Az elegáns STIL7 átgondoltan egyszerű nyitott koncepciót kínál bőséges hellyel. A lenyűgöző modern design egyedülálló a spa-k között, ideális esztétikai középpontot teremt a jól megtervezett terasz környezetben. Három bio-mérnöki JetPak masszázs választékával és kettős lounger üléselrendezéssel maximális helyet és rugalmasságot kap minden ülés használatához.",
    features: [
      { icon: Users, label: "6 Pozíció" },
      { icon: Layout, label: "2 Lounger" },
      { icon: ShieldCheck, label: "JetPak: 3" },
      { icon: Droplet, label: "Dedikált Szűrés" },
      { icon: Ruler, label: "2.24m x 2.13m" }
    ],
    highlights: [
      "Egyedülálló modern design esztétika",
      "Átgondoltan egyszerű nyitott koncepció",
      "Kettős lounger üléselrendezés",
      "Három bio-mérnöki JetPak masszázs",
      "Ideális esztétikai középpont a teraszhoz"
    ],
    rating: 3.8,
    reviews: 38,
    therapyPumps: 1,
    auxiliaryControls: 0,
    dryWeight: "299 kg",
    filledWeight: "2,315 kg",
    trimLevels: ["Standard", "Premium"],
    jetPakOptions: [
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System®",
        description: "Forradalmi módszer a személyes spa tervezésére. Az ultra-hatékony csövezési technológia akár 90%-kal csökkenti a hagyományos fürdőkádak csövezését és kötéseit, miközben jobb teljesítményt és testreszabási lehetőségeket biztosít."
      },
      {
        name: "Nagy sűrűségű szigetelés",
        description: "A teljes hab design teljesen szigeteli a spa-t a hőveszteség megelőzésére, még a leghidegebb éghajlaton is. Ultra energiahatékony hab a spa szerkezetének belsejében a hő bezárásához."
      },
      {
        name: "Modern Design",
        description: "A STIL™ tiszta vonalakat és modern design esztétikát kínál, amely egyedülálló a mai piacán. Az visszafogott elegancia javítja bármely otthon megjelenését, és tökéletesen illeszkedik a modern építészeti és tájépítészeti tervekhez."
      },
      {
        name: "Prémium integrált vízesések",
        description: "Semmi sem járul hozzá jobban a spa relaxáció hangulatához, mint egy békés és relaxáló vízesés. A zuhanó vizek nyugtató hangjai gyönyörű trópusi zuhatagokra emlékeztetnek, másodpercek alatt elszállítanak a nyugodt helyre."
      },
      {
        name: "Dedikált szűrőszivattyúk",
        description: "A dedikált szűrőszivattyú a szűrőrendszer hatékonyságára van kalibrálva, naponta többször keringeti a spa összes vizét. Ráadásul egy dedikált szűrőszivattyú sokkal csendesebben és hatékonyabban működik."
      },
      {
        name: "Prémium érintővezérlők",
        description: "Prémium érintőképernyős vezérlők a könnyű használat és a spa feletti irányítás érdekében."
      },
      {
        name: "Patio Performance™ fedél",
        description: "A magas színvonalú megjelenés mellett ezek a tartós prémium spa fedelek fejlett terasz szövetet tartalmaznak, UV és színvesztés elleni kezeléssel, valamint időjárás elleni védelemmel. Akár 25%-kal könnyebbek a standard vinyl spa fedeleknél."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "A Bullfrog Spas a 100% famentes spa építési technológia vezetője. A szabadalmaztatott EnduraFrame™ spa támasztószerkezet azt jelenti, hogy a spa tartósra van tervezve. Nincs fa, ami elrothadhat vagy elgörbülhet."
      }
    ]
  },
    {
    id: 24,
    name: "STIL5",
    category: "stil",
    image: "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL5_Crop_Final.png",
    images: [
      "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL5_Crop_Final.png",
      "https://www.bullfrogspas.com/wp-content/uploads/2023/03/STIL5-3pt-crop.png",
      "https://cdn.mediavalet.com/usca/bullfrogspas/mLzabEo9NkKqhpYsGljN2A/ecDVaPHmj066iWT7ycdBjw/XLarge/STIL_Lifestyle.jpeg"
    ],
    seats: 4,
    loungeSeats: 0,
    jetpaks: 3,
    dimensions: "2.08m x 1.69m x 0.79m",
    waterCapacity: "996 liter",
    emptyWeight: "206 kg",
    fullWeight: "1,456 kg",
    electrical: "230V, 16A",
    heater: "3kW Titanium",
    insulation: "FullFoam™",
    warranty: "7 év szerkezet, 2 év alkatrész",
    description: "A STIL5 inspirált funkcionális modern designt kínál térhatékony elrendezéssel, amely tökéletes városi környezethez és beltéri használathoz. Okosan megtervezett dőlésszög és nyitott koncepció, amely különféle relaxációs pozíciókat tesz lehetővé. Nincs más kompakt spa a piacon, amely ilyen átgondoltan lett volna megtervezve.",
    features: [
      { icon: Users, label: "4 Pozíció" },
      { icon: Layout, label: "3 JetPak Ülés" },
      { icon: ShieldCheck, label: "JetPak: 3" },
      { icon: Droplet, label: "Prémium Szűrés" },
      { icon: Ruler, label: "2.08m x 1.69m" }
    ],
    highlights: [
      "Kompakt városi design beltéri használatra",
      "Térhatékony elrendezés kis terekhez",
      "Okosan megtervezett dőlésszög",
      "Három bio-mérnöki JetPak masszázs",
      "Modern funkcionalitás kompakt méretben"
    ],
    rating: 3.8,
    reviews: 18,
    therapyPumps: 1,
    auxiliaryControls: 0,
    dryWeight: "206 kg",
    filledWeight: "1,456 kg",
    trimLevels: ["Standard", "Premium"],
    jetPakOptions: [
      {
        name: "Alleviate",
        description: "Tökéletesen igazított relaxációhoz",
        jetCount: 8,
        jetTypes: ["Firm Relief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Oscillator",
        description: "Maximális relaxáció, terápiás gyúrás",
        jetCount: 4,
        jetTypes: ["Oscillator"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "Pulsator",
        description: "Hipnotikus, ritmikus masszázs",
        jetCount: 6,
        jetTypes: ["Dual Pulse"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      },
      {
        name: "RainShower",
        description: "Sima érzés, mint semmi más",
        jetCount: 42,
        jetTypes: ["Rain"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát", "Gerinc"]
      },
      {
        name: "SpinalHealth",
        description: "Erős gerincterápia",
        jetCount: 8,
        jetTypes: ["DeepRelief"],
        targetAreas: ["Alsó hát", "Gerinc"]
      },
      {
        name: "Wellness",
        description: "Maximális egészség és wellness",
        jetCount: 8,
        jetTypes: ["DualPulse", "FirmRelief", "DeepRelief"],
        targetAreas: ["Alsó hát", "Középső hát", "Felső hát"]
      }
    ],
    includedFeatures: [
      {
        name: "JetPak Therapy System®",
        description: "Forradalmi módon mérnöki személyes spa. Az ultra-hatékony csövezési technológia akár 90%-kal csökkenti a hagyományos fürdőkádak csövezését."
      },
      {
        name: "Kompakt városi design",
        description: "Térhatékony elrendezés városi környezethez és beltéri használathoz optimalizálva, tökéletes kis terekhez."
      },
      {
        name: "Nagy sűrűségű szigetelés",
        description: "Teljes hab design, amely teljesen szigeteli a spa-t a hőveszteség megelőzésére, még a leghidegebb éghajlaton is."
      },
      {
        name: "Modern Design",
        description: "Tiszta vonalak és modern esztétika, okosan megtervezett dőlésszög különféle relaxációs pozíciókhoz."
      },
      {
        name: "Prémium integrált vízesések",
        description: "A békés és relaxáló vízesés hozzáadja a spa relaxáció hangulatát kompakt méretben is."
      },
      {
        name: "Dedikált szűrőszivattyúk",
        description: "A dedikált szűrőszivattyú hatékonyan keringeti a vizet, csendesebb és energiatakarékosabb működésért."
      },
      {
        name: "Prémium érintővezérlők",
        description: "Prémium érintőképernyős vezérlők a könnyű használat és a spa feletti teljes irányítás érdekében."
      },
      {
        name: "Patio Performance™ fedél",
        description: "Könnyű, UV és színvesztés elleni védelemmel ellátott fejlett terasz szövet, 25%-kal könnyebb a standard fedelekhez képest."
      },
      {
        name: "EnduraFrame™ konstrukció",
        description: "100% famentes spa építési technológia. Szabadalmaztatott EnduraFrame™ szerkezet hosszú élettartamért és megbízhatóságért."
      },
      {
        name: "Intelligens térhasználat",
        description: "Minden centiméter okosan ki van használva, maximális kényelem kompakt méretben városi környezethez."
      }
    ]
  }
];

export default products;