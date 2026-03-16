"use client"

import * as React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/victor-collins-oppon-fcca-mba-bsc-01541019/",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/victoropp",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:victoropp@gmail.com",
    icon: Mail,
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/5 mt-24">
      <div className="container-custom py-10">
        {/* Top row: name + social icons */}
        <div className="flex items-center justify-between mb-6">
          <Link
            href="/"
            className="text-sm font-medium tracking-[0.08em] uppercase text-foreground/65 hover:text-foreground/70 transition-colors duration-200"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Victor Collins Oppon
          </Link>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/45 hover:text-foreground/60 transition-colors duration-200"
                  aria-label={link.name}
                >
                  <Icon className="h-4 w-4" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Thin divider */}
        <span className="rule-full block mb-6" />

        {/* Bottom row: copyright + tech note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-foreground/45">
            &copy; {currentYear} Victor Collins Oppon. All rights reserved.
          </p>
          <p className="text-xs text-foreground/45">
            Next.js · TypeScript · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
