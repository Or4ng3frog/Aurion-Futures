import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aurion Futures | AI Tools, Automation & Digital Growth',
  description:
    'Aurion Futures curates AI tools, automation systems and digital income solutions for creators, traders and entrepreneurs.',
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }]
  },
  openGraph: {
    title: 'Aurion Futures',
    description: 'AI tools, automation and digital income systems curated by Aurion Futures.',
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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
