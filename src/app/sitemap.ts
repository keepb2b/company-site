import type { MetadataRoute } from 'next'
import { seoRoutes, siteUrl } from '../data/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return seoRoutes.map((route) => ({
    url: `${siteUrl}${route === '/' ? '' : route}`,
    lastModified: now,
    changeFrequency: route === '/' ? 'weekly' : 'monthly',
    priority: route === '/' ? 1 : route === '/company' ? 0.9 : 0.7,
  }))
}

