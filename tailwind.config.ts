import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        aurion: {
          bg: '#060914',
          panel: '#0B1022',
          panel2: '#101731',
          purple: '#8B43FF',
          magenta: '#C12EFF',
          blue: '#2D94FF',
          cyan: '#28E3FF'
        }
      },
      boxShadow: {
        glow: '0 0 45px rgba(139, 67, 255, 0.35)',
        card: '0 24px 80px rgba(0, 0, 0, 0.35)'
      },
      backgroundImage: {
        'aurion-radial': 'radial-gradient(circle at 30% 0%, rgba(139,67,255,.35), transparent 34%), radial-gradient(circle at 75% 20%, rgba(45,148,255,.25), transparent 28%), linear-gradient(180deg,#070A17 0%,#050711 100%)'
      }
    }
  },
  plugins: []
};

export default config;
