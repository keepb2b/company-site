import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

type Options = {
  text: string
  /** ms per character (base); punctuation gets longer pauses */
  speed?: number
  startDelay?: number
  /** Start only when element is in view */
  startOnView?: boolean
}

function charDelay(char: string, base: number): number {
  if (char === ' ' || char === '\u00a0') return base * 0.65
  if (char === "'" || char === '"' || char === ',' || char === '.') return base * 2.2
  if (char === '?' || char === '!') return base * 2.8
  return base + (Math.random() * 24 - 12)
}

export function useTypewriter({
  text,
  speed = 58,
  startDelay = 400,
  startOnView = true,
}: Options) {
  const reduced = useReducedMotion()
  const [displayed, setDisplayed] = useState(reduced ? text : '')
  const [isComplete, setIsComplete] = useState(reduced)
  const [hasStarted, setHasStarted] = useState(!startOnView && !reduced)
  const targetRef = useRef<HTMLDivElement>(null)
  const startedRef = useRef(false)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  useEffect(() => {
    if (reduced) {
      setDisplayed(text)
      setIsComplete(true)
      setHasStarted(true)
      return
    }

    if (!startOnView) {
      const t = window.setTimeout(() => setHasStarted(true), startDelay)
      timers.current.push(t)
      return () => clearTimers()
    }

    const el = targetRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || startedRef.current) return
        startedRef.current = true
        const t = window.setTimeout(() => setHasStarted(true), startDelay)
        timers.current.push(t)
        observer.disconnect()
      },
      { threshold: 0.35 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      clearTimers()
    }
  }, [reduced, startOnView, startDelay])

  useEffect(() => {
    if (!hasStarted || reduced || isComplete) return

    clearTimers()
    setDisplayed('')
    let index = 0

    const typeNext = () => {
      if (index > text.length) {
        setIsComplete(true)
        return
      }
      setDisplayed(text.slice(0, index))
      if (index === text.length) {
        const t = window.setTimeout(() => setIsComplete(true), 120)
        timers.current.push(t)
        return
      }
      const delay = charDelay(text[index] ?? '', speed)
      index += 1
      const t = window.setTimeout(typeNext, delay)
      timers.current.push(t)
    }

    typeNext()
    return clearTimers
  }, [hasStarted, reduced, isComplete, text, speed])

  return { displayed, isComplete, hasStarted, targetRef }
}
