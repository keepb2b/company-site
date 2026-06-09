import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface Props {
  text: string
  className?: string
}

/**
 * Renders the hero h1 with a center-out character reveal that loops.
 * Characters spread from the middle outward, then fade out and repeat.
 */
export function HeroTitleAnimation({ text, className }: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Split text into individual character spans
    const chars = text.split('')
    el.innerHTML = chars
      .map((ch) =>
        ch === ' '
          ? `<span class="hero-char" style="display:inline-block;white-space:pre"> </span>`
          : `<span class="hero-char" style="display:inline-block;opacity:0">${ch}</span>`
      )
      .join('')

    const spans = Array.from(el.querySelectorAll<HTMLElement>('.hero-char'))
    const total = spans.length
    const mid = Math.floor(total / 2)

    // Build reveal order: mid, mid-1, mid+1, mid-2, mid+2, ...
    const order: number[] = []
    for (let i = 0; i <= Math.max(mid, total - mid); i++) {
      if (mid - i >= 0) order.push(mid - i)
      if (i > 0 && mid + i < total) order.push(mid + i)
    }

    function playLoop() {
      // Reset all to invisible
      gsap.set(spans, { opacity: 0, y: 8 })

      const tl = gsap.timeline({
        onComplete: () => {
          // Pause, then fade out all and repeat
          gsap.to(spans, {
            opacity: 0,
            duration: 0.4,
            stagger: { each: 0.015, from: 'start' },
            delay: 3.0,
            ease: 'power1.in',
            onComplete: playLoop,
          })
        },
      })

      // Reveal each char in center-out order
      order.forEach((idx, seq) => {
        tl.to(
          spans[idx],
          { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
          seq * 0.04
        )
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
