"use client"

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { usePathname } from "next/navigation"
import { useHydrated } from "@/lib/hooks/useHydrated"

interface PageTransitionProps {
  children: React.ReactNode
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
    },
  },
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const hydrated = useHydrated()

  // Before hydration: render content directly without animation wrapper
  // This ensures content is always visible on static export
  if (!hydrated) {
    return <>{children}</>
  }

  // After hydration: enable page transitions for client-side navigation
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
