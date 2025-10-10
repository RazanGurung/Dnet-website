import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Structured Cabling',
      description: 'Professional Cat5/6/6A, fiber optic, and coaxial cable installation with proper documentation and testing.',
      features: ['Site Survey', 'Cable Management', 'Certification'],
      link: '/services/networking-cabling',
      delay: 100
    },
    {
      icon: 'fa-solid fa-wifi',
      title: 'Network Infrastructure',
      description: 'Enterprise-grade switching, routing, VLANs, and business Wi-Fi with comprehensive coverage planning.',
      features: ['Router Setup', 'Switch Config', 'Wi-Fi Optimization'],
      link: '/services/switching-routing-wifi',
      delay: 150
    },
    {
      icon: 'fa-solid fa-video',
      title: 'CCTV & Surveillance',
      description: 'High-definition security camera systems with NVR/VMS, remote viewing, and 24/7 recording capabilities.',
      features: ['HD Cameras', 'Remote Access', 'Cloud Storage'],
      link: '/services/security-access',
      delay: 200
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Access Control',
      description: 'Secure access management with card readers, magnetic locks, intercoms, and integrated systems.',
      features: ['Card Systems', 'Biometric', 'Integration'],
      link: '/services/security-access',
      delay: 250
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Office Setup',
      description: 'Complete office and warehouse network deployment, from pre-wiring to full infrastructure rollout.',
      features: ['Pre-Construction', 'Installation', 'Testing'],
      link: '/services/office-relocation',
      delay: 300
    },
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Cloud & IT Support',
      description: 'Managed IT services, cloud hosting, Microsoft 365/Google Workspace, and 24/7 helpdesk support.',
      features: ['Helpdesk', 'Cloud Migration', 'Maintenance'],
      link: '/services/managed-it-cloud',
      delay: 350
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
                <div className="service-icon-wrapper">
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
          <div className="col-12" data-aos="fade-up" data-aos-delay="400">
            <div className="cta-box p-5 rounded-4 text-white text-center">
              <h3 className="mb-3 text-white">Need a Custom Solution?</h3>
              <p className="lead mb-4">
                Every business is unique. Let's discuss your specific requirements and 
                create a tailored solution that fits your needs perfectly.
              </p>
              <Link href="#contact" className="btn btn-light btn-lg px-5">
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