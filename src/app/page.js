import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Departments from '@/components/Departments'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Departments />
      <FAQ />
      <Testimonials />
      <Gallery />
      <Contact />
    </>
  )
}