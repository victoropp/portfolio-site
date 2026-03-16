"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { ArrowRight } from "lucide-react";
import { getFeaturedProjects, projects } from "@/lib/data/projects";
import Link from "next/link";

export function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects().slice(0, 4);
  const totalProjects = projects.length;

  return (
    <section className="py-20 md:py-32 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between border-b border-white/10 pb-6">
            <div>
              <span className="section-index block mb-3">03 — Work</span>
              <h2
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                Featured Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-[0.08em] uppercase"
            >
              View all {totalProjects}+
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Numbered project list */}
        <div>
          {featuredProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.06}>
              <Link
                href={`/projects/${project.slug}`}
                className="group flex items-baseline gap-4 md:gap-8 py-7 border-b border-white/10 hover:border-white/12 transition-colors duration-250"
              >
                {/* Number */}
                <span className="section-index w-6 flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <span
                  className="flex-1 text-lg md:text-xl font-medium text-foreground group-hover:text-foreground/80 transition-colors duration-200"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {project.title}
                </span>

                {/* Tech stack — hidden on small screens */}
                <span className="hidden md:block text-xs text-muted-foreground w-52 flex-shrink-0">
                  {project.techStack.slice(0, 3).join(" · ")}
                </span>

                {/* Key metric */}
                <span className="text-sm text-muted-foreground flex-shrink-0 w-28 text-right num-tabular">
                  {project.keyMetric.value} {project.keyMetric.label}
                </span>

                {/* Arrow */}
                <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground/80 group-hover:translate-x-1 transition-all duration-200 flex-shrink-0" />
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Mobile view-all link */}
        <ScrollReveal delay={0.3}>
          <div className="sm:hidden mt-8">
            <Link
              href="/projects"
              className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 tracking-[0.08em] uppercase"
            >
              View all {totalProjects}+ projects
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
