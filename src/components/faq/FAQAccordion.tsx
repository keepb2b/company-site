import { useState } from 'react'
import type { Dictionary } from '../../i18n/types'

type FaqItem = Dictionary['faq']['items'][number]

export function FAQAccordion({ items }: { items: FaqItem[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null)

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = openId === item.id
        return (
          <div
            key={item.id}
            className={`scroll-reveal overflow-hidden rounded-2xl border bg-white/95 shadow-[0_14px_38px_rgba(29,52,72,0.05)] ring-1 ring-white/70 backdrop-blur transition-all duration-300 ${
              open
                ? 'border-aizome-300 shadow-[0_22px_58px_rgba(29,52,72,0.11)]'
                : 'border-sand-200 hover:border-aizome-200 hover:shadow-[0_18px_48px_rgba(29,52,72,0.08)]'
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
              onClick={() => setOpenId(open ? null : item.id)}
              aria-expanded={open}
            >
              <span className="flex min-w-0 items-start gap-4">
                <span
                  className={`mt-0.5 shrink-0 rounded-full px-3 py-1 font-display text-xs font-bold transition-colors ${
                    open ? 'bg-button-500 text-brand-ink' : 'bg-button-500/10 text-navy-900'
                  }`}
                >
                  Q.{item.id}
                </span>
                <span className="text-sm font-bold leading-relaxed text-navy-950 md:text-base">
                  {item.question}
                </span>
              </span>
              <span
                className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  open
                    ? 'border-navy-900 bg-navy-900 text-brand-ink'
                    : 'border-sand-200 bg-sand-50 text-navy-900 hover:border-aizome-300 hover:bg-aizome-50'
                }`}
                aria-hidden
              >
                <span className="absolute h-px w-3 bg-current" />
                <span className={`absolute h-3 w-px bg-current transition-transform duration-300 ${open ? 'scale-y-0' : 'scale-y-100'}`} />
              </span>
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div
                  className={`border-t border-sand-200/80 bg-gradient-to-br from-sand-50/85 to-white px-5 pb-6 pt-5 text-sm leading-7 text-navy-700/85 transition-opacity duration-300 md:px-6 ${
                    open ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
