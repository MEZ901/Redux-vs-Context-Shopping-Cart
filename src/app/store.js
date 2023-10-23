import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "../features/drawer/drawerSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    cart: cartReducer,
  },
});
