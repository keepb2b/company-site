export type FeeTableBadge = 'basic' | 'mid' | 'high'

export type FeeTableRow = {
  type: string
  badge?: FeeTableBadge
  prices: string[]
  useCases: string
}

export type FeeTableSection = {
  id: string
  title: string
  columns: string[]
  rows: FeeTableRow[]
}
