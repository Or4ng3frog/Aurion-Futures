'use client';

import { useState } from 'react';
import { tools, logoFor, affiliateLink, type Category } from './lib/tools';

/* ==========================================================================
   AURION FUTURES — Editorial affiliate landing page
   Aesthetic: warm paper + ink, single burnt-amber accent, Fraunces serif.
   Tool data (incl. affiliate links) lives in app/lib/tools.ts
   ========================================================================== */

const categories: ('All' | Category)[] = [
  'All', 'Video', 'Voice', 'Content', 'Copywriting', 'Ads', 'Website', 'Automation'
];

const principles = [
  {
    kicker: '01',
    title: 'Tested, not theorised',
    body: 'Nothing reaches this page until it has earned a place in our own daily workflow.'
  },
  {
    kicker: '02',
    title: 'Signal over hype',
    body: 'We name the trade-offs. If a tool only fits a narrow use case, we tell you which one.'
  },
  {
    kicker: '03',
    title: 'Built for momentum',
    body: 'Every pick is chosen to help creators and founders ship faster — this week, not someday.'
  }
];

const footerLinks = {
  navigation: [
    { label: 'The Stack', href: '#tools' },
    { label: 'How we pick', href: '#principles' },
    { label: 'Journal', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  legal: [
    { label: 'Imprint', href: '/imprint' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Terms of Use', href: '/terms-of-use' }
  ]
};

/* tiny line icons */
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

export default function Home() {
  const [active, setActive] = useState<'All' | Category>('All');
  const shown = active === 'All' ? tools : tools.filter((t) => t.category === active);

  return (
    <main className="relative min-h-screen bg-paper text-ink">
      {/* ------------------------------ HEADER ------------------------------ */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Aurion Future home">
            <span className="font-display text-2xl font-semibold tracking-tightest text-ink">
              Aurion<span className="text-amber"> Future</span>
            </span>
          </a>

          <nav className="hidden items-center gap-9 text-sm md:flex">
            <a className="nav-link active" href="#tools">The Stack</a>
            <a className="nav-link" href="#principles">How we pick</a>
            <a className="nav-link" href="/blog">Journal</a>
            <a className="nav-link" href="/contact">Contact</a>
          </nav>

          <a href="#tools"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition hover:bg-amber">
            Browse the stack
            <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
        </div>
      </header>

      {/* -------------------------- DISCLOSURE BAR -------------------------- */}
      <div className="border-b border-line/70 bg-paper2/60">
        <div className="mx-auto max-w-6xl px-5 py-2 lg:px-8">
          <p className="text-center text-[0.72rem] leading-relaxed text-ink3">
            <span className="font-semibold text-ink2">Advertising / Affiliate.</span>{' '}
            Some links on this page are affiliate links — we may earn a commission at no extra cost to you.{' '}
            <a href="/affiliate-disclosure" className="rule-amber text-ink2 hover:text-amber">Full disclosure</a>.
          </p>
        </div>
      </div>

      {/* -------------------------------- HERO ------------------------------ */}
      <section id="top" className="relative overflow-hidden">
        {/* soft amber glow behind the visual */}
        <div aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-10 h-[420px] w-[620px] rounded-full bg-amber/10 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.05fr_.95fr]">
            <div>
              <p className="rise mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-amber"
                style={{ animationDelay: '60ms' }}>
                <span className="h-px w-8 bg-amber" />
                Curated · Tested · Independent
              </p>

              <h1 className="rise font-display text-[3.1rem] font-semibold leading-[0.98] tracking-tightest text-ink sm:text-[4.2rem] lg:text-[4.8rem]"
                style={{ animationDelay: '140ms' }}>
                The AI tools<br />
                we actually<br />
                <span className="italic text-amber">use to build.</span>
              </h1>

              <p className="rise mt-7 max-w-xl text-lg leading-8 text-ink2"
                style={{ animationDelay: '240ms' }}>
                No affiliate dumping ground. A short, honest shortlist of the software
                behind our own content, automation and growth — with the trade-offs
                spelled out, so you can pick fast and start today.
              </p>

              <div className="rise mt-9 flex flex-col gap-3 sm:flex-row"
                style={{ animationDelay: '340ms' }}>
                <a href="#tools"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-paper transition hover:bg-amber">
                  See the shortlist
                  <Arrow className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
                <a href="#principles"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper">
                  How we choose
                </a>
              </div>

              {/* compact trust row */}
              <div className="rise mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
                style={{ animationDelay: '440ms' }}>
                <div className="flex items-center gap-2.5">
                  <div className="flex shrink-0 -space-x-2.5">
                    {[1, 2, 3].map((n) => (
                      <img key={n} src={`/assets/avatar-${n}.png`} alt=""
                        className="h-8 w-8 rounded-full border-2 border-paper object-cover" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="flex text-amber">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5" />)}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-ink3">
                  Followed by creators, traders &amp; founders
                </p>
              </div>
            </div>

            {/* Showcase illustration */}
            <div className="rise relative" style={{ animationDelay: '420ms' }}>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-cream shadow-lift">
                <img src="/assets/hero-showcase.png"
                  alt="From idea to a polished, published site — the Aurion Future build flow"
                  className="w-full" />
              </div>
              <span className="absolute -left-3 -top-3 rotate-[-3deg] rounded-full bg-amber px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-paper shadow-soft">
                {tools.length} tools, hand-picked
              </span>
              <span className="absolute -bottom-3 -right-3 rotate-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-ink2 shadow-soft">
                Idea → Build → Launch
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- LOGO MARQUEE STRIP ------------------------- */}
      {/* FIXED: isolated section with its own vertical rhythm + clipped overflow */}
      <section className="relative z-0 overflow-hidden border-y border-line/80 bg-paper2/40 py-7">
        <p className="mb-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-ink3">
          The software on this page
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track items-center gap-14 px-7">
            {[...tools, ...tools].map((t, i) => (
              <div key={t.slug + i} className="flex shrink-0 items-center gap-3 opacity-70">
                <img src={logoFor(t.domain)} alt="" className="h-7 w-7 rounded" />
                <span className="font-display text-lg font-medium text-ink2">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ TOOLS ------------------------------- */}
      <section id="tools" className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="flex flex-col gap-7 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">The Stack</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              The shortlist
            </h2>
            <p className="mt-3 text-ink2">
              Each pick includes our honest verdict — what it’s great at, and who it’s for.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button key={c} type="button" onClick={() => setActive(c)}
                className={
                  c === active
                    ? 'rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition'
                    : 'rounded-full border border-line bg-cream px-4 py-2 text-sm font-semibold text-ink2 transition hover:border-ink/40 hover:text-ink'
                }>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((tool) => <ToolCard key={tool.slug} tool={tool} />)}
        </div>
      </section>

      {/* --------------------------- TESTIMONIAL ---------------------------- */}
      <section className="mx-auto max-w-4xl px-5 pb-4 lg:px-8">
        <figure className="rounded-3xl border border-line bg-cream p-9 text-center shadow-soft md:p-12">
          <div className="mb-5 flex justify-center text-amber">
            {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5" />)}
          </div>
          <blockquote className="font-display text-2xl italic leading-snug tracking-tight text-ink md:text-3xl">
            “Finally a list that doesn’t push everything — only what’s worth my time.”
          </blockquote>
          <figcaption className="mt-6 flex items-center justify-center gap-3 text-sm text-ink3">
            <span className="flex -space-x-2.5">
              {[1, 2, 3].map((n) => (
                <img key={n} src={`/assets/avatar-${n}.png`} alt=""
                  className="h-8 w-8 rounded-full border-2 border-cream object-cover" />
              ))}
            </span>
            Followed by creators, traders &amp; founders
          </figcaption>
        </figure>
      </section>

      {/* ---------------------------- PRINCIPLES ---------------------------- */}
      <section id="principles" className="relative z-0 border-y border-line bg-forest text-paper">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 md:grid-cols-[.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amberSoft">
                How we pick
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl">
                Three rules,<br />zero exceptions.
              </h2>
              <p className="mt-5 max-w-sm leading-7 text-paper/70">
                We’d rather recommend six tools we trust than sixty we don’t.
                That’s the whole pitch.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl bg-paper/15">
              {principles.map((p) => (
                <div key={p.kicker} className="bg-forest p-7 md:p-8">
                  <div className="flex items-start gap-5">
                    <span className="font-display text-3xl font-semibold text-amberSoft">{p.kicker}</span>
                    <div>
                      <h3 className="font-display text-2xl font-medium tracking-tight">{p.title}</h3>
                      <p className="mt-2 leading-7 text-paper/72">{p.body}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- SOCIAL / FOLLOW CTA ------------------------ */}
      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-cream p-8 shadow-soft md:p-14">
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">
                Follow along
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-[3.1rem] md:leading-[1.02]">
                New tool breakdowns,<br />every week.
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-ink2">
                We test the latest AI tools on camera and post the honest results.
                Pick your platform — the deep dives live there.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <SocialButton label="TikTok" href="https://www.tiktok.com/@aurion.future" brand="tiktok.com" />
                <SocialButton label="YouTube" href="https://www.youtube.com/@aurion.future" brand="youtube.com" />
                <SocialButton label="Instagram" href="https://www.instagram.com/aurion.future" brand="instagram.com" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-line bg-paper p-7">
                <div className="flex items-center justify-between gap-3 border-b border-line pb-4">
                  <p className="font-display text-xl italic text-ink">Upcoming on the channel</p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber/12 px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.14em] text-amber">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber" /> Soon
                  </span>
                </div>
                <ul className="mt-5 space-y-4">
                  {[
                    '7 AI tools that replaced my whole content team',
                    'I let AI run my automations for 30 days',
                    'The only voice tool that actually sounds human'
                  ].map((line, i) => (
                    <li key={i} className="flex items-start gap-3 border-b border-line pb-4 last:border-0 last:pb-0">
                      <span className="mt-0.5 font-display text-amber">{`0${i + 1}`}</span>
                      <span className="text-ink2">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------ FOOTER ------------------------------ */}
      <footer className="border-t border-line bg-paper2/50">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
          <div className="grid gap-10 md:grid-cols-[1.6fr_.8fr_.8fr]">
            <div>
              <span className="font-display text-2xl font-semibold tracking-tightest text-ink">
                Aurion<span className="text-amber"> Future</span>
              </span>
              <p className="mt-4 max-w-sm leading-7 text-ink2">
                An independent, hand-curated guide to the AI tools worth your time —
                for creators, traders and founders building what’s next.
              </p>
              <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink3">
                Aurion Future contains affiliate links. We may earn a commission on
                purchases made through them, at no additional cost to you.
              </p>
            </div>
            <FooterColumn title="Explore" links={footerLinks.navigation} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-sm text-ink3 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Aurion Future. All rights reserved.</p>
            <p className="font-display italic">Curated with intent.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================ sub-components ============================== */
function RatingPips({ rating }: { rating: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-amber">
      <Star className="h-3.5 w-3.5" />
      <span className="text-sm font-bold text-ink">{rating.toFixed(1)}</span>
      <span className="text-xs text-ink3">/ 5</span>
    </span>
  );
}

function ToolCard({ tool }: { tool: (typeof tools)[number] }) {
  return (
    <article className="group relative flex flex-col rounded-2xl border border-line bg-cream p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift">
      {tool.tag && (
        <span className="absolute right-5 top-5 rounded-full bg-amber/12 px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-amber">
          {tool.tag}
        </span>
      )}

      {/* header */}
      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-paper">
          <img src={logoFor(tool.domain)} alt={`${tool.name} logo`} className="h-7 w-7 rounded" />
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{tool.name}</h3>
          <p className="truncate text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-ink3">
            {tool.category} · {tool.domain}
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <RatingPips rating={tool.rating} />
        <span className="text-xs font-semibold text-ink3">{tool.pricingFrom}</span>
      </div>

      <p className="mt-4 text-[0.95rem] leading-7 text-ink2">{tool.blurb}</p>

      {/* the three honest signals */}
      <dl className="mt-5 space-y-3 border-t border-line pt-5 text-sm">
        <div>
          <dt className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-ink3">Best for</dt>
          <dd className="mt-1 leading-6 text-ink2">{tool.bestFor}</dd>
        </div>
        <div>
          <dt className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-amber">Why we use it</dt>
          <dd className="mt-1 leading-6 text-ink2">{tool.whyWeUse}</dd>
        </div>
        <div>
          <dt className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-ink3">Watch out</dt>
          <dd className="mt-1 leading-6 text-ink2">{tool.watchOut}</dd>
        </div>
      </dl>

      {/* actions: read review (internal) + visit (affiliate) */}
      <div className="mt-6 flex items-center gap-3 border-t border-line pt-5">
        <a href={`/tools/${tool.slug}`}
          className="flex-1 rounded-full border border-ink/20 px-4 py-2.5 text-center text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper">
          Read review
        </a>
        <a href={affiliateLink(tool)} target="_blank" rel="sponsored noopener noreferrer"
          aria-label={`Visit ${tool.name}`}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber text-paper transition hover:bg-amberSoft">
          <Arrow className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function SocialButton({ label, href, brand }: { label: string; href: string; brand: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="group inline-flex items-center gap-2.5 rounded-full border border-ink/15 bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-paper">
      <img src={`https://www.google.com/s2/favicons?domain=${brand}&sz=64`} alt=""
        className="h-4 w-4 rounded" />
      {label}
      <Arrow className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </a>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-ink3">{title}</h3>
      <ul className="space-y-2.5 text-sm text-ink2">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-amber">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
