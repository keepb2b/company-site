import type { Dictionary } from '../../i18n/types'

type Executive = Dictionary['company']['executives'][number]

export function ExecutiveCard({ role, roleEn, name }: Executive) {
  return (
    <article className="executive-card scroll-reveal overflow-hidden rounded-lg border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-[2/3] w-full overflow-hidden bg-white lg:aspect-auto lg:h-56">
        <img
          src="/images/IMG_9984.JPG"
          alt={`${name} ${role}`}
          className="h-full w-full scale-110 object-cover object-[center_12%]"
          loading="lazy"
        />
      </div>
      <div className="border-t border-sand-200 px-5 py-5 md:px-6 lg:py-3">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-navy-700/70">{roleEn}</p>
        <h3 className="mt-2 text-2xl font-bold text-navy-950 md:text-[1.6rem]">{name}</h3>
      </div>
    </article>
  )
}
