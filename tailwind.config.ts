import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        // Warm editorial palette — paper + ink + a single confident accent
        // (used by legal / blog / tool-review pages — keep intact)
        paper: '#F4EFE6',      // warm ivory page
        paper2: '#EBE3D5',     // slightly deeper panel
        ink: '#1A1714',        // near-black warm ink
        ink2: '#403A33',       // secondary text
        ink3: '#6E665B',       // muted/labels
        line: '#D8CFBF',       // hairline borders on paper
        amber: '#B6541E',      // burnt-amber primary accent
        amberSoft: '#C9743F',  // hover/lighter
        forest: '#2B3A2E',     // deep editorial green for contrast blocks
        cream: '#FBF8F2',      // card surface

        // ── Dark "AI command center" palette (homepage) ──────────────
        night: {
          DEFAULT: '#070A14',  // deepest page base
          800: '#0A0F1C',      // raised base
          700: '#0E1424',      // panel
          600: '#141C30'       // hover panel
        },
        gold: {
          DEFAULT: '#F4B740',  // primary brand accent (premium gold)
          soft: '#FBD27E',     // lighter glow
          deep: '#C77B2B'      // pressed / deep
        },
        iris: {
          DEFAULT: '#7C8BFF',  // cool secondary (tech/dashboard)
          soft: '#A5B0FF'
        },
        glow: {
          DEFAULT: '#54D4F0',  // terminal/data accent (cyan)
          soft: '#8BE6F7'
        }
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 0 rgba(26,23,20,.04), 0 18px 50px -28px rgba(26,23,20,.30)',
        lift: '0 2px 0 rgba(26,23,20,.05), 0 30px 70px -34px rgba(26,23,20,.40)',
        edge: '0 0 0 1px rgba(216,207,191,.9)',
        // dark homepage glows
        glass: '0 1px 0 0 rgba(255,255,255,.06) inset, 0 24px 60px -30px rgba(0,0,0,.8)',
        'glass-lift': '0 1px 0 0 rgba(255,255,255,.09) inset, 0 40px 90px -40px rgba(0,0,0,.85)',
        'glow-gold': '0 0 0 1px rgba(244,183,64,.25), 0 18px 60px -18px rgba(244,183,64,.35)',
        'glow-iris': '0 0 0 1px rgba(124,139,255,.25), 0 18px 60px -18px rgba(124,139,255,.32)'
      },
      letterSpacing: {
        tightest: '-0.055em'
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(135deg, #FBD27E 0%, #F4B740 45%, #C77B2B 100%)',
        'iris-sheen': 'linear-gradient(135deg, #A5B0FF 0%, #7C8BFF 50%, #54D4F0 100%)'
      }
    }
  },
  plugins: []
};

export default config;
