import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="hero section">
      {/* Background Image with Overlay */}
      <Image 
        src="/assets/img/hero-bg.jpg" 
        alt="" 
        fill
        priority
        style={{ objectFit: 'cover' }}
        data-aos="fade-in"
      />
      
      <div className="container position-relative">
        {/* Welcome Text */}
        <div className="welcome text-center text-lg-start mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="badge bg-white text-primary mb-3 px-3 py-2">
            <i className="bi bi-star-fill me-2"></i>
            10+ Years of Excellence
          </div>
          <h2 className="mb-4">
            Expert Network Solutions for <br className="d-none d-lg-block" />
            <span className="text-white">Modern Businesses</span>
          </h2>
          <p className="lead mb-4">
            Structured. Secured. Seamless. Professional IT infrastructure designed to scale with your success.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
            <Link href="#contact" className="btn btn-light btn-lg px-4">
              <i className="bi bi-chat-dots me-2"></i>
              Get Free Quote
            </Link>
            <Link href="#services" className="btn btn-outline-light btn-lg px-4">
              <i className="bi bi-arrow-right me-2"></i>
              Our Services
            </Link>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="row g-4 mb-5">
          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon-wrapper mb-4">
                <i className="bi bi-hdd-network"></i>
              </div>
              <h4 className="mb-3">Network Infrastructure</h4>
              <p className="mb-3">
                Cat6/Fiber cabling, business Wi-Fi, switches & routers, and professionally organized IDF/MDF racks.
              </p>
              <Link href="/services/networking-cabling" className="text-primary fw-semibold">
                Learn more <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon-wrapper mb-4">
                <i className="bi bi-shield-lock"></i>
              </div>
              <h4 className="mb-3">Security & Access</h4>
              <p className="mb-3">
                CCTV systems, access control, remote monitoring, and comprehensive security infrastructure.
              </p>
              <Link href="/services/security-access" className="text-primary fw-semibold">
                Learn more <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon-wrapper mb-4">
                <i className="bi bi-cloud-check"></i>
              </div>
              <h4 className="mb-3">IT & Cloud Solutions</h4>
              <p className="mb-3">
                Managed IT support, cloud hosting, data backup, and proactive maintenance for peace of mind.
              </p>
              <Link href="/services/managed-it-cloud" className="text-primary fw-semibold">
                Learn more <i className="bi bi-arrow-right ms-1"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row g-4 pt-5 border-top border-white border-opacity-25" data-aos="fade-up" data-aos-delay="500">
          <div className="col-6 col-lg-3 text-center">
            <div className="text-white">
              <h3 className="mb-1 fw-bold">10+</h3>
              <p className="mb-0 small opacity-75">Years Experience</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <div className="text-white">
              <h3 className="mb-1 fw-bold">500+</h3>
              <p className="mb-0 small opacity-75">Projects Completed</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <div className="text-white">
              <h3 className="mb-1 fw-bold">24/7</h3>
              <p className="mb-0 small opacity-75">Support Available</p>
            </div>
          </div>
          <div className="col-6 col-lg-3 text-center">
            <div className="text-white">
              <h3 className="mb-1 fw-bold">100%</h3>
              <p className="mb-0 small opacity-75">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}