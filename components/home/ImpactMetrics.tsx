"use client";

import { useMemo } from "react";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { projects } from "@/lib/data/projects";

export function ImpactMetrics() {
  const dynamicMetrics = useMemo(() => {
    const projectCount = projects.length;

    const allIndustries = new Set<string>();
    projects.forEach(p => p.industry.forEach(ind => allIndustries.add(ind)));
    const industryCount = allIndustries.size;

    const accuracies: number[] = [];
    projects.forEach(p => {
      if (p.businessImpact.accuracy) {
        const match = p.businessImpact.accuracy.match(/(\d+(?:\.\d+)?)/);
        if (match) accuracies.push(parseFloat(match[1]));
      }
    });
    const avgAccuracy = accuracies.length > 0
      ? Math.round(accuracies.reduce((a, b) => a + b, 0) / accuracies.length)
      : 90;

    return { projectCount, industryCount, avgAccuracy };
  }, []);

  const metrics = [
    {
      label: "Projects Deployed",
      value: dynamicMetrics.projectCount,
      suffix: "+",
    },
    {
      label: "Potential Impact",
      value: 2,
      suffix: "M+",
      prefix: "$",
    },
    {
      label: "Average Accuracy",
      value: dynamicMetrics.avgAccuracy,
      suffix: "%+",
    },
    {
      label: "Industries Served",
      value: dynamicMetrics.industryCount,
      suffix: "+",
    },
  ];

  return (
    <section className="py-20 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="mb-16">
            <span className="section-index block mb-4">02 — Impact</span>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Measurable Impact
            </h2>
          </div>
        </ScrollReveal>

        {/* Metrics strip — horizontal, no cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/5">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.08}>
              <div className="px-6 lg:px-10 py-10 first:pl-0">
                <div
                  className="text-metric-xl text-foreground mb-3"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  <CountUp
                    to={metric.value}
                    duration={2.5}
                    prefix={metric.prefix}
                    suffix={metric.suffix}
                  />
                </div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
