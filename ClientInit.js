'use client'

import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    const initLibraries = async () => {
      // Import and initialize AOS (Animate On Scroll)
      const AOS = (await import('aos')).default
      AOS.init({
        duration: 600,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      })

      // Import and initialize GLightbox
      const GLightbox = (await import('glightbox')).default
      GLightbox({
        selector: '.glightbox'
      })

      // Import and initialize Swiper (if needed on page)
      const Swiper = (await import('swiper')).default
      const { Pagination, Autoplay } = await import('swiper/modules')
      
      // Initialize all Swipers on the page
      document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
        const configElement = swiperElement.querySelector('.swiper-config')
        if (configElement) {
          try {
            const config = JSON.parse(configElement.innerHTML.trim())
            new Swiper(swiperElement, {
              modules: [Pagination, Autoplay],
              ...config
            })
          } catch (error) {
            console.error('Swiper config error:', error)
          }
        }
      })
    }

    initLibraries()

    // Scroll top button functionality
    const scrollTop = document.querySelector('.scroll-top')
    if (scrollTop) {
      const toggleScrollTop = () => {
        if (window.scrollY > 100) {
          scrollTop.classList.add('active')
        } else {
          scrollTop.classList.remove('active')
        }
      }

      window.addEventListener('load', toggleScrollTop)
      window.addEventListener('scroll', toggleScrollTop)

      scrollTop.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    // Remove preloader
    const preloader = document.querySelector('#preloader')
    if (preloader) {
      const removePreloader = () => {
        preloader.remove()
      }
      window.addEventListener('load', removePreloader)
      // Fallback timeout
      setTimeout(removePreloader, 2000)
    }

    // FAQ toggle functionality
    document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        faqItem.parentNode.classList.toggle('faq-active')
      })
    })

    // Dropdown toggle for mobile navigation
    document.querySelectorAll('.navmenu .toggle-dropdown').forEach((navmenu) => {
      navmenu.addEventListener('click', function(e) {
        e.preventDefault()
        this.parentNode.classList.toggle('active')
        this.parentNode.nextElementSibling?.classList.toggle('dropdown-active')
        e.stopImmediatePropagation()
      })
    })

    // Navmenu scrollspy (highlight active section in nav)
    const navmenulinks = document.querySelectorAll('.navmenu a')
    
    function navmenuScrollspy() {
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        const position = window.scrollY + 200
        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
          document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'))
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }
    
    window.addEventListener('load', navmenuScrollspy)
    document.addEventListener('scroll', navmenuScrollspy)

    // Cleanup function
    return () => {
      window.removeEventListener('load', () => {})
      window.removeEventListener('scroll', () => {})
      document.removeEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  return null
}