import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import type { RefObject } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText, DrawSVGPlugin);

const STATEMENT_SUN = { x: 302, y: 128 };
const EASE = 'power3.out';
const FLOW_START = 'top 78%';

/** One scroll-triggered timeline per section — plays in, reverses out for continuous flow. */
function flowTimeline(trigger: Element | null) {
  if (!trigger) return null;
  return gsap.timeline({
    defaults: { ease: EASE, immediateRender: false },
    scrollTrigger: {
      trigger,
      start: FLOW_START,
      toggleActions: 'play none none reverse',
    },
  });
}

export function useHomeMotion(root: RefObject<HTMLElement | null>) {
  useGSAP(
    (_context, contextSafe) => {
      const el = root.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      const overlay = el.querySelector<HTMLElement>('.intro-overlay');
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const skipIntro =
        sessionStorage.getItem('star-intro') === '1' ||
        new URLSearchParams(window.location.search).has('skipintro');
      const hero = el.querySelector('.home-hero');
      const statement = el.querySelector('.statement-section');
      const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

      const revealHero = (immediate = false) => {
        const d = immediate ? 0 : 1.05;
        gsap.to(el.querySelectorAll('.hero-line span'), {
          yPercent: 0,
          duration: d,
          stagger: immediate ? 0 : 0.12,
          ease: 'power4.out',
        });
        gsap.to(el.querySelectorAll('[data-hero-el]'), {
          autoAlpha: 1,
          y: 0,
          duration: immediate ? 0 : 0.8,
          stagger: immediate ? 0 : 0.08,
          delay: immediate ? 0 : 0.35,
          ease: EASE,
        });
      };

      // ── Reduced motion ────────────────────────────────────────────────────
      if (reduce) {
        gsap.set(el.querySelectorAll('.hero-line span, [data-hero-el], .intro-overlay'), {
          clearProps: 'all',
          autoAlpha: 1,
          y: 0,
          yPercent: 0,
        });
        gsap.set(el.querySelectorAll('[data-statement-photon]'), { drawSVG: '100%', opacity: 0.55 });
        if (overlay) gsap.set(overlay, { display: 'none' });

        el.querySelectorAll<HTMLElement>('[data-count]').forEach((node) => {
          node.textContent = node.dataset.count || node.textContent;
        });

        el.querySelectorAll<HTMLElement>('[data-chapter]').forEach((dot) => {
          const target = el.querySelector(dot.dataset.chapter || '');
          if (!target) return;
          ScrollTrigger.create({
            trigger: target,
            start: 'top 45%',
            end: 'bottom 45%',
            onToggle: (self) => {
              if (self.isActive) {
                el.querySelectorAll('[data-chapter]').forEach((n) => n.classList.remove('is-on'));
                dot.classList.add('is-on');
              }
            },
          });
        });

        return () => {
          document.body.style.overflow = '';
          mm.revert();
        };
      }

      // ── Hero intro ────────────────────────────────────────────────────────
      gsap.set(el.querySelectorAll('.hero-line span'), { yPercent: 110 });
      gsap.set(el.querySelectorAll('[data-hero-el]'), { autoAlpha: 0, y: 28 });

      if (overlay && !skipIntro) {
        document.body.style.overflow = 'hidden';
        const intro = gsap.timeline({
          defaults: { ease: EASE },
          onComplete: () => {
            sessionStorage.setItem('star-intro', '1');
            document.body.style.overflow = '';
            gsap.set(overlay, { display: 'none' });
          },
        });
        intro
          .fromTo(
            overlay.querySelector('.intro-kicker'),
            { autoAlpha: 0, y: 18 },
            { autoAlpha: 1, y: 0, duration: 0.5 },
          )
          .fromTo(
            overlay.querySelectorAll('.intro-line span'),
            { y: 70, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 0.85, stagger: 0.1, ease: 'power4.out' },
            '-=0.15',
          )
          .fromTo(
            overlay.querySelector('.intro-sub'),
            { autoAlpha: 0, y: 10 },
            { autoAlpha: 1, y: 0, duration: 0.45 },
            '-=0.35',
          )
          .to(overlay, { yPercent: -110, duration: 1.05, ease: 'power4.inOut', delay: 0.55 })
          .add(() => revealHero(), '-=0.55');
      } else {
        if (overlay) gsap.set(overlay, { display: 'none' });
        revealHero(false);
      }

      const heroPanel = el.querySelector<HTMLElement>('.hero-panel');
      const heroFloat = el.querySelector<HTMLElement>('.hero-panel-float');
      const heroFloats = el.querySelectorAll('[data-hero-float]');

      if (heroPanel) {
        gsap.fromTo(
          heroPanel,
          { autoAlpha: 0, y: 28, rotateX: 8, rotateY: -14, scale: 0.94 },
          {
            autoAlpha: 1,
            y: 0,
            rotateX: 2,
            rotateY: -6,
            scale: 1,
            duration: 1.15,
            delay: skipIntro ? 0.08 : 0.18,
            ease: EASE,
            overwrite: true,
          },
        );
      }

      if (heroFloats.length) {
        gsap.fromTo(
          heroFloats,
          { autoAlpha: 0, y: 22 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: 0.12,
            delay: skipIntro ? 0.15 : 0.45,
            ease: EASE,
          },
        );
      }

      gsap.fromTo(
        el.querySelector('.home-hero-visual img'),
        { scale: 1.05, autoAlpha: 0.88 },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 1.5,
          delay: skipIntro ? 0 : 0.1,
          ease: 'power2.out',
        },
      );

      if (heroFloat) {
        gsap.to(heroFloat, {
          y: -8,
          duration: 3.8,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
        });
      }

      if (heroFloats.length) {
        gsap.to(heroFloats, {
          y: -6,
          duration: 3.5,
          yoyo: true,
          repeat: -1,
          stagger: 0.35,
          ease: 'sine.inOut',
        });
      }

      gsap.to(el.querySelector('.home-hero-visual img'), {
        scale: 1.07,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      let onMove: ((event: Event) => void) | undefined;
      if (hero && heroPanel && window.matchMedia('(pointer: fine)').matches) {
        const rx = gsap.quickTo(heroPanel, 'rotateX', { duration: 0.7, ease: EASE });
        const ry = gsap.quickTo(heroPanel, 'rotateY', { duration: 0.7, ease: EASE });
        onMove = contextSafe((event: Event) => {
          const e = event as MouseEvent;
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          rx(2 - ny * 5);
          ry(-6 + nx * 8);
        });
        hero.addEventListener('mousemove', onMove);
      }

      gsap.to(el.querySelector('.scroll-progress'), {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.35,
        },
      });

      // ── 02 · Brand statement ──────────────────────────────────────────────
      if (statement) {
        const headline = statement.querySelector('[data-statement-headline]');
        const kicker = statement.querySelector('[data-statement-kicker]');
        const statementTl = flowTimeline(statement);

        if (statementTl) {
          statementTl
            .from('[data-statement-eyebrow]', { autoAlpha: 0, y: 20, duration: 0.55 }, 0)
            .from('[data-statement-rule]', { scaleX: 0, duration: 0.8, ease: 'power3.inOut' }, 0.08)
            .from('[data-statement-copy]', { autoAlpha: 0, y: 22, duration: 0.7 }, 0.55)
            .from('[data-statement-stage]', { x: 40, autoAlpha: 0, duration: 0.95, clearProps: 'transform' }, 0.1)
            .from('[data-statement-accent]', { scaleY: 0, duration: 0.9, ease: 'power3.inOut' }, 0.28)
            .from('[data-statement-zero]', { autoAlpha: 0, scale: 0.86, duration: 0.7 }, 0.42)
            .from('[data-statement-caption]', { autoAlpha: 0, y: 12, duration: 0.5 }, 0.7);
        }

        if (headline) {
          mm.add('(min-width: 1024px)', () => {
            SplitText.create(headline, {
              type: 'lines',
              mask: 'lines',
              aria: 'auto',
              autoSplit: true,
              onSplit(self) {
                return gsap.from(self.lines, {
                  yPercent: 108,
                  duration: 0.95,
                  stagger: 0.1,
                  ease: EASE,
                  immediateRender: false,
                  scrollTrigger: {
                    trigger: statement,
                    start: FLOW_START,
                    toggleActions: 'play none none reverse',
                  },
                });
              },
            });
          });

          mm.add('(max-width: 1023px)', () => {
            gsap.from(headline.querySelectorAll('.stmt-word'), {
              yPercent: 70,
              autoAlpha: 0,
              stagger: 0.08,
              duration: 0.85,
              ease: EASE,
              immediateRender: false,
              scrollTrigger: {
                trigger: statement,
                start: FLOW_START,
                toggleActions: 'play none none reverse',
              },
            });
          });
        }

        if (kicker) {
          SplitText.create(kicker, {
            type: 'words',
            aria: 'auto',
            onSplit(self) {
              return gsap.from(self.words, {
                autoAlpha: 0,
                y: 18,
                stagger: 0.06,
                duration: 0.65,
                ease: EASE,
                delay: 0.3,
                immediateRender: false,
                scrollTrigger: {
                  trigger: statement,
                  start: FLOW_START,
                  toggleActions: 'play none none reverse',
                },
              });
            },
          });
        }

        gsap.fromTo(
          statement.querySelector('.statement-watermark'),
          { xPercent: 8, autoAlpha: 0.35 },
          {
            xPercent: -6,
            autoAlpha: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: statement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );

        gsap.to('[data-statement-rays]', {
          rotation: 360,
          duration: 32,
          ease: 'none',
          repeat: -1,
          svgOrigin: `${STATEMENT_SUN.x} ${STATEMENT_SUN.y}`,
        });

        gsap.to('[data-statement-sun]', {
          scale: 1.08,
          svgOrigin: `${STATEMENT_SUN.x} ${STATEMENT_SUN.y}`,
          duration: 2.4,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });

        gsap.to('[data-statement-cone]', {
          opacity: 0.22,
          duration: 1.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });

        gsap.fromTo(
          '[data-statement-photon]',
          { drawSVG: '0%', opacity: 0.9 },
          {
            drawSVG: '100%',
            opacity: 0,
            duration: 1.7,
            stagger: { each: 0.35, repeat: -1 },
            ease: 'power1.in',
          },
        );

        gsap.to('[data-statement-panel]', {
          fill: '#fce6b1',
          duration: 1.6,
          stagger: 0.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }

      // ── 03 · Solutions ────────────────────────────────────────────────────
      {
        const section = el.querySelector('.audience-stage');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from(section.querySelectorAll('[data-flow-intro] > *'), {
            autoAlpha: 0,
            y: 28,
            stagger: 0.1,
            duration: 0.75,
          }, 0).from(
            section.querySelectorAll('[data-flow-item]'),
            {
              autoAlpha: 0,
              y: 48,
              stagger: 0.14,
              duration: 0.85,
            },
            0.28,
          );
        }

        if (isDesktop) {
          el.querySelectorAll<HTMLElement>('.audience-card').forEach((card, index) => {
            const mediaImg = card.querySelector('.audience-card-media img');
            if (!mediaImg) return;
            gsap.to(mediaImg, {
              yPercent: index % 2 === 0 ? 6 : -5,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.9,
              },
            });
          });
        }
      }

      // ── 04 · Why + stats ──────────────────────────────────────────────────
      {
        const section = el.querySelector('.why-stage');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from(section.querySelector('[data-flow-intro]'), {
            autoAlpha: 0,
            x: isDesktop ? -36 : 0,
            y: isDesktop ? 0 : 28,
            duration: 0.85,
            clearProps: 'transform',
          }, 0)
            .from(section.querySelector('[data-flow-rule]'), {
              scaleX: 0,
              duration: 0.7,
              ease: 'power3.inOut',
              transformOrigin: 'left center',
            }, 0.35)
            .from(
              section.querySelectorAll('.why-grid [data-flow-item]'),
              {
                autoAlpha: 0,
                y: 36,
                stagger: 0.1,
                duration: 0.75,
              },
              0.2,
            )
            .from(
              section.querySelectorAll('[data-flow-stats] [data-flow-item]'),
              {
                autoAlpha: 0,
                y: 32,
                stagger: 0.1,
                duration: 0.7,
              },
              0.45,
            );
        }

        el.querySelectorAll<HTMLElement>('[data-count]').forEach((node) => {
          const end = Number(node.dataset.count);
          node.textContent = '0';
          const obj = { n: 0 };
          gsap.to(obj, {
            n: end,
            duration: 1.5,
            ease: 'power2.out',
            snap: { n: 1 },
            scrollTrigger: {
              trigger: node,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            onUpdate: () => {
              node.textContent = String(Math.round(obj.n));
            },
            onReverseComplete: () => {
              obj.n = 0;
              node.textContent = '0';
            },
          });
        });
      }

      // ── 05 · Journey ──────────────────────────────────────────────────────
      {
        const section = el.querySelector('.journey-stage');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from(section.querySelectorAll('[data-flow-intro] > *'), {
            autoAlpha: 0,
            y: 28,
            stagger: 0.1,
            duration: 0.75,
          }, 0)
            .fromTo(
              section.querySelector('.journey-line'),
              { scaleX: 0 },
              { scaleX: 1, duration: 1.1, ease: 'power2.inOut', transformOrigin: 'left center' },
              0.25,
            )
            .from(
              section.querySelectorAll('[data-flow-item]'),
              {
                autoAlpha: 0,
                y: 36,
                stagger: 0.12,
                duration: 0.7,
              },
              0.4,
            );
        }
      }

      // ── 06 · Products ─────────────────────────────────────────────────────
      {
        const section = el.querySelector('.products-stage');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from(section.querySelectorAll('[data-flow-intro]'), {
            autoAlpha: 0,
            y: 24,
            stagger: 0.09,
            duration: 0.7,
          }, 0).from(
            section.querySelectorAll('[data-flow-item]'),
            {
              autoAlpha: 0,
              y: 44,
              stagger: 0.12,
              duration: 0.8,
            },
            0.3,
          );
        }
      }

      // ── 07 · Scheme band ──────────────────────────────────────────────────
      {
        const section = el.querySelector('.scheme-band');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from('[data-scheme-copy] > *', {
            autoAlpha: 0,
            y: 28,
            stagger: 0.1,
            duration: 0.75,
          }, 0)
            .from(
              '[data-scheme-visual]',
              { autoAlpha: 0, x: isDesktop ? 40 : 0, y: isDesktop ? 0 : 28, scale: 0.96, duration: 1, clearProps: 'transform' },
              0.15,
            )
            .from('.scheme-band-halo', { scale: 0.7, autoAlpha: 0, duration: 1.1, ease: 'power2.out' }, 0.25);
        }

        gsap.to('.scheme-band-halo', {
          scale: 1.06,
          duration: 3.2,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }

      // ── 08 · Final CTA ────────────────────────────────────────────────────
      {
        const section = el.querySelector('.final-cta-section');
        const tl = flowTimeline(section);
        if (tl && section) {
          tl.from(section.querySelector('.final-cta-panel'), {
            autoAlpha: 0,
            y: 48,
            scale: 0.97,
            duration: 0.95,
          }, 0);
        }
      }

      // ── Chapter dots follow active section ────────────────────────────────
      el.querySelectorAll<HTMLElement>('[data-chapter]').forEach((dot) => {
        const target = el.querySelector(dot.dataset.chapter || '');
        if (!target) return;
        ScrollTrigger.create({
          trigger: target,
          start: 'top 45%',
          end: 'bottom 45%',
          onToggle: (self) => {
            if (self.isActive) {
              el.querySelectorAll('[data-chapter]').forEach((n) => n.classList.remove('is-on'));
              dot.classList.add('is-on');
            }
          },
        });
      });

      const images = el.querySelectorAll('img');
      let pending = images.length;
      const refresh = () => ScrollTrigger.refresh();
      if (!pending) refresh();
      images.forEach((img) => {
        if (img.complete) {
          pending -= 1;
          if (!pending) refresh();
        } else {
          img.addEventListener(
            'load',
            () => {
              pending -= 1;
              if (!pending) refresh();
            },
            { once: true },
          );
        }
      });

      return () => {
        if (onMove && hero) hero.removeEventListener('mousemove', onMove);
        document.body.style.overflow = '';
        mm.revert();
      };
    },
    { scope: root },
  );
}
