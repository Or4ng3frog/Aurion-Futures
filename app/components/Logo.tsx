/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   "Signal A" monogram (kept in sync with app/lib/brand-mark.ts):
     • geometric "A"  — one bold off-white silhouette, sharp miter apex
     • forward cut    — a single flat amber crossbar; the negative space above
                        it reads as a hidden upward arrow (ascent / forward)
   Flat colours only — no gradients, no orbit, no node, no 3D. Inline SVG so it
   stays crisp and lightweight from a 16px favicon to the footer lockup.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      <g fill="none" strokeLinecap="round" strokeLinejoin="miter">
        <path d="M10.5 40 L24 8.5 L37.5 40" stroke="#F8FAFC" strokeWidth="6" />
        <path d="M17.4 29 H30.6" stroke="#F4B740" strokeWidth="5" />
      </g>
    </svg>
  );
}

/* Lockup: mark + wordmark. Used in header & footer.
   Clean geometric sans, split off-white "Aurion" / flat amber "Future". */
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
        Aurion<span className="text-gold">&nbsp;Future</span>
      </span>
    </span>
  );
}
