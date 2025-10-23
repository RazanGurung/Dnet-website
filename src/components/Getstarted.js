// src/components/GetStarted.js
import Link from 'next/link'

export default function GetStarted() {
  return (
    <section className="get-started section bg-gradient-primary">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center text-white">
            
            {/* Main CTA */}
            <div className="cta-content" data-aos="fade-up">
              <h2 className="cta-title text-white mb-4">
                Ready to Upgrade Your Network?
              </h2>
              <p className="cta-subtitle mb-5">
                Get a free consultation and detailed quote for your IT infrastructure project. 
                No obligations, just expert advice tailored to your business needs.
              </p>
              
              {/* Primary Actions */}
              <div className="cta-actions mb-5">
                <Link href="#contact" className="btn btn-light btn-lg me-3 mb-3">
                  <i className="bi bi-calendar-check me-2"></i>
                  Schedule Free Consultation
                </Link>
                <Link href="/quote" className="btn btn-outline-light btn-lg mb-3">
                  <i className="bi bi-calculator me-2"></i>
                  Get Instant Quote
                </Link>
              </div>
            </div>

            {/* Contact Options */}
            <div className="contact-options" data-aos="fade-up" data-aos-delay="200">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="contact-option">
                    <i className="bi bi-telephone-fill mb-3"></i>
                    <h6 className="text-white mb-2">Call Now</h6>
                    <a href="tel:+15157716993" className="text-white text-decoration-none">
                      (515) 771-6993
                    </a>
                    <p className="small text-white-50 mb-0">Available 24/7 for emergencies</p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="contact-option">
                    <i className="bi bi-envelope-fill mb-3"></i>
                    <h6 className="text-white mb-2">Email Us</h6>
                    <a href="mailto:Dnetworkingtechnology@gmail.com" className="text-white text-decoration-none">
                      Get Quote
                    </a>
                    <p className="small text-white-50 mb-0">Response within 2 hours</p>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="contact-option">
                    <i className="bi bi-geo-alt-fill mb-3"></i>
                    <h6 className="text-white mb-2">Service Area</h6>
                    <p className="text-white mb-1">Winston-Salem, NC</p>
                    <p className="small text-white-50 mb-0">Serving Greater Triad area</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Elements */}
            <div className="trust-elements mt-5 pt-4 border-top border-white border-opacity-25" data-aos="fade-up" data-aos-delay="300">
              <div className="row">
                <div className="col-6 col-md-3">
                  <div className="trust-badge">
                    <i className="bi bi-shield-check mb-2"></i>
                    <p className="small mb-0">Licensed & Insured</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="trust-badge">
                    <i className="bi bi-award mb-2"></i>
                    <p className="small mb-0">Certified Technicians</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="trust-badge">
                    <i className="bi bi-clock mb-2"></i>
                    <p className="small mb-0">Same-Day Service</p>
                  </div>
                </div>
                <div className="col-6 col-md-3">
                  <div className="trust-badge">
                    <i className="bi bi-hand-thumbs-up mb-2"></i>
                    <p className="small mb-0">Satisfaction Guaranteed</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}