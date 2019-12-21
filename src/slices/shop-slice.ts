import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../redux/rootReducer'

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

export type Collections = {
  [key: string]: Collection
  hats: Collection
  jackets: Collection
  sneakers: Collection
  womens: Collection
  mens: Collection
}

interface ShopState {
  collections: Collections | null
}

const initialState: ShopState = {
  collections: null
}

const selectShop = (state: RootState) => state.shop

const selectCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) => {
  if (collections) {
    return Object.keys(collections).map((key) => collections[key])
  }

  return []
})

export const makeSelectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) => {
    if (collections) {
      return collections[collectionUrlParam]
    }

    return null
  })

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    updateCollections(state: ShopState, action: PayloadAction<Collections>) {
      state.collections = action.payload
    }
  }
})

export const { updateCollections } = shop.actions

export default shop.reducer
