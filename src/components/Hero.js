import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="hero section light-background">
      {/* Background Image */}
      <Image 
        src="/assets/img/hero-bg.svg" 
        alt="" 
        fill
        priority
        style={{ objectFit: 'cover' }}
        data-aos="fade-in"
      />
      
      <div className="container position-relative">
        {/* Welcome Text */}
        <div className="welcome position-relative" data-aos="fade-down" data-aos-delay="100">
          <h2>WELCOME TO DIGITAL NETWORK ENGINEERING TECHNOLOGY</h2>
          <p>Structured. Secured. Seamless. Expert Networking for Every Building</p>
        </div>

        {/* Main Content */}
        <div className="content row gy-4">
          {/* Why Choose DNET Box */}
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="why-box" data-aos="zoom-out" data-aos-delay="200">
              <h3>Why Choose DNET?</h3>
              <p>
                We design, install, and support the technology your building runs on—from Cat6/fiber cabling, Wi-Fi, and clean IDF/MDF racks to CCTV, access control, cloud, and IT. One accountable team, tidy and certified work, and responsive support—so your network is reliable, secure, and ready to grow.
              </p>
              <div className="text-center">
                <Link href="#about" className="more-btn">
                  <span>Learn More</span> <i className="bi bi-chevron-right"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Icon Boxes */}
          <div className="col-lg-8 d-flex align-items-stretch">
            <div className="d-flex flex-column justify-content-center">
              <div className="row gy-4">

                {/* 1) Network Infrastructure */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="300">
                    <i className="bi bi-hdd-network"></i>
                    <h4>Network Infrastructure</h4>
                    <p>
                      Cat6/Fiber cabling, business Wi-Fi, switches/routers, clean IDF/MDF racks, 
                      and office/warehouse pre-wire & relocations.
                    </p>
                  </div>
                </div>

                {/* 2) Security & Life Safety */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="400">
                    <i className="bi bi-shield-lock"></i>
                    <h4>Security & Access</h4>
                    <p>
                      CCTV with NVR/VMS & remote viewing, access control with magnetic locks, 
                      intercoms, and hardened device networks.
                    </p>
                  </div>
                </div>

                {/* 3) IT, Cloud & Digital Solutions */}
                <div className="col-xl-4 d-flex align-items-stretch">
                  <div className="icon-box" data-aos="zoom-out" data-aos-delay="500">
                    <i className="bi bi-cloud-check"></i>
                    <h4>IT, Cloud & Digital Solutions</h4>
                    <p>
                      Managed IT support, backups & data retrieval, cloud setup & hosting, 
                      business websites & SEO, and custom internal apps.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}