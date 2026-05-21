import type { Metadata, Viewport } from 'next';

// Self-hosted fonts (no runtime Google Fonts dependency)
import '@fontsource/fraunces/400.css';
import '@fontsource/fraunces/500.css';
import '@fontsource/fraunces/600.css';
import '@fontsource/fraunces/700.css';
import '@fontsource/fraunces/900.css';
import '@fontsource/fraunces/400-italic.css';
import '@fontsource/fraunces/600-italic.css';
import '@fontsource/manrope/400.css';
import '@fontsource/manrope/500.css';
import '@fontsource/manrope/600.css';
import '@fontsource/manrope/700.css';
import '@fontsource/manrope/800.css';

import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://aurion-futures.com'),
  title: 'Aurion Futures — Curated AI Tools, Tested & Recommended',
  description:
    'A hand-picked, independently tested selection of the AI tools we actually use to build, create and grow. Honest reviews, real workflows, no hype.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/assets/aurion-favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/aurion-favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/aurion-favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/aurion-favicon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: {
    title: 'Aurion Futures — Curated AI Tools, Tested & Recommended',
    description:
      'A hand-picked, independently tested selection of the AI tools we actually use to build, create and grow.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#F4EFE6'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
