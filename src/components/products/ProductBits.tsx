import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ProductBadgeProps = {
  children: React.ReactNode;
  tone?: 'tech' | 'hybrid';
};

export const ProductBadge: React.FC<ProductBadgeProps> = ({ children, tone = 'tech' }) => (
  <span className={`prod-badge ${tone === 'hybrid' ? 'is-hybrid' : ''}`}>{children}</span>
);

type SpecPillProps = {
  children: React.ReactNode;
};

export const SpecPill: React.FC<SpecPillProps> = ({ children }) => (
  <span className="prod-pill">{children}</span>
);

type ProductCTAProps = {
  to: string;
  label?: string;
};

export const ProductCTA: React.FC<ProductCTAProps> = ({ to, label = 'Enquire' }) => (
  <Link to={to} className="prod-cta" aria-label={label}>
    {label}
    <ArrowRight />
  </Link>
);

type ProductSectionHeaderProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  aside?: React.ReactNode;
};

export const ProductSectionHeader: React.FC<ProductSectionHeaderProps> = ({
  title,
  subtitle,
  eyebrow = 'Our Products',
  aside,
}) => (
  <header className={`prod-section-head ${aside ? 'has-aside' : ''}`}>
    <div>
      <p className="prod-section-eyebrow">
        <span className="prod-section-rule" />
        {eyebrow}
      </p>
      <h2 className="display prod-section-title">{title}</h2>
      <p className="prod-section-sub">{subtitle}</p>
    </div>
    {aside}
  </header>
);
