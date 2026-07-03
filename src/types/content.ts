import type { LucideIcon } from 'lucide-react';

export type PropertyCategory = 'Residential' | 'Commercial' | 'Development';

export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  category: string;
  filterCategory: PropertyCategory;
  image: string;
  description: string;
  highlights: string[];
  amenities: string[];
  specs: { label: string; value: string }[];
  agentNote: string;
  investment: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: 'Building2' | 'BarChart3' | 'Briefcase' | 'HardHat';
  description: string;
  outcome: string;
  features: string[];
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  experience: string;
  image: string;
  expertise: string;
  credentials: string[];
  specialties: string[];
  linkedIn?: string;
  awards: string[];
  bio: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  client: string;
  type: string;
  badge: string;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  iconName: 'Shield' | 'Target' | 'Award';
  title: string;
  description: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: 'Search' | 'Compass' | 'Hammer' | 'Landmark';
}

export interface Market {
  id: string;
  city: string;
  country: string;
  description: string;
  dealCount: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface InsightArticle {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Partner {
  name: string;
}

export interface Stat {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    description: string;
  };
  contact: {
    email: string;
    phone: string;
    phoneDisplay: string;
    address: {
      line1: string;
      line2: string;
      note: string;
    };
    officeHours: { day: string; hours: string }[];
    officeHoursNote: string;
  };
  developer: {
    name: string;
    github: string;
  };
  hero: {
    backgroundImage: string;
    headline: string;
    headlineAccent: string;
    subheadline: string;
    statLine: string;
  };
}

export type IconComponent = LucideIcon;
