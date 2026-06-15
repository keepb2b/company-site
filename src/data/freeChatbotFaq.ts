export type ChatbotLocale = 'ja' | 'en'

export type ChatbotFaqEntry = {
  id: string
  keywords: string[]
  answer: Record<ChatbotLocale, string>
}

export const chatbotFaqEntries: ChatbotFaqEntry[] = [
  {
    id: 'pricing',
    keywords: ['料金', '費用', '価格', '見積', '予算', 'price', 'pricing', 'cost', 'estimate', 'budget'],
    answer: {
      ja: '料金は案件内容により異なります。まずは無料相談をご利用ください。',
      en: 'Pricing depends on the project scope. Please start with a free consultation.',
    },
  },
  {
    id: 'delivery',
    keywords: ['納期', '期間', 'いつ', 'スケジュール', 'schedule', 'deadline', 'delivery', 'timeline'],
    answer: {
      ja: '通常、簡単なサイトは2〜4週間程度で対応可能です。機能追加やシステム連携がある場合は内容に応じて調整します。',
      en: 'A simple website usually takes about 2 to 4 weeks. Projects with custom features or integrations are scheduled based on scope.',
    },
  },
  {
    id: 'services',
    keywords: [
      '対応',
      'サービス',
      '何ができる',
      'web制作',
      'チャットボット',
      '自動化',
      'ec',
      'shopify',
      'service',
      'website',
      'chatbot',
      'automation',
      'ecommerce',
    ],
    answer: {
      ja: 'Web制作、AIチャットボット、業務自動化、EC構築、CRM、API連携、保守改善に対応しています。',
      en: 'We handle website development, AI chatbots, business automation, ecommerce, CRM, API integrations, and ongoing improvements.',
    },
  },
  {
    id: 'free-chatbot',
    keywords: ['無料', 'free', 'faq', 'botpress', 'rasa', 'ai api', 'api'],
    answer: {
      ja: '無料で始める場合は、このようなFAQ型チャットボットがおすすめです。AI APIを使わず、用意したFAQデータだけで回答できます。',
      en: 'For a free start, an FAQ chatbot like this is a good fit. It answers from prepared FAQ data without a paid AI API.',
    },
  },
  {
    id: 'contact',
    keywords: ['相談', '問い合わせ', '連絡', 'contact', 'consultation', 'email', 'line'],
    answer: {
      ja: '詳しくはお問い合わせフォームよりご相談ください。内容を確認のうえ、担当者よりご連絡します。',
      en: 'Please send the details through the contact form. Our team will review your message and get back to you.',
    },
  },
]

export const chatbotFallback: Record<ChatbotLocale, string> = {
  ja: '申し訳ありません。詳しくはお問い合わせフォームよりご相談ください。',
  en: 'Sorry, I do not have an answer for that yet. Please contact us for details.',
}

export const chatbotSuggestedQuestions: Record<ChatbotLocale, string[]> = {
  ja: ['料金について', '納期について', '対応サービス', '無料チャットボット'],
  en: ['Pricing', 'Timeline', 'Services', 'Free chatbot'],
}
