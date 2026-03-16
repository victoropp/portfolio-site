"use client";

import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Receipt, BookOpen, Heart, Zap, BarChart2, type LucideIcon } from "lucide-react";

const agenticProjects: {
  tag: string;
  title: string;
  description: string;
  techStack: string[];
  Icon: LucideIcon;
}[] = [
  {
    tag: "FINANCE | AGENTIC AI",
    title: "Agentic Accounting & Bookkeeping ERP",
    description:
      "Full-stack ERP with AI agents handling invoicing, ledger entries, bank reconciliation, and month-end reporting. Agents reason through each step, catch anomalies, and flag issues autonomously. Used by finance teams in production.",
    techStack: ["LLM API", "Agentic Patterns", "Tool Use", "Python", "React"],
    Icon: Receipt,
  },
  {
    tag: "EDUCATION | AGENTIC AI",
    title: "AI-Powered Personalised Learning Tutor",
    description:
      "An adaptive AI tutor that adjusts content, pacing, and difficulty to each learner in real time. Assesses understanding through conversation rather than rigid quizzes. Built to explore how agentic patterns translate to edtech.",
    techStack: ["LLM API", "Multi-Agent", "NLP", "React"],
    Icon: BookOpen,
  },
  {
    tag: "HEALTH | AGENTIC AI",
    title: "Wellness Tracking & AI Coaching App",
    description:
      "Wellness tracker with an agentic coaching layer providing personalised health guidance. The design challenge was getting the AI tone right in sensitive contexts where empathy matters as much as accuracy.",
    techStack: ["LLM API", "Agentic Patterns", "Python"],
    Icon: Heart,
  },
  {
    tag: "AUTOMATION | AGENTIC AI",
    title: "Multi-Agent Workflow Automation Tool",
    description:
      "Specialised agents collaborating on complex workflows — extraction, validation, transformation, and output generation. The real engineering was in reliable handoffs, error recovery, and quality assurance between agents.",
    techStack: ["LLM API", "Multi-Agent Systems", "Function Calling", "Tool Use"],
    Icon: Zap,
  },
  {
    tag: "ANALYTICS | AGENTIC AI",
    title: "Client-Facing Analytics Dashboard",
    description:
      "Interactive dashboard where users ask questions in plain English and get real answers from live business data. End-to-end build: frontend, API layer, data pipeline, AI integration, and deployment.",
    techStack: ["LLM API", "React", "Data Visualisation", "NL Querying"],
    Icon: BarChart2,
  },
];

export function AgenticProjects() {
  return (
    <section className="py-20 md:py-32 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Left: Sticky section label */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-32">
              <ScrollReveal>
                <span className="section-index block mb-4">01 — Agentic AI</span>
                <h2
                  className="text-3xl font-bold tracking-tight text-foreground mb-6"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Built with<br />Agentic AI
                </h2>
                <span className="rule-editorial block mb-6" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  End-to-end applications using agentic patterns — from concept to production deployment.
                </p>
              </ScrollReveal>
            </div>
          </div>

          {/* Right: Project list */}
          <div className="lg:col-span-3 divide-y divide-white/5">
            {agenticProjects.map((project, index) => (
              <ScrollReveal key={project.title} delay={index * 0.08}>
                <div className="py-10 group">
                  {/* Tag + icon row */}
                  <div className="flex items-center gap-3 mb-4">
                    <project.Icon className="h-4 w-4 text-foreground/45" />
                    <span className="section-index">{project.tag}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-xl font-semibold text-foreground mb-3"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  {/* Tech — plain dot-separated text */}
                  <p className="text-xs text-foreground/45 tracking-wide">
                    {project.techStack.join("  ·  ")}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
