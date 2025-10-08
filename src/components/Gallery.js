import Image from 'next/image'

export default function Gallery() {
  const images = [
    '/assets/img/gallery/gallery-1.jpg',
    '/assets/img/gallery/gallery-2.jpg',
    '/assets/img/gallery/gallery-3.jpg',
    '/assets/img/gallery/gallery-4.jpg',
    '/assets/img/gallery/gallery-5.jpg',
    '/assets/img/gallery/gallery-6.jpg',
    '/assets/img/gallery/gallery-7.jpg',
    '/assets/img/gallery/gallery-9.jpg',
    '/assets/img/gallery/gallery-8.jpg'
  ]

  return (
    <section id="gallery" className="gallery section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Gallery</h2>
        <p>Browse our recent projects and see the quality of our networking and security solutions in action.</p>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="100">
        <div className="row g-0">
          {images.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a 
                  href={image} 
                  className="glightbox" 
                  data-gallery="images-gallery"
                >
                  <Image 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    width={400}
                    height={300}
                    className="img-fluid"
                    style={{ width: '100%', height: 'auto' }}
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}