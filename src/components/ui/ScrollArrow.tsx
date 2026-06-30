"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function ScrollArrow() {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 text-text-tertiary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.8 }}
    >
      <span className="text-xs font-medium">向下滚动</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-4 w-4" />
      </motion.div>
    </motion.div>
  )
}
