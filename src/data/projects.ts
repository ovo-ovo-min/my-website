// ═══════════════════════════════════════════════════
// 项目数据 — 修改这个数组来更新"项目"页面和首页"精选项目"
// ═══════════════════════════════════════════════════
// 字段说明：
//   title       — 项目名称
//   description — 项目描述（支持中文）
//   image       — 封面图路径（放 public/images/projects/ 下，推荐 16:9 比例）
//   tags        — 技术标签列表
//   category    — 分类：'frontend' | 'backend' | 'fullstack' | 'other'
//   demoUrl     — 在线演示链接（不需要可以删除此行）
//   sourceUrl   — 源代码链接（不需要可以删除此行）
//   featured    — true = 在首页"精选项目"展示，false = 只在项目页显示
// ═══════════════════════════════════════════════════

import type { Project } from '@/types'

export const projects: Project[] = [
  {
    title: '染绿毛',
    description: '基于 AI 的智能助手平台，支持多轮对话、知识库管理、文档分析等功能。采用微服务架构，支持水平扩展。',
    image: '/images/projects/IMG_20250620_222710.jpg',
    tags: ['牛逼', '牛逼', '牛逼', '还是牛逼'],
    category: 'frontend',
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: true,
  },
  {
    title: '掐小孩',
    description: '可视化设计系统管理工具，帮助团队快速建立和维护统一的设计语言与组件库。',
    image: '/images/projects/屏幕截图 2025-03-29 123031.png',
    tags: ['TypeScript', 'React', 'Figma API'],
    category: 'frontend',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    title: '导管',
    description: '支持多人实时协作的在线白板工具，支持画笔、便签、图形、图片导入等功能。',
    image: '/images/projects/project-3.svg',
    tags: ['WebSocket', 'Canvas', 'React', 'Redis'],
    category: 'fullstack',
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: true,
  },
  {
    title: '吃屎',
    description: '高性能 API 网关，支持路由、限流、鉴权、日志、监控等企业级功能。',
    image: '/images/projects/project-4.svg',
    tags: ['Go', 'gRPC', 'Docker', 'Kubernetes'],
    category: 'backend',
    sourceUrl: 'https://github.com',
    featured: false,
  },
  {
    title: '不知道写啥了',
    description: '优雅的天气预报应用，以数据可视化方式展示天气信息，支持多城市管理。',
    image: '/images/projects/project-5.svg',
    tags: ['Next.js', 'D3.js', 'API'],
    category: 'frontend',
    demoUrl: 'https://example.com',
    sourceUrl: 'https://github.com',
    featured: false,
  },
]
