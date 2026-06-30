"use client"

import { useState } from "react"
import { projects } from "@/data/projects"
import { ProjectFilter } from "@/components/projects/ProjectFilter"
import { ProjectGrid } from "@/components/projects/ProjectGrid"
import { AnimatedSection } from "@/components/ui/AnimatedSection"

export default function ProjectsPage() {
  const [category, setCategory] = useState("all")

  const filtered = category === "all" ? projects : projects.filter((p) => p.category === category)

  return (
    <AnimatedSection className="pt-24 pb-16 px-5">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-2">项目</h1>
        <p className="text-text-secondary mb-6">我的一些作品，涵盖了前端、后端和全栈开发。</p>
        <ProjectFilter current={category} onSelect={setCategory} />
        <ProjectGrid projects={filtered} />
      </div>
    </AnimatedSection>
  )
}
