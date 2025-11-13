// src/app/services/security-access/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Security, CCTV & Access Control Services | DNET',
  description: 'Professional security camera systems, access control, and surveillance solutions for businesses and homes.',
}

export default function SecurityAccessPage() {
  const serviceData = {
    title: 'Security, CCTV & Access Control',
    subtitle: 'Comprehensive security solutions to protect what matters most',
    icon: 'bi bi-shield-lock-fill',
    heroImage: '/assets/img/carosel/security.jpg',
    
    overview: (
      <div>
        <p className="lead">
          Secure your property with professional CCTV surveillance and access control systems. 
          We design and install integrated security solutions that provide 24/7 monitoring, 
          remote access, and complete peace of mind.
        </p>
        <p>
          From high-definition IP cameras to sophisticated access control systems, our solutions 
          are tailored to your specific security needs. Monitor your property from anywhere, 
          control who enters your premises, and maintain detailed records of all activity.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-camera-video',
        title: 'HD IP Cameras',
        description: '4K Ultra HD cameras with night vision, motion detection, and weather-resistant housing.'
      },
      {
        icon: 'bi bi-hdd-network',
        title: 'NVR Systems',
        description: 'Network video recorders with 24/7 recording, motion alerts, and remote playback.'
      },
      {
        icon: 'bi bi-phone',
        title: 'Mobile Access',
        description: 'View live feeds and recorded footage from your smartphone, tablet, or computer.'
      },
      {
        icon: 'bi bi-key',
        title: 'Access Control',
        description: 'Card readers, keypad entry, and biometric systems with centralized management.'
      },
      {
        icon: 'bi bi-alarm',
        title: 'Intrusion Detection',
        description: 'Door/window sensors, motion detectors, and integrated alarm systems.'
      },
      {
        icon: 'bi bi-cloud-upload',
        title: 'Cloud Storage',
        description: 'Optional cloud backup for redundant storage and off-site security.'
      }
    ],

    process: [
      {
        title: 'Security Assessment',
        description: 'Evaluate vulnerabilities, identify critical areas, and determine coverage needs.'
      },
      {
        title: 'System Design',
        description: 'Plan camera placement, access points, and select appropriate equipment.'
      },
      {
        title: 'Installation',
        description: 'Mount cameras, run cabling, and install access control hardware.'
      },
      {
        title: 'Setup & Training',
        description: 'Configure systems, set up remote access, and train your staff.'
      }
    ],

    technologies: [
      { name: 'Hikvision', icon: 'bi bi-camera-video' },
      { name: 'Dahua', icon: 'bi bi-eye' },
      { name: 'Axis', icon: 'bi bi-camera' },
      { name: 'Lorex', icon: 'bi bi-cctv' },
      { name: 'HID Global', icon: 'bi bi-key' },
      { name: 'Honeywell', icon: 'bi bi-shield' },
      { name: 'Verkada', icon: 'bi bi-cloud' },
      { name: 'Avigilon', icon: 'bi bi-camera-reels' }
    ],

    benefits: [
      {
        title: '24/7 Monitoring',
        description: 'Continuous surveillance with motion-triggered recording and instant alerts.'
      },
      {
        title: 'Crime Deterrence',
        description: 'Visible cameras and signage discourage theft, vandalism, and unauthorized access.'
      },
      {
        title: 'Remote Viewing',
        description: 'Check in on your property anytime, anywhere with mobile and web access.'
      },
      {
        title: 'Evidence Collection',
        description: 'High-quality video footage provides valuable evidence for investigations.'
      },
      {
        title: 'Employee Safety',
        description: 'Monitor common areas and parking lots to ensure staff security.'
      },
      {
        title: 'Integration Ready',
        description: 'Integrate with alarm systems, access control, and business management software.'
      }
    ],

    cta: {
      title: 'Protect Your Property Today',
      description: 'Get a free security assessment and customized quote for your CCTV and access control needs.'
    }
  }

  return <ServiceLayout {...serviceData} />
}