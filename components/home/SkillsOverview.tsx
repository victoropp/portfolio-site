"use client";

import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { skillCategories } from "@/lib/data/skills";

const categoryColors: Record<string, { bg: string; text: string }> = {
  "ML/DL": { bg: "bg-primary/10 hover:bg-primary/20", text: "text-primary" },
  "NLP": { bg: "bg-secondary/10 hover:bg-secondary/20", text: "text-secondary" },
  "Computer Vision": { bg: "bg-accent/10 hover:bg-accent/20", text: "text-accent" },
  "Production/Deployment": { bg: "bg-primary/10 hover:bg-primary/20", text: "text-primary" },
  "Data Engineering": { bg: "bg-secondary/10 hover:bg-secondary/20", text: "text-secondary" },
  "Domains": { bg: "bg-accent/10 hover:bg-accent/20", text: "text-accent" },
};

export function SkillsOverview() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Technical <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end ML engineering from research to production deployment with proven
              business impact
            </p>
          </div>
        </ScrollReveal>

        {/* Skills Grid by Category */}
        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <ScrollReveal key={category.category} delay={categoryIndex * 0.1}>
              <div>
                {/* Category Title */}
                <h3
                  className={`text-xl md:text-2xl font-semibold mb-6 ${
                    categoryColors[category.category]?.text || "text-primary"
                  }`}
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {category.category}
                </h3>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="animate-in fade-in slide-in-from-bottom-4"
                      style={{ animationDelay: `${skillIndex * 50}ms` }}
                    >
                      <Badge
                        variant="outline"
                        className={`text-sm px-4 py-2 transition-all duration-300 cursor-default ${
                          categoryColors[category.category]?.bg || "hover:bg-primary/10"
                        } ${
                          categoryColors[category.category]?.text || "text-foreground"
                        } border-border/50 hover:border-current hover:scale-105`}
                      >
                        {skill}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Note */}
        <ScrollReveal delay={0.6}>
          <div className="mt-16 p-6 md:p-8 glass rounded-2xl border border-border/50 max-w-4xl mx-auto">
            <p className="text-center text-muted-foreground text-sm md:text-base">
              <span className="text-primary font-semibold">Production-focused approach:</span>{" "}
              Every project includes FastAPI deployment, Docker containerization, comprehensive
              testing, SHAP/Grad-CAM explainability, and business metrics tracking (ROI,
              accuracy, cost reduction).
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
