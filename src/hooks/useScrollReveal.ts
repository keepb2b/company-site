import { useEffect, useRef } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  staggerMs?: number
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options: Options = {}) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    el?.classList.add('is-visible')
    el?.querySelectorAll('.scroll-reveal').forEach((c) => c.classList.add('is-visible'))
  }, [options])

  return ref
}
