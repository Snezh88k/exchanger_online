import { configureStore } from "@reduxjs/toolkit";
import ratesReducer from "./slice/rateSlice";

export const store = configureStore({
  reducer: {
    rates: ratesReducer,
  },
});
export type AppDispatch = typeof store.dispatch;
