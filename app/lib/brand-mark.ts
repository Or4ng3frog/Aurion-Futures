/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   "Apex / Forward Cut" — a minimal, flat, premium SaaS monogram:
     • geometric "A"  — one bold, solid off-white silhouette (apex + legs +
                        crossbar), unmistakable down to 16px
     • forward cut    — the enclosed counter is a single amber upward arrowhead,
                        a hidden forward / progress / signal cue inside the A
   FLAT fills only — off-white #F8FAFC + amber #F4B740. No gradients, no orbit,
   no node, no star, no 3D, no thin lines. Strong silhouette on dark.

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/apple-icon, app/opengraph-image) as a data
   URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <path fill="#F8FAFC" fill-rule="evenodd" d="M24 5.5 L42 42 L33 42 L27 34 L21 34 L15 42 L6 42 Z M24 16 L30 30 L24 26 L18 30 Z"/>
  <path fill="#F4B740" d="M24 16 L30 30 L24 26 L18 30 Z"/>
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
