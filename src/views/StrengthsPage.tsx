import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { NumberedReasonBlock } from '../components/shared/NumberedReasonBlock'
import { strengthImages } from '../data/reasons'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function StrengthsPage() {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 120 })
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.reasons.page.en}
        ja={dict.reasons.page.ja}
        breadcrumbs={[{ label: dict.reasons.page.ja }]}
        variant="strengths"
      />
      <section ref={ref} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl space-y-16 px-4 md:space-y-24 md:px-6">
          {dict.reasons.items.map((r, i) => (
            <NumberedReasonBlock
              key={r.number}
              {...r}
              imageSrc={strengthImages[i]}
              reverse={i % 2 === 1}
            />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
