import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { Linkedin, Mail, Github, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Victor Collins Oppon",
  description: "Get in touch for data science roles, ML engineering positions, and consulting opportunities.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <ScrollReveal>
          <div className="max-w-3xl">
            <span className="section-index block mb-6">Contact</span>
            <h1
              className="text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-8"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Let&apos;s build something together.
            </h1>
            <span className="rule-editorial block mb-8" />
            <p className="text-base text-muted-foreground mb-16 max-w-xl leading-relaxed">
              Open to applied AI roles, developer relations, data science, and consulting. Let&apos;s discuss how agentic AI and production ML can drive business value.
            </p>

            {/* Contact links */}
            <div className="divide-y divide-white/5 border-t border-white/5">
              <a
                href="https://www.linkedin.com/in/victor-collins-oppon-fcca-mba-bsc-01541019/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 hover:border-white/12 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5 text-foreground/30" />
                  <div>
                    <p className="text-base font-medium text-foreground">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 transition-all duration-200" />
              </a>

              <a
                href="mailto:victoropp@gmail.com"
                className="group flex items-center justify-between py-6 hover:border-white/12 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-foreground/30" />
                  <div>
                    <p className="text-base font-medium text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">victoropp@gmail.com</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 transition-all duration-200" />
              </a>

              <a
                href="https://github.com/victoropp"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between py-6 hover:border-white/12 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5 text-foreground/30" />
                  <div>
                    <p className="text-base font-medium text-foreground">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my projects</p>
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-foreground/20 group-hover:text-foreground/60 group-hover:translate-x-1 transition-all duration-200" />
              </a>
            </div>

            {/* Availability */}
            <div className="mt-12 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs text-muted-foreground tracking-wide">
                Available for immediate hire · Remote or Hybrid · Consulting welcome
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
