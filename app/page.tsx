'use client';

import { useState } from 'react';

/* ========================================================================== */
/*  AURION FUTURES — Editorial affiliate landing page                         */
/*  Aesthetic: warm paper + ink, single burnt-amber accent, Fraunces serif.   */
/*                                                                            */
/*  >>> WHERE TO PUT YOUR AFFILIATE LINKS <<<                                  */
/*  Every tool below has an `affiliateUrl`. Replace the placeholder '#'        */
/*  with your real partner/referral link. The brand logo is loaded            */
/*  automatically from the tool's `domain` — no image files needed.           */
/* ========================================================================== */

type Category = 'Content' | 'Video' | 'Voice' | 'Copywriting' | 'Website' | 'Automation';

type Tool = {
  name: string;
  domain: string;          // used for the auto-loaded brand logo + the visible URL
  category: Category;
  blurb: string;           // the editorial one-liner
  verdict: string;         // short "why we recommend it" note
  tag?: string;            // optional ribbon, e.g. "Editor's pick"
  affiliateUrl: string;    // <-- PUT YOUR AFFILIATE LINK HERE
};

const tools: Tool[] = [
  {
    name: 'Synthesia',
    domain: 'synthesia.io',
    category: 'Video',
    blurb: 'AI avatar videos for marketing, onboarding and sales — no camera required.',
    verdict: 'The fastest way we found to turn a script into a clean talking-head video.',
    tag: "Editor's pick",
    affiliateUrl: '#'
  },
  {
    name: 'ElevenLabs',
    domain: 'elevenlabs.io',
    category: 'Voice',
    blurb: 'Strikingly natural AI voiceover for shorts, podcasts and product demos.',
    verdict: 'The voice quality is the one tool our audience asks about most.',
    affiliateUrl: '#'
  },
  {
    name: 'Pictory',
    domain: 'pictory.ai',
    category: 'Video',
    blurb: 'Cut long-form content into short, caption-ready clips in minutes.',
    verdict: 'Our go-to for repurposing a single video into a week of posts.',
    affiliateUrl: '#'
  },
  {
    name: 'Writesonic',
    domain: 'writesonic.com',
    category: 'Copywriting',
    blurb: 'Landing-page copy, ad variations and SEO drafts on tap.',
    verdict: 'Best balance of speed and on-brand output we tested.',
    affiliateUrl: '#'
  },
  {
    name: 'Framer',
    domain: 'framer.com',
    category: 'Website',
    blurb: 'Design and ship premium sites without touching a line of code.',
    verdict: 'Where we send anyone who needs a real site this weekend.',
    affiliateUrl: '#'
  },
  {
    name: 'Make',
    domain: 'make.com',
    category: 'Automation',
    blurb: 'Wire your tools together and let the busywork run itself.',
    verdict: 'The automation layer quietly running behind everything we do.',
    affiliateUrl: '#'
  }
];

const categories: ('All' | Category)[] = [
  'All', 'Video', 'Voice', 'Content', 'Copywriting', 'Website', 'Automation'
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

/* ============================ tiny line icons ============================= */
function Arrow({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Star({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="m12 2.5 2.9 6.3 6.9.7-5.1 4.7 1.5 6.8L12 17.5l-6.2 3.5 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z"
        fill="currentColor" />
    </svg>
  );
}

/* ================================ PAGE ==================================== */
export default function Home() {
  const [active, setActive] = useState<'All' | Category>('All');
  const shown = active === 'All' ? tools : tools.filter((t) => t.category === active);

  return (
    <main className="paper-grain relative min-h-screen bg-paper text-ink">
      {/* ------------------------------ HEADER ------------------------------ */}
      <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="Aurion Futures home">
            <span className="font-display text-2xl font-semibold tracking-tightest text-ink">
              Aurion<span className="text-amber"> Futures</span>
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
            <span className="font-semibold text-ink2">Werbung / Affiliate.</span>{' '}
            Some links below are affiliate links — we may earn a commission at no extra cost to you.{' '}
            <a href="/affiliate-disclosure" className="rule-amber text-ink2 hover:text-amber">Full disclosure</a>.
          </p>
        </div>
      </div>

      {/* -------------------------------- HERO ------------------------------ */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 lg:px-8 lg:pb-20 lg:pt-24">
          <div className="grid items-end gap-12 md:grid-cols-[1.25fr_.75fr]">
            <div>
              <p className="rise mb-6 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.32em] text-amber"
                style={{ animationDelay: '60ms' }}>
                <span className="h-px w-8 bg-amber" />
                Curated · Tested · Independent
              </p>

              <h1 className="rise font-display text-[3.1rem] font-semibold leading-[0.98] tracking-tightest text-ink sm:text-[4.2rem] lg:text-[5.2rem]"
                style={{ animationDelay: '140ms' }}>
                The AI tools<br />
                we actually<br />
                <span className="italic text-amber">use to build.</span>
              </h1>

              <p className="rise mt-7 max-w-xl text-lg leading-8 text-ink2"
                style={{ animationDelay: '240ms' }}>
                No affiliate dumping ground. A short, honest shortlist of the software
                behind our own content, automation and growth — with the trade-offs
                spelled out, so you can pick fast and start this weekend.
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
            </div>

            {/* Editorial trust card */}
            <div className="rise relative" style={{ animationDelay: '420ms' }}>
              <div className="rounded-2xl border border-line bg-cream p-7 shadow-soft">
                <div className="flex items-center gap-1 text-amber">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
                </div>
                <p className="mt-4 font-display text-2xl leading-snug tracking-tight text-ink">
                  “Finally a list that doesn’t push everything — only what’s worth my time.”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {[1, 2, 3, 4].map((n) => (
                      <img key={n} src={`/assets/avatar-${n}.png`} alt=""
                        className="h-9 w-9 rounded-full border-2 border-cream object-cover" />
                    ))}
                  </div>
                  <p className="text-sm text-ink3">
                    Followed by creators, traders &amp; founders
                  </p>
                </div>
              </div>
              <span className="absolute -right-3 -top-3 rotate-3 rounded-full bg-amber px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-paper shadow-soft">
                {tools.length} tools, hand-picked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------- LOGO MARQUEE STRIP ------------------------- */}
      <section className="border-y border-line/80 bg-paper2/40 py-6">
        <p className="mb-5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-ink3">
          The software on this page
        </p>
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-14 px-7">
            {[...tools, ...tools].map((t, i) => (
              <div key={t.name + i} className="flex shrink-0 items-center gap-2.5 opacity-70">
                <img src={logoFor(t.domain)} alt="" className="h-6 w-6 rounded" />
                <span className="font-display text-lg font-medium text-ink2">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------ TOOLS ------------------------------- */}
      <section id="tools" className="mx-auto max-w-6xl px-5 py-18 lg:px-8 lg:py-24">
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
          {shown.map((tool) => <ToolCard key={tool.name} tool={tool} />)}
        </div>
      </section>

      {/* ---------------------------- PRINCIPLES ---------------------------- */}
      <section id="principles" className="border-y border-line bg-forest text-paper">
        <div className="mx-auto max-w-6xl px-5 py-18 lg:px-8 lg:py-24">
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
      <section className="mx-auto max-w-6xl px-5 py-18 lg:px-8 lg:py-24">
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
                <SocialButton label="YouTube" href="https://youtube.com/" brand="youtube.com" />
                <SocialButton label="TikTok" href="https://tiktok.com/" brand="tiktok.com" />
                <SocialButton label="Instagram" href="https://instagram.com/" brand="instagram.com" />
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-line bg-paper p-7">
                <p className="font-display text-xl italic text-ink2">This week on the channel</p>
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
                Aurion<span className="text-amber"> Futures</span>
              </span>
              <p className="mt-4 max-w-sm leading-7 text-ink2">
                An independent, hand-curated guide to the AI tools worth your time —
                for creators, traders and founders building what’s next.
              </p>
              <p className="mt-6 max-w-sm text-xs leading-relaxed text-ink3">
                Aurion Futures contains affiliate links. We may earn a commission on
                purchases made through them, at no additional cost to you.
              </p>
            </div>
            <FooterColumn title="Explore" links={footerLinks.navigation} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-7 text-sm text-ink3 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} Aurion Futures. All rights reserved.</p>
            <p className="font-display italic">Curated with intent.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* ============================ helpers ===================================== */
// Brand logo loaded straight from the tool's domain — no local asset needed.
function logoFor(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}

/* ============================ sub-components ============================== */
function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a href={tool.affiliateUrl} target="_blank" rel="sponsored noopener noreferrer"
      className="group relative flex flex-col rounded-2xl border border-line bg-cream p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift">
      {tool.tag && (
        <span className="absolute right-5 top-5 rounded-full bg-amber/12 px-2.5 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-amber">
          {tool.tag}
        </span>
      )}

      <div className="flex items-center gap-3.5">
        <div className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-paper">
          <img src={logoFor(tool.domain)} alt={`${tool.name} logo`} className="h-7 w-7 rounded" />
        </div>
        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{tool.name}</h3>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink3">
            {tool.category} · {tool.domain}
          </p>
        </div>
      </div>

      <p className="mt-5 text-[0.96rem] leading-7 text-ink2">{tool.blurb}</p>

      <div className="mt-5 rounded-xl border border-line bg-paper/70 p-4">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-amber">Our verdict</p>
        <p className="mt-1.5 text-[0.9rem] italic leading-6 text-ink2">{tool.verdict}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-line pt-5">
        <span className="text-sm font-semibold text-ink">Visit {tool.name}</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 text-ink transition group-hover:bg-ink group-hover:text-paper">
          <Arrow className="h-4 w-4" />
        </span>
      </div>
    </a>
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
