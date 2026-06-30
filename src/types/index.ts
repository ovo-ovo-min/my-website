// ═══════════════════════════════════════════════════
// TypeScript 类型定义 — 一般不需要修改这里
// 这些类型为 data/ 目录下的数据文件提供类型约束
// ═══════════════════════════════════════════════════

/** 项目卡片数据结构 */
export interface Project {
  title: string
  description: string
  image: string            // 图片路径，如 '/images/projects/xxx.svg'
  tags: string[]           // 技术标签
  demoUrl?: string         // 在线演示链接（可选）
  sourceUrl?: string       // 源代码链接（可选）
  featured: boolean        // 是否在首页展示
  category: 'frontend' | 'backend' | 'fullstack' | 'other'
}

/** 博客文章数据结构 */
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  category: string
  coverImage?: string
  readingTime: number
  published: boolean
  content: string
}

/** 工作/教育经历数据结构 */
export interface Experience {
  title: string
  company: string
  location: string
  startDate: string
  endDate: string | null
  description: string
  type: 'work' | 'education'
}

/** 站点配置数据结构 */
export interface SiteConfig {
  name: string
  title: string
  subtitle: string
  email: string
  avatar: string
  location: string
  available: boolean
  social: {
    github?: string
    twitter?: string
    linkedin?: string
  }
}
