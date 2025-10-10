import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Structured Cabling',
      description: 'Professional Cat5/6/6A, fiber optic, and coaxial cable installation with proper documentation and testing.',
      features: ['Site Survey', 'Cable Management', 'Certification'],
      link: '/services/networking-cabling',
      delay: 100,
      color: '#0066cc'
    },
    {
      icon: 'fa-solid fa-wifi',
      title: 'Network Infrastructure',
      description: 'Enterprise-grade switching, routing, VLANs, and business Wi-Fi with comprehensive coverage planning.',
      features: ['Router Setup', 'Switch Config', 'Wi-Fi Optimization'],
      link: '/services/switching-routing-wifi',
      delay: 150,
      color: '#00a8cc'
    },
    {
      icon: 'fa-solid fa-video',
      title: 'CCTV & Surveillance',
      description: 'High-definition security camera systems with NVR/VMS, remote viewing, and 24/7 recording capabilities.',
      features: ['HD Cameras', 'Remote Access', 'Cloud Storage'],
      link: '/services/security-access',
      delay: 200,
      color: '#00cc88'
    },
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Access Control',
      description: 'Secure access management with card readers, magnetic locks, intercoms, and integrated systems.',
      features: ['Card Systems', 'Biometric', 'Integration'],
      link: '/services/security-access',
      delay: 250,
      color: '#cc6600'
    },
    {
      icon: 'fa-solid fa-building',
      title: 'Office Setup',
      description: 'Complete office and warehouse network deployment, from pre-wiring to full infrastructure rollout.',
      features: ['Pre-Construction', 'Installation', 'Testing'],
      link: '/services/office-relocation',
      delay: 300,
      color: '#8800cc'
    },
    {
      icon: 'fa-solid fa-cloud-arrow-up',
      title: 'Cloud & IT Support',
      description: 'Managed IT services, cloud hosting, Microsoft 365/Google Workspace, and 24/7 helpdesk support.',
      features: ['Helpdesk', 'Cloud Migration', 'Maintenance'],
      link: '/services/managed-it-cloud',
      delay: 350,
      color: '#cc0066'
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
              <div className="service-card h-100">
                <div className="service-icon-wrapper" style={{ '--service-color': service.color }}>
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
          <div className="col-12 text-center" data-aos="fade-up" data-aos-delay="400">
            <div className="cta-box p-5 rounded-4 bg-primary bg-gradient text-white">
              <h3 className="mb-3">Need a Custom Solution?</h3>
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

      <style jsx>{`
        .service-card {
          background: white;
          border-radius: 16px;
          padding: 2rem;
          border: 2px solid #f0f0f0;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          border-color: var(--primary-color);
          box-shadow: 0 20px 40px rgba(0, 102, 204, 0.1);
          transform: translateY(-8px);
        }

        .service-icon-wrapper {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--service-color), color-mix(in srgb, var(--service-color), white 20%));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
          transition: all 0.3s ease;
        }

        .service-card:hover .service-icon-wrapper {
          transform: scale(1.1) rotate(5deg);
        }

        .service-icon-wrapper i {
          font-size: 32px;
          color: white;
        }

        .service-content {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .service-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--dark-color);
        }

        .service-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s;
        }

        .service-card:hover .service-title a {
          color: var(--primary-color);
        }

        .service-description {
          color: #6c757d;
          margin-bottom: 1.5rem;
          line-height: 1.7;
          flex-grow: 1;
        }

        .service-features {
          list-style: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .service-features li {
          padding: 0.5rem 0;
          font-size: 0.95rem;
          color: #495057;
        }

        .service-link {
          color: var(--primary-color);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          transition: all 0.3s;
        }

        .service-link:hover {
          color: var(--primary-dark);
          transform: translateX(4px);
        }

        .cta-box {
          background: linear-gradient(135deg, var(--primary-color), var(--primary-dark)) !important;
          box-shadow: 0 20px 40px rgba(0, 102, 204, 0.2);
        }
      `}</style>
    </section>
  )
}