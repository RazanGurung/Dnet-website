'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center py-5">
        <div className="col-lg-6">
          <div className="py-5">
            <div className="text-danger mb-4">
              <i className="bi bi-exclamation-triangle" style={{ fontSize: '4rem' }}></i>
            </div>
            <h1 className="display-5 fw-bold mb-4">Something Went Wrong</h1>
            <p className="lead text-muted mb-4">
              We encountered an unexpected error. Our team has been notified and we're working to fix it.
            </p>

            {process.env.NODE_ENV === 'development' && (
              <div className="alert alert-danger text-start mb-4">
                <h6 className="alert-heading">Error Details (Development Only)</h6>
                <pre className="mb-0 small" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {error.message}
                </pre>
              </div>
            )}

            <div className="d-flex gap-3 justify-content-center flex-wrap mb-5">
              <button
                onClick={() => reset()}
                className="btn btn-primary btn-lg px-4"
              >
                <i className="bi bi-arrow-clockwise me-2"></i>
                Try Again
              </button>
              <Link href="/" className="btn btn-outline-primary btn-lg px-4">
                <i className="bi bi-house-door me-2"></i>
                Go Home
              </Link>
              <Link href="/#contact" className="btn btn-outline-secondary btn-lg px-4">
                <i className="bi bi-envelope me-2"></i>
                Contact Support
              </Link>
            </div>

            <div className="text-muted small">
              <p className="mb-0">
                If this problem persists, please{' '}
                <Link href="/#contact" className="text-decoration-none">contact us</Link>
                {' '}and we'll help you right away.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
