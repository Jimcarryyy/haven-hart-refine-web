import type { ProcessStep } from '@/types/content';

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    description:
      'We begin with a confidential consultation to understand your goals, timeline, and investment criteria.',
    iconName: 'Search',
  },
  {
    step: 2,
    title: 'Strategize',
    description:
      'Our team develops a tailored advisory plan backed by proprietary market intelligence and local expertise.',
    iconName: 'Compass',
  },
  {
    step: 3,
    title: 'Execute',
    description:
      'From sourcing to closing, we manage every detail with precision, discretion, and white-glove service.',
    iconName: 'Hammer',
  },
  {
    step: 4,
    title: 'Steward',
    description:
      'Beyond the transaction, we provide ongoing portfolio oversight and strategic guidance for long-term value.',
    iconName: 'Landmark',
  },
];
