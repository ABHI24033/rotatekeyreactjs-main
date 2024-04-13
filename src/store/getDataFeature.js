
import {createSlice} from '@reduxjs/toolkit'

const sortFilter=createSlice({
    name:"filterbysort",
    initialState:{
        data:[]
    },
    reducers:{
        filterData(state,action){
            state.data=action.payload
        }
    }
})
export const {filterData} = sortFilter.actions
export default sortFilter.reducer;