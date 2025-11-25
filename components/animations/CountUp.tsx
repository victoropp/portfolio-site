"use client"

import * as React from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

interface CountUpProps {
  from?: number
  to: number
  duration?: number
  delay?: number
  className?: string
  prefix?: string
  suffix?: string
  decimals?: number
  separator?: string
}

export function CountUp({
  from = 0,
  to,
  duration = 2,
  delay = 0,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
  separator = ",",
}: CountUpProps) {
  const ref = React.useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 50,
  })
  const [value, setValue] = React.useState(from)

  React.useEffect(() => {
    springValue.on("change", (latest) => {
      setValue(latest)
    })
  }, [springValue])

  React.useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(to)
      }, delay * 1000)
    }
  }, [isInView, to, delay, motionValue])

  const formatNumber = (num: number): string => {
    const fixed = num.toFixed(decimals)
    const parts = fixed.split(".")

    // Add thousand separators
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator)

    return decimals > 0 ? parts.join(".") : parts[0]
  }

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {formatNumber(value)}
      {suffix}
    </motion.span>
  )
}
