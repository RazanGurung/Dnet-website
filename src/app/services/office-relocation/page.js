// src/app/services/office-relocation/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Office Relocation & New Site Setup | DNET',
  description: 'Complete IT infrastructure setup for new offices, relocations, and warehouse deployments.',
}

export default function OfficeRelocationPage() {
  const serviceData = {
    title: 'Office Relocation & New Site Setup',
    subtitle: 'Seamless IT infrastructure deployment for your new location',
    icon: 'bi bi-building-fill',
    
    overview: (
      <div>
        <p className="lead">
          Moving to a new office or opening a new location? We handle complete IT infrastructure 
          deployment from pre-construction planning to final handoff. Get your network, phones, 
          security, and IT systems up and running on day one.
        </p>
        <p>
          Our comprehensive approach ensures zero downtime during transitions. We coordinate with 
          contractors, manage timelines, and deliver turnkey solutions that let you focus on 
          running your business while we handle the technical details.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-blueprint',
        title: 'Pre-Construction Planning',
        description: 'Work with architects and contractors to plan cable pathways and equipment locations.'
      },
      {
        icon: 'bi bi-hdd-network',
        title: 'Complete Cabling',
        description: 'Structured cabling, fiber backbone, and all network infrastructure installation.'
      },
      {
        icon: 'bi bi-wifi',
        title: 'Network Deployment',
        description: 'Switches, routers, Wi-Fi, VoIP phones, and all networking equipment setup.'
      },
      {
        icon: 'bi bi-camera-video',
        title: 'Security Systems',
        description: 'CCTV cameras, access control, and alarm systems integrated with your network.'
      },
      {
        icon: 'bi bi-tools',
        title: 'Equipment Migration',
        description: 'Safely disconnect, transport, and reinstall servers and critical equipment.'
      },
      {
        icon: 'bi bi-clipboard-check',
        title: 'Testing & Documentation',
        description: 'Complete testing, labeling, and as-built documentation for easy maintenance.'
      }
    ],

    process: [
      {
        title: 'Site Survey',
        description: 'Visit location, assess requirements, and create detailed deployment plan.'
      },
      {
        title: 'Design & Coordination',
        description: 'Work with contractors, order equipment, and schedule installation timeline.'
      },
      {
        title: 'Installation',
        description: 'Deploy infrastructure, install equipment, and set up all systems.'
      },
      {
        title: 'Testing & Handoff',
        description: 'Test all systems, provide training, and deliver complete documentation.'
      }
    ],

    technologies: [
      { name: 'Structured Cabling', icon: 'bi bi-ethernet' },
      { name: 'Network Racks', icon: 'bi bi-hdd-rack' },
      { name: 'Switches & Routers', icon: 'bi bi-router' },
      { name: 'Wi-Fi Systems', icon: 'bi bi-wifi' },
      { name: 'VoIP Phones', icon: 'bi bi-telephone' },
      { name: 'Security Cameras', icon: 'bi bi-camera-video' },
      { name: 'Access Control', icon: 'bi bi-key' },
      { name: 'UPS Systems', icon: 'bi bi-battery-charging' }
    ],

    benefits: [
      {
        title: 'Zero Downtime',
        description: 'Seamless transition with network ready on your move-in date.'
      },
      {
        title: 'One Vendor',
        description: 'Single point of contact for all IT infrastructure needs.'
      },
      {
        title: 'Future-Ready',
        description: 'Scalable design that accommodates growth and technology changes.'
      },
      {
        title: 'Cost Effective',
        description: 'Competitive pricing with bundled services and volume discounts.'
      },
      {
        title: 'Project Management',
        description: 'We coordinate with all parties and keep your project on schedule.'
      },
      {
        title: 'Warranty & Support',
        description: 'Comprehensive warranty and ongoing support for peace of mind.'
      }
    ],

    cta: {
      title: 'Planning a Move or New Location?',
      description: 'Schedule a consultation to discuss your timeline and get a detailed project quote.'
    }
  }

  return <ServiceLayout {...serviceData} />
}