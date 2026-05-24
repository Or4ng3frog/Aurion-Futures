# Aurion Futures — Affiliate Landing Page

A premium, editorial Next.js 14 landing page for marketing AI tools as an affiliate.
Built to convert cold traffic from YouTube, TikTok and Instagram.

## Design
- Warm editorial "curator's desk" aesthetic — paper + ink, single burnt-amber accent.
- Fonts: Fraunces (display serif) + Manrope (body), self-hosted via `@fontsource`
  (no runtime Google Fonts dependency — faster & GDPR-friendlier).
- Light theme across the homepage, tool reviews and all legal pages. English throughout.

## Start
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## >>> Tools & affiliate links — ONE file <<<
Everything about the tools lives in **`app/lib/tools.ts`**.
The homepage grid, the logo strip, and each `/tools/<slug>` review page all read from it.

Each tool has a `url` field — currently the **normal website link**. Replace it with your
affiliate / referral link later; nothing else changes. Affiliate links already carry
`rel="sponsored noopener noreferrer"` and open in a new tab (correct SEO/compliance).

Each tool also defines the three honest signals shown on every card and review page:
- `bestFor`  — who/what it's best for
- `whyWeUse` — the honest reason we recommend it
- `watchOut` — the honest drawback

Plus full review content: `rating`, `pricingFrom`, `verdict`, `pros[]`, `cons[]`,
`review[]` (paragraphs), `useCases[]`. To add a tool, copy an object in the array and
fill it in — the card, filter pills, logo strip and a new `/tools/<slug>` page all appear
automatically.

### Brand logos
Logos load automatically from each tool's `domain` via Google's favicon service —
no image files to manage. (In an offline preview they show as placeholders; in a real
browser they render the actual brand logos.)

## Pages
- `/`                      homepage (hero, shortlist, principles, social CTA)
- `/tools/<slug>`          full review per tool (synthesia, elevenlabs, pictory, writesonic, framer, make)
- `/blog`, `/contact`      placeholders, styled
- Legal: `/imprint`, `/privacy-policy`, `/disclaimer`, `/affiliate-disclosure`, `/terms-of-use`

## Before launch — please verify
- **Legal pages** are fully written to common German standards (Imprint per § 5 DDG,
  GDPR privacy policy, UWG-compliant affiliate disclosure, disclaimer, terms) with your
  details: Dennis Klahn, Theresenstraße 36, 28203 Bremen, info@aurionfuture.com.
  These are solid drafts — for full legal certainty, have them reviewed by a lawyer.
- **Social links**: edit the three `SocialButton` hrefs in `app/page.tsx` (YouTube /
  TikTok / Instagram) with your channel URLs.
- **Domain/email**: the imprint and contact use `info@aurionfuture.com`. Confirm it's live.

## Social-traffic disclosure (UWG)
A visible "Advertising / Affiliate" bar sits under the header and links to the full
disclosure; the footer repeats the note. This is the labelling German law expects when
driving paid/affiliate traffic from social channels.

## Deployment
Push to GitHub → import into Vercel as a Next.js project. No env vars required.

## Legacy assets
Old purple 3D clip-art (`benefit-*`, `hero-*`, `cta-*`) remains in `public/assets/` but
is unused. Safe to delete for a leaner repo.

## SEO, sitemap, OG images (added)
- **Per-page metadata**: title template, description, canonical URL, robots directives,
  Open Graph + Twitter card on every page. Homepage/site-wide config in `app/lib/site.ts`.
  >>> Set `site.url` in `app/lib/site.ts` to your real production domain before launch. <<<
- **Sitemap**: generated at `/sitemap.xml` (app/sitemap.ts) — includes all tool pages automatically.
- **robots.txt**: generated at `/robots.txt` (app/robots.ts), references the sitemap.
- **Structured data**: each tool page emits Review JSON-LD for rich search results.
- **Open Graph images**:
  - Homepage: `public/og-image.png` (1200x630)
  - Per tool: `public/og/tools/<slug>.png` — branded card with rating + price.
  - To regenerate after editing tools, the generator script logic lives in the build notes;
    the PNGs are committed so you don't need to rebuild them to deploy.
- **Favicon**: redesigned to match the new editorial look (amber "A" monogram on warm ink).
  Files in `public/` (favicon.ico, favicon.svg, apple-touch-icon.png, site.webmanifest)
  and `public/assets/aurion-favicon-*.png`.

## Tools (now 7)
Synthesia, ElevenLabs, Pictory, Writesonic, AdCreative.ai (Ads), Framer, Make.
All in `app/lib/tools.ts`. Each has its own `/tools/<slug>` review page and OG image.


## Update — launch-ready changes
- **Brand name** is now "Aurion Future" everywhere (was "Aurion Futures").
- **Favicon** redesigned: refined amber "A" with serif apex + baseline accent, matching the
  site. Files in `public/` and `public/assets/`. NOTE: if the old purple icon still shows in
  a browser tab after deploy, it's cached — hard-refresh or wait for the CDN to update.
- **Affiliate links via Short.io**: each tool in `app/lib/tools.ts` has a `shortUrl` field with
  a `https://YOUR.short.io/...` placeholder. Paste your real Short.io link there; the site uses
  it automatically for clicks (falls back to the website `url` until you do). Create/track/swap
  links in Short.io anytime — no code changes. The `url` field stays as the real destination
  (used for SEO/structured data).
- **Google Analytics (GA4)**: ID `G-0WD6TJD30W` is wired into `app/layout.tsx`.
  NOTE on DSGVO: GA currently loads on page load. For strict German consent compliance you may
  want to gate it behind the cookie banner's consent — your Privacy Policy already discloses
  analytics. Ask a lawyer if unsure.
- **Social links**: TikTok first → `@aurion.future`, then YouTube `@aurion.future`, then
  Instagram `aurion.future`. Edit hrefs in `app/page.tsx` if handles change.
- **"Upcoming on the channel"**: the homepage panel now says "Coming next / Upcoming on the
  channel" since the videos don't exist yet. Edit the list items in `app/page.tsx`.
- **Journal (3 SEO articles)**: live at `/blog` with full article pages at `/blog/<slug>`,
  Article JSON-LD, OG and canonical. Content in `app/lib/posts.ts` — add a post by appending
  to the array. Titles target real search intent (best AI voiceover tool 2026, faceless content
  with AI, AI tools that replaced my content team).
- Blog posts are included in the sitemap automatically.

## Adding a video to the homepage (when ready)
When you have your intro video, the cleanest spot is the hero or the "Follow along" section.
Drop an MP4 in `public/` and embed a `<video controls poster="/og-image.png">` tag, or paste a
YouTube embed. Tell me and I'll wire it in.


## Final update — hero asset, real links, cleanup
- **Hero illustration**: the generated showcase image (`public/assets/hero-showcase.png`) is now
  the hero visual on the homepage, with floating "7 tools, hand-picked" and "Idea → Build → Launch"
  badges and a soft amber glow. The old testimonial card moved to a dedicated centered quote band
  between the shortlist and the principles section (social proof preserved).
- **Affiliate links are LIVE**: each tool now points to its real go.aurionfuture.com redirect
  (e.g. go.aurionfuture.com/synthesia). Manage/track them in your Short.io dashboard. To change
  one, edit `shortUrl` in app/lib/tools.ts.
- **"Upcoming on the channel"**: fixed the redundant double label — now one clean header with a
  small "Soon" pill.

The site is launch-ready. When you want to swap the hero illustration or add a video later,
replace `public/assets/hero-showcase.png` or tell me and I'll wire in a video embed.
