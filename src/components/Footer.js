import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="footer" className="footer light-background" role="contentinfo">
      <div className="container footer-top">
        <div className="row gy-4 align-items-start">

          {/* Brand + Contact */}
          <div className="col-lg-4 col-md-6">
            <Link href="/" className="logo d-flex align-items-center text-decoration-none mb-2">
              <Image 
                src="/assets/img/logo.png" 
                alt="DNET logo" 
                width={36} 
                height={36} 
                className="me-2" 
              />
              <span className="sitename fw-semibold">Digital Network Engineering Technology</span>
            </Link>
            <p className="mb-3 small text-muted">
              Structured. Secured. Seamless. Cabling, networks, security, IT & cloud done right.
            </p>

            <address className="footer-contact mb-2">
              <div className="d-flex align-items-start mb-1">
                <i className="bi bi-geo-alt me-2"></i>
                <div>520 N Martin Luther King Rd, Winston-Salem, NC 27101</div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <i className="bi bi-telephone me-2"></i>
                <div>
                  <a href="tel:+15157716993" className="text-decoration-none">
                    +1 (515) 771-6993
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-start">
                <i className="bi bi-envelope me-2"></i>
                <div>
                  <a href="mailto:Dnetworkingtechnology@gmail.com" className="text-decoration-none">
                    Dnetworkingtechnology@gmail.com
                  </a>
                </div>
              </div>
            </address>

            <div className="d-flex gap-2 mb-3">
              <Link href="/#contact" className="btn btn-primary btn-sm">
                <i className="bi bi-chat-dots me-1"></i> Get a Quote
              </Link>
              <a href="tel:+15157716993" className="btn btn-outline-secondary btn-sm">
                <i className="bi bi-telephone me-1"></i> Call Now
              </a>
            </div>

            <div className="social-links d-flex gap-2">
              <a href="#" aria-label="Twitter/X" className="text-body">
                <i className="bi bi-twitter-x"></i>
              </a>
              <a href="#" aria-label="Facebook" className="text-body">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#" aria-label="Instagram" className="text-body">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-body">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="h6">Services</h4>
            <ul className="list-unstyled">
              <li>
                <Link href="/services/networking-cabling">Networking &amp; Cabling</Link>
              </li>
              <li>
                <Link href="/services/switching-routing-wifi">Switching, Routing &amp; Wi-Fi</Link>
              </li>
              <li>
                <Link href="/services/security-access">Security, CCTV &amp; Access</Link>
              </li>
              <li>
                <Link href="/services/office-relocation">Office Relocation &amp; New Sites</Link>
              </li>
              <li>
                <Link href="/services/data-recovery">Backup, Recovery &amp; Data</Link>
              </li>
              <li>
                <Link href="/services/managed-it-cloud">Managed IT &amp; Cloud</Link>
              </li>
              <li>
                <Link href="/services/web-seo-software">Web, SEO &amp; Software</Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="h6">Company</h4>
            <ul className="list-unstyled">
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/#testimonials">Testimonials</Link></li>
              <li><Link href="/#gallery">Gallery</Link></li>
              <li><Link href="/#faq">FAQs</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Hours & Support */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="h6">Hours &amp; Support</h4>
            <ul className="list-unstyled small mb-2">
              <li>
                <span className="text-muted">Mon–Fri:</span> 8:00a – 6:00p
              </li>
              <li>
                <span className="text-muted">After-hours:</span> By appointment
              </li>
              <li className="mt-2">
                <i className="bi bi-lightning-charge me-1"></i> 
                <strong>24/7 Emergency</strong> available
              </li>
            </ul>
            <Link href="/#contact" className="link-secondary small">
              Request emergency callback →
            </Link>
          </div>

          {/* Service Area */}
          <div className="col-lg-2 col-md-6 footer-links">
            <h4 className="h6">Service Area</h4>
            <ul className="list-unstyled small">
              <li>Winston-Salem</li>
              <li>Greensboro</li>
              <li>High Point</li>
              <li>Greater Triad, NC</li>
            </ul>
            <p className="small text-muted mb-0">Statewide projects by request.</p>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span> <strong className="px-1 sitename">Medilab</strong>{' '}
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by{' '}
          <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>

      {/* Optional LocalBusiness schema for SEO */}
      <script 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Digital Network Engineering Technology",
            "telephone": "+1-515-771-6993",
            "email": "Dnetworkingtechnology@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "520 N Martin Luther King Rd",
              "addressLocality": "Winston-Salem",
              "addressRegion": "NC",
              "postalCode": "27101",
              "addressCountry": "US"
            },
            "areaServed": ["Winston-Salem", "Greensboro", "High Point", "Triad, NC"],
            "openingHours": "Mo-Fr 08:00-18:00",
            "url": "/"
          })
        }}
      />
    </footer>
  )
}