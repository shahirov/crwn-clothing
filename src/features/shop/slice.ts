import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CollectionItem } from '../../lib/types'

interface Collection {
  id: number
  title: string
  routeName: string
  items: CollectionItem[]
}

interface Collections {
  [key: string]: Collection
}

interface ShopState {
  collections: Collections | null
  isFetching: boolean
  errorMsg: string
}

const initialState: ShopState = {
  collections: null,
  isFetching: false,
  errorMsg: ''
}

const shop = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    fetchCollectionsStart(state: ShopState) {
      state.isFetching = true
    },
    fetchCollectionsSuccess(state: ShopState, action: PayloadAction<Collections>) {
      state.isFetching = false
      state.collections = action.payload
    },
    fetchCollectionsFailure(state: ShopState, action: PayloadAction<string>) {
      state.isFetching = false
      state.errorMsg = action.payload
    }
  }
})

export const {
  fetchCollectionsStart,
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} = shop.actions

export const shopReducer = shop.reducer
