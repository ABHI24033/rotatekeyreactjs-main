const {createSlice} = require("@reduxjs/toolkit");



const searchCategorySlice = createSlice({

    name : 'SearchCategory',

    initialState : {
        search:null,subcategory:null,location:null,minPrice:null,maxPrice:null,category:null
    },

    reducers:{
        addSearchData(state, action){
            
           
            state.search=action.payload.searchValue
            state.category=action.payload.category
            state.subcategory=action.payload.subCategoryValue
            state.location=action.payload.locationDataMain
            state.minPrice=action.payload.pricemin
            state.maxPrice=action.payload.pricemax
            console.log("props Category",state,action.payload)
        },
        removeSearchData(state, action){
            state.search=action.payload.search
            state.category=action.payload.category
            state.subcategory=action.payload.subcategory
            state.location=action.payload.location
            state.minPrice=action.payload.minPrice
            state.maxPrice=action.payload.maxPrice
            console.log("props remove search data",state,action.payload)
           
        }
    }
})

export const {addSearchData, removeSearchData} = searchCategorySlice.actions;
export default searchCategorySlice.reducer;