import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navRoutes } from '../../data/navigation'
import { useI18n } from '../../i18n'
import { Button } from '../ui/Button'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

const navLinkClass = (isActive: boolean) =>
  `shrink-0 whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-medium leading-none transition-colors 2xl:px-3 2xl:text-xs ${
    isActive
      ? 'bg-white text-coral-500 shadow-sm'
      : 'text-header-muted hover:bg-white/70 hover:text-navy-900'
  }`

export function GlobalHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { dict } = useI18n()

  return (
    <header className="site-header fixed top-0 right-0 left-0 isolate z-[60] border-b border-header-border bg-header-bg text-navy-900 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset] md:bg-header-bg/95 md:backdrop-blur-md">
      <div className="site-header__inner mx-auto grid h-14 w-full min-w-0 max-w-[100rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-1.5 sm:gap-3 md:h-[4.25rem] 2xl:grid-cols-[auto_minmax(0,1fr)_auto]">
        <Link href="/" className="header-logo-link flex min-w-0 items-center 2xl:col-start-1" aria-label="日本システムズ">
          <span className="header-logo-frame">
            <img
              src="/images/nippon-systems-logo.png"
              alt="日本システムズ"
              className="header-logo-img h-7 w-auto max-w-[88px] object-contain object-left sm:h-9 sm:max-w-[148px] 2xl:h-10 2xl:max-w-[190px]"
              width={190}
              height={40}
              suppressHydrationWarning
            />
          </span>
        </Link>

        <nav
          className="hidden min-w-0 items-center justify-center gap-0.5 2xl:col-start-2 2xl:flex 2xl:gap-1"
          aria-label="Main navigation"
        >
          {navRoutes.map((item) => (
            <Link key={item.path} href={item.path} className={navLinkClass(pathname === item.path)}>
              {dict.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions col-start-2 flex shrink-0 items-center gap-1 sm:gap-2 2xl:col-start-3">
          <LanguageSwitcher className="shrink-0 max-[359px]:scale-90" tone="light" />

          <div className="hidden items-center gap-0.5 lg:flex">
            <a
              href="mailto:info@nippon-systems.example"
              className="shrink-0 rounded-full p-2 text-header-muted hover:bg-white/80 hover:text-navy-900"
              aria-label={dict.common.mail}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
            <Link
              href="/chatwork"
              className="shrink-0 rounded-full p-2 text-header-muted hover:bg-white/80 hover:text-navy-900"
              aria-label="ChatWork"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 5.58 2 10c0 2.54 1.19 4.81 3.05 6.45L4 22l5.67-2.12C10.42 20.28 11.18 20.5 12 20.5c5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex shrink-0 items-center justify-center rounded-lg border border-header-border p-2 text-navy-800 2xl:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={dict.common.menu}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-header-border bg-header-bg px-4 py-4 2xl:hidden" aria-label="Mobile navigation">
          <ul className="space-y-1">
            {navRoutes.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm text-navy-800 hover:bg-white/80"
                >
                  {dict.nav[item.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Button
              to="/fee"
              variant="outline"
              className="w-full justify-center !border-header-border !bg-white/70 !text-navy-800 sm:flex-1"
            >
              {dict.common.documentRequest}
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              className="w-full justify-center !border-header-border !bg-white/70 !text-navy-800 hover:!bg-navy-900 hover:!text-white sm:flex-1"
            >
              {dict.common.contact}
            </Button>
            <Button to="/contact" variant="primary" className="w-full justify-center sm:flex-1">
              {dict.common.freeConsultShort}
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
