"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface TocItem {
  id: string
  text: string
  level: number
}

export function TableOfContents({ content }: { content: string }) {
  const [activeId, setActiveId] = useState("")
  const [items, setItems] = useState<TocItem[]>([])

  useEffect(() => {
    // Extract headings from MDX content
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const extracted: TocItem[] = []
    let match
    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text.toLowerCase().replace(/[^\w一-鿿]+/g, "-").replace(/(^-|-$)/g, "")
      extracted.push({ id, text, level })
    }
    setItems(extracted)
  }, [content])

  useEffect(() => {
    if (items.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px" },
    )
    for (const item of items) {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [items])

  if (items.length === 0) return null

  return (
    <nav className="hidden lg:block sticky top-24 w-56 flex-shrink-0">
      <h3 className="text-sm font-semibold text-text-primary mb-3">目录</h3>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "block text-sm transition-colors py-0.5",
                item.level === 3 && "pl-4",
                activeId === item.id
                  ? "text-accent font-medium"
                  : "text-text-tertiary hover:text-text-secondary",
              )}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
