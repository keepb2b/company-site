import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n'
import type { Dictionary } from '../../i18n/types'

type ServiceItem = Dictionary['services']['items'][number]

type Props = ServiceItem & { reverse?: boolean; imageSrc?: string }

export function NumberedServiceBlock({ number, title, description, tags, reverse, imageSrc }: Props) {
  const { dict } = useI18n()

  return (
    <article className={`numbered-service-block scroll-reveal ${reverse ? 'numbered-service-block--reverse' : ''}`}>
      <div className="service-image-stage">
        <div className={`service-image-card ${reverse ? 'service-image-card--reverse' : ''}`}>
          <div className="service-image-engrave service-image-engrave--lead" aria-hidden />
          <div className="service-image-engrave service-image-engrave--trail" aria-hidden />
          <div className="service-image-inner group aspect-[4/3]">
            {imageSrc ? (
              <img
                src={imageSrc}
                alt={title}
                className="absolute inset-0 h-full w-full object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-105 md:p-8"
                loading="lazy"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center font-display text-5xl font-bold text-navy-900/10">
                {number}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="numbered-service-body">
        <p className="numbered-service-kicker"><span aria-hidden>/</span> SERVICE {number}</p>
        <h3 className="numbered-service-title">{title}</h3>
        {tags[0] ? <p className="numbered-service-subtitle">&lt; {tags[0]} &gt;</p> : null}
        <p className="numbered-service-desc">{description}</p>

        <ul className="numbered-service-tags">
          {tags.map((tag) => (
            <li key={tag}>
              <span>{tag}</span>
            </li>
          ))}
        </ul>

        <Link to="/works" className="numbered-service-link">
          {dict.common.relatedWorks}
          <span aria-hidden />
        </Link>
      </div>
    </article>
  )
}
