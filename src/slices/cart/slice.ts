import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    clearItemFromCart: removeItemFromCart,
    clearCart(state: CartState) {
      state.cartItems = []
    }
  }
})

export const { toggleCartHidden, clearItemFromCart, addItem, removeItem, clearCart } = cart.actions

export const cartReducer = cart.reducer
