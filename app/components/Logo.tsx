/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   "Apex / Forward Cut" monogram (kept in sync with app/lib/brand-mark.ts):
     • geometric "A"  — one bold, solid off-white silhouette (apex + legs + bar)
     • forward cut    — the enclosed counter is an amber upward arrowhead, a
                        hidden forward / progress / signal cue inside the A
   Flat fills only — no gradients, no orbit, no node, no 3D, no thin lines.
   Inline SVG so it stays crisp from a 16px favicon to the footer lockup.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      {/* solid A with the counter cut out */}
      <path
        fill="#F8FAFC"
        fillRule="evenodd"
        d="M24 5.5 L42 42 L33 42 L27 34 L21 34 L15 42 L6 42 Z M24 16 L30 30 L24 26 L18 30 Z"
      />
      {/* amber forward arrowhead filling the counter */}
      <path fill="#F4B740" d="M24 16 L30 30 L24 26 L18 30 Z" />
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
