// src/components/Header.js
'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { CONTACT_INFO } from '@/config/contact'

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  // Remove trailing slash for consistent pathname matching
  const cleanPath = pathname.endsWith('/') && pathname !== '/' ? pathname.slice(0, -1) : pathname

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Only track sections if on home page
      if (pathname === '/') {
        const sections = ['hero', 'services', 'why-choose-us', 'testimonials', 'contact']
        const scrollPosition = window.scrollY + 200
        
        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const offsetTop = element.offsetTop
            const offsetBottom = offsetTop + element.offsetHeight
            
            if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
              setActiveSection(section)
              break
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
    document.body.style.overflow = !isMobileNavActive ? 'hidden' : ''
  }

  const closeMobileNav = () => {
    setIsMobileNavActive(false)
    document.body.style.overflow = ''
  }

  const isServicesActive = () => {
    return cleanPath.startsWith('/services')
  }

  const isSectionActive = (section) => {
    return cleanPath === '/' && activeSection === section
  }

  return (
    <header id="header" className={`header sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href={`mailto:${CONTACT_INFO.email.primary}`}>{CONTACT_INFO.email.primary}</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <a href={CONTACT_INFO.phone.link}><span>{CONTACT_INFO.phone.display}</span></a>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            {CONTACT_INFO.social.twitter && (
              <a href={CONTACT_INFO.social.twitter} className="twitter" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter-x"></i>
              </a>
            )}
            {CONTACT_INFO.social.facebook && (
              <a href={CONTACT_INFO.social.facebook} className="facebook" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
            )}
            {CONTACT_INFO.social.instagram && (
              <a href={CONTACT_INFO.social.instagram} className="instagram" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            )}
            {CONTACT_INFO.social.linkedin && (
              <a href={CONTACT_INFO.social.linkedin} className="linkedin" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-linkedin"></i>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href="/" className="logo d-flex align-items-center" onClick={closeMobileNav}>
            <Image
              src="/assets/img/logo.png"
              alt="DNET logo"
              width={150}
              height={40}
              priority
              style={{ width: 'auto', height: 'auto', maxWidth: '150px', maxHeight: '40px' }}
            />
          </Link>

          {/* Navigation */}
          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li>
                <Link
                  href="/"
                  className={cleanPath === '/' && (activeSection === 'hero' || activeSection === '') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={cleanPath === '/about' ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className={cleanPath === '/portfolio' ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Portfolio
                </Link>
              </li>

              {/* Services Dropdown */}
              <li className={`dropdown ${isServicesActive() || isSectionActive('services') ? 'active' : ''}`}>
                <Link
                  href="/#services"
                  className={`d-flex align-items-center ${isServicesActive() || isSectionActive('services') ? 'active' : ''}`}
                  onClick={closeMobileNav}
                >
                  <span>Our Services</span>
                  <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
                </Link>
                <ul>
                  <li>
                    <Link
                      href="/services/networking-cabling"
                      className={cleanPath === '/services/networking-cabling' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Networking &amp; Cabling
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/switching-routing-wifi"
                      className={cleanPath === '/services/switching-routing-wifi' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Switching, Routing &amp; Wi-Fi
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/security-access"
                      className={cleanPath === '/services/security-access' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Security, CCTV &amp; Access
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/data-recovery"
                      className={cleanPath === '/services/data-recovery' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Backup, Recovery &amp; Data
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/web-seo-software"
                      className={cleanPath === '/services/web-seo-software' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Web, SEO &amp; Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/managed-it-cloud"
                      className={cleanPath === '/services/managed-it-cloud' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Managed IT &amp; Cloud
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/faq"
                  className={cleanPath === '/faq' ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  FAQ
                </Link>
              </li>

              <li>
                <Link
                  href="/quote"
                  className={cleanPath === '/quote' ? 'active btn btn-primary text-white px-3 py-2 btn-pill fw-semibold' : 'btn btn-primary text-white px-3 py-2 btn-pill fw-semibold'}
                  onClick={closeMobileNav}
                >
                  <i className="bi bi-calculator me-1"></i>
                  Get Quote
                </Link>
              </li>

              <li>
                <Link
                  href="/#contact"
                  className={isSectionActive('contact') ? 'active' : ''}
                  onClick={closeMobileNav}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav Toggle */}
          <button
            className={`mobile-nav-toggle d-xl-none`}
            onClick={toggleMobileNav}
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavActive}
          >
            <i className={`bi ${isMobileNavActive ? 'bi-x' : 'bi-list'}`}></i>
          </button>
        </div>
      </div>
    </header>
  )
}