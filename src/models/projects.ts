export interface project {
  title: string
  subtitle: string
  startDate: string
  endDate: string
  slug: string
  thumbnail?: string
  stack?: {
    title: string
    image: string
  }[],
  isFeatured: boolean
}
