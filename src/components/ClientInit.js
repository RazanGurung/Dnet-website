'use client'

import { useEffect } from 'react'

export default function ClientInit() {
  useEffect(() => {
    const initLibraries = async () => {
      try {
        // Defer library loading until after initial render
        await new Promise(resolve => setTimeout(resolve, 100))

        // Import and initialize AOS with minimal settings for better performance
        const AOS = (await import('aos')).default
        await import('aos/dist/aos.css')

        // Disable AOS animations for smoother scrolling
        AOS.init({
          duration: 0,             // No animation duration - instant
          easing: 'ease',
          once: true,
          mirror: false,
          offset: 0,
          delay: 0,
          disable: true            // Disable all animations
        })

        // Import GLightbox
        const GLightbox = (await import('glightbox')).default
        await import('glightbox/dist/css/glightbox.min.css')
        
        GLightbox({
          selector: '.glightbox',
          touchNavigation: true,
          loop: true,
          autoplayVideos: true
        })

        // Import Swiper
        const Swiper = (await import('swiper')).default
        const { Pagination, Autoplay, Navigation } = await import('swiper/modules')
        await import('swiper/css')
        await import('swiper/css/pagination')
        await import('swiper/css/navigation')
        
        // Initialize Swipers
        document.querySelectorAll('.init-swiper:not(.swiper-initialized)').forEach((swiperElement) => {
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

    // Optimized scroll top button with throttling
    const scrollTop = document.querySelector('.scroll-top')
    if (scrollTop) {
      let ticking = false
      
      const toggleScrollTop = () => {
        if (!ticking) {
          window.requestAnimationFrame(() => {
            if (window.scrollY > 100) {
              scrollTop.classList.add('active')
            } else {
              scrollTop.classList.remove('active')
            }
            ticking = false
          })
          ticking = true
        }
      }

      window.addEventListener('scroll', toggleScrollTop, { passive: true })
      toggleScrollTop()

      scrollTop.addEventListener('click', (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }

    // FAQ toggle
    const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle')
    faqItems.forEach((faqItem) => {
      faqItem.addEventListener('click', () => {
        const parent = faqItem.closest('.faq-item')
        if (parent) {
          parent.classList.toggle('faq-active')
        }
      })
    })

    // Dropdown toggle
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

    // Optimized navmenu scrollspy with throttling
    const navmenulinks = document.querySelectorAll('.navmenu a[href^="#"]')
    let scrollTicking = false
    
    function navmenuScrollspy() {
      if (!scrollTicking) {
        window.requestAnimationFrame(() => {
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
            }
          })
          scrollTicking = false
        })
        scrollTicking = true
      }
    }
    
    document.addEventListener('scroll', navmenuScrollspy, { passive: true })
    navmenuScrollspy()

    return () => {
      document.removeEventListener('scroll', navmenuScrollspy)
    }
  }, [])

  return null
}