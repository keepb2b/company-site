import { useEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { useLoadingComplete } from '../context/LoadingContext'
import { useReducedMotion } from './useReducedMotion'

export function useHeroAnimation(containerRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion()
  const loadingComplete = useLoadingComplete()

  useEffect(() => {
    const root = containerRef.current
    if (!root || reduced || !loadingComplete) {
      if (root && (reduced || loadingComplete)) {
        root.querySelectorAll('[data-hero]').forEach((el) => {
          ;(el as HTMLElement).style.opacity = '1'
          ;(el as HTMLElement).style.transform = 'none'
          ;(el as HTMLElement).style.filter = 'none'
        })
      }
      return
    }

    const ctx = gsap.context(() => {
      gsap.from('[data-hero="bg"]', { opacity: 0, duration: 0.6, delay: 0.1, ease: 'power2.out' })
      gsap.from('[data-hero="line"]', {
        opacity: 0,
        filter: 'blur(8px)',
        y: 20,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.25,
        ease: 'power2.out',
      })
      gsap.from('[data-hero="tag"]', {
        opacity: 0,
        y: 16,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.55,
        ease: 'power2.out',
      })
      gsap.from('[data-hero="cta"]', {
        opacity: 0,
        y: 12,
        duration: 0.4,
        delay: 0.9,
        ease: 'power2.out',
      })
    }, root)

    return () => ctx.revert()
  }, [containerRef, reduced, loadingComplete])
}
