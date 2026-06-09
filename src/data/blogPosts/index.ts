import type { Locale } from '../../i18n/types'
import { serviceImages } from '../services'
import { getWorkCaseGroups } from '../workCases'
import { blogMetaEn } from './en'
import { blogMetaJa } from './ja'
import {
  blogCategoryKeys,
  blogCategoryLabelsEn,
  blogCategoryLabelsJa,
  type BlogPost,
} from './types'

export type { BlogCategoryKey, BlogPost } from './types'
export { blogCategoryKeys, blogCategoryLabelsJa, blogCategoryLabelsEn } from './types'

export function getBlogPosts(locale: Locale): BlogPost[] {
  const meta = locale === 'ja' ? blogMetaJa : blogMetaEn
  const labels = locale === 'ja' ? blogCategoryLabelsJa : blogCategoryLabelsEn
  const groups = getWorkCaseGroups(locale)

  return groups.map((group, index) => {
    const item = group.cases[0]
    const entry = meta[index]

    return {
      id: item.id,
      serviceNumber: group.serviceNumber,
      title: item.title,
      date: entry.date,
      category: labels[entry.categoryKey],
      categoryKey: entry.categoryKey,
      excerpt: entry.excerpt,
      image: serviceImages[index],
      description: entry.description,
    }
  })
}

export function getBlogFilters(locale: Locale): string[] {
  const all = locale === 'ja' ? 'すべて' : 'All'
  const labels = locale === 'ja' ? blogCategoryLabelsJa : blogCategoryLabelsEn
  return [all, ...blogCategoryKeys.map((key) => labels[key])]
}

export function filterBlogPosts(posts: BlogPost[], filterIdx: number): BlogPost[] {
  if (filterIdx === 0) return posts
  const key = blogCategoryKeys[filterIdx - 1]
  return posts.filter((post) => post.categoryKey === key)
}
