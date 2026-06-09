import type { Dictionary } from '../../i18n/types'

type Executive = Dictionary['company']['executives'][number]

export function ExecutiveCard({ role, roleEn, name, message }: Executive) {
  return (
    <article className="executive-card group scroll-reveal overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="border-b border-sand-200 bg-gradient-to-br from-navy-900 to-navy-950 px-5 py-6 md:px-6 md:py-7">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-coral-400">{roleEn}</p>
        <h3 className="mt-2 text-2xl font-bold text-white md:text-[1.75rem]">{name}</h3>
        <p className="mt-1 text-sm text-white/80">{role}</p>
      </div>
      <div className="p-5 md:p-6">
        <p className="rounded-xl border border-sand-200 bg-sand-50 px-4 py-4 text-sm leading-relaxed text-navy-700/85">
          {message}
        </p>
      </div>
    </article>
  )
}
