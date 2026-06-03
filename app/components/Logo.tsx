/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   A bold, premium AI-OS monogram (kept in sync with app/lib/brand-mark.ts):
     • abstract "A"  — thick rising legs + crossbar, readable at favicon size
     • orbit swoosh  — forward / future motion sweeping under the A
     • AI node       — a solid luminous node at the apex (not a star)
     • cyan accent   — one small node on the orbit
   Pure inline SVG — crisp, scalable, lightweight, no external image deps.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="af-gold" x1="11" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBD27E" />
          <stop offset="0.5" stopColor="#F4B740" />
          <stop offset="1" stopColor="#C77B2B" />
        </linearGradient>
        <radialGradient id="af-node" cx="0.5" cy="0.4" r="0.6">
          <stop stopColor="#FFEFC6" />
          <stop offset="1" stopColor="#F4B740" />
        </radialGradient>
        <radialGradient id="af-glow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#F4B740" stopOpacity="0.55" />
          <stop offset="1" stopColor="#F4B740" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* orbit swoosh + cyan accent node */}
      <path d="M8 31 Q24 45 40 31" stroke="url(#af-gold)" strokeWidth="2.6" strokeLinecap="round" opacity="0.6" />
      <circle cx="40" cy="31" r="2.6" fill="#54D4F0" />

      {/* the "A" — bold legs + crossbar */}
      <path d="M13 38 L24 12 L35 38" stroke="url(#af-gold)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.6 28.5 H29.4" stroke="url(#af-gold)" strokeWidth="4" strokeLinecap="round" />

      {/* AI node at the apex — glow + solid node */}
      <circle cx="24" cy="11.5" r="6" fill="url(#af-glow)" />
      <circle cx="24" cy="11.5" r="3.6" fill="url(#af-node)" />
    </svg>
  );
}

/* Lockup: mark + wordmark. Used in header & footer. */
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
      <span className={`font-display font-semibold leading-none tracking-tight text-slate-50 ${wordClass}`}>
        Aurion<span className="text-gradient-gold">&nbsp;Future</span>
      </span>
    </span>
  );
}
