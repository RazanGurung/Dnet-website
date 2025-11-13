// import Image from 'next/image'

// export default function Gallery() {
//   const images = [
//     { src: '/assets/img/gallery/gallery-1.jpg', alt: 'Network rack installation' },
//     { src: '/assets/img/gallery/gallery-2.jpg', alt: 'Cable management system' },
//     { src: '/assets/img/gallery/gallery-3.jpg', alt: 'Wi-Fi setup project' },
//     { src: '/assets/img/gallery/gallery-4.jpg', alt: 'CCTV camera installation' },
//     { src: '/assets/img/gallery/gallery-5.jpg', alt: 'Server room infrastructure' },
//     { src: '/assets/img/gallery/gallery-6.jpg', alt: 'Fiber optic cabling' },
//     { src: '/assets/img/gallery/gallery-7.jpg', alt: 'Switch configuration' },
//     { src: '/assets/img/gallery/gallery-8.jpg', alt: 'Router setup' },
//     { src: '/assets/img/gallery/gallery-9.jpg', alt: 'Security camera system' },
//   ]

//   return (
//     <section id="gallery" className="gallery section light-background">
//       {/* Section Title */}
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Project Gallery</h2>
//         <p>Browse our recent projects and see the quality of our networking and security solutions in action.</p>
//       </div>

//       <div className="container" data-aos="fade-up" data-aos-delay="100">
//         <div className="row g-4">
//           {images.map((image, index) => (
//             <div 
//               key={index} 
//               className="col-lg-4 col-md-6 col-sm-6"
//               data-aos="zoom-in"
//               data-aos-delay={100 + (index * 50)}
//             >
//               <div className="gallery-item">
//                 <a 
//                   href={image.src} 
//                   className="glightbox" 
//                   data-gallery="images-gallery"
//                   title={image.alt}
//                 >
//                   <div className="gallery-img-wrapper">
//                     <Image 
//                       src={image.src} 
//                       alt={image.alt} 
//                       width={400}
//                       height={300}
//                       className="gallery-img"
//                       style={{ objectFit: 'cover' }}
//                     />
//                     <div className="gallery-overlay">
//                       <div className="gallery-icon">
//                         <i className="bi bi-zoom-in"></i>
//                       </div>
//                       <div className="gallery-info">
//                         <p>{image.alt}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Optional: View More Button */}
//         <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
//           <a href="#contact" className="btn btn-primary btn-lg">
//             <i className="bi bi-images me-2"></i>
//             Request Project Showcase
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

'use client'

import { useEffect } from 'react'
import Image from 'next/image'

export default function Gallery() {
  // Featured carousel images - top 5 projects
  const carouselImages = [
    { 
      src: '/assets/img/gallery/gallery-1.jpg', 
      alt: 'Network Rack Installation',
      title: 'Enterprise Network Rack',
      description: 'Professional server rack installation with cable management and labeling'
    },
    { 
      src: '/assets/img/gallery/gallery-2.jpg', 
      alt: 'Cable Management System',
      title: 'Structured Cabling',
      description: 'Clean Cat6A installation with proper cable management and testing'
    },
    { 
      src: '/assets/img/gallery/gallery-3.jpg', 
      alt: 'Wi-Fi Setup Project',
      title: 'Enterprise Wi-Fi Network',
      description: 'High-performance wireless network deployment with seamless coverage'
    },
    { 
      src: '/assets/img/gallery/gallery-4.jpg', 
      alt: 'CCTV Camera Installation',
      title: 'Security Camera System',
      description: '4K IP cameras with night vision and remote monitoring capabilities'
    },
    { 
      src: '/assets/img/gallery/gallery-5.jpg', 
      alt: 'Server Room Infrastructure',
      title: 'Data Center Setup',
      description: 'Complete server room infrastructure with cooling and power management'
    }
  ]

  // Additional gallery images
  const galleryImages = [
    { src: '/assets/img/gallery/gallery-6.jpg', alt: 'Fiber optic cabling installation' },
    { src: '/assets/img/gallery/gallery-7.jpg', alt: 'Switch configuration and setup' },
    { src: '/assets/img/gallery/gallery-8.jpg', alt: 'Router setup and configuration' },
    { src: '/assets/img/gallery/gallery-9.jpg', alt: 'Security camera system deployment' },
  ]

  useEffect(() => {
    const initCarousel = async () => {
      try {
        // Wait for page to be fully loaded
        if (document.readyState === 'complete') {
          const Swiper = (await import('swiper')).default
          const { Navigation, Pagination, Autoplay, EffectFade } = await import('swiper/modules')

          // Initialize main carousel
          new Swiper('.gallery-carousel', {
            modules: [Navigation, Pagination, Autoplay, EffectFade],
            loop: true,
            speed: 800,
            effect: 'fade',
            fadeEffect: {
              crossFade: true
            },
            autoplay: {
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            },
            navigation: {
              nextEl: '.gallery-button-next',
              prevEl: '.gallery-button-prev',
            },
            pagination: {
              el: '.gallery-pagination',
              type: 'bullets',
              clickable: true
            },
            lazy: {
              loadPrevNext: true,
              loadPrevNextAmount: 1
            },
            on: {
              slideChange: function () {
                // Add animation to content
                const activeSlide = this.slides[this.activeIndex]
                const content = activeSlide.querySelector('.carousel-content')
                if (content) {
                  content.style.animation = 'none'
                  setTimeout(() => {
                    content.style.animation = 'slideInUp 1s ease-out'
                  }, 100)
                }
              }
            }
          })
        } else {
          window.addEventListener('load', initCarousel)
        }
      } catch (error) {
        console.error('Carousel initialization error:', error)
      }
    }

    setTimeout(initCarousel, 200)

    return () => {
      window.removeEventListener('load', initCarousel)
    }
  }, [])

  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Project Gallery</h2>
        <p>Explore our recent networking and security installations through this showcase of professional projects.</p>
      </div>

      {/* Full-Width Carousel */}
      <div className="gallery-carousel-wrapper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper gallery-carousel">
          <div className="swiper-wrapper">
            {carouselImages.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <div className="carousel-slide">
                  <div className="carousel-image-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={600}
                      className="carousel-image"
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      quality={75}
                    />
                    <div className="carousel-overlay"></div>
                  </div>
                  
                  <div className="carousel-content">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-8 col-xl-6">
                          <h3 className="carousel-title">{image.title}</h3>
                          <p className="carousel-description">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clean Navigation */}
          <div className="gallery-button-prev carousel-nav-btn">
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="gallery-button-next carousel-nav-btn">
            <i className="bi bi-chevron-right"></i>
          </div>

          {/* Minimal Pagination */}
          <div className="gallery-pagination"></div>
        </div>
      </div>

      {/* Additional Gallery Grid */}
      <div className="container mt-5">
        <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
          <div className="col-12 text-center">
            <h3>More Projects</h3>
            <p className="text-muted">Additional examples of our professional installation work</p>
          </div>
        </div>

        <div className="row g-4" data-aos="fade-up" data-aos-delay="300">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="gallery-item">
                <a 
                  href={image.src} 
                  className="glightbox" 
                  data-gallery="additional-gallery"
                  title={image.alt}
                >
                  <div className="gallery-img-wrapper">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="gallery-img"
                      style={{ objectFit: 'cover' }}
                      loading="lazy"
                      quality={70}
                    />
                    <div className="gallery-overlay">
                      <div className="gallery-icon">
                        <i className="bi bi-zoom-in"></i>
                      </div>
                      <div className="gallery-info">
                        <p>{image.alt}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="400">
          <a href="#contact" className="btn btn-primary btn-lg">
            <i className="bi bi-chat-dots me-2"></i>
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  )
}