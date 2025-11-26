"use client"

import * as React from "react"
import { motion, useInView, Variants } from "framer-motion"
import { useHydrated } from "@/lib/hooks/useHydrated"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right"
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  duration = 0.5,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once, margin: "-100px" })
  const hydrated = useHydrated()

  const directionOffset = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.61, 1, 0.88, 1],
      },
    },
  }

  // Before hydration: render content visible (no animation)
  // After hydration: use scroll-triggered animation
  if (!hydrated) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
