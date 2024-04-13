import { createSlice } from "@reduxjs/toolkit";
import { localUrl } from "../component/env";

const userProfileData = createSlice({
  name: "userProfileSlice",
  initialState: {
    data: [],
    status: false,
  },
  reducers: {
    getUserProfileData: (state, { payload }) => {
      state.data = payload;
    },
    getUserProfileStatus: (state, { payload }) => {
      state.status = payload;
    },
  },
});
export const { getUserProfileData, getUserProfileStatus } =
  userProfileData.actions;

export default userProfileData.reducer;

export const userProfileDataApi = (id) => {
  return async function (dispatch, getState) {
    dispatch(getUserProfileStatus(true));
    try {
      var formdata = new FormData();
      formdata.append("idvalues", id);

      let option = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };
      const res = await fetch(localUrl + "user/updateProfileApi/", option);
      const data = await res.json();
      dispatch(getUserProfileStatus(false));
      dispatch(getUserProfileData(data));
    } catch (error) {
      dispatch(getUserProfileStatus(false));
    }
  };
};
