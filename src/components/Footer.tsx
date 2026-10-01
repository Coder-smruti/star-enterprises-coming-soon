import React from 'react';
import { Link } from 'react-router-dom';
import { Clock3, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { Logo } from './Logo';
import { CONTACT_INFO, NAV_ITEMS } from '../data/content';

const SOCIAL = [
  { label: 'LinkedIn', href: CONTACT_INFO.social.linkedin, Icon: Linkedin },
  { label: 'Facebook', href: CONTACT_INFO.social.facebook, Icon: Facebook },
  { label: 'Instagram', href: CONTACT_INFO.social.instagram, Icon: Instagram },
  { label: 'YouTube', href: CONTACT_INFO.social.youtube, Icon: Youtube },
] as const;

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-container footer-main">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" aria-label="Star Enterprises home">
            <Logo size="md" variant="light" />
          </Link>
          <p className="footer-brand-copy">
            Intelligent solar solutions for homes, businesses and industry — built around real
            consumption and designed to last.
          </p>
          <div className="footer-social">
            {SOCIAL.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="footer-social-btn"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Pages</p>
          <ul className="footer-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link to={item.href} className="footer-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Enquire</p>
          <ul className="footer-list">
            <li>
              <Link to="/contact" className="footer-link">
                Get a Quote
              </Link>
            </li>
            <li>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="footer-link"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <ul className="footer-contact-list">
            <li>
              <span className="footer-contact-icon">
                <Phone />
              </span>
              <a href={`tel:${CONTACT_INFO.phoneTel}`}>{CONTACT_INFO.phoneDisplay}</a>
            </li>
            <li>
              <span className="footer-contact-icon">
                <Mail />
              </span>
              <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>
            </li>
            <li>
              <span className="footer-contact-icon">
                <MapPin />
              </span>
              <a href={CONTACT_INFO.mapsUrl} target="_blank" rel="noreferrer">
                {CONTACT_INFO.addressLines.join(', ')}
              </a>
            </li>
            <li>
              <span className="footer-contact-icon">
                <Clock3 />
              </span>
              <span>{CONTACT_INFO.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="site-container footer-bottom-inner">
          <p>© {year} Star Enterprises. All rights reserved.</p>
          <p className="footer-legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="footer-legal-sep" aria-hidden />
            <Link to="/terms">Terms of Use</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
