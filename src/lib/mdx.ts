import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "content/blog")

export interface MatterData {
  title: string
  description: string
  date: string
  tags: string[]
  category: string
  coverImage?: string
  readingTime: number
  published: boolean
}

export interface PostData extends MatterData {
  slug: string
  content: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return []
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.filter((fn) => fn.endsWith(".mdx")).map((fn) => fn.replace(/\.mdx$/, ""))
}

function extractFrontMatter(raw: string): { matter: MatterData; content: string } {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) {
    return {
      matter: {
        title: "Untitled",
        description: "",
        date: new Date().toISOString().split("T")[0],
        tags: [],
        category: "other",
        readingTime: 1,
        published: true,
      },
      content: raw,
    }
  }
  const frontMatter: Record<string, unknown> = {}
  const lines = match[1].split("\n")
  for (const line of lines) {
    const sep = line.indexOf(":")
    if (sep === -1) continue
    const key = line.slice(0, sep).trim()
    let val: unknown = line.slice(sep + 1).trim()
    if (val === "true" || val === "false") {
      val = val === "true"
    } else if (!isNaN(Number(val)) && val !== "") {
      val = Number(val)
    } else if (typeof val === "string" && val.startsWith("[") && val.endsWith("]")) {
      val = val.slice(1, -1).split(",").map((s: string) => s.trim().replace(/['"]/g, "")).filter(Boolean)
    } else {
      val = (typeof val === "string" ? val : String(val)).replace(/^['"]|['"]$/g, "")
    }
    frontMatter[key] = val
  }
  const matter = frontMatter as unknown as MatterData
  const wordCount = match[2].split(/\s+/).length
  matter.readingTime = matter.readingTime || Math.max(1, Math.ceil(wordCount / 200))
  return { matter, content: match[2] }
}

export function getPostBySlug(slug: string): PostData | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(fullPath)) return null
  const raw = fs.readFileSync(fullPath, "utf-8")
  const { matter, content } = extractFrontMatter(raw)
  return { slug, ...matter, content }
}

export function getAllPosts(): PostData[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is PostData => p !== null && p.published)
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
