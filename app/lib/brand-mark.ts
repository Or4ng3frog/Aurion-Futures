/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   "Aurion Peak" — a premium, minimal AI-OS monogram:
     • geometric "A"  — two bold, sharp miter-jointed bars + a clean crossbar
                        (heavy weight so it survives at 16px favicon size)
     • peak / ascent  — the upward apex reads as future / forward momentum
     • intelligence   — a single luminous node crowning the apex (no star, no swoosh)
   Restrained gold + off-white only — elegant, trustworthy, software-grade.

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/apple-icon, app/opengraph-image) as a data
   URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <defs>
    <linearGradient id="afg" x1="12" y1="10" x2="35" y2="40" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FBD27E"/><stop offset=".5" stop-color="#F4B740"/><stop offset="1" stop-color="#C77B2B"/>
    </linearGradient>
    <radialGradient id="afn" cx=".5" cy=".4" r=".62">
      <stop stop-color="#FFF6E2"/><stop offset="1" stop-color="#F4B740"/>
    </radialGradient>
    <radialGradient id="afglow" cx=".5" cy=".5" r=".5">
      <stop stop-color="#F4B740" stop-opacity=".5"/><stop offset="1" stop-color="#F4B740" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <g stroke="url(#afg)" fill="none" stroke-linecap="round" stroke-linejoin="miter">
    <path d="M11.5 39.5 L24 11 L36.5 39.5" stroke-width="6"/>
    <path d="M17.8 28 H30.2" stroke-width="5"/>
  </g>
  <circle cx="24" cy="11" r="6.5" fill="url(#afglow)"/>
  <circle cx="24" cy="11" r="3.4" fill="url(#afn)"/>
</svg>`;
}

/* Convenience: a ready-to-embed data URI of the transparent mark. */
export function brandMarkDataUri(size = 48): string {
  return `data:image/svg+xml;utf8,${encodeURIComponent(brandMarkSvg(size))}`;
}

/* Brand colours reused by the generated icon backgrounds. */
export const BRAND = {
  ink: '#070A14',
  inkRaise: '#18223C',
  gold: '#F4B740',
  cyan: '#54D4F0',
  text: '#F8FAFC',
  muted: '#94A3B8'
} as const;
