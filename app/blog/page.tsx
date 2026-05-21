export default function BlogPage() {
  return (
    <main className="legal-shell text-ink">
      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-semibold text-ink2 transition hover:text-amber">
          <span aria-hidden="true">←</span>
          <span className="font-display text-base">Aurion Futures</span>
        </a>
        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-ink3">
            Journal
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Journal coming soon</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink2">
            Honest reviews, side-by-side comparisons and practical guides for AI tools,
            automation and digital growth — published here as we test them.
          </p>
        </section>
      </div>
    </main>
  );
}
