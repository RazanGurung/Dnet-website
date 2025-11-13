import Link from 'next/link'

export const metadata = {
  title: '404 - Page Not Found | DNET',
  description: 'The page you are looking for could not be found.'
}

export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center text-center py-5">
        <div className="col-lg-6">
          <div className="py-5">
            <h1 className="display-1 fw-bold text-primary mb-4">404</h1>
            <h2 className="mb-4">Page Not Found</h2>
            <p className="lead text-muted mb-4">
              Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
            </p>

            <div className="d-flex gap-3 justify-content-center flex-wrap">
              <Link href="/" className="btn btn-primary btn-lg px-4">
                <i className="bi bi-house-door me-2"></i>
                Go Home
              </Link>
              <Link href="/#services" className="btn btn-outline-primary btn-lg px-4">
                <i className="bi bi-grid me-2"></i>
                View Services
              </Link>
              <Link href="/#contact" className="btn btn-outline-secondary btn-lg px-4">
                <i className="bi bi-envelope me-2"></i>
                Contact Us
              </Link>
            </div>

            <div className="mt-5 pt-4 border-top">
              <h5 className="mb-3">Popular Pages</h5>
              <div className="list-group list-group-flush">
                <Link href="/#about" className="list-group-item list-group-item-action">
                  <i className="bi bi-info-circle me-2"></i>
                  About Us
                </Link>
                <Link href="/services/networking-cabling" className="list-group-item list-group-item-action">
                  <i className="bi bi-hdd-network me-2"></i>
                  Networking & Cabling
                </Link>
                <Link href="/services/security-access" className="list-group-item list-group-item-action">
                  <i className="bi bi-shield-lock me-2"></i>
                  Security & Access Control
                </Link>
                <Link href="/quote" className="list-group-item list-group-item-action">
                  <i className="bi bi-calculator me-2"></i>
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
