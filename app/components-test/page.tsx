"use client"

import { Button } from "@/components/ui/button"
import { Card, CardHover, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { CountUp } from "@/components/animations/CountUp"

export default function ComponentsTestPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-display text-gradient">
            Design System Components
          </h1>
          <p className="text-body-lg text-foreground/80">
            Testing all UI components, animations, and design tokens
          </p>
        </div>

        {/* Buttons Section */}
        <ScrollReveal>
          <section className="space-y-6">
            <h2 className="text-heading">Buttons</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="link">Link Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="default">Default</Button>
              <Button size="lg">Large</Button>
            </div>
          </section>
        </ScrollReveal>

        {/* Cards Section */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-6">
            <h2 className="text-heading">Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Standard Card</CardTitle>
                  <CardDescription>
                    A basic card with glassmorphism effect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    This card uses the glass styling with backdrop blur and subtle borders.
                  </p>
                </CardContent>
              </Card>

              <CardHover>
                <CardHeader>
                  <CardTitle>Hover Card</CardTitle>
                  <CardDescription>
                    Hover to see the lift effect
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    This card has a hover effect that lifts and glows.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">Learn More</Button>
                </CardFooter>
              </CardHover>

              <Card className="hover-lift">
                <CardHeader>
                  <CardTitle className="text-gradient">Gradient Title</CardTitle>
                  <CardDescription>
                    With custom styling
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">
                    Custom hover-lift class applied for enhanced interaction.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Badges Section */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-6">
            <h2 className="text-heading">Badges</h2>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="tech">Python</Badge>
                <Badge variant="tech">XGBoost</Badge>
                <Badge variant="tech">PyTorch</Badge>
                <Badge variant="tech">FastAPI</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="metric">97% ROC-AUC</Badge>
                <Badge variant="metric">98.1% Accuracy</Badge>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="money">$131K Savings</Badge>
                <Badge variant="money">$5M+ ROI</Badge>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Input Section */}
        <ScrollReveal delay={0.3}>
          <section className="space-y-6">
            <h2 className="text-heading">Input Fields</h2>
            <div className="max-w-md space-y-4">
              <Input type="text" placeholder="Enter your name" />
              <Input type="email" placeholder="Enter your email" />
              <Input type="password" placeholder="Enter your password" />
              <Input type="text" placeholder="Disabled input" disabled />
            </div>
          </section>
        </ScrollReveal>

        {/* Animated Counters */}
        <ScrollReveal delay={0.4}>
          <section className="space-y-6">
            <h2 className="text-heading">Animated Counters</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl text-metric font-bold">
                    <CountUp to={13} suffix="+" />
                  </CardTitle>
                  <CardDescription>Projects Deployed</CardDescription>
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

              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl text-metric font-bold">
                    <CountUp to={98} suffix="%" />
                  </CardTitle>
                  <CardDescription>Average Accuracy</CardDescription>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-4xl text-gradient font-bold">
                    <CountUp to={8} suffix="+" />
                  </CardTitle>
                  <CardDescription>Industries Served</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Typography */}
        <ScrollReveal delay={0.5} direction="left">
          <section className="space-y-6">
            <h2 className="text-heading">Typography</h2>
            <div className="space-y-4">
              <h1 className="text-display">Display Text</h1>
              <h2 className="text-heading">Heading Text</h2>
              <h3 className="text-subheading">Subheading Text</h3>
              <p className="text-body-lg">Large body text for important content</p>
              <p className="text-base">Base body text for general content</p>
              <p className="text-sm text-foreground/75">Small text for secondary content</p>
              <p className="text-gradient font-bold text-3xl">Gradient Text Effect</p>
            </div>
          </section>
        </ScrollReveal>

        {/* Colors & Effects */}
        <ScrollReveal delay={0.6} direction="right">
          <section className="space-y-6">
            <h2 className="text-heading">Colors & Effects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="glow-primary">
                <CardHeader>
                  <CardTitle>Primary Glow</CardTitle>
                  <CardDescription>Cyan glow effect</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glow-secondary">
                <CardHeader>
                  <CardTitle>Secondary Glow</CardTitle>
                  <CardDescription>Purple glow effect</CardDescription>
                </CardHeader>
              </Card>

              <Card className="glow-accent">
                <CardHeader>
                  <CardTitle>Accent Glow</CardTitle>
                  <CardDescription>Green glow effect</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </section>
        </ScrollReveal>

        {/* Scroll Reveal Directions */}
        <section className="space-y-6">
          <h2 className="text-heading text-center">Scroll Reveal Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal direction="up">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Up</CardTitle>
                  <CardDescription>Animates from bottom to top</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="down">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Down</CardTitle>
                  <CardDescription>Animates from top to bottom</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Left</CardTitle>
                  <CardDescription>Animates from right to left</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card>
                <CardHeader>
                  <CardTitle>Slide Right</CardTitle>
                  <CardDescription>Animates from left to right</CardDescription>
                </CardHeader>
              </Card>
            </ScrollReveal>
          </div>
        </section>

        {/* Gradient Backgrounds */}
        <ScrollReveal delay={0.7}>
          <section className="space-y-6">
            <h2 className="text-heading">Gradient Backgrounds</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="gradient-primary rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-2">Gradient Primary</h3>
                <p className="text-foreground/80">Cyan to purple gradient</p>
              </div>

              <div className="gradient-mesh rounded-2xl p-8 border border-border">
                <h3 className="text-2xl font-bold mb-2">Gradient Mesh</h3>
                <p className="text-foreground/80">Multi-directional gradient mesh</p>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Final CTA */}
        <ScrollReveal delay={0.8}>
          <section className="text-center space-y-6 py-12">
            <h2 className="text-heading">Component Library Complete</h2>
            <p className="text-body-lg text-foreground/80 max-w-2xl mx-auto">
              All components are responsive, accessible, and follow the design system specifications.
            </p>
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">View Projects</Button>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  )
}
