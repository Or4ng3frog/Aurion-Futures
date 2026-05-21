export default function ContactPage() {
  return (
    <main className="legal-shell text-ink">
      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-semibold text-ink2 transition hover:text-amber">
          <span aria-hidden="true">←</span>
          <span className="font-display text-base">Aurion Futures</span>
        </a>
        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-line bg-paper px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-ink3">
            Contact
          </span>
          <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">Let’s connect</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-ink2">
            Want to suggest a tool, explore a collaboration, or work together on something?
            Reach out — we read everything.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-display text-xl font-semibold text-ink">Email</h2>
              <p className="mt-3 text-ink2">hello@aurionfutures.com</p>
            </div>
            <div className="rounded-2xl border border-line bg-paper p-6">
              <h2 className="font-display text-xl font-semibold text-ink">Social</h2>
              <p className="mt-3 text-ink2">Find the latest tool breakdowns via the channels linked on the homepage.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
