import type { ReactNode } from 'react';

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

type Tool = {
  name: string;
  category: string;
  description: string;
  icon: string;
  href: string;
  accent: string;
};

const featuredTools: Tool[] = [
  {
    name: 'Framer',
    category: 'Website',
    description: 'Build premium websites with AI-powered speed and clean modern design.',
    icon: 'F',
    href: '#',
    accent: 'from-sky-400 to-cyan-300'
  },
  {
    name: 'Synthesia',
    category: 'Video',
    description: 'Create professional AI avatar videos for marketing, education and sales.',
    icon: 'S',
    href: '#',
    accent: 'from-indigo-300 to-violet-300'
  },
  {
    name: 'Pictory',
    category: 'Content',
    description: 'Turn long-form content, scripts and articles into short viral clips.',
    icon: 'P',
    href: '#',
    accent: 'from-fuchsia-300 to-violet-300'
  },
  {
    name: 'Writesonic',
    category: 'Copywriting',
    description: 'Generate landing pages, ad copy, SEO content and campaigns faster.',
    icon: 'WS',
    href: '#',
    accent: 'from-sky-400 to-fuchsia-300'
  },
  {
    name: 'ElevenLabs',
    category: 'Voice',
    description: 'Create realistic AI voices for videos, podcasts and product demos.',
    icon: 'EL',
    href: '#',
    accent: 'from-zinc-100 to-white'
  }
];

type Benefit = {
  title: string;
  description: string;
  image: string;
  imageClass?: string;
};

const benefits: Benefit[] = [
  {
    title: 'Save Time',
    description:
      'Automate repetitive tasks and focus on the work that actually moves your business forward.',
    image: '/assets/benefit-save-time-alpha.png',
    imageClass: 'max-w-[150px] md:max-w-[168px]'
  },
  {
    title: 'Boost Productivity',
    description:
      'Use tested AI tools and practical automation systems to build faster workflows.',
    image: '/assets/benefit-productivity-alpha.png',
    imageClass: 'max-w-[150px] md:max-w-[172px] scale-[0.96]'
  },
  {
    title: 'Increase Income',
    description:
      'Scale smarter, monetize faster and build digital income systems with clarity.',
    image: '/assets/benefit-income-alpha.png',
    imageClass: 'max-w-[124px] md:max-w-[138px] translate-y-1'
  },
  {
    title: 'Stay Ahead',
    description:
      'Discover new AI solutions early and gain a real edge before they become mainstream.',
    image: '/assets/benefit-ahead-alpha.png',
    imageClass: 'max-w-[148px] md:max-w-[166px]'
  }
];

const categoryPills = ['All Tools', 'Productivity', 'Content'];

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'AI Tools', href: '#tools' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' }
  ],
  categories: [
    { label: 'Productivity', href: '#tools' },
    { label: 'Content Creation', href: '#tools' },
    { label: 'Marketing & SEO', href: '#tools' },
    { label: 'Video & Audio', href: '#tools' },
    { label: 'Business & Automation', href: '#tools' }
  ],
  legal: [
    { label: 'Imprint', href: '/imprint' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Terms of Use', href: '/terms-of-use' }
  ]
};

/* -------------------------------------------------------------------------- */
/*                                   ICONS                                    */
/* -------------------------------------------------------------------------- */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M8 5v14l11-7L8 5Z" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <circle
        cx="12"
        cy="12"
        r="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7v5l3.5 2.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TrendingUpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="m3 17 6-6 4 4 8-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7h7v7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M12 3 13.8 9.2 20 11l-6.2 1.8L12 19l-1.8-6.2L4 11l6.2-1.8L12 3Z"
        fill="currentColor"
      />
      <path
        d="M19 3.5 19.7 5.7 22 6.5l-2.3.8L19 9.5 18.3 7.3 16 6.5l2.3-.8L19 3.5Z"
        fill="currentColor"
        opacity=".7"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
      <path
        d="m12 2.5 2.9 6.3 6.9.7-5.1 4.7 1.5 6.8L12 17.5l-6.2 3.5 1.5-6.8L2.2 9.5l6.9-.7L12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M16.5 2c.2 1.7 1 3.2 2.4 4.1 1 .7 2.2 1 3.1 1v3.6c-1.4 0-2.9-.4-4.2-1.1-.6-.3-1.1-.7-1.6-1.1v7.4c0 4-3.3 7.1-7.1 7.1S2 19.9 2 16s3.3-7.1 7.1-7.1c.4 0 .9 0 1.3.1v3.7c-.4-.1-.9-.2-1.3-.2-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5V2h3.9Z"
        fill="currentColor"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   PAGE                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-aurion-bg text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-aurion-radial" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      {/* ---------------------------- HEADER ---------------------------- */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Aurion Futures home">
            <img
              src="/assets/aurion-futures-logo.png"
              alt="Aurion Futures"
              className="h-10 w-auto md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/82 md:flex">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#tools">AI Tools</a>
            <a className="nav-link" href="#benefits">Benefits</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/contact">Contact</a>
          </nav>

          <a
            href="#tools"
            className="rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]"
          >
            Explore Tools
          </a>
        </div>
      </header>

      {/* ----------------------------- HERO ----------------------------- */}
      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,rgba(193,46,255,.12),transparent_26%),radial-gradient(circle_at_82%_20%,rgba(45,148,255,.1),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-16 md:grid-cols-[.88fr_1.12fr] md:items-center lg:px-8 lg:pb-16 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurion-cyan/35 bg-aurion-cyan/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-aurion-cyan">
              <span className="h-2 w-2 rounded-full bg-aurion-magenta shadow-[0_0_16px_rgba(193,46,255,.9)]" />
              The future belongs to those who build with AI
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              AI Tools.<br />
              Automation.<br />
              <span className="bg-gradient-to-r from-aurion-magenta via-aurion-purple to-aurion-blue bg-clip-text text-transparent">
                Growth Without Limits.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/78">
              Discover tested AI tools, powerful automation systems and digital income solutions curated for creators, traders and entrepreneurs who want to move faster.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#tools"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-7 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5"
              >
                <span>Explore AI Tools</span>
                <ArrowIcon />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[.03] px-7 py-4 text-sm font-extrabold text-white transition hover:border-white/40 hover:bg-white/[.06]"
              >
                <PlayIcon />
                <span>See how Aurion works</span>
              </a>
            </div>

            <div className="mt-9">
              <p className="mb-4 text-sm font-semibold text-white/75">
                Trusted by creators, traders &amp; entrepreneurs worldwide
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((n) => (
                    <img
                      key={n}
                      src={`/assets/avatar-${n}.png`}
                      alt={`Aurion community member ${n}`}
                      className="h-12 w-12 rounded-full border-2 border-aurion-bg object-cover shadow-[0_0_24px_rgba(45,148,255,.14)] sm:h-14 sm:w-14"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-yellow-300">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                  <p className="max-w-sm text-sm text-white/65">
                    AI insights, tools &amp; systems for modern digital brands.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 rounded-[2.8rem] bg-[radial-gradient(circle_at_70%_35%,rgba(193,46,255,.2),transparent_28%),radial-gradient(circle_at_35%_75%,rgba(45,148,255,.16),transparent_24%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-[#090D1A] shadow-card">
              <img
                src="/assets/hero-aurion-futures.png"
                alt="Aurion Futures Hero"
                className="h-full min-h-[320px] w-full object-cover md:min-h-[420px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,9,20,.08),rgba(6,9,20,.15))]" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------ TRUST / LOGO STRIP -------------------- */}
      <section className="border-b border-white/10 bg-[#050814]/65 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/50">
            Featured in &amp; trusted by
          </p>
          <div className="grid grid-cols-2 gap-5 text-center text-xl font-black text-white/70 md:grid-cols-6">
            <span>Framer</span>
            <span>Synthesia</span>
            <span>Pictory</span>
            <span>Writesonic</span>
            <span>ElevenLabs</span>
            <span>And more</span>
          </div>
        </div>
      </section>

      {/* ---------------------------- BENEFITS -------------------------- */}
      <section id="benefits" className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.24em] text-aurion-cyan/80">
            Why Aurion
          </span>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">
            Built for people who refuse to waste time.
          </h2>
          <p className="mt-3 text-white/64">
            Four reasons creators, traders and entrepreneurs make Aurion part of their stack.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit, idx) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={idx} />
          ))}
        </div>
      </section>

      {/* ----------------------------- TOOLS ---------------------------- */}
      <section id="tools" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(11,16,34,.86),rgba(8,12,27,.94))] p-6 shadow-card backdrop-blur md:p-10">
          {/* subtle decorative gradient orbs */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-aurion-purple/12 blur-[100px]" />
          <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-aurion-blue/10 blur-[120px]" />

          <div className="relative mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-aurion-cyan/80">
                Hand-picked. Tested. Recommended.
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] md:text-4xl">
                The Best AI Tools for Your Growth
              </h2>
              <p className="mt-3 max-w-xl text-white/64">
                Only tools that we actively use, test and confidently recommend.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categoryPills.map((category, index) => (
                <button
                  key={category}
                  type="button"
                  className={
                    index === 0
                      ? 'rounded-full border border-aurion-purple/60 bg-gradient-to-r from-aurion-purple to-aurion-blue px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_28px_rgba(123,69,255,.35)]'
                      : 'rounded-full border border-white/10 bg-white/[.04] px-5 py-2.5 text-sm font-bold text-white/75 transition hover:border-white/20 hover:bg-white/[.07] hover:text-white'
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.name} tool={tool} />
            ))}
          </div>

          <div className="relative mt-10 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[.04] px-6 py-3.5 text-sm font-bold text-white transition hover:border-aurion-purple/60 hover:bg-white/[.07]"
            >
              View all tools <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------ ABOUT --------------------------- */}
      <section id="about" className="mx-auto max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(13,18,39,.98),rgba(14,17,32,.88))] p-8 shadow-card md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_.92fr] md:items-center">
            <div className="max-w-xl">
              <span className="mb-4 inline-flex rounded-full border border-white/18 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">
                Grow with us
              </span>
              <h2 className="text-4xl font-black tracking-[-0.05em] sm:text-[3rem]">
                Daily AI insights &amp; exclusive tips
              </h2>
              <p className="mt-4 max-w-lg text-lg leading-8 text-white/78">
                Follow us on TikTok for curated AI tools, automation ideas and digital growth content designed for creators, traders and entrepreneurs.
              </p>
              <div className="mt-8">
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.06em] text-[#10162E] shadow-[0_14px_40px_rgba(0,0,0,.28)] transition hover:-translate-y-0.5"
                >
                  <TikTokIcon />
                  Follow us on TikTok
                  <ArrowIcon />
                </a>
              </div>
            </div>
            <div className="relative min-h-[300px]">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute right-12 top-1/2 h-44 w-44 -translate-y-1/2 rounded-full bg-aurion-purple/16 blur-3xl" />
                <div className="absolute right-0 bottom-10 h-32 w-32 rounded-full bg-aurion-blue/12 blur-3xl" />
              </div>
              <div className="relative z-10 flex h-full items-center justify-center md:justify-end">
                <img
                  src="/assets/cta-tiktok-alpha.png"
                  alt="TikTok AI content visual"
                  className="w-full max-w-[360px] object-contain drop-shadow-[0_26px_70px_rgba(82,57,255,.24)] md:max-w-[390px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------------------- FOOTER --------------------------- */}
      <footer className="relative border-t border-white/10 bg-[#040712]">
        {/* gradient hairline on top of footer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aurion-purple/60 to-transparent" />

        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">
            {/* Brand column */}
            <div>
              <img
                src="/assets/aurion-futures-logo.png"
                alt="Aurion Futures"
                className="h-10 w-auto"
              />
              <p className="mt-5 max-w-sm leading-7 text-white/62">
                Your hub for the best AI tools, automation systems and digital income opportunities.
              </p>

              <div className="mt-7">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
                  Follow us
                </p>
                <a
                  href="https://www.tiktok.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.03] px-4 py-3 transition hover:border-aurion-purple/50 hover:bg-white/[.06]"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-aurion-purple to-aurion-blue text-white">
                    <TikTokIcon />
                  </span>
                  <span className="text-sm font-bold text-white">TikTok</span>
                  <span className="text-white/40 transition group-hover:translate-x-0.5 group-hover:text-white">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>

            <FooterColumn title="Navigation" links={footerLinks.navigation} />
            <FooterColumn title="Categories" links={footerLinks.categories} />
            <FooterColumn title="Legal" links={footerLinks.legal} />
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
            <p className="text-sm text-white/42">
              © {new Date().getFullYear()} Aurion Futures. All rights reserved.
            </p>
            <p className="text-xs text-white/35">
              Built for creators, traders &amp; entrepreneurs.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SUB-COMPONENTS                                */
/* -------------------------------------------------------------------------- */

function BenefitCard({ benefit, index }: { benefit: Benefit; index: number }) {
  return (
    <div className="group relative overflow-hidden rounded-[1.65rem]">
      <div className="absolute inset-0 rounded-[1.65rem] bg-[linear-gradient(145deg,rgba(213,66,255,.38),rgba(35,150,255,.22)_50%,rgba(255,255,255,.05)_82%)] opacity-80 transition duration-300 group-hover:opacity-100" />
      <div className="relative m-px rounded-[calc(1.65rem-1px)] bg-[linear-gradient(180deg,rgba(11,16,34,.98),rgba(8,12,26,.97))] p-6 md:p-7">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
        <div className="pointer-events-none absolute -left-8 top-8 h-24 w-24 rounded-full bg-aurion-purple/10 blur-3xl transition duration-300 group-hover:bg-aurion-purple/20" />
        <div className="pointer-events-none absolute -right-10 bottom-4 h-28 w-28 rounded-full bg-aurion-blue/10 blur-3xl transition duration-300 group-hover:bg-aurion-blue/20" />

        <span className="absolute right-5 top-5 text-xs font-black tracking-widest text-white/25">
          0{index + 1}
        </span>

        <div className="relative mb-6 h-[170px] overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(167,73,255,.16),transparent_58%),linear-gradient(180deg,rgba(255,255,255,.035),rgba(255,255,255,.01))]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(89,56,255,.12),transparent_62%)] blur-2xl" />
          <img
            src={benefit.image}
            alt={benefit.title}
            className="relative z-10 h-full w-full object-contain p-3 drop-shadow-[0_18px_40px_rgba(77,58,255,.22)] transition duration-500 group-hover:scale-[1.03]"
          />
        </div>

        <h3 className="text-xl font-black leading-tight tracking-[-0.02em] md:text-[1.35rem]">
          {benefit.title}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-7 text-white/65">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <a
      href={tool.href}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#090E1E]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-aurion-purple/50 hover:bg-[#0D1328]/90 hover:shadow-[0_22px_60px_rgba(89,56,255,.25)]"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

      <div
        className={`mb-5 grid h-16 w-16 place-items-center rounded-xl bg-gradient-to-br ${tool.accent} text-xl font-black text-[#07101D] shadow-[0_12px_30px_rgba(0,0,0,.35)]`}
      >
        {tool.icon}
      </div>

      <p className="mb-2 text-[0.7rem] font-black uppercase tracking-[0.22em] text-aurion-cyan/85">
        {tool.category}
      </p>
      <h3 className="text-lg font-extrabold">{tool.name}</h3>
      <p className="mt-2.5 min-h-[88px] text-sm leading-6 text-white/60">
        {tool.description}
      </p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-aurion-cyan transition group-hover:gap-3">
        Learn more <ArrowIcon />
      </div>
    </a>
  );
}

function FooterColumn({
  title,
  links
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/45">
        {title}
      </h3>
      <ul className="space-y-3 text-sm text-white/70">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
