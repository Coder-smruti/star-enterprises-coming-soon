import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, MessageCircle, PhoneCall } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

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
    <div>
      <section className="page-hero-ink min-h-[70svh] flex items-end">
        <div className="site-container relative z-[1] pb-8">
          <p className="eyebrow text-champagne">Received</p>
          <h1 className="display display-lg mt-5 max-w-[12ch] text-white">
            THANK <span className="text-champagne">YOU{enquiryName ? ',' : '.'}</span>
            {enquiryName ? (
              <>
                <br />
                <span className="text-champagne">{enquiryName.toUpperCase()}.</span>
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
            Your enquiry details are ready in WhatsApp. If the chat window opened, send the message to
            reach our team. We typically respond within one business day with a clear next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn btn-gold"
            >
              Open WhatsApp again
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={`tel:${CONTACT_INFO.phoneTel}`} className="btn btn-outline">
              Call {CONTACT_INFO.phoneDisplay}
              <PhoneCall className="w-4 h-4" />
            </a>
            <Link to="/" className="btn btn-outline">
              Back to Home
              <ArrowRight />
            </Link>
            <Link to="/products" className="btn btn-outline">
              View Products
              <ArrowUpRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
