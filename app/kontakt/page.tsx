export default function KontaktPage() {
  return (
    <main className="legal-shell text-white">
      <div className="mx-auto max-w-4xl px-5 py-10 lg:px-8 lg:py-14">
        <a href="/" className="mb-8 inline-flex items-center gap-3 text-sm font-bold text-white/70 transition hover:text-white">
          <img src="/assets/aurion-mark.svg" alt="Aurion Futures" className="h-8 w-8" />
          Zurück zu Aurion Futures
        </a>
        <section className="legal-card rounded-[2rem] p-7 md:p-10">
          <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-white/80">
            Kontakt
          </span>
          <h1 className="mt-5 text-4xl font-black tracking-[-0.04em] md:text-5xl">Lass uns sprechen</h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/76">
            Du möchtest ein Tool empfehlen, eine Kooperation anfragen oder Aurion Futures für dein Projekt nutzen? Dann melde dich gerne.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-extrabold">E-Mail</h2>
              <p className="mt-3 text-white/70">hello@aurionfutures.com</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[.03] p-6">
              <h2 className="text-xl font-extrabold">TikTok</h2>
              <p className="mt-3 text-white/70">Nutze den TikTok-Link auf der Startseite für aktuelle AI-Insights und Updates.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
