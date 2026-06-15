import Link from 'next/link'
import { useI18n } from '../../i18n'

type Crumb = { label: string; path?: string }

export function Breadcrumb({ items }: { items: Crumb[] }) {
  const { dict } = useI18n()

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-navy-700/70">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-coral-500">
            {dict.common.breadcrumbHome}
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            <span aria-hidden>/</span>
            {item.path ? (
              <Link href={item.path} className="transition-colors hover:text-coral-500">
                {item.label}
              </Link>
            ) : (
              <span className="text-navy-900">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
