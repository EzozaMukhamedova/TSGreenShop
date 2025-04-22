import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./store/wishlistSlice";
import cartReducer from "./store/cartSlice";
import authReducer from "./store/authSlice";
import shoppingSlice from "./ShoppingSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    shopping: shoppingSlice,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
