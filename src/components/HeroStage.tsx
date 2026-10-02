import React from 'react';
import { Zap, ShieldCheck, Leaf } from 'lucide-react';

export const HeroStage: React.FC = () => {
  return (
    <div className="hero-stage-container" aria-label="Star Enterprises High-Efficiency Solar Highlights">
      {/* Floating feature pills stack on upper-right */}
      <div className="hero-feature-stack" data-hero-float>
        <div className="hero-feature-card">
          <div className="hero-feature-icon">
            <Zap className="w-4 h-4 text-gold" />
          </div>
          <span className="hero-feature-label">Higher Efficiency</span>
        </div>

        <div className="hero-feature-card">
          <div className="hero-feature-icon">
            <ShieldCheck className="w-4 h-4 text-gold" />
          </div>
          <span className="hero-feature-label">Built to Last</span>
        </div>

        <div className="hero-feature-card">
          <div className="hero-feature-icon">
            <Leaf className="w-4 h-4 text-gold" />
          </div>
          <span className="hero-feature-label">Cleaner Tomorrow</span>
        </div>
      </div>

      {/* Cursive handwritten statement with warm gold luminous underline */}
      <div className="hero-cursive-wrap" data-hero-float>
        <span className="hero-cursive-text">Energy for a Better Tomorrow</span>
        <svg
          className="hero-cursive-curve"
          viewBox="0 0 240 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M4 12C60 3 175 4 236 14"
            stroke="url(#scriptUnderlineGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="scriptUnderlineGrad" x1="4" y1="12" x2="236" y2="14" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ff4d7a" />
              <stop offset="60%" stopColor="#e00050" />
              <stop offset="100%" stopColor="#ff8fab" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Tech module spec tag positioned near the panel base */}
      <div className="hero-spec-tag" data-hero-float>
        <span className="hero-spec-dot" />
        <div className="hero-spec-copy">
          <strong className="hero-spec-watt">615 Wp</strong>
          <span className="hero-spec-type">N-Type TOPCon · Bifacial</span>
        </div>
      </div>
    </div>
  );
};
