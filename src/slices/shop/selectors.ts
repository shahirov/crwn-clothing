import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store/rootReducer'

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
