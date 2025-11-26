"use client"

import { motion, AnimatePresence, type Variants } from "framer-motion"
import { usePathname } from "next/navigation"
import { useRef, useEffect, useState } from "react"

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
  const [isFirstRender, setIsFirstRender] = useState(true)
  const prevPathRef = useRef(pathname)

  useEffect(() => {
    // After first render, allow animations on subsequent navigations
    if (isFirstRender) {
      setIsFirstRender(false)
    }
    prevPathRef.current = pathname
  }, [pathname, isFirstRender])

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={isFirstRender ? false : "hidden"}
        animate="enter"
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
