import { useTypewriter } from '../../hooks/useTypewriter'

type TypewriterHeadingProps = {
  text: string
  cursor?: string
  className?: string
  subtitle?: string
  subtitleClassName?: string
  as?: 'h1' | 'h2' | 'h3'
  speed?: number
}

export function TypewriterHeading({
  text,
  cursor = '_',
  className = '',
  subtitle,
  subtitleClassName = '',
  as: Tag = 'h2',
  speed = 58,
}: TypewriterHeadingProps) {
  const { displayed, isComplete, targetRef } = useTypewriter({ text, speed })

  return (
    <div ref={targetRef} className="mx-auto w-full max-w-full overflow-hidden text-center">
      <Tag
        className={`mx-auto inline-block max-w-full font-display font-bold uppercase tracking-tight text-navy-900 ${className}`}
      >
        <span aria-hidden>{displayed}</span>
        <span
          className={`typewriter-cursor ml-px inline-block font-normal text-navy-900 ${
            isComplete ? 'typewriter-cursor--done' : ''
          }`}
          aria-hidden
        >
          {cursor}
        </span>
        <span className="sr-only">{text}</span>
      </Tag>

      {subtitle && (
        <p
          className={`mt-3 text-sm text-navy-700/70 transition-all duration-700 ease-out md:text-base ${subtitleClassName} ${
            isComplete ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
          }`}
        >
          {subtitle}
        </p>
      )}

      <div
        className={`mx-auto mt-6 h-2 w-2 rounded-full bg-navy-900/15 transition-all duration-500 ${
          isComplete ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
        aria-hidden
      />
    </div>
  )
}
