type WorkItem = {
  title: string
  categories: string[]
  badge?: string
}

export function WorkCard({ title, categories, badge }: WorkItem) {
  return (
    <article
      className="scroll-reveal group overflow-hidden border border-aizome-300/45 bg-white shadow-[0_18px_45px_rgba(29,52,72,0.1)] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-aizome-500/45 hover:shadow-[0_26px_70px_rgba(29,52,72,0.16)]"
      data-cursor-hover
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-aizome-300/45 bg-gradient-to-br from-sand-50 to-aizome-300/35">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-white/85 px-3 py-1 text-xs font-bold text-navy-950 shadow-sm">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-white/0 transition-colors duration-300 group-hover:bg-white/10" />
        <div className="h-full w-full scale-100 transition-transform duration-400 group-hover:scale-105" />
      </div>
      <div className="bg-white p-5 md:p-6">
        <h3 className="font-semibold text-navy-900">
          <span className="bg-gradient-to-r from-aizome-500 to-aizome-500 bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {title}
          </span>
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c}>
              <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs text-navy-700 transition-colors hover:bg-aizome-500/10 hover:text-navy-900">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
