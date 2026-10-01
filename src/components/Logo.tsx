import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = false,
  size = 'md',
}) => {
  const heights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  const widths = {
    sm: 'max-w-[148px] sm:max-w-[180px] lg:max-w-[200px]',
    md: 'max-w-[180px] sm:max-w-[220px]',
    lg: 'max-w-[200px] sm:max-w-[240px]',
  };

  const tagSizes = {
    sm: 'text-[9px]',
    md: 'text-[10px]',
    lg: 'text-xs',
  };

  const subTextColor = variant === 'dark' ? 'text-[#06D1FF]' : 'text-[#088CFB]';

  return (
    <div className={`flex flex-col justify-center select-none min-w-0 bg-transparent ${className}`} id="brand-logo">
      <img
        src={variant === 'light' ? '/logo-light.png' : '/logo-on-light.png'}
        alt="Star Enterprises"
        className={`${heights[size]} ${widths[size]} w-auto object-contain object-left bg-transparent`}
      />
      {showTagline && (
        <span
          className={`font-medium tracking-[0.2em] uppercase mt-1 leading-none ${subTextColor} ${tagSizes[size]}`}
        >
          Solar Infrastructure
        </span>
      )}
    </div>
  );
};
