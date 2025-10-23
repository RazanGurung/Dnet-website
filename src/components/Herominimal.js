// src/components/HeroMinimal.js
import Link from 'next/link'
import Image from 'next/image'

export default function HeroMinimal() {
  return (
    <section id="hero" className="hero-minimal section">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">
          
          {/* Left: Main Message */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <div className="hero-content">
              <h1 className="hero-title mb-4">
                Digital Network Solutions That <span className="text-primary">Simply Work</span>
              </h1>
              
              <p className="hero-subtitle mb-4">
                Professional IT infrastructure for modern businesses. From structured cabling to security systems, 
                we deliver reliable solutions that scale with your success.
              </p>

              {/* Primary Actions */}
              <div className="hero-actions mb-5">
                <Link href="/quote" className="btn btn-primary btn-lg me-3 mb-3">
                  <i className="bi bi-calculator me-2"></i>
                  Get Free Quote
                </Link>
                <a href="tel:+15157716993" className="btn btn-outline-primary btn-lg mb-3">
                  <i className="bi bi-telephone me-2"></i>
                  Call (515) 771-6993
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="hero-trust">
                <div className="row text-center text-lg-start">
                  <div className="col-4">
                    <div className="trust-item">
                      <i className="bi bi-award-fill text-primary mb-2"></i>
                      <div className="trust-number">10+</div>
                      <div className="trust-label">Years Experience</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="trust-item">
                      <i className="bi bi-check-circle-fill text-success mb-2"></i>
                      <div className="trust-number">500+</div>
                      <div className="trust-label">Projects Completed</div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="trust-item">
                      <i className="bi bi-headset text-info mb-2"></i>
                      <div className="trust-number">24/7</div>
                      <div className="trust-label">Support Available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Visual/Form */}
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div className="hero-visual">
              <div className="quick-contact-card">
                <div className="card border-0 shadow-lg">
                  <div className="card-body p-4">
                    <h5 className="card-title mb-3">
                      <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                      Quick Project Assessment
                    </h5>
                    
                    <form className="quick-form">
                      <div className="mb-3">
                        <select className="form-select" required>
                          <option value="">What do you need?</option>
                          <option value="networking">Network Setup/Upgrade</option>
                          <option value="security">Security/CCTV System</option>
                          <option value="it-support">IT Support/Cloud</option>
                          <option value="office-setup">New Office Setup</option>
                          <option value="other">Other/Multiple Services</option>
                        </select>
                      </div>
                      
                      <div className="mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          placeholder="Your Name" 
                          required 
                        />
                      </div>
                      
                      <div className="mb-3">
                        <input 
                          type="tel" 
                          className="form-control" 
                          placeholder="Phone Number" 
                          required 
                        />
                      </div>
                      
                      <button type="submit" className="btn btn-primary w-100">
                        <i className="bi bi-send me-2"></i>
                        Get Free Consultation
                      </button>
                    </form>
                    
                    <div className="text-center mt-3">
                      <small className="text-muted">
                        <i className="bi bi-shield-check me-1"></i>
                        We'll respond within 2 hours
                      </small>
                    </div>
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