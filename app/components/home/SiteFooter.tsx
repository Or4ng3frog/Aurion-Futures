import { footerLinks } from '../../lib/home-content';
import Logo from '../Logo';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/10 bg-night-800/60">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[1.6fr_.8fr_.8fr]">
          <div>
            <a href="/" aria-label="Aurion Future home" className="inline-flex">
              <Logo markClass="h-10 w-10" wordClass="text-xl" />
            </a>
            <p className="mt-4 max-w-sm leading-7 text-slate-400">
              A premium AI stack intelligence platform — we test, compare and recommend
              the AI tools worth your time, for creators, traders and founders building
              what is next.
            </p>
            <p className="mt-6 max-w-sm text-xs leading-relaxed text-slate-500">
              Aurion Future contains affiliate links. We may earn a commission on
              purchases made through them, at no additional cost to you.
            </p>
          </div>

          <FooterColumn title="Explore" links={footerLinks.navigation} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>© {year} Aurion Future. All rights reserved.</p>
          <p className="font-display italic text-slate-400">Curated with intent.</p>
        </div>
      </div>
    </footer>
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
      <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{title}</h3>
      <ul className="space-y-2.5 text-sm text-slate-300">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="transition hover:text-gold">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
