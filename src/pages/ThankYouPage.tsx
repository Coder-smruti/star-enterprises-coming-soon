import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MessageCircle, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';
import { PageHero } from '../components/PageHero';
import { PageMotion } from '../components/PageMotion';

export const ThankYouPage: React.FC = () => {
  const enquiryName = useMemo(() => {
    try {
      const raw = sessionStorage.getItem('star-enquiry');
      if (!raw) return '';
      const parsed = JSON.parse(raw) as { fullName?: string };
      return parsed.fullName?.trim() || '';
    } catch {
      return '';
    }
  }, []);

  return (
    <PageMotion>
      <PageHero
        eyebrow="Received"
        title={
          <>
            Thank <span className="hero-bright-word">you{enquiryName ? ',' : '.'}</span>
            {enquiryName ? (
              <>
                <br />
                {enquiryName}.
              </>
            ) : null}
          </>
        }
        lead="Your enquiry details are ready in WhatsApp. If the chat window opened, send the message to reach our team. We typically respond within one business day with a clear next step."
        image="/cta/solar-consultation-home.jpg"
        imageAlt=""
      >
        <div className="page-hero-actions">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-accent btn-hero-primary"
          >
            Open WhatsApp again
            <MessageCircle className="w-4 h-4" />
          </a>
          <a href={`tel:${CONTACT_INFO.phoneTel}`} className="btn btn-hero-secondary">
            Call {CONTACT_INFO.phoneDisplay}
            <PhoneCall className="w-4 h-4" />
          </a>
          <Link to="/" className="btn btn-hero-secondary">
            Back to Home
            <ArrowRight />
          </Link>
          <Link to="/products" className="btn btn-hero-secondary">
            View Products
            <ArrowUpRight />
          </Link>
        </div>
      </PageHero>
    </PageMotion>
  );
};
