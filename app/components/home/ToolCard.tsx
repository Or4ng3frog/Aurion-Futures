'use client';

import { motion } from 'framer-motion';
import { Star, ArrowUpRight, Target, Zap, Eye } from 'lucide-react';
import { logoFor, affiliateLink, type Tool } from '../../lib/tools';

export default function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.21, 0.65, 0.27, 1] } }
      }}
      whileHover={{ y: -6 }}
      className="glass border-glow group relative flex flex-col rounded-2xl p-6 shadow-glass transition-shadow duration-300 hover:shadow-glass-lift"
    >
      {tool.tag && (
        <span className="absolute right-5 top-5 rounded-full border border-gold/30 bg-gold/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-wider text-gold">
          {tool.tag}
        </span>
      )}

      {/* header */}
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.04]">
          <img src={logoFor(tool.domain)} alt={`${tool.name} logo`} loading="lazy" className="h-7 w-7 rounded" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold tracking-tight text-slate-50">{tool.name}</h3>
          <p className="truncate text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-slate-400">
            {tool.category} · {tool.domain}
          </p>
        </div>
      </div>

      {/* rating + price */}
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center gap-1.5">
          <Star className="h-4 w-4 fill-gold text-gold" />
          <span className="text-sm font-bold text-slate-50">{tool.rating.toFixed(1)}</span>
          <span className="text-xs text-slate-400">/ 5</span>
        </span>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs font-semibold text-slate-200">
          {tool.pricingFrom}
        </span>
      </div>

      <p className="mt-4 text-[0.95rem] leading-7 text-slate-400">{tool.blurb}</p>

      {/* honest signals */}
      <dl className="mt-5 space-y-3 border-t border-white/10 pt-5 text-sm">
        <Signal icon={<Target className="h-3.5 w-3.5" />} label="Best for" tone="muted" value={tool.bestFor} />
        <Signal icon={<Zap className="h-3.5 w-3.5" />} label="Why we use it" tone="gold" value={tool.whyWeUse} />
        <Signal icon={<Eye className="h-3.5 w-3.5" />} label="Watch out" tone="muted" value={tool.watchOut} />
      </dl>

      {/* actions */}
      <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
        <a
          href={`/tools/${tool.slug}`}
          className="flex-1 rounded-full border border-white/12 bg-white/[0.03] px-4 py-2.5 text-center text-sm font-semibold text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06]"
        >
          Read review
        </a>
        <a
          href={affiliateLink(tool)}
          target="_blank"
          rel="sponsored noopener noreferrer"
          aria-label={`Visit ${tool.name}`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-sheen text-night shadow-glow-gold transition hover:brightness-110"
        >
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  );
}

function Signal({
  icon,
  label,
  value,
  tone
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: 'gold' | 'muted';
}) {
  return (
    <div>
      <dt
        className={`flex items-center gap-1.5 text-[0.64rem] font-bold uppercase tracking-[0.14em] ${
          tone === 'gold' ? 'text-gold' : 'text-slate-500'
        }`}
      >
        {icon}
        {label}
      </dt>
      <dd className="mt-1 leading-6 text-slate-300">{value}</dd>
    </div>
  );
}
