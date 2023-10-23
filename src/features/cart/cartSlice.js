import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseQuantity: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].quantity++;
      } else {
        state.products.push({
          id: action.payload.id,
          title: action.payload.title,
          image: action.payload.image,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    decreaseQuantity: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index].quantity--;
        if (state.products[index].quantity === 0) {
          state.products.splice(index, 1);
        }
      }
    },
    removeProduct: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.products.splice(index, 1);
      }
    },
  },
});

export const { increaseQuantity, decreaseQuantity, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
