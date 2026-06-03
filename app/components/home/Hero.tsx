'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  BadgeCheck,
  CalendarClock,
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
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-14 lg:px-8 lg:pb-24 lg:pt-16">
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
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative">
            {/* ambient glow behind the card — purely decorative, sits behind & clipped */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute right-0 top-2 h-56 w-56 rounded-full bg-gold/20 blur-3xl" />
              <div className="absolute bottom-2 left-0 h-48 w-48 rounded-full bg-iris/20 blur-3xl" />
            </div>

            {/* one self-contained dashboard card, with a gentle, contained drift */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 8, ease: 'easeInOut', repeat: Infinity }}
            >
              <CommandCenter />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <div className="glass-strong border-glow relative overflow-hidden rounded-3xl p-5 sm:p-6">
      {/* ── window chrome: dots · title · Live ── */}
      <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-3 w-3 shrink-0 rounded-full bg-[#FF5F57]" />
          <span className="h-3 w-3 shrink-0 rounded-full bg-[#FEBC2E]" />
          <span className="h-3 w-3 shrink-0 rounded-full bg-[#28C840]" />
          <span className="ml-2 truncate font-display text-sm font-medium text-slate-200">
            AI Stack · Command Center
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-glow/30 bg-glow/10 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-glow">
          <span className="status-dot inline-block h-1.5 w-1.5 rounded-full bg-glow text-glow" />
          Live
        </span>
      </div>

      {/* ── verdict status row — a normal dashboard row, never floats ── */}
      <div className="mt-4 flex items-center gap-3 rounded-xl border border-gold/20 bg-gold/[0.06] px-3.5 py-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
          <BadgeCheck className="h-4 w-4" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-slate-400">Verdict</p>
          <p className="truncate text-sm font-semibold text-gold">Honest, not hype</p>
        </div>
        <span className="status-dot inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold text-gold" />
      </div>

      {/* ── workflow pipeline — aligned icon timeline, even row heights ── */}
      <div className="relative mt-4">
        {/* connecting rail (centred on the 2.75rem icons) */}
        <div className="absolute bottom-5 left-[1.375rem] top-5 w-px bg-gradient-to-b from-iris/40 via-gold/40 to-glow/40" />
        {/* traveling pulse */}
        <motion.div
          aria-hidden
          className="absolute left-[1.07rem] h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_3px_rgba(244,183,64,.7)]"
          animate={{ top: ['6%', '90%', '6%'] }}
          transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
        />

        <ul className="relative space-y-2">
          {stackNodes.map((node, i) => {
            const Icon = nodeIcons[node.key];
            return (
              <motion.li
                key={node.key}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE, delay: 0.5 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <span
                  className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-xl border backdrop-blur-md ${accentRing[node.accent]}`}
                >
                  <Icon className={`h-[1.15rem] w-[1.15rem] ${accentText[node.accent]}`} />
                </span>
                <div className="flex h-11 flex-1 items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-3.5">
                  <div className="min-w-0">
                    <p className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-slate-400">
                      Stage {String(i + 1).padStart(2, '0')}
                    </p>
                    <p className="truncate text-sm font-semibold leading-tight text-slate-100">{node.label}</p>
                  </div>
                  <span className={`ml-2 text-[0.62rem] font-medium ${accentText[node.accent]}`}>●</span>
                </div>
              </motion.li>
            );
          })}
        </ul>
      </div>

      {/* ── bottom metrics — clean 3-column grid (Updated lives here now) ── */}
      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
        <Metric value="7" label="Tools" />
        <Metric value="6" label="Stages" />
        <Metric value="Weekly" label="Updated" icon={<CalendarClock className="h-3.5 w-3.5 text-glow" />} />
      </div>
    </div>
  );
}

function Metric({
  value,
  label,
  icon
}: {
  value: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-2 py-2.5 text-center">
      <p className="flex items-center gap-1 font-display text-base font-semibold leading-none text-slate-50">
        {icon}
        {value}
      </p>
      <p className="mt-1.5 text-[0.6rem] uppercase tracking-[0.12em] text-slate-400">{label}</p>
    </div>
  );
}
