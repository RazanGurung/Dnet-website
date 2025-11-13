// src/app/services/switching-routing-wifi/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Switching, Routing & Wi-Fi Services | DNET',
  description: 'Enterprise network switching, routing configuration, and high-performance Wi-Fi solutions for businesses.',
}

export default function SwitchingRoutingWiFiPage() {
  const serviceData = {
    title: 'Switching, Routing & Wi-Fi',
    subtitle: 'Enterprise-grade network infrastructure for seamless connectivity',
    icon: 'bi bi-wifi',
    heroImage: '/assets/img/carosel/switching_routing.jpg',
    
    overview: (
      <div>
        <p className="lead">
          Power your business with professional network switching, routing, and Wi-Fi solutions. 
          We design and deploy high-performance networks that deliver speed, reliability, and 
          seamless connectivity across your entire organization.
        </p>
        <p>
          From managed switches and enterprise routers to mesh Wi-Fi systems, our solutions are 
          tailored to your specific needs. We handle everything from initial design and configuration 
          to ongoing monitoring and optimization, ensuring your network performs at its best.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-hdd-rack',
        title: 'Managed Switches',
        description: 'Enterprise switches with VLANs, QoS, port security, and advanced management features.'
      },
      {
        icon: 'bi bi-router',
        title: 'Router Configuration',
        description: 'Business-class routers with VPN, firewall, and advanced routing protocols.'
      },
      {
        icon: 'bi bi-wifi',
        title: 'Business Wi-Fi',
        description: 'High-performance wireless networks with seamless roaming and unified management.'
      },
      {
        icon: 'bi bi-diagram-3',
        title: 'Network Segmentation',
        description: 'VLAN configuration for security, traffic optimization, and network organization.'
      },
      {
        icon: 'bi bi-shield-check',
        title: 'Security Features',
        description: 'Built-in firewall, intrusion prevention, and access control for network protection.'
      },
      {
        icon: 'bi bi-graph-up',
        title: 'Performance Monitoring',
        description: 'Real-time monitoring, alerts, and optimization for peak network performance.'
      }
    ],

    process: [
      {
        title: 'Network Assessment',
        description: 'Evaluate current infrastructure, bandwidth needs, and coverage requirements.'
      },
      {
        title: 'Design & Planning',
        description: 'Create network topology, select equipment, and plan deployment strategy.'
      },
      {
        title: 'Configuration',
        description: 'Set up switches, routers, and access points with optimal settings.'
      },
      {
        title: 'Deployment & Testing',
        description: 'Install equipment, test connectivity, and optimize performance.'
      }
    ],

    technologies: [
      { name: 'Cisco', icon: 'bi bi-hdd-rack' },
      { name: 'Ubiquiti', icon: 'bi bi-wifi' },
      { name: 'Netgear', icon: 'bi bi-router' },
      { name: 'TP-Link', icon: 'bi bi-broadcast' },
      { name: 'Aruba', icon: 'bi bi-diagram-3' },
      { name: 'Ruckus', icon: 'bi bi-reception-4' },
      { name: 'Meraki', icon: 'bi bi-cloud-check' },
      { name: 'MikroTik', icon: 'bi bi-gear' }
    ],

    benefits: [
      {
        title: 'Blazing Fast Speeds',
        description: 'Gigabit switching and Wi-Fi 6 technology for maximum throughput.'
      },
      {
        title: 'Reliable Coverage',
        description: 'Strategic access point placement ensures strong signal throughout your space.'
      },
      {
        title: 'Scalable Design',
        description: 'Easily add users, devices, and network segments as your business grows.'
      },
      {
        title: 'Enhanced Security',
        description: 'Network segmentation, guest isolation, and advanced firewall protection.'
      },
      {
        title: 'Central Management',
        description: 'Monitor and control your entire network from a single dashboard.'
      },
      {
        title: 'Business Continuity',
        description: 'Redundant links and failover capabilities minimize downtime.'
      }
    ],

    cta: {
      title: 'Transform Your Network Performance',
      description: 'Schedule a free network assessment and discover how we can optimize your connectivity.'
    }
  }

  return <ServiceLayout {...serviceData} />
}