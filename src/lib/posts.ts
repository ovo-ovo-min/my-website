import { getAllPosts, getPostBySlug } from "./mdx"
import type { BlogPost } from "@/types"

export async function getAllPostsData(): Promise<BlogPost[]> {
  const posts = getAllPosts()
  return posts.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: p.description,
    date: p.date,
    tags: p.tags,
    category: p.category,
    coverImage: p.coverImage,
    readingTime: p.readingTime,
    published: p.published,
    content: p.content,
  }))
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
  const post = getPostBySlug(slug)
  if (!post) return null
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    date: post.date,
    tags: post.tags,
    category: post.category,
    coverImage: post.coverImage,
    readingTime: post.readingTime,
    published: post.published,
    content: post.content,
  }
}

export async function getAllTags(): Promise<string[]> {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}

export async function getAllCategories(): Promise<string[]> {
  const posts = getAllPosts()
  const cats = new Set<string>()
  posts.forEach((p) => cats.add(p.category))
  return Array.from(cats).sort()
}
