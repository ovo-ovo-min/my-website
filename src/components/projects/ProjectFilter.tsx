"use client"

import { cn } from "@/lib/utils"

const categories = [
  { value: "all", label: "全部" },
  { value: "frontend", label: "前端" },
  { value: "backend", label: "后端" },
  { value: "fullstack", label: "全栈" },
  { value: "other", label: "其他" },
]

interface ProjectFilterProps {
  current: string
  onSelect: (val: string) => void
}

export function ProjectFilter({ current, onSelect }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onSelect(cat.value)}
          className={cn(
            "rounded-full px-4 py-1.5 text-sm transition-all duration-200",
            current === cat.value
              ? "bg-accent text-white"
              : "bg-bg-secondary text-text-secondary hover:bg-bg-tertiary",
          )}
        >
          {cat.label}
        </button>
      ))}
    </div>
  )
}
