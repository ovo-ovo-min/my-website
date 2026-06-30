import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getAllPosts } from "@/lib/mdx"

interface PrevNextNavProps {
  currentSlug: string
}

export function PrevNextNav({ currentSlug }: PrevNextNavProps) {
  const allPosts = getAllPosts()
  const idx = allPosts.findIndex((p) => p.slug === currentSlug)
  const prev = idx < allPosts.length - 1 ? allPosts[idx + 1] : null
  const next = idx > 0 ? allPosts[idx - 1] : null

  return (
    <nav className="mt-12 pt-8 border-t border-border">
      <div className="flex justify-between gap-4">
        {prev ? (
          <Link
            href={`/blog/${prev.slug}`}
            className="group flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors max-w-[45%]"
          >
            <ChevronLeft className="h-4 w-4 flex-shrink-0" />
            <div className="truncate">{prev.title}</div>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/blog/${next.slug}`}
            className="group flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors max-w-[45%] text-right"
          >
            <div className="truncate">{next.title}</div>
            <ChevronRight className="h-4 w-4 flex-shrink-0" />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </nav>
  )
}
