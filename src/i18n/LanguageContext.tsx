import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en } from './en'
import { ja } from './ja'
import type { Dictionary, Locale } from './types'

const STORAGE_KEY = 'nippon-system-locale'

const dictionaries: Record<Locale, Dictionary> = { ja, en }

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  dict: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ja')

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // localStorage unavailable
    }
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

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'en') setLocaleState('en')
    } catch {
      // localStorage unavailable
    }
  }, [])

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
