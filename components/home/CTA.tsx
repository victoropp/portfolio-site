"use client";

import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Linkedin, Mail, Download, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            {/* Headline */}
            <h2
              className="text-heading mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s Build Something{" "}
              <span className="text-gradient">Together</span>
            </h2>

            {/* Subheadline */}
            <p className="text-body-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Open to senior data science roles, ML engineering positions, and consulting
              opportunities. Let&apos;s discuss how production ML can drive business value.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              {/* Primary CTA - LinkedIn */}
              <Button asChild size="lg" className="group w-full sm:w-auto">
                <a
                  href="https://www.linkedin.com/in/victor-collins-oppon-fcca-mba-bsc-01541019/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              {/* Secondary CTA - Email */}
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a href="mailto:victoropp@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>

              {/* Tertiary CTA - Resume */}
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                <a
                  href="/resume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Additional Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Available for immediate hire</span>
              </div>
              <div className="hidden sm:block text-muted">•</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Remote or Hybrid</span>
              </div>
              <div className="hidden sm:block text-muted">•</div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Consulting projects welcome</span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      </div>
    </section>
  );
}
