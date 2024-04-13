const {createSlice} = require("@reduxjs/toolkit");



const profileImageSlice = createSlice({

    name : 'profile',

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

export const {add, remove} = profileImageSlice.actions;
export default profileImageSlice.reducer;