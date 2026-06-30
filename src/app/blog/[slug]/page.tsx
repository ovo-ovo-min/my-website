import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/mdx"
import { MDXRemote } from "next-mdx-remote/rsc"
import { formatDate } from "@/lib/utils"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import remarkGfm from "remark-gfm"
import rehypePrettyCode from "rehype-pretty-code"
import { PreWithCopy } from "@/components/blog/PreWithCopy"
import { TableOfContents } from "@/components/blog/TableOfContents"
import { PrevNextNav } from "@/components/blog/PrevNextNav"

interface Props {
  params: Promise<{ slug: string }>
}

const mdxComponents = {
  pre: PreWithCopy,
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "未找到" }
  return { title: post.title }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const allPosts = getAllPosts()

  return (
    <article className="pt-24 pb-16 px-5">
      <div className="mx-auto max-w-5xl">
        <Link href="/blog">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-1.5" />
            返回博客
          </Button>
        </Link>

        <div className="flex gap-8">
          <div className="flex-1 min-w-0 max-w-3xl">
            <header className="mb-8">
              <div className="flex items-center gap-2 mb-3 text-sm text-text-tertiary">
                <time>{formatDate(post.date)}</time>
                <span>·</span>
                <span>{post.readingTime} 分钟阅读</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary leading-tight">
                {post.title}
              </h1>
              <p className="mt-3 text-lg text-text-secondary">{post.description}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {post.tags.map((tag: string) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
                <Badge variant="accent">{post.category}</Badge>
              </div>
            </header>

            <div className="prose">
              <MDXRemote
                source={post.content}
                components={mdxComponents}
                options={{
                  mdxOptions: {
                    remarkPlugins: [remarkGfm],
                    rehypePlugins: [[rehypePrettyCode, { theme: "one-dark-pro" }]],
                  },
                }}
              />
            </div>

            <PrevNextNav currentSlug={slug} />
          </div>

          <TableOfContents content={post.content} />
        </div>
      </div>
    </article>
  )
}
