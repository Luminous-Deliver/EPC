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
          background: 'linear-gradient(135deg, #33507F 0%, #1D3050 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* White pill containing the JPEG logo mark */}
          <div
            style={{
              background: '#ffffff',
              borderRadius: 12,
              padding: '8px 16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 30, fontWeight: 900, color: '#182848', letterSpacing: '-1px' }}>LD</span>
            <span style={{ fontSize: 30, fontWeight: 700, color: '#EF7A28', marginLeft: 6 }}>Energy</span>
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
          <span style={{ color: '#F8B47D' }}>07492 575 396</span>
        </div>
      </div>
    ),
    { ...size },
  )
}
