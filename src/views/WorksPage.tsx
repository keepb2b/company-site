import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { WorkCaseStudyCard } from '../components/archive/WorkCaseStudyCard'
import { getWorkCaseGroups } from '../data/workCases'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

const PAGE_SIZE = 3

export function WorksPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const [page, setPage] = useState(1)
  const ref = useScrollReveal({ staggerMs: 80 })

  const groups = useMemo(() => getWorkCaseGroups(locale), [locale])

  const filters = useMemo(
    () => [dict.works.filterAll, ...groups.map((g) => g.serviceTitle)],
    [dict.works.filterAll, groups],
  )

  const caseLabels = useMemo(
    () => ({
      highDifficulty: dict.works.highDifficulty,
      challenge: dict.works.challenge,
      technicalDifficulty: dict.works.technicalDifficulty,
      solution: dict.works.solution,
      result: dict.works.result,
    }),
    [dict.works],
  )

  useEffect(() => {
    setFilterIdx(0)
    setPage(1)
  }, [locale])

  useEffect(() => {
    setPage(1)
  }, [filterIdx])

  const visibleGroups = useMemo(() => {
    if (filterIdx === 0) return groups
    return groups.filter((g) => g.serviceTitle === filters[filterIdx])
  }, [filterIdx, filters, groups])

  const totalPages = Math.max(1, Math.ceil(visibleGroups.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const paginatedGroups = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return visibleGroups.slice(start, start + PAGE_SIZE)
  }, [visibleGroups, currentPage])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [paginatedGroups, filterIdx, currentPage])

  return (
    <>
      <PageHero
        en={dict.works.page.en}
        ja={dict.works.page.ja}
        breadcrumbs={[{ label: dict.works.page.ja }]}
        variant="works"
      />
      <section ref={ref} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ArchiveFilter
            filters={filters}
            active={filters[filterIdx]}
            onChange={(label) => {
              const idx = filters.indexOf(label)
              if (idx >= 0) setFilterIdx(idx)
            }}
            label={dict.works.label}
          />
          <div className="space-y-16">
            {paginatedGroups.map((group) =>
              group.cases.map((item) => (
                <div key={item.id}>
                  <div className="mb-6 flex flex-wrap items-baseline gap-3 border-b border-sand-200 pb-4">
                    <span className="font-display text-3xl font-bold text-coral-500">
                      {group.serviceNumber}
                    </span>
                    <h2 className="text-xl font-bold text-navy-900 md:text-2xl">{group.serviceTitle}</h2>
                    <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-medium text-white">
                      {dict.works.highDifficulty}
                    </span>
                  </div>
                  <WorkCaseStudyCard
                    serviceNumber={group.serviceNumber}
                    serviceTitle={group.serviceTitle}
                    title={item.title}
                    challenge={item.challenge}
                    technicalDifficulty={item.technicalDifficulty}
                    solution={item.solution}
                    result={item.result}
                    labels={caseLabels}
                  />
                </div>
              )),
            )}
          </div>
          {visibleGroups.length === 0 && (
            <p className="py-12 text-center text-navy-700/60">{dict.common.noResults}</p>
          )}
          {totalPages > 1 && (
            <nav className="mt-12 flex justify-center gap-2" aria-label="Pagination">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  type="button"
                  aria-current={p === currentPage ? 'page' : undefined}
                  onClick={() => setPage(p)}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-colors ${
                    p === currentPage
                      ? 'border-coral-500 bg-coral-500 text-white'
                      : 'border-sand-200 hover:border-coral-500 hover:bg-coral-500/10'
                  }`}
                >
                  {p}
                </button>
              ))}
            </nav>
          )}
        </div>
      </section>
      <CTASection />
    </>
  )
}
