"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/victoroppon",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/victoroppon",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:victor@example.com",
    icon: Mail,
  },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-glass mt-24">
      <div className="container-custom section-narrow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gradient mb-4">
              Victor Oppon
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Data Scientist & ML Engineer building production ML systems with measurable business impact.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full glass glass-hover flex items-center justify-center text-foreground hover:text-primary transition-colors"
                    aria-label={link.name}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="h-3 w-3 opacity-50" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Open to senior data science roles, ML engineering positions, and consulting opportunities.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Contact Me
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Victor Oppon. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
