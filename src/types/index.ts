export interface MenuLink {
  label: string
  url: string
  uid: string
}

export interface Magazine {
  label: string
  price: number
  vat: number
  uid: string
  coverUrl: string
  coverDimensions: {
    width: number
    height: number
  }
}

export interface Pagination {
  pages: PaginationPage[]
  prev?: PaginationPage
  next?: PaginationPage
}

export interface MagazinesResponse {
  pagination?: Pagination
  products?: Magazine[]
}

export interface PaginationPage {
  index: number
  url: string
  isActive: boolean
}

export type BasketProduct = Omit<Magazine, 'coverUrl' | 'coverDimensions'>
