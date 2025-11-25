# Components Quick Reference Guide

Quick copy-paste examples for all components in the design system.

---

## Buttons

### Primary Button
```tsx
<Button>Click Me</Button>
```

### Secondary Button
```tsx
<Button variant="secondary">Secondary Action</Button>
```

### Outline Button
```tsx
<Button variant="outline">Outline Style</Button>
```

### Ghost Button (minimal)
```tsx
<Button variant="ghost">Ghost</Button>
```

### Link Style Button
```tsx
<Button variant="link">Link Style</Button>
```

### Button Sizes
```tsx
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
```

---

## Cards

### Basic Card
```tsx
<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Hover Card (with lift effect)
```tsx
<CardHover>
  <CardHeader>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see effect</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</CardHover>
```

### Project Card Example
```tsx
<CardHover className="hover-lift">
  <CardHeader>
    <div className="flex gap-2 mb-2">
      <Badge variant="metric">97% Accuracy</Badge>
      <Badge variant="money">$131K</Badge>
    </div>
    <CardTitle className="text-gradient">Project Name</CardTitle>
    <CardDescription>Project tagline</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="flex flex-wrap gap-2 mb-4">
      <Badge variant="tech">Python</Badge>
      <Badge variant="tech">XGBoost</Badge>
      <Badge variant="tech">FastAPI</Badge>
    </div>
    <p className="text-sm text-muted-foreground">Project overview...</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" className="w-full">View Project</Button>
  </CardFooter>
</CardHover>
```

---

## Badges

### Tech Stack Badges
```tsx
<Badge variant="tech">Python</Badge>
<Badge variant="tech">XGBoost</Badge>
<Badge variant="tech">PyTorch</Badge>
<Badge variant="tech">Docker</Badge>
```

### Metric Badges (Blue/Cyan)
```tsx
<Badge variant="metric">97% ROC-AUC</Badge>
<Badge variant="metric">98% Accuracy</Badge>
```

### Money Badges (Green)
```tsx
<Badge variant="money">$131K Savings</Badge>
<Badge variant="money">$5M+ ROI</Badge>
```

### Standard Badges
```tsx
<Badge variant="default">Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
```

---

## Input Fields

### Text Input
```tsx
<Input
  type="text"
  placeholder="Enter your name"
/>
```

### Email Input
```tsx
<Input
  type="email"
  placeholder="your@email.com"
/>
```

### With Label
```tsx
<div className="space-y-2">
  <label className="text-sm font-medium">Email</label>
  <Input type="email" placeholder="your@email.com" />
</div>
```

---

## Animations

### Scroll Reveal (Fade + Slide)
```tsx
// Slide up (default)
<ScrollReveal>
  <div>Content reveals on scroll</div>
</ScrollReveal>

// Slide from different directions
<ScrollReveal direction="up">...</ScrollReveal>
<ScrollReveal direction="down">...</ScrollReveal>
<ScrollReveal direction="left">...</ScrollReveal>
<ScrollReveal direction="right">...</ScrollReveal>

// With delay
<ScrollReveal delay={0.2}>
  <div>Delayed reveal</div>
</ScrollReveal>
```

### Animated Counters
```tsx
// Basic counter
<CountUp to={13} suffix="+" />

// Money counter
<CountUp to={5} prefix="$" suffix="M+" />

// Percentage
<CountUp to={98} suffix="%" />

// With decimals
<CountUp to={97.3} suffix="%" decimals={1} />

// With delay
<CountUp to={100} delay={0.5} />
```

### Counter in Card
```tsx
<Card>
  <CardHeader>
    <CardTitle className="text-4xl text-metric font-bold">
      <CountUp to={13} suffix="+" />
    </CardTitle>
    <CardDescription>Projects Deployed</CardDescription>
  </CardHeader>
</Card>
```

---

## Layout Components

### Using Header (automatic)
Already included in layout.tsx - no action needed

### Using Footer (automatic)
Already included in layout.tsx - no action needed

### Using PageTransition (automatic)
Already wrapping page content in layout.tsx

---

## Typography

### Display Text (Hero)
```tsx
<h1 className="text-display text-gradient">
  Hero Headline
</h1>
```

### Headings
```tsx
<h2 className="text-heading">Section Heading</h2>
<h3 className="text-subheading">Subsection Heading</h3>
```

### Body Text
```tsx
<p className="text-body-lg">Large body text</p>
<p className="text-base">Normal body text</p>
<p className="text-sm text-muted-foreground">Small muted text</p>
```

### Gradient Text
```tsx
<span className="text-gradient font-bold">Gradient Text</span>
```

### Money/Metric Text
```tsx
<span className="text-money text-3xl font-bold">$131K</span>
<span className="text-metric text-2xl font-bold">97%</span>
```

---

## Color & Effect Classes

### Glow Effects
```tsx
<div className="glow-primary">Primary glow</div>
<div className="glow-secondary">Secondary glow</div>
<div className="glow-accent">Accent glow</div>
```

### Glass Effect
```tsx
<div className="glass rounded-2xl p-6">
  Glassmorphism background
</div>
```

### Hover Effects
```tsx
<div className="glass-hover rounded-2xl p-6">
  Interactive glass card
</div>

<div className="hover-lift">
  Card with lift on hover
</div>
```

### Gradient Backgrounds
```tsx
<div className="gradient-primary rounded-2xl p-8">
  Primary gradient
</div>

<div className="gradient-mesh min-h-screen">
  Mesh gradient background
</div>
```

---

## Common Patterns

### Hero Section
```tsx
<section className="section gradient-mesh">
  <div className="container-custom text-center space-y-6">
    <ScrollReveal>
      <h1 className="text-display text-gradient">
        Main Headline
      </h1>
    </ScrollReveal>
    <ScrollReveal delay={0.1}>
      <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
        Subheadline describing your work
      </p>
    </ScrollReveal>
    <ScrollReveal delay={0.2}>
      <div className="flex justify-center gap-4">
        <Button size="lg">View Projects</Button>
        <Button variant="outline" size="lg">Download Resume</Button>
      </div>
    </ScrollReveal>
  </div>
</section>
```

### Metrics Dashboard
```tsx
<section className="section">
  <div className="container-custom">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl text-metric font-bold">
            <CountUp to={13} suffix="+" />
          </CardTitle>
          <CardDescription>Projects</CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-4xl text-money font-bold">
            <CountUp to={5} prefix="$" suffix="M+" />
          </CardTitle>
          <CardDescription>Business Impact</CardDescription>
        </CardHeader>
      </Card>

      {/* Add more metrics */}
    </div>
  </div>
</section>
```

### Project Grid
```tsx
<section className="section">
  <div className="container-custom">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} delay={index * 0.1}>
          <CardHover>
            {/* Project card content */}
          </CardHover>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>
```

### CTA Section
```tsx
<section className="section glass">
  <div className="container-custom text-center space-y-6">
    <h2 className="text-heading">Let's Work Together</h2>
    <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
      Open to senior data science roles and consulting opportunities
    </p>
    <div className="flex justify-center gap-4">
      <Button size="lg">Contact Me</Button>
      <Button variant="outline" size="lg">View LinkedIn</Button>
    </div>
  </div>
</section>
```

---

## Responsive Utilities

### Container
```tsx
<div className="container-custom">
  {/* Max-width container with responsive padding */}
</div>
```

### Section Spacing
```tsx
<section className="section">
  {/* py-16 md:py-24 px-4 md:px-6 lg:px-8 */}
</section>

<section className="section-narrow">
  {/* py-12 md:py-16 px-4 md:px-6 lg:px-8 */}
</section>
```

### Grid Layouts
```tsx
{/* Projects grid (1-2-3 columns) */}
<div className="grid-projects">
  {/* grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 */}
</div>

{/* Metrics grid (2-4 columns) */}
<div className="grid-metrics">
  {/* grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 */}
</div>
```

---

## Import Statements

```tsx
// UI Components
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHover,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Layout Components
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { PageTransition } from "@/components/layout/PageTransition"

// Animation Components
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { CountUp } from "@/components/animations/CountUp"

// Utilities
import { cn } from "@/lib/utils/cn"

// Icons
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
```

---

## Tips & Best Practices

1. **Always use ScrollReveal for sections**
   - Adds polish and guides user attention
   - Use staggered delays (0.1s increments)

2. **Use appropriate badge variants**
   - `tech` for technologies
   - `metric` for accuracy/performance
   - `money` for financial metrics

3. **Responsive design**
   - Always test on mobile (320px+)
   - Use responsive grid classes
   - Stack elements on mobile

4. **Accessibility**
   - Add ARIA labels to icon buttons
   - Use semantic HTML
   - Ensure keyboard navigation works

5. **Performance**
   - Use CountUp sparingly (3-4 per page max)
   - Optimize images (WebP format)
   - Lazy load below-fold content

---

**Quick Start:**
```bash
npm run dev
# Visit http://localhost:3000/components-test
```
