'use client'

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚠️</h1>
          <h2 style={{ marginBottom: '1rem' }}>Application Error</h2>
          <p style={{ color: '#666', marginBottom: '2rem', maxWidth: '500px' }}>
            We encountered a critical error. Please try refreshing the page.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={() => reset()}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#0052CC',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem'
              }}
            >
              Try Again
            </button>
            <a
              href="/"
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#fff',
                color: '#0052CC',
                border: '2px solid #0052CC',
                borderRadius: '4px',
                textDecoration: 'none',
                fontSize: '1rem'
              }}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
