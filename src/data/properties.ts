import type { Property, PropertyCategory } from '@/types/content';

export const propertyCategories: { label: string; value: PropertyCategory | 'All' }[] = [
  { label: 'All Properties', value: 'All' },
  { label: 'Residential', value: 'Residential' },
  { label: 'Commercial', value: 'Commercial' },
  { label: 'Development', value: 'Development' },
];

export const properties: Property[] = [
  {
    id: 1,
    title: 'Manhattan Penthouse',
    location: 'New York, NY',
    type: 'Luxury Residential',
    category: 'Private Sale',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Exceptional penthouse with panoramic city views and bespoke interior design.',
    highlights: ['5,200 sq ft', '360° city views', 'Private elevator', 'Rooftop terrace'],
    amenities: ['Concierge', 'Wine cellar', 'Home automation', 'Private gym'],
    specs: [
      { label: 'Bedrooms', value: '4' },
      { label: 'Bathrooms', value: '5' },
      { label: 'Year Built', value: '2019' },
      { label: 'Parking', value: '2 spaces' },
    ],
    agentNote:
      'A rare full-floor residence with unobstructed Central Park views. Ideal for UHNW buyers seeking privacy and prestige.',
    investment: '$12.5M',
  },
  {
    id: 2,
    title: 'Architectural Marvel',
    location: 'Los Angeles, CA',
    type: 'Contemporary Estate',
    category: 'Development Advisory',
    filterCategory: 'Development',
    image:
      'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Award-winning contemporary design with sustainable luxury features.',
    highlights: ['8,000 sq ft', 'Smart home tech', 'Infinity pool', 'Wine cellar'],
    amenities: ['Solar panels', 'EV charging', 'Outdoor kitchen', 'Guest house'],
    specs: [
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '7' },
      { label: 'Lot Size', value: '1.2 acres' },
      { label: 'Pool', value: 'Infinity' },
    ],
    agentNote:
      'Designed by a Pritzker-nominated architect. LEED Gold certified with net-zero potential.',
    investment: '$18.2M',
  },
  {
    id: 3,
    title: 'Historic Restoration',
    location: 'Boston, MA',
    type: 'Heritage Property',
    category: 'Capital Strategy',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Meticulously restored 19th-century mansion with modern amenities.',
    highlights: ['Historic designation', 'Original features', 'Modern systems', 'Private gardens'],
    amenities: ['Library', 'Formal gardens', 'Carriage house', 'Geothermal HVAC'],
    specs: [
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '4' },
      { label: 'Era', value: '1887' },
      { label: 'Restored', value: '2022' },
    ],
    agentNote:
      'National Register eligible property with tax credit opportunities for qualified buyers.',
    investment: '$8.7M',
  },
  {
    id: 4,
    title: 'Waterfront Sanctuary',
    location: 'Miami, FL',
    type: 'Luxury Waterfront',
    category: 'Private Brokerage',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Stunning waterfront property with private marina and beach access.',
    highlights: ['150ft waterfront', 'Private marina', 'Beach access', 'Guest quarters'],
    amenities: ['Boat dock', 'Outdoor shower', 'Summer kitchen', 'Hurricane-rated windows'],
    specs: [
      { label: 'Bedrooms', value: '7' },
      { label: 'Bathrooms', value: '8' },
      { label: 'Waterfront', value: '150 ft' },
      { label: 'Dock', value: '80 ft' },
    ],
    agentNote:
      'One of only twelve properties on this exclusive stretch with direct Gulf Stream access.',
    investment: '$22.1M',
  },
  {
    id: 5,
    title: 'Mountain Retreat',
    location: 'Aspen, CO',
    type: 'Luxury Lodge',
    category: 'Investment Advisory',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Exclusive mountain lodge with world-class ski access and amenities.',
    highlights: ['Ski-in/ski-out', 'Wine cave', 'Home theater', 'Spa facilities'],
    amenities: ['Heated driveway', 'Sauna', 'Game room', 'Helipad access'],
    specs: [
      { label: 'Bedrooms', value: '6' },
      { label: 'Bathrooms', value: '6' },
      { label: 'Ski Access', value: 'Direct' },
      { label: 'Acreage', value: '3.5' },
    ],
    agentNote:
      'Strong rental history with 85% occupancy during ski season. Turnkey furnished.',
    investment: '$15.8M',
  },
  {
    id: 6,
    title: 'Urban Oasis',
    location: 'San Francisco, CA',
    type: 'Modern Townhouse',
    category: 'Market Advisory',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Contemporary townhouse in prime location with innovative design elements.',
    highlights: ['3-story design', 'Rooftop deck', 'Smart features', 'Prime location'],
    amenities: ['Rooftop garden', 'EV charging', 'Smart locks', 'City views'],
    specs: [
      { label: 'Bedrooms', value: '3' },
      { label: 'Bathrooms', value: '3.5' },
      { label: 'Stories', value: '3' },
      { label: 'Garage', value: '2-car' },
    ],
    agentNote:
      'Pacific Heights adjacent with strong appreciation trajectory over the past decade.',
    investment: '$4.9M',
  },
  {
    id: 7,
    title: 'Mayfair Townhouse',
    location: 'London, UK',
    type: 'Georgian Townhouse',
    category: 'Private Sale',
    filterCategory: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Elegant Grade II listed townhouse in the heart of Mayfair with period details.',
    highlights: ['Grade II listed', 'Private garden', 'Mews garage', 'Staff quarters'],
    amenities: ['Lift', 'Wine cellar', 'Library', 'Terrace'],
    specs: [
      { label: 'Bedrooms', value: '5' },
      { label: 'Bathrooms', value: '4' },
      { label: 'Sq Ft', value: '4,800' },
      { label: 'Garden', value: 'Private' },
    ],
    agentNote:
      'Rare freehold in Mayfair. Recently renovated while preserving original plasterwork.',
    investment: '$14.3M',
  },
  {
    id: 8,
    title: 'Downtown Tower Suite',
    location: 'Chicago, IL',
    type: 'Commercial Office',
    category: 'Capital Strategy',
    filterCategory: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Premium Class A office space with lake views and institutional-grade infrastructure.',
    highlights: ['42nd floor', 'Lake views', 'LEED Platinum', 'Fiber backbone'],
    amenities: ['Conference center', 'Fitness center', 'Valet parking', '24/7 security'],
    specs: [
      { label: 'Sq Ft', value: '12,500' },
      { label: 'Floors', value: '42' },
      { label: 'Ceiling', value: '10 ft' },
      { label: 'Parking', value: '15 spaces' },
    ],
    agentNote:
      'Triple-net lease with Fortune 500 tenant through 2031. 6.2% cap rate.',
    investment: '$28.5M',
  },
  {
    id: 9,
    title: 'Coastal Development',
    location: 'Malibu, CA',
    type: 'Mixed-Use Development',
    category: 'Development Advisory',
    filterCategory: 'Development',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description:
      'Approved oceanfront development site with entitlements for luxury residences.',
    highlights: ['Oceanfront', 'Entitlements approved', '8 units planned', 'Architect retained'],
    amenities: ['Beach access', 'Underground parking', 'Shared pool', 'Landscape design'],
    specs: [
      { label: 'Units', value: '8' },
      { label: 'Acreage', value: '2.1' },
      { label: 'Zoning', value: 'R-3' },
      { label: 'Timeline', value: '24 months' },
    ],
    agentNote:
      'Full entitlements in place. Partner architect has completed preliminary designs.',
    investment: '$35.0M',
  },
];
