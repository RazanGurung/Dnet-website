// src/components/ServiceLayout.js
import Link from 'next/link'
import Image from 'next/image'

export default function ServiceLayout({ 
  title, 
  subtitle,
  heroImage,
  icon,
  overview,
  features,
  process,
  technologies,
  benefits,
  cta
}) {
  return (
    <>
      {/* Hero Section */}
      <section className="service-hero section" style={{ 
        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white text-decoration-none opacity-75">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link href="/#services" className="text-white text-decoration-none opacity-75">Services</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">{title}</li>
            </ol>
          </nav>

          <div className="row align-items-center">
            <div className="col-lg-8" data-aos="fade-up">
              <div className="d-flex align-items-center mb-3">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '1.5rem',
                  backdropFilter: 'blur(10px)'
                }}>
                  <i className={`${icon} text-white`} style={{ fontSize: '40px' }}></i>
                </div>
                <div>
                  <h1 className="text-white mb-2">{title}</h1>
                  <p className="text-white opacity-90 lead mb-0">{subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto" data-aos="fade-up">
              <div className="service-overview">
                {overview}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {features && (
        <section className="section light-background">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <h2>Key Features & Capabilities</h2>
            </div>
            <div className="row g-4">
              {features.map((feature, index) => (
                <div key={index} className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                  <div className="card h-100 border-0 shadow-sm">
                    <div className="card-body p-4">
                      <div className="d-flex align-items-start mb-3">
                        <div style={{
                          width: '50px',
                          height: '50px',
                          background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginRight: '1rem',
                          flexShrink: 0
                        }}>
                          <i className={`${feature.icon} text-white`} style={{ fontSize: '24px' }}></i>
                        </div>
                        <div>
                          <h5 className="mb-2">{feature.title}</h5>
                          <p className="text-muted mb-0">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      {process && (
        <section className="section">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <h2>Our Process</h2>
              <p>How we deliver exceptional results for your project</p>
            </div>
            <div className="row g-4">
              {process.map((step, index) => (
                <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={100 + (index * 50)}>
                  <div className="text-center">
                    <div style={{
                      width: '80px',
                      height: '80px',
                      background: index % 2 === 0 ? 'var(--primary-color)' : 'var(--primary-light)',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      color: 'white',
                      fontSize: '32px',
                      fontWeight: 'bold',
                      boxShadow: '0 10px 30px rgba(0, 102, 204, 0.3)'
                    }}>
                      {index + 1}
                    </div>
                    <h5 className="mb-2">{step.title}</h5>
                    <p className="text-muted mb-0">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies Section */}
      {technologies && (
        <section className="section light-background">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <h2>Technologies & Tools We Use</h2>
              <p>Industry-leading solutions for optimal performance</p>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="row g-3">
                  {technologies.map((tech, index) => (
                    <div key={index} className="col-lg-3 col-md-4 col-6" data-aos="zoom-in" data-aos-delay={index * 50}>
                      <div className="card border-0 shadow-sm text-center p-3 h-100">
                        <div className="card-body">
                          <i className={`${tech.icon} text-primary mb-2`} style={{ fontSize: '32px' }}></i>
                          <h6 className="mb-0">{tech.name}</h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Benefits Section */}
      {benefits && (
        <section className="section">
          <div className="container">
            <div className="section-title text-center" data-aos="fade-up">
              <h2>Why Choose Our {title}?</h2>
            </div>
            <div className="row g-4">
              <div className="col-lg-6" data-aos="fade-right">
                <ul className="list-unstyled">
                  {benefits.slice(0, Math.ceil(benefits.length / 2)).map((benefit, index) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '20px' }}></i>
                      <div>
                        <strong>{benefit.title}:</strong> {benefit.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <ul className="list-unstyled">
                  {benefits.slice(Math.ceil(benefits.length / 2)).map((benefit, index) => (
                    <li key={index} className="d-flex align-items-start mb-3">
                      <i className="bi bi-check-circle-fill text-primary me-3 mt-1" style={{ fontSize: '20px' }}></i>
                      <div>
                        <strong>{benefit.title}:</strong> {benefit.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section light-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto" data-aos="fade-up">
              <div className="card border-0 shadow-lg" style={{
                background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
                borderRadius: '20px',
                padding: '3rem'
              }}>
                <div className="text-center text-white">
                  <h2 className="text-white mb-3">{cta?.title || 'Ready to Get Started?'}</h2>
                  <p className="lead mb-4 opacity-90">
                    {cta?.description || 'Contact us today for a free consultation and quote.'}
                  </p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link href="/#contact" className="btn btn-light btn-lg px-5">
                      <i className="bi bi-chat-dots me-2"></i>
                      Get Free Quote
                    </Link>
                    <a href="tel:+15157716993" className="btn btn-outline-light btn-lg px-5">
                      <i className="bi bi-telephone me-2"></i>
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section">
        <div className="container">
          <div className="section-title text-center" data-aos="fade-up">
            <h2>Related Services</h2>
            <p>Explore our other solutions</p>
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <Link href="/services/networking-cabling" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <i className="bi bi-hdd-network-fill text-primary mb-3" style={{ fontSize: '40px' }}></i>
                    <h5>Networking & Cabling</h5>
                    <p className="text-muted mb-0">Professional structured cabling solutions</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="150">
              <Link href="/services/security-access" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <i className="bi bi-shield-lock-fill text-primary mb-3" style={{ fontSize: '40px' }}></i>
                    <h5>Security & Access</h5>
                    <p className="text-muted mb-0">CCTV and access control systems</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <Link href="/services/managed-it-cloud" className="text-decoration-none">
                <div className="card h-100 border-0 shadow-sm hover-lift">
                  <div className="card-body p-4">
                    <i className="bi bi-cloud-check-fill text-primary mb-3" style={{ fontSize: '40px' }}></i>
                    <h5>Managed IT & Cloud</h5>
                    <p className="text-muted mb-0">24/7 IT support and cloud solutions</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}