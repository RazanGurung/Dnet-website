import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/Whychooseus'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      {/* Hero Section - First impression with main CTAs */}
      <Hero />

      {/* Why Choose Us Section - Key differentiators and social proof */}
      <WhyChooseUs />

      {/* Services Section - Overview with links to detail pages */}
      <Services />

      {/* Contact Section - Lead capture form */}
      <Contact />
    </>
  )
}