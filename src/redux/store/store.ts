// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice"; // 必要に応じて他の reducer も追加

// export const store = configureStore({
//   reducer: {
//     counter: counterReducer,
//   },
// });

// // Redux の全体の state 型
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// redux/store.ts
// src/redux/store.ts
// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "./cartSlice";

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit";
// import counterSlice from "../Counter";
// import cartSlice from "./cartSlice"; // ← すでにある場合

// export const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//     cart: cartSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Counter";
import cartReducer from "./cartSlice";
// import rootReducer from "./reducers";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    cart: cartReducer,

    // reducer: rootReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
