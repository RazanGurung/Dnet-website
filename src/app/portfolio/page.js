import Link from 'next/link'
import Image from 'next/image'

export default function PortfolioPage() {
  // Featured projects
  const featuredProjects = [
    {
      src: '/assets/img/gallery/gallery-1.jpg',
      alt: 'Network Rack Installation',
      title: 'Enterprise Network Rack',
      description: 'Professional server rack installation with cable management and labeling'
    },
    {
      src: '/assets/img/gallery/gallery-2.jpg',
      alt: 'Cable Management System',
      title: 'Structured Cabling',
      description: 'Clean Cat6A installation with proper cable management and testing'
    },
    {
      src: '/assets/img/gallery/gallery-3.jpg',
      alt: 'Wi-Fi Setup Project',
      title: 'Enterprise Wi-Fi Network',
      description: 'High-performance wireless network deployment with seamless coverage'
    },
    {
      src: '/assets/img/gallery/gallery-4.jpg',
      alt: 'CCTV Camera Installation',
      title: 'Security Camera System',
      description: '4K IP cameras with night vision and remote monitoring capabilities'
    },
    {
      src: '/assets/img/gallery/gallery-5.jpg',
      alt: 'Server Room Infrastructure',
      title: 'Data Center Setup',
      description: 'Complete server room infrastructure with cooling and power management'
    }
  ]

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
              <li className="breadcrumb-item active text-white" aria-current="page">Portfolio</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-bold mb-3">Our Portfolio</h1>
          <p className="lead mb-0">Explore our recent networking and security installations</p>
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="gallery section">
        <div className="container section-title">
          <h2>Featured Projects</h2>
          <p>Showcasing our most impressive professional installations</p>
        </div>

        <div className="container">
          <div className="row g-4">
            {featuredProjects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="position-relative" style={{ height: '250px' }}>
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                      priority={index < 3}
                      quality={75}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-muted">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className="section">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h3>Project Categories</h3>
              <p className="text-muted">We specialize in various types of networking and security installations</p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-hdd-network text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h5>Network Infrastructure</h5>
                <p className="text-muted mb-0">
                  Enterprise-grade network installations with structured cabling and professional rack setups
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-camera-video text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h5>Security Systems</h5>
                <p className="text-muted mb-0">
                  CCTV installations with 4K cameras, night vision, and remote monitoring capabilities
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-wifi text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h5>Wireless Networks</h5>
                <p className="text-muted mb-0">
                  High-performance Wi-Fi deployments with seamless coverage and enterprise-grade access points
                </p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="card border-0 shadow-sm h-100 p-4 text-center">
                <div className="mb-3">
                  <i className="bi bi-server text-primary" style={{ fontSize: '3rem' }}></i>
                </div>
                <h5>Data Centers</h5>
                <p className="text-muted mb-0">
                  Complete server room setups with proper cooling, power management, and infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-light">
        <div className="container text-center">
          <h2 className="mb-4">Ready to Start Your Project?</h2>
          <p className="lead text-muted mb-4">
            Let's discuss how we can help with your networking and security needs
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/#contact" className="btn btn-primary btn-lg px-4">
              <i className="bi bi-chat-dots me-2"></i>
              Get Free Quote
            </Link>
            <Link href="/about" className="btn btn-outline-primary btn-lg px-4">
              <i className="bi bi-info-circle me-2"></i>
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
