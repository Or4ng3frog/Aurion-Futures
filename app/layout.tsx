import type { Metadata, Viewport } from 'next';
import { site } from './lib/site';

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
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'AI tools', 'best AI tools', 'AI tool reviews', 'AI software',
    'AI video', 'AI voiceover', 'AI copywriting', 'AI ad creatives',
    'no-code website', 'automation tools', 'creator tools'
  ],
  authors: [{ name: 'Dennis Klahn' }],
  creator: 'Dennis Klahn',
  publisher: site.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 }
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/assets/aurion-favicon-32.png', type: 'image/png', sizes: '32x32' },
      { url: '/assets/aurion-favicon-16.png', type: 'image/png', sizes: '16x16' },
      { url: '/assets/aurion-favicon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/assets/aurion-favicon-512.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: `${site.name} — ${site.tagline}` }]
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ['/og-image.png']
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
