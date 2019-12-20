import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../redux/rootReducer'

export interface CartItem {
  id: number
  name: string
  price: number
  imageUrl: string
  quantity: number
}

interface CartState {
  hidden: boolean
  cartItems: CartItem[]
}

const initialState: CartState = {
  hidden: true,
  cartItems: []
}

const addItemToCart = (state: CartState, action: PayloadAction<CartItem>) => {
  const idx = state.cartItems.findIndex((item) => item.id === action.payload.id)
  idx >= 0 ? (state.cartItems[idx].quantity += 1) : state.cartItems.push(action.payload)
}

const removeItemFromCart = (state: CartState, action: PayloadAction<CartItem>) => {
  state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
}

export const selectCart = (state: RootState) => state.cart

export const selectCartHidden = createSelector([selectCart], (cart) => cart.hidden)

export const selectCartItems = createSelector([selectCart], (cart) => cart.cartItems)

export const selectCartItemsCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, item) => total + item.quantity, 0)
)

export const selectCartItemsTotalPrice = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0)
)

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden(state: CartState) {
      state.hidden = !state.hidden
    },
    removeItem(state: CartState, action: PayloadAction<CartItem>) {
      const idx = state.cartItems.findIndex((item) => item.id === action.payload.id)
      action.payload.quantity <= 1
        ? removeItemFromCart(state, action)
        : (state.cartItems[idx].quantity -= 1)
    },
    addItem: addItemToCart,
    clearItemFromCart: removeItemFromCart
  }
})

export const { toggleCartHidden, clearItemFromCart, addItem, removeItem } = cart.actions

export default cart.reducer
