'use client';

import { ArrowUpRight, Clock, Play } from 'lucide-react';
import { journal, socials } from '../../lib/home-content';
import { Reveal, StaggerGroup, StaggerItem } from './motion';

export default function JournalSection() {
  return (
    <section className="relative border-y border-white/[0.06] bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-glow">The Journal</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                New tool breakdowns,{' '}
                <span className="text-gradient-cool">every week.</span>
              </h2>
              <p className="mt-4 max-w-xl leading-8 text-slate-400">
                We test the latest AI tools on camera and publish the honest results —
                what we kept, what we dropped, and the workflow behind it.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {journal.map((item) => (
            <StaggerItem key={item.title}>
              <a
                href="/blog"
                className="glass border-glow group flex h-full flex-col rounded-2xl p-6 transition hover:bg-white/[0.05]"
              >
                {/* thumb */}
                <div className="relative mb-5 grid h-36 place-items-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-night-700 to-night-600">
                  <div className="aurion-grid absolute inset-0 opacity-60" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-slate-100 backdrop-blur-md transition group-hover:scale-110 group-hover:text-gold">
                    <Play className="h-5 w-5 translate-x-0.5 fill-current" />
                  </span>
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-night/70 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-gold backdrop-blur-md">
                    <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-gold text-gold" />
                    Soon
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  <span className="text-iris">{item.tag}</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {item.readTime}
                  </span>
                </div>

                <h3 className="mt-2.5 font-display text-lg font-semibold leading-snug tracking-tight text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-7 text-slate-400">{item.blurb}</p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Read the breakdown
                  <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
