import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'

gsap.registerPlugin(ScrollTrigger)

export function useConcernsColumnAnimation(stageRef: RefObject<HTMLElement | null>) {
  const reduced = useReducedMotion()

  useLayoutEffect(() => {
    const stage = stageRef.current
    if (!stage) return

    const hub = stage.querySelector<HTMLElement>('[data-concerns-hub]')
    const leftCards = stage.querySelectorAll<HTMLElement>('[data-concern-item][data-side="left"]')
    const rightCards = stage.querySelectorAll<HTMLElement>('[data-concern-item][data-side="right"]')
    const icons = stage.querySelectorAll<HTMLElement>('[data-concern-icon]')

    if (reduced) {
      stage.classList.add('is-animated')
      gsap.set([hub, ...leftCards, ...rightCards, ...icons], { clearProps: 'all' })
      return
    }

    gsap.set(hub, { opacity: 0, scale: 0.86 })
    gsap.set(leftCards, { opacity: 0, x: -36 })
    gsap.set(rightCards, { opacity: 0, x: 36 })
    gsap.set(icons, { opacity: 0, scale: 0.4 })

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top 78%',
        once: true,
      },
    })

    timeline
      .to(hub, { opacity: 1, scale: 1, duration: 0.65, ease: 'power3.out' })
      .to(
        leftCards,
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out' },
        '-=0.4',
      )
      .to(
        rightCards,
        { opacity: 1, x: 0, duration: 0.55, stagger: 0.1, ease: 'power2.out' },
        '-=0.5',
      )
      .to(
        icons,
        { opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: 'back.out(2)' },
        '-=0.65',
      )
      .add(() => stage.classList.add('is-animated'))

    return () => {
      stage.classList.remove('is-animated')
      timeline.scrollTrigger?.kill()
      timeline.kill()
    }
  }, [stageRef, reduced])
}
