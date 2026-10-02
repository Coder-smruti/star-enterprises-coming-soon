import React from 'react';
import { Link } from 'react-router-dom';
import { PageHero } from '../components/PageHero';
import { PageMotion } from '../components/PageMotion';

export const TermsPage: React.FC = () => {
  return (
    <PageMotion>
      <PageHero
        compact
        eyebrow="Legal"
        title={
          <>
            Terms of <span className="hero-bright-word">Use</span>
          </>
        }
        lead="Terms for using this website and sending a Star Enterprises enquiry."
      />

      <section className="section-y bg-cream">
        <div className="site-container">
          <div className="max-w-2xl space-y-10 text-[1.02rem] leading-relaxed text-black" data-animate-stagger>
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
    </PageMotion>
  );
};
