import { useEffect, useMemo, useState } from 'react'
import { PageHero } from '../components/layout/PageHero'
import { CTASection } from '../components/layout/CTASection'
import { ArchiveFilter } from '../components/archive/ArchiveFilter'
import { BlogCard } from '../components/archive/BlogCard'
import { BlogCardDialog } from '../components/archive/BlogCardDialog'
import { ServiceStackSection } from '../components/blog/ServiceStackSection'
import { filterBlogPosts, getBlogFilters, getBlogPosts } from '../data/blogPosts'
import type { BlogPost } from '../data/blogPosts'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

const PAGE_SIZE = 3

export function BlogPage() {
  const { dict, locale } = useI18n()
  const [filterIdx, setFilterIdx] = useState(0)
  const [page, setPage] = useState(1)
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const ref = useScrollReveal({ staggerMs: 80 })

  const posts = useMemo(() => getBlogPosts(locale), [locale])
  const filters = useMemo(() => getBlogFilters(locale), [locale])

  useEffect(() => {
    setFilterIdx(0)
    setPage(1)
  }, [locale])

  useEffect(() => {
    setPage(1)
  }, [filterIdx])

  const filtered = useMemo(
    () => filterBlogPosts(posts, filterIdx),
    [posts, filterIdx],
  )

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, totalPages)

  const paginated = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE
    return filtered.slice(start, start + PAGE_SIZE)
  }, [filtered, currentPage])

  useEffect(() => {
    const container = ref.current
    if (!container) return
    container.querySelectorAll('.scroll-reveal:not(.is-visible)').forEach((el) => {
      el.classList.add('is-visible')
    })
  }, [paginated, filterIdx, currentPage])

  return (
    <>
      <PageHero
        en={dict.blog.page.en}
        ja={dict.blog.page.ja}
        breadcrumbs={[{ label: dict.blog.page.ja }]}
        variant="blog"
      />
      <section className="section-band-washi section-band-py">
        <ServiceStackSection />
      </section>
      <section ref={ref} className="section-band-white section-band-py relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(207,92,73,0.08),transparent_34rem)]" />
        <div className="mx-auto max-w-6xl px-4 md:px-6 relative">
          <div className="mb-8 flex flex-col gap-5 md:mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.24em] text-coral-500">
                Insights
              </p>
              <h2 className="mt-3 text-2xl font-bold text-navy-950 md:text-3xl">
                {dict.blog.page.ja}
              </h2>
            </div>
            <ArchiveFilter
              filters={filters}
              active={filters[filterIdx]}
              onChange={(label) => {
                const idx = filters.indexOf(label)
                if (idx >= 0) setFilterIdx(idx)
              }}
            />
          </div>
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {paginated.map((p) => (
              <div key={p.id} className="relative h-full">
                <BlogCard {...p} onClick={() => setSelectedPost(p)} />
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
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
      <BlogCardDialog post={selectedPost} onClose={() => setSelectedPost(null)} />
      <CTASection />
    </>
  )
}
