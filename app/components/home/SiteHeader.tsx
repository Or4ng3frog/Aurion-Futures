'use client';

import { useEffect, useState } from 'react';
import { ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';
import { nav } from '../../lib/home-content';
import Logo from '../Logo';

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={[
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled
          ? 'border-b border-white/10 bg-night/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      ].join(' ')}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/" className="flex items-center" aria-label="Aurion Future home">
          <Logo markClass="h-9 w-9" wordClass="text-xl" />
        </a>

        <nav className="hidden items-center gap-9 text-sm md:flex">
          {nav.map((l) => (
            <a key={l.label} className="nav-link-dark" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/affiliate-disclosure"
            className="hidden items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[0.7rem] font-medium text-slate-400 transition hover:border-white/20 hover:text-slate-200 lg:inline-flex"
          >
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            Affiliate-disclosed
          </a>

          <a
            href="/#stack"
            className="group hidden items-center gap-2 rounded-full bg-gold-sheen px-5 py-2.5 text-sm font-semibold text-night shadow-glow-gold transition hover:brightness-110 sm:inline-flex"
          >
            Browse the Stack
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-slate-200 md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-night/95 backdrop-blur-xl md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {nav.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.04]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/#stack"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gold-sheen px-5 py-3 text-sm font-semibold text-night"
            >
              Browse the Stack
              <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
