// src/app/quote/page.js
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function QuotePage() {
  const [quantities, setQuantities] = useState({
    cctv: 0,
    tvInstall: 0,
    serverRack: 0,
    staticWebsite: 0,
    dynamicWebsite: 0,
    cloudSetup: 0,
    doorLock: 0
  })

  const [dynamicFeatures, setDynamicFeatures] = useState([])
  const [contactInfo, setContactInfo] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    {
      id: 'cctv',
      name: 'CCTV Camera Installation',
      price: 80,
      unit: 'per camera',
      description: 'Includes cable pulling, NVR setup, and display installation',
      icon: 'bi bi-camera-video'
    },
    {
      id: 'tvInstall',
      name: 'TV Installation',
      price: 300,
      unit: 'per TV',
      description: 'Professional mounting and cable management',
      icon: 'bi bi-tv'
    },
    {
      id: 'serverRack',
      name: 'Server Rack Installation',
      price: 2500,
      unit: 'per rack',
      description: 'Complete rack setup with cable management and labeling',
      icon: 'bi bi-hdd-rack'
    },
    {
      id: 'staticWebsite',
      name: 'Static Website Development',
      price: 1500,
      unit: 'per site',
      description: 'Professional static website with SEO optimization',
      icon: 'bi bi-code-slash'
    },
    {
      id: 'dynamicWebsite',
      name: 'Dynamic Website Development',
      price: 3000,
      unit: 'starts at',
      description: 'Custom web application with database and features',
      icon: 'bi bi-laptop-code',
      hasFeatures: true
    },
    {
      id: 'cloudSetup',
      name: 'Cloud Computing Setup',
      price: 2000,
      unit: 'per setup',
      description: 'Cloud infrastructure deployment and configuration',
      icon: 'bi bi-cloud-upload'
    },
    {
      id: 'doorLock',
      name: 'Smart Door Lock Installation',
      price: 300,
      unit: 'per lock',
      description: 'Access control system installation',
      icon: 'bi bi-key'
    }
  ]

  const dynamicWebsiteFeatures = [
    { id: 'auth', name: 'User Authentication', price: 500 },
    { id: 'payment', name: 'Payment Integration', price: 800 },
    { id: 'admin', name: 'Admin Dashboard', price: 1000 },
    { id: 'api', name: 'API Integration', price: 600 },
    { id: 'search', name: 'Advanced Search', price: 400 },
    { id: 'chat', name: 'Live Chat', price: 700 },
    { id: 'analytics', name: 'Analytics Dashboard', price: 500 },
    { id: 'mobile', name: 'Mobile App', price: 2500 }
  ]

  const calculateTotal = () => {
    let total = 0

    // Calculate standard services
    Object.keys(quantities).forEach(key => {
      const service = services.find(s => s.id === key)
      if (service && key !== 'dynamicWebsite') {
        total += service.price * quantities[key]
      }
    })

    // Calculate dynamic website with features
    if (quantities.dynamicWebsite > 0) {
      const basePrice = services.find(s => s.id === 'dynamicWebsite').price
      const featuresTotal = dynamicFeatures.reduce((sum, featureId) => {
        const feature = dynamicWebsiteFeatures.find(f => f.id === featureId)
        return sum + (feature ? feature.price : 0)
      }, 0)
      total += (basePrice + featuresTotal) * quantities.dynamicWebsite
    }

    return total
  }

  const handleQuantityChange = (serviceId, value) => {
    const numValue = parseInt(value) || 0
    setQuantities(prev => ({
      ...prev,
      [serviceId]: Math.max(0, numValue)
    }))
  }

  const handleFeatureToggle = (featureId) => {
    setDynamicFeatures(prev => 
      prev.includes(featureId)
        ? prev.filter(id => id !== featureId)
        : [...prev, featureId]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    // Build quote details
    const quoteItems = services
      .filter(service => quantities[service.id] > 0)
      .map(service => {
        let itemTotal = service.price * quantities[service.id]
        let details = `${service.name} x ${quantities[service.id]} = $${itemTotal.toLocaleString()}`
        
        if (service.id === 'dynamicWebsite' && dynamicFeatures.length > 0) {
          const features = dynamicFeatures.map(fId => {
            const feature = dynamicWebsiteFeatures.find(f => f.id === fId)
            return `  + ${feature.name} ($${feature.price})`
          }).join('\n')
          details += `\n${features}`
        }
        
        return details
      })

    const total = calculateTotal()
    
    const emailBody = `
Quote Request from ${contactInfo.name}

Contact Information:
Email: ${contactInfo.email}
Phone: ${contactInfo.phone}

Selected Services:
${quoteItems.join('\n\n')}

ESTIMATED TOTAL: $${total.toLocaleString()}

Additional Message:
${contactInfo.message || 'N/A'}
    `

    try {
      const response = await fetch('https://formspree.io/f/xpwdnbkr', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: contactInfo.name,
          email: contactInfo.email,
          phone: contactInfo.phone,
          message: emailBody,
          total: `$${total.toLocaleString()}`,
          _subject: `Quote Request: $${total.toLocaleString()} - ${contactInfo.name}`
        })
      })

      if (response.ok) {
        setStatus({ 
          type: 'success', 
          message: '✅ Quote request sent! We\'ll contact you within 24 hours with a detailed proposal.' 
        })
        // Reset form
        setQuantities({
          cctv: 0,
          tvInstall: 0,
          serverRack: 0,
          staticWebsite: 0,
          dynamicWebsite: 0,
          cloudSetup: 0,
          doorLock: 0
        })
        setDynamicFeatures([])
        setContactInfo({ name: '', email: '', phone: '', message: '' })
      } else {
        setStatus({ 
          type: 'danger', 
          message: '❌ Something went wrong. Please try again or call us directly.' 
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

  const total = calculateTotal()
  const hasItems = total > 0

  return (
    <>
      {/* Hero Section */}
      <section className="section" style={{ 
        background: 'linear-gradient(135deg, var(--primary-color), var(--primary-dark))',
        minHeight: '40vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="text-white mb-3">Get Instant Quote</h1>
              <p className="lead text-white opacity-90">
                Select your services and get an immediate estimate. Final pricing may vary based on site conditions.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mt-4">
                <a href="tel:+15157716993" className="btn btn-light">
                  <i className="bi bi-telephone me-2"></i>
                  Call for Custom Quote
                </a>
                <Link href="/#contact" className="btn btn-outline-light">
                  <i className="bi bi-chat-dots me-2"></i>
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Calculator */}
      <section className="section">
        <div className="container">
          <div className="row">
            {/* Services Selection */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm mb-4">
                <div className="card-body p-4">
                  <h3 className="mb-4">
                    <i className="bi bi-calculator me-2 text-primary"></i>
                    Select Services
                  </h3>

                  {services.map((service) => (
                    <div key={service.id} className="mb-4 pb-4 border-bottom">
                      <div className="row align-items-center">
                        <div className="col-md-7">
                          <div className="d-flex align-items-start">
                            <div style={{
                              width: '50px',
                              height: '50px',
                              background: 'linear-gradient(135deg, var(--primary-color), var(--primary-light))',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '1rem',
                              flexShrink: 0
                            }}>
                              <i className={`${service.icon} text-white`} style={{ fontSize: '24px' }}></i>
                            </div>
                            <div>
                              <h5 className="mb-1">{service.name}</h5>
                              <p className="text-muted small mb-1">{service.description}</p>
                              <strong className="text-primary">
                                ${service.price.toLocaleString()} {service.unit}
                              </strong>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5 mt-3 mt-md-0">
                          <div className="d-flex align-items-center justify-content-md-end">
                            <label className="me-2 small">Quantity:</label>
                            <input
                              type="number"
                              min="0"
                              className="form-control"
                              style={{ width: '100px' }}
                              value={quantities[service.id]}
                              onChange={(e) => handleQuantityChange(service.id, e.target.value)}
                            />
                            {quantities[service.id] > 0 && (
                              <span className="ms-3 fw-bold text-success">
                                ${(service.price * quantities[service.id]).toLocaleString()}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Dynamic Website Features */}
                      {service.hasFeatures && quantities[service.id] > 0 && (
                        <div className="mt-3 p-3 bg-light rounded">
                          <h6 className="mb-3">
                            <i className="bi bi-plus-circle me-2"></i>
                            Add Features to Dynamic Website:
                          </h6>
                          <div className="row g-2">
                            {dynamicWebsiteFeatures.map(feature => (
                              <div key={feature.id} className="col-md-6">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id={feature.id}
                                    checked={dynamicFeatures.includes(feature.id)}
                                    onChange={() => handleFeatureToggle(feature.id)}
                                  />
                                  <label className="form-check-label" htmlFor={feature.id}>
                                    {feature.name} 
                                    <span className="text-primary fw-bold ms-2">
                                      +${feature.price}
                                    </span>
                                  </label>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              {hasItems && (
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h3 className="mb-4">
                      <i className="bi bi-person-circle me-2 text-primary"></i>
                      Your Information
                    </h3>
                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="quote-name" className="form-label">Name *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="quote-name"
                            required
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="quote-email" className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="quote-email"
                            required
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="quote-phone" className="form-label">Phone *</label>
                          <input
                            type="tel"
                            className="form-control"
                            id="quote-phone"
                            required
                            value={contactInfo.phone}
                            onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="quote-message" className="form-label">
                            Additional Details (Optional)
                          </label>
                          <textarea
                            className="form-control"
                            id="quote-message"
                            rows="3"
                            placeholder="Any specific requirements or questions..."
                            value={contactInfo.message}
                            onChange={(e) => setContactInfo({...contactInfo, message: e.target.value})}
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg w-100"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2"></span>
                                Sending...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-send me-2"></i>
                                Request Quote
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {status.message && (
                        <div className={`alert alert-${status.type} mt-3 mb-0`}>
                          {status.message}
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Summary Sidebar */}
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="card-body p-4">
                  <h4 className="mb-4">
                    <i className="bi bi-receipt me-2"></i>
                    Quote Summary
                  </h4>

                  {!hasItems && (
                    <div className="text-center py-5">
                      <i className="bi bi-cart-x text-muted" style={{ fontSize: '48px' }}></i>
                      <p className="text-muted mt-3 mb-0">
                        Select services to see your quote
                      </p>
                    </div>
                  )}

                  {hasItems && (
                    <>
                      <div className="mb-3">
                        {services.map(service => {
                          if (quantities[service.id] === 0) return null
                          
                          let itemTotal = service.price * quantities[service.id]
                          
                          return (
                            <div key={service.id} className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                              <div>
                                <div className="fw-medium">{service.name}</div>
                                <small className="text-muted">
                                  {quantities[service.id]} × ${service.price.toLocaleString()}
                                </small>
                                {service.id === 'dynamicWebsite' && dynamicFeatures.length > 0 && (
                                  <div className="ms-3 mt-1">
                                    {dynamicFeatures.map(fId => {
                                      const feature = dynamicWebsiteFeatures.find(f => f.id === fId)
                                      return (
                                        <small key={fId} className="d-block text-primary">
                                          + {feature.name}
                                        </small>
                                      )
                                    })}
                                  </div>
                                )}
                              </div>
                              <div className="fw-bold">
                                ${itemTotal.toLocaleString()}
                              </div>
                            </div>
                          )
                        })}
                      </div>

                      <div className="d-flex justify-content-between align-items-center pt-3 border-top">
                        <h5 className="mb-0">Estimated Total:</h5>
                        <h4 className="mb-0 text-primary">
                          ${total.toLocaleString()}
                        </h4>
                      </div>

                      <div className="alert alert-info mt-3 mb-0">
                        <small>
                          <i className="bi bi-info-circle me-2"></i>
                          This is an estimate. Final pricing may vary based on site conditions and specific requirements.
                        </small>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Help Card */}
              <div className="card border-0 shadow-sm mt-4">
                <div className="card-body p-4 text-center">
                  <i className="bi bi-headset text-primary mb-3" style={{ fontSize: '48px' }}></i>
                  <h5>Need Help?</h5>
                  <p className="text-muted small mb-3">
                    Our team is available 24/7 to assist with custom quotes
                  </p>
                  <a href="tel:+15157716993" className="btn btn-outline-primary w-100">
                    <i className="bi bi-telephone me-2"></i>
                    Call +1 (515) 771-6993
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section light-background">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h3 className="text-center mb-4">Pricing FAQs</h3>
              
              <div className="accordion" id="pricingFAQ">
                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      Are these prices final?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse show" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body">
                      These are estimated prices based on standard installations. Final pricing may vary depending on site conditions, accessibility, and specific requirements. We provide a detailed quote after a site survey.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      What's included in the installation price?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body">
                      Installation prices include labor, basic cable runs (up to 100ft), mounting hardware, and configuration. Equipment costs (cameras, NVRs, switches, etc.) are separate and quoted based on your specifications.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 mb-3 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      Do you offer discounts for large projects?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body">
                      Yes! We offer volume discounts for large installations. Projects requiring 10+ cameras, multiple racks, or complete office setups qualify for special pricing. Contact us for a custom quote.
                    </div>
                  </div>
                </div>

                <div className="accordion-item border-0 shadow-sm">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                    <div className="accordion-body">
                      We accept cash, check, credit cards, and ACH transfers. For larger projects, we offer payment plans with 50% upfront and 50% upon completion.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}