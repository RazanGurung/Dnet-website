// src/components/WhyChooseUs.js
export default function WhyChooseUs() {
  const advantages = [
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Fast & Reliable',
      description: 'Most projects completed in 1-2 days with minimal downtime.',
      stat: '48hrs',
      statLabel: 'Average completion',
      color: 'warning'
    },
    {
      icon: 'bi bi-person-check-fill',
      title: 'Expert Team',
      description: '10+ years of enterprise experience with certified technicians.',
      stat: '10+',
      statLabel: 'Years experience',
      color: 'primary'
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'Transparent Pricing',
      description: 'No hidden fees. Upfront quotes with detailed breakdowns.',
      stat: '100%',
      statLabel: 'Price transparency',
      color: 'success'
    }
  ]

  return (
    <section className="why-choose-us section">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="section-title">Why Choose DNET?</h2>
          <p className="section-subtitle text-muted">
            Three reasons why businesses trust us with their IT infrastructure.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="row g-4">
          {advantages.map((advantage, index) => (
            <div key={index} className="col-lg-4" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
              <div className="advantage-card">
                <div className="advantage-content text-center">
                  <div className="advantage-icon-wrapper mb-4">
                    <div className={`advantage-icon bg-${advantage.color} bg-opacity-10`}>
                      <i className={`${advantage.icon} text-${advantage.color}`}></i>
                    </div>
                    <div className={`advantage-stat text-${advantage.color}`}>
                      <div className="stat-number">{advantage.stat}</div>
                      <div className="stat-label">{advantage.statLabel}</div>
                    </div>
                  </div>
                  
                  <h4 className="advantage-title mb-3">{advantage.title}</h4>
                  <p className="advantage-description text-muted">{advantage.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="social-proof mt-5 pt-5 border-top" data-aos="fade-up" data-aos-delay="400">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="d-flex align-items-center justify-content-center justify-content-lg-start">
                <div className="testimonial-avatars me-4">
                  <div className="avatar-group">
                    <div className="avatar">
                      <img src="/assets/img/testimonials/testimonials-1.jpg" alt="Client" className="rounded-circle" width="40" height="40" />
                    </div>
                    <div className="avatar">
                      <img src="/assets/img/testimonials/testimonials-2.jpg" alt="Client" className="rounded-circle" width="40" height="40" />
                    </div>
                    <div className="avatar">
                      <img src="/assets/img/testimonials/testimonials-3.jpg" alt="Client" className="rounded-circle" width="40" height="40" />
                    </div>
                    <div className="avatar more">
                      <span className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center">+50</span>
                    </div>
                  </div>
                </div>
                <div className="testimonial-text">
                  <div className="stars mb-1">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                  </div>
                  <p className="mb-0"><strong>500+ happy clients</strong> trust us with their IT infrastructure</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end mt-3 mt-lg-0">
              <a href="#testimonials" className="btn btn-outline-primary btn-sm">
                Read Reviews <i className="bi bi-arrow-right ms-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}