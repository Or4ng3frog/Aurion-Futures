const featuredTools = [
  {
    name: 'Framer',
    category: 'Website',
    description: 'Build premium websites with AI-powered speed and modern design.',
    icon: 'F',
    href: '#',
    accent: 'from-blue-400 to-cyan-300'
  },
  {
    name: 'Synthesia',
    category: 'Video',
    description: 'Create professional AI avatar videos for sales, education and content.',
    icon: 'S',
    href: '#',
    accent: 'from-indigo-400 to-purple-300'
  },
  {
    name: 'Pictory',
    category: 'Content',
    description: 'Turn scripts, articles and long videos into short, shareable clips.',
    icon: 'P',
    href: '#',
    accent: 'from-fuchsia-400 to-violet-300'
  },
  {
    name: 'Writesonic',
    category: 'Copywriting',
    description: 'Generate landing page copy, ads, SEO texts and campaigns faster.',
    icon: 'WS',
    href: '#',
    accent: 'from-sky-400 to-fuchsia-400'
  },
  {
    name: 'ElevenLabs',
    category: 'Voice',
    description: 'Create realistic AI voices for videos, podcasts and product demos.',
    icon: 'EL',
    href: '#',
    accent: 'from-zinc-200 to-white'
  }
];

const benefits = [
  {
    title: 'Save Time',
    description: 'Automate repetitive tasks and focus on the work that actually moves your business.',
    icon: '◷'
  },
  {
    title: 'Boost Productivity',
    description: 'Power up your workflow with tested AI tools and practical automation systems.',
    icon: 'ϟ'
  },
  {
    title: 'Increase Income',
    description: 'Build, scale and monetize faster with smart digital systems and curated tools.',
    icon: '↗'
  },
  {
    title: 'Stay Ahead',
    description: 'Discover cutting-edge AI solutions before they become mainstream.',
    icon: '◎'
  }
];

const categories = ['All Tools', 'Website', 'Video', 'Content', 'Voice', 'Automation', 'Trading'];

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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurion-radial" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Aurion Futures home">
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/82 md:flex">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#tools">AI Tools</a>
            <a className="nav-link" href="#categories">Categories</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#legal">Legal</a>
          </nav>

          <a href="#tools" className="rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]">
            Explore Tools
          </a>
        </div>
      </header>

      <section id="home" className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-16 md:grid-cols-[.93fr_1.07fr] md:items-center lg:px-8 lg:pb-16 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurion-cyan/40 bg-aurion-cyan/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-aurion-cyan">
              <span className="h-2 w-2 rounded-full bg-aurion-magenta shadow-[0_0_16px_rgba(193,46,255,.9)]" />
              AI Tools. Automation. Growth.
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              AI Tools.<br />
              <span className="bg-gradient-to-r from-aurion-magenta via-aurion-purple to-aurion-blue bg-clip-text text-transparent">Automation.</span><br />
              Limitless Possibilities.
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/76">
              We test and recommend the best AI tools that help creators, traders and businesses build faster, automate more and achieve bigger.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#tools" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-7 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
                <span>Explore AI Tools</span>
                <ArrowIcon />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/25 bg-white/[.03] px-7 py-4 text-sm font-extrabold text-white transition hover:border-white/50 hover:bg-white/[.06]">
                <PlayIcon />
                <span>Watch Intro</span>
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-3">
                {['D', 'K', 'AI'].map((item) => (
                  <div key={item} className="grid h-10 w-10 place-items-center rounded-full border-2 border-aurion-bg bg-gradient-to-br from-white to-slate-300 text-xs font-black text-slate-900">
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <div className="tracking-widest text-yellow-300">★★★★★</div>
                <p className="text-sm text-white/72">Trusted by creators, traders & entrepreneurs worldwide</p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[360px] md:min-h-[500px]">
            <div className="absolute inset-0 overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-[#121633] via-[#11152B] to-[#060914] shadow-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(139,67,255,.42),transparent_28%),radial-gradient(circle_at_60%_55%,rgba(45,148,255,.26),transparent_36%)]" />
              <div className="stars" />
              <div className="absolute bottom-0 left-0 right-0 h-[46%] bg-[linear-gradient(180deg,transparent,rgba(4,7,17,.92))]" />
              <div className="absolute bottom-[18%] left-[8%] h-[34%] w-[84%] mountain-layer opacity-95" />
              <div className="absolute bottom-[16%] left-[4%] h-[28%] w-[92%] mountain-layer-secondary opacity-80" />
              <div className="absolute bottom-[6%] left-[10%] h-px w-[80%] bg-gradient-to-r from-transparent via-aurion-purple/80 to-transparent" />
              <div className="absolute bottom-[7%] left-[11%] h-24 w-[78%] rounded-[100%] bg-gradient-to-b from-aurion-purple/35 to-transparent blur-sm" />
              <div className="aurion-triangle absolute left-[49%] top-[21%] h-[46%] w-[38%] -translate-x-1/2" />
              <div className="aurion-triangle small absolute left-[53%] top-[39%] h-[21%] w-[18%] -translate-x-1/2" />
              <div className="absolute bottom-[13%] left-[50%] h-20 w-20 -translate-x-1/2 rounded-full bg-aurion-purple/45 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050814]/70 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.26em] text-white/46">Featured in & trusted by</p>
          <div className="grid grid-cols-2 gap-5 text-center text-xl font-black text-white/34 md:grid-cols-6">
            <span>Framer</span>
            <span>Synthesia</span>
            <span>Pictory</span>
            <span>Writesonic</span>
            <span>ElevenLabs</span>
            <span>And more</span>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[.035] shadow-card backdrop-blur md:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="border-white/10 p-8 md:border-r last:md:border-r-0">
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-aurion-purple to-aurion-blue text-2xl font-black shadow-glow">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-extrabold">{benefit.title}</h3>
              <p className="mt-3 leading-7 text-white/66">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#0B1022]/78 p-6 shadow-card backdrop-blur md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-3xl font-black tracking-[-0.035em] md:text-4xl">Featured AI Tools</h2>
              <p className="mt-2 text-white/64">Hand-picked tools that we use, test and truly recommend.</p>
            </div>
            <a href="#" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[.03] px-5 py-3 text-sm font-bold transition hover:bg-white/[.07]">
              View all tools <ArrowIcon />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-5">
            {featuredTools.map((tool) => (
              <a key={tool.name} href={tool.href} className="group rounded-2xl border border-white/10 bg-white/[.035] p-6 transition hover:-translate-y-1 hover:border-aurion-purple/70 hover:bg-white/[.06] hover:shadow-glow">
                <div className={`mb-5 grid h-20 w-20 place-items-center rounded-2xl bg-gradient-to-br ${tool.accent} text-2xl font-black text-[#07101D] shadow-[0_20px_60px_rgba(0,0,0,.25)]`}>
                  {tool.icon}
                </div>
                <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-aurion-cyan/80">{tool.category}</p>
                <h3 className="text-xl font-extrabold">{tool.name}</h3>
                <p className="mt-3 min-h-[84px] text-sm leading-6 text-white/62">{tool.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-aurion-purple/20 to-aurion-blue/20 px-4 py-2 text-sm font-extrabold text-aurion-cyan">
                  Learn more <ArrowIcon />
                </div>
              </a>
            ))}
          </div>

          <div id="categories" className="mt-7 grid gap-3 sm:grid-cols-2 md:grid-cols-7">
            {categories.map((category, index) => (
              <a key={category} href="#" className={`rounded-xl border px-4 py-3 text-center text-sm font-bold transition ${index === 0 ? 'border-aurion-purple bg-aurion-purple/10 text-white' : 'border-white/10 bg-white/[.025] text-white/78 hover:border-white/30'}`}>
                {category}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-aurion-purple via-[#3B3AE8] to-aurion-blue p-8 shadow-glow md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_.85fr] md:items-center">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-black uppercase tracking-[0.22em]">Grow with AI</span>
              <h2 className="text-4xl font-black tracking-[-0.05em]">Discover. Automate. Grow.</h2>
              <p className="mt-3 text-lg text-white/82">The future belongs to those who build with AI today.</p>
            </div>
            <div className="grid gap-4">
              <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="rounded-xl bg-white px-6 py-4 text-center text-sm font-black uppercase tracking-[0.06em] text-[#10162E] transition hover:-translate-y-0.5">
                Follow us on TikTok
              </a>
              <a href="https://thetradingexpert.com/" target="_blank" rel="noreferrer" className="rounded-xl border border-white/50 bg-white/5 px-6 py-4 text-center text-sm font-black uppercase tracking-[0.06em] text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                Visit TheTradingExpert
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer id="legal" className="border-t border-white/10 bg-[#050814] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.2fr_.8fr_.8fr_.8fr_.8fr] lg:px-8">
          <div>
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm leading-7 text-white/62">Your hub for the best AI tools, automation systems and digital income opportunities.</p>
          </div>
          <FooterColumn title="Quick Links" links={['Home', 'AI Tools', 'Categories', 'About', 'Contact']} />
          <FooterColumn title="Categories" links={['Website Tools', 'Video Tools', 'Content Tools', 'Voice Tools', 'Trading Tools']} />
          <FooterColumn title="Legal" links={['Impressum', 'Datenschutz', 'Disclaimer', 'Affiliate Disclosure', 'Terms of Use']} />
          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Let’s connect</h3>
            <div className="flex flex-wrap gap-3">
              {['TikTok', 'YT', 'IG', 'X', 'DC'].map((social) => (
                <a key={social} href="#" className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[.04] text-xs font-black transition hover:border-aurion-purple hover:bg-aurion-purple/20">
                  {social}
                </a>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/42">© 2026 Aurion Futures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">{title}</h3>
      <ul className="space-y-3 text-sm text-white/62">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="transition hover:text-white">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
