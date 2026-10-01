import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Headphones,
  Home,
  Leaf,
  Package,
  Settings2,
  ShieldCheck,
  Users,
  Wrench,
} from 'lucide-react';
const ABOUT_VALUES = [
  { label: 'Trusted Partnerships', icon: Users },
  { label: 'Quality Solutions', icon: Settings2 },
  { label: 'Sustainable Growth', icon: Leaf },
  { label: 'Long-Term Support', icon: ShieldCheck },
] as const;

const STORY_POINTS = [
  {
    eyebrow: 'Who we build for',
    heading: 'Homes, business, industry',
    description:
      'From individual homes to large commercial and industrial sites, we design solutions that fit real energy needs.',
    icon: Home,
  },
  {
    eyebrow: 'What we supply',
    heading: 'Panels, inverters, storage, BOS',
    description: 'We work with reliable global brands and supply complete system components.',
    icon: Package,
  },
  {
    eyebrow: 'How we specify',
    heading: 'Around real loads and real sites',
    description:
      'Heat, monsoon, coastal air and grid behaviour are part of the brief from the first drawing.',
    icon: ClipboardList,
  },
] as const;

const WHY_CARDS = [
  {
    title: 'End-to-End Expertise',
    copy: 'From survey and design through supply, installation and commissioning — one accountable team.',
    image: '/about/expertise.jpg',
    icon: Wrench,
  },
  {
    title: 'Quality Products',
    copy: 'Trusted module, inverter and storage brands selected for performance, warranty and site conditions.',
    image: '/about/products.jpg',
    icon: CheckCircle2,
  },
  {
    title: 'Ongoing Support',
    copy: 'Guidance after handover — monitoring, service advice and long-term partnership for dependable power.',
    image: '/about/support.jpg',
    icon: Headphones,
  },
] as const;

export const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-shell">
          <div className="about-hero-media" aria-hidden>
            <img src="/about/about-team-hero.jpg" alt="" />
            <div className="about-hero-veil" />
          </div>

          <div className="site-container about-hero-layout">
            <div className="about-hero-copy">
              <p className="about-hero-eyebrow">
                <span className="about-hero-rule" />
                About Us
              </p>

              <h1 className="display about-hero-title">
                Powering a
                <br />
                <span className="is-accent">Brighter Tomorrow.</span>
              </h1>

              <p className="about-hero-lead">
                We are a solar solutions company committed to delivering reliable, efficient and
                future-ready energy systems for homes, businesses and industries.
              </p>

              <ul className="about-hero-features">
                {ABOUT_VALUES.map(({ label, icon: Icon }) => (
                  <li key={label}>
                    <span className="about-hero-feature-icon" aria-hidden>
                      <Icon />
                    </span>
                    <strong>{label}</strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story" id="our-story">
        <div className="about-story-inner">
          <div className="about-story-main">
            <p className="about-story-kicker">
              <span className="about-story-kicker-rule" />
              Our Story
            </p>
            <h2 className="display about-story-title">
              A solar company built for the long view.
            </h2>
            <p className="about-story-lead">
              Star Enterprises is focused on intelligent solar systems for homes, businesses and
              industry. The work is simple to state and demanding to deliver: convert sunlight into
              reliable, independent power.
            </p>
            <p className="about-story-lead">
              We specify around real loads, real roofs and real operating conditions — so every
              installation is designed to perform for years, not just look complete on day one.
            </p>
            <a href="#why-star" className="btn btn-accent about-story-cta">
              Our Journey
              <ArrowUpRight />
            </a>
          </div>

          <div className="about-story-visual" aria-hidden>
            <div className="about-story-oval">
              <img src="/about/our-story-solar.jpg" alt="" loading="lazy" />
            </div>
          </div>

          <ul className="about-story-detail">
            {STORY_POINTS.map(({ eyebrow, heading, description, icon: Icon }) => (
              <li key={eyebrow}>
                <div className="about-story-detail-top">
                  <span className="about-story-detail-icon" aria-hidden>
                    <Icon />
                  </span>
                  <p className="about-story-detail-eyebrow">{eyebrow}</p>
                </div>
                <h3 className="display about-story-detail-heading">{heading}</h3>
                <p className="about-story-detail-copy">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="about-why" id="why-star">
        <div className="site-container">
          <div className="about-why-intro">
            <div className="about-why-media">
              <img src="/about/office.jpg" alt="Star Enterprises office" loading="lazy" />
              <div className="about-why-badge">
                <Building2 />
                <span>Star Enterprises</span>
              </div>
            </div>
            <div className="about-why-copy">
              <p className="about-kicker about-kicker-red">
                <span className="about-kicker-rule" />
                Why Star Enterprises
              </p>
              <h2 className="display about-why-title">
                Experience. Products. Support.
                <br />
                All in one place.
              </h2>
              <p className="about-why-lead">
                We bring together project expertise, trusted equipment and responsive support — so
                your solar system is specified correctly, installed carefully and backed for the long
                term.
              </p>
            </div>
          </div>

          <div className="about-why-cards">
            {WHY_CARDS.map(({ title, copy, image, icon: Icon }) => (
              <article key={title} className="about-why-card">
                <div className="about-why-card-media">
                  <img src={image} alt="" loading="lazy" />
                </div>
                <span className="about-why-card-icon" aria-hidden>
                  <Icon />
                </span>
                <h3 className="display about-why-card-title">{title}</h3>
                <p className="about-why-card-copy">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="site-container">
          <div className="about-cta-panel">
            <div className="about-cta-media" aria-hidden>
              <img src="/about/cta-bg.jpg" alt="" />
              <div className="about-cta-veil" />
            </div>
            <div className="about-cta-content">
              <div>
                <p className="about-kicker is-on-light">
                  <span className="about-kicker-rule" />
                  Next Step
                </p>
                <h2 className="display about-cta-title">Ready when you are.</h2>
              </div>
              <Link to="/contact" className="btn btn-gold">
                Get a Quote
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
