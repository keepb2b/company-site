import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { StaffCard } from '../components/staff/StaffCard'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function StaffPage() {
  const ref = useScrollReveal({ staggerMs: 80 })
  const { dict } = useI18n()

  return (
    <>
      <PageHero
        en={dict.staff.page.en}
        ja={dict.staff.page.ja}
        breadcrumbs={[{ label: dict.staff.page.ja }]}
        variant="staff"
      />
      <section className="section-band-white section-band-py">
        <div ref={ref} className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 md:px-6">
          {dict.staff.items.map((s) => (
            <StaffCard key={s.id} {...s} />
          ))}
        </div>
      </section>
      <CTASection />
    </>
  )
}
