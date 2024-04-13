const {createSlice} = require("@reduxjs/toolkit");



const adminLoginSlice = createSlice({

    name : 'adminLogin',

    initialState : [],

    reducers:{
        add(state, action){
            state.splice(0,state.length)
            state.push(action.payload)
        },
        remove(state, action){
            return state.delete()
        }
    }
})

export const {add, remove} = adminLoginSlice.actions;
export default adminLoginSlice.reducer;