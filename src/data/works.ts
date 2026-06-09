export type Work = {
  id: string
  title: string
  categories: string[]
  badge?: string
}

export const workFilters = [
  'すべて',
  'アプリ開発',
  'AI',
  'MovableType',
  'WordPress',
  'Shopify',
  'EC-CUBE',
  'Makeshop',
  'ecforce',
  'Stripe API',
  'headless CMS',
  'React/Next.js',
  'Webアニメーション',
  '多言語',
  'LP',
  'コーポレート',
] as const

export const works: Work[] = [
  { id: '1', title: '大手美容ブランド ECサイトリニューアル', categories: ['Shopify', 'Webアニメーション'], badge: 'EC' },
  { id: '2', title: 'BtoB SaaS コーポレートサイト', categories: ['React/Next.js', 'headless CMS'], badge: 'コーポレート' },
  { id: '3', title: 'メディアポータル MovableType構築', categories: ['MovableType', 'LP'], badge: 'CMS' },
  { id: '4', title: '会員制コンテンツ WordPress', categories: ['WordPress', '会員サイト'], badge: '会員' },
  { id: '5', title: 'EC-CUBE カスタム決済連携', categories: ['EC-CUBE', 'Stripe API'], badge: 'EC' },
  { id: '6', title: '製造業 多言語コーポレート', categories: ['多言語', 'コーポレート'], badge: '多言語' },
  { id: '7', title: 'スタートアップ LP + アニメーション', categories: ['LP', 'Webアニメーション'], badge: 'LP' },
  { id: '8', title: 'AIチャットボット連携ダッシュボード', categories: ['AI', 'React/Next.js'], badge: 'AI' },
  { id: '9', title: 'Makeshop テーマフルカスタム', categories: ['Makeshop', 'EC'], badge: 'EC' },
]
