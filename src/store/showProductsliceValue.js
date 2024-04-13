import { localUrl } from "../component/env";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const showProductsliceValue = createSlice({
  name: "showProductsliceValue",

  initialState: {
    product: [],
    intervals: { start: 0, end: 8 },
  },

  reducers: {
    // setProducts(state, action) {
    //     state.data = action.payload;
    // },
    // setStatus(state, action) {
    //     state.status = action.payload;
    // },
    productValueValue(state, action) {
      state.product = action.payload.product;
      state.intervals = action.payload.intervals;
    },

    productValueRemove(state, action) {
      state.product = action.payload.product;
      state.intervals = action.payload.intervals;
    },
    newProductValue(state, action) {
      state.product = action.payload.product;
      state.intervals = action.payload.intervals;
    },
  },
});

export const {
  productValueValue,
  productValueRemove,
  newProductValue,
} = showProductsliceValue.actions;
export default showProductsliceValue.reducer;
