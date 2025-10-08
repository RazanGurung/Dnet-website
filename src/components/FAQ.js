export default function FAQ() {
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
    }
  ]

  return (
    <section id="faq" className="faq section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Frequently Asked Questions</h2>
        <p></p>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10" data-aos="fade-up" data-aos-delay="100">
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
  )
}