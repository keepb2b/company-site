type SectionTitleProps = {
  en: string
  ja: string
  align?: 'left' | 'center'
  light?: boolean
}

export function SectionTitle({ en, ja, align = 'left', light = false }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-14 ${align === 'center' ? 'text-center' : ''}`}>
      <p
        className={`font-display text-xs font-semibold uppercase tracking-[0.2em] ${
          light ? 'text-coral-400' : 'text-coral-500'
        }`}
      >
        {en}
      </p>
      <h2
        className={`mt-2 font-serif text-2xl font-bold tracking-tight md:text-4xl ${
          light ? 'text-white' : 'text-navy-900'
        }`}
      >
        {ja}
      </h2>
    </div>
  )
}
