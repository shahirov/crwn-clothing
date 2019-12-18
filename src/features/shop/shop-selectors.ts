import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../app/rootReducer'

const selectShop = (state: RootState) => state.shop

const selectCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollectionsForPreview = createSelector([selectCollections], (collections) =>
  Object.keys(collections).map((key) => collections[key])
)

export const makeSelectCollection = (collectionUrlParam: string) =>
  createSelector([selectCollections], (collections) => collections[collectionUrlParam])
