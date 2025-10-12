import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: 'bi bi-hdd-network-fill',
      title: 'Networking & Cabling',
      description: 'Professional Cat5/6/6A, fiber optic, and structured cabling installation with proper documentation and testing.',
      features: ['Structured Cabling', 'Cable Management', 'Testing & Certification'],
      link: '/services/networking-cabling',
      delay: 100
    },
    {
      icon: 'bi bi-wifi',
      title: 'Switching, Routing & Wi-Fi',
      description: 'Enterprise-grade network switching, routing configuration, and high-performance Wi-Fi solutions.',
      features: ['Managed Switches', 'Router Config', 'Business Wi-Fi'],
      link: '/services/switching-routing-wifi',
      delay: 150
    },
    {
      icon: 'bi bi-shield-lock-fill',
      title: 'Security, CCTV & Access',
      description: 'Comprehensive security camera systems, access control, and surveillance solutions for complete protection.',
      features: ['HD IP Cameras', 'Access Control', 'Remote Monitoring'],
      link: '/services/security-access',
      delay: 200
    },
    {
      icon: 'bi bi-building-fill',
      title: 'Office Relocation & New Sites',
      description: 'Complete IT infrastructure deployment for new offices, relocations, and warehouse setups.',
      features: ['Pre-Construction', 'Full Installation', 'Turnkey Deployment'],
      link: '/services/office-relocation',
      delay: 250
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Backup, Recovery & Data',
      description: 'Enterprise backup solutions, disaster recovery, and comprehensive data protection services.',
      features: ['Cloud Backup', 'Disaster Recovery', 'Data Protection'],
      link: '/services/data-recovery',
      delay: 300
    },
    {
      icon: 'bi bi-cloud-check-fill',
      title: 'Managed IT & Cloud',
      description: '24/7 managed IT support, cloud hosting, Microsoft 365, and proactive maintenance for businesses.',
      features: ['24/7 Helpdesk', 'Cloud Hosting', 'Proactive Monitoring'],
      link: '/services/managed-it-cloud',
      delay: 350
    },
    {
      icon: 'bi bi-code-slash',
      title: 'Web, SEO & Software',
      description: 'Modern websites with SEO optimization, custom web applications, and software development services.',
      features: ['Website Design', 'SEO Optimization', 'Custom Apps'],
      link: '/services/web-seo-software',
      delay: 400
    }
  ]

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Services</h2>
        <p className="lead">
          Comprehensive IT and networking solutions designed to keep your business connected, 
          secure, and running at peak performance.
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6" 
              data-aos="fade-up" 
              data-aos-delay={service.delay}
            >
              <div className="service-card">
                <div className="service-icon-overlay">
                  <i className={service.icon}></i>
                </div>
                
                <div className="service-content">
                  <h3 className="service-title">
                    <Link href={service.link}>
                      {service.title}
                    </Link>
                  </h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>

                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link href={service.link} className="service-link">
                    Learn More <i className="bi bi-arrow-right ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="row mt-5 pt-5">
          <div className="col-12" data-aos="fade-up" data-aos-delay="450">
            <div className="service-cta-box p-5 rounded-4 text-center">
              <h3 className="mb-3 text-white fw-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                Need a Custom Solution?
              </h3>
              <p className="lead mb-4 text-white" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                Every business is unique. Let's discuss your specific requirements and 
                create a tailored solution that fits your needs perfectly.
              </p>
              <Link href="#contact" className="btn btn-light btn-lg px-5 shadow">
                <i className="bi bi-chat-dots me-2"></i>
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}