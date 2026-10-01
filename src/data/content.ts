import {
  NavItem,
  HeroStat,
  OrbitPillar,
  SolarSolution,
  ProductItem,
  ProcessStep,
  WhyStarFeature,
  ProjectItem,
  TimelineMilestone,
} from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
];

/** Single source of truth for public contact details — update here to sync site-wide. */
export const CONTACT_INFO = {
  company: 'Star Enterprises',
  phoneDisplay: '+91 93480 86867',
  phoneTel: '+919348086867',
  whatsapp: '919348086867',
  email: 'starenterprisesbbsr@gmail.com',
  hours: 'Monday – Saturday, 9:00 AM – 7:00 PM',
  responseTime: 'Typically within one business day',
  addressLines: ['Plot No. 12, Industrial Area', 'Bhubaneswar, Odisha – 751024'],
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Industrial+Area+Bhubaneswar+Odisha+751024',
  cityLabel: 'Bhubaneswar, Odisha',
  region: 'Residential, commercial & industrial solar across Odisha',
  social: {
    linkedin: 'https://www.linkedin.com/',
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    youtube: 'https://www.youtube.com/',
  },
} as const;

/** Contact page only — not shown in footer */
export const CONTACT_PAGE_PHONES = [
  { display: '+91 93480 86867', tel: '+919348086867' },
  { display: '+91 90403 10328', tel: '+919040310328' },
  { display: '+91 70085 17362', tel: '+917008517362' },
] as const;

export const ENQUIRY_SEGMENTS = [
  { id: 'residential', label: 'Residential', hint: 'Homes & villas' },
  { id: 'commercial', label: 'Commercial', hint: 'Offices & retail' },
  { id: 'industrial', label: 'Industrial', hint: 'Plants & sheds' },
  { id: 'other', label: 'Not Sure Yet', hint: 'We will guide you' },
] as const;

export const HERO_STATS: HeroStat[] = [
  {
    id: '01',
    number: '01',
    title: 'Clean Energy',
    subtitle: 'Zero-emission solar generation architecture',
    metric: '100% Renewable',
  },
  {
    id: '02',
    number: '02',
    title: 'End-to-End Solutions',
    subtitle: 'Turnkey EPC & lifecycle engineering',
    metric: 'Full Lifecycle',
  },
  {
    id: '03',
    number: '03',
    title: 'Reliable Technology',
    subtitle: 'Tier-1 photovoltaic & grid-tied inverters',
    metric: 'High Efficiency',
  },
  {
    id: '04',
    number: '04',
    title: 'Future-Ready Infrastructure',
    subtitle: 'Microgrid & BESS storage integration',
    metric: 'Smart Grid Capable',
  },
];

export const ORBIT_PILLARS: OrbitPillar[] = [
  {
    id: 'energy',
    name: 'ENERGY',
    tagline: 'Infinite Clean Power',
    description: 'Harnessing solar irradiance into reliable, high-yield electrical power for grids, industries, and homes.',
    angle: 0,
  },
  {
    id: 'direction',
    name: 'DIRECTION',
    tagline: 'Strategic Decarbonization',
    description: 'Guiding corporate partners and communities toward total energy autonomy and net-zero sustainability milestones.',
    angle: 90,
  },
  {
    id: 'progress',
    name: 'PROGRESS',
    tagline: 'Next-Gen Technology',
    description: 'Continuous engineering advancement in photovoltaic conversion efficiency, inverter telemetry, and intelligent storage.',
    angle: 180,
  },
  {
    id: 'connection',
    name: 'CONNECTION',
    tagline: 'Enduring Partnerships',
    description: 'Building transparent, collaborative long-term relationships that power shared prosperity across generations.',
    angle: 270,
  },
];

export const SOLAR_SOLUTIONS: SolarSolution[] = [
  {
    id: 'residential',
    title: 'RESIDENTIAL SOLAR',
    scale: 'Distributed Generation',
    tagline: 'Clean energy solutions for homes',
    description:
      'Engineered for premium residential properties requiring uncompromising aesthetics, continuous resilience, and maximum electricity tariff reductions through intelligent rooftop solar arrays.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    features: [
      'High-efficiency monocrystalline PERC & TOPCon modules',
      'Integrated hybrid battery storage for 24/7 backup resilience',
      'Real-time smartphone generation and consumption telemetry',
      'Sleek architectural black-frame roof integration',
    ],
    idealFor: ['Single-family homes', 'Luxury estates', 'Residential housing communities'],
    specs: [
      { label: 'System Sizing', value: '3 kW – 25 kW+' },
      { label: 'Storage Option', value: '5 kWh – 30 kWh BESS' },
      { label: 'Design Warranty', value: '25-Year Performance' },
    ],
  },
  {
    id: 'commercial-industrial',
    title: 'COMMERCIAL & INDUSTRIAL',
    scale: 'Enterprise Scale',
    tagline: 'High-performance solar systems designed for businesses and industrial facilities',
    description:
      'High-capacity rooftop and ground-mounted solar power plants tailored to heavy manufacturing, corporate campuses, warehousing, and commercial hubs seeking reduced OPEX and ESG compliance.',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Engineered load matching for peak demand tariff shaving',
      'Non-penetrating structural ballast and elevated canopies',
      'Multi-string inverter topologies with high MPPT granularity',
      'SCADA integration with facility energy management systems (EMS)',
    ],
    idealFor: ['Manufacturing plants', 'Logistics warehouses', 'Corporate tech parks', 'Retail centers'],
    specs: [
      { label: 'System Sizing', value: '50 kW – 5 MW+' },
      { label: 'Mounting Types', value: 'Metal Roof / RCC / Solar Carports' },
      { label: 'Monitoring', value: 'Industrial SCADA & Cloud IoT' },
    ],
  },
  {
    id: 'utility-scale',
    title: 'UTILITY / LARGE-SCALE SOLAR',
    scale: 'Mega-Infrastructure',
    tagline: 'Scalable renewable-energy infrastructure for large projects',
    description:
      'Massive ground-mounted utility solar farms and renewable microgrids engineered with single-axis tracking, high-voltage substation integration, and grid-stability capabilities.',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Bifacial solar modules paired with single-axis solar trackers',
      'Centralized and distributed MV/HV transformer skids',
      'Grid compliance & power plant controller (PPC) automation',
      'Utility-scale BESS containerized energy storage systems',
    ],
    idealFor: ['National utility grids', 'Independent Power Producers (IPPs)', 'Regional renewable zones'],
    specs: [
      { label: 'System Sizing', value: '10 MW – 500 MW+' },
      { label: 'Tracking Tech', value: 'Smart AI Single-Axis Trackers' },
      { label: 'Grid Voltage', value: '11 kV / 33 kV / 132 kV+' },
    ],
  },
];

export const PRODUCT_CATEGORIES = [
  'All',
  'Solar Panel',
  'Inverter',
  'Battery',
  'Cable',
  'Earthing Kit',
] as const;

export const PRODUCT_BRANDS = [
  'Waaree',
  'Adani Solar',
  'Luminous',
  'Rayzon Solar',
  'Microtek',
  'Eastman',
  'Durasol',
  'Involtics',
] as const;

/** Official marks for the home page partner marquee (`/public/brands/*`). */
export const PARTNER_BRANDS = [
  { name: 'Waaree', logo: '/brands/waaree.png' },
  { name: 'Adani Solar', logo: '/brands/adani.png' },
  { name: 'Luminous', logo: '/brands/luminous.png' },
  { name: 'Rayzon Solar', logo: '/brands/rayzon.png' },
  { name: 'Microtek', logo: '/brands/microtek.png' },
  { name: 'Eastman', logo: '/brands/eastman.png' },
  { name: 'Durasol', logo: '/brands/durasol.png' },
  { name: 'Involtics', logo: '/brands/involtics.webp' },
] as const;

const IMG = {
  panel: '/media/panel.jpg',
  inverter: '/media/inverter.jpg',
  battery: '/media/battery.jpg',
  cable: '/media/cable.jpg',
  earth: '/media/earth.jpg',
};

export const PRODUCTS_TECHNOLOGY: ProductItem[] = [
  {
    id: 'waaree-bifacial-540',
    category: 'Solar Panel',
    brand: 'Waaree',
    name: 'Waaree Bifacial 540 Wp',
    headline: 'Waaree Energies — dual-glass bifacial module',
    description:
      'High-yield bifacial panel from Waaree, specified for rooftop and ground-mount systems. Rear-side gain improves generation on reflective roofs and open sites.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial dual-glass construction', '540 Wp nameplate rating', 'Suitable for residential and C&I rooftops'],
    techSpec: '540 Wp | Bifacial',
  },
  {
    id: 'waaree-bifacial-535',
    category: 'Solar Panel',
    brand: 'Waaree',
    name: 'Waaree Bifacial 535 Wp',
    headline: 'Waaree Energies — dual-glass bifacial module',
    description:
      '535 Wp bifacial Waaree module for projects that need a slightly lower wattage while keeping the same bifacial architecture and long-term durability.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial dual-glass construction', '535 Wp nameplate rating', 'Matched to Waaree 540 Wp string designs'],
    techSpec: '535 Wp | Bifacial',
  },
  {
    id: 'waaree-topcon-605',
    category: 'Solar Panel',
    brand: 'Waaree',
    name: 'Waaree TOPCon 605 Wp',
    headline: 'Waaree Energies — N-Type TOPCon',
    description:
      'N-Type TOPCon module from Waaree for higher efficiency and better high-temperature performance than conventional PERC, used on commercial and industrial arrays.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['N-Type TOPCon cell technology', '605 Wp nameplate rating', 'Low temperature coefficient for Odisha heat'],
    techSpec: '605 Wp | TOPCon',
  },
  {
    id: 'waaree-topcon-610',
    category: 'Solar Panel',
    brand: 'Waaree',
    name: 'Waaree TOPCon 610 Wp',
    headline: 'Waaree Energies — N-Type TOPCon',
    description:
      '610 Wp TOPCon panel from Waaree. Higher wattage per module reduces BOS count on larger rooftops and ground-mount tables.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['N-Type TOPCon cell technology', '610 Wp nameplate rating', 'Fewer modules per kW of array'],
    techSpec: '610 Wp | TOPCon',
  },
  {
    id: 'waaree-topcon-615',
    category: 'Solar Panel',
    brand: 'Waaree',
    name: 'Waaree TOPCon 615 Wp',
    headline: 'Waaree Energies — N-Type TOPCon',
    description:
      'Top of the Waaree TOPCon range we stock at 615 Wp — specified where roof area is tight and every watt of nameplate matters.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['N-Type TOPCon cell technology', '615 Wp nameplate rating', 'High power density for limited roof area'],
    techSpec: '615 Wp | TOPCon',
  },
  {
    id: 'adani-topcon-605',
    category: 'Solar Panel',
    brand: 'Adani Solar',
    name: 'Adani TOPCon 605 Wp',
    headline: 'Adani Solar — N-Type TOPCon',
    description:
      'Adani Solar TOPCon 605 Wp module. Same class of N-Type technology as our Waaree TOPCon line, specified when the project calls for Adani as the panel house.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['N-Type TOPCon cell technology', '605 Wp nameplate rating', 'Adani Solar manufacturing line'],
    techSpec: '605 Wp | TOPCon',
  },
  {
    id: 'luminous-bifacial-550',
    category: 'Solar Panel',
    brand: 'Luminous',
    name: 'Luminous Bifacial 550 Wp',
    headline: 'Luminous — bifacial photovoltaic module',
    description:
      'Luminous 550 Wp bifacial panel for homes and small commercial systems that already standardise on Luminous inverters and storage.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial module', '550 Wp nameplate rating', 'Pairs cleanly with Luminous GTI inverters'],
    techSpec: '550 Wp | Bifacial',
  },
  {
    id: 'luminous-bifacial-555',
    category: 'Solar Panel',
    brand: 'Luminous',
    name: 'Luminous Bifacial 555 Wp',
    headline: 'Luminous — bifacial photovoltaic module',
    description:
      '555 Wp Luminous bifacial module — a step up from 550 Wp for slightly higher array output on the same mounting footprint.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial module', '555 Wp nameplate rating', 'Residential and small C&I rooftops'],
    techSpec: '555 Wp | Bifacial',
  },
  {
    id: 'rayzon-bifacial-550',
    category: 'Solar Panel',
    brand: 'Rayzon Solar',
    name: 'Rayzon Bifacial 550 Wp',
    headline: 'Rayzon Solar — bifacial photovoltaic module',
    description:
      'Rayzon Solar 550 Wp bifacial panel. Specified alongside Waaree and Adani when the project brief calls for this house.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial module', '550 Wp nameplate rating', 'Rayzon Solar product line'],
    techSpec: '550 Wp | Bifacial',
  },
  {
    id: 'rayzon-bifacial-500',
    category: 'Solar Panel',
    brand: 'Rayzon Solar',
    name: 'Rayzon Bifacial 500 Wp',
    headline: 'Rayzon Solar — bifacial photovoltaic module',
    description:
      '500 Wp Rayzon bifacial module for compact rooftops and retrofit strings that need a lower wattage than 550 Wp.',
    iconName: 'SunMedium',
    image: IMG.panel,
    keyFeatures: ['Bifacial module', '500 Wp nameplate rating', 'Compact rooftop and retrofit arrays'],
    techSpec: '500 Wp | Bifacial',
  },
  {
    id: 'microtek-3kw-gti',
    category: 'Inverter',
    brand: 'Microtek',
    name: 'Microtek 3 kW GTI',
    headline: 'Grid-tie inverter — 3 kW',
    description:
      'Microtek 3 kW grid-tie inverter for residential rooftop systems. Converts DC from the array to AC for on-grid use.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['3 kW grid-tie topology', 'Residential rooftop sizing', 'On-grid export / self-consumption'],
    techSpec: '3 kW | GTI',
  },
  {
    id: 'luminous-3kw-gti',
    category: 'Inverter',
    brand: 'Luminous',
    name: 'Luminous 3 kW GTI',
    headline: 'Grid-tie inverter — 3 kW',
    description:
      'Luminous 3 kW GTI for homes that standardise on Luminous panels, inverters and backup. Grid-tied conversion with brand-matched service.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['3 kW grid-tie topology', 'Matches Luminous panel packages', 'Residential on-grid systems'],
    techSpec: '3 kW | GTI',
  },
  {
    id: 'eastman-3kw-gti',
    category: 'Inverter',
    brand: 'Eastman',
    name: 'Eastman 3 kW GTI',
    headline: 'Eastman — grid-tie inverter 3 kW',
    description:
      'Eastman 3 kW grid-tie inverter for 3 kW residential plants. Specified when Eastman is the preferred power-electronics house.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['3 kW grid-tie topology', 'Eastman product line', 'Home rooftop systems'],
    techSpec: '3 kW | GTI',
  },
  {
    id: 'eastman-5kw-gti',
    category: 'Inverter',
    brand: 'Eastman',
    name: 'Eastman 5 kW GTI',
    headline: 'Eastman — grid-tie inverter 5 kW',
    description:
      'Eastman 5 kW GTI for larger homes and small commercial rooftops that need more headroom than 3 kW.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['5 kW grid-tie topology', 'Eastman product line', 'Larger homes and small C&I'],
    techSpec: '5 kW | GTI',
  },
  {
    id: 'durasol-hybrid-3-6',
    category: 'Inverter',
    brand: 'Durasol',
    name: 'Durasol Hybrid 3.6 kW',
    headline: 'Hybrid inverter — 3.6 kW',
    description:
      'Durasol 3.6 kW hybrid inverter for systems that combine grid-tie with battery backup. Pairs with Durasol 25.6 V / 51.2 V 100 Ah batteries.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['3.6 kW hybrid topology', 'Grid + battery operation', 'Matched to Durasol Li batteries'],
    techSpec: '3.6 kW | Hybrid',
  },
  {
    id: 'durasol-hybrid-5-5',
    category: 'Inverter',
    brand: 'Durasol',
    name: 'Durasol Hybrid 5.5 kW',
    headline: 'Hybrid inverter — 5.5 kW',
    description:
      'Durasol 5.5 kW hybrid inverter for higher backup loads. Use with Durasol 51.2 V 100 Ah storage on larger hybrid plants.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['5.5 kW hybrid topology', 'Grid + battery operation', 'Higher backup load capacity'],
    techSpec: '5.5 kW | Hybrid',
  },
  {
    id: 'involtics-3kw-gti',
    category: 'Inverter',
    brand: 'Involtics',
    name: 'Involtics 3 kW GTI',
    headline: 'Grid-tie inverter — 3 kW',
    description:
      'Involtics 3 kW grid-tie inverter for residential on-grid solar. An alternative 3 kW GTI option alongside Microtek, Luminous and Eastman.',
    iconName: 'Zap',
    image: IMG.inverter,
    keyFeatures: ['3 kW grid-tie topology', 'Residential on-grid systems', 'Involtics product line'],
    techSpec: '3 kW | GTI',
  },
  {
    id: 'durasol-battery-25-6',
    category: 'Battery',
    brand: 'Durasol',
    name: 'Durasol 25.6 V 100 Ah',
    headline: 'Lithium battery — 25.6 V / 100 Ah',
    description:
      'Durasol 25.6 V 100 Ah battery for hybrid backup. Typically paired with the Durasol 3.6 kW hybrid inverter on smaller storage banks.',
    iconName: 'BatteryCharging',
    image: IMG.battery,
    keyFeatures: ['25.6 V nominal', '100 Ah capacity', 'Hybrid backup storage'],
    techSpec: '25.6 V | 100 Ah',
  },
  {
    id: 'durasol-battery-51-2',
    category: 'Battery',
    brand: 'Durasol',
    name: 'Durasol 51.2 V 100 Ah',
    headline: 'Lithium battery — 51.2 V / 100 Ah',
    description:
      'Durasol 51.2 V 100 Ah battery for higher-voltage hybrid banks. Specified with the Durasol 5.5 kW hybrid inverter and larger backup loads.',
    iconName: 'BatteryCharging',
    image: IMG.battery,
    keyFeatures: ['51.2 V nominal', '100 Ah capacity', 'Higher-voltage hybrid banks'],
    techSpec: '51.2 V | 100 Ah',
  },
  {
    id: 'cable-dc-6',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '6 sq.mm DC Cable',
    headline: 'Solar DC string cable',
    description:
      '6 sq.mm DC solar cable for array strings and longer DC runs where a heavier conductor is required.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['6 sq.mm conductor', 'DC photovoltaic use', 'UV-resistant outdoor rating'],
    techSpec: '6 sq.mm | DC',
  },
  {
    id: 'cable-dc-4-red-black',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '4 sq.mm DC Cable — Red + Black',
    headline: 'Solar DC pair — positive and negative',
    description:
      '4 sq.mm DC cable supplied as red and black pair for standard rooftop string wiring.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['4 sq.mm conductor', 'Red + black pair', 'DC photovoltaic use'],
    techSpec: '4 sq.mm | DC | Red + Black',
  },
  {
    id: 'cable-ac-6-red',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '6.0 sq.mm AC Cable — Red',
    headline: 'AC output cable — 6 sq.mm red',
    description:
      '6.0 sq.mm red AC cable for inverter output and AC distribution where a heavier phase conductor is specified.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['6.0 sq.mm conductor', 'AC use', 'Red insulation'],
    techSpec: '6.0 sq.mm | AC | Red',
  },
  {
    id: 'cable-ac-6-black',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '6.0 sq.mm AC Cable — Black',
    headline: 'AC output cable — 6 sq.mm black',
    description:
      '6.0 sq.mm black AC cable to pair with the red 6.0 sq.mm AC run on inverter output circuits.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['6.0 sq.mm conductor', 'AC use', 'Black insulation'],
    techSpec: '6.0 sq.mm | AC | Black',
  },
  {
    id: 'cable-ac-4-black',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '4.0 sq.mm AC Cable — Black',
    headline: 'AC output cable — 4 sq.mm black',
    description:
      '4.0 sq.mm black AC cable for smaller inverter output circuits and AC interconnects.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['4.0 sq.mm conductor', 'AC use', 'Black insulation'],
    techSpec: '4.0 sq.mm | AC | Black',
  },
  {
    id: 'cable-ac-4-red',
    category: 'Cable',
    brand: 'Star Enterprises',
    name: '4.0 sq.mm AC Cable — Red',
    headline: 'AC output cable — 4 sq.mm red',
    description:
      '4.0 sq.mm red AC cable to complete the 4 sq.mm AC pair on residential inverter outputs.',
    iconName: 'Cable',
    image: IMG.cable,
    keyFeatures: ['4.0 sq.mm conductor', 'AC use', 'Red insulation'],
    techSpec: '4.0 sq.mm | AC | Red',
  },
  {
    id: 'earth-pit-bucket',
    category: 'Earthing Kit',
    brand: 'Star Enterprises',
    name: 'Earthing Pit Bucket',
    headline: 'Earthing pit chamber',
    description:
      'Pit bucket for the earthing chamber — part of the complete earthing kit supplied with solar installations.',
    iconName: 'Shield',
    image: IMG.earth,
    keyFeatures: ['Earthing pit chamber', 'Supplied as part of the kit', 'Site earthing works'],
    techSpec: 'Earthing kit | Pit bucket',
  },
  {
    id: 'earth-lightning-arrester',
    category: 'Earthing Kit',
    brand: 'Star Enterprises',
    name: 'Lightning Arrester',
    headline: 'Lightning protection',
    description:
      'Lightning arrester for rooftop and site protection, included in the Star Enterprises earthing kit.',
    iconName: 'Shield',
    image: IMG.earth,
    keyFeatures: ['Lightning protection device', 'Rooftop and site use', 'Supplied with earthing kit'],
    techSpec: 'Earthing kit | Lightning arrester',
  },
  {
    id: 'earth-electrode',
    category: 'Earthing Kit',
    brand: 'Star Enterprises',
    name: 'Earthing Electrode',
    headline: 'Earthing electrode',
    description:
      'Earthing electrode for the ground pit. Specified with chemical bag and pit bucket as a complete kit.',
    iconName: 'Shield',
    image: IMG.earth,
    keyFeatures: ['Ground electrode', 'Used with chemical backfill', 'Complete kit supply'],
    techSpec: 'Earthing kit | Electrode',
  },
  {
    id: 'earth-chemical-bag',
    category: 'Earthing Kit',
    brand: 'Star Enterprises',
    name: 'Chemical Bag',
    headline: 'Earthing compound',
    description:
      'Chemical bag for earthing pit backfill, to keep electrode resistance stable over time.',
    iconName: 'Shield',
    image: IMG.earth,
    keyFeatures: ['Earthing compound', 'Pit backfill', 'Supplied with electrode and pit bucket'],
    techSpec: 'Earthing kit | Chemical bag',
  },
];

export const FEATURED_PRODUCTS: ProductItem[] = [
  PRODUCTS_TECHNOLOGY.find((p) => p.id === 'waaree-topcon-610')!,
  PRODUCTS_TECHNOLOGY.find((p) => p.id === 'eastman-5kw-gti')!,
  PRODUCTS_TECHNOLOGY.find((p) => p.id === 'durasol-battery-51-2')!,
];

/** Products page catalogue architecture — brand-grouped, not per-SKU cards. */
export const PRODUCT_SECTION_NAV = [
  { id: 'solar-panels', label: 'Solar Panels' },
  { id: 'inverters', label: 'Inverters' },
  { id: 'batteries', label: 'Batteries' },
  { id: 'cables-earthing', label: 'Cables & Earthing' },
  { id: 'protection', label: 'Protection Equipment' },
  { id: 'solar-solutions', label: 'Solar Solutions' },
] as const;

export const PANEL_BRAND_CARDS = [
  {
    brand: 'Waaree',
    slug: 'waaree',
    logo: '/brands/waaree.png',
    image: '/products/waaree-panel.jpg',
    copy: 'High-efficiency solar modules built for reliable long-term generation.',
    technologies: [
      { label: 'Bifacial', wattages: ['535 WP', '540 WP'] },
      { label: 'TOPCon', wattages: ['605 WP', '610 WP', '615 WP'] },
    ],
  },
  {
    brand: 'Adani Solar',
    slug: 'adani',
    logo: '/brands/adani.jpg',
    image: '/products/adani-panel.jpg',
    copy: 'N-Type TOPCon modules engineered for commercial and industrial arrays.',
    technologies: [{ label: 'TOPCon', wattages: ['605 WP'] }],
  },
  {
    brand: 'Luminous',
    slug: 'luminous',
    logo: '/brands/luminous.png',
    image: '/products/luminous-panel.jpg',
    copy: 'Trusted bifacial modules for homes and small commercial rooftops.',
    technologies: [{ label: 'Bifacial', wattages: ['550 WP', '555 WP'] }],
  },
  {
    brand: 'Rayzon Solar',
    slug: 'rayzon',
    logo: '/brands/rayzon.png',
    image: '/products/rayzon-panel.jpg',
    copy: 'Dependable bifacial panels specified for compact and retrofit projects.',
    technologies: [{ label: 'Bifacial', wattages: ['500 WP', '550 WP'] }],
  },
] as const;

export const INVERTER_BRAND_CARDS = [
  {
    brand: 'Microtek',
    slug: 'microtek',
    logo: '/brands/microtek.png',
    image: '/products/microtek-inverter.jpg',
    type: 'GTI',
    copy: 'Reliable grid-tie conversion for residential rooftop systems.',
    ratings: ['3 KW'],
  },
  {
    brand: 'Luminous',
    slug: 'luminous',
    logo: '/brands/luminous.png',
    image: '/products/luminous-inverter.jpg',
    type: 'GTI',
    copy: 'Brand-matched GTI for Luminous panel and backup packages.',
    ratings: ['3 KW'],
  },
  {
    brand: 'Eastman',
    slug: 'eastman',
    logo: '/brands/eastman.png',
    image: '/products/eastman-inverter.jpg',
    type: 'GTI',
    copy: 'Flexible GTI capacities for larger homes and light C&I loads.',
    ratings: ['3 KW', '5 KW'],
  },
  {
    brand: 'Durasol',
    slug: 'durasol',
    logo: '/brands/durasol.png',
    image: '/products/durasol-inverter.jpg',
    type: 'Hybrid',
    copy: 'Hybrid power electronics for grid-tie with battery backup.',
    ratings: ['3.6 KW', '5.5 KW'],
  },
  {
    brand: 'Involtics',
    slug: 'involtics',
    logo: '/brands/involtics.webp',
    image: '/products/involtics-inverter.jpg',
    type: 'GTI',
    copy: 'Compact 3 kW grid-tie option for residential on-grid plants.',
    ratings: ['3 KW'],
  },
] as const;

export const BATTERY_FEATURE = {
  brand: 'Durasol',
  slug: 'durasol',
  logo: '/brands/durasol.png',
  title: 'Durasol Battery',
  eyebrow: 'Lithium Battery',
  copy: 'Lithium storage matched to our hybrid inverter line — sized for residential and light commercial backup.',
  variants: ['25.6 V / 100 Ah', '51.2 V / 100 Ah'],
  image: '/products/durasol-battery.jpg',
  benefits: [
    'Long Cycle Life & High Safety',
    'Ideal for Residential & Light Commercial',
    'Seamless Integration with Hybrid Inverters',
    'Reliable Backup for Greater Independence',
  ],
} as const;

export const CABLE_CARD = {
  title: 'Solar Cables',
  eyebrow: 'DC/AC Conductors',
  image: '/products/cables/solar-cable-red-black.jpg',
  groups: [
    { label: 'DC Cable', items: ['4 sq.mm Red / Black', '6 sq.mm'] },
    { label: 'AC Cable', items: ['4 sq.mm Red / Black', '6 sq.mm Red / Black'] },
  ],
} as const;

export const EARTHING_CARD = {
  title: 'Earthing Kit',
  eyebrow: 'Complete Solution',
  image: '/products/earthing/earthing-kit.jpg',
  items: ['Pit Bucket', 'Lightning Arrester', 'Electrode', 'Chemical Bag'],
} as const;

/** Major configs shown first; full list expands via View All. Specs from live product line. */
export const PROTECTION_PRIMARY = [
  { product: 'DCDB', configuration: '2 SPD · 2 in / 2 out', rating: '600 V' },
  { product: 'ACDB', configuration: 'Three Phase', rating: '63 A' },
  { product: 'AJB', configuration: '4 in', rating: '100 + 600 V' },
  { product: 'ACDB', configuration: 'Single Phase', rating: '63 A' },
  { product: 'AJB', configuration: '3 in', rating: '100 + 600 V' },
  { product: 'AJB', configuration: '2 in', rating: '100 + 600 V' },
] as const;

export const PROTECTION_ALL = [
  { product: 'DCDB', configuration: '2 SPD · 2 in / 2 out', rating: '600 V' },
  { product: 'ACDB', configuration: 'Three Phase', rating: '63 A' },
  { product: 'AJB', configuration: '4 in', rating: '100 + 600 V' },
  { product: 'ACDB', configuration: 'Single Phase', rating: '63 A' },
  { product: 'AJB', configuration: '3 in', rating: '100 + 600 V' },
  { product: 'AJB', configuration: '2 in', rating: '100 + 600 V' },
  { product: 'AJB', configuration: 'DC MCB · 3 in / 1 out', rating: '600 V' },
  { product: 'DCDB', configuration: '2 SPD · 2 in / 2 out', rating: '1000 V' },
  { product: 'AJB', configuration: '5 in / 1 out', rating: '600 V' },
  { product: 'DCDB', configuration: 'SPD-4 · 4 in / 4 out', rating: '1000 V' },
  { product: 'AJB', configuration: '6 in / 1 out', rating: '600 V' },
  { product: 'DCDB', configuration: '25A · 4 SPD · 4 in / 4 out', rating: '1000 V' },
  { product: 'DCDB', configuration: '3 in / 3 out', rating: '1000 V' },
  { product: 'AJB', configuration: '6 in / 1 out', rating: '—' },
  { product: 'AJB', configuration: '25A · 6 in / 1 out', rating: '600 V' },
] as const;

export const PROTECTION_BENEFITS = [
  'Enhanced Safety',
  'Reliable Distribution',
  'Multiple Configurations',
  'Residential & Industrial',
] as const;

export const PROTECTION_VISUAL = {
  image: '/products/protection/protection-trio.jpg',
  units: [
    { id: 'acdb', label: 'ACDB' },
    { id: 'dcdb', label: 'DCDB' },
    { id: 'ajb', label: 'AJB' },
  ],
} as const;

export const SOLAR_SOLUTION_CARDS = [
  {
    id: 'water-5000',
    title: '5000 Ltr Solar Drinking Water Project',
    description:
      'Complete solar-powered drinking water solution for community, institutional and remote applications.',
    image: '/solutions/solar-drinking-water.jpg',
    icon: 'water' as const,
    chips: [
      { label: '5000 L Tank', icon: 'tank' as const },
      { label: '1 HP Pump', icon: 'pump' as const },
      { label: 'Galvanized Structure', icon: 'structure' as const },
      { label: 'Plumbing Accessories', icon: 'plumbing' as const },
    ],
    chipLayout: 'grid' as const,
    fullSpec: [
      '5000 Ltr 3 Mtr Galvanized Structure',
      '4-Way Stand Post — 1 Nos.',
      'Foundation Nut/Bolt',
      'Ladder',
      'Water Chamber',
      'SS Cylinder',
      'Solar Module: 335Wp × 3 Nos. OR 550Wp × 2 Nos.',
      '1 HP Submersible Pump Set (Sileaf / Uratom / Kirloskar)',
      '5000 Ltr Tank — 2 or 3 Layer',
      'Plumbing Accessories',
    ],
    cta: 'View Solution',
    ctaKind: 'spec' as const,
  },
  {
    id: 'street-light',
    title: 'Solar Semi-Integrated Street Light',
    description:
      'Semi-integrated outdoor lighting packages sized by luminaire wattage for roads, campuses and compounds.',
    image: '/solutions/solar-street-light.jpg',
    icon: 'light' as const,
    wattages: ['15W', '20W', '24W', '30W', '36W', '40W'],
    chipLayout: 'row' as const,
    fullSpec: [
      'Solar Module',
      'Osram LED Luminary',
      'Inbuilt Lithium Battery',
      '6 Mtr G.I. Pole',
      'Luminary Arm',
      'Module Structure',
      'Copper Cable',
      'Fitting & Fixtures',
    ],
    cta: 'View Solution',
    ctaKind: 'spec' as const,
  },
  {
    id: 'off-grid',
    title: 'Solar Off-Grid Power Generating System',
    description:
      'Complete off-grid solar power systems configured according to load, backup requirement and site conditions.',
    image: '/solutions/off-grid-system.jpg',
    icon: 'power' as const,
    chips: [
      { label: 'Battery Backup', icon: 'battery' as const },
      { label: 'Hybrid Ready', icon: 'hybrid' as const },
      { label: 'Custom Sized', icon: 'custom' as const },
    ],
    chipLayout: 'row' as const,
    cta: 'Discuss Requirement',
    ctaKind: 'discuss' as const,
  },
] as const;

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'CONSULTATION',
    description: 'Understand your energy requirements and sustainability targets.',
    detail:
      'Our senior energy consultants analyze historical utility bills, peak load profiles, tariff structures, and corporate carbon offset targets to establish baseline project viability.',
    deliverables: ['Energy profile analysis', 'Preliminary financial model', 'Feasibility overview'],
  },
  {
    step: '02',
    title: 'SITE ASSESSMENT',
    description: 'Evaluate site conditions and energy potential.',
    detail:
      'Comprehensive geotechnical surveys, drone-based 3D terrain mapping, structural roof load certifications, and high-resolution solar irradiance solarimetry.',
    deliverables: ['3D Shadow & irradiance study', 'Structural integrity report', 'Grid interconnection audit'],
  },
  {
    step: '03',
    title: 'SYSTEM DESIGN',
    description: 'Develop an optimized solar solution tailored for maximum yield.',
    detail:
      'Bespoke electrical single-line diagrams (SLD), 3D layout modeling, string configuration, inverter sizing, and full balance-of-system engineering for optimal Levelized Cost of Energy (LCOE).',
    deliverables: ['Detailed engineering drawing set', 'PVSyst yield simulation', 'Guaranteed generation forecast'],
  },
  {
    step: '04',
    title: 'INSTALLATION',
    description: 'Professional project execution with strict QA/QC standards.',
    detail:
      'Turnkey procurement and precision mechanical/electrical installation managed by certified solar engineers adhering to ISO safety standards and utility interconnection protocols.',
    deliverables: ['Tier-1 equipment installation', 'Cold & hot commissioning', 'Statutory inspection sign-off'],
  },
  {
    step: '05',
    title: 'MONITORING & SUPPORT',
    description: 'Long-term performance and service support.',
    detail:
      'Continuous 24/7 telemetry through our Network Operations Center (NOC), preventive maintenance routines, module cleaning protocols, and performance warranty guarantees.',
    deliverables: ['NOC cloud portal access', 'Preventive maintenance schedule', 'Performance ratio warranty'],
  },
];

export const WHY_STAR_FEATURES: WhyStarFeature[] = [
  {
    id: 'reliable',
    title: 'RELIABLE',
    tagline: 'Solutions designed for dependable energy generation',
    description:
      'Rigorous engineering standards, Tier-1 certified equipment, and redundant architecture guarantee uninterrupted power delivery under severe climatic environments.',
    iconName: 'ShieldCheck',
    metricHighlight: 'High Reliability Standard',
  },
  {
    id: 'efficient',
    title: 'EFFICIENT',
    tagline: 'Technology focused on maximizing energy performance',
    description:
      'Advanced module-level MPPT tracking and optimized thermal dissipation maximize specific yield per square meter, driving lower LCOE and accelerated ROI.',
    iconName: 'TrendingUp',
    metricHighlight: 'Maximum Specific Yield',
  },
  {
    id: 'experienced',
    title: 'EXPERIENCED',
    tagline: 'Professional approach from consultation to execution',
    description:
      'Dedicated multi-disciplinary team of solar PV engineers, structural designers, and regulatory liaison specialists with deep technical acumen across high-voltage domains.',
    iconName: 'Award',
    metricHighlight: 'Engineering Excellence',
  },
  {
    id: 'customer-first',
    title: 'CUSTOMER-FIRST',
    tagline: 'Solutions built around real energy requirements',
    description:
      'No cookie-cutter packages. Every installation is customized to your exact tariff structure, operational hours, space constraints, and corporate expansion plans.',
    iconName: 'Users',
    metricHighlight: 'Custom Energy Architecture',
  },
  {
    id: 'future-ready',
    title: 'FUTURE-READY',
    tagline: 'Designed for the evolving clean-energy ecosystem',
    description:
      'Seamless modular expandability, BESS battery readiness, dynamic smart grid compliance, and automated demand-response capability built into every project.',
    iconName: 'Cpu',
    metricHighlight: 'Storage & Microgrid Ready',
  },
];

export const PROJECT_CATEGORIES = ['All', 'Residential', 'Commercial', 'Industrial', 'Solar Farms'] as const;

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'proj-01',
    title: 'Solar Farm Infrastructure [Site Alpha]',
    category: 'Solar Farms',
    location: '[Location Placeholder – Regional Grid Hub]',
    capacity: '[Capacity Placeholder – Mega-Watt Scale]',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2024 Phase I',
    highlights: ['Single-Axis Tracker Integration', 'High Voltage Substation Interconnection', 'Bifacial TOPCon Array'],
  },
  {
    id: 'proj-02',
    title: 'Industrial Manufacturing Hub [Facility Beta]',
    category: 'Industrial',
    location: '[Location Placeholder – Industrial Zone]',
    capacity: '[Capacity Placeholder – Multi-MW Rooftop]',
    image: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2024 Commissioned',
    highlights: ['Zero-Penetration Roof Clamp System', 'Peak Shaving Demand Optimization', 'SCADA Real-Time Telemetry'],
  },
  {
    id: 'proj-03',
    title: 'Corporate Headquarters Campus [Campus Gamma]',
    category: 'Commercial',
    location: '[Location Placeholder – Metro Tech Corridor]',
    capacity: '[Capacity Placeholder – Commercial Scale]',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2023 Completed',
    highlights: ['Architectural Rooftop & Solar Carport', 'Integrated BESS Emergency Backup', 'EV Charging Station Hub'],
  },
  {
    id: 'proj-04',
    title: 'High-Capacity Utility Grid [Project Delta]',
    category: 'Solar Farms',
    location: '[Location Placeholder – Arid Clean Energy Park]',
    capacity: '[Capacity Placeholder – Utility Scale]',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2024 Phase II',
    highlights: ['Terrain Adaptive Ground Screws', 'Automated Robotic Dry Cleaning', '33 kV Grid Synchronization'],
  },
  {
    id: 'proj-05',
    title: 'Logistics Center & Warehouse [Hub Epsilon]',
    category: 'Commercial',
    location: '[Location Placeholder – National Freight Park]',
    capacity: '[Capacity Placeholder – Commercial Scale]',
    image: 'https://images.unsplash.com/photo-1558441719-813c9e658e46?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2023 Completed',
    highlights: ['Lightweight Structural Balances', 'Daytime Self-Consumption Engine', 'Zero Export Regulation'],
  },
  {
    id: 'proj-06',
    title: 'Eco-Luxury Residential Estate [Residences Zeta]',
    category: 'Residential',
    location: '[Location Placeholder – Premium Township]',
    capacity: '[Capacity Placeholder – High-End Residential]',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80',
    completionYear: '2024 Completed',
    highlights: ['All-Black Monocrystalline Modules', 'Seamless Home BESS Battery Integration', 'Smart Mobile App Management'],
  },
];

export const TIMELINE_MILESTONES: TimelineMilestone[] = [
  {
    year: 'FOUNDING',
    title: 'Vision for Clean Power Infrastructure',
    description: 'Star Enterprises was established with a singular focus: delivering trustworthy, robust, and technologically advanced solar energy solutions.',
    phase: 'Phase 01',
  },
  {
    year: 'EXPANSION',
    title: 'Commercial & Industrial Portfolio',
    description: 'Engineered high-yield rooftop and ground-mounted solar solutions for prominent industrial manufacturers and corporate tech parks.',
    phase: 'Phase 02',
  },
  {
    year: 'INNOVATION',
    title: 'Grid Integration & Smart BESS',
    description: 'Pioneered integration of multi-megawatt Battery Energy Storage Systems (BESS) and intelligent SCADA cloud monitoring.',
    phase: 'Phase 03',
  },
  {
    year: 'FUTURE SCALE',
    title: 'Next-Gen Renewable Infrastructure',
    description: 'Scaling large utility solar developments and localized microgrids to accelerate the transition to complete clean energy autonomy.',
    phase: 'Phase 04',
  },
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'CLEAN ENERGY',
    subtitle: 'Zero-Emission Power Generation',
    description:
      'Replacing fossil fuels with infinite solar irradiance, drastically lowering greenhouse gas footprints for corporate and residential operations.',
    iconName: 'Sun',
  },
  {
    title: 'SMART TECHNOLOGY',
    subtitle: 'Intelligent Resource Optimization',
    description:
      'Utilizing predictive AI algorithms, precision string monitoring, and automated asset maintenance to maximize equipment lifecycle efficiency.',
    iconName: 'Cpu',
  },
  {
    title: 'SUSTAINABLE GROWTH',
    subtitle: 'Long-Term Economic & Eco Value',
    description:
      'Decoupling business growth from rising fossil fuel costs, creating predictable operational expenses and verifiable ESG leadership.',
    iconName: 'Leaf',
  },
];



