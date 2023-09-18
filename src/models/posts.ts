export interface posts {
  title: string
  subtitle: string
  date: string
  slug: string
  thumbnail?: string
  status?: string
  tags?: string[]
}

export interface Itags {
  name: string
  isfeatured: boolean
}