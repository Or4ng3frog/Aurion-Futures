/* ==========================================================================
   AURION FUTURE — brand mark.
   A premium monogram that fuses three ideas:
     • "A" / Aurion        — two rising legs that culminate in a peak
     • future / forward    — the crossbar becomes a forward-pointing arrow
     • AI spark / aurora   — a luminous spark at the apex + an orbiting aurora ring
   Pure inline SVG, currentColor-free (uses scoped gradients), so it scales
   crisply from a 16px favicon to a 64px footer mark with no raster assets.
   ========================================================================== */

export function BrandMark({ className = 'h-9 w-9' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="af-gold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#FBD27E" />
          <stop offset="0.5" stopColor="#F4B740" />
          <stop offset="1" stopColor="#C77B2B" />
        </linearGradient>
        <linearGradient id="af-aurora" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop stopColor="#7C8BFF" />
          <stop offset="1" stopColor="#54D4F0" />
        </linearGradient>
        <radialGradient id="af-spark" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#FFF3D6" />
          <stop offset="1" stopColor="#F4B740" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* orbiting aurora ring — open arc, cool accent */}
      <ellipse
        cx="24"
        cy="27.5"
        rx="20"
        ry="8.4"
        transform="rotate(-24 24 27.5)"
        stroke="url(#af-aurora)"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeDasharray="62 34"
        opacity="0.72"
      />

      {/* the "A" — two rising legs to a peak */}
      <path
        d="M13.5 39 L24 10.5 L34.5 39"
        stroke="url(#af-gold)"
        strokeWidth="3.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* forward-motion arrow replacing the A crossbar */}
      <path
        d="M17.4 30 H27 M24 26.5 L29.6 30 L24 33.5"
        stroke="url(#af-gold)"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* AI spark at the apex — glow + four-point star */}
      <circle cx="24" cy="9.5" r="6.5" fill="url(#af-spark)" />
      <path
        d="M24 5.2 L25.1 8.4 L28.3 9.5 L25.1 10.6 L24 13.8 L22.9 10.6 L19.7 9.5 L22.9 8.4 Z"
        fill="#FFF6E2"
      />
    </svg>
  );
}

/* Lockup: mark + wordmark. Used in header & footer. */
export default function Logo({
  markClass = 'h-9 w-9',
  wordClass = 'text-xl'
}: {
  markClass?: string;
  wordClass?: string;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <BrandMark className={markClass} />
      <span className={`font-display font-semibold tracking-tight text-slate-50 ${wordClass}`}>
        Aurion<span className="text-gradient-gold"> Future</span>
      </span>
    </span>
  );
}
