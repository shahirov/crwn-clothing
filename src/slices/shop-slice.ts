import { createSlice, createSelector } from '@reduxjs/toolkit'

import { RootState } from '../redux/rootReducer'

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

const selectShop = (state: RootState) => state.shop

const selectCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((key) => collections[key])
)

export const makeSelectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam])

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {}
})

export default shop.reducer
