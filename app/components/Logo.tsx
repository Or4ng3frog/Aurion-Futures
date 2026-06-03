/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   "Future Gate" monogram (kept in sync with app/lib/brand-mark.ts):
     • two pillars + a peaked roof form a gateway / portal
     • the peaked doorway cut from the centre is a forward-facing path
     • only subtly references the letter "A" (the peak) — not a literal A
   Flat off-white only — monochrome, no gradients, no amber, no 3D, no thin
   lines. Inline SVG so it stays crisp from a 16px favicon to the footer lockup.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      {/* gateway frame (pillars + peaked roof) with a peaked doorway cut out */}
      <path
        fill="#F8FAFC"
        fillRule="evenodd"
        d="M8 41 L8 18 L24 7 L40 18 L40 41 Z M17 41 L17 27 L24 19 L31 27 L31 41 Z"
      />
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
