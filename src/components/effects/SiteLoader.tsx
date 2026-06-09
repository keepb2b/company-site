import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'

type Props = {
  ready: boolean
  onComplete: () => void
}

export function SiteLoader({ ready, onComplete }: Props) {
  const rootRef = useRef<HTMLDivElement>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const exitedRef = useRef(false)

  useEffect(() => {
    const root = rootRef.current
    const bar = barRef.current
    if (!root || !bar) return

    document.body.classList.add('site-loader-active')

    const progress = { value: 0 }
    const fillTween = gsap.to(progress, {
      value: 92,
      duration: reduced ? 0.2 : 5,
      ease: 'power2.out',
      onUpdate: () => {
        bar.style.width = `${progress.value}%`
      },
    })

    return () => {
      fillTween.kill()
      document.body.classList.remove('site-loader-active')
    }
  }, [reduced])

  useEffect(() => {
    if (!ready || exitedRef.current) return

    const root = rootRef.current
    const bar = barRef.current
    if (!root || !bar) return

    exitedRef.current = true

    const finish = () => {
      document.body.classList.remove('site-loader-active')
      onComplete()
    }

    if (reduced) {
      finish()
      return
    }

    gsap.to(bar, { width: '100%', duration: 0.4, ease: 'power2.out' })
    gsap.to(root, {
      opacity: 0,
      duration: 0.85,
      ease: 'power2.inOut',
      delay: 0.35,
      onComplete: finish,
    })
  }, [ready, onComplete, reduced])

  return (
    <div ref={rootRef} className="site-loader" role="status" aria-live="polite" aria-label="Loading">
      <div className="site-loader-line-bg" aria-hidden />
      <div className="site-loader-inner">
        <span className="site-loader-logo-frame">
          <img
            src="/images/nippon-systems-logo.png"
            alt=""
            className="site-loader-logo"
            width={360}
            height={78}
            decoding="async"
          />
        </span>
        <div className="site-loader-bar" aria-hidden>
          <div ref={barRef} className="site-loader-bar-fill" />
        </div>
        <p className="site-loader-label">Loading</p>
      </div>
    </div>
  )
}
