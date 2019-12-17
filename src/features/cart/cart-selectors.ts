import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../app/rootReducer'

export const selectCart = (state: RootState) => state.cart

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
)
