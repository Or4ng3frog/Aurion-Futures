'use client';

import { Target, Activity, Rocket, type LucideIcon } from 'lucide-react';
import { principles } from '../../lib/home-content';
import { Reveal, StaggerGroup, StaggerItem } from './motion';

const icons: Record<string, LucideIcon> = { Target, Activity, Rocket };

export default function HowWePick() {
  return (
    <section id="how-we-pick" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr] md:items-start">
        <Reveal>
          <div className="md:sticky md:top-28">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-gold">How we pick</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight text-slate-50 md:text-5xl">
              Three rules,
              <br />
              <span className="text-gradient-gold">zero exceptions.</span>
            </h2>
            <p className="mt-5 max-w-sm leading-8 text-slate-400">
              We would rather recommend six tools we trust than sixty we do not. This is
              an opinionated stack, not a directory — and that is the whole point.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="grid gap-4">
          {principles.map((p) => {
            const Icon = icons[p.icon];
            return (
              <StaggerItem key={p.kicker}>
                <div className="glass border-glow group flex items-start gap-5 rounded-2xl p-7 transition hover:bg-white/[0.05] md:p-8">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold/25 bg-gold/10 text-gold transition group-hover:shadow-glow-gold">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-display text-sm font-semibold text-gold/70">{p.kicker}</span>
                      <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-50">
                        {p.title}
                      </h3>
                    </div>
                    <p className="mt-2 leading-7 text-slate-400">{p.body}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
