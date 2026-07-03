import {
  Award,
  BarChart3,
  Briefcase,
  Building2,
  Compass,
  Hammer,
  HardHat,
  Landmark,
  Search,
  Shield,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Target,
  Award,
  Building2,
  BarChart3,
  Briefcase,
  HardHat,
  Search,
  Compass,
  Hammer,
  Landmark,
};

export const getIcon = (name: string): LucideIcon => {
  return iconMap[name] ?? Building2;
};
