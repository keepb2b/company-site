import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { SiteLoader } from '../components/effects/SiteLoader'
import { useReducedMotion } from '../hooks/useReducedMotion'

const CRITICAL_IMAGES = ['/images/nippon-systems-logo.png', '/images/hero-bg.png']
const LOADER_SEEN_KEY = 'nippon-systems-intro-seen'

function hasSeenIntroLoader(): boolean {
  try {
    return sessionStorage.getItem(LOADER_SEEN_KEY) === '1'
  } catch {
    return false
  }
}

function markIntroLoaderSeen(): void {
  try {
    sessionStorage.setItem(LOADER_SEEN_KEY, '1')
  } catch {
    // sessionStorage unavailable
  }
}

type LoadingContextValue = {
  complete: boolean
}

const LoadingContext = createContext<LoadingContextValue>({ complete: true })

function preloadImages(urls: string[]): Promise<void> {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image()
          img.onload = () => resolve()
          img.onerror = () => resolve()
          img.src = url
        }),
    ),
  ).then(() => undefined)
}

function waitForWindowLoad(): Promise<void> {
  if (document.readyState === 'complete') return Promise.resolve()
  return new Promise((resolve) => {
    window.addEventListener('load', () => resolve(), { once: true })
  })
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion()
  const skipLoader = reduced || hasSeenIntroLoader()
  const [ready, setReady] = useState(skipLoader)
  const [visible, setVisible] = useState(!skipLoader)

  useEffect(() => {
    if (skipLoader) {
      setReady(true)
      setVisible(false)
      return
    }

    let cancelled = false

    const prepare = async () => {
      const minDisplay = new Promise<void>((resolve) => {
        window.setTimeout(resolve, 2400)
      })

      await Promise.all([
        minDisplay,
        waitForWindowLoad(),
        document.fonts?.ready ?? Promise.resolve(),
        preloadImages(CRITICAL_IMAGES),
      ])

      if (!cancelled) setReady(true)
    }

    void prepare()

    return () => {
      cancelled = true
    }
  }, [skipLoader])

  const handleComplete = useCallback(() => {
    markIntroLoaderSeen()
    setVisible(false)
  }, [])

  const complete = !visible
  const value = useMemo(() => ({ complete }), [complete])

  return (
    <LoadingContext.Provider value={value}>
      {children}
      {visible && <SiteLoader ready={ready} onComplete={handleComplete} />}
    </LoadingContext.Provider>
  )
}

/** @deprecated Use useLoadingComplete */
export function useEntranceComplete() {
  return useContext(LoadingContext).complete
}

export function useLoadingComplete() {
  return useContext(LoadingContext).complete
}

/** @deprecated Use LoadingProvider */
export const EntranceProvider = LoadingProvider
