// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "./Counter";
// export * from "./store/hooks";
// import { store } from "./store/store"; // 名前を変える

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });
// export default store;

// import { store } from "./store/store";
// export default store;

// export * from "./store/hooks";
// redux/store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./store/cartSlice";
import authReducer from "./store/authSlice";
import shoppingSlice from "./ShoppingSlice"

const store = configureStore({
  reducer: {
    cart: cartReducer,
    shopping: shoppingSlice,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
