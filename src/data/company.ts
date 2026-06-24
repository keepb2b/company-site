export const companyInfo = [
  { label: '会社名', value: '株式会社日本システムズ' },
  { label: '代表者', value: '代表取締役 前田 雄紀' },
  { label: '設立', value: '2010年4月' },
  { label: '資本金', value: '3,000万円' },
  { label: '所在地（東京）', value: '東京都渋谷区〇〇 1-2-3 〇〇ビル 5F' },
  { label: '所在地（大阪）', value: '大阪府大阪市北区〇〇 4-5-6' },
  { label: '事業内容', value: 'Webコーディング、EC/CMS構築、フロントエンド開発、Webアニメーション制作' },
  { label: '従業員数', value: '85名（2026年4月現在）' },
] as const

export type Testimonial = {
  id: string
  quote: string
  author: string
  role: string
  initials: string
  avatarFrom: string
  avatarTo: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'デザインの再現精度が非常に高く、細かなアニメーションまで期待以上でした。継続案件も安心して任せられます。',
    author: '制作会社 A社',
    role: 'ディレクター',
    initials: 'AD',
    avatarFrom: '#1e3347',
    avatarTo: '#3d5a75',
  },
  {
    id: '2',
    quote:
      'EC-CUBEのカスタマイズで他社では断られた部分も、的確な提案と実装で期限内にリリースできました。',
    author: 'アパレルブランド B社',
    role: '担当者',
    initials: 'BK',
    avatarFrom: '#2f7f96',
    avatarTo: '#8acaa2',
  },
  {
    id: '3',
    quote:
      '会議への参加や進捗報告が丁寧で、社内の開発チームのように連携できています。',
    author: 'IT企業 C社',
    role: 'マーケティング部',
    initials: 'MK',
    avatarFrom: '#5a8fa8',
    avatarTo: '#457a94',
  },
]
