import { useEffect, useRef, useState, useCallback } from 'react'
import { serviceStacks } from '../../data/serviceStacks'
import { useI18n } from '../../i18n'

interface CardItem {
  number: string
  title: string
  stack: readonly string[]
}

const INTERVAL_MS = 3000

export function ServiceStackCarousel() {
  const { dict } = useI18n()

  const items: CardItem[] = dict.services.items.map((s) => ({
    number: s.number,
    title: s.title,
    stack: serviceStacks[s.number] ?? [],
  }))

  const total = items.length
  const [active, setActive] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % total)
  }, [total])

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(advance, INTERVAL_MS)
  }, [advance])

  const goTo = useCallback((idx: number) => {
    setActive(((idx % total) + total) % total)
    resetTimer()
  }, [resetTimer, total])

  useEffect(() => {
    timerRef.current = setInterval(advance, INTERVAL_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [advance])

  const offsets = [-2, -1, 0, 1, 2]

  return (
    <div className="relative mx-auto w-full max-w-5xl select-none overflow-hidden px-4 py-10 md:px-6">
      <div
        className="pointer-events-none absolute inset-x-8 top-24 h-40 rounded-full bg-[radial-gradient(circle_at_center,rgba(126,176,196,0.16),transparent_68%)]"
        aria-hidden
      />

      <div className="relative flex h-[330px] items-end justify-center md:h-[360px]">
        {offsets.map((offset) => {
          const idx = ((active + offset) % total + total) % total
          const item = items[idx]
          const isCenter = offset === 0
          const distance = Math.abs(offset)

          const xPercent = offset * 23
          const yPercent = isCenter ? 0 : distance === 1 ? 7 : 18
          const scale = isCenter ? 1 : distance === 1 ? 0.8 : 0.56
          const opacity = isCenter ? 1 : distance === 1 ? 0.72 : 0.24
          const zIndex = isCenter ? 30 : distance === 1 ? 20 : 10
          const blur = isCenter ? 0 : distance === 1 ? 0.8 : 3

          return (
            <div
              key={item.number}
              onClick={() => !isCenter && goTo(idx)}
              style={{
                position: 'absolute',
                bottom: `${yPercent}%`,
                left: `calc(50% + ${xPercent}%)`,
                transform: `translateX(-50%) scale(${scale})`,
                opacity,
                zIndex,
                filter: `blur(${blur}px)`,
                transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
                cursor: isCenter ? 'default' : 'pointer',
                width: isCenter ? '300px' : '288px',
              }}
            >
              <article
                className={`overflow-hidden rounded-[1.35rem] border bg-white/95 shadow-[0_22px_55px_rgba(30,51,71,0.1)] backdrop-blur transition-all duration-300 ${
                  isCenter
                    ? 'border-aizome-300/70 shadow-[0_28px_70px_rgba(30,51,71,0.16)] ring-1 ring-aizome-300/40'
                    : 'border-sand-200/80'
                }`}
              >
                <div className="flex items-center justify-between border-b border-aizome-300/20 bg-gradient-to-r from-sand-50 via-white to-aizome-300/20 px-4 py-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-coral-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#f3c96b]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c76f]" />
                  </div>
                  <span className="h-1.5 w-16 rounded-full bg-navy-900/8" />
                </div>

                <div className="flex min-h-[220px] flex-col items-center justify-center px-6 py-7">
                  <div
                    style={{
                      maxHeight: isCenter ? '128px' : '0px',
                      opacity: isCenter ? 1 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.45s ease, opacity 0.3s ease',
                      width: '100%',
                    }}
                  >
                    <ul className="mb-5 flex flex-wrap justify-center gap-1.5">
                      {item.stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-full border border-navy-900/15 bg-white px-2.5 py-1 text-[11px] font-semibold leading-none text-navy-800 shadow-[0_4px_12px_rgba(30,51,71,0.05)]"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="line-clamp-2 min-h-[2.75rem] text-center text-base font-bold leading-snug text-navy-900 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-aizome-600">
                    {'< '}SERVICE {item.number}{' >'}
                  </p>
                </div>
              </article>
            </div>
          )
        })}
      </div>

      <div className="mt-5 flex justify-center gap-1.5">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to card ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active
                ? 'w-7 bg-coral-500 shadow-[0_0_0_3px_rgba(196,92,72,0.1)]'
                : 'w-1.5 bg-navy-700/20 hover:bg-aizome-500/60'
            }`}
          />
        ))}
      </div>

      <div className="mt-4 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Previous"
          onClick={() => goTo(active - 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-navy-700 shadow-[0_10px_24px_rgba(30,51,71,0.08)] transition hover:-translate-y-0.5 hover:border-coral-500 hover:text-coral-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => goTo(active + 1)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sand-200 bg-white text-navy-700 shadow-[0_10px_24px_rgba(30,51,71,0.08)] transition hover:-translate-y-0.5 hover:border-coral-500 hover:text-coral-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}
