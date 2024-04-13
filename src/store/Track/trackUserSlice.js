import { TimelineDot } from "@material-ui/lab";

const { createSlice } = require("@reduxjs/toolkit");

const trackUserSlice = createSlice({
  name: "trackUser",

  initialState: {
    id: localStorage.getItem("telementryId")
      ? localStorage.getItem("telementryId")
      : Math.floor(Math.random() * 1000000000),
    views: {},
    form: {},
    product: [],
  },

  reducers: {
    add(state, action) {
      // if(action.payload?.home){
      //     state.home=action.payload.home+1
      // }
      // else if (action.payload?.contact){
      //     state.contactForm.push(action.payload.contact)
      // }
      // else if (action.payload?.about){

      //    state.about=action.payload?.about
      // }
      if (!localStorage.getItem("telementryId")) {
        localStorage.setItem("telementryId", state.id);
      }
      if (action.payload?.view) {
        if (action.payload?.view[0] in state.views) {
          state.views[action.payload?.view] =
            state.views[action.payload?.view] + 1;
        } else {
          state.views[action.payload?.view] = 1;
        }
        // let stateKey=action.payload.view[0]

        // state[stateKey].view=state[stateKey].view+1
      } else if (action.payload?.form) {
        let formValue = action.payload?.form[0] + "_" + action.payload?.form[1];
        if (formValue in state.form) {
          state.form[formValue].push(action.payload?.form[2]);
        } else {
          let formList = [];
          formList.push(action.payload?.form[2]);
          state.form[formValue] = formList;
        }
        // let stateSubKey=action.payload.form[1]

        // state[statekey][stateSubKey]=state[statekey][stateSubKey].concat(action.payload.form[2])
      } else if (action.payload?.product) {
        // let statekey=action.payload.form[0]

        state.product.push(action.payload.product[0]);
        // let stateSubKey=action.payload.form[1]

        // state[statekey][stateSubKey]=[statekey][stateSubKey].concat(action.payload.form[2])
      }

      // state.splice(0,state.length)
      // state.push(action.payload)
    },
    remove(state, action) {
      return state.delete();
    },
    refreshTele(state, action) {
      state.views = {};
      state.product = [];
      state.form = {};
    },
  },
});

export const { add, remove, refreshTele } = trackUserSlice.actions;
export default trackUserSlice.reducer;
