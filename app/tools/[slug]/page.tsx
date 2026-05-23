import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
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
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-forest">
      <path d="m5 13 4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.2"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Minus() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-amber">
      <path d="M6 12h12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber">
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
    <main className="relative min-h-screen bg-paper text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* header */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="/" className="font-display text-xl font-semibold tracking-tightest text-ink">
            Aurion<span className="text-amber"> Future</span>
          </a>
          <a href="/#tools" className="inline-flex items-center gap-2 text-sm font-semibold text-ink2 transition hover:text-amber">
            <span aria-hidden="true">&larr;</span> All tools
          </a>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* breadcrumb */}
        <nav className="pt-8 text-xs font-semibold uppercase tracking-[0.18em] text-ink3">
          <a href="/" className="hover:text-amber">Home</a>
          <span className="px-2">/</span>
          <a href="/#tools" className="hover:text-amber">The Stack</a>
          <span className="px-2">/</span>
          <span className="text-ink2">{tool.name}</span>
        </nav>

        {/* hero */}
        <section className="grid gap-8 border-b border-line py-10 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-4">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-line bg-cream">
                <img src={logoFor(tool.domain)} alt={`${tool.name} logo`} className="h-9 w-9 rounded" />
              </div>
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em] text-amber">
                  {tool.category} &middot; Reviewed
                </p>
                <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                  {tool.name}
                </h1>
              </div>
            </div>
            <p className="mt-5 max-w-xl font-display text-xl italic leading-relaxed text-ink2">
              {tool.tagline}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
              <span className="inline-flex items-center gap-2">
                <StarRow rating={tool.rating} />
                <span className="font-bold text-ink">{tool.rating.toFixed(1)}</span>
                <span className="text-ink3">/ 5</span>
              </span>
              <span className="text-ink3">&middot;</span>
              <span className="font-semibold text-ink2">{tool.pricingFrom}</span>
              <span className="text-ink3">&middot;</span>
              <span className="text-ink3">{tool.domain}</span>
            </div>
          </div>

          {/* CTA card */}
          <aside className="rounded-2xl border border-line bg-cream p-6 shadow-soft md:w-64">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-ink3">Try it</p>
            <p className="mt-1 font-display text-lg text-ink">{tool.name}</p>
            <a href={affiliateLink(tool)} target="_blank" rel="sponsored noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-sm font-semibold text-paper transition hover:bg-amberSoft">
              Visit {tool.name}
              <Arrow className="h-4 w-4" />
            </a>
            <p className="mt-3 text-[0.68rem] leading-relaxed text-ink3">
              Affiliate link &mdash; we may earn a commission at no cost to you.
            </p>
          </aside>
        </section>

        {/* verdict */}
        <section className="py-10">
          <div className="rounded-2xl border border-line bg-cream p-7 shadow-soft md:p-9">
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-amber">Our verdict</p>
            <p className="mt-3 font-display text-2xl leading-snug tracking-tight text-ink md:text-[1.7rem]">
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
            <div key={s.label} className="rounded-xl border border-line bg-paper p-5">
              <p className={`text-[0.66rem] font-bold uppercase tracking-[0.16em] ${s.accent ? 'text-amber' : 'text-ink3'}`}>
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink2">{s.body}</p>
            </div>
          ))}
        </section>

        {/* pros & cons */}
        <section className="grid gap-6 border-t border-line py-10 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-cream p-7">
            <h2 className="font-display text-xl font-semibold text-ink">What we like</h2>
            <ul className="mt-4 space-y-3">
              {tool.pros.map((p) => (
                <li key={p} className="flex gap-3 text-[0.95rem] leading-6 text-ink2"><Check />{p}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-cream p-7">
            <h2 className="font-display text-xl font-semibold text-ink">What to consider</h2>
            <ul className="mt-4 space-y-3">
              {tool.cons.map((c) => (
                <li key={c} className="flex gap-3 text-[0.95rem] leading-6 text-ink2"><Minus />{c}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* full review */}
        <section className="border-t border-line py-10">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink">The full review</h2>
          <div className="mt-5 max-w-2xl space-y-5">
            {tool.review.map((para, i) => (
              <p key={i} className="text-[1.05rem] leading-8 text-ink2">{para}</p>
            ))}
          </div>
        </section>

        {/* use cases */}
        <section className="border-t border-line py-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Great for</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {tool.useCases.map((u) => (
              <div key={u} className="flex items-center gap-3 rounded-xl border border-line bg-cream px-4 py-3 text-sm text-ink2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber" />{u}
              </div>
            ))}
          </div>
        </section>

        {/* bottom CTA */}
        <section className="border-t border-line py-12">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-forest p-8 text-paper sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight">Ready to try {tool.name}?</p>
              <p className="mt-1 text-paper/70">{tool.pricingFrom} &middot; See if it fits your workflow.</p>
            </div>
            <a href={affiliateLink(tool)} target="_blank" rel="sponsored noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-paper transition hover:bg-amberSoft">
              Visit {tool.name} <Arrow className="h-4 w-4" />
            </a>
          </div>
        </section>

        {/* related */}
        <section className="border-t border-line py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">More from the stack</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {related.map((r) => (
              <a key={r.slug} href={`/tools/${r.slug}`}
                className="group rounded-2xl border border-line bg-cream p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex items-center gap-3">
                  <img src={logoFor(r.domain)} alt="" className="h-8 w-8 rounded" />
                  <span className="font-display text-lg font-semibold text-ink">{r.name}</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-ink2">{r.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-amber">
                  Read review <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>

      {/* footer */}
      <footer className="mt-6 border-t border-line bg-paper2/50">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 px-5 py-8 text-sm text-ink3 sm:flex-row sm:items-center lg:px-8">
          <p>&copy; {new Date().getFullYear()} Aurion Future. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/affiliate-disclosure" className="hover:text-amber">Affiliate Disclosure</a>
            <a href="/imprint" className="hover:text-amber">Imprint</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
