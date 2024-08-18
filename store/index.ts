import { configureStore } from "@reduxjs/toolkit";
import petReducer from "./petSlice";

export const store = configureStore({
  reducer: {
    pets: petReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
