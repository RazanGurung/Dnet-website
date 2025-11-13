// src/app/quote/page.js
'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    projectDescription: '',
    timeline: '',
    budget: '',
    address: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceTypes = [
    'CCTV & Security Cameras',
    'Networking & Structured Cabling',
    'Wi-Fi & Wireless Networks',
    'Server Rack Installation',
    'Access Control Systems',
    'Web Development',
    'Cloud Computing Setup',
    'Managed IT Services',
    'Office Relocation',
    'Other/Multiple Services'
  ]

  const timelineOptions = [
    'Urgent (Within 1 week)',
    'Soon (1-2 weeks)',
    'Flexible (2-4 weeks)',
    'Planning ahead (1+ months)',
    'Just exploring options'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    const emailBody = `
New Quote Request

Contact Information:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Address: ${formData.address || 'N/A'}

Project Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Type: ${formData.serviceType}
Timeline: ${formData.timeline}
Budget Range: ${formData.budget || 'Not specified'}

Project Description:
${formData.projectDescription}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Please respond with a detailed quote.
    `

    try {
      const response = await fetch('https://formspree.io/f/xpwdnbkr', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          serviceType: formData.serviceType,
          message: emailBody,
          _subject: `Quote Request: ${formData.serviceType} - ${formData.name}`
        })
      })

      if (response.ok) {
        setStatus({
          type: 'success',
          message: '✅ Quote request sent successfully! We\'ll review your requirements and send you a detailed quote within 24 hours.'
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          projectDescription: '',
          timeline: '',
          budget: '',
          address: ''
        })

        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 100)
      } else {
        setStatus({
          type: 'danger',
          message: '❌ Something went wrong. Please try again or call us directly at +1 (515) 771-6993.'
        })
      }
    } catch (error) {
      setStatus({
        type: 'danger',
        message: '❌ Network error. Please check your connection and try again.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero section" style={{
        minHeight: '40vh',
        background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)',
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div className="container position-relative text-center text-white py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb justify-content-center bg-transparent">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Request Quote</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-bold mb-3">Request a Custom Quote</h1>
          <p className="lead mb-4" style={{ maxWidth: '700px', margin: '0 auto' }}>
            Tell us about your project and we'll provide a detailed, customized quote within 24 hours.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <a href="tel:+15157716993" className="btn btn-light btn-lg">
              <i className="bi bi-telephone me-2"></i>
              Call +1 (515) 771-6993
            </a>
            <Link href="/#contact" className="btn btn-outline-light btn-lg">
              <i className="bi bi-chat-dots me-2"></i>
              Live Chat Support
            </Link>
          </div>
        </div>
      </section>

      {/* Status Message */}
      {status.message && (
        <div className="container mt-4">
          <div className={`alert alert-${status.type} alert-dismissible fade show`} role="alert">
            {status.message}
            <button
              type="button"
              className="btn-close"
              onClick={() => setStatus({ type: '', message: '' })}
              aria-label="Close"
            ></button>
          </div>
        </div>
      )}

      {/* Quote Request Form */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Main Form */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0 p-4">
                  <h3 className="mb-0">
                    <i className="bi bi-file-text me-2 text-primary"></i>
                    Quote Request Form
                  </h3>
                  <p className="text-muted mb-0 mt-2">Fill out the details below and we'll get back to you with a comprehensive quote</p>
                </div>
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit}>
                    {/* Contact Information */}
                    <div className="mb-5">
                      <h5 className="mb-3 pb-2 border-bottom">
                        <i className="bi bi-person-circle me-2 text-primary"></i>
                        Contact Information
                      </h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="name" className="form-label fw-medium">Full Name *</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="company" className="form-label fw-medium">Company Name (Optional)</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="company"
                            name="company"
                            placeholder="Your Company LLC"
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="email" className="form-label fw-medium">Email Address *</label>
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="email"
                            name="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label fw-medium">Phone Number *</label>
                          <input
                            type="tel"
                            className="form-control form-control-lg"
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="address" className="form-label fw-medium">Service Location/Address (Optional)</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="address"
                            name="address"
                            placeholder="123 Main St, Winston-Salem, NC"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="mb-5">
                      <h5 className="mb-3 pb-2 border-bottom">
                        <i className="bi bi-clipboard-check me-2 text-primary"></i>
                        Project Details
                      </h5>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="serviceType" className="form-label fw-medium">Service Type *</label>
                          <select
                            className="form-select form-select-lg"
                            id="serviceType"
                            name="serviceType"
                            required
                            value={formData.serviceType}
                            onChange={handleInputChange}
                          >
                            <option value="">Select a service...</option>
                            {serviceTypes.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="timeline" className="form-label fw-medium">Project Timeline *</label>
                          <select
                            className="form-select form-select-lg"
                            id="timeline"
                            name="timeline"
                            required
                            value={formData.timeline}
                            onChange={handleInputChange}
                          >
                            <option value="">Select timeline...</option>
                            {timelineOptions.map((option, index) => (
                              <option key={index} value={option}>{option}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="budget" className="form-label fw-medium">Budget Range (Optional)</label>
                          <select
                            className="form-select form-select-lg"
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleInputChange}
                          >
                            <option value="">Select budget range...</option>
                            <option value="Under $1,000">Under $1,000</option>
                            <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                            <option value="$25,000+">$25,000+</option>
                            <option value="Need guidance">Need guidance on budget</option>
                          </select>
                        </div>
                        <div className="col-12">
                          <label htmlFor="projectDescription" className="form-label fw-medium">Project Description *</label>
                          <textarea
                            className="form-control"
                            id="projectDescription"
                            name="projectDescription"
                            rows="6"
                            required
                            placeholder="Please describe your project in detail. Include:&#10;• What services or equipment you need&#10;• Size/scope of the project (e.g., number of cameras, square footage, number of network drops)&#10;• Any specific requirements or challenges&#10;• Current setup (if upgrading existing infrastructure)"
                            value={formData.projectDescription}
                            onChange={handleInputChange}
                          ></textarea>
                          <small className="text-muted">
                            <i className="bi bi-info-circle me-1"></i>
                            The more details you provide, the more accurate our quote will be.
                          </small>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg py-3"
                        disabled={isSubmitting}
                        style={{ fontSize: '1.1rem' }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2"></span>
                            Sending Your Request...
                          </>
                        ) : (
                          <>
                            <i className="bi bi-send me-2"></i>
                            Submit Quote Request
                          </>
                        )}
                      </button>
                      <p className="text-muted small text-center mt-3 mb-0">
                        <i className="bi bi-shield-check me-1"></i>
                        Your information is secure. We'll respond within 24 hours.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* What Happens Next */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-header text-white p-4" style={{ background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))' }}>
                  <h5 className="mb-0 text-white">
                    <i className="bi bi-clock-history me-2"></i>
                    What Happens Next?
                  </h5>
                </div>
                <div className="card-body p-4">
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>1</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">We Review Your Request</h6>
                      <p className="text-muted small mb-0">Our team analyzes your requirements within a few hours</p>
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <div className="flex-shrink-0">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>2</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">We Contact You</h6>
                      <p className="text-muted small mb-0">We may call or email to clarify details and schedule a site visit if needed</p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'var(--primary-color)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold'
                      }}>3</div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="mb-1">You Receive Your Quote</h6>
                      <p className="text-muted small mb-0">Detailed quote with itemized pricing, timeline, and next steps</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h5 className="mb-3">
                    <i className="bi bi-star me-2 text-primary"></i>
                    Why Choose DNET?
                  </h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>10+ Years</strong> of experience
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>500+ Projects</strong> completed
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>24/7 Support</strong> available
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Free</strong> site surveys
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>No hidden fees</strong>
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <strong>Licensed & Insured</strong>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="card border-0 shadow-sm">
                <div className="card-body p-4 text-center">
                  <div className="mb-3" style={{
                    width: '80px',
                    height: '80px',
                    margin: '0 auto',
                    background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <i className="bi bi-headset text-white" style={{ fontSize: '40px' }}></i>
                  </div>
                  <h5 className="mb-2">Prefer to Talk?</h5>
                  <p className="text-muted small mb-3">
                    Call us now for immediate assistance
                  </p>
                  <a href="tel:+15157716993" className="btn btn-outline-primary w-100 mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    +1 (515) 771-6993
                  </a>
                  <p className="text-muted small mb-0">
                    Available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="section light-background">
        <div className="container">
          <div className="row g-4 text-center">
            <div className="col-md-3 col-6">
              <div className="p-3">
                <i className="bi bi-clock text-primary mb-2" style={{ fontSize: '48px' }}></i>
                <h6 className="fw-bold">24-Hour Response</h6>
                <p className="text-muted small mb-0">Quick turnaround on quotes</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <i className="bi bi-currency-dollar text-primary mb-2" style={{ fontSize: '48px' }}></i>
                <h6 className="fw-bold">Transparent Pricing</h6>
                <p className="text-muted small mb-0">No hidden fees or surprises</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <i className="bi bi-tools text-primary mb-2" style={{ fontSize: '48px' }}></i>
                <h6 className="fw-bold">Professional Service</h6>
                <p className="text-muted small mb-0">Certified technicians</p>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="p-3">
                <i className="bi bi-shield-check text-primary mb-2" style={{ fontSize: '48px' }}></i>
                <h6 className="fw-bold">Quality Guaranteed</h6>
                <p className="text-muted small mb-0">Backed by warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
