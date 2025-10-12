// src/app/services/networking-cabling/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Networking & Cabling Services | DNET',
  description: 'Professional structured cabling, Cat6/Cat6A installation, fiber optic solutions, and network infrastructure for businesses.',
}

export default function NetworkingCablingPage() {
  const serviceData = {
    title: 'Networking & Cabling',
    subtitle: 'Professional structured cabling solutions for reliable, high-speed connectivity',
    icon: 'bi bi-hdd-network-fill',
    
    overview: (
      <div>
        <p className="lead">
          Build a solid foundation for your network with professional structured cabling services. 
          We design and install Cat5e, Cat6, Cat6A, and fiber optic cabling systems that ensure 
          reliable, high-speed connectivity for years to come.
        </p>
        <p>
          Our certified technicians follow industry best practices and TIA/EIA standards to deliver 
          clean, organized, and properly documented cabling infrastructure. Whether you're setting up 
          a new office, upgrading existing infrastructure, or need to add network drops, we provide 
          comprehensive solutions tailored to your needs.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-ethernet',
        title: 'Structured Cabling',
        description: 'Cat5e, Cat6, Cat6A copper cabling installed to TIA/EIA standards with proper termination and testing.'
      },
      {
        icon: 'bi bi-lightning-charge',
        title: 'Fiber Optic Solutions',
        description: 'Single-mode and multi-mode fiber installation for high-bandwidth, long-distance connections.'
      },
      {
        icon: 'bi bi-diagram-3',
        title: 'Network Design',
        description: 'Complete network topology design with optimal cable routing and future expansion planning.'
      },
      {
        icon: 'bi bi-tools',
        title: 'Cable Management',
        description: 'Professional cable management with proper labeling, documentation, and organized pathways.'
      },
      {
        icon: 'bi bi-speedometer2',
        title: 'Testing & Certification',
        description: 'Fluke-certified testing and performance verification for all installed cabling.'
      },
      {
        icon: 'bi bi-file-earmark-text',
        title: 'Documentation',
        description: 'Complete as-built documentation including cable maps, test results, and warranty information.'
      }
    ],

    process: [
      {
        title: 'Site Survey',
        description: 'Assess location, measure distances, identify obstacles, and plan optimal cable routes.'
      },
      {
        title: 'Design & Planning',
        description: 'Create detailed network diagram, select appropriate cable types, and plan installation.'
      },
      {
        title: 'Installation',
        description: 'Professional cable pulling, termination, and mounting following industry standards.'
      },
      {
        title: 'Testing & Handoff',
        description: 'Certify all connections, provide documentation, and deliver turnkey system.'
      }
    ],

    technologies: [
      { name: 'Cat6/6A Copper', icon: 'bi bi-ethernet' },
      { name: 'Fiber Optic', icon: 'bi bi-lightning-fill' },
      { name: 'Patch Panels', icon: 'bi bi-grid-3x3' },
      { name: 'Cable Trays', icon: 'bi bi-box' },
      { name: 'Fluke Testing', icon: 'bi bi-speedometer2' },
      { name: 'Keystone Jacks', icon: 'bi bi-outlet' },
      { name: 'Cable Ties', icon: 'bi bi-link-45deg' },
      { name: 'Conduit Systems', icon: 'bi bi-pipe' }
    ],

    benefits: [
      {
        title: 'Future-Proof Infrastructure',
        description: 'High-quality cabling that supports current and future network speeds up to 10Gbps.'
      },
      {
        title: 'Reduced Downtime',
        description: 'Properly installed cables minimize connection issues and network interruptions.'
      },
      {
        title: 'Clean & Organized',
        description: 'Professional cable management for easy troubleshooting and maintenance.'
      },
      {
        title: 'Scalability',
        description: 'Designed with expansion in mind—easily add new drops and connections as you grow.'
      },
      {
        title: 'Warranty Protection',
        description: 'Certified installations backed by manufacturer warranties and our workmanship guarantee.'
      },
      {
        title: 'Compliance',
        description: 'All installations meet building codes and industry standards (TIA/EIA-568).'
      }
    ],

    cta: {
      title: 'Ready to Upgrade Your Network Infrastructure?',
      description: 'Get a free site survey and detailed quote for your cabling project. Professional installation with certified testing and documentation.'
    }
  }

  return <ServiceLayout {...serviceData} />
}