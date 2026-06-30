// ═══════════════════════════════════════════════════
// 工作/教育经历 — About 页的时间线数据
// ═══════════════════════════════════════════════════
// 字段说明：
//   title       — 职位名称 / 学位
//   company     — 公司 / 学校名称
//   location    — 地点
//   startDate   — 开始时间（格式 'YYYY-MM'）
//   endDate     — 结束时间（null 表示"至今"）
//   description — 描述文字
//   type        — 'work'（工作）或 'education'（教育）
// ═══════════════════════════════════════════════════

import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    title: '道观高手',
    company: '麻豆传媒',
    location: '北京',
    startDate: '2023-03',
    endDate: null,          // ← null = 至今
    description: '负责核心产品的前端架构设计与开发，推动组件化与性能优化。',
    type: 'work',
  },
  {
    title: '吃屎达人',
    company: '茅坑',
    location: '杭州',
    startDate: '2021-07',
    endDate: '2023-02',
    description: '参与电商平台的后端服务开发与前端页面重构，负责订单系统模块。',
    type: 'work',
  },
  {
    title: '计算机科学与技术 · 本科',
    company: '浙江大学',
    location: '杭州',
    startDate: '2017-09',
    endDate: '2021-06',
    description: 'GPA 3.8/4.0，校级优秀毕业生，ACM 竞赛银奖。',
    type: 'education',
  },
]
