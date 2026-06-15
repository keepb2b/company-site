'use client'

import { LoadingProvider } from '../context/LoadingContext'
import { Layout } from '../components/layout/Layout'
import { ScrollToTop } from '../components/layout/ScrollToTop'
import { LanguageProvider } from '../i18n'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <LoadingProvider>
        <ScrollToTop />
        <Layout>{children}</Layout>
      </LoadingProvider>
    </LanguageProvider>
  )
}
