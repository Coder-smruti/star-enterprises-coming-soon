import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div>
      <section className="page-hero-ink">
        <div className="site-container relative z-[1]">
          <p className="eyebrow text-champagne">Legal</p>
          <h1 className="display display-lg mt-5 text-white">Privacy Policy</h1>
          <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
            How Star Enterprises collects, uses and protects personal information from website
            enquiries and related communication.
          </p>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="site-container">
          <div className="max-w-2xl space-y-10 text-[1.02rem] leading-relaxed text-navy/70">
            <div>
              <h2 className="display text-[1.8rem] text-navy">Information we collect</h2>
              <p className="mt-3">
                When you send an enquiry we may collect your name, email, phone number, location,
                brand or product of interest, and any message you choose to share.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.8rem] text-navy">How we use it</h2>
              <p className="mt-3">
                We use this information to respond to your request, prepare a suitable solar
                proposal, and follow up on installation or product questions. We do not sell your
                personal information.
              </p>
            </div>
            <div>
              <h2 className="display text-[1.8rem] text-navy">How we protect it</h2>
              <p className="mt-3">
                Access to enquiry details is limited to people who need it to respond. If you want
                your details updated or removed, contact us through the{' '}
                <Link to="/contact" className="text-gold hover:underline">
                  Contact Us
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
