import { useMemo, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import Link from 'next/link'
import { chatbotFallback, chatbotFaqEntries, chatbotSuggestedQuestions } from '../../data/freeChatbotFaq'
import { useI18n } from '../../i18n'

type ChatMessage = {
  id: number
  role: 'user' | 'bot'
  text: string
}

function normalizeText(value: string) {
  return value.trim().toLowerCase()
}

export function FreeChatbot() {
  const { locale } = useI18n()
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

  function findAnswer(question: string) {
    const normalized = normalizeText(question)
    const matched = chatbotFaqEntries.find((entry) =>
      entry.keywords.some((keyword) => normalized.includes(keyword.toLowerCase())),
    )

    return matched?.answer[locale] ?? chatbotFallback[locale]
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
        <section className="flex h-[min(36rem,calc(100vh-2rem))] w-[min(22rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-2xl border border-navy-900/10 bg-white shadow-[0_24px_70px_rgba(20,31,40,0.22)]">
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
                      ? 'max-w-[85%] rounded-2xl rounded-br-md bg-[#47d9e6] px-3.5 py-2.5 text-white'
                      : 'max-w-[85%] rounded-2xl rounded-bl-md bg-white px-3.5 py-2.5 text-navy-900 shadow-sm ring-1 ring-navy-900/5'
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
              {chatbotSuggestedQuestions[locale].map((question) => (
                <button
                  type="button"
                  key={question}
                  onClick={() => submitMessage(question)}
                  className="shrink-0 rounded-full bg-aizome-500/10 px-3 py-1.5 text-xs font-black text-aizome-600 transition hover:bg-aizome-500/18"
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
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#47d9e6] text-white shadow-[0_10px_24px_rgba(71,217,230,0.28)] transition hover:-translate-y-0.5 hover:bg-[#35c9d7] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#47d9e6]"
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
              className="mt-2 flex w-full items-center justify-center rounded-full bg-navy-900 px-3 py-2 text-xs font-black text-white transition hover:bg-navy-800"
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
          className="flex items-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-white shadow-[0_16px_44px_rgba(20,31,40,0.24)] ring-1 ring-white/20 transition hover:-translate-y-0.5 hover:bg-navy-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#47d9e6]"
          aria-label={labels.open}
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#47d9e6]" aria-hidden>
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
