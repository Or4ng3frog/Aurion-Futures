import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurion Futures | AI Tools, Automation & digitales Wachstum',
  description:
    'Aurion Futures kuratiert AI-Tools, Automatisierungssysteme und digitale Einkommenslösungen für Creator, Trader und Unternehmer.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: {
    title: 'Aurion Futures',
    description: 'AI Tools, Automatisierung und digitale Einkommenssysteme — kuratiert von Aurion Futures.',
    type: 'website'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#070A17'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
