export interface NavItem {
  label: string;
  href: string;
}

export interface HeroStat {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  metric?: string;
}

export interface OrbitPillar {
  id: string;
  name: string;
  tagline: string;
  description: string;
  angle: number;
}

export interface SolarSolution {
  id: string;
  title: string;
  scale: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  idealFor: string[];
  specs: { label: string; value: string }[];
}

export interface ProductItem {
  id: string;
  category: string;
  brand: string;
  name: string;
  headline: string;
  description: string;
  iconName: string;
  image: string;
  keyFeatures: string[];
  techSpec: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  detail: string;
  deliverables: string[];
}

export interface WhyStarFeature {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metricHighlight: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Solar Farms';
  location: string;
  capacity: string;
  image: string;
  completionYear: string;
  highlights: string[];
}

export interface ImpactMetric {
  id: string;
  value: number;
  suffix: string;
  title: string;
  description: string;
  iconName: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
  description: string;
  phase: string;
}

export interface ConsultationFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  projectType: string;
  energyRequirement: string;
  message: string;
}
