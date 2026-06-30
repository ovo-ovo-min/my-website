"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ProjectCard } from "./ProjectCard"
import type { Project } from "@/types"

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
