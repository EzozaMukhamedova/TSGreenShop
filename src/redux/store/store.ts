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
