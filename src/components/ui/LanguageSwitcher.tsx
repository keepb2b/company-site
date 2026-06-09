import { useI18n } from '../../i18n'

type Props = {
  className?: string
  tone?: 'dark' | 'light'
}

export function LanguageSwitcher({ className = '', tone = 'dark' }: Props) {
  const { locale, setLocale } = useI18n()
  const isLight = tone === 'light'

  return (
    <div
      className={`flex items-center rounded-full border p-0.5 text-xs font-semibold ${
        isLight
          ? 'border-header-border bg-white/70'
          : 'border-white/20 bg-white/5'
      } ${className}`}
      role="group"
      aria-label={locale === 'ja' ? '言語切替' : 'Language'}
    >
      <button
        type="button"
        onClick={() => setLocale('ja')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === 'ja'
            ? 'bg-coral-500 text-white'
            : isLight
              ? 'text-header-muted hover:text-navy-900'
              : 'text-white/70 hover:text-white'
        }`}
        aria-pressed={locale === 'ja'}
      >
        JP
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`rounded-full px-2.5 py-1 transition-colors ${
          locale === 'en'
            ? 'bg-coral-500 text-white'
            : isLight
              ? 'text-header-muted hover:text-navy-900'
              : 'text-white/70 hover:text-white'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>
    </div>
  )
}
