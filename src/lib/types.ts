export interface CartItem {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
}

export interface CollectionItem {
  id: number
  name: string
  imageUrl: string
  price: number
}

export interface AuthUser {
  id?: string
  email: string | null
  displayName: string
  createdAt?: number | string | undefined
  uid?: string
}
