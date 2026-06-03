import { ImageResponse } from 'next/og';
import { brandMarkDataUri } from './lib/brand-mark';

// Apple touch icon — generated from the same brand mark (real PNG).
export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0B1224'
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={brandMarkDataUri(132)} width={132} height={132} alt="" />
      </div>
    ),
    { ...size }
  );
}
