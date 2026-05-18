const featuredTools = [
  {
    name: 'Framer',
    category: 'Website',
    description: 'Moderne, schnelle und AI-gestützte Websites ohne Code erstellen.',
    icon: 'F',
    href: '#',
    accent: 'from-sky-400 to-cyan-300'
  },
  {
    name: 'Synthesia',
    category: 'Video',
    description: 'Professionelle AI-Avatar-Videos für Marketing, Sales und Education produzieren.',
    icon: 'S',
    href: '#',
    accent: 'from-indigo-300 to-violet-300'
  },
  {
    name: 'Pictory',
    category: 'Content',
    description: 'Lange Inhalte, Skripte und Artikel in kurze, teilbare Clips verwandeln.',
    icon: 'P',
    href: '#',
    accent: 'from-fuchsia-300 to-violet-300'
  },
  {
    name: 'Writesonic',
    category: 'Copywriting',
    description: 'Landingpages, Ads, SEO-Texte und Kampagnen in Sekunden erstellen.',
    icon: 'WS',
    href: '#',
    accent: 'from-sky-400 to-fuchsia-300'
  },
  {
    name: 'ElevenLabs',
    category: 'Voice',
    description: 'Realistische AI-Stimmen für Videos, Podcasts und Produkt-Demos generieren.',
    icon: 'EL',
    href: '#',
    accent: 'from-zinc-100 to-white'
  }
];

const benefits = [
  {
    title: 'Zeit sparen',
    description: 'Automatisiere wiederkehrende Aufgaben und konzentriere dich auf das, was dein Business wirklich voranbringt.',
    icon: '◷'
  },
  {
    title: 'Produktivität steigern',
    description: 'Nutze getestete AI-Tools und praxiserprobte Automatisierungssysteme für effizientere Workflows.',
    icon: 'ϟ'
  },
  {
    title: 'Einkommen erhöhen',
    description: 'Skaliere schneller, monetarisiere smarter und baue digitale Einkommensquellen systematisch auf.',
    icon: '↗'
  },
  {
    title: 'Immer einen Schritt voraus',
    description: 'Entdecke neue AI-Lösungen frühzeitig und sichere dir echte Vorteile gegenüber dem Wettbewerb.',
    icon: '✦'
  }
];

const categoryPills = ['Alle Tools', 'Produktivität', 'Content'];

const footerLinks = {
  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'AI Tools', href: '#tools' },
    { label: 'Vorteile', href: '#vorteile' },
    { label: 'Kontakt', href: '/kontakt' }
  ],
  kategorien: [
    { label: 'Produktivität', href: '#tools' },
    { label: 'Content-Erstellung', href: '#tools' },
    { label: 'Marketing & SEO', href: '#tools' },
    { label: 'Video & Audio', href: '#tools' },
    { label: 'Business & Automation', href: '#tools' }
  ],
  rechtliches: [
    { label: 'Impressum', href: '/impressum' },
    { label: 'Datenschutz', href: '/datenschutz' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Affiliate-Hinweis', href: '/affiliate-hinweis' },
    { label: 'Nutzungsbedingungen', href: '/nutzungsbedingungen' }
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
      <div className="pointer-events-none fixed inset-0 -z-10 bg-aurion-radial" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-15" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060914]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Aurion Futures Home">
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-white/82 md:flex">
            <a className="nav-link active" href="#home">Home</a>
            <a className="nav-link" href="#tools">AI Tools</a>
            <a className="nav-link" href="#vorteile">Vorteile</a>
            <a className="nav-link" href="#ueber-uns">Über uns</a>
            <a className="nav-link" href="/kontakt">Kontakt</a>
          </nav>

          <a href="#tools" className="rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02]">
            Jetzt entdecken
          </a>
        </div>
      </header>

      <section id="home" className="relative border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-12 pt-16 md:grid-cols-[.88fr_1.12fr] md:items-center lg:px-8 lg:pb-16 lg:pt-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-aurion-cyan/35 bg-aurion-cyan/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-aurion-cyan">
              <span className="h-2 w-2 rounded-full bg-aurion-magenta shadow-[0_0_16px_rgba(193,46,255,.9)]" />
              Die Zukunft gehört denen, die mit KI bauen
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              AI Tools. Automation.<br />
              <span className="bg-gradient-to-r from-aurion-magenta via-aurion-purple to-aurion-blue bg-clip-text text-transparent">
                Wachstum ohne Grenzen.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/78">
              Entdecke getestete AI-Tools, leistungsstarke Automatisierungslösungen und digitale Einkommenssysteme — kuratiert für Creator, Trader und Unternehmer, die schneller wachsen wollen.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#tools" className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-aurion-purple to-aurion-blue px-7 py-4 text-sm font-extrabold text-white shadow-glow transition hover:-translate-y-0.5">
                <span>AI Tools entdecken</span>
                <ArrowIcon />
              </a>
              <a href="#ueber-uns" className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[.03] px-7 py-4 text-sm font-extrabold text-white transition hover:border-white/40 hover:bg-white/[.06]">
                <PlayIcon />
                <span>So funktioniert Aurion</span>
              </a>
            </div>

            <div className="mt-9">
              <p className="mb-4 text-sm font-semibold text-white/75">Vertraut von Creatorn, Tradern & Unternehmern weltweit</p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((n) => (
                    <img
                      key={n}
                      src={`/assets/avatar-${n}.png`}
                      alt={`Aurion Community ${n}`}
                      className="h-14 w-14 rounded-full border-2 border-aurion-bg object-cover shadow-[0_0_25px_rgba(45,148,255,.14)]"
                    />
                  ))}
                </div>
                <div>
                  <div className="tracking-widest text-yellow-300">★★★★★</div>
                  <p className="text-sm text-white/65">AI-Insights, Tools & Systeme für moderne digitale Brands</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.6rem] bg-[radial-gradient(circle_at_60%_40%,rgba(193,46,255,.18),transparent_30%),radial-gradient(circle_at_30%_70%,rgba(45,148,255,.14),transparent_26%)] blur-2xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#090D1A] shadow-card">
              <img src="/assets/hero-aurion-futures.png" alt="Aurion Futures Hero" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,9,20,.12),rgba(6,9,20,0)_35%)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#050814]/65 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="mb-5 text-center text-xs font-bold uppercase tracking-[0.28em] text-white/50">Featured in & vertraut von</p>
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

      <section id="vorteile" className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))] p-3 shadow-card backdrop-blur">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[1.4rem] border border-white/8 bg-[#0B1022]/90 p-7 transition hover:border-white/15 hover:bg-[#0E1430]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-aurion-purple to-aurion-blue text-2xl font-black shadow-glow">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-extrabold tracking-[-0.02em]">{benefit.title}</h3>
                <p className="mt-3 leading-7 text-white/68">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tools" className="mx-auto max-w-7xl px-5 pb-8 lg:px-8">
        <div className="rounded-[2rem] border border-white/10 bg-[#0B1022]/78 p-6 shadow-card backdrop-blur md:p-8">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-white/50">Handverlesen. Getestet. Empfohlen.</span>
              <h2 className="mt-2 text-3xl font-black tracking-[-0.035em] md:text-4xl">Die besten AI Tools für deinen Erfolg</h2>
              <p className="mt-2 text-white/64">Nur Tools, die wir selbst nutzen, testen und uneingeschränkt empfehlen.</p>
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
                  Mehr erfahren <ArrowIcon />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <a href="#" className="inline-flex items-center gap-3 rounded-xl border border-aurion-purple/40 bg-white/[.03] px-6 py-4 text-sm font-extrabold text-white transition hover:border-aurion-purple hover:bg-white/[.06]">
              Alle Tools entdecken <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="ueber-uns" className="mx-auto max-w-7xl px-5 pb-10 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(13,18,39,.98),rgba(14,17,32,.88))] p-8 shadow-card md:p-10">
          <div className="grid gap-8 md:grid-cols-[1fr_.85fr] md:items-center">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-white/18 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">Wachse mit uns</span>
              <h2 className="text-4xl font-black tracking-[-0.05em]">Tägliche AI-Insights & exklusive Tipps</h2>
              <p className="mt-3 max-w-xl text-lg text-white/78">
                Folge uns auf TikTok und bleibe bei Tools, Automatisierung und digitalem Wachstum immer einen Schritt voraus.
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
                Folge uns auf TikTok
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050814] py-12">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1.25fr_.8fr_.8fr_.8fr_.9fr] lg:px-8">
          <div>
            <img src="/assets/aurion-futures-logo.svg" alt="Aurion Futures" className="h-14 w-auto" />
            <p className="mt-5 max-w-sm leading-7 text-white/62">Dein Hub für die besten AI Tools, Automatisierungssysteme und digitale Einkommensmöglichkeiten.</p>
            <p className="mt-8 text-sm text-white/42">© 2026 Aurion Futures. Alle Rechte vorbehalten.</p>
          </div>

          <FooterColumn title="Navigation" links={footerLinks.navigation} />
          <FooterColumn title="Kategorien" links={footerLinks.kategorien} />
          <FooterColumn title="Rechtliches" links={footerLinks.rechtliches} />

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">Folge uns</h3>
            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[.04] p-4 transition hover:border-aurion-purple hover:bg-white/[.06]">
              <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[.06] text-lg font-black">♫</div>
              <div>
                <p className="text-sm font-extrabold">TikTok</p>
                <p className="text-sm text-white/60">Tägliche Tipps, Tools & Insights rund um AI.</p>
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
