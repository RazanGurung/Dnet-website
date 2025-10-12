// src/app/services/web-seo-software/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Web Development, SEO & Custom Software | DNET',
  description: 'Modern websites, SEO optimization, custom web applications, and software development services.',
}

export default function WebSEOSoftwarePage() {
  const serviceData = {
    title: 'Web, SEO & Custom Software',
    subtitle: 'Modern websites and custom applications that drive business results',
    icon: 'bi bi-code-slash',
    
    overview: (
      <div>
        <p className="lead">
          Transform your online presence with professional web development, SEO optimization, and 
          custom software solutions. We build fast, secure, and user-friendly websites and 
          applications that attract customers and streamline your operations.
        </p>
        <p>
          From simple brochure sites to complex web applications, our development team delivers 
          modern, responsive solutions optimized for search engines and designed to convert visitors 
          into customers. We also create custom business software to automate processes and 
          improve efficiency.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-brush',
        title: 'Website Design',
        description: 'Modern, responsive websites that look great on all devices and convert visitors.'
      },
      {
        icon: 'bi bi-search',
        title: 'SEO Optimization',
        description: 'On-page SEO, technical optimization, and content strategy to rank higher in Google.'
      },
      {
        icon: 'bi bi-laptop-code',
        title: 'Web Applications',
        description: 'Custom portals, dashboards, and business applications built with modern frameworks.'
      },
      {
        icon: 'bi bi-cart',
        title: 'E-Commerce',
        description: 'Online stores with payment processing, inventory, and order management.'
      },
      {
        icon: 'bi bi-phone',
        title: 'API Integration',
        description: 'Connect your website to CRM, payment gateways, shipping, and business tools.'
      },
      {
        icon: 'bi bi-bar-chart',
        title: 'Analytics & Tracking',
        description: 'Google Analytics setup, conversion tracking, and performance monitoring.'
      }
    ],

    process: [
      {
        title: 'Discovery',
        description: 'Understand your goals, target audience, and requirements through consultation.'
      },
      {
        title: 'Design & Planning',
        description: 'Create mockups, plan features, and define project scope and timeline.'
      },
      {
        title: 'Development',
        description: 'Build your website or application with modern technologies and best practices.'
      },
      {
        title: 'Launch & Support',
        description: 'Deploy to production, optimize performance, and provide ongoing maintenance.'
      }
    ],

    technologies: [
      { name: 'React/Next.js', icon: 'bi bi-code-slash' },
      { name: 'WordPress', icon: 'bi bi-wordpress' },
      { name: 'Node.js', icon: 'bi bi-server' },
      { name: 'Python', icon: 'bi bi-python' },
      { name: 'PostgreSQL', icon: 'bi bi-database' },
      { name: 'AWS/Cloud', icon: 'bi bi-cloud' },
      { name: 'SEO Tools', icon: 'bi bi-search' },
      { name: 'Analytics', icon: 'bi bi-graph-up' }
    ],

    benefits: [
      {
        title: 'Mobile-First Design',
        description: 'Responsive websites that work perfectly on phones, tablets, and desktops.'
      },
      {
        title: 'Search Engine Ready',
        description: 'Built-in SEO optimization to help customers find you on Google.'
      },
      {
        title: 'Fast Performance',
        description: 'Optimized for speed with modern frameworks and best practices.'
      },
      {
        title: 'Secure & Reliable',
        description: 'HTTPS, security updates, and reliable hosting for peace of mind.'
      },
      {
        title: 'Easy Updates',
        description: 'Content management systems let you update content without coding.'
      },
      {
        title: 'Analytics Included',
        description: 'Track visitors, conversions, and performance with detailed analytics.'
      }
    ],

    cta: {
      title: 'Ready to Build Your Digital Presence?',
      description: 'Get a free consultation and quote for your website or custom software project.'
    }
  }

  return <ServiceLayout {...serviceData} />
}