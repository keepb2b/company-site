import { useEffect } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { CompanyInfoTable } from '../components/company/CompanyInfoTable'
import { ExecutiveCard } from '../components/company/ExecutiveCard'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function CompanyPage() {
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 100 })
  const { dict } = useI18n()

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [dict.company.executives])

  return (
    <>
      <PageHero
        en={dict.company.page.en}
        ja={dict.company.page.ja}
        breadcrumbs={[{ label: dict.company.page.ja }]}
        variant="company"
      />
      <section ref={ref} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.company.profile.en} ja={dict.company.profile.ja} align="center" />
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(20rem,26rem)_minmax(0,1fr)] lg:gap-10">
            <div className="mx-auto w-full max-w-md lg:mx-0">
              {dict.company.executives.map((executive) => (
                <ExecutiveCard key={executive.id} {...executive} />
              ))}
            </div>
            <div className="w-full min-w-0">
              <CompanyInfoTable />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
