import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ProductBadge, SpecPill } from './ProductBits';

type TechGroup = {
  label: string;
  wattages: readonly string[];
};

type SolarPanelCardProps = {
  brand: string;
  slug: string;
  logo: string;
  image: string;
  copy: string;
  technologies: readonly TechGroup[];
};

export const SolarPanelCard: React.FC<SolarPanelCardProps> = ({
  brand,
  slug,
  logo,
  image,
  copy,
  technologies,
}) => (
  <article className="panel-card">
    <div className="panel-card-top">
      <BrandLogo
        brand={brand}
        src={logo}
        className={`panel-card-logo panel-card-logo--${slug}`}
        withName={false}
      />
      <div className="panel-card-badges">
        {technologies.map((tech) => (
          <ProductBadge key={tech.label}>{tech.label}</ProductBadge>
        ))}
      </div>
    </div>

    <p className="panel-card-copy">{copy}</p>

    <div className="panel-card-visual">
      <img src={image} alt={`${brand} solar panel module`} loading="lazy" />
    </div>

    <div className="panel-card-specs">
      {technologies.map((tech) => (
        <div key={tech.label} className="panel-card-tech">
          <p className="panel-card-tech-label">{tech.label}</p>
          <div className="panel-card-pills">
            {tech.wattages.map((w) => (
              <SpecPill key={w}>{w}</SpecPill>
            ))}
          </div>
        </div>
      ))}
    </div>
  </article>
);
