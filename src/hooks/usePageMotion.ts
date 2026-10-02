import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import type { RefObject } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EASE = 'power3.out';
const START = 'top 88%';

/** Shared entrance + scroll reveals for non-home pages. */
export function usePageMotion(root: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) {
        gsap.set(el.querySelectorAll('[data-animate], [data-animate-stagger] > *'), {
          clearProps: 'all',
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const hero = el.querySelector('.page-hero');
      if (hero) {
        const heroBits = hero.querySelectorAll(
          '.page-hero-eyebrow, .page-hero-headline, .page-hero-lead, .page-hero-extra > *',
        );
        gsap.from(heroBits, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          stagger: 0.09,
          ease: EASE,
          delay: 0.08,
        });

        const visual = hero.querySelector('.page-hero-visual');
        if (visual) {
          gsap.from(visual, {
            autoAlpha: 0,
            scale: 1.04,
            duration: 1.15,
            ease: 'power2.out',
            delay: 0.12,
          });
        }
      }

      el.querySelectorAll<HTMLElement>('[data-animate]').forEach((node) => {
        gsap.from(node, {
          autoAlpha: 0,
          y: 40,
          duration: 0.8,
          ease: EASE,
          scrollTrigger: {
            trigger: node,
            start: START,
            toggleActions: 'play none none none',
          },
        });
      });

      el.querySelectorAll<HTMLElement>('[data-animate-stagger]').forEach((node) => {
        const items = node.querySelectorAll(':scope > *');
        if (!items.length) return;
        gsap.from(items, {
          autoAlpha: 0,
          y: 34,
          duration: 0.7,
          stagger: 0.09,
          ease: EASE,
          scrollTrigger: {
            trigger: node,
            start: START,
            toggleActions: 'play none none none',
          },
        });
      });

      // Section heads that aren't covered by card grids
      el.querySelectorAll<HTMLElement>('.prod-section-head, .batt-feature, .prod-cta-panel').forEach(
        (node) => {
          gsap.from(node, {
            autoAlpha: 0,
            y: 36,
            duration: 0.75,
            ease: EASE,
            scrollTrigger: {
              trigger: node,
              start: START,
              toggleActions: 'play none none none',
            },
          });
        },
      );

      const autoGrids = el.querySelectorAll(
        [
          '.panel-card-grid',
          '.inv-card-grid',
          '.about-why-cards',
          '.about-story-detail',
          '.sol-grid',
          '.cab-duo',
          '.pcat-nav-track',
          '.contact-layout',
          '.prot-shell',
        ].join(', '),
      );

      autoGrids.forEach((grid) => {
        const items = grid.querySelectorAll(':scope > *');
        if (!items.length) return;
        gsap.from(items, {
          autoAlpha: 0,
          y: 32,
          duration: 0.7,
          stagger: 0.08,
          ease: EASE,
          scrollTrigger: {
            trigger: grid,
            start: START,
            toggleActions: 'play none none none',
          },
        });
      });
    },
    { scope: root, dependencies: [] },
  );
}
