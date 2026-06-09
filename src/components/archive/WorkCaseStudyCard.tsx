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
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-coral-500">{label}</p>
      {items.length > 1 ? (
        <ul className={`mt-3 space-y-2 text-navy-800/90 ${clamp ? 'line-clamp-4' : ''}`}>
          {items.map((item) => (
            <li key={item} className="flex gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-coral-500" />
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
      className="scroll-reveal group flex h-full overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-[0_18px_48px_rgba(30,51,71,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-aizome-300 hover:shadow-[0_26px_70px_rgba(30,51,71,0.13)]"
      data-cursor-hover
    >
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="relative overflow-hidden bg-navy-900 px-5 py-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(126,176,196,0.34),transparent_16rem)]" aria-hidden />
          <div className="relative flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-coral-500 px-3 py-1 text-xs font-bold text-white">
              {serviceNumber}
            </span>
            <span className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              {labels.highDifficulty}
            </span>
          </div>
          {serviceTitle && (
            <p className="relative mt-4 text-xs font-semibold text-aizome-100">
              {serviceTitle}
            </p>
          )}
          <h3 className="relative mt-2 line-clamp-3 text-base font-bold leading-relaxed text-white md:text-lg">
            {title}
          </h3>
        </div>
        <div className={`flex flex-1 flex-col space-y-5 p-5 ${compact ? 'text-sm' : ''}`}>
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
