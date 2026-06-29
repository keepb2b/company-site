import type { ReasonIcon } from '../data/reasons'
import type { FeeTableSection } from '../data/feeTables.types'

export type Locale = 'ja' | 'en'

export type NavKey =
  | 'home'
  | 'strengths'
  | 'services'
  | 'fee'
  | 'faq'
  | 'works'
  | 'blog'
  | 'staff'
  | 'company'

export type FaqCategoryKey = 'all' | 'beforeOrder' | 'progress' | 'tech' | 'fee'

export type Dictionary = {
  meta: {
    siteTitle: string
    siteDescription: string
  }
  nav: Record<NavKey, string>
  common: {
    freeConsult: string
    freeConsultShort: string
    contact: string
    documentRequest: string
    downloadDocs: string
    readMore: string
    viewAll: string
    submit: string
    home: string
    breadcrumbHome: string
    phoneHours: string
    feelFree: string
    mail: string
    menu: string
    backToTop: string
    officialSite: string
    sitemap: string
    office: string
    tokyoOffice: string
    osakaOffice: string
    relatedWorks: string
    noResults: string
    category: string
    chatwork: string
  }
  cta: {
    labelEn: string
    title: string
    chatwork: string
  }
  footer: {
    seo: string
    copyright: string
  }
  home: {
    heroEyebrow: string
    heroTitle1: string
    heroTitle2: string
    heroDesc: string
    achievements: { label: string; unit: string }[]
    concerns: { title: string; subtitle: string }
    servicesPreview: { en: string; ja: string; viewAll: string }
    price: { en: string; ja: string; viewDetail: string }
    works: { en: string; ja: string; viewAll: string }
    faq: { en: string; ja: string; viewAll: string }
    blog: { en: string; ja: string; viewAll: string }
    company: { en: string; ja: string; desc: string; viewAll: string }
    nextSection: string
  }
  reasons: {
    section: { enTitle: string; jaSubtitle: string; bannerText: string; ctaLabel: string }
    page: { en: string; ja: string }
    items: {
      number: string
      title: string
      gridTitle: string
      description: string
      imageAlt: string
      icon: ReasonIcon
    }[]
  }
  concerns: {
    items: { id: string; text: string; side: 'left' | 'right' }[]
  }
  services: {
    page: { en: string; ja: string }
    items: { number: string; title: string; description: string; tags: string[] }[]
  }
  fee: {
    page: { en: string; ja: string }
    basicTitle: string
    pageFeeTitle: string
    pageTablesTitle: string
    tableBadges: { basic: string; mid: string; high: string }
    tableNotes: string[]
    tableSections: FeeTableSection[]
    notesTitle: string
    notes: string[]
    requestQuote: string
    pricing: { label: string; price: string; unit: string; note: string; prefix?: string }[]
  }
  faq: {
    page: { en: string; ja: string }
    categories: Record<FaqCategoryKey, string>
    items: { id: string; category: FaqCategoryKey; question: string; answer: string }[]
  }
  works: {
    page: { en: string; ja: string }
    label: string
    filterAll: string
    highDifficulty: string
    challenge: string
    technicalDifficulty: string
    solution: string
    result: string
  }
  blog: {
    page: { en: string; ja: string }
    stack: { en: string; ja: string; subtitle: string }
  }
  staff: {
    page: { en: string; ja: string }
    items: { id: string; name: string; role: string; specialty: string; image?: string }[]
  }
  company: {
    page: { en: string; ja: string }
    profile: { en: string; ja: string }
    executives: {
      id: string
      role: string
      roleEn: string
      name: string
      message: string
    }[]
    rows: { label: string; value: string }[]
  }
  contact: {
    page: { en: string; ja: string }
    company: string
    name: string
    email: string
    message: string
    success: string
  }
  testimonials: {
    section: { en: string; ja: string }
    items: { id: string; quote: string; author: string; role: string; initials: string; avatarFrom: string; avatarTo: string }[]
  }
  chatwork: {
    title: string
    subtitle: string
    signup: string
    alreadySignedUp: string
    login: string
    publicProfile: string
    name: string
    id: string
    basicInfo: string
    organization: string
    orgName: string
    urlLabel: string
    url: string
    addressLabel: string
    address: string
    bio: string
    bioText: string
  }
  heroTags: string[]
}
