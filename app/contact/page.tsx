import type { Metadata } from "next"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Victor Collins Oppon",
  description: "Get in touch for data science roles, ML engineering positions, and consulting opportunities.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen gradient-mesh">
      <div className="container-custom py-20 md:py-32">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1
              className="text-display font-bold mb-6"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-body-lg text-muted-foreground">
              Open to senior data science roles, ML engineering positions, and consulting opportunities.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto grid gap-6">
            {/* LinkedIn */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-primary">
                    <Linkedin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">LinkedIn</h3>
                    <p className="text-sm text-muted">Connect professionally</p>
                  </div>
                </div>
                <Button asChild>
                  <a
                    href="https://www.linkedin.com/in/victor-collins-oppon-fcca-mba-bsc-01541019/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </Button>
              </div>
            </Card>

            {/* Email */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-secondary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Email</h3>
                    <p className="text-sm text-muted">victoropp@gmail.com</p>
                  </div>
                </div>
                <Button asChild variant="secondary">
                  <a href="mailto:victoropp@gmail.com">Send Email</a>
                </Button>
              </div>
            </Card>

            {/* GitHub */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-foreground">
                    <Github className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">GitHub</h3>
                    <p className="text-sm text-muted">View my projects</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <a
                    href="https://github.com/victoropp"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </Button>
              </div>
            </Card>

            {/* Resume Download */}
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-accent">
                    <Download className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">Resume</h3>
                    <p className="text-sm text-muted">Download my CV</p>
                  </div>
                </div>
                <Button asChild variant="outline">
                  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </ScrollReveal>

        {/* Availability Note */}
        <ScrollReveal delay={0.3}>
          <div className="max-w-2xl mx-auto mt-12 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span>Available for immediate hire</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>Remote or Hybrid</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-secondary" />
                <span>Consulting welcome</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
