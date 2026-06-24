type Props = {
  filters: readonly string[]
  active: string
  onChange: (value: string) => void
  label?: string
}

export function ArchiveFilter({ filters, active, onChange, label }: Props) {
  return (
    <div className="mb-10">
      {label && <p className="mb-4 text-sm font-semibold text-navy-800">{label}</p>}
      <div className="flex flex-wrap gap-2 rounded-2xl border border-sand-200/80 bg-white/80 p-2 shadow-[0_18px_40px_rgba(29,52,72,0.06)] backdrop-blur md:inline-flex">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => onChange(f)}
            className={`rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active === f
                ? 'bg-navy-900 text-brand-ink shadow-[0_10px_24px_rgba(29,52,72,0.18)]'
                : 'text-navy-700 hover:bg-sand-100 hover:text-navy-950'
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </div>
  )
}
