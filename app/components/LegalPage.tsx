type LegalPageProps = {
  title: string;
  intro: string;
  lastUpdated?: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, intro, lastUpdated, children }: LegalPageProps) {
  return (
    <main className="legal-shell text-ink">
      <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-semibold text-ink2 transition hover:text-amber">
          <span aria-hidden="true">&larr;</span>
          <span className="font-display text-base">Aurion Future</span>
        </a>

        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-ink3">
            Legal
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink2">{intro}</p>
          {lastUpdated && (
            <p className="mt-3 text-sm text-ink3">Last updated: {lastUpdated}</p>
          )}
          <div className="legal-copy mt-8 text-base">{children}</div>
        </section>
      </div>
    </main>
  );
}
