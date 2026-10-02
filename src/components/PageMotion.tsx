import React, { useRef } from 'react';
import { usePageMotion } from '../hooks/usePageMotion';

type PageMotionProps = {
  children: React.ReactNode;
  className?: string;
};

/** Wraps a page and runs shared GSAP entrance + scroll reveals. */
export const PageMotion: React.FC<PageMotionProps> = ({ children, className }) => {
  const rootRef = useRef<HTMLDivElement>(null);
  usePageMotion(rootRef);

  return (
    <div ref={rootRef} className={className}>
      {children}
    </div>
  );
};
