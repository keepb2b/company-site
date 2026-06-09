export type FaqItem = {
  id: string
  category: string
  question: string
  answer: string
}

export const faqCategories = ['すべて', '発注前', '進行・品質', '技術', '料金'] as const

export const faqItems: FaqItem[] = [
  {
    id: '001',
    category: '発注前',
    question: '発注前に直接お会いできますか？',
    answer:
      'はい、可能です。東京・大阪のオフィス、またはオンラインにてご相談を承ります。お気軽にお問い合わせフォームよりご希望日時をお知らせください。',
  },
  {
    id: '002',
    category: '進行・品質',
    question: 'クライアント様の会議に参加できますか？',
    answer:
      '案件の規模やご要望に応じて、進行会議・レビュー会議への参加が可能です。技術的な説明やスケジュール調整をサポートします。',
  },
  {
    id: '003',
    category: '技術',
    question: 'レスポンシブコーディングは対応していますか？',
    answer:
      'スマートフォン・タブレット・PCのマルチデバイス対応は標準です。ブレークポイントや表示仕様は事前にすり合わせます。',
  },
  {
    id: '004',
    category: '技術',
    question: 'ランディングページのコーディングのみ依頼できますか？',
    answer:
      'はい、LP単体のコーディングも承ります。デザインデータ（Figma・XD・Photoshop等）をご提供いただければ対応可能です。',
  },
  {
    id: '005',
    category: '技術',
    question: 'WordPressの構築・改修は可能ですか？',
    answer:
      'テーマ開発、プラグイン選定、カスタムフィールド設定、既存サイトの改修まで幅広く対応しています。',
  },
  {
    id: '006',
    category: '料金',
    question: '見積もりはどのように算出されますか？',
    answer:
      '工数ベース（時間単価）またはページ数・機能単位のお見積もりをご提示します。PM費用は別途20%が目安です。詳細は料金ページをご覧ください。',
  },
]
