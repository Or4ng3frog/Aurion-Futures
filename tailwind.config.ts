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
        paper: '#F4EFE6',      // warm ivory page
        paper2: '#EBE3D5',     // slightly deeper panel
        ink: '#1A1714',        // near-black warm ink
        ink2: '#403A33',       // secondary text
        ink3: '#6E665B',       // muted/labels
        line: '#D8CFBF',       // hairline borders on paper
        amber: '#B6541E',      // burnt-amber primary accent
        amberSoft: '#C9743F',  // hover/lighter
        forest: '#2B3A2E',     // deep editorial green for contrast blocks
        cream: '#FBF8F2'       // card surface
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 1px 0 rgba(26,23,20,.04), 0 18px 50px -28px rgba(26,23,20,.30)',
        lift: '0 2px 0 rgba(26,23,20,.05), 0 30px 70px -34px rgba(26,23,20,.40)',
        edge: '0 0 0 1px rgba(216,207,191,.9)'
      },
      letterSpacing: {
        tightest: '-0.055em'
      }
    }
  },
  plugins: []
};

export default config;
