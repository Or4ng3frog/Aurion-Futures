# Aurion Futures — Affiliate Landing Page

A premium, editorial Next.js 14 landing page for marketing AI tools as an affiliate.
Designed to convert cold traffic from YouTube, TikTok and Instagram.

## Design
- **Aesthetic:** warm editorial "curator's desk" — paper + ink, single burnt-amber accent.
- **Fonts:** Fraunces (display serif) + Manrope (body), self-hosted via `@fontsource`
  (no runtime Google Fonts dependency — faster, GDPR-friendlier).
- Light theme across homepage and all legal pages.

## Local start
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## >>> Where to add your affiliate links <<<
Open `app/page.tsx`. Near the top is the `tools` array — the single source of truth.
Each entry has an `affiliateUrl` field set to `'#'`. Replace it with your real
partner/referral link:

```ts
{
  name: 'Synthesia',
  domain: 'synthesia.io',     // also drives the auto-loaded brand logo + visible URL
  category: 'Video',
  blurb: '...',
  verdict: '...',
  tag: "Editor's pick",       // optional ribbon
  affiliateUrl: 'https://YOUR-AFFILIATE-LINK'   // <-- edit this
}
```

To add/remove a tool, just add/remove an object in the array — the logo strip,
filter pills and grid all update automatically.

### Brand logos
Logos load automatically from each tool's `domain` via Google's favicon service —
no image files to manage. Change the `domain` and the logo follows.

### Social channels
In the "Follow along" section, edit the three `SocialButton` hrefs
(YouTube / TikTok / Instagram) with your channel URLs. Same in the footer if added.

### Affiliate links use `rel="sponsored noopener noreferrer"` and `target="_blank"`
This is correct SEO/compliance practice for affiliate links — leave it as is.

## Legal / compliance (important for DE / UWG)
- A visible **"Werbung / Affiliate"** disclosure bar sits directly under the header,
  plus a footer note — both link to `/affiliate-disclosure`.
- Legal pages live in `app/imprint`, `app/privacy-policy`, `app/disclaimer`,
  `app/affiliate-disclosure`, `app/terms-of-use`. Fill these with your real details
  (Impressum, Datenschutz) before launch — ideally lawyer-reviewed.

## Deployment
Push to GitHub → import into Vercel as a Next.js project. No env vars required.

## Unused legacy assets
The old purple 3D clip-art (`benefit-*`, `hero-*`, `cta-tiktok-*`) remains in
`public/assets/` but is no longer referenced. Safe to delete if you want a leaner repo.
