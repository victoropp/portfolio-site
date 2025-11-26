"use client"

import * as React from "react"
import { motion, Variants } from "framer-motion"

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
  const ref = React.useRef<HTMLDivElement>(null)

  // Track mount and visibility states
  const [mounted, setMounted] = React.useState(false)
  const [wasInitiallyInView, setWasInitiallyInView] = React.useState(true) // Default to true for SSR
  const [hasAnimated, setHasAnimated] = React.useState(false)
  const [isCurrentlyInView, setIsCurrentlyInView] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)

    // Check if element is in view at mount time
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const inViewAtMount = rect.top < window.innerHeight && rect.bottom > 0
      setWasInitiallyInView(inViewAtMount)

      // If initially in view, mark as already animated (no animation needed)
      if (inViewAtMount) {
        setHasAnimated(true)
        setIsCurrentlyInView(true)
      }
    }
  }, [])

  // Set up intersection observer for elements not initially in view
  React.useEffect(() => {
    if (!mounted || wasInitiallyInView || hasAnimated) return
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsCurrentlyInView(true)
            if (once) {
              setHasAnimated(true)
              observer.disconnect()
            }
          } else if (!once) {
            setIsCurrentlyInView(false)
          }
        })
      },
      { rootMargin: "-100px" }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [mounted, wasInitiallyInView, hasAnimated, once])

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

  // Before mount: render content visible (no animation wrapper) for SSR/static export
  if (!mounted) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  // If element was in view at mount time, render without motion wrapper (stays visible, no animation)
  if (wasInitiallyInView) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    )
  }

  // Element was NOT in view at mount - use scroll-triggered animation
  // Start visible (not hidden) to prevent flash, animate when scrolled into view
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionOffset[direction] }}
      animate={isCurrentlyInView ? "visible" : { opacity: 0, ...directionOffset[direction] }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
