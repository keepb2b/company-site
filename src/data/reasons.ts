export type ReasonIcon =
  | 'medal'
  | 'handshake'
  | 'motion'
  | 'team'
  | 'meeting'
  | 'ec'

export type Reason = {
  number: string
  title: string
  /** Short label under circle in grid */
  gridTitle: string
  description: string
  imageAlt: string
  icon: ReasonIcon
}

export const reasonsSection = {
  enTitle: 'REASONS TO BE CHOSEN',
  jaSubtitle: '選ばれる理由',
  bannerText: '日本システムは、御社のコーディングの悩みを解決します。',
  ctaLabel: '選ばれる理由をさらに読む',
} as const

export const strengthImages = [
  '/images/strength/6 (1).png',
  '/images/strength/6 (2).png',
  '/images/strength/6 (3).png',
  '/images/strength/6 (4).png',
  '/images/strength/6 (5).png',
  '/images/strength/6 (6).png',
] as const

export const reasons: Reason[] = [
  {
    number: '01',
    title: '確かな品質と提案力',
    gridTitle: '確かな品質と提案力',
    description:
      '要件定義から実装・検証まで一貫した品質管理。デザインカンプの意図を汲み取り、実装可能な最適解を提案します。',
    imageAlt: '品質管理のイメージ',
    icon: 'medal',
  },
  {
    number: '02',
    title: '長期的なパートナーシップ',
    gridTitle: '安定的な長期開発パートナー',
    description:
      '単発のコーディングにとどまらず、運用・改修・機能追加まで継続的にサポート。チームの延長として伴走します。',
    imageAlt: 'パートナーシップのイメージ',
    icon: 'handshake',
  },
  {
    number: '03',
    title: '高度なアニメーション実装',
    gridTitle: '高度なアニメーションの実装',
    description:
      'GSAP・CSS・Three.jsを活用したリッチなモーション。ブランド体験を高めるインタラクションを得意としています。',
    imageAlt: 'アニメーション実装のイメージ',
    icon: 'motion',
  },
  {
    number: '04',
    title: '40名以上のコーディングスタッフ',
    gridTitle: '40名以上のコーディングスタッフ',
    description:
      'フロントエンド・CMS・EC・WordPressなど専門領域ごとにチームを編成。大規模案件にも柔軟に対応できます。',
    imageAlt: '開発チームのイメージ',
    icon: 'team',
  },
  {
    number: '05',
    title: 'クライアント会議への参加',
    gridTitle: '要件定義・会議等への参加',
    description:
      '必要に応じて打ち合わせ・進行会議に参加。技術的な説明やスケジュール調整を円滑に行います。',
    imageAlt: '会議参加のイメージ',
    icon: 'meeting',
  },
  {
    number: '06',
    title: 'EC・カートシステムに強い',
    gridTitle: 'ECサイト・カートシステム対応',
    description:
      'Shopify・EC-CUBE・Makeshop・ecforceなど主要ECプラットフォームの構築・カスタマイズ実績が豊富です。',
    imageAlt: 'EC開発のイメージ',
    icon: 'ec',
  },
]
