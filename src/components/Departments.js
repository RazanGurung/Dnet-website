import Image from 'next/image'

export default function Departments() {
  return (
    <section id="departments" className="departments section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Lead Technician Profile</h2>
        <p>Tilak, a master in networking with 10+ years of experience, delivers expert IT, cabling, and CCTV solutions for homes, offices, and industries</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          {/* Left: Tab Navigation */}
          <div className="col-lg-3">
            <ul className="nav nav-tabs flex-column">
              <li className="nav-item">
                <a 
                  className="nav-link active show" 
                  data-bs-toggle="tab" 
                  href="#departments-tab-1"
                >
                  Meet Tilak
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Tab Content */}
          <div className="col-lg-9 mt-4 mt-lg-0">
            <div className="tab-content">
              <div className="tab-pane active show" id="departments-tab-1">
                <div className="row">
                  <div className="col-lg-8 details order-2 order-lg-1">
                    <h3>Lead Network Technician & Founder</h3>
                    <p className="fst-italic">
                      Tilak is a seasoned IT and network engineering professional with over 10 years of hands-on experience in the field. He holds a Master's degree in Networking and has built a career delivering high-quality IT solutions to clients across diverse sectors—from large enterprises to small businesses, and residential homes.
                    </p>
                    <p>
                      Throughout his career, Tilak has successfully planned and deployed private network infrastructures, structured cabling systems, CCTV surveillance setups, and comprehensive IT support services. His expertise spans both commercial and residential environments, making him a trusted partner for robust and secure connectivity solutions.
                    </p>
                    <p>
                      Having spent several years working with Spectrum, one of the nation's leading telecommunications companies, Tilak brings deep industry knowledge and a commitment to excellence in every project. Whether you're looking to upgrade your home network, implement an enterprise-grade solution, or secure your building with advanced surveillance systems, Tilak brings the experience, professionalism, and dedication you can rely on.
                    </p>
                  </div>
                  
                  <div className="col-lg-4 text-center order-1 order-lg-2">
                    <Image 
                      src="/assets/img/departments-1.jpg" 
                      alt="Tilak - Lead Network Technician" 
                      width={400}
                      height={500}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Additional tab panes if needed */}
              <div className="tab-pane" id="departments-tab-2"></div>
              <div className="tab-pane" id="departments-tab-3"></div>
              <div className="tab-pane" id="departments-tab-4"></div>
              <div className="tab-pane" id="departments-tab-5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}