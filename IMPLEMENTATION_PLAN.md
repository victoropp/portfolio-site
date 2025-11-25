# Data Science Portfolio Website - Implementation Plan

**Project Owner:** Victor Collins Oppon
**Timeline:** 6-8 Weeks
**Hosting:** GitHub Pages (Free)
**Tech Stack:** Next.js 14 + TypeScript + Tailwind CSS
**Status:** Ready for Implementation

---

## Executive Summary

Building a comprehensive, professional Data Science portfolio to showcase 10+ production-grade ML projects with proven business impact ($5M+ ROI). The site maximizes four key objectives:

1. ✅ **Discoverability (SEO)** - Meta tags, Schema.org, sitemap for Google rankings
2. ✅ **Visual Impact** - Framer Motion animations, 3D elements, interactive charts
3. ✅ **Content Clarity** - Clean design, fast loading, mobile-first responsive
4. ✅ **Thought Leadership** - Professional case studies showcasing business impact

**Investment:** 100-120 hours over 6-8 weeks
**Cost:** $0 (100% free hosting and tools)
**Expected ROI:** Senior DS/ML roles ($120K-$200K+), consulting opportunities

---

## Table of Contents

1. [Technology Stack](#1-technology-stack)
2. [Site Architecture](#2-site-architecture)
3. [Design System](#3-design-system)
4. [Core Features](#4-core-features)
5. [SEO Strategy](#5-seo-strategy)
6. [Content Structure](#6-content-structure)
7. [Implementation Phases](#7-implementation-phases)
8. [GitHub Pages Deployment](#8-github-pages-deployment)
9. [Success Metrics](#9-success-metrics)
10. [Maintenance Plan](#10-maintenance-plan)

---

## 1. Technology Stack

### Core Framework: Next.js 14 (Static Export Mode)

```javascript
// next.config.mjs
const nextConfig = {
  output: 'export',              // Static export for GitHub Pages
  basePath: '/portfolio',         // GitHub Pages subdomain
  images: { unoptimized: true }   // Required for static export
};
```

**Why Next.js SSG?**
- ✅ GitHub Pages compatible via static export
- ✅ Best SEO (generates static HTML with perfect meta tags)
- ✅ Full React ecosystem for animations
- ✅ Fast loading (<2s), works without JavaScript
- ✅ Industry-standard framework (professional signal)
- ✅ TypeScript support for maintainability

### UI & Animation Stack

| Category | Technology | Purpose |
|----------|-----------|---------|
| **Styling** | Tailwind CSS | Utility-first, responsive-first CSS |
| **Components** | shadcn/ui | Accessible, copy-paste components |
| **Animations** | Framer Motion | Smooth page transitions, scroll effects |
| **Charts** | Recharts | Interactive data visualizations |
| **3D Graphics** | React Three Fiber | Optional 3D neural network visualization |

### Development Tools

- **TypeScript** - Type safety, better IDE support
- **ESLint + Prettier** - Code quality and formatting
- **Git** - Version control
- **GitHub Actions** - Automated deployment

### Dependencies Installation

```bash
# Core dependencies
npm install next@14 react react-dom typescript @types/react @types/node

# Styling
npm install tailwindcss postcss autoprefixer
npm install tailwindcss-animate class-variance-authority clsx tailwind-merge

# Animations & Charts
npm install framer-motion recharts

# Optional 3D
npm install @react-three/fiber @react-three/drei three

# SEO
npm install next-sitemap

# Development
npm install -D eslint prettier
```

---

## 2. Site Architecture

### Folder Structure

```
portfolio-site/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions auto-deploy
├── app/                            # Next.js 14 App Router
│   ├── layout.tsx                  # Root layout (nav, footer, analytics)
│   ├── page.tsx                    # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx                # Projects grid with filters
│   │   └── [slug]/
│   │       └── page.tsx            # Dynamic project pages
│   ├── contact/
│   │   └── page.tsx
│   └── globals.css
├── components/
│   ├── ui/                         # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── input.tsx
│   ├── layout/
│   │   ├── Header.tsx              # Navigation bar
│   │   ├── Footer.tsx              # Footer with social links
│   │   └── PageTransition.tsx      # Framer Motion wrapper
│   ├── home/
│   │   ├── Hero.tsx                # Hero with 3D background
│   │   ├── ImpactMetrics.tsx      # Animated counters
│   │   ├── FeaturedProjects.tsx   # Project carousel
│   │   └── SkillsOverview.tsx     # Tech stack badges
│   ├── projects/
│   │   ├── ProjectCard.tsx         # Reusable project card
│   │   ├── ProjectFilters.tsx      # Filter by domain/tech
│   │   ├── MetricsDisplay.tsx      # Business metrics table
│   │   ├── TechStackBadges.tsx     # Tech badges
│   │   └── DemoEmbed.tsx           # Streamlit iframe
│   └── animations/
│       ├── ScrollReveal.tsx        # Scroll-triggered animations
│       └── CountUp.tsx             # Number count-up animation
├── lib/
│   ├── data/
│   │   ├── projects.ts             # All 10+ projects metadata
│   │   ├── skills.ts               # Skills & tech stack
│   │   └── experience.ts           # Professional experience
│   ├── types/
│   │   ├── project.ts              # TypeScript interfaces
│   │   └── skill.ts
│   └── utils/
│       └── seo.ts                  # SEO helper functions
├── public/
│   ├── projects/                   # Project assets
│   │   ├── credit-fraud/
│   │   │   ├── thumbnail.webp      # 400x300px, <100KB
│   │   │   ├── demo-1.webp         # Screenshots
│   │   │   └── architecture.svg    # Diagrams
│   │   ├── covid-xray/
│   │   ├── customer-churn/
│   │   └── ...
│   ├── images/
│   │   ├── profile.webp            # Professional headshot
│   │   └── hero-bg.webp            # Hero background
│   ├── resume.pdf                  # Downloadable resume
│   ├── sitemap.xml                 # Auto-generated
│   └── robots.txt
├── next.config.mjs                 # Next.js configuration
├── tailwind.config.ts              # Tailwind customization
├── tsconfig.json                   # TypeScript config
├── package.json
├── .gitignore
└── README.md
```

### Routing Structure

```
/ (Homepage)
├── Hero with 3D background
├── Impact Metrics (13 Projects, $5M+ ROI, 98% Avg Accuracy)
├── Featured Projects (4 cards)
├── Skills Overview
└── CTA (LinkedIn, Contact, Resume)

/about
├── Professional bio (300-400 words)
├── Experience timeline
├── Skills matrix
└── Education & certifications

/projects
├── Filter bar (Domain, Tech, Industry)
├── Search input
├── Sort dropdown (Newest, Impact, Accuracy)
└── Project grid (10+ cards)

/projects/[slug] (Dynamic)
├── Hero with key metrics badges
├── Executive Summary (Problem → Solution → Impact)
├── Business Impact table
├── Challenge & Dataset
├── Technical Approach (collapsible)
├── Live Demo (embedded Streamlit)
├── Results & Visualizations
├── Deployment Architecture
└── Related Projects (3 cards)

/contact
├── Contact form (Formspree.io)
├── Social links (LinkedIn, GitHub, Email)
└── Resume download
```

---

## 3. Design System

### Color Palette (Dark Theme)

```css
/* Primary Colors */
--background: #0A0E27;           /* Deep navy background */
--foreground: #F8FAFC;           /* Off-white text */

/* Accent Colors */
--primary: #00D9FF;              /* Cyan - data science blue */
--primary-glow: #00D9FF40;       /* Cyan with 25% opacity */
--secondary: #7B68EE;            /* Purple - AI/ML */
--accent: #10B981;               /* Green - success metrics */

/* Neutral Shades */
--card-bg: #1A1F3A;              /* Card backgrounds */
--border: #2D3548;               /* Subtle borders */
--muted: #64748B;                /* Secondary text, labels */
```

**Color Usage:**
- **Money/Savings:** Green (#10B981) - e.g., "$131K Savings"
- **Accuracy/Metrics:** Cyan (#00D9FF) - e.g., "97% ROC-AUC"
- **Tech/AI:** Purple (#7B68EE) - e.g., badges, icons
- **CTAs:** Cyan with glow effect

### Typography

```css
/* Font Families */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-heading: 'Space Grotesk', sans-serif;
--font-code: 'JetBrains Mono', 'Courier New', monospace;

/* Type Scale (Mobile-first) */
--text-xs: 0.75rem;    /* 12px - Small labels */
--text-sm: 0.875rem;   /* 14px - Secondary text */
--text-base: 1rem;     /* 16px - Body text */
--text-lg: 1.125rem;   /* 18px - Large body */
--text-xl: 1.25rem;    /* 20px - Subheadings */
--text-2xl: 1.5rem;    /* 24px - H3 */
--text-3xl: 1.875rem;  /* 30px - H2 */
--text-4xl: 2.25rem;   /* 36px - H1 mobile */
--text-5xl: 3rem;      /* 48px - H1 desktop */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing System

```css
/* Tailwind default scale (4px base) */
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-4: 1rem;      /* 16px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-24: 6rem;     /* 96px */
```

### Component Styles

**Project Cards:**
- Background: Glassmorphism (backdrop-blur + subtle background)
- Border radius: 16px
- Border: 1px solid var(--border)
- Hover: Lift 8px + cyan glow shadow
- Transition: All 300ms ease

**Buttons:**
- **Primary:** Solid cyan background, white text, glow on hover
- **Secondary:** Outline cyan, hover fill
- **Icon:** Circular, 44px min (touch-friendly)
- **Padding:** 12px 24px (comfortable click area)

**Metrics Display:**
- Large numbers: 3rem-5rem with tabular numerals
- Icons: 24px-32px with labels
- Animated count-up on scroll into view
- Color-coded badges

### Responsive Breakpoints

```css
/* Tailwind defaults */
sm: 640px    /* Mobile landscape */
md: 768px    /* Tablet */
lg: 1024px   /* Desktop */
xl: 1280px   /* Large desktop */
2xl: 1536px  /* Extra large */

/* Layout adjustments */
Mobile (< 640px):   1 column grid, stacked nav
Tablet (640-1024px): 2 column grid, sidebar nav
Desktop (> 1024px):  3 column grid, horizontal nav
```

---

## 4. Core Features

### A. Homepage Features

#### 1. Hero Section
```typescript
// components/home/Hero.tsx
- Full-viewport hero (100vh)
- Animated gradient background (CSS keyframes)
- Optional: Particle system or 3D neural network (React Three Fiber)
- Headline: "Building Production ML Systems with Measurable $M+ Business Impact"
- Subheadline: "Data Scientist | ML Engineer | Financial AI + Healthcare ML"
- Metrics bar: "10+ Projects | $5M+ ROI | 98% Avg Accuracy"
- CTAs: [View Projects] [Download Resume]
```

**Animation Timeline:**
- 0-500ms: Fade in headline
- 300-800ms: Slide in subheadline
- 600-1100ms: Pop in metrics bar
- 900-1400ms: Fade in CTAs

#### 2. Impact Metrics Dashboard
```typescript
// components/home/ImpactMetrics.tsx
- Grid: 2x2 on mobile, 4x1 on desktop
- Animated counters (count-up on scroll)
- Metrics:
  1. Projects Deployed: 13
  2. Business Impact: $5M+
  3. Average Accuracy: 98%
  4. Industries Served: 8+
- Optional: Recharts bar chart showing ROI by domain
```

#### 3. Featured Projects (4 Cards)
```typescript
// components/home/FeaturedProjects.tsx
- Carousel on mobile, grid on desktop
- 3D card tilt on hover (Framer Motion)
- Front: Image, title, key metric badge
- Projects:
  1. Credit Card Fraud Detection ($131K savings)
  2. COVID X-ray Classification (92% ROC-AUC)
  3. Customer Churn Prediction (98% AUC)
  4. Financial Sentiment Analysis (82% F1)
```

#### 4. Skills Overview
```typescript
// components/home/SkillsOverview.tsx
- Badge grid grouped by category
- Hover: Tooltip with description
- Categories:
  - ML/DL: XGBoost, PyTorch, TensorFlow, scikit-learn, CatBoost, LightGBM
  - NLP: BERT, FinBERT, Transformers, NLTK, spaCy
  - CV: ResNet, EfficientNet, DenseNet, Grad-CAM, OpenCV
  - Production: FastAPI, Docker, Streamlit, Git, AWS
  - Data: Pandas, NumPy, SQL, PostgreSQL
```

#### 5. Call to Action
```typescript
// components/home/CTA.tsx
- Headline: "Let's Build Something Together"
- Subheadline: "Open to senior data science roles, ML engineering, and consulting"
- Buttons:
  1. [Connect on LinkedIn] (primary)
  2. [Send Email] (secondary)
  3. [Schedule Call] (Calendly link, optional)
```

### B. Projects Page Features

#### 1. Filter & Search Bar
```typescript
// components/projects/ProjectFilters.tsx
interface FilterState {
  domain: string[];      // ['finance', 'healthcare', ...]
  tech: string[];        // ['XGBoost', 'PyTorch', ...]
  industry: string[];    // ['financial-services', ...]
  search: string;        // Fuzzy search on title/description
  sort: 'newest' | 'impact' | 'accuracy';
}

// Multi-select filters with checkboxes
// Clear all filters button
// Active filter count badge
```

#### 2. Project Grid
```typescript
// components/projects/ProjectCard.tsx
- Responsive grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop)
- Card contents:
  - Thumbnail: 400x300px WebP, lazy loaded
  - Title: H3 heading
  - Description: 1 sentence, max 100 chars
  - Key metric badge: Highlighted in green/cyan
  - Tech stack: Max 4 badges visible, "+2 more" indicator
  - Buttons: [View Details] [GitHub]

// Framer Motion layout animations
- Stagger children by 100ms
- Scale up on hover (1.02)
- Glow shadow on hover
```

#### 3. Search & Sort
```typescript
// Fuzzy search implementation
import Fuse from 'fuse.js';

const fuse = new Fuse(projects, {
  keys: ['title', 'tagline', 'techStack'],
  threshold: 0.3
});

// Sort options
- Newest: Sort by date (newest first)
- Impact: Sort by businessImpact.roi
- Accuracy: Sort by businessImpact.accuracy
```

### C. Project Detail Page Features

#### 1. Hero Section
```typescript
// app/projects/[slug]/page.tsx - Hero
- Full-width banner (1200x400px)
- Project screenshot or architecture diagram
- Overlay with key metrics in large badges:
  - ROC-AUC, Savings, Accuracy, Latency
- Links: [GitHub Repo] [Live Demo] [LinkedIn Post]
```

#### 2. Executive Summary
```
Structure: Problem → Solution → Impact (100-150 words)

Example:
"Credit card fraud costs billions annually and creates friction for
legitimate customers. Traditional rule-based systems generate excessive
false positives, declining valid transactions and frustrating cardholders.

This production ML system uses XGBoost with class-weighted learning to
detect fraud with 97% ROC-AUC and 91% recall. SHAP explanations provide
transparency for regulatory compliance. The FastAPI-based deployment
achieves <100ms latency for real-time transaction screening.

**Business Impact:** $131K net savings per 100K transactions, 91% fraud
detection rate, 0.6% false positive rate. Reduces fraud losses while
minimizing customer friction."
```

#### 3. Business Impact Section
```typescript
// components/projects/MetricsDisplay.tsx
interface BusinessMetrics {
  netSavings: string;       // "$131K per 100K transactions"
  roi: string;              // "5,000%+"
  accuracy: string;         // "97% ROC-AUC"
  detectionRate: string;    // "91% (156/172 frauds caught)"
  falsePositiveRate: string;// "0.6%"
  latency: string;          // "<100ms"
}

// Render as table with icons
// Industry applications list
// Transferable use cases
```

#### 4. Technical Deep Dive
```typescript
// Collapsible sections (Accordion component)
1. Data & Preprocessing
   - Dataset description
   - Class imbalance handling
   - Feature engineering

2. Model Architecture
   - Model selection rationale
   - Hyperparameters
   - Training process

3. Evaluation
   - Metrics used (ROC-AUC, PR-AUC, F1)
   - Cross-validation results
   - Confusion matrix

4. Deployment
   - FastAPI endpoints
   - Docker containerization
   - Performance benchmarks
```

#### 5. Live Demo Embed
```typescript
// components/projects/DemoEmbed.tsx
// Option 1: Streamlit iframe
<iframe
  src="https://credit-fraud-detection.streamlit.app"
  width="100%"
  height="800px"
  style={{ border: 'none', borderRadius: '16px' }}
/>

// Option 2: Video demo
<video controls poster="thumbnail.jpg">
  <source src="demo.mp4" type="video/mp4" />
</video>

// Option 3: Interactive React component (custom implementation)
```

#### 6. Results Visualizations
```typescript
// Image gallery with lightbox
- Confusion matrix
- ROC curve
- PR curve
- SHAP summary plot
- Feature importance
- Model comparison charts

// Recharts for interactive visualizations
```

### D. About Page Features

#### 1. Professional Bio
```
300-400 word narrative covering:
- Who you are (Data Scientist & ML Engineer)
- What you've achieved ($5M+ business impact)
- Unique value proposition (Financial AI + Healthcare ML)
- Technical depth (production deployment, explainability)
- Business communication skills
- What you're looking for (senior roles, consulting)
```

#### 2. Experience Timeline
```typescript
// Interactive timeline component
interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

// Hover to expand
// Key metrics highlighted
```

#### 3. Skills Matrix
```typescript
// Recharts radar chart or bar chart
interface Skill {
  name: string;
  category: 'ML' | 'DL' | 'Production' | 'Domain';
  proficiency: 1-5;
}

// Visual representation of skill levels
```

### E. Contact Page

#### 1. Contact Form
```typescript
// Formspree.io integration (free, 50 submissions/month)
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="text" name="subject" />
  <textarea name="message" required />
  <button type="submit">Send Message</button>
</form>

// Success/error states with Framer Motion
// Form validation with React Hook Form
```

#### 2. Social Links
```typescript
// Large icon buttons
- LinkedIn: https://linkedin.com/in/victoroppon
- GitHub: https://github.com/victoroppon
- Email: victor@example.com
- Resume: Download PDF button
```

---

## 5. SEO Strategy

### A. Technical SEO Implementation

#### Next.js Metadata API
```typescript
// app/projects/[slug]/page.tsx
import { Metadata } from 'next';

export async function generateMetadata({ params }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  return {
    title: `${project.title} - ${project.keyMetric.value} | Victor Oppon`,
    description: project.tagline,
    keywords: project.seo.keywords,
    openGraph: {
      title: `${project.title} - ${project.keyMetric.value}`,
      description: project.tagline,
      images: [project.thumbnail],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.tagline,
      images: [project.thumbnail],
    },
  };
}
```

#### Schema.org JSON-LD
```typescript
// components/layout/Schema.tsx
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Victor Collins Oppon",
  "jobTitle": "Senior Data Scientist & ML Engineer",
  "description": "10+ production ML projects with $5M+ business impact",
  "url": "https://victoroppon.github.io/portfolio/",
  "sameAs": [
    "https://linkedin.com/in/victoroppon",
    "https://github.com/victoroppon"
  ],
  "knowsAbout": [
    "Machine Learning",
    "Financial AI",
    "Healthcare AI",
    "Deep Learning",
    "Production ML Deployment"
  ]
};

// Inject in <head>
<script type="application/ld+json">
  {JSON.stringify(personSchema)}
</script>
```

#### Sitemap.xml Generation
```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://victoroppon.github.io/portfolio',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
};
```

```xml
<!-- public/sitemap.xml (auto-generated) -->
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://victoroppon.github.io/portfolio/</loc>
    <lastmod>2025-01-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://victoroppon.github.io/portfolio/projects/credit-card-fraud</loc>
    <priority>0.8</priority>
  </url>
  <!-- ... more URLs -->
</urlset>
```

#### Robots.txt
```txt
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://victoroppon.github.io/portfolio/sitemap.xml
```

### B. Keyword Strategy

**Primary Keywords (Homepage & About):**
- data scientist portfolio
- machine learning engineer projects
- senior data scientist
- financial AI data scientist
- healthcare machine learning engineer

**Long-Tail Keywords (Project Pages):**
- credit card fraud detection machine learning XGBoost
- customer churn prediction CatBoost production
- COVID-19 X-ray classification deep learning PyTorch
- financial sentiment analysis BERT transformers
- production ML deployment FastAPI Docker

**Implementation:**
- H1 tags contain primary keywords naturally
- H2/H3 use variations and long-tail keywords
- Meta descriptions include keywords + CTA
- Alt text: `[keyword] visualization` or `[keyword] architecture diagram`
- URL slugs: `/projects/credit-card-fraud-detection` (keyword-rich)

### C. Performance Optimization

**Target: Lighthouse 95+ in all categories**

1. **Image Optimization:**
   - WebP format with JPEG fallback
   - Lazy loading (`loading="lazy"`)
   - Responsive sizes (`srcset`)
   - Max size: 100KB thumbnails, 200KB heroes

2. **Code Splitting:**
   ```typescript
   // Dynamic imports for heavy components
   const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
     ssr: false,
     loading: () => <div>Loading...</div>
   });
   ```

3. **Font Optimization:**
   ```typescript
   // app/layout.tsx
   import { Inter, Space_Grotesk } from 'next/font/google';

   const inter = Inter({ subsets: ['latin'], display: 'swap' });
   const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], display: 'swap' });
   ```

4. **Bundle Analysis:**
   ```bash
   npm install --save-dev @next/bundle-analyzer
   # Analyze bundle size, remove unused deps
   ```

---

## 6. Content Structure

### A. Project Data Structure

```typescript
// lib/types/project.ts
export interface Project {
  // Identifiers
  id: string;
  slug: string;
  title: string;
  tagline: string;

  // Categorization
  domain: 'finance' | 'healthcare' | 'retail' | 'nlp' | 'cv';
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

  // Ordering
  featured: boolean;
  order: number;
  date: string;
}
```

### B. Sample Project Data

```typescript
// lib/data/projects.ts
export const projects: Project[] = [
  {
    id: '1',
    slug: 'credit-card-fraud-detection',
    title: 'Credit Card Fraud Detection',
    tagline: 'Real-time fraud detection using XGBoost and SHAP achieving 97% ROC-AUC and $131K savings per 100K transactions',

    domain: 'finance',
    industry: ['financial-services', 'e-commerce', 'fintech'],

    keyMetric: {
      label: 'Net Savings',
      value: '$131K',
      context: 'per 100K transactions'
    },

    businessImpact: {
      roi: '5,000%+',
      savings: '$131K per 100K txns',
      accuracy: '97% ROC-AUC',
      other: [
        { label: 'Fraud Detection Rate', value: '91%' },
        { label: 'False Positive Rate', value: '0.6%' },
        { label: 'Latency', value: '<100ms' }
      ]
    },

    techStack: ['XGBoost', 'SHAP', 'FastAPI', 'Streamlit', 'Docker', 'Python'],
    modelType: 'Classification',

    overview: 'Production ML system detecting credit card fraud with 97% ROC-AUC, 91% recall, and <100ms latency. SHAP explanations provide transparency for regulatory compliance. Saves $131K per 100K transactions while minimizing customer friction.',

    challenge: '284,807 transactions, 492 frauds (0.172% - extreme class imbalance 577:1). Challenge: Catch frauds without annoying customers.',

    solution: 'XGBoost with class-weighted learning, SHAP for explainability, FastAPI for <100ms latency, Docker deployment.',

    results: '97% ROC-AUC, 82% PR-AUC, 91% fraud detection (156/172), 0.6% false positive rate, $131K net savings per 100K transactions.',

    thumbnail: '/projects/credit-fraud/thumbnail.webp',
    images: [
      '/projects/credit-fraud/demo-1.webp',
      '/projects/credit-fraud/confusion-matrix.png',
      '/projects/credit-fraud/shap-summary.png',
      '/projects/credit-fraud/roc-curve.png'
    ],

    demoUrl: 'https://credit-fraud-detection.streamlit.app',
    githubUrl: 'https://github.com/victoroppon/credit-card-fraud-detection',

    seo: {
      metaTitle: 'Credit Card Fraud Detection - 97% ROC-AUC, $131K Savings | Victor Oppon',
      metaDescription: 'Production ML system detecting credit card fraud with 97% ROC-AUC, 91% recall. XGBoost, SHAP explainability, FastAPI deployment.',
      keywords: [
        'credit card fraud detection',
        'machine learning fraud prevention',
        'XGBoost fraud detection',
        'SHAP explainability',
        'production ML system',
        'data scientist portfolio'
      ]
    },

    featured: true,
    order: 1,
    date: '2024-12-15'
  },
  // ... 9 more projects
];
```

### C. Homepage Copy

```markdown
## Hero Headline
"Building Production ML Systems with Measurable $M+ Business Impact"

## Hero Subheadline
"Data Scientist & ML Engineer specializing in Financial AI, Healthcare ML, and Predictive Analytics"

## About Section (150 words)
I build machine learning systems that deliver real business value. Across 10+ production projects, I've generated $5M+ in ROI through fraud detection ($131K per 100K transactions), churn prediction (98% AUC, 60% cost reduction), and clinical decision support (92% ROC-AUC).

Every model is production-ready (FastAPI, Docker, Streamlit), explainable (SHAP, Grad-CAM), and backed by rigorous evaluation. My expertise spans financial AI, healthcare ML, retail analytics, and NLP—with a consistent focus on business impact over just technical metrics.

Whether you're looking for a senior data scientist, ML engineer, or technical consultant, I bring both the technical depth and business communication skills to turn data into decisions.
```

---

## 7. Implementation Phases (6-8 Weeks)

### Phase 1: Foundation & Setup (Week 1) - 8-12 hours

**Tasks:**
1. ✅ Initialize Next.js 14 with TypeScript + Tailwind CSS
2. ✅ Configure `next.config.mjs` for static export
3. ✅ Set up folder structure (app/, components/, lib/, public/)
4. ✅ Install dependencies: Framer Motion, Recharts, shadcn/ui
5. ✅ Configure Tailwind with custom theme
6. ✅ Create TypeScript interfaces
7. ✅ Set up Git repository

**Commands:**
```bash
# Initialize Next.js
npx create-next-app@latest portfolio-site --typescript --tailwind --app

# Install dependencies
cd portfolio-site
npm install framer-motion recharts

# Initialize shadcn/ui
npx shadcn-ui@latest init

# Add UI components
npx shadcn-ui@latest add button card badge input

# Initialize Git
git init
git add .
git commit -m "Initial Next.js setup with TypeScript and Tailwind"
```

**Deliverables:**
- ✅ Development environment ready
- ✅ Basic Next.js app running at `localhost:3000`
- ✅ Tailwind configured with design system
- ✅ TypeScript types defined

---

### Phase 2: Design System & Core Components (Week 2) - 12-16 hours

**Tasks:**
1. ✅ Build reusable UI components (Button, Card, Badge)
2. ✅ Create layout components (Header, Footer, PageTransition)
3. ✅ Implement design tokens in Tailwind config
4. ✅ Build animation utilities (ScrollReveal, CountUp)
5. ✅ Mobile responsiveness testing

**Files to create:**
```
components/ui/button.tsx
components/ui/card.tsx
components/ui/badge.tsx
components/layout/Header.tsx
components/layout/Footer.tsx
components/layout/PageTransition.tsx
components/animations/ScrollReveal.tsx
components/animations/CountUp.tsx
```

**Deliverables:**
- ✅ Complete component library
- ✅ Design system implemented
- ✅ Animation utilities ready
- ✅ Mobile-responsive components

---

### Phase 3: Homepage Development (Week 3) - 16-20 hours

**Tasks:**
1. ✅ Build Hero section with gradient background
2. ✅ Create Impact Metrics section with animated counters
3. ✅ Build Featured Projects section (4 cards)
4. ✅ Create Skills Overview with badges
5. ✅ Add CTA section
6. ✅ Implement scroll animations

**Files to create:**
```
components/home/Hero.tsx
components/home/ImpactMetrics.tsx
components/home/FeaturedProjects.tsx
components/home/SkillsOverview.tsx
components/home/CTA.tsx
app/page.tsx (import all sections)
```

**Deliverables:**
- ✅ Complete, polished homepage
- ✅ All sections functional
- ✅ Animations smooth
- ✅ CTAs working

---

### Phase 4: Projects Page & Filtering (Week 4) - 12-16 hours

**Tasks:**
1. ✅ Create `projects.ts` with all 10+ projects
2. ✅ Build Projects listing page
3. ✅ Implement filter logic (Domain, Tech, Industry)
4. ✅ Add search input with fuzzy matching
5. ✅ Add Framer Motion layout animations

**Files to create:**
```
lib/data/projects.ts (all project data)
lib/types/project.ts (TypeScript interfaces)
components/projects/ProjectCard.tsx
components/projects/ProjectFilters.tsx
app/projects/page.tsx
```

**Deliverables:**
- ✅ Complete projects data
- ✅ Functional filtering & search
- ✅ Responsive grid (3-2-1 columns)
- ✅ Smooth animations

---

### Phase 5: Project Detail Pages (Week 5-6) - 20-24 hours

**Tasks:**
1. ✅ Create dynamic route: `app/projects/[slug]/page.tsx`
2. ✅ Build project detail template
3. ✅ Implement demo embedding (Streamlit iframe)
4. ✅ Add image gallery with lightbox
5. ✅ Write content for top 5 projects
6. ✅ Generate metadata per project (SEO)

**Files to create:**
```
app/projects/[slug]/page.tsx
components/projects/MetricsDisplay.tsx
components/projects/TechStackBadges.tsx
components/projects/DemoEmbed.tsx
```

**Top 5 Projects (Priority):**
1. Credit Card Fraud Detection
2. COVID-19 X-ray Classification
3. Customer Churn Prediction
4. Financial Sentiment Analysis
5. Market Basket Analytics

**Deliverables:**
- ✅ Dynamic project pages working
- ✅ 5 complete case studies written
- ✅ Demo embeds functional
- ✅ SEO metadata per page

---

### Phase 6: About & Contact Pages (Week 7) - 8-12 hours

**Tasks:**
1. ✅ Build About page (bio, timeline, skills, education)
2. ✅ Create Contact page (form, social links)
3. ✅ Write About page copy (300-400 words)
4. ✅ Integrate Formspree.io for contact form
5. ✅ Add resume download button

**Files to create:**
```
app/about/page.tsx
app/contact/page.tsx
components/about/ExperienceTimeline.tsx
components/about/SkillsMatrix.tsx
public/resume.pdf
```

**Deliverables:**
- ✅ Complete About page
- ✅ Functional contact form
- ✅ Resume downloadable
- ✅ Social links working

---

### Phase 7: SEO & Performance (Week 8) - 12-16 hours

**Tasks:**
1. ✅ Implement SEO for all pages (Metadata API)
2. ✅ Add Schema.org JSON-LD
3. ✅ Generate sitemap.xml
4. ✅ Optimize images (WebP, lazy loading)
5. ✅ Performance optimization (code splitting)
6. ✅ Lighthouse audits (target 95+)
7. ✅ Cross-browser testing

**Files to create:**
```
lib/utils/seo.ts
components/layout/Schema.tsx
next-sitemap.config.js
public/robots.txt
```

**Deliverables:**
- ✅ SEO fully implemented
- ✅ Lighthouse 95+ all categories
- ✅ Images optimized
- ✅ Cross-browser compatible

---

### Phase 8: Content Completion & Polish (Week 8-9) - 16-20 hours

**Tasks:**
1. ✅ Write content for remaining 5-8 projects
2. ✅ Screenshot Streamlit dashboards (thumbnails)
3. ✅ Create architecture diagrams (if missing)
4. ✅ Proofread all content (Grammarly)
5. ✅ Final design polish
6. ✅ Accessibility audit
7. ✅ Add favicon, loading states, 404 page

**Remaining Projects:**
6. Stock Market Intelligence
7. Retail Vision Analytics
8. Job Change Prediction
9. Enterprise NER Intelligence
10. S&P 500 Forecasting
11. Twitter Sentiment Analysis
12. Retail Sales Forecasting
13. COCO Smart Analytics

**Deliverables:**
- ✅ All 10+ projects complete
- ✅ All images ready (WebP, optimized)
- ✅ Content polished (no typos)
- ✅ Accessibility verified (WCAG AA)

---

### Phase 9: Deployment & Launch (Week 9) - 8-12 hours

**Tasks:**
1. ✅ Set up GitHub Actions for auto-deployment
2. ✅ Configure GitHub Pages
3. ✅ Deploy to production
4. ✅ Verify all links work
5. ✅ Test contact form
6. ✅ Submit sitemap to Google Search Console
7. ✅ Set up Google Analytics 4
8. ✅ Social media announcement (LinkedIn)

**Files to create:**
```
.github/workflows/deploy.yml
public/CNAME (if custom domain)
```

**Deliverables:**
- ✅ Site live on GitHub Pages
- ✅ All functionality working
- ✅ Analytics tracking
- ✅ Promoted on social media

---

## 8. GitHub Pages Deployment

### Repository Setup

**Option 1: User/Organization Site (Recommended)**
- Repository name: `victoroppon.github.io`
- URL: `https://victoroppon.github.io/`
- No basePath needed in next.config.mjs
- Cleaner URL, better for personal branding

**Option 2: Project Site**
- Repository name: `data-science-portfolio`
- URL: `https://victoroppon.github.io/data-science-portfolio/`
- Requires `basePath: '/data-science-portfolio'` in next.config.mjs

### Next.js Configuration

```javascript
// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Static export for GitHub Pages

  // Only needed for project sites (Option 2)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',

  // Required for static export
  images: {
    unoptimized: true,  // GitHub Pages doesn't support Next.js Image Optimization
  },

  // Optional
  trailingSlash: true,
};

export default nextConfig;
```

### GitHub Actions Auto-Deployment

```yaml
# .github/workflows/deploy.yml
name: Deploy Next.js to GitHub Pages

on:
  push:
    branches:
      - main

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Manual Deployment (Alternative)

```bash
# Build static site
npm run build

# Deploy to gh-pages branch
npm install -g gh-pages
gh-pages -d out
```

### Custom Domain (Optional)

If you want a custom domain (e.g., `victoroppon.com`):

1. **Purchase domain** ($10-15/year from Namecheap, Google Domains)

2. **Add CNAME file:**
   ```
   // public/CNAME
   victoroppon.com
   ```

3. **Configure DNS settings:**
   ```
   Type: A
   Host: @
   Value: 185.199.108.153
          185.199.109.153
          185.199.110.153
          185.199.111.153

   Type: CNAME
   Host: www
   Value: victoroppon.github.io
   ```

4. **Enable in GitHub Pages settings:**
   - Repository Settings → Pages
   - Custom domain: `victoroppon.com`
   - Enforce HTTPS: ✅

---

## 9. Success Metrics

### Month 1 Goals (Post-Launch)

**Traffic:**
- ✅ 200+ unique visitors
- ✅ 50% from LinkedIn
- ✅ 30% from GitHub profile
- ✅ 20% from direct/search

**Engagement:**
- ✅ 40%+ view "Projects" page
- ✅ 20%+ view project detail pages
- ✅ 3+ minutes average session duration
- ✅ <50% bounce rate

**Conversion:**
- ✅ 20+ LinkedIn profile visits
- ✅ 5+ contact form submissions
- ✅ 50+ resume downloads

### Month 3 Goals

**Traffic:**
- ✅ 500+ monthly visitors
- ✅ 30% from organic search (Google)
- ✅ SEO rankings:
  - "data scientist portfolio" - Top 50
  - Long-tail keywords - Top 20

**Engagement:**
- ✅ 50%+ click "View Projects"
- ✅ 30%+ explore 2+ projects
- ✅ 5+ minutes average session

**Conversion (Most Important):**
- ✅ 50+ new LinkedIn connections
- ✅ 10+ recruiter InMails
- ✅ 3+ phone screens
- ✅ 1+ job offer or consulting inquiry

### Month 6 Goals

**SEO:**
- ✅ 1,000+ monthly visitors
- ✅ 50%+ from organic search
- ✅ Rank #1-10 for "[your city] data scientist"
- ✅ Rank #1-20 for technical keywords

**Authority:**
- ✅ Backlinks from GitHub, LinkedIn, Medium
- ✅ Featured in data science newsletter (optional)
- ✅ Shared in r/datascience or similar communities

---

## 10. Maintenance Plan

### Monthly Tasks (2-4 hours/month)

- ✅ Check Google Analytics (traffic trends)
- ✅ Review Microsoft Clarity heatmaps (UX issues)
- ✅ Test contact form functionality
- ✅ Update resume if needed

### Quarterly Tasks

- ✅ Add new projects (as completed)
- ✅ Update project metrics (if improved)
- ✅ Review SEO performance (Google Search Console)
- ✅ Dependency updates (`npm update`)
- ✅ Security patches

### Annual Tasks

- ✅ Redesign evaluation (refresh design if needed)
- ✅ Content audit (remove outdated info)
- ✅ Performance audit (Lighthouse)
- ✅ Major version updates (Next.js, React)

---

## Appendix

### A. Critical Files Reference

**Review before implementation:**

1. **Credit Card Fraud README**
   - Path: `C:\Users\victo\Documents\Data_Science_Projects\Data Science Portfolio Projects\projects\credit_card_fraud\README.md`
   - Use for: Homepage featured project, business metrics

2. **Customer Churn README**
   - Path: `...\projects\customer_churn\README.md`
   - Use for: Project detail page structure

3. **COVID X-ray README**
   - Path: `...\projects\covid_xray_classification\README.md`
   - Use for: Technical deep dive, explainability

4. **Financial Sentiment README**
   - Path: `...\projects\financial_sentiment_analysis\README.md`
   - Use for: NLP showcase

5. **Portfolio Overview README**
   - Path: `...\Data Science Portfolio Projects\README.md`
   - Use for: About page, skills section

### B. Asset Preparation Checklist

**Per Project:**
- [ ] Thumbnail: 400x300px, WebP, <100KB
- [ ] Hero image: 1200x600px, WebP, <200KB
- [ ] Demo screenshots: 800x600px, WebP, <150KB each (3-5)
- [ ] Architecture diagrams: SVG or PNG
- [ ] Result visualizations: PNG or WebP

**Global:**
- [ ] Profile headshot: 400x400px, WebP, <100KB
- [ ] Hero background: 1920x1080px, WebP, <300KB
- [ ] Favicon: 32x32px PNG

**Tools:**
- Screenshot: Windows Snipping Tool, ShareX
- Editing: Figma, Photoshop, GIMP
- Compression: Squoosh.app, TinyPNG, ImageOptim

### C. Key Decisions Made

| Decision | Chosen Option | Rationale |
|----------|---------------|-----------|
| **Framework** | Next.js 14 SSG | GitHub Pages compatible, best SEO, professional signal |
| **Styling** | Tailwind CSS | Fast development, responsive-first, highly customizable |
| **Components** | shadcn/ui | Accessible, copy-paste (not dependency), customizable |
| **Animations** | Framer Motion | Industry standard, declarative API, excellent performance |
| **Charts** | Recharts | Lightweight, React-native, good enough for portfolio |
| **3D Graphics** | React Three Fiber (optional) | Impressive but optional, can add later |
| **Forms** | Formspree.io | Free, no backend needed, 50 submissions/month |
| **Analytics** | Google Analytics 4 | Free, industry standard, comprehensive |
| **Blog** | No blog | User specified no regular blogging, focus on projects |
| **Deployment** | GitHub Pages | Free, reliable, version control integrated |

### D. Risk Mitigation

| Risk | Mitigation Strategy |
|------|---------------------|
| **GitHub Pages limitations** | Pre-optimize images as WebP, client-side only features |
| **Large bundle size** | Code split heavy components, lazy load, make 3D optional |
| **Content migration time** | Start with 5 priority projects, add others incrementally |
| **SEO takes time** | Drive traffic via LinkedIn initially, be patient (3-6 months) |
| **Maintenance burden** | Quarterly update schedule, not monthly |

### E. Alternative Approaches Rejected

| Approach | Pros | Cons | Why Rejected |
|----------|------|------|--------------|
| **WordPress** | Good SEO, easy CMS | Perceived as non-technical, requires hosting | Not developer-focused |
| **Jekyll/Hugo** | Simple, fast | Limited interactivity, no React | Can't showcase modern skills |
| **Pure HTML/CSS** | Super fast, no build | No animations, hard to maintain 10+ pages | Lacks visual impact |
| **Webflow/Squarespace** | Easy, templates | Paid, less customizable | Not developer-focused |

### F. Contact Information

**Developer:** Claude (AI Assistant)
**Project Owner:** Victor Collins Oppon
**Repository:** TBD (will be created in Phase 1)
**Live Site:** TBD (will be deployed in Phase 9)

---

**Document Version:** 1.0
**Last Updated:** January 25, 2025
**Next Review:** After Phase 1 completion

---

**END OF IMPLEMENTATION PLAN**
