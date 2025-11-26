"use client"

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

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
  const [hasNavigated, setHasNavigated] = useState(false)
  const initialPathRef = useRef(pathname)

  // Only enable animations after the FIRST navigation (not on initial load)
  useEffect(() => {
    if (pathname !== initialPathRef.current) {
      setHasNavigated(true)
    }
  }, [pathname])

  // No animation wrapper at all until user has navigated
  // This prevents the flash/invisible content issue
  if (!hasNavigated) {
    return <>{children}</>
  }

  // After first navigation: enable page transitions
  return (
    <AnimatePresence mode="wait">
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
