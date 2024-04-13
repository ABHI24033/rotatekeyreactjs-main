import { localUrl } from '../component/env';

const {createSlice} = require('@reduxjs/toolkit')

const STATUSES =Object.freeze({
    IDLE : 'Idle',
    ERROR : 'Error',
    LOADING : 'Loading',
});

const showProductSlice = createSlice({

    name : 'showproduct',

    initialState:{
        data : [],
        status : STATUSES.IDLE,
    },

    reducers : {

        setShowProduct(state,action){
            state.data = action.payload;
        },
        setStatus(state,action){
            state.status = action.payload;
        },

    }
})
export const { setShowProduct , setStatus} = showProductSlice.actions;
export default showProductSlice.reducer;

//Thunks
export function fetchShowProducts(){
    return async function fetchProductThunk(dispatch, getState){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ start: '1', end: '5' })
                  };
            const res = await  fetch(localUrl+'adsapi/allAdsByInerval',requestOptions)
            const data = await res.json();
            dispatch(setShowProduct(data));
            dispatch(setStatus(STATUSES.IDLE));
        }
        catch(err){
            dispatch(setStatus(STATUSES.ERROR));
        }

    }
}