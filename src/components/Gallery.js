import Image from 'next/image'

export default function Gallery() {
  const images = [
    { src: '/assets/img/gallery/gallery-1.jpg', alt: 'Network rack installation' },
    { src: '/assets/img/gallery/gallery-2.jpg', alt: 'Cable management system' },
    { src: '/assets/img/gallery/gallery-3.jpg', alt: 'Wi-Fi setup project' },
    { src: '/assets/img/gallery/gallery-4.jpg', alt: 'CCTV camera installation' },
    { src: '/assets/img/gallery/gallery-5.jpg', alt: 'Server room infrastructure' },
    { src: '/assets/img/gallery/gallery-6.jpg', alt: 'Fiber optic cabling' },
    { src: '/assets/img/gallery/gallery-7.jpg', alt: 'Switch configuration' },
    { src: '/assets/img/gallery/gallery-8.jpg', alt: 'Router setup' },
    { src: '/assets/img/gallery/gallery-9.jpg', alt: 'Security camera system' },
  ]

  return (
    <section id="gallery" className="gallery section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Project Gallery</h2>
        <p>Browse our recent projects and see the quality of our networking and security solutions in action.</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6 col-sm-6"
              data-aos="zoom-in"
              data-aos-delay={100 + (index * 50)}
            >
              <div className="gallery-item">
                <a 
                  href={image.src} 
                  className="glightbox" 
                  data-gallery="images-gallery"
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

        {/* Optional: View More Button */}
        <div className="text-center mt-5" data-aos="fade-up" data-aos-delay="200">
          <a href="#contact" className="btn btn-primary btn-lg">
            <i className="bi bi-images me-2"></i>
            Request Project Showcase
          </a>
        </div>
      </div>
    </section>
  )
}