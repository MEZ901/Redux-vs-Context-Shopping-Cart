import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../features/drawer/drawerSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
  },
});
