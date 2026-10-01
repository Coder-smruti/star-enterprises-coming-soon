import React from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div>
      <section className="page-hero-ink">
        <div className="site-container relative z-[1]">
          <p className="eyebrow text-champagne">Legal</p>
          <h1 className="display display-lg mt-5 text-white">Terms of Use</h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
            Terms for using this website and sending a Star Enterprises enquiry.
          </p>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="site-container">
          <div className="max-w-2xl space-y-10 text-[1.02rem] leading-relaxed text-navy/70">
            <div>
              <h2 className="display text-[1.8rem] text-navy">Using this website</h2>
              <p className="mt-3">
                Content on this site is for information only. Product specifications, availability
                and pricing are confirmed for each project and may change.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.8rem] text-navy">Enquiries</h2>
              <p className="mt-3">
                Submitting a form is a request for information, not a contract. Any installation or
                supply work is agreed separately in writing.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.8rem] text-navy">Questions</h2>
              <p className="mt-3">
                For privacy details see our{' '}
                <Link to="/privacy-policy" className="text-gold hover:underline">
                  Privacy Policy
                </Link>
                . For project questions, use{' '}
                <Link to="/contact" className="text-gold hover:underline">
                  Contact Us
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
