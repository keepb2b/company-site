import type { Locale } from '../../i18n/types'
import type { WorkServiceGroup } from './types'
import { workCaseGroupsEn } from './en'
import { workCaseGroupsJa } from './ja'

export type { WorkCaseStudy, WorkServiceGroup } from './types'

export function getWorkCaseGroups(locale: Locale): WorkServiceGroup[] {
  return locale === 'ja' ? workCaseGroupsJa : workCaseGroupsEn
}

export function flattenWorkCases(groups: WorkServiceGroup[]) {
  return groups.flatMap((group) =>
    group.cases.map((item) => ({
      ...item,
      serviceNumber: group.serviceNumber,
      serviceTitle: group.serviceTitle,
    })),
  )
}
