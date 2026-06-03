'use client';

import { motion } from 'framer-motion';
import { Lightbulb, PenLine, Mic, Video, Layout, Workflow, type LucideIcon } from 'lucide-react';
import { tools, logoFor } from '../../lib/tools';
import { workflow } from '../../lib/home-content';
import { Reveal, StaggerGroup, StaggerItem } from './motion';

const EASE: [number, number, number, number] = [0.21, 0.65, 0.27, 1];

const icons: Record<string, LucideIcon> = {
  Lightbulb,
  PenLine,
  Mic,
  Video,
  Layout,
  Workflow
};

export default function WorkflowSection() {
  return (
    <section id="workflow" className="relative scroll-mt-24 border-y border-white/[0.06] bg-white/[0.012]">
      <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-iris">The Workflow</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              From idea to launch —{' '}
              <span className="text-gradient-cool">one stack.</span>
            </h2>
            <p className="mt-4 leading-8 text-slate-400">
              Six stages, one connected pipeline. Each step maps to the exact tools we
              reach for — so you can see how the whole thing fits together before you
              commit to any of it.
            </p>
          </div>
        </Reveal>

        <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step) => {
            const Icon = icons[step.icon];
            const mapped = step.toolSlugs
              .map((s) => tools.find((t) => t.slug === s))
              .filter((t): t is (typeof tools)[number] => Boolean(t));
            return (
              <StaggerItem key={step.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3, ease: EASE }}
                  className="glass border-glow group relative flex h-full flex-col rounded-2xl p-7 transition-colors hover:bg-white/[0.05]"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-iris/30 bg-iris/10 text-iris shadow-[0_0_24px_-6px_rgba(124,139,255,.55)] transition group-hover:bg-iris/15">
                      <Icon className="h-[1.35rem] w-[1.35rem]" />
                    </span>
                    <span className="font-display text-4xl font-bold leading-none text-white/[0.12] transition group-hover:text-iris/35">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-50">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[0.95rem] leading-7 text-slate-300/90">{step.body}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                    <span className="mr-0.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Stack
                    </span>
                    {mapped.map((t) => (
                      <a
                        key={t.slug}
                        href={`/tools/${t.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-200 transition hover:border-iris/40 hover:text-slate-50"
                      >
                        <img src={logoFor(t.domain)} alt="" loading="lazy" className="h-3.5 w-3.5 rounded" />
                        {t.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
