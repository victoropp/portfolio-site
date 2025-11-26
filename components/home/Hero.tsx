"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
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
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const metricsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card opacity-90" />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content Container */}
      <motion.div
        variants={containerVariants}
        initial={hydrated ? "hidden" : false}
        animate={hydrated ? "visible" : false}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-display font-bold mb-6 text-balance"
          style={{ fontFamily: "var(--font-space-grotesk)" }}
        >
          Building Production ML Systems
          <br />
          that Drive{" "}
          <span className="text-gradient">Real Business Results</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Data Scientist & ML Engineer with Finance/Accounting expertise (FCCA, MBA Finance) delivering{" "}
          <span className="text-primary font-semibold">End-to-End ML Solutions</span> across{" "}
          <span className="text-secondary font-semibold">Finance, Healthcare, Retail, Insurance, NLP, Computer Vision</span>, and{" "}
          <span className="text-accent font-semibold">more</span>
        </motion.p>

        {/* Metrics Bar */}
        <motion.div
          variants={metricsVariants}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mb-10 text-sm md:text-base"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-foreground font-semibold">{projectCount}+ Production Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-foreground font-semibold">15+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse-glow" />
            <span className="text-foreground font-semibold">ACCA Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-foreground font-semibold">End-to-End ML Pipelines</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button asChild size="lg" className="group">
            <Link href="/projects">
              View Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={hydrated ? { opacity: 0, y: -10 } : false}
          animate={hydrated ? { opacity: 1, y: 0 } : false}
          transition={{ delay: 2, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full p-1">
            <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-bounce" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
