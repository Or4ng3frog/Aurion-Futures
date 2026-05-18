export default function ContactPage() {
  return (
    <main className="legal-shell text-white">
      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-white">
          <img src="/assets/aurion-favicon.svg" alt="Aurion Futures" className="h-8 w-8" />
          Back to Aurion Futures
        </a>
        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">
            Contact
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Let’s connect</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">
            Want to suggest a tool, explore a collaboration or build something with Aurion Futures? Feel free to get in touch.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-extrabold">Email</h2>
              <p className="mt-3 text-white/70">hello@aurionfutures.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-extrabold">TikTok</h2>
              <p className="mt-3 text-white/70">Use the TikTok link on the homepage for current AI insights and updates.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
