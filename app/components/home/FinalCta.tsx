'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import { Reveal } from './motion';

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <div className="glass-strong border-glow relative overflow-hidden rounded-3xl px-6 py-14 text-center shadow-glass-lift sm:px-10 md:py-20">
          {/* internal glow */}
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-64 w-[40rem] -translate-x-1/2 rounded-full bg-gold/15 blur-3xl" />
            <div className="aurion-grid absolute inset-0 opacity-40" />
          </div>

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Curated with intent
            </span>

            <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-slate-50 md:text-6xl">
              Build your AI stack with{' '}
              <span className="text-gradient-gold">less noise.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-400">
              Skip the endless comparison tabs. Start from a shortlist that has already
              been tested, debated and shipped with.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#stack"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-sheen px-7 py-4 text-sm font-semibold text-night shadow-glow-gold transition hover:brightness-110"
              >
                Browse the Stack
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="/blog"
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.06]"
              >
                Follow the Journal
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
