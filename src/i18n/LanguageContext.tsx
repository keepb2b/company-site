import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './en'
import { ja } from './ja'
import type { Dictionary, Locale } from './types'

const STORAGE_KEY = 'nippon-systems-locale'

const dictionaries: Record<Locale, Dictionary> = { ja, en }

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  dict: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'ja'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'ja'
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'ja' ? 'en' : 'ja')
  }, [locale, setLocale])

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = dictionaries[locale].meta.siteTitle
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', dictionaries[locale].meta.siteDescription)
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      dict: dictionaries[locale],
    }),
    [locale, setLocale, toggleLocale],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useI18n() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}
