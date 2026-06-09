import { useI18n } from '../../i18n'
import { SectionTitle } from '../ui/SectionTitle'
import { ServiceStackCarousel } from './ServiceStackCarousel'

export function ServiceStackSection() {
  const { dict } = useI18n()

  return (
    <section className="mx-auto max-w-6xl px-4 md:px-6">
      <SectionTitle
        en={dict.blog.stack.en}
        ja={dict.blog.stack.ja}
        align="center"
      />
      <p className="-mt-6 mb-10 text-center text-sm leading-relaxed text-navy-700/75 md:mb-12 md:text-base">
        {dict.blog.stack.subtitle}
      </p>
      <ServiceStackCarousel />
    </section>
  )
}
