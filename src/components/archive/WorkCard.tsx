type WorkItem = {
  title: string
  categories: string[]
  badge?: string
}

export function WorkCard({ title, categories, badge }: WorkItem) {
  return (
    <article
      className="scroll-reveal group overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      data-cursor-hover
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-navy-800 to-navy-700">
        {badge && (
          <span className="absolute top-3 left-3 z-10 rounded-full bg-coral-500 px-3 py-1 text-xs font-bold text-white">
            {badge}
          </span>
        )}
        <div className="absolute inset-0 bg-navy-950/0 transition-colors duration-300 group-hover:bg-navy-950/20" />
        <div className="h-full w-full scale-100 transition-transform duration-400 group-hover:scale-105" />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-navy-900 transition-colors group-hover:text-coral-500">
          <span className="bg-gradient-to-r from-coral-500 to-coral-500 bg-[length:0_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
            {title}
          </span>
        </h3>
        <ul className="mt-3 flex flex-wrap gap-2">
          {categories.map((c) => (
            <li key={c}>
              <span className="rounded-full bg-sand-100 px-2.5 py-0.5 text-xs text-navy-700 transition-colors hover:bg-coral-500/10 hover:text-coral-600">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
