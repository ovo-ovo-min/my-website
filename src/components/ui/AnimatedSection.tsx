"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import { useEffect, useState, useRef } from "react"

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
}

export function AnimatedSection({ children, className, ...props }: AnimatedSectionProps) {
  const [reduceMotion, setReduceMotion] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReduceMotion(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])

  if (reduceMotion) {
    return <section className={className}>{children}</section>
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  )
}
