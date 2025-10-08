'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: '',
    city: '',
    services: [],
    site_type: '',
    project_stage: '',
    budget: '',
    timeline: '',
    contact_method: 'Email',
    best_time: '',
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

    // Honeypot check
    if (formData.company_website) return

    // Validate at least one service selected
    if (formData.services.length === 0) {
      setStatus({ type: 'danger', message: 'Please select at least one service.' })
      setIsSubmitting(false)
      return
    }

    // Validate email or phone
    if (!formData.email && !formData.phone) {
      setStatus({ type: 'danger', message: 'Please provide an email or phone so we can reach you.' })
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
        // Reset form
        setFormData({
          name: '', email: '', phone: '', zip: '', city: '', services: [],
          site_type: '', project_stage: '', budget: '', timeline: '',
          contact_method: 'Email', best_time: '', message: ''
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
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Have a question or need a custom networking solution? Get in touch with us—we're here to help 24/7.</p>
      </div>

      {/* Google Maps */}
      <div className="mb-5" data-aos="fade-up" data-aos-delay="200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103284.42852800095!2d-80.06669938857394!3d36.00470119641944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88530bc771b841eb%3A0xf2ee8a2d049910df!2sHigh%20Point%2C%20NC!5e0!3m2!1sen!2sus!4v1747770831534!5m2!1sen!2sus"
          style={{ border: 0, width: '100%', height: '270px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {/* Contact Info */}
          <div className="col-lg-4">
            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
              <i className="bi bi-geo-alt flex-shrink-0"></i>
              <div>
                <h3>Location</h3>
                <p>520 N martin lutherking road, winston-salem, NC 27103</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
              <i className="bi bi-telephone flex-shrink-0"></i>
              <div>
                <h3>Call Us</h3>
                <p>+1 515 771 6993</p>
              </div>
            </div>

            <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="500">
              <i className="bi bi-envelope flex-shrink-0"></i>
              <div>
                <h3>Email Us</h3>
                <p>tilakgurung10@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-8">
            <form 
              onSubmit={handleSubmit}
              className="php-email-form needs-validation"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Honeypot */}
              <input 
                type="text" 
                name="company_website" 
                className="d-none" 
                tabIndex="-1" 
                autoComplete="off"
                onChange={handleChange}
              />

              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="q-name" className="form-label">Your Name</label>
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

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="q-email" className="form-label">Email</label>
                  <input 
                    id="q-email"
                    type="email" 
                    name="email" 
                    className="form-control" 
                    placeholder="name@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="form-text">Provide email or phone (at least one).</div>
                </div>

                {/* Phone */}
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
                </div>

                {/* ZIP */}
                <div className="col-md-3">
                  <label htmlFor="q-zip" className="form-label">ZIP Code</label>
                  <input 
                    id="q-zip"
                    type="text" 
                    name="zip" 
                    className="form-control" 
                    placeholder="27101"
                    value={formData.zip}
                    onChange={handleChange}
                    required 
                  />
                </div>

                {/* City */}
                <div className="col-md-3">
                  <label htmlFor="q-city" className="form-label">City</label>
                  <input 
                    id="q-city"
                    type="text" 
                    name="city" 
                    className="form-control" 
                    placeholder="Winston-Salem"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                {/* Services Checkboxes */}
                <div className="col-12">
                  <label className="form-label d-flex align-items-center">
                    What can we help with? <span className="ms-1 text-danger">*</span>
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

                {/* Site Type */}
                <div className="col-md-6">
                  <label htmlFor="q-site-type" className="form-label">Site Type</label>
                  <select 
                    id="q-site-type"
                    className="form-select" 
                    name="site_type"
                    value={formData.site_type}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option>Office</option>
                    <option>Warehouse / Industrial</option>
                    <option>Retail / Restaurant</option>
                    <option>Residential</option>
                    <option>Campus / Multi-site</option>
                  </select>
                </div>

                {/* Project Stage */}
                <div className="col-md-6">
                  <label htmlFor="q-project-stage" className="form-label">Project Stage</label>
                  <select 
                    id="q-project-stage"
                    className="form-select" 
                    name="project_stage"
                    value={formData.project_stage}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option>Planning / Bidding</option>
                    <option>Permitting / Pre-wire</option>
                    <option>Active Buildout</option>
                    <option>Existing Site / Upgrade</option>
                    <option>Emergency / Outage</option>
                  </select>
                </div>

                {/* Budget */}
                <div className="col-md-6">
                  <label htmlFor="q-budget" className="form-label">Rough Budget</label>
                  <select 
                    id="q-budget"
                    className="form-select" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Select range (optional)</option>
                    <option>Under $2,500</option>
                    <option>$2,500 – $10,000</option>
                    <option>$10,000 – $25,000</option>
                    <option>$25,000 – $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>

                {/* Timeline */}
                <div className="col-md-6">
                  <label htmlFor="q-timeline" className="form-label">Timeline</label>
                  <select 
                    id="q-timeline"
                    className="form-select" 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="">Choose...</option>
                    <option>ASAP</option>
                    <option>2–4 weeks</option>
                    <option>1–2 months</option>
                    <option>3+ months</option>
                  </select>
                </div>

                {/* Contact Method */}
                <div className="col-md-6">
                  <label className="form-label">Preferred Contact</label>
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="contact_method" 
                        id="c-email" 
                        value="Email"
                        checked={formData.contact_method === 'Email'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="c-email">Email</label>
                    </div>
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="radio" 
                        name="contact_method" 
                        id="c-phone" 
                        value="Phone"
                        checked={formData.contact_method === 'Phone'}
                        onChange={handleChange}
                      />
                      <label className="form-check-label" htmlFor="c-phone">Phone</label>
                    </div>
                  </div>
                </div>

                {/* Best Time */}
                <div className="col-md-6">
                  <label htmlFor="q-best-time" className="form-label">Best Time to Reach</label>
                  <select 
                    id="q-best-time"
                    className="form-select" 
                    name="best_time"
                    value={formData.best_time}
                    onChange={handleChange}
                  >
                    <option value="">Anytime</option>
                    <option>Morning</option>
                    <option>Afternoon</option>
                    <option>Evening</option>
                  </select>
                </div>

                {/* Message */}
                <div className="col-12">
                  <label htmlFor="q-message" className="form-label">Brief Description</label>
                  <textarea 
                    id="q-message"
                    name="message" 
                    className="form-control" 
                    rows="5"
                    placeholder="Tell us the scope: # of drops, rooms, floors, cameras, APs, etc."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="form-text">Optional: paste a link to floor plans or photos (Drive/Dropbox).</div>
                </div>

                {/* Submit Button */}
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
                  <div className="small text-muted mt-2">
                    We typically reply within one business day.
                  </div>
                </div>
              </div>

              {/* Status Message */}
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