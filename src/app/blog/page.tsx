import { getAllPosts } from "@/lib/mdx"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import Link from "next/link"
import { formatDate } from "@/lib/utils"
import type { Metadata } from "next"

export const metadata: Metadata = { title: "博客" }

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <AnimatedSection className="pt-24 pb-16 px-5">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-text-primary mb-2">博客</h1>
        <p className="text-text-secondary mb-8">记录技术、设计与生活的思考。</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card hover className="group h-full">
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2 text-xs text-text-tertiary">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingTime} 分钟</span>
                  </div>
                  <h2 className="font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-text-secondary line-clamp-2 flex-1">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                    <Badge variant="accent">{post.category}</Badge>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
