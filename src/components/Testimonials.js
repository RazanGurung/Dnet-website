'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Prakash Silwal',
      role: 'CEO & Founder',
      image: '/assets/img/testimonials/testimonials-1.svg',
      text: 'We hired Tilak to upgrade our building\'s entire network infrastructure, and the results were flawless. He delivered ahead of schedule and with absolute precision.'
    },
    {
      name: 'Razan Gurung',
      role: '',
      image: '/assets/img/testimonials/testimonials-2.svg',
      text: 'Tilak handled the structured cabling and CCTV installation for our retail space. He was professional, knowledgeable, and the system works perfectly.'
    },
    {
      name: 'Aashish Basnet',
      role: 'IT Supervisor',
      image: '/assets/img/testimonials/testimonials-3.svg',
      text: 'Our office was facing constant connectivity issues. Tilak not only resolved the problem but also optimized our network for future growth. Truly reliable service.'
    },
    {
      name: 'Bishal Thapa',
      role: 'Homeowner',
      image: '/assets/img/testimonials/testimonials-4.svg',
      text: 'I needed a secure home network and surveillance system. Tilak explained everything clearly and executed the job efficiently. Highly recommend him for residential work.'
    },
    {
      name: 'Sudan Khatri',
      role: 'Startup Founder',
      image: '/assets/img/testimonials/testimonials-5.svg',
      text: 'As a former Spectrum tech, Tilak brings enterprise-level skill to small business needs. His 24/7 support and professionalism stand out.'
    }
  ]

  useEffect(() => {
    const initSwiper = async () => {
      const Swiper = (await import('swiper')).default
      const { Pagination, Autoplay } = await import('swiper/modules')
      
      new Swiper('.testimonials .swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000
        },
        slidesPerView: 'auto',
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        }
      })
    }

    initSwiper()
  }, [])

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* Left: Info */}
          <div className="col-lg-5 info" data-aos="fade-up" data-aos-delay="100">
            <h3>Testimonials</h3>
            <p>
              At Digital Network Engineering Technology, our clients' satisfaction is at the heart of everything we do. With over a decade of hands-on experience, we've had the privilege of serving homeowners, small businesses, and large enterprises alike. Here's what some of our clients have to say about the quality, reliability, and professionalism of our work.
            </p>
          </div>

          {/* Right: Swiper Carousel */}
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="200">
            <div className="swiper init-swiper">
              {/* Swiper Config */}
              <script type="application/json" className="swiper-config">
                {JSON.stringify({
                  loop: true,
                  speed: 600,
                  autoplay: { delay: 5000 },
                  slidesPerView: 'auto',
                  pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable: true
                  }
                })}
              </script>

              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="testimonial-item">
                      <div className="d-flex">
                        <Image 
                          src={testimonial.image} 
                          className="testimonial-img flex-shrink-0" 
                          alt={testimonial.name}
                          width={90}
                          height={90}
                        />
                        <div>
                          <h3>{testimonial.name}</h3>
                          {testimonial.role && <h4>{testimonial.role}</h4>}
                          <div className="stars">
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                          </div>
                        </div>
                      </div>
                      <p>
                        <i className="bi bi-quote quote-icon-left"></i>
                        <span>{testimonial.text}</span>
                        <i className="bi bi-quote quote-icon-right"></i>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="swiper-pagination"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}