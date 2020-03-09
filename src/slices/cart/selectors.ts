import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '../../store/rootReducer'

export const selectCart = (state: RootState) => state.cart

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartItemsTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)
)
