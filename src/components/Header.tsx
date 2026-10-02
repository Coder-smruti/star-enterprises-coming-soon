import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../data/content';

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '') || '/';
  const isHome = path === '/';

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Same light header on every page. Home stays clear over the hero until scroll.
  const shellClass = [
    'nav-shell',
    'is-light',
    solid || open || !isHome ? 'is-solid' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={shellClass}>
        <div className="site-container nav-inner">
          <Link to="/" className="shrink min-w-0" aria-label="Star Enterprises home">
            <Logo size="lg" variant="dark" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const active =
                item.href === '/' ? path === '/' : path.startsWith(item.href);
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`nav-link ${active ? 'is-active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden lg:block">
              <Link to="/contact" className="btn btn-accent">
                Get a Quote
                <ArrowUpRight />
              </Link>
            </div>
            <button
              type="button"
              className="lg:hidden p-2.5 -mr-1 text-navy"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 backdrop-blur-xl pt-[calc(var(--header-h)+0.5rem)] lg:hidden bg-white/98">
          <div className="site-container flex flex-col gap-2 py-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                onClick={() => setOpen(false)}
                className="display text-[2.4rem] leading-none py-2 text-navy"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
