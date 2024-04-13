import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chatSlice",
  initialState: {
    data: null,
    phoneNumber: null,
  },
  reducers: {
    addUuid(state, { payload }) {
      // debugger;
      console.log("!!!!!chatslice payload", payload);
      state.data = payload?.data;
      state.phoneNumber = payload?.phoneNumber;
    },
  },
});
export const { addUuid } = ChatSlice.actions;
export default ChatSlice.reducer;
