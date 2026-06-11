import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'L&D Energy, Domestic EPC London from £49'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background: 'linear-gradient(135deg, #0D9488 0%, #115E59 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* LD monogram icon block */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              background: 'linear-gradient(135deg, #1B2A4A 0%, #0D9488 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 900,
              fontSize: 36,
              color: '#ffffff',
              letterSpacing: '-2px',
            }}
          >
            LD
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
            <span style={{ fontSize: 36, fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>L&D</span>
            <span style={{ fontSize: 36, fontWeight: 700, color: '#5EEAD4', letterSpacing: '-0.02em' }}>Energy</span>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.03em' }}>
            Domestic EPCs<br />from £49
          </div>
          <div style={{ fontSize: 32, opacity: 0.9, fontWeight: 500 }}>
            Elmhurst accredited · Next-day available · All London boroughs
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid rgba(255,255,255,0.25)',
            paddingTop: 28,
            fontSize: 26,
            fontWeight: 600,
          }}
        >
          <span>epc.luminousanddeliver.co.uk</span>
          <span style={{ color: '#FCD34D' }}>07492 575 396</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
