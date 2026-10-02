import React from 'react';

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  image?: string;
  imageAlt?: string;
  children?: React.ReactNode;
  compact?: boolean;
  className?: string;
};

/** Inner-page hero matching the home hero composition: light field, left copy, optional right faded visual. */
export const PageHero: React.FC<PageHeroProps> = ({
  eyebrow,
  title,
  lead,
  image,
  imageAlt = '',
  children,
  compact = false,
  className = '',
}) => (
  <section
    className={[
      'page-hero',
      compact ? 'is-compact' : '',
      image ? '' : 'is-copy-only',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    <div className="page-hero-shell">
      <div className="page-hero-bridge" aria-hidden>
        <div className="page-hero-sun-glow" />
      </div>

      <div className="page-hero-main">
        <div className="page-hero-copy">
          <p className="page-hero-eyebrow">
            <span className="page-hero-eyebrow-rule" aria-hidden />
            {eyebrow}
          </p>

          <h1 className="display page-hero-headline">{title}</h1>

          <div className="page-hero-lead">{lead}</div>
        </div>

        {image ? (
          <div className="page-hero-visual" aria-hidden={!imageAlt}>
            <div className="page-hero-visual-frame">
              <img src={image} alt={imageAlt} loading="eager" />
            </div>
          </div>
        ) : null}

        {children ? <div className="page-hero-extra">{children}</div> : null}
      </div>
    </div>
  </section>
);
