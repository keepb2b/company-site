export type RadialConcern = {
  id: string
  text: string
  side: 'left' | 'right'
}

export const concernsSection = {
  /** Typed without trailing cursor; underscore is rendered as blinking cursor */
  enTitle: "WHAT'S YOUR CONCERN",
  jaSubtitle: 'なくならないコーディングの悩み…',
} as const

export const radialConcerns: RadialConcern[] = [
  { id: '1', text: '品質の良いコーディングをしてほしい', side: 'left' },
  { id: '2', text: '複雑なWordPressカスタマイズをしてほしい', side: 'left' },
  { id: '3', text: 'ShopifyやMakeshop、EC CubeなどECサイトを構築したい', side: 'left' },
  { id: '4', text: 'リッチなアニメーションを実装したい', side: 'left' },
  { id: '5', text: 'Web開発上での困りごとを相談したい', side: 'right' },
  { id: '6', text: 'React/Next.jsなどの技術で開発してほしい', side: 'right' },
  { id: '7', text: '他のサービスと連携したサイト構築がしたい', side: 'right' },
  { id: '8', text: 'デザインから発注したい', side: 'right' },
]

/** @deprecated Use radialConcerns — kept for type compatibility */
export const concerns = radialConcerns.map((item) => ({
  title: item.text,
  description: '',
}))
