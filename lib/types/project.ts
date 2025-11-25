// lib/types/project.ts

export interface Project {
  // Identifiers
  id: string;
  slug: string;
  title: string;
  tagline: string;

  // Categorization
  domain: 'finance' | 'healthcare' | 'retail' | 'nlp' | 'cv' | 'hr' | 'forecasting' | 'analytics';
  industry: string[];

  // Metrics
  keyMetric: {
    label: string;
    value: string;
    context: string;
  };
  businessImpact: {
    roi: string;
    savings?: string;
    accuracy?: string;
    other?: { label: string; value: string }[];
  };

  // Technical
  techStack: string[];
  modelType: string;

  // Content
  overview: string;
  challenge: string;
  solution: string;
  results: string;

  // Assets
  thumbnail: string;
  images: string[];
  demoUrl?: string;
  githubUrl: string;

  // SEO
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };

  // Additional detail page sections
  dataset?: {
    name: string;
    size: string;
    features: string;
    source?: string;
  };

  approach?: {
    preprocessing?: string[];
    modeling?: string[];
    evaluation?: string[];
    deployment?: string[];
  };

  keyLearnings?: {
    whatWorked: string[];
    whatDidnt: string[];
    improvements: string[];
  };

  // Ordering
  featured: boolean;
  order: number;
  date: string;
}

// Filter state interface for Projects page
export interface FilterState {
  domain: string[];
  tech: string[];
  industry: string[];
  search: string;
  sort: 'newest' | 'impact' | 'accuracy';
}

export type SortOption = 'newest' | 'impact' | 'accuracy';
