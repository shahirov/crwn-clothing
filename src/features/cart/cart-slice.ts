import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

interface CartState {
  hidden: boolean;
  cartItems: CartItem[];
}

const initialState: CartState = {
  hidden: true,
  cartItems: []
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCartHidden(state: CartState) {
      state.hidden = !state.hidden;
    },
    addItem(state: CartState, action: PayloadAction<CartItem>) {
      const idx = state.cartItems.findIndex(
        item => item.id === action.payload.id
      );

      if (idx) {
        state.cartItems[idx].quantity += action.payload.quantity;
        state.cartItems[idx].price += action.payload.price;
      } else {
        state.cartItems.push(action.payload);
      }
    }
  }
});

export const { toggleCartHidden, addItem } = cart.actions;

export default cart.reducer;
