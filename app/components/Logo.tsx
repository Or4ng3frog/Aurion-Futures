/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   "Aurion Peak" monogram (kept in sync with app/lib/brand-mark.ts):
     • geometric "A"  — two bold, sharp miter-jointed bars + a clean crossbar
     • peak / ascent  — the upward apex reads as future / forward momentum
     • intelligence   — a single luminous node crowning the apex
   Pure inline SVG — crisp, scalable, lightweight, no external image deps.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="af-gold" x1="12" y1="10" x2="35" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBD27E" />
          <stop offset="0.5" stopColor="#F4B740" />
          <stop offset="1" stopColor="#C77B2B" />
        </linearGradient>
        <radialGradient id="af-node" cx="0.5" cy="0.4" r="0.62">
          <stop stopColor="#FFF6E2" />
          <stop offset="1" stopColor="#F4B740" />
        </radialGradient>
        <radialGradient id="af-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#F4B740" stopOpacity="0.5" />
          <stop offset="1" stopColor="#F4B740" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* geometric "A" — bold bars + clean crossbar */}
      <g stroke="url(#af-gold)" fill="none" strokeLinecap="round" strokeLinejoin="miter">
        <path d="M11.5 39.5 L24 11 L36.5 39.5" strokeWidth="6" />
        <path d="M17.8 28 H30.2" strokeWidth="5" />
      </g>

      {/* intelligence node crowning the apex — glow + solid node */}
      <circle cx="24" cy="11" r="6.5" fill="url(#af-glow)" />
      <circle cx="24" cy="11" r="3.4" fill="url(#af-node)" />
    </svg>
  );
}

/* Lockup: mark + wordmark. Used in header & footer.
   Wordmark is a tight geometric sans (software-grade), split off-white / gold. */
export default function Logo({
  markClass = 'h-10 w-10',
  wordClass = 'text-xl'
}: {
  markClass?: string;
  wordClass?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark className={markClass} />
      <span
        className={`font-sans font-semibold leading-none tracking-[-0.01em] text-slate-50 ${wordClass}`}
      >
        Aurion<span className="text-gradient-gold">&nbsp;Future</span>
      </span>
    </span>
  );
}
