export type BlogCategoryKey = 'ai' | 'ec' | 'cms' | 'devops' | 'mobile' | 'animation'

export type BlogPostMeta = {
  date: string
  categoryKey: BlogCategoryKey
  excerpt: string
  description: {
    title: string
    overview: string
    points: string[]
  }
}

export type BlogPost = {
  id: string
  serviceNumber: string
  title: string
  date: string
  category: string
  categoryKey: BlogCategoryKey
  excerpt: string
  image: string
  description: {
    title: string
    overview: string
    points: string[]
  }
}

export const blogCategoryKeys: BlogCategoryKey[] = ['ai', 'ec', 'cms', 'devops', 'mobile', 'animation']

export const blogCategoryLabelsJa: Record<BlogCategoryKey, string> = {
  ai: 'AI・自動化',
  ec: 'EC',
  cms: 'CMS',
  devops: 'DevOps・インフラ',
  mobile: 'モバイル・SaaS',
  animation: 'アニメーション',
}

export const blogCategoryLabelsEn: Record<BlogCategoryKey, string> = {
  ai: 'AI & Automation',
  ec: 'E-Commerce',
  cms: 'CMS',
  devops: 'DevOps & Infra',
  mobile: 'Mobile & SaaS',
  animation: 'Animation',
}
