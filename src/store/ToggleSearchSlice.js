import { createSlice } from "@reduxjs/toolkit";
import { localUrl } from "../component/env";

const ToggleSearchSlice = createSlice({
  name: "search",
  initialState: {
    Searchloading: false,
    data: [],
    data1: [],
    searchError: false,
    searchVal: null,
  },
  reducers: {
    userSearchData: (state, { payload }) => {
      state.data = payload;
      state.data1 = payload;
    },
    searchValue: (state, action) => {
      state.searchVal = action.payload;
    },
    userSearchLoading: (state, action) => {
      state.Searchloading = action?.payload;
    },
    userSearchError: (state, action) => {
      state.searchError = action?.payload;
    },
    filterValue:(state, {payload}) => {
        
        if(payload==="priceMinMax"){
          state.data.sort((a,b) => a.fields.price - b.fields.price);
        }else if(payload==="priceMaxMin"){
          state.data.sort((a,b) => b.fields.price - a.fields.price);
          
        }else if(payload==="default"){
          state.data = [...state.data1]
        }
    },
    reset:(state)=>{
      state.data = [];
    }
    
  },
});

export const {
  userSearchData,
  userSearchLoading,
  userSearchError,
  searchValue,
  reset,
  filterValue
} = ToggleSearchSlice.actions;

export default ToggleSearchSlice.reducer;

export const searchApi = (value) => {
  return async function fetchData(dispatch) {
    dispatch(searchValue(value));
    dispatch(userSearchLoading(true));

    var formdata = new FormData();
    formdata.append("start", "0");
    formdata.append("end", "200");
    formdata.append("searchValue", value);
    try {
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(localUrl + "adsapi/SearchWeb", requestOptions);

      const result = await res.json();
      dispatch(userSearchLoading(false));
      dispatch(userSearchData(result));
    } catch (error) {
      dispatch(userSearchLoading(false));
      dispatch(userSearchError(true));
    }
    dispatch(userSearchLoading(false));
  };
};
