import { createSlice } from "@reduxjs/toolkit";
import { url } from "../component/env";

const planData = createSlice({
  name: "userDetails",
  initialState: {
    loading: false,
    data: [],
  },
  reducers: {
    userPlan(state, { payload }) {
      state.data = payload;
    },
    status(state, { payload }) {
      state.loading = payload;
    },
  },
});
export const { userPlan, status } = planData.actions;

export default planData.reducer;

export function getUserPlan(id) {

  return async function fetchDataApi(dispatch, getState) {
    dispatch(status(true));
    var formdata = new FormData();
    formdata.append("user", id);

    var requestOptions = {
      method: "POST",
      body: formdata,
      redirect: "follow",
    };

    fetch(url + "api/adsapi/allPricingPlanData", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        dispatch(userPlan(result));
        dispatch(status(false));
      })
      .catch((error) => {
        dispatch(userPlan("api is not working "));
        dispatch(status(false))
      }
      );
      ;

  };
}
