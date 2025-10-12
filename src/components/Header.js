'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
      
      // Only track sections if on home page
      if (pathname === '/') {
        const sections = ['hero', 'about', 'services', 'departments', 'contact']
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
    handleScroll() // Check on mount
    
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

  // Check if we're on a service page
  const isServicesActive = () => {
    return pathname.startsWith('/services')
  }

  // Check if a section link should be active (only on home page)
  const isSectionActive = (section) => {
    return pathname === '/' && activeSection === section
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
              <li>
                <Link 
                  href="/" 
                  className={pathname === '/' && activeSection === 'hero' ? 'active' : ''} 
                  onClick={closeMobileNav}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/#about" 
                  className={isSectionActive('about') ? 'active' : ''} 
                  onClick={closeMobileNav}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/#services" 
                  className={isSectionActive('services') ? 'active' : ''} 
                  onClick={closeMobileNav}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/#departments" 
                  className={isSectionActive('departments') ? 'active' : ''} 
                  onClick={closeMobileNav}
                >
                  Departments
                </Link>
              </li>
              
              {/* Services Dropdown - Highlight when on any service page */}
              <li className={`dropdown ${isServicesActive() ? 'active' : ''}`}>
                <a href="#" className={`d-flex align-items-center ${isServicesActive() ? 'active' : ''}`}>
                  <span>Our Services</span> 
                  <i className="bi bi-chevron-down toggle-dropdown ms-1"></i>
                </a>
                <ul>
                  <li>
                    <Link 
                      href="/services/networking-cabling" 
                      className={pathname === '/services/networking-cabling' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Networking &amp; Cabling
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/switching-routing-wifi" 
                      className={pathname === '/services/switching-routing-wifi' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Switching, Routing &amp; Wi-Fi
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/security-access" 
                      className={pathname === '/services/security-access' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Security, CCTV &amp; Access
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/office-relocation" 
                      className={pathname === '/services/office-relocation' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Office Relocation &amp; New Sites
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/data-recovery" 
                      className={pathname === '/services/data-recovery' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Backup, Recovery &amp; Data
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/web-seo-software" 
                      className={pathname === '/services/web-seo-software' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Web, SEO &amp; Custom Software
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/services/managed-it-cloud" 
                      className={pathname === '/services/managed-it-cloud' ? 'active' : ''}
                      onClick={closeMobileNav}
                    >
                      Managed IT &amp; Cloud
                    </Link>
                  </li>
                </ul>
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