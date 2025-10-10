'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    services: [],
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        services: checked 
          ? [...prev.services, value]
          : prev.services.filter(s => s !== value)
      }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    if (formData.services.length === 0) {
      setStatus({ type: 'danger', message: 'Please select at least one service.' })
      setIsSubmitting(false)
      return
    }

    if (!formData.email && !formData.phone) {
      setStatus({ type: 'danger', message: 'Please provide an email or phone.' })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('https://formspree.io/f/xpwdnbkr', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Quote Request: ${formData.services.join(', ')}`
        })
      })

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Thanks! Your request has been sent. We\'ll follow up shortly.' 
        })
        setFormData({
          name: '', email: '', phone: '', services: [], message: ''
        })
      } else {
        setStatus({ 
          type: 'danger', 
          message: '❌ Something went wrong. Please try again.' 
        })
      }
    } catch (error) {
      setStatus({ 
        type: 'danger', 
        message: '❌ Network error. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a question or need a custom networking solution? Get in touch with us—we're here to help 24/7.</p>
      </div>

      {/* Lazy-loaded Google Maps */}
      <div className="mb-5" data-aos="fade-up" data-aos-delay="100">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103284.42852800095!2d-80.06669938857394!3d36.00470119641944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530bc771b841eb%3A0xf2ee8a2d049910df!2sHigh%20Point%2C%20NC!5e0!3m2!1sen!2sus!4v1747770831534!5m2!1sen!2sus"
          style={{ border: 0, width: '100%', height: '270px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DNET Location Map"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>520 N Martin Luther King Rd, Winston-Salem, NC 27103</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="250">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:+15157716993">+1 515 771 6993</a></p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:tilakgurung10@gmail.com">tilakgurung10@gmail.com</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form 
              onSubmit={handleSubmit}
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="q-name" className="form-label">Your Name *</label>
                  <input 
                    id="q-name"
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="q-email" className="form-label">Email *</label>
                  <input 
                    id="q-email"
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="q-phone" className="form-label">Phone</label>
                  <input 
                    id="q-phone"
                    type="tel" 
                    name="phone" 
                    className="form-control" 
                    placeholder="(555) 123-4567"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <div className="form-text">Provide email or phone (at least one).</div>
                </div>

                <div className="col-12">
                  <label className="form-label">
                    What can we help with? <span className="text-danger">*</span>
                  </label>
                  <div className="row row-cols-1 row-cols-md-2 g-2">
                    {[
                      'Networking & Cabling',
                      'Switching, Routing & Wi-Fi',
                      'Security, CCTV & Access',
                      'Office Relocation / New Site',
                      'Backup, Recovery & Data',
                      'Managed IT & Cloud',
                      'Web, SEO & Software'
                    ].map((service, i) => (
                      <div className="col" key={i}>
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            name="services" 
                            value={service}
                            id={`s${i}`}
                            checked={formData.services.includes(service)}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor={`s${i}`}>
                            {service}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="q-message" className="form-label">Brief Description *</label>
                  <textarea 
                    id="q-message"
                    name="message" 
                    className="form-control" 
                    rows="5"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="col-12 text-center">
                  <button 
                    type="submit" 
                    className="btn btn-primary px-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Sending...
                      </>
                    ) : (
                      'Request Quote'
                    )}
                  </button>
                </div>
              </div>

              {status.message && (
                <div className={`alert alert-${status.type} mt-3`} role="alert">
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}