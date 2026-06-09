import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { FAQAccordion } from '../components/faq/FAQAccordion'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'
import type { FaqCategoryKey } from '../i18n/types'

const categoryKeys: FaqCategoryKey[] = ['all', 'beforeOrder', 'progress', 'tech', 'fee']

export function FAQPage() {
  const { dict, locale } = useI18n()
  const [category, setCategory] = useState<FaqCategoryKey>('all')
  const ref = useScrollReveal<HTMLElement>({ staggerMs: 60 })

  useEffect(() => {
    setCategory('all')
  }, [locale])

  const filters = categoryKeys.map((k) => dict.faq.categories[k])
  const activeLabel = dict.faq.categories[category]

  const filtered = useMemo(() => {
    if (category === 'all') return dict.faq.items
    return dict.faq.items.filter((f) => f.category === category)
  }, [category, dict.faq.items])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [filtered])

  return (
    <>
      <PageHero
        en={dict.faq.page.en}
        ja={dict.faq.page.ja}
        breadcrumbs={[{ label: dict.faq.page.ja }]}
        variant="faq"
      />
      <section ref={ref} className="section-band-white section-band-py">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <ArchiveFilter
            filters={filters}
            active={activeLabel}
            onChange={(label) => {
              const key = categoryKeys.find((k) => dict.faq.categories[k] === label)
              if (key) setCategory(key)
            }}
            label={dict.common.category}
          />
          <FAQAccordion items={filtered} />
        </div>
      </section>
      <CTASection />
    </>
  )
}
