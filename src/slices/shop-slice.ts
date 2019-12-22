import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'
import { takeLatest, put, call } from 'redux-saga/effects'

import { RootState } from '../redux/rootReducer'
import firebase from '../firebase/firebase'

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
  isFetching: boolean
  errorMsg: string
}

const initialState: ShopState = {
  collections: null,
  isFetching: false,
  errorMsg: ''
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

export default shop.reducer

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firebase.firestore.collection('collections')
    const collectionSnapshot = yield collectionRef.get()
    const collectionsMap = yield call(firebase.convertCollectionsSnapshotToMap, collectionSnapshot)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* watchFetchCollectionsAsync() {
  yield takeLatest(fetchCollectionsStart.type, fetchCollectionsAsync)
}
