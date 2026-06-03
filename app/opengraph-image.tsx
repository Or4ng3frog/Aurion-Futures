import { ImageResponse } from 'next/og';
import { brandMarkDataUri, BRAND } from './lib/brand-mark';

// Default OpenGraph / share image — generated from the brand mark.
export const runtime = 'edge';
export const alt = 'Aurion Future — Curated AI Tools, Tested & Recommended';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px 96px',
          backgroundColor: BRAND.ink,
          backgroundImage: 'radial-gradient(120% 120% at 82% -10%, rgba(244,183,64,.20), rgba(7,10,20,0) 55%)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={brandMarkDataUri(132)} width={132} height={132} alt="" />
          <div style={{ display: 'flex', fontSize: 76, fontWeight: 700, letterSpacing: '-0.02em' }}>
            <span style={{ color: BRAND.text }}>Aurion</span>
            <span style={{ color: BRAND.gold }}>&nbsp;Future</span>
          </div>
        </div>

        <div style={{ display: 'flex', marginTop: 40, fontSize: 40, color: BRAND.text, fontWeight: 600 }}>
          The AI stack we actually use to build faster.
        </div>
        <div style={{ display: 'flex', marginTop: 18, fontSize: 28, color: BRAND.muted }}>
          Curated · Tested · Independent — reviews for creators, traders & founders.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 56 }}>
          <div style={{ width: 40, height: 3, background: BRAND.gold, borderRadius: 2 }} />
          <div style={{ display: 'flex', fontSize: 24, color: BRAND.muted, letterSpacing: '0.12em' }}>
            AURIONFUTURE.COM
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
