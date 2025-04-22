import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  items: number;
};

const initialState: CartState = {
  items: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.items += 1;
    },
    resetCart: (state) => {
      state.items = 0;
    },
  },
});

export const { addToCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
