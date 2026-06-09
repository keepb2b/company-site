import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useI18n } from '../../i18n'

export function PricingBlock({ compact = false }: { compact?: boolean }) {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const { dict } = useI18n()
  const items = dict.fee.pricing

  return (
    <section ref={ref}>
      <div className={`grid gap-6 ${compact ? 'md:grid-cols-3' : 'md:grid-cols-3'}`}>
        {items.map((item) => {
          const isPercent = item.unit.trim() === '%'

          return (
            <div
              key={item.label}
              className={`pricing-card scroll-reveal ${compact ? 'pricing-card--compact' : ''}`}
            >
              <div className="pricing-card-body">
                <p className="pricing-card-pill">{item.label}</p>

                {isPercent ? (
                  <p className="pricing-card-value pricing-card-value--percent">
                    {item.prefix ? (
                      <span className="pricing-card-prefix">{item.prefix}</span>
                    ) : null}
                    <span className="pricing-card-price">{item.price}</span>
                    <span className="pricing-card-unit">{item.unit}</span>
                  </p>
                ) : (
                  <p className="pricing-card-value">
                    <span className="pricing-card-price">{item.price}</span>
                    <span className="pricing-card-unit">{item.unit}</span>
                  </p>
                )}

                {item.note ? <p className="pricing-card-note">{item.note}</p> : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
