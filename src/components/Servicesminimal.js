// src/components/ServicesMinimal.js
import Link from 'next/link'

export default function ServicesMinimal() {
  const coreServices = [
    {
      icon: 'bi bi-hdd-network-fill',
      title: 'Network Infrastructure',
      description: 'Complete cabling, switches, routers, and Wi-Fi setup for reliable connectivity.',
      features: ['Structured Cabling', 'Business Wi-Fi', 'Network Racks'],
      link: '/services/networking-cabling',
      color: 'primary'
    },
    {
      icon: 'bi bi-shield-lock-fill', 
      title: 'Security Systems',
      description: 'CCTV cameras, access control, and comprehensive security solutions.',
      features: ['IP Cameras', 'Access Control', 'Remote Monitoring'],
      link: '/services/security-access',
      color: 'success'
    },
    {
      icon: 'bi bi-cloud-check-fill',
      title: 'IT Support & Cloud',
      description: 'Managed IT services, cloud hosting, and 24/7 technical support.',
      features: ['24/7 Helpdesk', 'Cloud Hosting', 'Data Backup'],
      link: '/services/managed-it-cloud',
      color: 'info'
    }
  ]

  return (
    <section id="services-minimal" className="services-minimal section light-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">What We Do</h2>
          <p className="section-subtitle text-muted">
            Three core services that keep your business connected, secure, and running smoothly.
          </p>
        </div>

        {/* Core Services */}
        <div className="row g-4 mb-5">
          {coreServices.map((service, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="service-card-minimal h-100">
                <div className="card border-0 h-100 shadow-sm">
                  <div className="card-body p-4 text-center">
                    <div className={`service-icon-minimal bg-${service.color} bg-opacity-10 mb-4`}>
                      <i className={`${service.icon} text-${service.color}`}></i>
                    </div>
                    
                    <h4 className="service-title mb-3">{service.title}</h4>
                    <p className="service-description text-muted mb-4">{service.description}</p>
                    
                    <ul className="service-features-minimal list-unstyled mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <i className={`bi bi-check-circle-fill text-${service.color} me-2`}></i>
                          <small>{feature}</small>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={service.link} className={`btn btn-outline-${service.color} btn-sm`}>
                      Learn More <i className="bi bi-arrow-right ms-1"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* All Services Link */}
        <div className="text-center" data-aos="fade-up" data-aos-delay="400">
          <Link href="/#services" className="btn btn-primary">
            <i className="bi bi-grid-3x3-gap me-2"></i>
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}