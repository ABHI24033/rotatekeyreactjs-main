const { createSlice } = require("@reduxjs/toolkit");

const ProductFilterSlice = createSlice({
    name: "Filter",

    initialState: {
        filter: null,
    },

    reducers: {
        getExtraField(state, action) {
            state.filter = action.payload;

            // state.Filter.push(action.payload)
        },
        removeFiled(state, action) {
            state.filter = null;
            // return state.Filter(item => item.id !== action.payload.id)
        },
        removeKeyPair(state, action) {
            let value = action.payload;

            if (action.payload.extra) {
                delete state.filter.extrafiled[value.extra];
            } else {
                delete state.filter[value];
            }

            // return state.Filter(item => item.id !== action.payload.id)
        },
    },
});

export const { getExtraField, removeFiled, removeKeyPair } =
    ProductFilterSlice.actions;
export default ProductFilterSlice.reducer;
