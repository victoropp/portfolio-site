"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <span className="section-index block mb-6">05 — Contact</span>

            {/* Headline */}
            <h2
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s build something together.
            </h2>

            {/* Rule */}
            <span className="rule-editorial block mb-8" />

            {/* Subtext */}
            <p className="text-base text-muted-foreground mb-12 max-w-xl leading-relaxed">
              Open to applied AI roles, developer relations, data science, and consulting. Let&apos;s discuss how agentic AI and production ML can drive business value.
            </p>

            {/* Inline contact links */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
              <a
                href="https://www.linkedin.com/in/victor-collins-oppon-fcca-mba-bsc-01541019/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-foreground/55 hover:text-foreground transition-colors duration-200 group"
              >
                <Linkedin className="h-4 w-4" />
                <span>Connect on LinkedIn</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
              <a
                href="mailto:victoropp@gmail.com"
                className="flex items-center gap-3 text-sm text-foreground/55 hover:text-foreground transition-colors duration-200 group"
              >
                <Mail className="h-4 w-4" />
                <span>victoropp@gmail.com</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
              </a>
            </div>

            {/* Availability */}
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground tracking-wide">
                Available for immediate hire · Remote or Hybrid · Consulting welcome
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
