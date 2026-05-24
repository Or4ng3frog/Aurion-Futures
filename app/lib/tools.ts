/* ==========================================================================
   AURION FUTURES — single source of truth for every tool.
   The homepage grid, the logo strip, and each /tools/[slug] review page all
   read from this one array.

   >>> AFFILIATE / TRACKING LINKS (go.aurionfuture.com via Short.io) <<<
   Each tool has two link fields:
     - `url`       : the real destination website (kept for reference + SEO/JSON-LD)
     - `shortUrl`  : your go.aurionfuture.com tracking link. This is what users actually click.
   The site uses `shortUrl` when present, otherwise falls back to `url`.
   Manage/track/swap the redirects in your Short.io dashboard anytime, without code changes.
   ========================================================================== */

export type Category =
  | 'Content' | 'Video' | 'Voice' | 'Copywriting' | 'Website' | 'Automation' | 'Ads';

export type Tool = {
  slug: string;             // URL: /tools/<slug>
  name: string;
  domain: string;           // drives the auto-loaded brand logo + visible URL
  category: Category;
  url: string;              // real destination website (reference + SEO)
  shortUrl?: string;        // <-- YOUR Short.io tracking link; used for clicks when set
  tagline: string;          // short headline used on the review page hero
  blurb: string;            // one-liner on the card + listing
  rating: number;           // out of 5, one decimal
  pricingFrom: string;      // short price hint, e.g. "from $30/mo"
  // The three honest signals shown on every card:
  bestFor: string;
  whyWeUse: string;
  watchOut: string;
  tag?: string;             // optional ribbon, e.g. "Editor's pick"
  // Long-form review content (rendered on the detail page):
  verdict: string;          // 2–3 sentence summary
  pros: string[];
  cons: string[];
  review: string[];         // paragraphs
  useCases: string[];       // "great for…" bullets
};

export const tools: Tool[] = [
  {
    slug: 'synthesia',
    name: 'Synthesia',
    domain: 'synthesia.io',
    category: 'Video',
    url: 'https://www.synthesia.io/',
    shortUrl: 'https://go.aurionfuture.com/synthesia',
    tagline: 'Turn a script into a polished presenter video — no camera, no studio.',
    blurb: 'AI avatar videos for marketing, onboarding and sales — no camera required.',
    rating: 4.6,
    pricingFrom: 'from $18/mo',
    bestFor: 'Faceless channels, course intros and product explainers.',
    whyWeUse: 'It is the fastest path from a written script to a clean talking-head video we have found.',
    watchOut: 'Avatars still read as AI on close-ups — best for B-roll-heavy edits, not raw monologue.',
    tag: "Editor's pick",
    verdict:
      'Synthesia is the most production-ready AI video tool we tested. If your bottleneck is “I do not want to be on camera,” it removes that overnight — with the caveat that the avatars are convincing in motion but not yet flawless in tight shots.',
    pros: [
      'Huge library of avatars and 140+ languages',
      'Script-to-video workflow is genuinely fast',
      'Clean, brandable templates out of the box',
      'Reliable lip-sync and natural pacing'
    ],
    cons: [
      'Close-up shots still betray the AI origin',
      'Custom avatars sit behind higher tiers',
      'Less suited to high-energy, fast-cut content'
    ],
    review: [
      'Synthesia solves a very specific, very common problem: you have something to say but no desire (or time) to film yourself. You paste a script, pick a presenter, and a few minutes later you have a usable video.',
      'In practice the magic is the workflow, not any single feature. Iterating on a video is as cheap as editing text, which changes how you approach scripting entirely — you stop treating "record" as a costly, one-shot event.',
      'Where it shines is structured, informational content: course modules, onboarding clips, product walkthroughs and multilingual versions of the same message. Where it struggles is anything that lives on raw human energy.'
    ],
    useCases: [
      'Faceless YouTube and educational channels',
      'Localising one video into many languages',
      'Internal training and onboarding',
      'Product explainers and landing-page videos'
    ]
  },
  {
    slug: 'elevenlabs',
    name: 'ElevenLabs',
    domain: 'elevenlabs.io',
    category: 'Voice',
    url: 'https://elevenlabs.io/',
    shortUrl: 'https://go.aurionfuture.com/elevenlabs',
    tagline: 'The most natural AI voiceover we have heard — full stop.',
    blurb: 'Strikingly natural AI voiceover for shorts, podcasts and product demos.',
    rating: 4.8,
    pricingFrom: 'from $5/mo',
    bestFor: 'Voiceovers for shorts, narration and audiobook-style content.',
    whyWeUse: 'The voice quality is the single thing our audience asks us about most often.',
    watchOut: 'Cloning a voice well needs a clean sample — garbage in, garbage out.',
    verdict:
      'ElevenLabs is the rare AI tool that clears the "uncanny" bar. The voices breathe, pause and emphasise like a person, which makes it the default choice for any project where audio carries the message.',
    pros: [
      'Best-in-class naturalness and intonation',
      'Generous, usable free tier',
      'Fast voice cloning from short samples',
      'Strong multilingual support'
    ],
    cons: [
      'Cloning quality depends heavily on input audio',
      'Long-form generation can get pricey at scale',
      'Occasional odd emphasis on unusual words'
    ],
    review: [
      'Voice was, for years, the giveaway that something was machine-made. ElevenLabs is the tool that quietly retired that assumption. The output is good enough that listeners stop noticing it is synthetic.',
      'For creators the implication is huge: you can narrate shorts, demos and even long-form pieces without booking a booth or recording yourself. The free tier is generous enough to ship real projects before paying.',
      'The honest caveat is around cloning. A clean, dry sample produces an uncanny match; a noisy phone recording produces a mediocre one. Treat the input audio as the thing that matters most.'
    ],
    useCases: [
      'Voiceover for TikTok / Reels / Shorts',
      'Podcast intros and narration',
      'Audiobook and long-form reading',
      'Localised voiceovers in multiple languages'
    ]
  },
  {
    slug: 'pictory',
    name: 'Pictory',
    domain: 'pictory.ai',
    category: 'Video',
    url: 'https://pictory.ai/',
    shortUrl: 'https://go.aurionfuture.com/pictory',
    tagline: 'One long video in, a week of short clips out.',
    blurb: 'Cut long-form content into short, caption-ready clips in minutes.',
    rating: 4.3,
    pricingFrom: 'from $19/mo',
    bestFor: 'Repurposing long videos and blog posts into social clips.',
    whyWeUse: 'It is our go-to for turning a single recording into a week of posts.',
    watchOut: 'Auto-clip selection is a strong first draft, not a final cut — review before posting.',
    verdict:
      'Pictory is a repurposing engine. It will not replace an editor for hero content, but for volume — chopping a long video or article into many short, captioned clips — it saves hours every week.',
    pros: [
      'Fast long-form to short-form conversion',
      'Automatic captions and highlight detection',
      'Article-to-video works surprisingly well',
      'Low learning curve'
    ],
    cons: [
      'Auto clip selection needs human review',
      'Templates can feel generic without tweaking',
      'Not built for frame-perfect editing'
    ],
    review: [
      'The repurposing problem is real: you record once and then need a dozen pieces of content from it. Pictory automates the tedious first 80% — finding highlights, adding captions, sizing for each platform.',
      'We treat its output as a strong first draft. The highlight detection is good, but the clips you actually want are often a beat longer or shorter than what it picks, so a quick review pass is non-negotiable.',
      'For anyone running a content calendar across multiple platforms, that tradeoff is easily worth it. The alternative is doing the same cuts by hand, every week.'
    ],
    useCases: [
      'Turning long videos into Shorts / Reels',
      'Converting blog posts into video',
      'Auto-captioning for social',
      'Filling a multi-platform content calendar'
    ]
  },
  {
    slug: 'writesonic',
    name: 'Writesonic',
    domain: 'writesonic.com',
    category: 'Copywriting',
    url: 'https://writesonic.com/',
    shortUrl: 'https://go.aurionfuture.com/writesonic',
    tagline: 'Ad copy, landing pages and SEO drafts, on tap.',
    blurb: 'Landing-page copy, ad variations and SEO drafts on tap.',
    rating: 4.2,
    pricingFrom: 'from $16/mo',
    bestFor: 'Marketing copy, ad variations and first-draft SEO content.',
    whyWeUse: 'It strikes the best balance of speed and on-brand output of the writers we tested.',
    watchOut: 'Long-form SEO drafts still need a human edit for accuracy and voice.',
    verdict:
      'Writesonic is a fast, practical copy assistant. It will not replace a senior copywriter, but it removes the blank-page problem and produces solid first drafts you can shape quickly.',
    pros: [
      'Strong at short marketing copy and ad variations',
      'Useful templates for landing pages and emails',
      'Built-in SEO and research features',
      'Good speed-to-output ratio'
    ],
    cons: [
      'Long-form output needs careful editing',
      'Can drift off-brand without clear prompting',
      'Quality varies between content types'
    ],
    review: [
      'For marketers the value is volume of variations. Need ten headlines, five ad angles and a landing-page draft before lunch? Writesonic gets you there with raw material to refine.',
      'It is strongest on short, structured copy. The further you push toward long-form thought-leadership, the more editing you will do — so we use it to break the blank page, not to publish unedited.',
      'Paired with a clear brief and brand voice notes, it is a genuine speed multiplier for anyone shipping a lot of copy.'
    ],
    useCases: [
      'Landing-page and sales copy',
      'Ad headline and angle variations',
      'First-draft SEO articles',
      'Email sequences'
    ]
  },
  {
    slug: 'adcreative',
    name: 'AdCreative.ai',
    domain: 'adcreative.ai',
    category: 'Ads',
    url: 'https://www.adcreative.ai/',
    shortUrl: 'https://go.aurionfuture.com/adcreative',
    tagline: 'Conversion-focused ad creatives, scored before you ever spend a cent.',
    blurb: 'Generate ad creatives and copy at scale, with AI scoring that predicts what converts.',
    rating: 4.1,
    pricingFrom: 'from $25/mo',
    bestFor: 'Marketers running paid social and search who need creative volume fast.',
    whyWeUse: 'The Creative Scoring AI lets us rank variations before spending budget on them.',
    watchOut: 'Credits are use-it-or-lose-it and editing flexibility is limited — check billing terms carefully.',
    verdict:
      'AdCreative.ai is built for one thing: producing a high volume of conversion-oriented ad creatives quickly, then predicting which will perform. It is a genuine speed tool for paid-media teams — provided you go in clear-eyed about its credit system and limited editing.',
    pros: [
      'Generates many ad variations in minutes',
      'Creative Scoring AI predicts performance before spend',
      'Direct Meta and Google Ads integrations',
      'Includes ad copy and stock imagery'
    ],
    cons: [
      'Credits often don’t roll over month to month',
      'Editing flexibility is limited after generation',
      'Output quality can be inconsistent and need rework',
      'Watch the trial-to-paid billing and cancellation terms'
    ],
    review: [
      'AdCreative.ai exists to solve the paid-media bottleneck: you need a lot of ad variations, fast, and you need to know which ones are worth your budget. It generates creatives and copy in bulk, then scores them with a model trained on a very large pool of historical ad performance.',
      'The scoring is the real differentiator. Instead of guessing or burning spend to find a winner, you get a predicted-performance ranking up front. For anyone running Meta or Google campaigns at volume, that shortcut alone can justify the subscription.',
      'The honest caveats are practical, not conceptual. Credits are consumed on download and typically do not roll over, which creates use-it-or-lose-it pressure. Editing a generated creative is more constrained than a design tool, and output quality varies enough that you should expect to discard some. Read the trial and cancellation terms before you commit.'
    ],
    useCases: [
      'Paid social ad creative at volume',
      'A/B testing creative variations',
      'Predicting ad performance before spend',
      'Teams without a dedicated designer'
    ]
  },
  {
    slug: 'framer',
    name: 'Framer',
    domain: 'framer.com',
    category: 'Website',
    url: 'https://www.framer.com/',
    shortUrl: 'https://go.aurionfuture.com/framer',
    tagline: 'Design and ship a premium site without touching code.',
    blurb: 'Design and ship premium sites without touching a line of code.',
    rating: 4.7,
    pricingFrom: 'from $5/mo',
    bestFor: 'Landing pages and portfolios that need to look high-end fast.',
    whyWeUse: 'It is where we send anyone who needs a real, polished site this weekend.',
    watchOut: 'For complex web apps you will outgrow it — it is a site builder, not a framework.',
    verdict:
      'Framer hits a sweet spot between design freedom and shipping speed. If you want a site that looks designed rather than templated, without a developer, it is the strongest option we use.',
    pros: [
      'Genuinely premium-looking output',
      'Fast from idea to published site',
      'Strong animation and interaction tools',
      'Good built-in hosting and CMS'
    ],
    cons: [
      'Not suited to complex web applications',
      'Advanced features have a learning curve',
      'Costs add up as you scale pages/traffic'
    ],
    review: [
      'Most no-code site builders force a tradeoff: easy but generic, or flexible but slow. Framer is the closest we have used to having both — you can design freely and still publish the same day.',
      'The interaction and animation tooling is what separates it. A Framer site can feel alive in a way template builders rarely manage, which matters a lot for a brand or landing page.',
      'It is a site builder, though, not an app framework. The moment you need real application logic, you will reach for something else — and that is fine, because that is not what it is for.'
    ],
    useCases: [
      'High-end landing pages',
      'Portfolios and personal brands',
      'Marketing sites with motion',
      'Quick launches under deadline'
    ]
  },
  {
    slug: 'make',
    name: 'Make',
    domain: 'make.com',
    category: 'Automation',
    url: 'https://www.make.com/',
    shortUrl: 'https://go.aurionfuture.com/make',
    tagline: 'Wire your tools together and let the busywork run itself.',
    blurb: 'Connect your tools and automate the repetitive work in between.',
    rating: 4.5,
    pricingFrom: 'free tier available',
    bestFor: 'Automating multi-step workflows between apps without code.',
    whyWeUse: 'It is the quiet automation layer running behind much of what we do.',
    watchOut: 'The visual builder is powerful but has a real learning curve at first.',
    verdict:
      'Make is the connective tissue of a modern toolstack. Once a workflow is built, it runs silently forever — the upfront learning curve pays for itself many times over.',
    pros: [
      'Visual, flexible multi-step automations',
      'Connects to a huge range of apps',
      'Generous free tier to start',
      'Powerful logic, routing and error handling'
    ],
    cons: [
      'Steeper learning curve than simpler tools',
      'Complex scenarios can get hard to debug',
      'Operations-based pricing needs watching'
    ],
    review: [
      'Every creator and founder eventually drowns in small repetitive tasks: moving data between apps, posting, tagging, notifying. Make is the tool that makes those tasks disappear.',
      'It is more capable — and more complex — than the one-trigger-one-action tools. The visual builder lets you branch, filter and transform data, which is exactly what real workflows need.',
      'Budget an afternoon to learn its model. After that, every automation you build is time you never spend again, which is the entire point.'
    ],
    useCases: [
      'Auto-posting and content distribution',
      'Syncing leads between apps',
      'Notifications and internal alerts',
      'Data cleanup and routing'
    ]
  }
];

export function getTool(slug: string) {
  return tools.find((t) => t.slug === slug);
}

// The link users actually click: your go.aurionfuture.com tracking link if set, else the website.
export function affiliateLink(tool: Tool) {
  return tool.shortUrl && tool.shortUrl.startsWith('http') ? tool.shortUrl : tool.url;
}

// Brand logo loaded straight from the tool's domain — no local asset needed.
export function logoFor(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
}
