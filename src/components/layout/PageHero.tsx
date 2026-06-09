import { Breadcrumb } from './Breadcrumb'

type PageHeroVariant =
  | 'default'
  | 'strengths'
  | 'services'
  | 'pricing'
  | 'faq'
  | 'works'
  | 'blog'
  | 'staff'
  | 'company'

type PageHeroProps = {
  en: string
  ja: string
  breadcrumbs: { label: string; path?: string }[]
  variant?: PageHeroVariant
}

const PHOTO_HERO_IMAGES: Partial<Record<PageHeroVariant, string>> = {
  strengths: '/images/pages/01_erabareru_riyu.png',
  services: '/images/pages/02_service.png',
  pricing: '/images/pages/03_pricing.png',
  faq: '/images/pages/04_faq.png',
  works: '/images/pages/05_development_cases.png',
  blog: '/images/pages/07_blog.png',
  staff: '/images/pages/08_staff.png',
  company: '/images/pages/09_company_profile.png',
}

const PHOTO_WIDTH = 1672
const PHOTO_HEIGHT = 941

function PageHeroPhoto({ src }: { src: string }) {
  return (
    <div className="page-hero-photo-frame">
      <img
        src={src}
        alt=""
        className="page-hero-photo page-hero-photo--blur"
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        decoding="async"
        aria-hidden
      />
      <img
        src={src}
        alt=""
        className="page-hero-photo page-hero-photo--sharp"
        width={PHOTO_WIDTH}
        height={PHOTO_HEIGHT}
        decoding="async"
        aria-hidden
      />
      <div className="page-hero-photo-feather" aria-hidden />
    </div>
  )
}

export function PageHero({ en, ja, breadcrumbs, variant = 'default' }: PageHeroProps) {
  const photoSrc = PHOTO_HERO_IMAGES[variant]

  if (!photoSrc) {
    return (
      <section className="relative overflow-hidden border-b border-sand-200 section-band-washi-deep pt-28 pb-12 text-navy-900 md:pt-32 md:pb-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-coral-500">{en}</p>
          <h1 className="mt-3 font-display text-3xl font-bold text-navy-900 md:text-5xl">{ja}</h1>
          <div className="mt-6">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="page-hero-photo-bg relative overflow-hidden border-b border-sand-200 pt-24 pb-4 text-navy-900 md:pb-5 md:pt-28">
      <div className="page-hero-layout mx-auto max-w-6xl px-4 md:px-6">
        <div className="page-hero-body">
          <p className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-coral-500">{en}</p>
          <h1 className="mt-2 font-display text-2xl font-bold text-navy-900 sm:text-3xl md:text-3xl lg:text-4xl">{ja}</h1>
          <div className="mt-3 md:mt-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
        <PageHeroPhoto src={photoSrc} />
      </div>
    </section>
  )
}
