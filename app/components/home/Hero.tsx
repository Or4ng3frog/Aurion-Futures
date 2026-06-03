'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  Lightbulb,
  PenLine,
  Mic,
  Video,
  Layout,
  Workflow,
  type LucideIcon
} from 'lucide-react';
import { heroMetrics, stackNodes } from '../../lib/home-content';

const EASE: [number, number, number, number] = [0.21, 0.65, 0.27, 1];

const nodeIcons: Record<string, LucideIcon> = {
  idea: Lightbulb,
  script: PenLine,
  voice: Mic,
  video: Video,
  landing: Layout,
  automation: Workflow
};

const accentText: Record<string, string> = {
  gold: 'text-gold',
  iris: 'text-iris',
  glow: 'text-glow'
};
const accentRing: Record<string, string> = {
  gold: 'border-gold/30 bg-gold/10',
  iris: 'border-iris/30 bg-iris/10',
  glow: 'border-glow/30 bg-glow/10'
};

export default function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pb-16 pt-12 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:pb-24 lg:pt-20">
        {/* ── Left column ───────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.span
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Curated · Tested · Independent
          </motion.span>

          <motion.h1
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tight text-slate-50 sm:text-[3.5rem] lg:text-[4rem]"
          >
            The AI stack we
            <br className="hidden sm:block" /> actually use to{' '}
            <span className="text-gradient-gold">build faster.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-6 max-w-xl text-lg leading-8 text-slate-400"
          >
            A curated, tested and independent shortlist of AI tools for creators,
            traders and founders — built to help you go from idea to published asset
            without wasting weeks comparing software.
          </motion.p>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <a
              href="#stack"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-sheen px-7 py-4 text-sm font-semibold text-night shadow-glow-gold transition hover:brightness-110"
            >
              Browse the Stack
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-sm font-semibold text-slate-200 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.06]"
            >
              See the workflow
            </a>
          </motion.div>

          {/* metrics */}
          <motion.dl
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
            className="mt-11 grid max-w-lg grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-7 sm:grid-cols-4"
          >
            {heroMetrics.map((m, i) => (
              <div
                key={m.label}
                className={i % 2 === 1 ? 'border-l border-white/10 pl-5 sm:pl-6' : 'sm:border-l sm:border-white/10 sm:pl-6 sm:first:border-l-0 sm:first:pl-0'}
              >
                <dt className="font-display text-[1.7rem] font-semibold leading-none text-slate-50">{m.value}</dt>
                <dd className="mt-2 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-slate-400">
                  {m.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ── Right column: Command Center ──────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
          className="relative"
        >
          {/* ambient glow behind the command center */}
          <div aria-hidden className="pointer-events-none absolute -inset-6 -z-10">
            <div className="absolute right-4 top-2 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute bottom-0 left-2 h-64 w-64 rounded-full bg-iris/20 blur-3xl" />
          </div>

          {/* floating wrapper */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, ease: 'easeInOut', repeat: Infinity }}
          >
            <CommandCenter />
          </motion.div>

          {/* floating mini-badges — bracket the card to balance the composition */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity }}
            className="absolute -left-5 top-16 hidden rounded-2xl border border-white/10 bg-night-700/85 px-4 py-3 shadow-glass-lift backdrop-blur-md sm:block"
          >
            <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-slate-400">Verdict</p>
            <p className="mt-0.5 text-sm font-semibold text-gold">Honest, not hype</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 6.2, ease: 'easeInOut', repeat: Infinity, delay: 0.6 }}
            className="absolute -right-4 bottom-10 hidden items-center gap-2.5 rounded-2xl border border-white/10 bg-night-700/85 px-4 py-3 shadow-glass-lift backdrop-blur-md sm:flex"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-glow/15 text-glow">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.6rem] font-medium uppercase tracking-[0.14em] text-slate-400">Updated</p>
              <p className="text-sm font-semibold text-slate-100">Every week</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <div className="glass-strong border-glow relative overflow-hidden rounded-3xl p-6 sm:p-7">
      {/* window chrome */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 font-display text-sm font-medium text-slate-200">
            AI Stack · Command Center
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-glow/30 bg-glow/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-glow">
          <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-glow text-glow" />
          Live
        </span>
      </div>

      {/* workflow pipeline */}
      <div className="relative mt-5">
        {/* connecting rail */}
        <div className="absolute bottom-3 left-[1.65rem] top-3 w-px bg-gradient-to-b from-iris/40 via-gold/40 to-glow/40" />
        {/* traveling pulse */}
        <motion.div
          aria-hidden
          className="absolute left-[1.4rem] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(244,183,64,.7)]"
          initial={{ top: 8 }}
          animate={{ top: ['4%', '92%', '4%'] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />

        <ul className="relative space-y-2.5">
          {stackNodes.map((node, i) => {
            const Icon = nodeIcons[node.key];
            return (
              <motion.li
                key={node.key}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3.5"
              >
                <span
                  className={`relative z-10 grid h-[3.3rem] w-[3.3rem] shrink-0 place-items-center rounded-xl border backdrop-blur-md ${accentRing[node.accent]}`}
                >
                  <Icon className={`h-5 w-5 ${accentText[node.accent]}`} />
                </span>
                <div className="flex flex-1 items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5">
                  <div>
                    <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Stage {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="text-sm font-semibold text-slate-100">{node.label}</p>
                  </div>
                  <span className={`text-[0.62rem] font-medium ${accentText[node.accent]}`}>●</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* footer metrics */}
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
        {[
          { v: '7', l: 'Tools' },
          { v: '6', l: 'Stages' },
          { v: '⚡', l: 'Weekly' }
        ].map((m) => (
          <div key={m.l} className="rounded-xl bg-white/[0.02] py-2">
            <p className="font-display text-lg font-semibold text-slate-50">{m.v}</p>
            <p className="text-[0.62rem] uppercase tracking-[0.12em] text-slate-400">{m.l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
