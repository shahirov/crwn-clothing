import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../app/rootReducer'

const selectShop = (state: RootState) => state.shop

const selectCollections = createSelector([selectShop], (shop) => shop.collections)

export const selectCollectionsItems = createSelector([selectCollections], (shopData) =>
  Object.values(shopData)
)
