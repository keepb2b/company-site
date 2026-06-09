import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { achievementValues } from '../data/navigation'
import { Button } from '../components/ui/Button'
import { SectionTitle } from '../components/ui/SectionTitle'
import { CTASection } from '../components/layout/CTASection'
import { HeroTagList } from '../components/home/HeroTagList'
import { HeroTitleAnimation } from '../components/home/HeroTitleAnimation'
import { HeroDescAnimation } from '../components/home/HeroDescAnimation'
import { AchievementNumber } from '../components/home/AchievementNumber'
import { ConcernsRadialSection } from '../components/home/ConcernsRadialSection'
import { ReasonsChosenSection } from '../components/home/ReasonsChosenSection'
import { TestimonialsBand } from '../components/home/TestimonialsBand'
import { PricingBlock } from '../components/shared/PricingBlock'
import { WorkCaseStudyCard } from '../components/archive/WorkCaseStudyCard'
import { flattenWorkCases, getWorkCaseGroups } from '../data/workCases'
import { getBlogPosts } from '../data/blogPosts'
import { BlogCard } from '../components/archive/BlogCard'
import { FAQAccordion } from '../components/faq/FAQAccordion'
import { MovingLinesBg } from '../components/effects/MovingLinesBg'
import { useHeroAnimation } from '../hooks/useHeroAnimation'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useI18n } from '../i18n'

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null)
  const { dict, locale } = useI18n()
  useHeroAnimation(heroRef)
  const servicesRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const worksRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const faqRef = useScrollReveal<HTMLElement>()
  const blogRef = useScrollReveal<HTMLElement>({ staggerMs: 80 })
  const companyRef = useScrollReveal<HTMLElement>()
  const numbersRef = useScrollReveal<HTMLElement>({ staggerMs: 100 })
  
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4, 5])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCardOrder(prev => {
        const newOrder = [...prev]
        const lastCard = newOrder.pop()
        newOrder.unshift(lastCard!)
        return newOrder
      })
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <section
        ref={heroRef}
        className="hero-home-bg page-section relative min-h-[100dvh] w-full overflow-hidden bg-navy-950 pt-24 pb-16 text-white md:min-h-screen md:pb-20"
      >
        <MovingLinesBg />

        <div className="relative mx-auto flex max-w-6xl flex-col px-4 pb-20 md:min-h-[calc(100vh-6rem)] md:justify-center md:px-6">
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-coral-400" data-hero="line">
            {dict.home.heroEyebrow}
          </p>
          <h1
            className="mt-4 max-w-4xl text-2xl font-bold leading-snug font-serif md:text-4xl md:leading-snug lg:text-4xl lg:leading-snug xl:text-5xl xl:leading-tight"
            data-hero="line"
          >
            <HeroTitleAnimation text={dict.home.heroTitle1} />
            {dict.home.heroTitle2 ? (
              <>
                <br />
                <HeroTitleAnimation text={dict.home.heroTitle2} />
              </>
            ) : null}
          </h1>
          <p className="mt-6 max-w-xl text-white/70" data-hero="line">
            <HeroDescAnimation text={dict.home.heroDesc} />
          </p>
          <HeroTagList />
          <div className="mt-10 flex flex-wrap gap-4" data-hero="cta">
            <Button to="/contact" variant="primary">
              {dict.common.freeConsult}
            </Button>
            <Button to="/fee" variant="secondary" className="!border-white/40 !text-white hover:!bg-white hover:!text-navy-900">
              {dict.common.downloadDocs}
            </Button>
          </div>
        </div>
      </section>

      <section ref={numbersRef} className="achievement-section">
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <div className="achievement-grid">
            {achievementValues.map((a, i) => (
              <AchievementNumber
                key={i}
                value={a.value}
                suffix={a.suffix}
                label={dict.home.achievements[i].label}
                unit={dict.home.achievements[i].unit}
              />
            ))}
          </div>
          <div className="achievement-cta-row">
            <Link to="/contact" className="achievement-cta achievement-cta-primary">
              <span className="achievement-cta-icon" aria-hidden>✉</span>
              <span>
                <span className="achievement-cta-main">{dict.common.freeConsultShort}</span>
                <span className="achievement-cta-sub">エンジニア経験者がお受けします!</span>
              </span>
            </Link>
            <Link to="/fee" className="achievement-cta achievement-cta-secondary">
              <span className="achievement-cta-icon" aria-hidden>↓</span>
              <span>
                <span className="achievement-cta-main">{dict.common.documentRequest}</span>
                <span className="achievement-cta-sub">事例と費用感をみる</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ConcernsRadialSection />

      <ReasonsChosenSection />

      <section ref={servicesRef} className="section-band-white section-band-py">
        <style>{`
          @media (max-width: 768px) {
            .service-card-mobile {
              --card-scale: 0.8;
            }
          }
          @media (min-width: 769px) {
            .service-card-mobile {
              --card-scale: 1.5;
            }
          }
        `}</style>
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.servicesPreview.en} ja={dict.home.servicesPreview.ja} />
          <div className="relative mx-auto h-[600px] w-full max-w-3xl">
            {dict.services.items.slice(0, 6).map((s, index) => {
              const positionIndex = cardOrder.indexOf(index)
              const rotation = positionIndex === 5 ? 0 : (positionIndex - 2.5) * 12
              return (
                <Link
                  key={s.number}
                  to="/services"
                  className="scroll-reveal service-card-mobile absolute left-1/2 top-1/2 flex h-56 w-72 -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-white p-6 shadow-sm transition-all duration-1000 ease-in-out md:h-60 md:w-80"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotation}deg) translateX(${(positionIndex - 2.5) * 80}px) translateY(${(positionIndex - 2.5) * 30}px) scale(var(--card-scale, 1.5))`,
                    zIndex: positionIndex,
                    border: '2px solid transparent',
                    background: 'linear-gradient(white, white) padding-box, linear-gradient(135deg, #10b981 0%, #34d399 50%, #10b981 100%) border-box',
                  }}
                  data-cursor-hover
                >
                  <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-md bg-gradient-to-br from-navy-100 to-sand-100">
                    <div className="flex h-full items-center justify-center">
                      <div className="text-4xl">🖥️</div>
                    </div>
                  </div>
                  <div className="mt-4 flex min-h-0 flex-1 flex-col items-center justify-center text-center">
                    <h3 className="line-clamp-2 font-display text-lg font-bold leading-tight text-navy-900 md:text-xl">{s.title}</h3>
                    <p className="mt-1 text-sm text-coral-500">〈 {s.number} 〉</p>
                  </div>
                </Link>
              )
            })}
          </div>
          <div className="mt-10 text-center">
            <Button to="/services" variant="primary">{dict.home.servicesPreview.viewAll}</Button>
          </div>
        </div>
      </section>

      <section className="section-band-washi section-band-py relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-aizome-400/10 via-transparent to-coral-500/5" />
          <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-aizome-300/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-coral-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 md:px-6 relative">
          <SectionTitle en={dict.home.price.en} ja={dict.home.price.ja} />
          <PricingBlock compact />
          <div className="mt-8 text-center">
            <Button to="/fee" variant="outline">{dict.home.price.viewDetail}</Button>
          </div>
        </div>
      </section>

      <section ref={worksRef} className="section-band-white section-band-py relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(90,143,168,0.12),transparent_30rem)]" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.works.en} ja={dict.home.works.ja} />
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {flattenWorkCases(getWorkCaseGroups(locale))
              .slice(0, 6)
              .map((w) => (
                <WorkCaseStudyCard
                  key={w.id}
                  serviceNumber={w.serviceNumber}
                  serviceTitle={w.serviceTitle}
                  title={w.title}
                  challenge={w.challenge}
                  technicalDifficulty={w.technicalDifficulty}
                  solution={w.solution}
                  result={w.result}
                  compact
                  labels={{
                    highDifficulty: dict.works.highDifficulty,
                    challenge: dict.works.challenge,
                    technicalDifficulty: dict.works.technicalDifficulty,
                    solution: dict.works.solution,
                    result: dict.works.result,
                  }}
                />
              ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/works" variant="primary">{dict.home.works.viewAll}</Button>
          </div>
        </div>
      </section>

      <TestimonialsBand />

      <section ref={faqRef} className="section-band-white section-band-py relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(207,92,73,0.08),transparent_32rem)]" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <SectionTitle en={dict.home.faq.en} ja={dict.home.faq.ja} align="center" />
          </div>
          <div className="rounded-3xl border border-sand-200/70 bg-sand-50/45 p-3 shadow-[0_24px_70px_rgba(30,51,71,0.07)] md:p-4">
            <FAQAccordion items={dict.faq.items.slice(0, 4)} />
          </div>
          <div className="mt-10 text-center">
            <Button to="/faq" variant="outline">{dict.home.faq.viewAll}</Button>
          </div>
        </div>
      </section>

      <section ref={blogRef} className="section-band-washi section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.blog.en} ja={dict.home.blog.ja} />
          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {getBlogPosts(locale).slice(0, 3).map((p) => (
              <div
                key={p.id}
                className="group relative h-full"
              >
                <div className="absolute -left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-coral-500/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <BlogCard {...p} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/blog" variant="primary">{dict.home.blog.viewAll}</Button>
          </div>
        </div>
      </section>

      <section ref={companyRef} className="section-band-white section-band-py">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <SectionTitle en={dict.home.company.en} ja={dict.home.company.ja} />
          <div className="scroll-reveal grid items-center gap-10 md:grid-cols-2">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 to-navy-950">
              <img
                src="/images/who_we_are_it_company_team_photo.png"
                alt={dict.home.company.ja}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div>
              <p className="leading-relaxed text-navy-700/85">
                {dict.home.company.desc}
              </p>
              <Button to="/company" variant="primary" className="mt-8">
                {dict.home.company.viewAll}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
