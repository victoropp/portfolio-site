"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { skillCategories } from "@/lib/data/skills";

export function SkillsOverview() {
  return (
    <section className="py-20 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-12 border-b border-white/5 pb-8">
            <span className="section-index block mb-4">04 — Skills</span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Technical Expertise
            </h2>
          </div>
        </ScrollReveal>

        {/* Skills — table layout */}
        <div className="divide-y divide-white/5">
          {skillCategories.map((category, i) => (
            <ScrollReveal key={category.category} delay={i * 0.05}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-16 py-7">
                {/* Category name */}
                <div className="md:col-span-1">
                  <span
                    className="section-index"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {category.category}
                  </span>
                </div>

                {/* Skills — plain dot-separated text */}
                <div className="md:col-span-3">
                  <p className="text-sm text-foreground/65 leading-relaxed">
                    {category.skills.join(" · ")}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
