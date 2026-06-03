import Shell from './Shell';

type LegalPageProps = {
  title: string;
  intro: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, intro, lastUpdated, children }: LegalPageProps) {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
        <p className="eyebrow text-xs font-semibold uppercase tracking-[0.28em] text-gold">Legal</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-slate-50 md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">{intro}</p>
        {lastUpdated && <p className="mt-3 text-sm text-slate-500">Last updated: {lastUpdated}</p>}

        <div className="glass border-glow prose-dark mt-10 rounded-3xl p-7 md:p-10">
          {children}
        </div>
      </div>
    </Shell>
  );
}
