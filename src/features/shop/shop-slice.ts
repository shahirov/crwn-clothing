import { createSlice } from '@reduxjs/toolkit'

import SHOP_DATA from './shop-data'

export type CollectionItemProp = {
  id: number
  name: string
  imageUrl: string
  price: number
}

export type Collection = {
  id: number
  title: string
  routeName: string
  items: CollectionItemProp[]
}

interface ShopState {
  collections: {
    [key: string]: Collection
    hats: Collection
    jackets: Collection
    sneakers: Collection
    womens: Collection
    mens: Collection
  }
}

const initialState: ShopState = {
  collections: SHOP_DATA
}

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {}
})

export default shop.reducer
