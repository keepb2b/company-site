import { useI18n } from '../../i18n'

export function HeroTagList() {
  const { dict } = useI18n()

  return (
    <ul className="mt-8 flex flex-wrap gap-2">
      {dict.heroTags.map((tag) => (
        <li key={tag} data-hero="tag">
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
            {tag}
          </span>
        </li>
      ))}
    </ul>
  )
}
