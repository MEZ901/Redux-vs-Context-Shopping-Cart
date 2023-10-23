import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    openDrawer: (state) => {
      state.open = true;
    },
    closeDrawer: (state) => {
      state.open = false;
    },
  },
});

export const { openDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
