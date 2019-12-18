import { createSlice } from '@reduxjs/toolkit'

import SHOP_DATA from './shop-data'

type CollectionItem = {
  id: number
  name: string
  imageUrl: string
  price: number
}

type Collection = {
  id: number
  title: string
  routeName: string
  items: CollectionItem[]
}

interface ShopState {
  collections: {
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
