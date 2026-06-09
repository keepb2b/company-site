import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  text: string
  className?: string
}

/**
 * Typewriter animation — characters appear one by one left-to-right, then loops.
 */
export function HeroDescAnimation({ text, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const chars = text.split('')
    el.innerHTML = chars
      .map((ch) =>
        ch === ' '
          ? `<span class="hero-desc-char" style="display:inline-block;white-space:pre"> </span>`
          : `<span class="hero-desc-char" style="display:inline-block;opacity:0">${ch}</span>`
      )
      .join('')

    const spans = Array.from(el.querySelectorAll<HTMLElement>('.hero-desc-char'))

    function playLoop() {
      gsap.set(spans, { opacity: 0 })

      gsap.to(spans, {
        opacity: 1,
        duration: 0.01,
        stagger: { each: 0.045, from: 'start' },
        ease: 'none',
        onComplete: () => {
          // Hold, then wipe out left-to-right and restart
          gsap.to(spans, {
            opacity: 0,
            duration: 0.01,
            stagger: { each: 0.025, from: 'start' },
            delay: 2.0,
            ease: 'none',
            onComplete: playLoop,
          })
        },
      })
    }

    playLoop()

    return () => {
      gsap.killTweensOf(spans)
    }
  }, [text])

  return (
    <span ref={ref} className={className} aria-label={text} />
  )
}
