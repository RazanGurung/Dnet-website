// src/components/WhyChooseUs.js
import Link from 'next/link'

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: 'bi bi-lightning-charge-fill',
      title: 'Fast & Reliable',
      description: 'Most projects completed in 1-2 days with minimal downtime.',
      color: 'warning'
    },
    {
      icon: 'bi bi-person-check-fill',
      title: 'Expert Team',
      description: '10+ years of enterprise experience with certified technicians.',
      color: 'primary'
    },
    {
      icon: 'bi bi-cash-coin',
      title: 'Transparent Pricing',
      description: 'No hidden fees. Upfront quotes with detailed breakdowns.',
      color: 'success'
    }
  ]

  return (
    <section id="why-choose-us" className="why-choose-us section light-background">
      <div className="container">
        <div className="row g-5 align-items-center">
          {/* Left Half - Three Cards Stacked */}
          <div className="col-lg-6">
            <div className="d-flex flex-column gap-4">
              {advantages.map((advantage, index) => (
                <div key={index} className="card border-0 shadow-sm p-4">
                  <div className="d-flex align-items-start gap-3">
                    <div className={`flex-shrink-0 p-3 rounded bg-${advantage.color} bg-opacity-10`}>
                      <i className={`${advantage.icon} text-${advantage.color}`} style={{ fontSize: '2rem' }}></i>
                    </div>
                    <div className="flex-grow-1">
                      <h4 className="mb-2">{advantage.title}</h4>
                      <p className="text-muted mb-0">{advantage.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Half - Description Content */}
          <div className="col-lg-6">
            <div className="pe-lg-4">
              <h2 className="mb-4">Why Choose DNET?</h2>
              <p className="lead mb-4">
                For over a decade, we've been the trusted partner for businesses across Winston-Salem and the Greater Triad area.
              </p>
              <p className="mb-4">
                Our commitment goes beyond just installing cables and configuring routers. We take the time to understand your business, your challenges, and your goals. Then we design and deploy IT infrastructure that doesn't just work—it works for you.
              </p>

              {/* Stats */}
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <h3 className="text-primary mb-1">500+</h3>
                    <p className="text-muted small mb-0">Projects Completed</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center p-3 bg-white rounded shadow-sm">
                    <h3 className="text-primary mb-1">10+</h3>
                    <p className="text-muted small mb-0">Years Experience</p>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-3">
                <Link href="/about" className="btn btn-primary">
                  Learn More About Us
                </Link>
                <Link href="#contact" className="btn btn-outline-primary">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}