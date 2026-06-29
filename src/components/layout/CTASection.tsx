import Link from 'next/link'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'

export function CTASection() {
  const ref = useScrollReveal<HTMLElement>()
  const { dict } = useI18n()

  return (
    <section ref={ref} className="footer-consult-section">
      <div className="footer-consult-card scroll-reveal">
        <div className="footer-consult-copy">
          <p className="footer-consult-lead">{dict.cta.title}</p>
          <a href="tel:0344008755" className="footer-consult-phone">
            <span aria-hidden>☎</span>
            0344008755
          </a>
          <p className="footer-consult-hours">{dict.common.phoneHours}</p>
          <span className="footer-consult-watermark" aria-hidden>
            CONSULTATION / QUOTATION
          </span>
        </div>

        <div className="footer-consult-actions">
          <Link href="/contact" className="footer-consult-button">
            <span className="footer-consult-button-icon" aria-hidden>
              ✉
            </span>
            {dict.common.freeConsult}
          </Link>
          <Link href="/chatwork" className="footer-consult-button">
            <span className="footer-consult-chatmark" aria-hidden>
              ●●●
            </span>
            {dict.cta.chatwork}
          </Link>
        </div>
      </div>
    </section>
  )
}
