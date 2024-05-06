import { configureStore } from "@reduxjs/toolkit";

// Remember add new reducer to here
import appReducer from "./slices/appSlice";
import bookReducer from "./slices/bookSlice";
import searchReducer from "./slices/searchSlice";
import detailReducer from "./slices/detailSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
const store = configureStore({
  reducer: {
    app: appReducer,
    book: bookReducer,
    search: searchReducer,
    detail: detailReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
