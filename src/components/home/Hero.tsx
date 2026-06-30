"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { ScrollArrow } from "@/components/ui/ScrollArrow"
import { siteConfig } from "@/data/site"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-secondary/30 to-transparent pointer-events-none" />

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight leading-[1.1] text-text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {siteConfig.title}
      </motion.h1>

      <motion.p
        className="mt-4 text-lg sm:text-xl text-text-secondary text-center max-w-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        {siteConfig.subtitle}
      </motion.p>

      <motion.div
        className="mt-8 flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        <Link href="/projects">
          <Button variant="primary" size="lg">查看项目</Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">联系我</Button>
        </Link>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <ScrollArrow />
      </motion.div>
    </section>
  )
}
