import { tools, logoFor } from '../../lib/tools';
import { trustLogos } from '../../lib/home-content';
import { Reveal } from './motion';

const strip = trustLogos
  .map((slug) => tools.find((t) => t.slug === slug))
  .filter((t): t is (typeof tools)[number] => Boolean(t));

export default function LogoStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-white/[0.015]">
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Reveal>
          <p className="text-center text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
            The software we test, compare &amp; trust
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            {strip.map((t) => (
              <div
                key={t.slug}
                className="group inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                <img
                  src={logoFor(t.domain)}
                  alt=""
                  loading="lazy"
                  className="h-5 w-5 rounded opacity-90 transition group-hover:opacity-100"
                />
                <span className="text-sm font-medium text-slate-200">{t.name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
