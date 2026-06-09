import { Link } from 'react-router-dom'

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
    'btn-sweep bg-coral-500 text-white hover:bg-coral-400 hover:-translate-y-0.5 shadow-lg shadow-coral-500/25',
  secondary:
    'border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5',
  outline:
    'border border-navy-700/30 text-navy-800 hover:border-coral-500 hover:text-coral-500',
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
      <Link to={to} className={`group ${classes}`}>
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
