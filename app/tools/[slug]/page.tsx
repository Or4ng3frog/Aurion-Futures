import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Shell from '../../components/Shell';
import { tools, getTool, logoFor, affiliateLink } from '../../lib/tools';

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getTool(params.slug);
  if (!tool) return { title: 'Tool not found' };
  const title = `${tool.name} Review (${tool.rating.toFixed(1)}/5)`;
  const url = `/tools/${tool.slug}`;
  const ogImage = `/og/tools/${tool.slug}.png`;
  return {
    title,
    description: tool.verdict,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: `${tool.name} Review — Aurion Future`,
      description: tool.verdict,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${tool.name} review` }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tool.name} Review — Aurion Future`,
      description: tool.verdict,
      images: [ogImage]
    }
  };
}

function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Star({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="m12 2.5 2.9 6.3 6.9.7-5.1 4.7 1.5 6.8L12 17.5l-6.2 3.5 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z"
        fill="currentColor" />
    </svg>
  );
}
function Check() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-glow">
      <path d="m5 13 4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Minus() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-slate-500">
      <path d="M6 12h12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? 'opacity-100' : 'opacity-25'}`} />
      ))}
    </span>
  );
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug);
  if (!tool) notFound();

  const related = tools.filter((t) => t.slug !== tool.slug).slice(0, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'SoftwareApplication',
      name: tool.name,
      applicationCategory: 'BusinessApplication',
      url: tool.url
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1
    },
    author: { '@type': 'Person', name: 'Dennis Klahn' },
    publisher: { '@type': 'Organization', name: 'Aurion Future' },
    reviewBody: tool.verdict
  };

  return (
    <Shell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* breadcrumb */}
        <nav className="pt-10 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          <a href="/" className="transition hover:text-gold">Home</a>
          <span className="px-2">/</span>
          <a href="/#stack" className="transition hover:text-gold">The Stack</a>
          <span className="px-2">/</span>
          <span className="text-slate-300">{tool.name}</span>
        </nav>

        {/* hero */}
        <section className="grid gap-8 border-b border-white/10 py-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <img src={logoFor(tool.domain)} alt={`${tool.name} logo`} className="h-9 w-9 rounded" />
              </div>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-gold">
                  {tool.category} &middot; Reviewed
                </p>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
                  {tool.name}
                </h1>
              </div>
            </div>
            <p className="mt-5 max-w-xl font-display text-xl italic leading-relaxed text-slate-300">
              {tool.tagline}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <StarRow rating={tool.rating} />
                <span className="font-bold text-slate-50">{tool.rating.toFixed(1)}</span>
                <span className="text-slate-500">/ 5</span>
              </span>
              <span className="text-slate-600">&middot;</span>
              <span className="font-semibold text-slate-300">{tool.pricingFrom}</span>
              <span className="text-slate-600">&middot;</span>
              <span className="text-slate-500">{tool.domain}</span>
            </div>
          </div>

          {/* CTA card */}
          <aside className="glass border-glow rounded-2xl p-6 md:w-64">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-slate-400">Try it</p>
            <p className="mt-1 font-display text-lg text-slate-50">{tool.name}</p>
            <a href={affiliateLink(tool)} target="_blank" rel="sponsored noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-sheen px-5 py-3 text-sm font-semibold text-night shadow-glow-gold transition hover:brightness-110">
              Visit {tool.name}
              <Arrow className="h-4 w-4" />
            </a>
            <p className="mt-3 text-[0.68rem] leading-relaxed text-slate-500">
              Affiliate link &mdash; we may earn a commission at no cost to you.
            </p>
          </aside>
        </section>

        {/* verdict */}
        <section className="py-10">
          <div className="glass border-glow rounded-2xl p-7 md:p-9">
            <p className="eyebrow text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold">Our verdict</p>
            <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-slate-50 md:text-[1.7rem]">
              {tool.verdict}
            </p>
          </div>
        </section>

        {/* three signals */}
        <section className="grid gap-5 pb-10 md:grid-cols-3">
          {[
            { label: 'Best for', body: tool.bestFor, accent: false },
            { label: 'Why we use it', body: tool.whyWeUse, accent: true },
            { label: 'Watch out', body: tool.watchOut, accent: false }
          ].map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <p className={`text-[0.66rem] font-bold uppercase tracking-[0.16em] ${s.accent ? 'text-gold' : 'text-slate-500'}`}>
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{s.body}</p>
            </div>
          ))}
        </section>

        {/* pros & cons */}
        <section className="grid gap-6 border-t border-white/10 py-10 md:grid-cols-2">
          <div className="glass rounded-2xl p-7">
            <h2 className="font-display text-xl font-semibold text-slate-50">What we like</h2>
            <ul className="mt-4 space-y-3">
              {tool.pros.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-6 text-slate-300"><Check />{p}</li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-7">
            <h2 className="font-display text-xl font-semibold text-slate-50">What to consider</h2>
            <ul className="mt-4 space-y-3">
              {tool.cons.map((c) => (
                <li key={c} className="flex gap-3 text-[0.95rem] leading-6 text-slate-300"><Minus />{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* full review */}
        <section className="border-t border-white/10 py-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-50">The full review</h2>
          <div className="mt-5 max-w-2xl space-y-5">
            {tool.review.map((para, i) => (
              <p key={i} className="text-[1.05rem] leading-8 text-slate-300">{para}</p>
            ))}
          </div>
        </section>

        {/* use cases */}
        <section className="border-t border-white/10 py-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50">Great for</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tool.useCases.map((u) => (
              <div key={u} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />{u}
              </div>
            ))}
          </div>
        </section>

        {/* bottom CTA */}
        <section className="border-t border-white/10 py-12">
          <div className="glass-strong border-glow relative flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl p-8 sm:flex-row sm:items-center">
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/15 blur-3xl" />
            <div className="relative">
              <p className="font-display text-2xl font-semibold tracking-tight text-slate-50">Ready to try {tool.name}?</p>
              <p className="mt-1 text-slate-400">{tool.pricingFrom} &middot; See if it fits your workflow.</p>
            </div>
            <a href={affiliateLink(tool)} target="_blank" rel="sponsored noopener noreferrer"
              className="relative inline-flex shrink-0 items-center gap-2 rounded-full bg-gold-sheen px-6 py-3.5 text-sm font-semibold text-night shadow-glow-gold transition hover:brightness-110">
              Visit {tool.name} <Arrow className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* related */}
        <section className="border-t border-white/10 py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-50">More from the stack</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <a key={r.slug} href={`/tools/${r.slug}`}
                className="glass border-glow group flex h-full flex-col rounded-2xl p-5 transition hover:-translate-y-1 hover:bg-white/[0.05]">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04]">
                    <img src={logoFor(r.domain)} alt="" className="h-6 w-6 rounded" />
                  </div>
                  <span className="font-display text-lg font-semibold text-slate-50">{r.name}</span>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{r.blurb}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                  Read review <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </Shell>
  );
}
