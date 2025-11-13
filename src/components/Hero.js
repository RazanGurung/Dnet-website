// src/components/Hero.js
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { BUSINESS_INFO } from '@/config/contact'

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState(null)

  const carouselImages = [
    '/assets/img/carosel/landingpage.jpg',
    '/assets/img/carosel/networkcable.jpg',
    '/assets/img/carosel/switching_routing.jpg',
    '/assets/img/carosel/security.jpg',
    '/assets/img/carosel/databackup.jpg',
    '/assets/img/carosel/seo_software.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length)
    }, 8000) // Change every 8 seconds

    return () => clearInterval(interval)
  }, [currentIndex, carouselImages.length])

  return (
    <section id="hero" className="hero section">
      {/* Background Images */}
      {carouselImages.map((image, index) => {
        const isActive = index === currentIndex
        const isPrev = index === prevIndex

        return (
          <div
            key={index}
            className={`hero-slide ${isActive ? 'active' : ''} ${isPrev ? 'prev' : ''}`}
          >
            <Image
              src={image}
              alt=""
              fill
              priority={index === 0}
              quality={75}
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
          </div>
        )
      })}
      
      <div className="container position-relative">
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            {/* Welcome Text */}
            <div className="welcome">
              <div className="badge bg-white text-primary mb-3 px-3 py-2">
                <i className="bi bi-star-fill me-2"></i>
                10+ Years of Excellence
              </div>
              <h1 className="display-4 fw-bold mb-4">
                Expert Network Solutions for Modern Businesses
              </h1>
              <p className="lead mb-4">
                Structured. Secured. Seamless. Professional IT infrastructure designed to scale with your success.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 mb-4">
                <Link href="/quote" className="btn btn-light btn-lg px-4">
                  <i className="bi bi-calculator me-2"></i>
                  Get Free Quote
                </Link>
                <Link href="#services" className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-arrow-right me-2"></i>
                  View Services
                </Link>
              </div>

              {/* Trust Indicators - Inline */}
              <div className="d-flex flex-wrap gap-4 mt-4 pt-3 border-top border-white border-opacity-25">
                <div>
                  <div className="h5 mb-0 fw-bold text-white">{BUSINESS_INFO.stats.yearsExperience}</div>
                  <p className="mb-0 text-white-50" style={{ fontSize: '0.75rem' }}>Years Experience</p>
                </div>
                <div>
                  <div className="h5 mb-0 fw-bold text-white">{BUSINESS_INFO.stats.projectsCompleted}</div>
                  <p className="mb-0 text-white-50" style={{ fontSize: '0.75rem' }}>Projects Completed</p>
                </div>
                <div>
                  <div className="h5 mb-0 fw-bold text-white">{BUSINESS_INFO.stats.availability}</div>
                  <p className="mb-0 text-white-50" style={{ fontSize: '0.75rem' }}>Support Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}