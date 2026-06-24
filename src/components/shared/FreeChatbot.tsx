import { useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'
import { chatbotFallback } from '../../data/freeChatbotFaq'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n'

type ChatMessage = {
  id: number
  role: 'user' | 'bot'
  text: string
}

const greetingIntents = {
  ja: {
    triggers: [
      'こんにちは',
      'こんにちわ',
      'こんばんは',
      'おはよう',
      'おはようございます',
      'はじめまして',
      'やあ',
      'どうも',
      'もしもし',
      'hi',
      'hello',
      'hey',
    ],
    replies: [
      'こんにちは。FAQの内容から、サービス・料金・技術・進め方について回答できます。',
      'ご相談ありがとうございます。気になる内容を入力してください。FAQから近い回答を探します。',
      'はじめまして。Web制作、EC、CMS、AI活用などについてFAQをもとにお答えします。',
    ],
  },
  en: {
    triggers: [
      'hi',
      'hello',
      'hey',
      'good morning',
      'good afternoon',
      'good evening',
      'greetings',
      'nice to meet you',
      'こんにちは',
      'こんばんは',
      'おはよう',
    ],
    replies: [
      'Hi. Ask me about services, pricing, technology, or project flow and I will answer from the FAQ.',
      'Hello. I can help with FAQ questions about web development, e-commerce, CMS, and AI solutions.',
      'Nice to meet you. Type a question and I will look for the closest FAQ answer.',
    ],
  },
} as const

const supportIntents = {
  ja: [
    {
      triggers: ['ありがとう', 'ありがとうございます', '助かりました', 'thanks', 'thank you'],
      replies: [
        'どういたしまして。ほかにも気になることがあれば、そのまま入力してください。',
        'お役に立ててうれしいです。サービス内容や料金の質問も続けてどうぞ。',
      ],
    },
    {
      triggers: ['さようなら', 'またね', '失礼します', 'bye', 'goodbye', 'see you'],
      replies: [
        'ご利用ありがとうございました。必要になったらいつでもご相談ください。',
        'ありがとうございました。詳しいご相談はお問い合わせフォームから送信できます。',
      ],
    },
    {
      triggers: ['ヘルプ', '使い方', '何が聞ける', '何を聞ける', 'help', 'how to use'],
      replies: [
        'サービス、料金、技術対応、進め方、保守サポートなどについて質問できます。短い言葉でも大丈夫です。',
        'FAQをもとに回答します。「Shopify対応」「見積もり」「保守サポート」のように入力してください。',
      ],
    },
    {
      triggers: ['担当者', '人につなぐ', '人間', '相談したい', '問い合わせたい', '連絡したい', 'contact', 'human', 'agent'],
      replies: [
        '詳しいご相談はお問い合わせフォームから送信してください。内容を確認後、担当者よりご連絡します。',
        '担当者へのご相談はお問い合わせフォームをご利用ください。プロジェクト内容やご希望時期を書くとスムーズです。',
      ],
    },
    {
      triggers: ['資料', 'パンフレット', '会社案内', 'document', 'brochure', 'materials'],
      replies: [
        '資料請求や会社案内をご希望の場合は、お問い合わせフォームからその旨をお知らせください。',
        'パンフレットや詳細資料については、お問い合わせフォームよりご相談ください。',
      ],
    },
    {
      triggers: ['会社', '会社情報', '所在地', '住所', '代表', 'company', 'address', 'office'],
      replies: [
        '会社情報は会社概要ページで確認できます。所在地、代表者、事業内容などを掲載しています。',
        '会社概要ページに、拠点情報や事業内容をまとめています。詳しい確認にもご利用ください。',
      ],
    },
  ],
  en: [
    {
      triggers: ['thanks', 'thank you', 'appreciate it', 'ありがとう'],
      replies: [
        'You are welcome. Ask anything else about services, pricing, technology, or project flow.',
        'Glad to help. You can keep asking questions here, or use the contact form for project details.',
      ],
    },
    {
      triggers: ['bye', 'goodbye', 'see you', 'talk later', 'さようなら'],
      replies: [
        'Thanks for chatting. Feel free to come back when you need more details.',
        'Goodbye. For a detailed consultation, please use the contact form.',
      ],
    },
    {
      triggers: ['help', 'how to use', 'what can i ask', 'what can you do', '使い方'],
      replies: [
        'You can ask about services, pricing, technology, project process, maintenance, and support. Short questions are fine.',
        'I answer from the FAQ. Try questions like “Shopify support”, “pricing”, or “maintenance plans”.',
      ],
    },
    {
      triggers: ['contact', 'human', 'agent', 'person', 'representative', 'consultation', 'inquiry', '問い合わせ'],
      replies: [
        'For a detailed consultation, please send your project details through the contact form. The team will review and reply.',
        'You can reach the team through the contact form. Include your goals, timeline, and budget if available.',
      ],
    },
    {
      triggers: ['document', 'brochure', 'materials', 'company profile', '資料'],
      replies: [
        'For brochures or company materials, please request them through the contact form.',
        'Please use the contact form if you would like documents, brochures, or more detailed materials.',
      ],
    },
    {
      triggers: ['company', 'address', 'office', 'representative', 'location', '会社'],
      replies: [
        'Company details are available on the Company page, including office information and business overview.',
        'Please check the Company page for office locations, representative information, and business details.',
      ],
    },
  ],
} as const

function normalizeText(value: string) {
  return value.trim().toLowerCase()
}

function tokenize(value: string) {
  const normalized = normalizeText(value)
  const terms = normalized
    .replace(/[^\p{L}\p{N}\s.-]/gu, ' ')
    .split(/\s+/)
    .filter((token) => token.length >= 2)

  const hasCjkText = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u.test(normalized)
  if (!hasCjkText) return terms

  const compact = normalized.replace(/\s+/g, '')
  const fragments = Array.from({ length: Math.max(compact.length - 1, 0) }, (_, index) => compact.slice(index, index + 2))
  return Array.from(new Set([...terms, ...fragments]))
}

function responseIndex(value: string, length: number) {
  return Array.from(value).reduce((total, char) => total + char.codePointAt(0)!, 0) % length
}

function matchesTrigger(normalizedQuestion: string, trigger: string) {
  if (/^[a-z\s]+$/i.test(trigger)) {
    return new RegExp(`(^|\\s)${trigger.replace(/\s+/g, '\\s+')}(\\s|$)`, 'i').test(normalizedQuestion)
  }

  return normalizedQuestion.includes(trigger)
}

function normalizeIntentText(value: string) {
  return normalizeText(value).replace(/[!！?？。、,.]/g, '').trim()
}

function findGreetingAnswer(question: string, locale: keyof typeof greetingIntents) {
  const normalized = normalizeIntentText(question)
  const intent = greetingIntents[locale]
  const matched = intent.triggers.some((trigger) => matchesTrigger(normalized, trigger))

  return matched ? intent.replies[responseIndex(normalized, intent.replies.length)] : null
}

function findSupportAnswer(question: string, locale: keyof typeof supportIntents) {
  const normalized = normalizeIntentText(question)
  const intent = supportIntents[locale].find((entry) =>
    entry.triggers.some((trigger) => matchesTrigger(normalized, trigger)),
  )

  return intent ? intent.replies[responseIndex(normalized, intent.replies.length)] : null
}

function scoreFaqMatch(question: string, item: Dictionary['faq']['items'][number], categoryLabel: string) {
  const normalizedQuestion = normalizeText(question)
  const searchableText = normalizeText(`${item.question} ${item.answer} ${categoryLabel}`)
  const terms = tokenize(question)

  let score = 0
  if (searchableText.includes(normalizedQuestion)) score += 12

  for (const term of terms) {
    if (normalizeText(item.question).includes(term)) score += 4
    if (normalizeText(categoryLabel).includes(term)) score += 3
    if (normalizeText(item.answer).includes(term)) score += 1
  }

  return score
}

export function FreeChatbot() {
  const { dict, locale } = useI18n()
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 1,
      role: 'bot',
      text:
        locale === 'ja'
          ? 'こんにちは。料金、納期、対応サービスなどをFAQから無料で回答します。'
          : 'Hi. I can answer pricing, timeline, and service questions from our free FAQ.',
    },
  ])
  const nextId = useRef(2)

  const labels = useMemo(
    () =>
      locale === 'ja'
        ? {
            title: '無料FAQボット',
            status: 'AI APIなしで回答中',
            open: 'チャットを開く',
            close: 'チャットを閉じる',
            placeholder: '質問を入力してください...',
            send: '送信',
            you: 'あなた',
            bot: 'Bot',
            contact: 'お問い合わせフォームへ',
          }
        : {
            title: 'Free FAQ Bot',
            status: 'Answering without an AI API',
            open: 'Open chat',
            close: 'Close chat',
            placeholder: 'Type your question...',
            send: 'Send',
            you: 'You',
            bot: 'Bot',
            contact: 'Go to contact form',
          },
    [locale],
  )

  const suggestedQuestions = useMemo(() => dict.faq.items.slice(0, 4).map((item) => item.question), [dict.faq.items])

  function findAnswer(question: string) {
    const greetingAnswer = findGreetingAnswer(question, locale)
    if (greetingAnswer) return greetingAnswer

    const supportAnswer = findSupportAnswer(question, locale)
    if (supportAnswer) return supportAnswer

    const bestMatch = dict.faq.items
      .map((item) => ({
        item,
        score: scoreFaqMatch(question, item, dict.faq.categories[item.category]),
      }))
      .sort((a, b) => b.score - a.score)[0]

    return bestMatch && bestMatch.score > 0 ? bestMatch.item.answer : chatbotFallback[locale]
  }

  function submitMessage(message: string) {
    const text = message.trim()
    if (!text) return

    const userMessage: ChatMessage = {
      id: nextId.current++,
      role: 'user',
      text,
    }
    const botMessage: ChatMessage = {
      id: nextId.current++,
      role: 'bot',
      text: findAnswer(text),
    }

    setMessages((current) => [...current, userMessage, botMessage])
    setInput('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submitMessage(input)
  }

  return (
    <aside
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom,0px))] left-[max(1rem,env(safe-area-inset-left,0px))] z-[110]"
      data-free-chatbot
    >
      {isOpen ? (
        <section className="flex h-[min(36rem,calc(100vh-2rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_24px_70px_rgba(29,52,72,0.22)]">
          <header className="flex items-center justify-between gap-3 bg-navy-900 px-4 py-3 text-white">
            <div className="min-w-0">
              <p className="text-sm font-black leading-tight">{labels.title}</p>
              <p className="mt-0.5 text-[11px] font-bold text-white/65">{labels.status}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              aria-label={labels.close}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </header>

          <div className="flex-1 space-y-3 overflow-y-auto bg-sand-50 px-4 py-4">
            {messages.map((message) => (
              <div key={message.id} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
                <div
                  className={
                    message.role === 'user'
                      ? 'max-w-[85%] rounded-2xl rounded-br-md bg-aizome-500 px-3.5 py-2.5 text-black'
                      : 'max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-black shadow-sm ring-1 ring-navy-900/5'
                  }
                >
                  <p className="text-[11px] font-black opacity-70">{message.role === 'user' ? labels.you : labels.bot}</p>
                  <p className="mt-1 text-sm font-bold leading-6">{message.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-navy-900/10 bg-white p-3">
            <div className="mb-2 flex gap-1.5 overflow-x-auto pb-1">
              {suggestedQuestions.map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => submitMessage(question)}
                  className="shrink-0 rounded-full bg-aizome-500/10 px-3 py-1.5 text-xs font-black text-navy-900 transition hover:bg-aizome-500/18"
                >
                  {question}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                data-free-chatbot-input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={labels.placeholder}
                className="min-w-0 flex-1 rounded-full border border-navy-900/15 px-3.5 py-2.5 text-sm font-bold text-navy-900 outline-none transition placeholder:text-navy-700/45 focus:border-aizome-500 focus:ring-4 focus:ring-aizome-500/15"
              />
              <button
                type="submit"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,var(--color-button-400)_0%,var(--color-button-600)_100%)] text-brand-ink shadow-[0_10px_24px_rgba(255,139,26,0.24)] transition hover:-translate-y-0.5 hover:brightness-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-button-500"
                aria-label={labels.send}
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </form>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex w-full items-center justify-center rounded-full bg-navy-900 px-3 py-2 text-xs font-black text-brand-ink transition hover:bg-navy-800"
            >
              {labels.contact}
            </Link>
          </div>
        </section>
      ) : (
        <button
          type="button"
          data-free-chatbot-open
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-brand-ink shadow-[0_16px_44px_rgba(29,52,72,0.24)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aizome-500"
          aria-label={labels.open}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-aizome-500" aria-hidden>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h6m-8 7l3-3h9a4 4 0 004-4V8a4 4 0 00-4-4H7a4 4 0 00-4 4v4a4 4 0 004 4" />
            </svg>
          </span>
          <span className="text-sm font-black">{labels.title}</span>
        </button>
      )}
    </aside>
  )
}
