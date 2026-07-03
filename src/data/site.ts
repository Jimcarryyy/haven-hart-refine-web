import type { SiteConfig } from '@/types/content';

export const siteConfig: SiteConfig = {
  brand: {
    name: 'Haven & Hart',
    tagline: 'Crafting Legacies in Luxury Real Estate',
    description:
      'Private brokerage and advisory for discerning investors and visionary developers.',
  },
  contact: {
    email: 'consultation@havenhart.com',
    phone: '+15559876543',
    phoneDisplay: '+1 (555) 987-6543',
    address: {
      line1: '1 Madison Avenue, Suite 2500',
      line2: 'New York, NY 10010',
      note: 'By appointment only',
    },
    officeHours: [
      { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
      { day: 'Sunday', hours: 'By Appointment' },
    ],
    officeHoursNote:
      'All times are Eastern Standard Time. Emergency consultations available 24/7.',
  },
  developer: {
    name: 'Jimcarry Omambak',
    github: 'https://github.com/Jimcarryyy',
  },
  hero: {
    backgroundImage:
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    headline: 'Crafting Legacies in',
    headlineAccent: 'Luxury Real Estate',
    subheadline:
      'Private brokerage and advisory for discerning investors and visionary developers.',
    statLine: '$2.5B+ in transactions · 12 global markets · 15 years of excellence',
  },
};
