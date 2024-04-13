import { url } from "../component/env";

const { createSlice } = require("@reduxjs/toolkit");

const userIdSlice = createSlice({
  name: "userIdSlice",

  initialState: {
    data: null,
  },

  reducers: {
    userProfileCurrentData(state, action) {
      state.data = action.payload;

      // postApiWishlist()
    },
    removeUserData(state, action) {
      state.data = null;
    },
  },
});

export const { userProfileCurrentData, removeUserData } = userIdSlice.actions;
export default userIdSlice.reducer;

export const UserProfile = (accessToken) => {
  return async function postData(dispatch, getState) {
    // dispatch(setStatus("Idle"))
    try {
      var requestOptions = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
        //    body: JSON.stringify(value),
        redirect: "follow",
      };

      const res = await fetch(url + "api/user/profile", requestOptions);

      const data = await res.json();
      dispatch(userProfileCurrentData(data));

      // if(data?.error){
      //   dispatch(setStatus("error"))
      // }
      // dispatch(setStatus("Idle"))
      localStorage.setItem("access_token", data.token.access);
    } catch (error) {
      console.log(error, "11error");
    }
  };
};
