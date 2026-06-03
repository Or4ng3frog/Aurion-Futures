/* ==========================================================================
   AURION FUTURE — brand mark + wordmark lockup.
   "Ascending Path" monogram (kept in sync with app/lib/brand-mark.ts):
     • a bold off-white chevron (open peak) — direction / momentum
     • a smaller amber chevron nested inside — a forward / ascending path
     • only subtly references the letter "A" (the peak) — not a literal A
   Flat fills only — no gradients, no orbit, no node, no 3D, no thin lines.
   Inline SVG so it stays crisp from a 16px favicon to the footer lockup.
   ========================================================================== */

export function BrandMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-hidden="true" fill="none">
      {/* bold off-white chevron */}
      <path fill="#F8FAFC" d="M7 41 L24 12 L41 41 L32 41 L24 25 L16 41 Z" />
      {/* nested amber chevron — the ascending path */}
      <path fill="#F4B740" d="M21 40 L24 33 L27 40 Z" />
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
