import { localUrl } from "../component/env";

const {createSlice,createAsyncThunk} = require("@reduxjs/toolkit");





const categoryConsSlice = createSlice({

    name : 'categoryConsSlice',

    initialState : {
       value:null
    },
    
  
    reducers:{
         // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },
        categoryCons(state, action){
           
           state.value=action.payload.value
        }

      
    }
})

export const {categoryCons} = categoryConsSlice.actions;
export default categoryConsSlice.reducer;






   