import Link from 'next/link'

export const metadata = {
  title: 'FAQ | DNET - Digital Network Engineering Technology',
  description: 'Frequently asked questions about DNET\'s IT services, network installation, CCTV systems, and structured cabling in Winston-Salem, NC.'
}

export default function FAQPage() {
  const faqs = [
    {
      question: 'What types of services do you provide?',
      answer: 'We offer structured cabling, network setup, Wi-Fi optimization, IT infrastructure support, and CCTV system installation.'
    },
    {
      question: 'Can you upgrade existing cabling or networking systems?',
      answer: 'Absolutely. We assess and modernize legacy networks to ensure speed, stability, and future readiness.'
    },
    {
      question: 'Are your CCTV systems compatible with remote viewing?',
      answer: 'Yes, we install systems that support secure remote access via mobile or desktop.'
    },
    {
      question: 'Are you licensed and insured?',
      answer: 'Yes, we are fully licensed, certified, and insured for all our services.'
    },
    {
      question: 'What brands or equipment do you work with?',
      answer: 'We work with trusted brands like Cisco, Ubiquiti, Netgear, Axis, Lorex, and more—based on your project needs and budget.'
    },
    {
      question: 'How fast can you respond, and do you offer flexible timing?',
      answer: 'We offer fast response times and 24/7 service availability when needed, ensuring convenience and minimal downtime for your network.'
    },
    {
      question: 'Do you provide on-site consultations?',
      answer: 'Yes, we offer free on-site consultations to assess your needs and provide accurate project estimates.'
    },
    {
      question: 'What is your service area?',
      answer: 'We primarily serve Winston-Salem, Greensboro, High Point, and the Greater Triad area in North Carolina. Contact us to discuss projects outside this region.'
    },
    {
      question: 'How long does a typical installation take?',
      answer: 'Project timelines vary based on scope and complexity. Small office setups can be completed in 1-2 days, while larger projects may take a week or more. We provide detailed timelines during consultation.'
    },
    {
      question: 'Do you offer maintenance and support after installation?',
      answer: 'Yes, we offer ongoing maintenance plans and support packages to ensure your systems continue running optimally.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, check, and all major credit cards. For larger projects, we can discuss payment plans.'
    },
    {
      question: 'Do you provide warranties on your work?',
      answer: 'Yes, all our installations come with a workmanship warranty. Equipment warranties vary by manufacturer, and we help you understand and utilize them.'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="hero section" style={{ minHeight: '40vh', background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%)' }}>
        <div className="container position-relative text-center text-white py-5">
          <nav aria-label="breadcrumb" className="mb-4">
            <ol className="breadcrumb justify-content-center bg-transparent">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white text-decoration-none">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">FAQ</li>
            </ol>
          </nav>
          <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
          <p className="lead mb-0">Everything you need to know about our services</p>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section id="faq" className="faq section light-background">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-container">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`faq-item ${index === 0 ? 'faq-active' : ''}`}
                  >
                    <h3>
                      <span className="num">{index + 1}.</span> {faq.question}
                    </h3>
                    <div className="faq-content">
                      <p>{faq.answer}</p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4">Still Have Questions?</h2>
              <p className="lead text-muted mb-4">
                Can't find the answer you're looking for? Our team is here to help you with any questions about our services, pricing, or project timelines.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <Link href="/#contact" className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-chat-dots me-2"></i>
                  Contact Us
                </Link>
                <Link href="tel:+15157716993" className="btn btn-outline-primary btn-lg px-4">
                  <i className="bi bi-telephone me-2"></i>
                  Call: (515) 771-6993
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-4">
              <h3>Service Areas</h3>
              <p className="text-muted">Proudly serving the Greater Triad area</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-3 col-6 text-center">
              <i className="bi bi-geo-alt text-primary mb-2" style={{ fontSize: '2rem' }}></i>
              <h5>Winston-Salem</h5>
            </div>
            <div className="col-md-3 col-6 text-center">
              <i className="bi bi-geo-alt text-primary mb-2" style={{ fontSize: '2rem' }}></i>
              <h5>Greensboro</h5>
            </div>
            <div className="col-md-3 col-6 text-center">
              <i className="bi bi-geo-alt text-primary mb-2" style={{ fontSize: '2rem' }}></i>
              <h5>High Point</h5>
            </div>
            <div className="col-md-3 col-6 text-center">
              <i className="bi bi-geo-alt text-primary mb-2" style={{ fontSize: '2rem' }}></i>
              <h5>Greater Triad</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
