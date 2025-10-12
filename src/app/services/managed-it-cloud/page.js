// src/app/services/managed-it-cloud/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Managed IT & Cloud Services | DNET',
  description: '24/7 managed IT support, cloud hosting, Microsoft 365, and proactive maintenance for businesses.',
}

export default function ManagedITCloudPage() {
  const serviceData = {
    title: 'Managed IT & Cloud Services',
    subtitle: 'Comprehensive IT support and cloud solutions for your business',
    icon: 'bi bi-cloud-check-fill',
    
    overview: (
      <div>
        <p className="lead">
          Focus on your business while we handle your technology. Our managed IT services provide 
          24/7 monitoring, helpdesk support, proactive maintenance, and strategic planning to keep 
          your systems running smoothly.
        </p>
        <p>
          From Microsoft 365 and Google Workspace to cloud hosting and infrastructure management, 
          we deliver comprehensive solutions that reduce costs, improve efficiency, and eliminate 
          IT headaches. Get predictable monthly pricing and enterprise-level support.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-headset',
        title: '24/7 Helpdesk',
        description: 'Phone, email, and remote support whenever you need it with fast response times.'
      },
      {
        icon: 'bi bi-graph-up',
        title: 'Proactive Monitoring',
        description: 'Monitor servers, networks, and endpoints 24/7 with automated alerts.'
      },
      {
        icon: 'bi bi-microsoft',
        title: 'Microsoft 365',
        description: 'Email, Office apps, Teams, and cloud storage with setup and ongoing support.'
      },
      {
        icon: 'bi bi-cloud-upload',
        title: 'Cloud Hosting',
        description: 'Migrate to AWS, Azure, or Google Cloud with managed infrastructure.'
      },
      {
        icon: 'bi bi-shield-check',
        title: 'Security Management',
        description: 'Antivirus, firewalls, patch management, and security monitoring.'
      },
      {
        icon: 'bi bi-tools',
        title: 'Maintenance',
        description: 'Regular updates, patches, and preventive maintenance to avoid issues.'
      }
    ],

    process: [
      {
        title: 'IT Assessment',
        description: 'Evaluate current infrastructure, identify gaps, and understand business needs.'
      },
      {
        title: 'Onboarding',
        description: 'Deploy monitoring tools, document systems, and establish processes.'
      },
      {
        title: 'Ongoing Support',
        description: 'Provide helpdesk, monitoring, maintenance, and strategic guidance.'
      },
      {
        title: 'Optimization',
        description: 'Regular reviews, performance tuning, and continuous improvement.'
      }
    ],

    technologies: [
      { name: 'Microsoft 365', icon: 'bi bi-microsoft' },
      { name: 'Google Workspace', icon: 'bi bi-google' },
      { name: 'AWS', icon: 'bi bi-cloud' },
      { name: 'Azure', icon: 'bi bi-cloud-check' },
      { name: 'RMM Tools', icon: 'bi bi-laptop' },
      { name: 'Antivirus', icon: 'bi bi-shield-lock' },
      { name: 'VPN', icon: 'bi bi-shield-check' },
      { name: 'Ticketing', icon: 'bi bi-ticket' }
    ],

    benefits: [
      {
        title: 'Predictable Costs',
        description: 'Fixed monthly pricing eliminates surprise IT expenses and improves budgeting.'
      },
      {
        title: 'Reduced Downtime',
        description: 'Proactive monitoring catches problems before they impact your business.'
      },
      {
        title: 'Expert Team',
        description: 'Access to experienced technicians and specialists without full-time hire.'
      },
      {
        title: 'Scalability',
        description: 'Cloud solutions and flexible services grow with your business needs.'
      },
      {
        title: 'Security & Compliance',
        description: 'Enterprise-grade security and compliance assistance included.'
      },
      {
        title: 'Strategic Planning',
        description: 'Technology roadmap and guidance aligned with business objectives.'
      }
    ],

    cta: {
      title: 'Ready to Outsource Your IT?',
      description: 'Schedule a free IT assessment and discover how managed services can transform your business.'
    }
  }

  return <ServiceLayout {...serviceData} />
}