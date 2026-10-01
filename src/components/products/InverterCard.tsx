import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ProductBadge, SpecPill } from './ProductBits';

type InverterCardProps = {
  brand: string;
  logo: string;
  image: string;
  type: string;
  copy: string;
  ratings: readonly string[];
};

export const InverterCard: React.FC<InverterCardProps> = ({
  brand,
  logo,
  image,
  type,
  copy,
  ratings,
}) => (
  <article className="inv-card">
    <div className="inv-card-top">
      <BrandLogo brand={brand} src={logo} className="inv-card-logo" withName={false} />
      <ProductBadge tone={type === 'Hybrid' ? 'hybrid' : 'tech'}>{type}</ProductBadge>
    </div>

    <p className="inv-card-copy">{copy}</p>

    <div className="inv-card-visual">
      <img src={image} alt={`${brand} ${type} inverter`} loading="lazy" />
    </div>

    <div className="inv-card-specs">
      <p className="inv-card-cap-label">Capacity</p>
      <div className="inv-card-pills">
        {ratings.map((r) => (
          <SpecPill key={r}>{r}</SpecPill>
        ))}
      </div>
    </div>
  </article>
);
