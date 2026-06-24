import type { Dictionary } from '../../i18n/types'

type StaffItem = Dictionary['staff']['items'][number]

export function StaffCard({ name, role, specialty, image }: StaffItem) {
  return (
    <article className="scroll-reveal overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {image ? (
        <img
          src={image}
          alt={name}
          className="aspect-square w-full object-cover opacity-90"
          suppressHydrationWarning
        />
      ) : (
        <div className="aspect-square bg-gradient-to-br from-navy-800 to-navy-950" />
      )}
      <div className="p-5">
        <p className="text-xs font-medium text-navy-700/70">{role}</p>
        <h3 className="mt-1 text-lg font-bold text-navy-900">{name}</h3>
        <p className="mt-2 text-sm text-navy-700/75">{specialty}</p>
      </div>
    </article>
  )
}
