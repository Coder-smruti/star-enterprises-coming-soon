import React from 'react';
import { PARTNER_BRANDS } from '../data/content';
import { BrandLogo } from './products/BrandLogo';

function MarqueeSet({ suffix, hidden }: { suffix: string; hidden?: boolean }) {
  return (
    <div className="brand-marquee-set" aria-hidden={hidden}>
      {PARTNER_BRANDS.map((brand) => (
        <div key={`${suffix}-${brand.name}`} className="brand-marquee-item">
          <BrandLogo brand={brand.name} src={brand.logo} withName={false} className="brand-marquee-logo" />
          <span className="brand-marquee-diamond" aria-hidden />
        </div>
      ))}
    </div>
  );
}

export const BrandMarquee: React.FC = () => {
  return (
    <section className="brand-marquee" aria-label="Technology and OEM partners">
      <div className="brand-marquee-viewport">
        <div className="brand-marquee-track">
          <MarqueeSet suffix="a" />
          <MarqueeSet suffix="b" hidden />
        </div>
      </div>
    </section>
  );
};
