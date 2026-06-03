/* Decorative backdrop for the dark homepage.

   Two concerns, two layers:
   1. A FIXED dark base (radial field + grid) that covers the viewport at every
      scroll position. This guarantees the light global <body> background can
      never bleed through — e.g. while smooth-scrolling to an anchor like #stack.
   2. An ABSOLUTE orb layer that scrolls with the document for ambient depth.

   Both sit at -z-10 inside the isolated <main>, painting above the page's grain
   but below all content. Pure CSS animation — no JS, no hydration risk. */
export default function SiteBackground() {
  return (
    <>
      {/* 1 — always-on dark base, locked to the viewport */}
      <div aria-hidden="true" className="aurion-bg fixed inset-0 -z-10" />
      <div aria-hidden="true" className="aurion-grid fixed inset-0 -z-10" />

      {/* 2 — floating orbs, scrolling with the page (deterministic, SSR-safe) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="orb animate-floatXY left-[-8%] top-[-6%] h-[34rem] w-[34rem] bg-gold/20" />
        <div className="orb animate-floatY right-[-10%] top-[2%] h-[30rem] w-[30rem] bg-iris/20"
          style={{ animationDelay: '1.5s' }} />
        <div className="orb animate-floatXY left-[20%] top-[42%] h-[26rem] w-[26rem] bg-glow/12"
          style={{ animationDelay: '3s' }} />
        <div className="orb animate-floatY right-[6%] top-[68%] h-[28rem] w-[28rem] bg-iris/12"
          style={{ animationDelay: '0.8s' }} />
        <div className="orb animate-floatXY left-[8%] top-[88%] h-[26rem] w-[26rem] bg-gold/12"
          style={{ animationDelay: '2.2s' }} />
      </div>
    </>
  );
}
