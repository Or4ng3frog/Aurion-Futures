/* ==========================================================================
   AURION FUTURE — homepage content model.
   Structural copy for the dark "AI Stack Command Center" homepage.
   Tool data itself still lives in app/lib/tools.ts — these arrays only
   reference tools by slug so there is a single source of truth.
   ========================================================================== */

export const nav = [
  { label: 'The Stack', href: '#stack' },
  { label: 'How we pick', href: '#how-we-pick' },
  { label: 'Journal', href: '/blog' },
  { label: 'Contact', href: '/contact' }
];

export const heroMetrics = [
  { value: '7', label: 'Curated tools' },
  { value: '6', label: 'Workflow stages' },
  { value: 'Weekly', label: 'New breakdowns' },
  { value: '100%', label: 'Affiliate-disclosed' }
];

/* The six command-center workflow nodes shown in the hero visual. */
export const stackNodes = [
  { key: 'idea', label: 'Idea', accent: 'iris' as const },
  { key: 'script', label: 'Script', accent: 'iris' as const },
  { key: 'voice', label: 'Voice', accent: 'gold' as const },
  { key: 'video', label: 'Video', accent: 'gold' as const },
  { key: 'landing', label: 'Landing Page', accent: 'glow' as const },
  { key: 'automation', label: 'Automation', accent: 'glow' as const }
];

/* Trust strip — references the same tools by slug (logos via lib/tools logoFor). */
export const trustLogos = [
  'synthesia',
  'elevenlabs',
  'pictory',
  'writesonic',
  'adcreative',
  'framer',
  'make'
];

/* "From idea to launch — one stack." Each stage maps to recommended tool slugs. */
export type WorkflowStep = {
  step: string;
  title: string;
  icon: 'Lightbulb' | 'PenLine' | 'Mic' | 'Video' | 'Layout' | 'Workflow';
  body: string;
  toolSlugs: string[];
};

export const workflow: WorkflowStep[] = [
  {
    step: '01',
    title: 'Research',
    icon: 'Lightbulb',
    body: 'Pressure-test the idea and shape an angle worth shipping before a single asset is made.',
    toolSlugs: ['writesonic']
  },
  {
    step: '02',
    title: 'Script',
    icon: 'PenLine',
    body: 'Turn the angle into a tight, on-brand script and supporting copy in minutes, not hours.',
    toolSlugs: ['writesonic']
  },
  {
    step: '03',
    title: 'Voice',
    icon: 'Mic',
    body: 'Generate narration that breathes and pauses like a person — no booth, no recording day.',
    toolSlugs: ['elevenlabs']
  },
  {
    step: '04',
    title: 'Video',
    icon: 'Video',
    body: 'Render a presenter video and cut it into a week of caption-ready clips automatically.',
    toolSlugs: ['synthesia', 'pictory']
  },
  {
    step: '05',
    title: 'Landing Page',
    icon: 'Layout',
    body: 'Ship a premium, conversion-ready page the same day — designed, not templated.',
    toolSlugs: ['framer', 'adcreative']
  },
  {
    step: '06',
    title: 'Automation',
    icon: 'Workflow',
    body: 'Wire the stack together so publishing, syncing and follow-up run themselves.',
    toolSlugs: ['make']
  }
];

/* "How we pick" — upgraded principles. */
export const principles = [
  {
    kicker: '01',
    icon: 'Target' as const,
    title: 'Tested, not theorised',
    body: 'Nothing reaches this page until it has earned a place in our own daily workflow. If we have not shipped with it, it is not here.'
  },
  {
    kicker: '02',
    icon: 'Activity' as const,
    title: 'Signal over hype',
    body: 'We name the trade-offs out loud. If a tool only fits a narrow use case, we tell you exactly which one — and where it falls down.'
  },
  {
    kicker: '03',
    icon: 'Rocket' as const,
    title: 'Built for momentum',
    body: 'Every pick is chosen to help creators, traders and founders ship faster — this week, not someday. Velocity is the whole point.'
  }
];

/* Journal teaser — upcoming breakdowns. */
export const journal = [
  {
    tag: 'Video',
    readTime: '8 min',
    title: '7 AI tools that replaced my whole content team',
    blurb: 'The exact stack behind a faceless channel — and the three we dropped.'
  },
  {
    tag: 'Automation',
    readTime: '6 min',
    title: 'I let AI run my automations for 30 days',
    blurb: 'What broke, what saved hours, and the guardrails that actually mattered.'
  },
  {
    tag: 'Voice',
    readTime: '5 min',
    title: 'The only voice tool that actually sounds human',
    blurb: 'A blind test across five generators — and why one wins every time.'
  }
];

export const socials = [
  { label: 'TikTok', href: 'https://www.tiktok.com/@aurion.future', brand: 'tiktok.com' },
  { label: 'YouTube', href: 'https://www.youtube.com/@aurion.future', brand: 'youtube.com' },
  { label: 'Instagram', href: 'https://www.instagram.com/aurion.future', brand: 'instagram.com' }
];

export const footerLinks = {
  navigation: nav,
  legal: [
    { label: 'Imprint', href: '/imprint' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { label: 'Terms of Use', href: '/terms-of-use' }
  ]
};
