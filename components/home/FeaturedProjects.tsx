"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { getFeaturedProjects, projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const totalProjects = projects.length;

  return (
    <section className="py-20 md:py-32 bg-card/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Production ML systems with proven business impact across finance, healthcare,
              and retail
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <Card className="glass glass-hover border-border/50 h-full flex flex-col group">
                <CardHeader>
                  {/* Thumbnail Placeholder */}
                  <div className="w-full h-48 bg-gradient-mesh rounded-xl mb-6 flex items-center justify-center border border-border/50 overflow-hidden">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-2 opacity-20">
                        {project.domain === "finance" && "💳"}
                        {project.domain === "healthcare" && "🏥"}
                        {project.domain === "retail" && "🛍️"}
                        {project.domain === "nlp" && "💬"}
                      </div>
                      <p className="text-xs text-muted">
                        {project.domain.toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Title */}
                  <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>

                  {/* Key Metric Badge */}
                  <div className="mb-4">
                    <Badge variant="money" className="text-sm font-bold px-4 py-1.5">
                      {project.keyMetric.value} {project.keyMetric.label}
                    </Badge>
                  </div>

                  {/* Description */}
                  <CardDescription className="text-base line-clamp-2">
                    {project.tagline}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col justify-between">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.techStack.length - 4} more
                      </Badge>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button size="sm" className="flex-1 group/btn">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    <Button size="sm" variant="outline" className="aspect-square p-0">
                      <Github className="h-4 w-4" />
                    </Button>
                    {project.demoUrl && (
                      <Button size="sm" variant="outline" className="aspect-square p-0">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <ScrollReveal delay={0.4}>
          <div className="text-center">
            <Button size="lg" variant="outline" className="group">
              View All {totalProjects}+ Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
