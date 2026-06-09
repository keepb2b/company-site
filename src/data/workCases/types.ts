export type WorkCaseStudy = {
  id: string
  title: string
  challenge: string
  technicalDifficulty: string
  solution: string
  result: string
}

export type WorkServiceGroup = {
  serviceNumber: string
  serviceTitle: string
  cases: WorkCaseStudy[]
}
