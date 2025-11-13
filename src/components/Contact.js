'use client'

import { useState } from 'react'
import { CONTACT_INFO } from '@/config/contact'

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
      const response = await fetch(CONTACT_INFO.formspree.endpoint, {
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
      <div className="container section-title">
        <h2>Contact</h2>
        <p>Have a question or need a custom networking solution? Get in touch with us—we're here to help 24/7.</p>
      </div>

      {/* Simple Map Link - Much Faster than iframe */}
      <div className="mb-5">
        <div className="text-center p-4 bg-light rounded">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT_INFO.address.full)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary btn-lg"
          >
            <i className="bi bi-geo-alt me-2"></i>
            View on Google Maps
          </a>
          <p className="mt-3 mb-0 text-muted small">
            {CONTACT_INFO.address.full}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="info-item d-flex">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>{CONTACT_INFO.address.full}</p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p><a href={CONTACT_INFO.phone.link}>{CONTACT_INFO.phone.display}</a></p>
              </div>
            </div>

            <div className="info-item d-flex">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p><a href={`mailto:${CONTACT_INFO.email.primary}`}>{CONTACT_INFO.email.primary}</a></p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form
              onSubmit={handleSubmit}
              className="php-email-form"
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