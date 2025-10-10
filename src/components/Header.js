'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileNav = () => {
    setIsMobileNavActive(!isMobileNavActive)
    document.body.style.overflow = !isMobileNavActive ? 'hidden' : ''
  }

  const closeMobileNav = () => {
    setIsMobileNavActive(false)
    document.body.style.overflow = ''
  }

  return (
    <header id="header" className={`header sticky-top ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope d-flex align-items-center">
              <a href="mailto:Dnetworkingtechnology@gmail.com">Dnetworkingtechnology@gmail.com</a>
            </i>
            <i className="bi bi-phone d-flex align-items-center ms-4">
              <a href="tel:+15157716993"><span>+1 515 771 6993</span></a>
            </i>
          </div>
          <div className="social-links d-none d-md-flex align-items-center">
            <a href="#" className="twitter" aria-label="Twitter"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="facebook" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="instagram" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="#" className="linkedin" aria-label="LinkedIn"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="branding d-flex align-items-center">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          {/* Logo */}
          <Link href="/" className="logo d-flex align-items-center me-auto" onClick={closeMobileNav}>
            <Image 
              src="/assets/img/logo.png" 
              alt="DNET logo" 
              width={150} 
              height={40}
              priority
            />
          </Link>

          {/* Navigation */}
          <nav id="navmenu" className={`navmenu ${isMobileNavActive ? 'mobile-nav-active' : ''}`}>
            <ul>
              <li><Link href="/#hero" onClick={closeMobileNav}>Home</Link></li>
              <li><Link href="/#about" onClick={closeMobileNav}>About</Link></li>
              <li><Link href="/#services" onClick={closeMobileNav}>Services</Link></li>
              <li><Link href="/#departments" onClick={closeMobileNav}>Departments</Link></li>
              
              {/* Services Dropdown */}
              <li className="dropdown">
                <a href="#" className="d-flex align-items-center">
                  <span>Our Services</span> 
                  <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
                </a>
                <ul>
                  <li>
                    <Link href="/services/networking-cabling" onClick={closeMobileNav}>
                      Networking &amp; Cabling
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/switching-routing-wifi" onClick={closeMobileNav}>
                      Switching, Routing &amp; Wi-Fi
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/security-access" onClick={closeMobileNav}>
                      Security, CCTV &amp; Access
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/office-relocation" onClick={closeMobileNav}>
                      Office Relocation &amp; New Sites
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/data-recovery" onClick={closeMobileNav}>
                      Backup, Recovery &amp; Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/web-seo-software" onClick={closeMobileNav}>
                      Web, SEO &amp; Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/managed-it-cloud" onClick={closeMobileNav}>
                      Managed IT &amp; Cloud
                    </Link>
                  </li>
                </ul>
              </li>

              <li><Link href="/#contact" onClick={closeMobileNav}>Contact</Link></li>
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