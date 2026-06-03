/* ==========================================================================
   AURION FUTURE — brand mark (single source of truth for generated assets).
   A bold, premium AI-OS monogram:
     • abstract "A"   — two thick rising legs + crossbar (survives at 16px)
     • orbit          — a confident swoosh sweeping under the A (future motion)
     • AI node        — a solid luminous node at the apex (not a star)
     • accent node    — one small cyan node on the orbit (subtle intelligence cue)

   `brandMarkSvg()` returns a standalone, transparent SVG string. It is consumed
   by the Next.js metadata routes (app/icon, app/apple-icon, app/opengraph-image)
   as a data URI so every generated icon matches the on-page <BrandMark> exactly.
   ========================================================================== */

export function brandMarkSvg(size = 48): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 48 48" fill="none">
  <defs>
    <linearGradient id="afg" x1="11" y1="8" x2="38" y2="40" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FBD27E"/><stop offset=".5" stop-color="#F4B740"/><stop offset="1" stop-color="#C77B2B"/>
    </linearGradient>
    <radialGradient id="afn" cx=".5" cy=".4" r=".6">
      <stop stop-color="#FFEFC6"/><stop offset="1" stop-color="#F4B740"/>
    </radialGradient>
    <radialGradient id="afglow" cx=".5" cy=".5" r=".5">
      <stop stop-color="#F4B740" stop-opacity=".55"/><stop offset="1" stop-color="#F4B740" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <path d="M8 31 Q24 45 40 31" fill="none" stroke="url(#afg)" stroke-width="2.6" stroke-linecap="round" opacity=".6"/>
  <circle cx="40" cy="31" r="2.6" fill="#54D4F0"/>
  <path d="M13 38 L24 12 L35 38" fill="none" stroke="url(#afg)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M18.6 28.5 H29.4" fill="none" stroke="url(#afg)" stroke-width="4" stroke-linecap="round"/>
  <circle cx="24" cy="11.5" r="6" fill="url(#afglow)"/>
  <circle cx="24" cy="11.5" r="3.6" fill="url(#afn)"/>
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
