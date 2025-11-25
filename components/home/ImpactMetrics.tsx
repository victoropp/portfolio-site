"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CountUp } from "@/components/animations/CountUp";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { TrendingUp, DollarSign, Target, Briefcase } from "lucide-react";

const metrics = [
  {
    icon: Briefcase,
    label: "Projects Deployed",
    value: 13,
    suffix: "",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: DollarSign,
    label: "Business Impact",
    value: 5,
    suffix: "M+",
    prefix: "$",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Target,
    label: "Average Accuracy",
    value: 98,
    suffix: "%",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: TrendingUp,
    label: "Industries Served",
    value: 8,
    suffix: "+",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function ImpactMetrics() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Measurable <span className="text-gradient">Business Impact</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              Production-grade ML systems delivering real ROI across financial services,
              healthcare, retail, and more
            </p>
          </div>
        </ScrollReveal>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, index) => (
            <ScrollReveal key={metric.label} delay={index * 0.1}>
              <Card className="glass glass-hover border-border/50 h-full">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  {/* Icon */}
                  <div
                    className={`${metric.bgColor} ${metric.color} p-4 rounded-2xl mb-6`}
                  >
                    <metric.icon className="h-8 w-8" strokeWidth={2.5} />
                  </div>

                  {/* Value with CountUp */}
                  <div className="mb-3">
                    <span
                      className={`text-5xl md:text-6xl font-bold ${metric.color}`}
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      <CountUp
                        to={metric.value}
                        duration={2.5}
                        prefix={metric.prefix}
                        suffix={metric.suffix}
                      />
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-muted-foreground font-medium">{metric.label}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Optional: Additional Context */}
        <ScrollReveal delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm md:text-base max-w-3xl mx-auto">
              Every project includes production deployment (FastAPI, Docker), explainability
              (SHAP, Grad-CAM), and comprehensive business metrics tracking ROI, cost
              reduction, and accuracy improvements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
