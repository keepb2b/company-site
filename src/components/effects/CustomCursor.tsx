import { useEffect, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function CustomCursor() {
  const reduced = useReducedMotion()
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hover, setHover] = useState(false)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia('(pointer: fine)').matches
    const mobile = window.matchMedia('(max-width: 768px)').matches
    setEnabled(desktop && !mobile && !reduced)
  }, [reduced])

  useEffect(() => {
    if (!enabled) return

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setHover(!!t.closest('a, button, [data-cursor-hover]'))
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onOver)
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      document.body.style.cursor = ''
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      className="pointer-events-none fixed z-[9999] mix-blend-difference"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hover ? 2 : 1})`,
        transition: 'transform 0.25s ease-out',
      }}
      aria-hidden
    >
      <div className="h-8 w-8 rounded-full border-2 border-white bg-white/20" />
    </div>
  )
}
