/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   "Signal A" — a minimal, flat, premium SaaS monogram (Linear / Vercel grade):
     • geometric "A"  — one bold off-white silhouette, sharp miter apex
     • forward cut    — a single flat amber crossbar; the negative-space
                        triangle above it reads as a hidden upward arrow (ascent)
   FLAT colours only — off-white #F8FAFC + amber #F4B740. No gradients, no
   orbit, no node, no star, no 3D. Strong silhouette down to 16px.

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/apple-icon, app/opengraph-image) as a data
   URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <g fill="none" stroke-linecap="round" stroke-linejoin="miter">
    <path d="M10.5 40 L24 8.5 L37.5 40" stroke="#F8FAFC" stroke-width="6"/>
    <path d="M17.4 29 H30.6" stroke="#F4B740" stroke-width="5"/>
  </g>
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
