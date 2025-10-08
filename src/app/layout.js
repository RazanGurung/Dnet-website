import { Roboto, Poppins, Raleway } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientInit from '@/components/ClientInit'
import './globals.css'

const roboto = Roboto({ 
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

const raleway = Raleway({ 
  weight: ['300', '400', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
})

export const metadata = {
  title: 'Digital Network Engineering Technology - Expert IT, Networking & Security Solutions',
  description: 'DNET plans, builds, and supports networking, IT & cloud, security, and web/app solutions with clean workmanship and responsive support. Serving Winston-Salem, Greensboro, High Point, and Greater Triad, NC.',
  keywords: 'structured cabling, network installation, CCTV, access control, managed IT, cloud services, web development, SEO, Winston-Salem, NC',
  authors: [{ name: 'DNET' }],
  openGraph: {
    title: 'Digital Network Engineering Technology',
    description: 'Expert IT, Networking & Security Solutions',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${poppins.variable} ${raleway.variable}`}>
      <head>
        <link rel="icon" href="/assets/img/favicon.png" />
        <link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="index-page">
        <Header />
        
        <main className="main">
          {children}
        </main>
        
        <Footer />
        
        {/* Scroll Top Button */}
        <a 
          href="#" 
          id="scroll-top" 
          className="scroll-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>

        {/* Preloader */}
        <div id="preloader"></div>

        {/* Client-side initialization (AOS, GLightbox, Swiper, etc.) */}
        <ClientInit />
      </body>
    </html>
  )
}