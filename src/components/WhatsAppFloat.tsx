import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CONTACT_INFO } from '../data/content';

const GREETING = 'Hi ☀️ Ready to cut your power bill?';

const SunAvatar: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" aria-hidden>
    <circle cx="32" cy="32" r="18" fill="#F5C518" />
    <circle cx="32" cy="32" r="14" fill="#FFE566" />
    <g stroke="#E8A317" strokeWidth="2.5" strokeLinecap="round">
      <path d="M32 6v6M32 52v6M6 32h6M52 32h6M14 14l4.5 4.5M45.5 45.5L50 50M50 14l-4.5 4.5M14 50l4.5-4.5" />
    </g>
    <circle cx="26" cy="30" r="2.2" fill="#0B1F48" />
    <circle cx="38" cy="30" r="2.2" fill="#0B1F48" />
    <path
      d="M26 38c2.2 3.2 9.8 3.2 12 0"
      stroke="#0B1F48"
      strokeWidth="2.2"
      strokeLinecap="round"
    />
    <circle cx="22.5" cy="33.5" r="2.4" fill="#FF8A65" opacity="0.55" />
    <circle cx="41.5" cy="33.5" r="2.4" fill="#FF8A65" opacity="0.55" />
  </svg>
);

export const WhatsAppFloat: React.FC = () => {
  const [open, setOpen] = useState(false);

  const waHref = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    'Hi Star Enterprises! I would like to know more about solar for my site.',
  )}`;

  return (
    <div className="wa-float">
      {open && (
        <div className="wa-float-panel" role="dialog" aria-label="WhatsApp greeting">
          <button
            type="button"
            className="wa-float-close"
            aria-label="Close greeting"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
          <div className="wa-float-head">
            <span className="wa-float-avatar" aria-hidden>
              <SunAvatar />
            </span>
            <div>
              <strong>Star Enterprises</strong>
              <em>Usually replies in minutes</em>
            </div>
          </div>
          <p className="wa-float-bubble">{GREETING}</p>
          <a href={waHref} target="_blank" rel="noreferrer" className="wa-float-cta">
            Chat on WhatsApp
          </a>
        </div>
      )}

      <button
        type="button"
        className="wa-float-btn"
        aria-label={open ? 'Close chat' : 'Open chat'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="wa-float-pulse" aria-hidden />
        <SunAvatar className="wa-float-btn-icon" />
      </button>
    </div>
  );
};
