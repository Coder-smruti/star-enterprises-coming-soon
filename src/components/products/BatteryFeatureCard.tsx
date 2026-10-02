import React from 'react';
import { BatteryCharging, Home, Leaf, Settings2, Zap, ShieldCheck } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { SpecPill } from './ProductBits';

type BatteryFeatureCardProps = {
  brand: string;
  logo: string;
  title: string;
  eyebrow: string;
  copy: string;
  variants: readonly string[];
  image: string;
  benefits: readonly string[];
};

const BENEFIT_ICONS = [BatteryCharging, Home, Settings2, Leaf];

export const BatteryFeatureCard: React.FC<BatteryFeatureCardProps> = ({
  brand,
  logo,
  title,
  eyebrow,
  copy,
  variants,
  image,
  benefits,
}) => (
  <article className="batt-feature">
    <div className="batt-feature-content">
      <BrandLogo brand={brand} src={logo} className="batt-feature-logo" withName={false} />
      <p className="batt-feature-eyebrow">{eyebrow}</p>
      <h3 className="display batt-feature-title">{title}</h3>
      <p className="batt-feature-copy">{copy}</p>
      <div className="batt-feature-pills">
        {variants.map((v) => (
          <SpecPill key={v}>{v}</SpecPill>
        ))}
      </div>
    </div>

    <div className="batt-feature-visual">
      <img src={image} alt={`${brand} lithium battery units`} loading="lazy" />
    </div>

    <ul className="batt-feature-benefits">
      {benefits.map((item, i) => {
        const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
        return (
          <li key={item}>
            <span className="batt-benefit-icon" aria-hidden>
              <Icon />
            </span>
            <span>{item}</span>
          </li>
        );
      })}
    </ul>
  </article>
);

export const InverterBenefits: React.FC = () => (
  <ul className="inv-benefits" aria-label="Inverter benefits">
    <li>
      <span aria-hidden>
        <Zap />
      </span>
      Reliable Performance
    </li>
    <li>
      <span aria-hidden>
        <ShieldCheck />
      </span>
      Smart Energy Conversion
    </li>
    <li>
      <span aria-hidden>
        <Leaf />
      </span>
      Built for a Greener Tomorrow
    </li>
  </ul>
);
