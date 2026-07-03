import type { Milestone, Value } from '@/types/content';

export const aboutContent = {
  eyebrow: 'Our Story',
  title: 'About Haven & Hart',
  mission:
    'We are more than advisors; we are architects of opportunity. Our mission is to provide unparalleled expertise in luxury real estate, combining traditional values with innovative strategies.',
  quote: 'We build more than portfolios. We build trust.',
  approach: [
    'Confidential, relationship-driven advisory for every engagement',
    'Data-informed market intelligence paired with local expertise',
    'End-to-end support from acquisition through asset stewardship',
    'Tailored strategies aligned to each client\'s long-term vision',
  ],
};

export const values: Value[] = [
  {
    iconName: 'Shield',
    title: 'Discretion',
    description: 'Confidential transactions with the utmost privacy and professionalism.',
  },
  {
    iconName: 'Target',
    title: 'Experience',
    description: 'Decades of market expertise in luxury real estate advisory.',
  },
  {
    iconName: 'Award',
    title: 'Strategic Vision',
    description: 'Forward-thinking approaches to maximize investment potential.',
  },
];

export const milestones: Milestone[] = [
  {
    year: '2010',
    title: 'Foundation',
    description: 'Haven & Hart established with a vision for elevated real estate advisory.',
  },
  {
    year: '2013',
    title: 'First $100M Deal',
    description: 'Closed our landmark Manhattan penthouse transaction, setting a new firm standard.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Extended services to include development planning and capital strategy.',
  },
  {
    year: '2018',
    title: 'Global Reach',
    description: 'Opened advisory desks in London, Miami, and Dubai to serve international clients.',
  },
  {
    year: '2020',
    title: 'Recognition',
    description: "Awarded 'Private Brokerage of the Year' by Luxury Real Estate Council.",
  },
  {
    year: '2024',
    title: 'Innovation',
    description: 'Pioneering next-generation advisory services for modern investors.',
  },
];
