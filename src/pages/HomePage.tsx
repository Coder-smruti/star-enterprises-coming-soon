import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Factory,
  FileCheck2,
  Home,
  MapPinned,
  PhoneCall,
  Radio,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { BrandMarquee } from '../components/BrandMarquee';
import { CONTACT_INFO, FEATURED_PRODUCTS, PRODUCT_BRANDS } from '../data/content';
import { useHomeMotion } from './useHomeMotion';

const HERO_SEGMENTS = [
  {
    href: '#residential',
    label: 'Residential',
    copy: 'Cleaner homes',
    icon: Home,
  },
  {
    href: '#commercial',
    label: 'Commercial',
    copy: 'Smarter businesses',
    icon: Building2,
  },
  {
    href: '#industrial',
    label: 'Industrial',
    copy: 'Reliable high-load power',
    icon: Factory,
  },
] as const;

const SOLUTIONS = [
  {
    id: 'residential',
    number: '01',
    title: 'Residential Solar',
    subtitle: 'Private Residences & Luxury Estates',
    scale: '3 kW – 25 kW Rooftop Systems',
    copy: 'Architecturally integrated arrays engineered around your daily household load, roof orientation, and PM Surya Ghar central subsidies.',
    specs: [
      'Up to 90% electricity bill reduction',
      'PM Surya Ghar subsidy eligible (up to ₹78,000)',
      'Hybrid battery storage & net-metering ready',
    ],
    image: '/media/residential.jpg?v=3',
    cta: 'Configure Home Solar',
  },
  {
    id: 'commercial',
    number: '02',
    title: 'Commercial & Institutional',
    subtitle: 'Offices, Healthcare, Retail & Campuses',
    scale: '25 kW – 500 kW Grid-Tied Systems',
    copy: 'High-yield rooftop generation engineered for facilities that cannot tolerate downtime, eliminating peak-tariff demand charges.',
    specs: [
      'Zero production interruption during installation',
      '3–4 year capital payback with 25-yr life',
      'Cloud-based SCADA power telemetry',
    ],
    image: '/media/commercial.jpg?v=3',
    cta: 'Commercial Solar Feasibility',
  },
  {
    id: 'industrial',
    number: '03',
    title: 'Industrial & Megawatt Scale',
    subtitle: 'Heavy Industry, Warehouses & Ground-Mount',
    scale: '500 kW – 5 MW+ Megawatt Plants',
    copy: 'Heavy-duty bifacial installations engineered to withstand extreme thermal stress, airborne industrial contaminants, and continuous harmonic loads.',
    specs: [
      'N-Type TOPCon bifacial high irradiance yield',
      '80% accelerated tax depreciation (Sec 32)',
      '170+ km/h cyclone-tested mounting structures',
    ],
    image: '/media/industrial.jpg?v=3',
    cta: 'Industrial EPC Consultation',
  },
];

const WHY = [
  {
    num: '01',
    name: 'Tier-1 Componentry Only',
    copy: 'Bloomberg Tier-1 partners — Waaree, Adani, Tata Power Solar. Every module flash-tested for zero micro-cracks.',
    icon: ShieldCheck,
  },
  {
    num: '02',
    name: 'Structural & Civil Integrity',
    copy: 'Hot-dip galvanized mounts, 80-micron zinc, SS304 fasteners — rated for 170+ km/h cyclonic gusts.',
    icon: Factory,
  },
  {
    num: '03',
    name: 'Turnkey Statutory Clearances',
    copy: 'DISCOM net-metering, CEIG safety, and PM Surya Ghar subsidies — we handle the full regulatory path.',
    icon: FileCheck2,
  },
  {
    num: '04',
    name: 'Continuous Remote Telemetry',
    copy: '24/7 IoT monitoring at string level, with proactive field dispatch when performance dips.',
    icon: Radio,
  },
];

const STEPS = [
  {
    n: '01',
    name: 'Site Audit & 3D LiDAR',
    copy: 'Drone/satellite rooftop mapping and shade simulation for irradiance, load capacity, and optimal tilt.',
    icon: MapPinned,
  },
  {
    n: '02',
    name: 'Electrical & SLD Engineering',
    copy: 'String sizing, inverter analysis, BOS spec, and protection coordination matched to your load profile.',
    icon: Zap,
  },
  {
    n: '03',
    name: 'Precision Installation',
    copy: 'Certified crews handle anchoring, UV-resistant conduits, chemical earthing, and lightning arrestors.',
    icon: ClipboardCheck,
  },
  {
    n: '04',
    name: 'Net-Metering & Handover',
    copy: 'DISCOM meter sync, subsidy claim processing, and digital telemetry app handover.',
    icon: FileCheck2,
  },
];

const STATEMENT_SUN = { x: 302, y: 128 };
const STATEMENT_RAYS = Array.from({ length: 14 }, (_, index) => {
  const angle = (index / 14) * Math.PI * 2;
  return {
    x1: STATEMENT_SUN.x + Math.cos(angle) * 46,
    y1: STATEMENT_SUN.y + Math.sin(angle) * 46,
    x2: STATEMENT_SUN.x + Math.cos(angle) * 78,
    y2: STATEMENT_SUN.y + Math.sin(angle) * 78,
  };
});
const STATEMENT_PHOTONS = [
  'M268 168 C 220 230, 170 280, 148 338',
  'M302 176 C 260 250, 210 310, 196 352',
  'M336 170 C 300 248, 250 318, 244 358',
];

export const HomePage: React.FC = () => {
  const root = useRef<HTMLDivElement>(null);
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  useHomeMotion(root);

  const displayedProducts =
    selectedBrand === 'All'
      ? FEATURED_PRODUCTS.slice(0, 3)
      : FEATURED_PRODUCTS.filter((p) => p.brand.toLowerCase().includes(selectedBrand.toLowerCase())).slice(0, 3);

  return (
    <div ref={root} className="home-stage">
      <div className="scroll-progress" aria-hidden />

      <div className="intro-overlay" aria-hidden>
        <p className="intro-kicker eyebrow text-champagne">Solar · Technology · Sustainability</p>
        <p className="intro-title display text-white">
          <span className="intro-line">
            <span>STAR</span>
          </span>
          <span className="intro-line">
            <span>ENTERPRISES</span>
          </span>
        </p>
        <p className="intro-sub">Powering a brighter future</p>
      </div>

      <aside className="home-chapters" aria-hidden>
        {[
          ['.home-hero', '01'],
          ['.statement-section', '02'],
          ['.audience-stage', '03'],
          ['.why-stage', '04'],
          ['.journey-stage', '05'],
          ['.products-stage', '06'],
          ['.scheme-band', '07'],
          ['.final-cta-section', '08'],
        ].map(([sel, n]) => (
          <span key={n} data-chapter={sel} className={n === '01' ? 'is-on' : ''}>
            {n}
          </span>
        ))}
      </aside>

      {/* Hero Section */}
      <section className="home-hero" data-flow-section="hero">
        <div className="home-hero-shell">
          <div className="home-hero-bridge" aria-hidden>
            <div className="home-hero-sun-glow" />
          </div>

          <div className="home-hero-main">
            <div className="home-hero-copy">
              <p className="home-hero-eyebrow" data-hero-el>
                <span className="home-hero-eyebrow-rule" aria-hidden />
                Solar · Technology · Sustainability
              </p>

              <h1 className="display hero-headline">
                <span className="hero-line">
                  <span>Powering a</span>
                </span>
                <span className="hero-line">
                  <span>
                    <span className="hero-bright-word">Brighter</span> Tomorrow.
                  </span>
                </span>
              </h1>

              <p className="home-hero-lead" data-hero-el>
                Premium solar solutions for homes, businesses and industry — engineered around real
                loads, real roofs and real operating conditions.
              </p>
              <p className="home-hero-lead-secondary" data-hero-el>
                Clean energy. Lower bills. Built for the long term.
              </p>

              <div className="home-hero-actions" data-hero-el>
                <a href="#solutions" className="btn btn-accent btn-hero-primary">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link to="/contact" className="btn btn-hero-secondary">
                  Get a Quote
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="home-hero-visual" data-hero-el>
              <div className="home-hero-visual-frame">
                <img
                  className="home-hero-visual-desktop"
                  src="/media/hero-home-mascot.jpg?v=2"
                  alt="Solar panel mascot relaxing on a sunny rooftop terrace"
                  loading="eager"
                />
                <img
                  className="home-hero-visual-mobile"
                  src="/media/hero-home-mascot-mobile.png"
                  alt="Solar panel mascot relaxing on a sunny rooftop terrace"
                  loading="eager"
                />
              </div>
              <p className="hero-speech-bubble">
                <span className="hero-speech-sun" aria-hidden>
                  ✺
                </span>
                Sunlight is my kind of energy.
              </p>
            </div>

            <div className="home-hero-strip" data-hero-el>
              {HERO_SEGMENTS.map(({ href, label, copy, icon: Icon }, index) => (
                <React.Fragment key={label}>
                  {index > 0 ? <span className="home-hero-strip-divider" aria-hidden /> : null}
                  <a href={href} className="home-hero-strip-item">
                    <span className="home-hero-strip-icon" aria-hidden>
                      <Icon />
                    </span>
                    <span className="home-hero-strip-text">
                      <strong>{label}</strong>
                      <span>{copy}</span>
                    </span>
                  </a>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BrandMarquee />

      {/* Statement & Economics Section */}
      <section id="statement" className="statement-section relative overflow-hidden" data-flow-section="statement">
        <div className="statement-backdrop" aria-hidden>
          <span className="statement-watermark">01</span>
          <span className="statement-orb" />
        </div>

        <div className="site-container statement-shell">
          <div className="statement-grid">
            <div className="statement-copy">
              <div className="statement-intro">
                <p className="eyebrow statement-eyebrow-gold" data-statement-eyebrow>
                  The Standard
                </p>
                <span className="statement-rule" data-statement-rule aria-hidden />
              </div>

              <h2 className="statement-headline display text-navy" data-statement-headline>
                <span className="statement-line stmt-word">THE SUN DOESN&apos;T</span>
                <span className="statement-line stmt-word">SEND A BILL.</span>
              </h2>

              <p className="statement-kicker display" data-statement-kicker>
                So why should your energy?
              </p>

              <p
                className="statement-body text-[1.02rem] leading-relaxed text-navy/72"
                data-statement-copy
              >
                Intelligent solar for homes, businesses and industry — designed around consumption,
                engineered for the long term, and built to make energy independence feel inevitable.
              </p>
            </div>

            <div className="statement-visual">
              <span className="statement-accent" data-statement-accent aria-hidden />
              <div className="statement-stage" data-statement-stage>
                <span className="statement-corners" aria-hidden />
                <p className="statement-zero" data-statement-zero>
                  <span className="display">₹0</span>
                  <span>No bill from the sky</span>
                </p>
                <svg className="statement-svg" viewBox="0 0 420 520" aria-hidden>
                  <defs>
                    <radialGradient id="statement-sun" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#fff6d8" />
                      <stop offset="55%" stopColor="#fce6b1" />
                      <stop offset="100%" stopColor="#b48a38" />
                    </radialGradient>
                  </defs>
                  <polygon
                    data-statement-cone
                    points="302,128 92,500 348,500"
                    fill="rgb(252 230 177 / 0.28)"
                    opacity="0.45"
                  />
                  {STATEMENT_PHOTONS.map((d) => (
                    <path
                      key={d}
                      data-statement-photon
                      d={d}
                      fill="none"
                      stroke="#fce6b1"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      opacity="0"
                    />
                  ))}
                  <g data-statement-rays>
                    {STATEMENT_RAYS.map((ray) => (
                      <line
                        key={`${ray.x2}-${ray.y2}`}
                        x1={ray.x1}
                        y1={ray.y1}
                        x2={ray.x2}
                        y2={ray.y2}
                        stroke="#fce6b1"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    ))}
                  </g>
                  <g data-statement-sun>
                    <circle cx={STATEMENT_SUN.x} cy={STATEMENT_SUN.y} r="42" fill="url(#statement-sun)" />
                    <circle cx={STATEMENT_SUN.x} cy={STATEMENT_SUN.y} r="18" fill="#fff6d8" opacity="0.85" />
                  </g>
                  <path d="M72 428 L210 338 L348 428 L348 500 H72 Z" fill="rgb(8 18 42 / 0.55)" />
                  <path d="M92 428 H328 V500 H92 Z" fill="#143877" />
                  <rect
                    data-statement-panel
                    x="118"
                    y="368"
                    width="52"
                    height="28"
                    rx="1"
                    fill="#b48a38"
                    transform="rotate(-18 118 368)"
                  />
                  <rect
                    data-statement-panel
                    x="168"
                    y="352"
                    width="52"
                    height="28"
                    rx="1"
                    fill="#b48a38"
                    transform="rotate(-18 168 352)"
                  />
                  <rect
                    data-statement-panel
                    x="218"
                    y="336"
                    width="52"
                    height="28"
                    rx="1"
                    fill="#b48a38"
                    transform="rotate(-18 218 336)"
                  />
                  <rect x="186" y="454" width="22" height="46" fill="#0b1f48" />
                  <rect x="118" y="448" width="18" height="22" fill="#fce6b1" opacity="0.35" />
                  <rect x="268" y="448" width="18" height="22" fill="#fce6b1" opacity="0.35" />
                </svg>
                <p className="statement-caption" data-statement-caption>
                  Light becomes power.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="audience-stage section-y" data-flow-section="solutions">
        <div className="site-container">
          <div className="audience-head" data-flow-intro>
            <p className="eyebrow statement-eyebrow">Engineered Solutions</p>
            <h2 className="display display-lg text-navy">SOLAR, BUILT AROUND YOU.</h2>
            <p className="max-w-2xl text-[1.05rem] leading-relaxed text-navy/75">
              Three scales. One standard of engineering — from a luxury private villa rooftop to
              multi-megawatt industrial ground-mounts.
            </p>
          </div>
          <div className="audience-grid" data-flow-body>
            {SOLUTIONS.map((item) => (
              <div key={item.id} id={item.id} className="audience-card" data-flow-item>
                <div className="audience-card-media">
                  <img src={item.image} alt={item.title} />
                  <div className="audience-media-scale">{item.scale}</div>
                </div>
                <div className="audience-card-copy">
                  <div className="audience-card-top">
                    <span className="audience-num">{item.number}</span>
                    <span className="audience-sub">{item.subtitle}</span>
                  </div>
                  <h3 className="display audience-title">{item.title}</h3>
                  <p className="audience-body">{item.copy}</p>

                  <ul className="audience-specs-list">
                    {item.specs.map((spec) => (
                      <li key={spec}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="audience-cta-btn">
                    <span>{item.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Star Section & Metrics */}
      <section className="why-stage section-y" data-flow-section="why">
        <div className="site-container grid gap-8 lg:gap-12 lg:grid-cols-12 items-start">
          <div className="lg:col-span-5" data-flow-intro>
            <p className="eyebrow statement-eyebrow">The Engineering Standard</p>
            <h2 className="display display-lg mt-4 text-navy">WE DON'T JUST INSTALL SOLAR.</h2>
            <p className="display mt-5 text-[clamp(1.5rem,3vw,2.4rem)] leading-[1.08] statement-eyebrow">
              We build permanent energy independence.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-navy/70">
              Solar is a 25-year structural and electrical commitment. We engineer every array to
              survive coastal winds, high-temperature thermal clipping, and severe monsoon conditions.
            </p>
            <span className="mt-7 block h-px w-full max-w-md bg-gold" data-flow-rule />
          </div>
          <div className="lg:col-span-7 why-grid" data-flow-body>
            {WHY.map(({ num, name, copy, icon: Icon }) => (
              <article key={name} className="why-card" data-flow-item>
                <div className="why-card-top">
                  <span className="why-card-icon" aria-hidden>
                    <Icon />
                  </span>
                  <span className="why-card-num">{num}</span>
                </div>
                <h3 className="why-card-title">{name}</h3>
                <p className="why-card-copy">{copy}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="site-container">
          <div className="home-stats" data-flow-stats>
            <article className="home-stat-card" data-flow-item>
              <p className="home-stat-num">
                <span data-count="8">8</span>
                <small>+</small>
              </p>
              <p className="home-stat-label">Tier-1 OEM Houses</p>
            </article>
            <article className="home-stat-card" data-flow-item>
              <p className="home-stat-num">
                <span data-count="615">615</span>
                <small>Wp</small>
              </p>
              <p className="home-stat-label">Top Module Class (TOPCon)</p>
            </article>
            <article className="home-stat-card" data-flow-item>
              <p className="home-stat-num">
                <span data-count="99">99</span>
                <small>.4%</small>
              </p>
              <p className="home-stat-label">Monitored Plant Uptime</p>
            </article>
            <article className="home-stat-card" data-flow-item>
              <p className="home-stat-num">
                <span data-count="25">25</span>
                <small>Yrs</small>
              </p>
              <p className="home-stat-label">Linear Performance Warranty</p>
            </article>
          </div>
        </div>
      </section>

      {/* Turnkey Journey / Process */}
      <section className="journey-stage" data-flow-section="journey">
        <div className="site-container">
          <div data-flow-intro>
            <p className="eyebrow journey-eyebrow">The Turnkey Execution</p>
            <h2 className="display display-lg mt-4 text-white journey-headline">
              FROM <span className="statement-eyebrow">ROOFTOP</span> SURVEY TO LIVE GRID.
            </h2>
          </div>
          <div className="journey-line" />
          <ol className="journey-track" data-flow-body>
            {STEPS.map(({ n, name, copy, icon: Icon }, index) => (
              <li key={n} className="journey-step" data-flow-item data-step>
                <div className="journey-node" aria-hidden>
                  <span className="journey-node-ring">
                    <Icon />
                  </span>
                  {index < STEPS.length - 1 ? <span className="journey-connector" /> : null}
                </div>
                <article className="journey-card">
                  <span className="journey-card-num">Step {n}</span>
                  <h3 className="journey-card-title">{name}</h3>
                  <p className="journey-card-copy">{copy}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Featured Products & Hardware Showcase */}
      <section className="products-stage section-y" data-flow-section="products">
        <div className="site-container">
          <div className="products-panel">
            <div className="products-panel-top" data-flow-intro>
              <p className="eyebrow statement-eyebrow">Engineered Hardware</p>
              <Link to="/products" className="btn btn-accent btn-sm products-stage-cta">
                View All Products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

              <h2 className="display products-stage-title" data-flow-intro>
                MEET THE <span className="statement-eyebrow products-powerhouse">POWERHOUSE</span>.
              </h2>
            <p className="products-stage-lead" data-flow-intro>
              Tier-1 bifacial photovoltaic modules, smart hybrid inverters, and precision balance of
              system components specified strictly for high-yield durability.
            </p>

            <div className="products-chip-row" data-flow-intro>
              {['All', ...PRODUCT_BRANDS.slice(0, 6)].map((brand) => (
                <button
                  key={brand}
                  type="button"
                  onClick={() => setSelectedBrand(brand)}
                  className={`chip ${selectedBrand === brand ? 'is-on' : ''}`}
                >
                  {brand}
                </button>
              ))}
            </div>

            <div className="products-feature-grid" data-flow-body>
              {displayedProducts.map((product) => (
                <Link
                  key={product.id}
                  to={`/products?brand=${encodeURIComponent(product.brand)}`}
                  className="product-card"
                  data-product-card
                  data-flow-item
                >
                  <div className="product-card-media">
                    <img src={`${product.image}?v=4`} alt={product.name} />
                  </div>
                  <div className="product-card-body">
                    <div className="product-card-meta">
                      <p className="product-card-brand">{product.brand}</p>
                      <span className="product-card-spec">{product.techSpec}</span>
                    </div>
                    <h3 className="product-card-title">{product.name}</h3>
                    <p className="product-card-copy">{product.description}</p>
                    <span className="product-card-link">
                      Enquire Details
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* National Rooftop Scheme Band */}
      <section className="scheme-band" data-flow-section="scheme">
        <div className="site-container scheme-band-inner">
          <div className="scheme-band-copy" data-scheme-copy>
            <h3 className="scheme-headline">
              <span className="scheme-headline-main">PM Surya Ghar</span>
              <span className="scheme-headline-accent">Muft Bijli Yojana</span>
            </h3>
            <p className="scheme-ministry">Ministry of New and Renewable Energy</p>
            <p className="scheme-copy">
              A national rooftop solar initiative helping households cut electricity costs with central
              subsidy support of up to <strong className="scheme-amount">₹78,000</strong>. Star Enterprises manages portal
              registration, DISCOM inspection, and direct DBT subsidy claim end to end.
            </p>

            <div className="scheme-stats">
              <div>
                <strong className="scheme-amount">₹78,000</strong>
                <span>Max Central Subsidy</span>
              </div>
              <div>
                <strong>1 Crore</strong>
                <span>Households Targeted</span>
              </div>
              <div>
                <strong>25 Yrs</strong>
                <span>Clean Power Horizon</span>
              </div>
            </div>

            <Link to="/contact" className="btn btn-accent scheme-band-cta">
              Contact Us Today
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <aside className="scheme-band-visual" data-scheme-visual>
            <div className="scheme-band-portrait">
              <div className="scheme-band-halo" aria-hidden />
              <img
                className="scheme-band-modi"
                src="/media/pm-modi.png?v=3"
                alt="Prime Minister Narendra Modi"
                loading="lazy"
              />
            </div>
            <div className="scheme-band-caption">
              <p className="scheme-band-name">Shri Narendra Modi</p>
              <p className="scheme-band-role">Hon&apos;ble Prime Minister of India</p>
            </div>
          </aside>
        </div>
      </section>

      {/* Final High-Conversion CTA */}
      <section className="final-cta-section" data-flow-section="cta">
        <div className="site-container">
          <div className="final-cta-panel" data-flow-intro>
            <div className="relative z-[1]">
              <p className="eyebrow text-champagne">Begin Your Transition</p>
              <h2 className="display display-lg mt-4 max-w-[14ch] text-champagne">
                READY WHEN YOU ARE.
              </h2>
              <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-white/80">
                Tell us about your property — residential, commercial, or industrial — and our engineering team
                will prepare a complimentary site shadow audit and 25-year financial yield projection.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-champagne/90">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Free On-Site Feasibility
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Tier-1 OEM Warranties
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold" /> Turnkey Net-Metering
                </span>
              </div>
            </div>
            <div className="relative z-[1] flex flex-col sm:flex-row md:flex-col gap-4">
              <Link to="/contact" className="btn btn-gold w-full sm:w-auto">
                Request a Free Solar Audit
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`tel:${CONTACT_INFO.phoneTel}`}
                className="btn-outline-champagne w-full sm:w-auto"
              >
                <PhoneCall className="w-4 h-4" />
                {CONTACT_INFO.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
