import Link from 'next/link'

export default function Services() {
  const services = [
    {
      icon: 'fas fa-heartbeat',
      title: 'Structured Cabling (Cat5, Cat6, Fiber, Coax)',
      description: 'We design and install structured cabling systems using Cat5, Cat6, fiber optics, and coaxial cables for reliable, high-speed connectivity across homes, offices, and commercial buildings.',
      link: '#',
      delay: 100
    },
    {
      icon: 'fa-solid fa-network-wired',
      title: 'Networking & Cabling',
      description: 'Site survey & design, CAT6/CAT6A & fiber, coax, and tidy IDF/MDF racks—planned, labeled, and certified.',
      link: '/services/networking-cabling',
      delay: 100
    },
    {
      icon: 'fa-solid fa-wifi',
      title: 'Switching, Routing & Wi-Fi',
      description: 'Routers, switches, VLANs/QoS, SD-WAN, and business Wi-Fi with heatmaps and controller/APs.',
      link: '/services/switching-routing-wifi',
      delay: 150
    },
    {
      icon: 'fa-solid fa-video',
      title: 'Security, CCTV & Access',
      description: 'CCTV design, NVR/VMS & remote view, magnetic locks, card/fob readers, intercoms, and device hardening.',
      link: '/services/security-access',
      delay: 200
    },
    {
      icon: 'fa-solid fa-truck',
      title: 'Office Relocation & New Sites',
      description: 'Pre-construction cabling plans, ISP coordination, drops & AP placement, MAC/cutover, and warehouse Wi-Fi.',
      link: '/services/office-relocation',
      delay: 250
    },
    {
      icon: 'fa-solid fa-database',
      title: 'Backup, Recovery & Data',
      description: 'Image backups, NAS/SAN snapshots, DR planning & tests, and fast file/data restores.',
      link: '/services/data-recovery',
      delay: 300
    },
    {
      icon: 'fa-solid fa-code',
      title: 'Web, SEO & Custom Software',
      description: 'Business websites, technical/local SEO, internal apps & workflows, integrations/APIs, analytics.',
      link: '/services/web-seo-software',
      delay: 350
    },
    {
      icon: 'fa-solid fa-cloud',
      title: 'Managed IT & Cloud',
      description: 'Helpdesk/on-site, patching, M365/Google, hosting/VPS, cloud backup, firewalls/VPN, endpoint security.',
      link: '/services/managed-it-cloud',
      delay: 400
    },
    {
      icon: 'fa-solid fa-tools',
      title: 'Maintenance & Troubleshooting',
      description: 'From diagnostics to upgrades, our team provides reliable, ongoing support to keep your network performing at its best.',
      link: '#',
      delay: 600
    }
  ]

  return (
    <section id="services" className="services section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>Trust us to deliver reliable, secure, and expertly crafted networking and IT solutions—tailored to your space and built to last.</p>
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
              <div className="service-item position-relative h-100">
                <div className="icon">
                  <i className={service.icon}></i>
                </div>
                <Link href={service.link} className="stretched-link">
                  <h3>{service.title}</h3>
                </Link>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}