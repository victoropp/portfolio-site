"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { useHydrated } from "@/lib/hooks/useHydrated";

export function Hero() {
  const projectCount = projects.length;
  const hydrated = useHydrated();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const nameVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: i * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const statVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.5 + i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const stats = [
    { value: `${projectCount}+`, label: "Production Projects" },
    { value: "5+", label: "Agentic AI Apps" },
    { value: "90%+", label: "Average Accuracy" },
    { value: "$2M+", label: "Potential Impact" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          variants={containerVariants}
          initial={hydrated ? "hidden" : false}
          animate={hydrated ? "visible" : false}
          className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-24 items-center py-32 lg:py-0 lg:min-h-screen"
        >
          {/* Left: Name block — 3 of 5 columns */}
          <div className="lg:col-span-3">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
              <span className="rule-editorial" />
              <span className="section-index">Data Scientist & ML Engineer</span>
            </motion.div>

            {/* Name — three staggered lines in Instrument Serif */}
            <h1 className="mb-10" style={{ fontFamily: "var(--font-instrument-serif)" }}>
              {["VICTOR", "COLLINS", "OPPON"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={nameVariants}
                  initial={hydrated ? "hidden" : false}
                  animate={hydrated ? "visible" : false}
                  className="block text-display-xl text-foreground"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Rule after name */}
            <motion.span variants={itemVariants} className="rule-full mb-10 block" />

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-muted-foreground max-w-md mb-10 leading-relaxed"
            >
              Building production ML systems and agentic AI apps with measurable business impact — finance, healthcare, retail.
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group rounded-sm border-white/20 hover:border-white/40 transition-colors duration-200"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Right: Stats strip — 2 of 5 columns, hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-2 flex-col border-l border-white/5 pl-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                variants={statVariants}
                initial={hydrated ? "hidden" : false}
                animate={hydrated ? "visible" : false}
                className="py-8 border-b border-white/5 last:border-b-0"
              >
                <div
                  className="text-5xl font-bold tracking-tight text-foreground num-tabular mb-1"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground tracking-widest uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
