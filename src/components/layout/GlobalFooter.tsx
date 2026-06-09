import { Link } from 'react-router-dom'
import { footerRoutes } from '../../data/navigation'
import { useI18n } from '../../i18n'

export function GlobalFooter() {
  const { dict } = useI18n()

  const sitemap = [
    ...footerRoutes,
    { key: 'faq' as const, path: '/faq' },
    { key: 'staff' as const, path: '/staff' },
  ]

  return (
    <footer className="site-footer page-section overflow-x-clip">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="site-footer-top"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path strokeLinecap="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
        {dict.common.backToTop}
      </button>

      <div className="site-footer-inner">
        <div className="site-footer-main">
          <div className="site-footer-brand">
            <Link to="/" className="site-footer-logo" aria-label="Nippon Systems">
              <img src="/images/nippon-systems-logo.png" alt="Nippon Systems" />
            </Link>

            <address className="site-footer-address">
              <p className="site-footer-address-title">{dict.common.tokyoOffice}</p>
              <p>東京都渋谷区〇〇 1-2-3 〇〇ビル 5F</p>
              <p className="site-footer-address-title mt-3">{dict.common.osakaOffice}</p>
              <p>大阪府大阪市北区〇〇 4-5-6</p>
              <p className="mt-3">TEL : 03-1234-5678　FAX : 03-1234-5578</p>
            </address>

            <div className="site-footer-promos">
              <Link to="/services" className="site-footer-promo site-footer-promo--services">
                <span>Web / EC / CMS</span>
                <strong>{dict.nav.services}</strong>
              </Link>
              <Link to="/staff" className="site-footer-promo site-footer-promo--staff">
                <span>Join our team</span>
                <strong>{dict.nav.staff}</strong>
              </Link>
            </div>
          </div>

          <nav className="site-footer-nav" aria-label={dict.common.sitemap}>
            <p className="site-footer-heading">{dict.common.sitemap}</p>
            <ul>
              {sitemap.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span aria-hidden>›</span>
                    {dict.nav[item.key]}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/contact">
                  <span aria-hidden>›</span>
                  {dict.common.contact}
                </Link>
              </li>
              <li>
                <Link to="/chatwork">
                  <span aria-hidden>›</span>
                  {dict.common.chatwork}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="site-footer-notes">
          <p>{dict.footer.seo}</p>
          <p>{dict.footer.copyright.replace('{year}', String(new Date().getFullYear()))}</p>
        </div>
      </div>
    </footer>
  )
}
