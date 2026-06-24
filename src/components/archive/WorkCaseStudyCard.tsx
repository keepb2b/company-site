type Props = {
  serviceNumber: string
  serviceTitle?: string
  title: string
  challenge: string
  technicalDifficulty: string
  solution: string
  result: string
  labels: {
    highDifficulty: string
    challenge: string
    technicalDifficulty: string
    solution: string
    result: string
  }
  compact?: boolean
}

function toBulletItems(text: string) {
  return text
    .split('\n')
    .map((line) => line.replace(/\*\*/g, '').trim())
    .filter(Boolean)
}

function BulletBlock({ label, text, clamp }: { label: string; text: string; clamp?: boolean }) {
  const items = toBulletItems(text)

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700/70">{label}</p>
      {items.length > 1 ? (
        <ul className={`mt-3 space-y-2 text-navy-800/90 ${clamp ? 'line-clamp-4' : ''}`}>
          {items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aizome-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={`mt-2 leading-7 text-navy-800/90 ${clamp ? 'line-clamp-3' : ''}`}>
          {items[0]?.replace(/\*\*/g, '')}
        </p>
      )}
    </div>
  )
}

export function WorkCaseStudyCard({
  serviceNumber,
  serviceTitle,
  title,
  challenge,
  technicalDifficulty,
  solution,
  result,
  labels,
  compact = false,
}: Props) {
  return (
    <article
      className="scroll-reveal group flex h-full overflow-hidden border border-aizome-300/45 bg-white shadow-[0_18px_45px_rgba(29,52,72,0.1)] ring-1 ring-white/80 transition-all duration-300 hover:-translate-y-1 hover:border-aizome-500/45 hover:shadow-[0_26px_70px_rgba(29,52,72,0.16)]"
      data-cursor-hover
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="relative overflow-hidden border-b border-aizome-300/45 bg-gradient-to-br from-sand-50 to-aizome-300/30 px-5 py-5 md:px-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.68),transparent_16rem)]" aria-hidden />
          <div className="absolute inset-x-0 bottom-0 h-px bg-navy-900/8" aria-hidden />
          <div className="relative flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy-900 shadow-sm">
              {serviceNumber}
            </span>
            <span className="rounded-full border border-aizome-300/70 bg-white/70 px-3 py-1 text-xs font-semibold text-navy-950">
              {labels.highDifficulty}
            </span>
          </div>
          {serviceTitle && (
            <p className="relative mt-4 text-xs font-semibold text-navy-700/70">
              {serviceTitle}
            </p>
          )}
          <h3 className="relative mt-2 line-clamp-3 text-base font-bold leading-relaxed text-navy-950 md:text-lg">
            {title}
          </h3>
        </div>
        <div className={`flex flex-1 flex-col space-y-5 bg-white p-5 md:p-6 ${compact ? 'text-sm' : ''}`}>
          <BulletBlock label={labels.challenge} text={challenge} clamp={compact} />
          {!compact && (
            <>
              <BulletBlock label={labels.technicalDifficulty} text={technicalDifficulty} />
              <BulletBlock label={labels.solution} text={solution} />
              <BulletBlock label={labels.result} text={result} />
            </>
          )}
        </div>
      </div>
    </article>
  )
}
