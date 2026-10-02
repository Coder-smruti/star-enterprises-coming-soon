import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Battery,
  Building2,
  Check,
  ChevronDown,
  Cylinder,
  Droplets,
  FileText,
  Headset,
  Layers,
  MessageCircle,
  Network,
  Settings2,
  ShieldCheck,
  SlidersHorizontal,
  Sun,
  Users,
  Waves,
  Wrench,
  X,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
  BATTERY_FEATURE,
  CABLE_CARD,
  CONTACT_INFO,
  EARTHING_CARD,
  INVERTER_BRAND_CARDS,
  PANEL_BRAND_CARDS,
  PRODUCT_BRANDS,
  PRODUCT_SECTION_NAV,
  PROTECTION_ALL,
  PROTECTION_BENEFITS,
  PROTECTION_PRIMARY,
  PROTECTION_VISUAL,
  SOLAR_SOLUTION_CARDS,
} from '../data/content';
import { SolarPanelCard } from '../components/products/SolarPanelCard';
import { InverterCard } from '../components/products/InverterCard';
import { BatteryFeatureCard, InverterBenefits } from '../components/products/BatteryFeatureCard';
import { ProductSectionHeader } from '../components/products/ProductBits';
import { PageHero } from '../components/PageHero';
import { PageMotion } from '../components/PageMotion';

const PROTECTION_ICONS = [ShieldCheck, Network, Layers, Building2];

const CTA_BENEFITS = [
  { label: 'Expert Consultation', icon: Users },
  { label: 'Right Product Selection', icon: Settings2 },
  { label: 'Customised Solutions', icon: FileText },
  { label: 'Ongoing Support', icon: Headset },
] as const;

const CTA_CHECKS = [
  'Free Project Consultation',
  'Guidance on Product Selection',
  'Tailored System Design',
  'Support from Our Team',
] as const;

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  water: Droplets,
  light: Sun,
  power: Layers,
};

const CHIP_ICONS: Record<string, LucideIcon> = {
  tank: Cylinder,
  pump: Waves,
  structure: Building2,
  plumbing: Wrench,
  battery: Battery,
  hybrid: Settings2,
  custom: SlidersHorizontal,
};

export const ProductsPage: React.FC = () => {
  const [showAllProtection, setShowAllProtection] = useState(false);
  const [specOpenId, setSpecOpenId] = useState<string | null>(null);

  const enquireHref = (label: string) =>
    `/contact?type=${encodeURIComponent(label)}`;

  const waHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Star Enterprises! I need help choosing solar equipment for my project.',
  )}`;

  const protectionRows = showAllProtection ? PROTECTION_ALL : PROTECTION_PRIMARY;
  const openSpecCard = SOLAR_SOLUTION_CARDS.find(
    (s) => s.id === specOpenId && 'fullSpec' in s,
  );

  return (
    <PageMotion className="products-page">
      <PageHero
        eyebrow="Our Products"
        title={
          <>
            Trusted Solar Brands
            <br />
            for a <span className="hero-bright-word">Brighter</span> Tomorrow.
          </>
        }
        lead="High-performance solar products from trusted brands for homes, businesses and industrial projects. We help you choose the right brand, model and warranty for your site."
        image="/media/products-hero.jpg"
        imageAlt="Solar products and panels"
      >
        <div className="page-hero-brands">
          {PRODUCT_BRANDS.map((brand) => (
            <span key={brand} className="page-hero-pill">
              {brand}
            </span>
          ))}
        </div>
      </PageHero>

      <nav className="pcat-nav" aria-label="Product categories" data-animate>
        <div className="site-container pcat-nav-track">
          {PRODUCT_SECTION_NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="pcat-chip">
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section className="prod-panels" id="solar-panels">
        <div className="site-container prod-panels-inner">
          <ProductSectionHeader
            title="Solar Panels"
            subtitle="High-performance solar modules from trusted manufacturers."
          />
          <div className="panel-card-grid">
            {PANEL_BRAND_CARDS.map((card) => (
              <SolarPanelCard
                key={card.brand}
                brand={card.brand}
                slug={card.slug}
                logo={card.logo}
                image={card.image}
                copy={card.copy}
                technologies={card.technologies}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="prod-inverters" id="inverters">
        <div className="site-container">
          <ProductSectionHeader
            title="Inverters"
            subtitle="Grid-tie and hybrid inverters matched to residential and C&I loads."
            aside={<InverterBenefits />}
          />
          <div className="inv-card-grid">
            {INVERTER_BRAND_CARDS.map((card) => (
              <InverterCard
                key={card.brand}
                brand={card.brand}
                slug={card.slug}
                logo={card.logo}
                image={card.image}
                type={card.type}
                copy={card.copy}
                ratings={card.ratings}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="prod-batteries" id="batteries" data-animate>
        <div className="site-container prod-batteries-inner">
          <ProductSectionHeader
            title="Batteries"
            subtitle="Storage packs for hybrid backup and off-grid resilience."
          />
          <BatteryFeatureCard
            brand={BATTERY_FEATURE.brand}
            logo={BATTERY_FEATURE.logo}
            title={BATTERY_FEATURE.title}
            eyebrow={BATTERY_FEATURE.eyebrow}
            copy={BATTERY_FEATURE.copy}
            variants={BATTERY_FEATURE.variants}
            image={BATTERY_FEATURE.image}
            benefits={BATTERY_FEATURE.benefits}
          />
        </div>
      </section>

      <section className="cab-section" id="cables-earthing">
        <div className="site-container cab-section-inner">
          <ProductSectionHeader
            title="Cables & Earthing"
            subtitle="DC/AC conductors and a complete earthing kit for safe and reliable solar installations."
          />

          <div className="cab-duo">
            <article className="cab-feature">
              <div className="cab-feature-media">
                <img src={CABLE_CARD.image} alt="Red and black solar cable coils" loading="lazy" />
              </div>
              <div className="cab-feature-body">
                <p className="cab-feature-eyebrow">{CABLE_CARD.eyebrow}</p>
                <h3 className="display cab-feature-title">{CABLE_CARD.title}</h3>
                <div className="cab-spec-blocks">
                  {CABLE_CARD.groups.map((group) => (
                    <div key={group.label} className="cab-spec-block">
                      <p className="cab-spec-label">{group.label}</p>
                      <p className="cab-spec-value">{group.items.join(' · ')}</p>
                    </div>
                  ))}
                </div>
                <Link to={enquireHref('Solar Cables')} className="cab-enquire">
                  Enquire
                  <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="cab-feature">
              <div className="cab-feature-media">
                <img
                  src={EARTHING_CARD.image}
                  alt="Earthing kit with pit bucket, arrester, electrode and chemical bag"
                  loading="lazy"
                />
              </div>
              <div className="cab-feature-body">
                <p className="cab-feature-eyebrow">{EARTHING_CARD.eyebrow}</p>
                <h3 className="display cab-feature-title">{EARTHING_CARD.title}</h3>
                <ul className="cab-kit-list">
                  {EARTHING_CARD.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to={enquireHref('Earthing Kit')} className="cab-enquire">
                  Enquire
                  <ArrowRight />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="prot-section" id="protection" data-animate>
        <div className="site-container">
          <ProductSectionHeader
            title="Solar Protection & Distribution"
            subtitle="ACDB, DCDB and AJB configurations for safe string and AC distribution."
            aside={
              <ul className="prot-benefits" aria-label="Protection benefits">
                {PROTECTION_BENEFITS.map((item, i) => {
                  const Icon = PROTECTION_ICONS[i % PROTECTION_ICONS.length];
                  return (
                    <li key={item}>
                      <span aria-hidden>
                        <Icon />
                      </span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            }
          />

          <div className="prot-shell">
            <div className="prot-table-side">
              <div className="prot-table-wrap">
                <table className="prot-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Configuration</th>
                      <th>Voltage / Rating</th>
                    </tr>
                  </thead>
                  <tbody>
                    {protectionRows.map((row, idx) => (
                      <tr key={`${row.product}-${row.configuration}-${row.rating}-${idx}`}>
                        <td>{row.product}</td>
                        <td>{row.configuration}</td>
                        <td>{row.rating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                className="cab-enquire prot-expand"
                aria-expanded={showAllProtection}
                onClick={() => setShowAllProtection((v) => !v)}
              >
                {showAllProtection ? 'Show Major Configurations' : 'View All Configurations'}
                <ChevronDown className={showAllProtection ? 'is-open' : ''} />
              </button>
            </div>

            <div className="prot-visual">
              <img
                src={PROTECTION_VISUAL.image}
                alt="ACDB, DCDB and AJB solar protection boxes"
                loading="lazy"
              />
              <div className="prot-visual-labels" aria-hidden>
                {PROTECTION_VISUAL.units.map((u) => (
                  <span key={u.id}>{u.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sol-section" id="solar-solutions">
        <div className="sol-section-inner">
          <ProductSectionHeader
            eyebrow="Our Solutions"
            title="Complete Solar Solutions"
            subtitle="Turnkey solar packages beyond components — water, lighting and off-grid power."
          />

          <div className="sol-grid">
            {SOLAR_SOLUTION_CARDS.map((card) => {
              const Icon = SOLUTION_ICONS[card.icon] ?? Layers;

              return (
                <article key={card.id} className="sol-card">
                  <div className="sol-card-media">
                    <img src={card.image} alt={card.title} loading="lazy" />
                  </div>

                  <div className="sol-card-body">
                    <span className="sol-card-icon" aria-hidden>
                      <Icon />
                    </span>

                    <h3 className="display sol-card-title">{card.title}</h3>
                    <p className="sol-card-copy">{card.description}</p>

                    {'chips' in card && card.chips && (
                      <ul
                        className={`sol-chips ${card.chipLayout === 'grid' ? 'is-grid' : 'is-row'}`}
                      >
                        {card.chips.map((chip) => {
                          const ChipIcon = CHIP_ICONS[chip.icon];
                          return (
                            <li key={chip.label}>
                              {ChipIcon ? (
                                <span aria-hidden>
                                  <ChipIcon />
                                </span>
                              ) : null}
                              {chip.label}
                            </li>
                          );
                        })}
                      </ul>
                    )}

                    {'wattages' in card && card.wattages && (
                      <ul className="sol-chips is-watts">
                        {card.wattages.map((w) => (
                          <li key={w}>{w}</li>
                        ))}
                      </ul>
                    )}

                    {card.ctaKind === 'spec' ? (
                      <button
                        type="button"
                        className="sol-cta"
                        onClick={() => setSpecOpenId(card.id)}
                      >
                        {card.cta}
                        <ArrowRight />
                      </button>
                    ) : (
                      <Link to={enquireHref(card.title)} className="sol-cta">
                        {card.cta}
                        <ArrowRight />
                      </Link>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="prod-guide-cta" data-animate>
        <div className="prod-cta-inner">
          <div className="prod-cta-panel">
            <div className="prod-cta-glow" aria-hidden />

            <div className="prod-cta-main">
              <p className="prod-cta-eyebrow">
                Get Expert Guidance
                <span className="prod-cta-rule" />
              </p>

              <h2 className="display prod-cta-title">
                Need help choosing
                <br />
                the <span className="is-accent">right solar equipment?</span>
              </h2>

              <p className="prod-cta-copy">
                Tell us about your project and our team will help select the right modules, inverter,
                battery and accessories for your requirement.
              </p>

              <ul className="prod-cta-benefits">
                {CTA_BENEFITS.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <span className="prod-cta-benefit-icon" aria-hidden>
                      <Icon />
                    </span>
                    <span>{label}</span>
                  </li>
                ))}
              </ul>

              <div className="prod-cta-foot">
                <div className="prod-cta-actions">
                  <Link to="/contact" className="prod-cta-btn is-primary">
                    Get a Quote
                    <ArrowUpRight />
                  </Link>
                  <a href={waHref} target="_blank" rel="noreferrer" className="prod-cta-btn is-secondary">
                    <MessageCircle />
                    WhatsApp
                  </a>
                </div>

                <ul className="prod-cta-checks">
                  {CTA_CHECKS.map((item) => (
                    <li key={item}>
                      <span aria-hidden>
                        <Check />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="prod-cta-visual" aria-hidden>
              <img src="/cta/solar-consultation-home.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {openSpecCard && 'fullSpec' in openSpecCard && (
        <div className="pcat-modal" role="dialog" aria-modal="true" aria-label={`${openSpecCard.title} specification`}>
          <button
            type="button"
            className="pcat-modal-veil"
            aria-label="Close"
            onClick={() => setSpecOpenId(null)}
          />
          <div className="pcat-modal-panel">
            <div className="pcat-modal-head">
              <div>
                <p className="eyebrow">Full Specification</p>
                <h3 className="display pcat-modal-title">{openSpecCard.title}</h3>
              </div>
              <button
                type="button"
                className="pcat-modal-close"
                aria-label="Close"
                onClick={() => setSpecOpenId(null)}
              >
                <X />
              </button>
            </div>
            <ul className="pcat-modal-list">
              {openSpecCard.fullSpec.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="pcat-modal-actions">
              <button type="button" className="btn btn-outline-navy" onClick={() => setSpecOpenId(null)}>
                Close
              </button>
              <Link
                to={enquireHref(openSpecCard.title)}
                className="btn btn-accent"
                onClick={() => setSpecOpenId(null)}
              >
                Enquire
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      )}
    </PageMotion>
  );
};
