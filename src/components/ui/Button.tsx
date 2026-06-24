import Link from 'next/link'

type ButtonProps = {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  href?: string
  to?: string
  className?: string
  type?: 'button' | 'submit'
  onClick?: () => void
}

const variants = {
  primary:
    'btn-sweep bg-[linear-gradient(135deg,var(--color-button-400)_0%,var(--color-button-600)_100%)] text-brand-ink hover:brightness-105 hover:-translate-y-0.5 shadow-lg shadow-[rgba(255,139,26,0.28)]',
  secondary:
    'border-2 border-transparent bg-[linear-gradient(135deg,var(--color-button-400)_0%,var(--color-button-600)_100%)] text-brand-ink hover:brightness-105 hover:-translate-y-0.5 shadow-lg shadow-[rgba(255,139,26,0.24)]',
  outline:
    'border border-button-500/45 text-navy-800 hover:border-button-500 hover:bg-button-500/10 hover:text-navy-900',
}

export function Button({
  children,
  variant = 'primary',
  href,
  to,
  className = '',
  type = 'button',
  onClick,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out'

  const classes = `${base} ${variants[variant]} ${className}`

  const arrow = (
    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )

  const content = (
    <>
      <span className="whitespace-nowrap">{children}</span>
      {variant === 'primary' && arrow}
    </>
  )

  if (to) {
    return (
      <Link href={to} className={`group ${classes}`}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={`group ${classes}`}>
        {content}
      </a>
    )
  }

  return (
    <button type={type} className={`group ${classes}`} onClick={onClick}>
      {content}
    </button>
  )
}
