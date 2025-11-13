// Centralized contact information for DNET
// Update this file to change contact details across the entire website

export const CONTACT_INFO = {
  // Company Details
  companyName: 'DNET',
  fullName: 'DNET Networking Technology',

  // Contact Details
  phone: {
    raw: '+15157716993',
    display: '+1 (515) 771-6993',
    link: 'tel:+15157716993'
  },

  email: {
    primary: 'Dnetworkingtechnology@gmail.com',
    support: 'Dnetworkingtechnology@gmail.com'
  },

  // Address
  address: {
    street: '520 N Martin Luther King Rd',
    city: 'Winston-Salem',
    state: 'NC',
    zip: '27101',
    full: '520 N Martin Luther King Rd, Winston-Salem, NC 27101'
  },

  // Business Hours
  hours: {
    weekdays: '9:00 AM - 6:00 PM',
    saturday: '10:00 AM - 4:00 PM',
    sunday: 'Closed',
    display: 'Monday - Friday: 9:00 AM - 6:00 PM'
  },

  // Social Media (update with real links or set to null to hide)
  social: {
    twitter: null,  // Set to your Twitter/X URL or null to hide
    facebook: null, // Set to your Facebook URL or null to hide
    instagram: null, // Set to your Instagram URL or null to hide
    linkedin: null  // Set to your LinkedIn URL or null to hide
  },

  // Service Area
  serviceArea: 'Winston-Salem, NC and surrounding areas',

  // Map Location (for Google Maps embed)
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3226.234567890123!2d-80.244216!3d36.099861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDA1JzU5LjUiTiA4MMKwMTQnMzkuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus',

  // Form Integration
  formspree: {
    endpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xdkoepwa'
  }
}

// Business Information for Schema/SEO
export const BUSINESS_INFO = {
  foundedYear: 2014,
  yearsInBusiness: new Date().getFullYear() - 2014,
  description: 'Professional networking and IT services in Winston-Salem, NC',
  keywords: 'networking, IT services, cabling, security, Winston-Salem',

  // Stats (only include verified numbers)
  stats: {
    projectsCompleted: '500+', // Verify this number
    clientSatisfaction: null,  // Set to null until you have verified data
    yearsExperience: '10+',
    availability: '24/7'
  }
}
