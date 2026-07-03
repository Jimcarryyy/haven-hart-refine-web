import type { Service } from '@/types/content';

export const services: Service[] = [
  {
    id: 'private-brokerage',
    title: 'Private Brokerage',
    iconName: 'Building2',
    description:
      'Exclusive representation for high-net-worth individuals in luxury property transactions.',
    outcome:
      'Secure off-market opportunities and seamless closings with complete confidentiality.',
    features: [
      'Confidential off-market listings',
      'Personalized property matching',
      'White-glove transaction management',
      'Post-sale concierge services',
    ],
  },
  {
    id: 'market-advisory',
    title: 'Market Advisory',
    iconName: 'BarChart3',
    description:
      'Strategic market intelligence and investment guidance for informed decision-making.',
    outcome:
      'Make data-driven investment decisions with proprietary market intelligence.',
    features: [
      'Market trend analysis',
      'Investment opportunity identification',
      'Risk assessment and mitigation',
      'Portfolio optimization strategies',
    ],
  },
  {
    id: 'capital-strategy',
    title: 'Capital Strategy',
    iconName: 'Briefcase',
    description:
      'Sophisticated financing and capital structuring for complex real estate investments.',
    outcome:
      'Optimize capital structure and unlock financing for complex acquisitions.',
    features: [
      'Financing arrangement consulting',
      'Capital structure optimization',
      'Investment syndication support',
      'Tax strategy coordination',
    ],
  },
  {
    id: 'development-planning',
    title: 'Development Planning',
    iconName: 'HardHat',
    description:
      'Comprehensive development consulting from concept to completion.',
    outcome:
      'Navigate entitlements and deliver projects on time and on budget.',
    features: [
      'Site selection and due diligence',
      'Development feasibility analysis',
      'Regulatory navigation assistance',
      'Project management oversight',
    ],
  },
];
