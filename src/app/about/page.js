import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'About Us | DNET - Digital Network Engineering Technology',
  description: 'Learn about DNET\'s mission, values, and meet our founder Tilak. 10+ years of professional networking and IT services in Winston-Salem, NC.'
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero section" style={{ minHeight: '40vh', background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)' }}>
        <div className="container position-relative text-center text-white py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb justify-content-center bg-transparent">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">About Us</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-bold mb-3">About DNET</h1>
          <p className="lead mb-0">Expert networking and IT solutions since 2014</p>
        </div>
      </section>

      {/* About Content Section */}
      <section className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            {/* Left: Video/Image with Play Button */}
            <div className="col-lg-6 position-relative align-self-start">
              <figure className="position-relative m-0">
                <Image
                  src="/assets/img/about.jpg"
                  className="img-fluid"
                  alt="DNET technicians working on a network rack"
                  width={800}
                  height={600}
                  loading="lazy"
                  quality={75}
                />
                {/* YouTube Video Play Button */}
                <a
                  href="https://youtu.be/8DxGMTybHoo"
                  className="glightbox pulsating-play-btn"
                  aria-label="Play company overview video"
                ></a>
              </figure>
            </div>

            {/* Right: Content */}
            <div className="col-lg-6 content">
              <h3>About DNET</h3>
              <p>
                <strong>DNET (Digital Network Engineering Technology)</strong> plans, builds, and supports the technology your business runs on—reliable networking, responsive IT & cloud, and high-performing websites and applications. We deliver clean workmanship, clear documentation, and friendly support so everything simply works and scales with you.
              </p>

              <ul>
                <li>
                  <i className="bi bi-hdd-network"></i>
                  <div>
                    <h5>Network Infrastructure</h5>
                    <p>Structured cabling (Cat6/fiber), switches & routers, secure Wi-Fi, and tidy IDF/MDF racks engineered for speed and reliability.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-cloud-check"></i>
                  <div>
                    <h5>IT & Cloud Support</h5>
                    <p>Helpdesk and on-site support, Microsoft 365/Google Workspace setup, backups & recovery, and proactive maintenance.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-shield-lock"></i>
                  <div>
                    <h5>Security & Access Control</h5>
                    <p>CCTV camera systems (IP & analog), access control, intrusion detection, remote monitoring, and comprehensive security audits.</p>
                  </div>
                </li>

                <li>
                  <i className="bi bi-code-square"></i>
                  <div>
                    <h5>Web & Custom Software</h5>
                    <p>Responsive websites, SEO optimization, e-commerce platforms, and custom applications tailored to your business needs.</p>
                  </div>
                </li>
              </ul>

              <p>
                Whether you're opening a new office, relocating, upgrading your systems, or recovering from downtime, DNET brings the experience and care to get it done right—on time, on budget, and built to last.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Founder Section */}
      <section id="team" className="departments section light-background">
        <div className="container section-title">
          <h2>Meet Our Founder</h2>
          <p>Tilak, a master in networking with 10+ years of experience, delivers expert IT, cabling, and CCTV solutions for homes, offices, and industries</p>
        </div>

        <div className="container">
          <div className="row">
            {/* Left: Tab Navigation */}
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
                <li className="nav-item">
                  <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    href="#team-tab-1"
                  >
                    Meet Tilak
                  </a>
                </li>
              </ul>
            </div>

            {/* Right: Tab Content */}
            <div className="col-lg-9 mt-4 mt-lg-0">
              <div className="tab-content">
                <div className="tab-pane active show" id="team-tab-1">
                  <div className="row">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>Lead Network Technician & Founder</h3>
                      <p className="fst-italic">
                        Tilak is a seasoned IT and network engineering professional with over 10 years of hands-on experience in the field. He holds a Master's degree in Networking and has built a career delivering high-quality IT solutions to clients across diverse sectors—from large enterprises to small businesses, and residential homes.
                      </p>
                      <p>
                        Throughout his career, Tilak has successfully planned and deployed private network infrastructures, structured cabling systems, CCTV surveillance setups, and comprehensive IT support services. His expertise spans both commercial and residential environments, making him a trusted partner for robust and secure connectivity solutions.
                      </p>
                      <p>
                        Having spent several years working with Spectrum, one of the nation's leading telecommunications companies, Tilak brings deep industry knowledge and a commitment to excellence in every project. Whether you're looking to upgrade your home network, implement an enterprise-grade solution, or secure your building with advanced surveillance systems, Tilak brings the experience, professionalism, and dedication you can rely on.
                      </p>
                    </div>

                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <Image
                        src="/assets/img/departments-1.jpg"
                        alt="Tilak - Lead Network Technician"
                        width={400}
                        height={500}
                        className="img-fluid"
                        loading="lazy"
                        quality={75}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2>Why Choose DNET?</h2>
              <p className="text-muted">Professional service you can trust</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-lightning-charge text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h4>Fast Response</h4>
                <p className="text-muted mb-0">
                  24/7 emergency support with same-day service available. We're here when you need us most.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-award text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h4>Expert Team</h4>
                <p className="text-muted mb-0">
                  10+ years of experience with certified professionals. Master's degree in Networking.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-check-circle text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h4>Proven Results</h4>
                <p className="text-muted mb-0">
                  500+ successful projects completed. Focus on quality workmanship and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Work With Us?</h2>
          <p className="lead text-muted mb-4">
            Let's discuss your networking and IT needs
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/#contact" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-chat-dots me-2"></i>
              Get Free Quote
            </Link>
            <Link href="/portfolio" className="btn btn-outline-primary btn-lg px-4">
              <i className="bi bi-images me-2"></i>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
