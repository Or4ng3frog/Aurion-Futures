/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   "Future Gate" — a minimal, flat, premium abstract mark:
     • two pillars + a peaked roof form a gateway / portal
     • the peaked doorway cut from the centre is a forward-facing path
     • only subtly references the letter "A" (the peak) — not a literal A
   FLAT off-white #F8FAFC only — monochrome, no gradients, no amber, no orbit,
   no node, no star, no 3D, no thin lines. Strong silhouette on dark, to 16px.

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/apple-icon, app/opengraph-image) as a data
   URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <path fill="#F8FAFC" fill-rule="evenodd" d="M8 41 L8 18 L24 7 L40 18 L40 41 Z M17 41 L17 27 L24 19 L31 27 L31 41 Z"/>
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
