import type { Metadata } from 'next';
import { Mail, Share2, ArrowUpRight } from 'lucide-react';
import Shell from '../components/Shell';
import { socials } from '../lib/home-content';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Aurion Future — suggest a tool, explore a collaboration, or ask a question.',
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
        <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-gold">Contact</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
          Let’s <span className="text-gradient-gold">connect.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
          Want to suggest a tool, explore a collaboration, or work together on something?
          Reach out — we read everything.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <a
            href="mailto:info@aurionfuture.com"
            className="glass border-glow group flex flex-col rounded-2xl p-7 transition hover:bg-white/[0.05]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
              <Mail className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-slate-50">Email</h2>
            <p className="mt-2 text-slate-400">info@aurionfuture.com</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
              Write to us
              <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </a>

          <div className="glass border-glow flex flex-col rounded-2xl p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl border border-iris/30 bg-iris/10 text-iris">
              <Share2 className="h-5 w-5" />
            </span>
            <h2 className="mt-5 font-display text-xl font-semibold text-slate-50">Social</h2>
            <p className="mt-2 text-slate-400">
              Catch the latest tool breakdowns as they drop.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-slate-200 transition hover:border-white/25 hover:bg-white/[0.06]"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Shell>
  );
}
