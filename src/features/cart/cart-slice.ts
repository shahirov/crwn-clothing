import { createSlice } from '@reduxjs/toolkit'

interface CartState {
  hidden: boolean
}

const initialState: CartState = {
  hidden: true
}

const cart = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden(state: CartState) {
      state.hidden = !state.hidden
    }
  }
})

export const { toggleCartHidden } = cart.actions

export default cart.reducer
