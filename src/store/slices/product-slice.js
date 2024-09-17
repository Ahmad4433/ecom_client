import { createTheme } from "@mui/material";
import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    singleProduct: {},
  },
  reducers: {
    setSingleproduct(state, action) {
      state.singleProduct = action.payload;
    },
  },
});

export const productActions = productSlice.actions;
export default productSlice;
