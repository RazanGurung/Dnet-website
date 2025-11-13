// src/app/services/data-recovery/page.js
import ServiceLayout from '@/components/ServiceLayout'

export const metadata = {
  title: 'Backup, Recovery & Data Protection | DNET',
  description: 'Enterprise backup solutions, disaster recovery, and data protection services for businesses.',
}

export default function DataRecoveryPage() {
  const serviceData = {
    title: 'Backup, Recovery & Data Protection',
    subtitle: 'Protect your critical business data with enterprise-grade backup solutions',
    icon: 'bi bi-shield-check',
    heroImage: '/assets/img/carosel/databackup.jpg',
    
    overview: (
      <div>
        <p className="lead">
          Don't risk losing your valuable business data. We implement comprehensive backup and 
          disaster recovery solutions that protect against hardware failure, ransomware, natural 
          disasters, and human error.
        </p>
        <p>
          Our layered approach includes on-site and cloud backups with automated scheduling, 
          encryption, and regular testing. Whether you need to restore a single file or recover 
          your entire infrastructure, we ensure your data is always protected and recoverable.
        </p>
      </div>
    ),

    features: [
      {
        icon: 'bi bi-cloud-arrow-up',
        title: 'Cloud Backup',
        description: 'Secure off-site backup to enterprise cloud storage with encryption and redundancy.'
      },
      {
        icon: 'bi bi-hdd-network',
        title: 'Local Backup',
        description: 'On-premise backup appliances for fast recovery and air-gapped protection.'
      },
      {
        icon: 'bi bi-arrow-clockwise',
        title: 'Automated Backups',
        description: 'Scheduled backups running automatically with monitoring and alerts.'
      },
      {
        icon: 'bi bi-clock-history',
        title: 'Point-in-Time Recovery',
        description: 'Restore data from any point in time with versioning and retention policies.'
      },
      {
        icon: 'bi bi-laptop',
        title: 'Endpoint Protection',
        description: 'Backup laptops, desktops, and remote workers automatically.'
      },
      {
        icon: 'bi bi-shield-lock',
        title: 'Ransomware Protection',
        description: 'Immutable backups and air-gapped copies protect against ransomware attacks.'
      }
    ],

    process: [
      {
        title: 'Data Assessment',
        description: 'Identify critical data, evaluate current backup status, and determine requirements.'
      },
      {
        title: 'Solution Design',
        description: 'Design backup strategy with appropriate retention, frequency, and storage.'
      },
      {
        title: 'Implementation',
        description: 'Deploy backup systems, configure automation, and perform initial backup.'
      },
      {
        title: 'Monitoring & Testing',
        description: 'Ongoing monitoring, regular recovery testing, and quarterly reviews.'
      }
    ],

    technologies: [
      { name: 'Veeam', icon: 'bi bi-box-seam' },
      { name: 'Acronis', icon: 'bi bi-shield' },
      { name: 'AWS Backup', icon: 'bi bi-cloud' },
      { name: 'Azure Backup', icon: 'bi bi-microsoft' },
      { name: 'Datto', icon: 'bi bi-hdd-rack' },
      { name: 'Synology', icon: 'bi bi-hdd' },
      { name: 'Rubrik', icon: 'bi bi-layers' },
      { name: 'Backblaze', icon: 'bi bi-cloud-arrow-up' }
    ],

    benefits: [
      {
        title: 'Business Continuity',
        description: 'Minimize downtime and quickly recover from any data loss scenario.'
      },
      {
        title: 'Multiple Copies',
        description: 'Follow 3-2-1 rule: 3 copies, 2 different media, 1 off-site location.'
      },
      {
        title: 'Fast Recovery',
        description: 'Restore individual files in minutes or entire systems in hours.'
      },
      {
        title: 'Compliance Ready',
        description: 'Meet regulatory requirements for data retention and protection.'
      },
      {
        title: 'Ransomware Defense',
        description: 'Immutable backups ensure you can recover even from ransomware attacks.'
      },
      {
        title: 'Peace of Mind',
        description: '24/7 monitoring ensures backups run successfully and data is protected.'
      }
    ],

    cta: {
      title: 'Is Your Data Protected?',
      description: 'Get a free backup assessment and protect your business from data loss today.'
    }
  }

  return <ServiceLayout {...serviceData} />
}