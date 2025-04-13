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
  