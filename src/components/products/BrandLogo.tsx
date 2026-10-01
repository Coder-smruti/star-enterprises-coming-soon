import React, { useState } from 'react';

type BrandLogoProps = {
  brand: string;
  src: string;
  className?: string;
  /** Show brand name beside the mark — set false once full official wordmarks are in place. */
  withName?: boolean;
};

/** Loads `/brands/{slug}.svg|png` when present; falls back to a clean replaceable placeholder. */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  brand,
  src,
  className = '',
  withName = true,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className={`brand-logo-lockup ${className}`} aria-label={`${brand} logo`}>
        <span className="brand-logo-mark" aria-hidden>
          {brand.charAt(0)}
        </span>
        <span className="brand-logo-name">{brand}</span>
      </span>
    );
  }

  return (
    <span className={`brand-logo-lockup ${className}`}>
      <img
        className="brand-logo"
        src={src}
        alt={`${brand} logo`}
        loading="lazy"
        onError={() => setFailed(true)}
      />
      {withName && <span className="brand-logo-name">{brand}</span>}
    </span>
  );
};
