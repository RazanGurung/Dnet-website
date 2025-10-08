import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="row gy-4 gx-5">

          {/* Left: Video/Image with Play Button */}
          <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="200">
            <figure className="position-relative m-0">
              <Image 
                src="/assets/img/about.svg" 
                className="img-fluid" 
                alt="DNET technicians working on a network rack" 
                width={800}
                height={600}
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
          <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="100">
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
                <i className="bi bi-code-slash"></i>
                <div>
                  <h5>Web & App Development</h5>
                  <p>Modern websites with SEO, internal tools and custom apps, integrations/APIs, and analytics that drive real results.</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}