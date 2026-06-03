/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   "Ascending Path" — a minimal, flat, premium abstract mark:
     • a bold off-white chevron (open peak) — direction / momentum
     • a smaller amber chevron nested inside — a forward / ascending path
     • only subtly references the letter "A" (the peak) — not a literal A
   FLAT fills only — off-white #F8FAFC + amber #F4B740. No gradients, no orbit,
   no node, no star, no 3D, no thin lines. Strong silhouette on dark, to 16px.

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/apple-icon, app/opengraph-image) as a data
   URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <path fill="#F8FAFC" d="M7 41 L24 12 L41 41 L32 41 L24 25 L16 41 Z"/>
  <path fill="#F4B740" d="M21 40 L24 33 L27 40 Z"/>
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
