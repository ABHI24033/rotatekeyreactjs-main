import { url } from "../component/env";

const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wishlistSlice",

  initialState: { data: [] },

  reducers: {
    curentValue(state, action) {
      state.data = action.payload;
    },
    add1(state, action) {
      state.data.push(action.payload.value);
    },
    add(state, action) {
      state.data.push(action.payload.value);
    },
    remove(state, action) {
      const index = state.data.indexOf(action.payload.value);
      if (index > -1) {
        // only splice array when item is found
        state.data.splice(index, 1); // 2nd parameter means remove one item only
      }
      // state=state.filter(item => item !== action.payload.value)
      // return state.filter(item => item.id !== action.payload)
    },
    removeAllWishlist(state, action) {
      state.data = [];
    },
  },
});

export const {
  add,
  add1,
  remove,
  curentValue,
  removeAllWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;

// export const wishlistUserData=(id)=>{
//     debugger
//
//     return async function postData(dispatch,getState){
//         // dispatch(setStatus("Idle"))
//         try{
//           var requestOptions = {

//               method: "GET",
//               headers: {

//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 "Authorization":"Bearer " +localStorage.getItem("access_token")
//               },
//            //    body: JSON.stringify(value),
//              redirect: 'follow'

//             };

//             const res= await fetch(url+"api/user/profile",requestOptions)
//
//             const data= await res.json()
//             dispatch(userProfileCurrentData(data))
//             debugger
//
//             // if(data?.error){
//             //   dispatch(setStatus("error"))
//             // }
//             // dispatch(setStatus("Idle"))
//             localStorage.setItem('access_token', data.token.access)

//         }catch(error){
//
//       }

//       }

//
//  }

export const wishlistGet = (id) => {
  return async function postData(dispatch, getState) {
    try {
      var formdata = new FormData();
      formdata.append("user", id);
      formdata.append("request", "GET");
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(url + "/api/adsapi/wishlistData", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          if (result?.length == 0) {
            dispatch(curentValue(result));
          } else {
            dispatch(curentValue(JSON.parse(result[0]?.fields.wishlistData)));
          }
        })
        .catch((error) => console.log("error", error));

      // const data= await res.json()
      // dispatch(userProfileCurrentData(data))

      // if(data?.error){
      //   dispatch(setStatus("error"))
      // }
      // dispatch(setStatus("Idle"))
      // localStorage.setItem('access_token', data.token.access)
    } catch (error) {
      console.log(error, "11error");
    }
  };
};

export const postWishlit = (value, id) => {
  let value1 = value;
  return async function postData(dispatch, getState, value1) {
    try {
      var formdata = new FormData();
      formdata.append("user", id);
      formdata.append("wishlist", JSON.stringify(value));
      var requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow",
      };

      const res = await fetch(url + "api/adsapi/wishlistData", requestOptions)
        .then((response) => response.json())
        .then((result) => {})
        .catch((error) => console.log("error", error));

      // const data= await res.json()
      // dispatch(userProfileCurrentData(data))

      // if(data?.error){
      //   dispatch(setStatus("error"))
      // }
      // dispatch(setStatus("Idle"))
      // localStorage.setItem('access_token', data.token.access)
    } catch (error) {}
  };
};
