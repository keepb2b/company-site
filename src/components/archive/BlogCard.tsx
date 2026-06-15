import type { BlogPost } from '../../data/blogPosts'

type Props = BlogPost & { onClick?: () => void }

export function BlogCard({ title, date, category, image, onClick }: Props) {
  const formattedDate = date.replace(/\./g, '-')

  return (
    <div
      className="scroll-reveal group h-full cursor-pointer"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick?.()}
      data-cursor-hover
    >
      <article className="flex h-full min-h-[360px] overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-[0_18px_45px_rgba(30,51,71,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-coral-500/35 group-hover:shadow-[0_24px_60px_rgba(30,51,71,0.14)]">
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="p-3 pb-0">
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-sand-100">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                suppressHydrationWarning
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" aria-hidden />
              <span className="absolute left-4 top-4 rounded-full border border-white/35 bg-white/90 px-3 py-1 text-xs font-semibold text-navy-900 shadow-sm backdrop-blur">
                {category}
              </span>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-5 md:p-6">
            <time className="text-xs font-semibold text-coral-500" dateTime={formattedDate}>
              {formattedDate}
            </time>
            <h3 className="mt-3 line-clamp-3 text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-coral-600">
              {title}
            </h3>
            <div className="mt-auto pt-6">
              <span className="inline-flex items-center text-sm font-semibold text-navy-900 transition-colors group-hover:text-coral-600">
                Read more
                <span className="ml-2 transition-transform group-hover:translate-x-1">-&gt;</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
