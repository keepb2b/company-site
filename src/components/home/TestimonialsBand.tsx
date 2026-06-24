import { SectionTitle } from '../ui/SectionTitle'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type TestimonialItem = Dictionary['testimonials']['items'][number]

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="testimonial-card flex w-[min(360px,86vw)] shrink-0 flex-col rounded-lg border border-sand-200/80 bg-white/95 p-6 shadow-[0_18px_48px_rgba(29,52,72,0.08)] ring-1 ring-white/70 backdrop-blur transition-transform duration-300 hover:-translate-y-1 md:w-[430px] md:p-7">
      <div className="flex items-center justify-between gap-4">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm ring-4 ring-sand-50 md:h-14 md:w-14"
            style={{
              background: `linear-gradient(135deg, ${item.avatarFrom} 0%, ${item.avatarTo} 100%)`,
            }}
            aria-hidden
          >
            {item.initials}
          </div>
          <cite className="min-w-0 not-italic">
            <span className="block truncate text-sm font-bold text-navy-950">{item.author}</span>
            <span className="mt-0.5 block truncate text-xs text-navy-700/60">{item.role}</span>
          </cite>
        </div>
        <span className="font-serif text-5xl leading-none text-coral-500/25" aria-hidden>
          &ldquo;
        </span>
      </div>

      <div className="mt-5 border-t border-sand-200 pt-5">
        <p className="line-clamp-4 text-[0.9375rem] font-medium leading-7 text-navy-800 md:text-base">
          {item.quote}
        </p>
      </div>
    </article>
  )
}

function MarqueeTrack({ items, ariaHidden }: { items: TestimonialItem[]; ariaHidden?: boolean }) {
  return (
    <div className="testimonials-track flex shrink-0 items-stretch gap-5 pr-5 md:gap-6 md:pr-6" aria-hidden={ariaHidden}>
      {items.map((item, index) => (
        <TestimonialCard key={`${ariaHidden ? 'dup-' : ''}${item.id}-${index}`} item={item} />
      ))}
    </div>
  )
}

export function TestimonialsBand() {
  const { dict } = useI18n()
  const { section, items } = dict.testimonials
  const loopItems = [...items, ...items]

  return (
    <section className="page-section section-band-washi-deep section-band-py relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(95,149,168,0.16),transparent_34rem)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle en={section.en} ja={section.ja} align="center" />
      </div>

      <div
        className="testimonials-marquee group relative mt-6 md:mt-8"
        aria-label={`${section.ja} scroll`}
      >
        <div className="testimonials-marquee-fade pointer-events-none absolute inset-y-0 left-0 z-10 w-12 md:w-20" />
        <div className="testimonials-marquee-fade pointer-events-none absolute inset-y-0 right-0 z-10 w-12 rotate-180 md:w-20" />

        <div className="testimonials-marquee-inner flex w-max">
          <MarqueeTrack items={loopItems} />
          <MarqueeTrack items={loopItems} ariaHidden />
        </div>
      </div>
    </section>
  )
}
