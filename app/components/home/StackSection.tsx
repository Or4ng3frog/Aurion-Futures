'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { tools, type Category } from '../../lib/tools';
import ToolCard from './ToolCard';
import { Reveal } from './motion';

const categories: ('All' | Category)[] = [
  'All', 'Video', 'Voice', 'Content', 'Copywriting', 'Ads', 'Website', 'Automation'
];

export default function StackSection() {
  const [active, setActive] = useState<'All' | Category>('All');
  const shown = active === 'All' ? tools : tools.filter((t) => t.category === active);

  return (
    <section id="stack" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 lg:px-8 lg:py-28">
      <Reveal>
        <div className="flex flex-col gap-7 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-gold">The Stack</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
              The shortlist
            </h2>
            <p className="mt-3 leading-7 text-slate-400">
              Each pick ships with an honest verdict — what it is great at, who it is for,
              and where it falls short. No filler, no pay-to-rank.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? 'rounded-full bg-gold-sheen px-4 py-2 text-sm font-semibold text-night shadow-glow-gold transition'
                      : 'rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-white/25 hover:text-slate-50'
                  }
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
      </Reveal>

      <motion.div
        key={active}
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
        className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {shown.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </motion.div>
    </section>
  );
}
