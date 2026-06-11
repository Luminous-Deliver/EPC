'use client'

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en-GB">
      <body style={{ fontFamily: 'Inter, Arial, sans-serif', margin: 0 }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            padding: '24px',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, #F0FDFA, #ffffff)',
            color: '#0F172A',
          }}
        >
          <p style={{ fontSize: '64px', fontWeight: 800, color: '#0D9488', margin: 0 }}>Oops</p>
          <h1 style={{ fontSize: '28px', fontWeight: 800, margin: 0 }}>Something went wrong</h1>
          <p style={{ color: '#475569', maxWidth: '420px', margin: 0 }}>
            An unexpected error occurred. Try again, or call us on 07492 575 396 to book your EPC.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: '8px',
              padding: '12px 28px',
              borderRadius: '12px',
              border: 'none',
              background: '#0D9488',
              color: '#fff',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  )
}
