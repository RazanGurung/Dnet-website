'use client'

import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    const initLibraries = async () => {
      try {
        // Import and initialize AOS (Animate On Scroll)
        const AOS = (await import('aos')).default
        await import('aos/dist/aos.css')
        
        AOS.init({
          duration: 600,
          easing: 'ease-in-out',
          once: true,
          mirror: false,
          offset: 100
        })

        // Import and initialize GLightbox
        const GLightbox = (await import('glightbox')).default
        await import('glightbox/dist/css/glightbox.min.css')
        
        GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        })

        // Import Swiper for any .init-swiper elements (if not handled by component)
        const Swiper = (await import('swiper')).default
        const { Pagination, Autoplay, Navigation } = await import('swiper/modules')
        await import('swiper/css')
        await import('swiper/css/pagination')
        await import('swiper/css/navigation')
        
        // Initialize Swipers that use the .init-swiper class
        document.querySelectorAll('.init-swiper:not(.swiper-initialized)').forEach((swiperElement) => {
          // Default configuration
          const defaultConfig = {
            modules: [Pagination, Autoplay, Navigation],
            loop: true,
            speed: 600,
            autoplay: {
              delay: 5000,
              disableOnInteraction: false
            },
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true
            }
          }

          // Try to get config from data attribute or script tag
          const configElement = swiperElement.querySelector('.swiper-config')
          let config = defaultConfig

          if (configElement) {
            try {
              const configText = configElement.textContent || configElement.innerHTML
              const parsedConfig = JSON.parse(configText)
              config = {
                ...defaultConfig,
                ...parsedConfig,
                modules: [Pagination, Autoplay, Navigation]
              }
            } catch (error) {
              console.warn('Could not parse Swiper config, using defaults:', error)
            }
          }

          try {
            new Swiper(swiperElement, config)
          } catch (error) {
            console.error('Swiper initialization error:', error)
          }
        })
      } catch (error) {
        console.error('Library initialization error:', error)
      }
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
      toggleScrollTop() // Initial check

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
        preloader.style.opacity = '0'
        setTimeout(() => preloader.remove(), 300)
      }
      
      if (document.readyState === 'complete') {
        removePreloader()
      } else {
        window.addEventListener('load', removePreloader)
      }
      
      // Fallback timeout
      setTimeout(removePreloader, 2000)
    }

    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle')
    faqItems.forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        const parent = faqItem.closest('.faq-item')
        if (parent) {
          parent.classList.toggle('faq-active')
        }
      })
    })

    // Dropdown toggle for mobile navigation
    const dropdownToggles = document.querySelectorAll('.navmenu .toggle-dropdown')
    dropdownToggles.forEach((toggle) => {
      toggle.addEventListener('click', function(e) {
        e.preventDefault()
        e.stopPropagation()
        
        const parent = this.closest('.dropdown')
        if (parent) {
          parent.classList.toggle('active')
          const dropdownMenu = parent.querySelector('ul')
          if (dropdownMenu) {
            dropdownMenu.classList.toggle('dropdown-active')
          }
        }
      })
    })

    // Navmenu scrollspy (highlight active section in nav)
    const navmenulinks = document.querySelectorAll('.navmenu a[href^="#"]')
    
    function navmenuScrollspy() {
      const position = window.scrollY + 200
      
      navmenulinks.forEach(navmenulink => {
        if (!navmenulink.hash) return
        
        const section = document.querySelector(navmenulink.hash)
        if (!section) return
        
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        
        if (position >= sectionTop && position < sectionBottom) {
          document.querySelectorAll('.navmenu a.active').forEach(link => {
            link.classList.remove('active')
          })
          navmenulink.classList.add('active')
        } else {
          navmenulink.classList.remove('active')
        }
      })
    }
    
    window.addEventListener('load', navmenuScrollspy)
    document.addEventListener('scroll', navmenuScrollspy)
    navmenuScrollspy() // Initial check

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', () => {})
      document.removeEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  return null
}