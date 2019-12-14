import { combineReducers } from '@reduxjs/toolkit'

import userReducer from '../features/user/user-slice'
import cartReducer from '../features/cart/cart-slice'

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
