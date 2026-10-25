import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

// ── Theme toggle ────────────────────────────────────────────
document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    try {
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    } catch {}
  });
});

// ── Mobile menu ─────────────────────────────────────────────
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const menu = document.querySelector<HTMLElement>('[data-menu]');
const setMenu = (open: boolean) => {
  if (!menu || !menuBtn) return;
  menu.classList.toggle('hidden', !open);
  menuBtn.setAttribute('aria-expanded', String(open));
};
menuBtn?.addEventListener('click', () => setMenu(menuBtn.getAttribute('aria-expanded') !== 'true'));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

// ── Footer year ─────────────────────────────────────────────
document.querySelectorAll('[data-year]').forEach((el) => (el.textContent = String(new Date().getFullYear())));

if (reduceMotion) {
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => (el.style.opacity = '1'));
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    el.textContent = el.dataset.counter ?? el.textContent;
  });
} else {
  initMotion();
}

function initMotion() {
  // ── Smooth scroll (Lenis driven by GSAP's ticker) ──────────
  const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector<HTMLElement>(id);
      if (!target) return;
      e.preventDefault();
      lenis.scrollTo(target, { offset: -80 });
      history.replaceState(null, '', id);
    });
  });

  // ── Split headings into masked words ──────────────────────
  document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
    const words = (el.textContent ?? '').trim().split(/\s+/);
    el.setAttribute('aria-label', words.join(' '));
    el.innerHTML = words
      .map((w) => `<span class="split-line" style="display:inline-block" aria-hidden="true"><span class="split-inner">${w}</span></span>`)
      .join(' ');
  });

  // ── Hero intro timeline ────────────────────────────────────
  const intro = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 } });
  intro
    .from('[data-header]', { yPercent: -100, opacity: 0, duration: 1 })
    .from('[data-hero-title] .split-inner', { yPercent: 115, stagger: 0.06 }, '-=0.6')
    .fromTo('[data-hero] [data-reveal]', { y: 30, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, '-=0.9')
    .from('[data-hero-orb]', { scale: 0.6, opacity: 0, duration: 2, ease: 'power3.out' }, 0.2);

  // Hero parallax on scroll
  gsap.to('[data-hero-content]', {
    yPercent: 25,
    opacity: 0.2,
    ease: 'none',
    scrollTrigger: { trigger: '[data-hero]', start: 'top top', end: 'bottom top', scrub: true },
  });

  // ── Section headings ──────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-split]:not([data-hero-title])').forEach((el) => {
    gsap.from(el.querySelectorAll('.split-inner'), {
      yPercent: 115,
      duration: 1,
      ease: 'expo.out',
      stagger: 0.05,
      scrollTrigger: { trigger: el, start: 'top 85%' },
    });
  });

  // ── Generic reveals (batched for performance) ─────────────
  const outsideHero = gsap.utils
    .toArray<HTMLElement>('[data-reveal]')
    .filter((el) => !el.closest('[data-hero]'));
  gsap.set(outsideHero, { y: 40 });
  ScrollTrigger.batch(outsideHero, {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', stagger: 0.08, overwrite: true }),
  });

  // ── Counters ──────────────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => {
    const end = Number(el.dataset.counter);
    const obj = { v: 0 };
    gsap.to(obj, {
      v: end,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: () => (el.textContent = String(Math.round(obj.v))),
    });
  });

  // ── Parallax elements ─────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
    const speed = Number(el.dataset.parallax) || 0.2;
    gsap.to(el, {
      yPercent: -100 * speed,
      ease: 'none',
      scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });

  // ── Experience timeline line ──────────────────────────────
  const line = document.querySelector('[data-timeline-line]');
  if (line) {
    gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: { trigger: '[data-timeline]', start: 'top 70%', end: 'bottom 60%', scrub: true },
      },
    );
  }

  // ── Scroll progress bar ───────────────────────────────────
  gsap.to('[data-progress]', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
  });

  // ── Header: hide on scroll down, show on scroll up ────────
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (header) {
    ScrollTrigger.create({
      start: 120,
      end: 'max',
      onUpdate: (self) => {
        gsap.to(header, { yPercent: self.direction === 1 ? -110 : 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' });
      },
      onLeaveBack: () => gsap.to(header, { yPercent: 0, duration: 0.4 }),
    });
  }

  if (finePointer) initPointerEffects();
}

function initPointerEffects() {
  // ── Custom cursor ─────────────────────────────────────────
  const cursor = document.querySelector<HTMLElement>('[data-cursor]');
  if (cursor) {
    cursor.classList.remove('hidden');
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.35, ease: 'power3' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.35, ease: 'power3' });
    window.addEventListener('pointermove', (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
    document.querySelectorAll('a, button, [data-cursor-grow]').forEach((el) => {
      el.addEventListener('pointerenter', () => gsap.to(cursor, { scale: 3, duration: 0.3 }));
      el.addEventListener('pointerleave', () => gsap.to(cursor, { scale: 1, duration: 0.3 }));
    });
  }

  // ── Magnetic buttons ──────────────────────────────────────
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    el.addEventListener('pointermove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.35);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.35);
    });
    el.addEventListener('pointerleave', () => {
      xTo(0);
      yTo(0);
    });
  });

  // ── 3D tilt cards with spotlight ──────────────────────────
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((card) => {
    const rx = gsap.quickTo(card, 'rotationX', { duration: 0.5, ease: 'power3' });
    const ry = gsap.quickTo(card, 'rotationY', { duration: 0.5, ease: 'power3' });
    gsap.set(card, { transformPerspective: 900 });
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      ry((px - 0.5) * 10);
      rx((0.5 - py) * 10);
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
    });
    card.addEventListener('pointerleave', () => {
      rx(0);
      ry(0);
    });
  });
}
