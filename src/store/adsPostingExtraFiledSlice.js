const { createSlice } = require("@reduxjs/toolkit");

const adsPostingExtraFiledSlice = createSlice({
  name: "adsPostingExtraFiledSlice",

  initialState: {},

  initialState: {},

  reducers: {
    dataStoreCalling(state, action) {},
  },
});

export const {
  dataStoreCalling,
  removeDataStoreCalling,
} = adsPostingExtraFiledSlice.actions;
export default adsPostingExtraFiledSlice.reducer;
