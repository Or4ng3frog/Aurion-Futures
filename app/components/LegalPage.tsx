type LegalPageProps = {
  title: string;
  intro: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, intro, children }: LegalPageProps) {
  return (
    <main className="legal-shell text-white">
      <div className="mx-auto max-w-5xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-white">
          <img src="/assets/aurion-mark.svg" alt="Aurion Futures" className="h-8 w-8" />
          Back to Aurion Futures
        </a>

        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">
            Legal
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/76">{intro}</p>
          <div className="legal-copy mt-8 text-base">{children}</div>
        </section>
      </div>
    </main>
  );
}
