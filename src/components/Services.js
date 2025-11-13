import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: 'bi bi-hdd-network-fill',
      title: 'Networking & Cabling',
      tagline: 'Structured cabling and fiber optic installation',
      link: '/services/networking-cabling'
    },
    {
      icon: 'bi bi-wifi',
      title: 'Switching, Routing & Wi-Fi',
      tagline: 'Enterprise-grade network infrastructure',
      link: '/services/switching-routing-wifi'
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Security, CCTV & Access',
      tagline: 'Complete surveillance and access control',
      link: '/services/security-access'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Backup, Recovery & Data',
      tagline: 'Enterprise backup and disaster recovery',
      link: '/services/data-recovery'
    },
    {
      icon: 'bi bi-cloud-check-fill',
      title: 'Managed IT & Cloud',
      tagline: '24/7 support and proactive monitoring',
      link: '/services/managed-it-cloud'
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Web, SEO & Software',
      tagline: 'Modern websites and custom applications',
      link: '/services/web-seo-software'
    }
  ]

  return (
    <section id="services" className="services section services-gradient-bg">
      {/* Section Title */}
      <div className="container section-title">
        <h2>Our Services</h2>
        <p className="text-muted">
          Comprehensive IT and networking solutions for your business
        </p>
      </div>

      <div className="container">
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6"
            >
              <Link href={service.link} className="text-decoration-none">
                <div className="card border-0 shadow-sm h-100 p-4 text-center service-card-hover">
                  <div className="mb-3">
                    <i className={`${service.icon} text-primary`} style={{ fontSize: '3rem' }}></i>
                  </div>
                  <h4 className="mb-2">{service.title}</h4>
                  <p className="text-muted mb-3">{service.tagline}</p>
                  <div className="mt-auto">
                    <span className="text-primary fw-semibold">
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}