// // hooks.ts
// import {
//     TypedUseSelectorHook,
//     useDispatch,
//     useSelector,
//   } from "react-redux";
//   import type { RootState, AppDispatch } from "./store"; // パス調整してね
  
//   // dispatch に型付け
//   export const useAppDispatch = () => useDispatch<AppDispatch>();
  
//   // selector に RootState をバインド（これが最重要！）
//   export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  
// src/store/hooks.ts
// import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { AppDispatch, RootState } from "./cart";
// // import type { RootState, AppDispatch } from "../store";

// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
