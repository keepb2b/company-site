import type { NavKey } from '../i18n/types'

export const navRoutes: { key: NavKey; path: string }[] = [
  { key: 'strengths', path: '/strengths' },
  { key: 'services', path: '/services' },
  { key: 'fee', path: '/fee' },
  { key: 'faq', path: '/faq' },
  { key: 'works', path: '/works' },
  { key: 'blog', path: '/blog' },
  { key: 'staff', path: '/staff' },
  { key: 'company', path: '/company' },
]

export const footerRoutes: { key: NavKey; path: string }[] = [
  { key: 'home', path: '/' },
  { key: 'strengths', path: '/strengths' },
  { key: 'services', path: '/services' },
  { key: 'fee', path: '/fee' },
  { key: 'works', path: '/works' },
  { key: 'blog', path: '/blog' },
  { key: 'company', path: '/company' },
]

export const achievementValues = [
  { value: 480, suffix: '+' },
  { value: 72, suffix: '+' },
  { value: 126, suffix: '+' },
] as const

export const heroTags = [
  'Shopify',
  'EC-CUBE',
  'EC-force',
  'Color Me Shop',
  'Makeshop',
  'MovableType',
  'headless CMS',
  'AI Solutions',
  'Systems',
] as const
