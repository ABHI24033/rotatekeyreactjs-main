import { createSlice } from "@reduxjs/toolkit";
import { localUrl, url } from "../component/env";
const active = Object.freeze({
  Idle: "IDLE",
  Loading: "Loading",
  Error: "Error",
});
const signUpSlice = createSlice({
  name: "signup",
  initialState: {
    status: "",
    data: [],
    error: "",
  },
  reducers: {
    getData(state, action) {
      state.data = action.payload;
      state.status = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { getData, setStatus } = signUpSlice.actions;
export default signUpSlice.reducer;

export const postApi = () => {
  return async function postData(dispatch, getState) {
    dispatch(setStatus("Idle"));
    try {
      var requestOptions = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
        redirect: "follow",
      };

      const res = await fetch(localUrl + "user/register/", requestOptions);
      const data = await res.json();
      if (data?.error) {
        dispatch(setStatus("error"));
      }
      dispatch(setStatus("Idle"));
      localStorage.setItem("access_token", data.token.access);
    } catch (error) {
      console.log(error, "11error");
    }
  };
};
