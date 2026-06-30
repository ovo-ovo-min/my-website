import { getAllPosts } from "@/lib/mdx"
import { Card } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3)

  if (posts.length === 0) return null

  return (
    <AnimatedSection className="py-16 px-5">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-text-primary">最新文章</h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
          >
            查看全部 <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card hover className="group h-full">
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2 text-xs text-text-tertiary">
                    <time>{formatDate(post.date)}</time>
                    <span>·</span>
                    <span>{post.readingTime} 分钟阅读</span>
                  </div>
                  <h3 className="font-semibold text-text-primary mb-1.5 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-2 flex-1">{post.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
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
