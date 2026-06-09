import { Link } from 'react-router-dom'
import { ReasonIcon } from './ReasonIcon'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type ReasonItem = Dictionary['reasons']['items'][number]

function ReasonCard({ reason }: { reason: ReasonItem }) {
  return (
    <article className="reason-choice-card scroll-reveal">
      <div className="reason-choice-orb">
        <span className="reason-choice-number">{reason.number}</span>
        <div className="reason-choice-icon">
          <ReasonIcon type={reason.icon} />
        </div>
      </div>
      <h3 className="reason-choice-title">{reason.gridTitle}</h3>
    </article>
  )
}

function ReasonCallout({ text }: { text: string }) {
  return (
    <div className="reason-choice-banner">
      <span aria-hidden>‹</span>
      <p>{text}</p>
      <span aria-hidden>›</span>
    </div>
  )
}

export function ReasonsChosenSection() {
  const { dict } = useI18n()
  const { section, items } = dict.reasons

  return (
    <section id="reasons" className="reason-choice-section page-section">
      <div className="reason-choice-angle reason-choice-angle--top" aria-hidden />
      <div className="reason-choice-angle reason-choice-angle--bottom" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <header className="reason-choice-head">
          <div className="reason-choice-heading-line">
            <h2>{section.enTitle}</h2>
          </div>
          <p>{section.jaSubtitle}</p>
        </header>

        <ReasonCallout text={section.bannerText} />

        <div className="reason-choice-grid">
          {items.slice(0, 6).map((reason) => (
            <ReasonCard key={reason.number} reason={reason} />
          ))}
        </div>

        <div className="reason-choice-action">
          <Link to="/strengths" className="reason-choice-link">
            {section.ctaLabel}
          </Link>
          <span aria-hidden />
        </div>
      </div>
    </section>
  )
}
