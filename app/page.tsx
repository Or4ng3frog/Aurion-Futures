const featuredTools = [
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

const benefits = [
  {
    title: 'Save Time',
    description: 'Automate repetitive tasks and focus on the work that actually moves your business forward.',
    icon: '◷'
  },
  {
    title: 'Boost Productivity',
    description: 'Use tested AI tools and practical automation systems to build faster workflows.',
    icon: 'ϟ'
  },
  {
    title: 'Increase Income',
    description: 'Scale smarter, monetize faster and build digital income systems with clarity.',
    icon: '↗'
  },
  {
    title: 'Stay Ahead',
    description: 'Discover new AI solutions early and gain a real edge before they become mainstream.',
    icon: '✦'
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-aurion-bg text-white">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-aurion-radial" />
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Aurion Futures home">
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-10 w-auto sm:h-12" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/82 md:flex">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#tools">AI Tools</a>
            <a className="nav-link" href="#benefits">Benefits</a>
            <a className="nav-link" href="/blog">Blog</a>
            <a className="nav-link" href="/contact">Contact</a>
          </nav>

          <a href="#tools" className="rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]">
            Explore Tools
          </a>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
          <div className="absolute inset-y-10 right-0 w-full overflow-hidden rounded-l-[2.8rem] border border-white/10 shadow-card">
            <img src="/assets/hero-aurion-futures.png" alt="Aurion Futures hero background" className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,9,20,.82)_0%,rgba(6,9,20,.5)_18%,rgba(6,9,20,.12)_45%,rgba(6,9,20,.1)_100%)]" />
          </div>
        </div>
        <div className="absolute right-[8%] top-[20%] hidden h-56 w-56 rounded-full bg-aurion-purple/20 blur-[110px] lg:block" />
        <div className="absolute right-[18%] bottom-[12%] hidden h-48 w-48 rounded-full bg-aurion-blue/15 blur-[110px] lg:block" />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-16 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:pb-18 lg:pt-20">
          <div className="relative z-10 max-w-2xl">
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
              <a href="#tools" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-7 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
                <span>Explore AI Tools</span>
                <ArrowIcon />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[.03] px-7 py-4 text-sm font-extrabold text-white transition hover:border-white/40 hover:bg-white/[.06]">
                <PlayIcon />
                <span>See how Aurion works</span>
              </a>
            </div>

            <div className="mt-9">
              <p className="mb-4 text-sm font-semibold text-white/75">Trusted by creators, traders & entrepreneurs worldwide</p>
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
                  <div className="tracking-widest text-yellow-300">★★★★★</div>
                  <p className="max-w-sm text-sm text-white/65">AI insights, tools & systems for modern digital brands.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[280px] lg:hidden">
            <div className="absolute -inset-3 rounded-[2rem] bg-[radial-gradient(circle_at_60%_40%,rgba(193,46,255,.18),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(45,148,255,.14),transparent_26%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#090D1A] shadow-card">
              <img src="/assets/hero-aurion-futures.png" alt="Aurion Futures Hero" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050814]/65 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/50">Featured in & trusted by</p>
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

      <section id="benefits" className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(10,14,30,.96),rgba(7,11,24,.98))] p-4 shadow-card">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_0%,rgba(193,46,255,.13),transparent_20%),radial-gradient(circle_at_95%_8%,rgba(45,148,255,.12),transparent_18%),linear-gradient(180deg,transparent,rgba(255,255,255,.02))]" />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-[linear-gradient(180deg,rgba(14,20,43,.96),rgba(8,12,27,.92))] p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_22px_70px_rgba(89,56,255,.18)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70" />
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-aurion-purple/12 blur-3xl transition duration-300 group-hover:bg-aurion-purple/18" />
                <div className="pointer-events-none absolute -left-12 bottom-0 h-24 w-24 rounded-full bg-aurion-blue/10 blur-3xl" />
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-aurion-purple/95 to-aurion-blue text-2xl font-black shadow-[0_10px_30px_rgba(89,56,255,.28)]">
                  {benefit.icon}
                </div>
                <h3 className="relative text-[1.7rem] font-black leading-tight tracking-[-0.03em]">{benefit.title}</h3>
                <p className="relative mt-4 text-[1.02rem] leading-8 text-white/72">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#0B1022]/78 p-6 shadow-card backdrop-blur md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Hand-picked. Tested. Recommended.</span>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] md:text-4xl">The Best AI Tools for Your Growth</h2>
              <p className="mt-2 text-white/64">Only tools that we actively use, test and confidently recommend.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {categoryPills.map((category, index) => (
                <span
                  key={category}
                  className={`inline-flex items-center rounded-xl border px-5 py-3 text-sm font-bold ${index === 0 ? 'border-aurion-purple bg-gradient-to-r from-aurion-purple to-aurion-blue text-white' : 'border-white/10 bg-white/[.03] text-white/82'}`}
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {featuredTools.map((tool) => (
              <a key={tool.name} href={tool.href} className="group rounded-[1.5rem] border border-white/10 bg-[#090E1E] p-6 transition hover:-translate-y-1 hover:border-aurion-purple/70 hover:bg-[#0D1328] hover:shadow-glow">
                <div className={`mb-5 grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${tool.accent} text-2xl font-black text-[#07101D] shadow-[0_20px_60px_rgba(0,0,0,.25)]`}>
                  {tool.icon}
                </div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-aurion-cyan/80">{tool.category}</p>
                <h3 className="text-xl font-extrabold">{tool.name}</h3>
                <p className="mt-3 min-h-[96px] text-sm leading-6 text-white/62">{tool.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-aurion-purple/20 to-aurion-blue/20 px-4 py-2 text-sm font-extrabold text-aurion-cyan">
                  Learn more <ArrowIcon />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#" className="inline-flex items-center gap-3 rounded-xl border border-aurion-purple/40 bg-white/[.03] px-6 py-4 text-sm font-extrabold text-white transition hover:border-aurion-purple hover:bg-white/[.06]">
              View all tools <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(13,18,39,.98),rgba(14,17,32,.88))] p-8 shadow-card md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_.85fr] md:items-center">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-white/18 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">Grow with us</span>
              <h2 className="text-4xl font-black tracking-[-0.05em]">Daily AI insights & exclusive tips</h2>
              <p className="mt-3 max-w-xl text-lg text-white/78">
                Follow us on TikTok and stay one step ahead with tools, automation and digital growth insights.
              </p>
            </div>
            <div className="flex justify-start md:justify-end">
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full max-w-md items-center justify-center gap-3 rounded-2xl bg-white px-6 py-5 text-center text-sm font-black uppercase tracking-[0.06em] text-[#10162E] transition hover:-translate-y-0.5"
              >
                <span className="text-lg">♫</span>
                Follow us on TikTok
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050814] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.25fr_.8fr_.8fr_.8fr_.9fr] lg:px-8">
          <div>
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-12 w-auto" />
            <p className="mt-5 max-w-sm leading-7 text-white/62">Your hub for the best AI tools, automation systems and digital income opportunities.</p>
            <p className="mt-8 text-sm text-white/42">© 2026 Aurion Futures. All rights reserved.</p>
          </div>

          <FooterColumn title="Navigation" links={footerLinks.navigation} />
          <FooterColumn title="Categories" links={footerLinks.categories} />
          <FooterColumn title="Legal" links={footerLinks.legal} />

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Follow us</h3>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-aurion-purple hover:bg-white/[.06]">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[.06] text-lg font-black">♫</div>
              <div>
                <p className="text-sm font-extrabold">TikTok</p>
                <p className="text-sm text-white/60">Daily tips, tools & insights around AI.</p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="space-y-3 text-sm text-white/62">
        {links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className="transition hover:text-white">{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
