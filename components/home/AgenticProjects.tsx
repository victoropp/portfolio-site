"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-heading mb-4" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Built with <span className="text-gradient">Agentic AI</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI applications built using agentic patterns — from concept to production deployment.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {agenticProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <Card className="glass glass-hover border-border/50 h-full flex flex-col group">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-mesh rounded-xl mb-4 flex items-center justify-center border border-border/50">
                    <project.Icon className="h-12 w-12 text-primary/30" />
                  </div>
                  <Badge variant="outline" className="w-fit text-xs mb-2">
                    {project.tag}
                  </Badge>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-end">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
