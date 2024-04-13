import { localUrl } from "../component/env";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const activePlanSlice = createSlice({
    name: "activePlane",

    initialState: {
        plan: {
            category: null,
            featured_ads: null,
            ads_limit: null,
            ads_timing: null,
            top_listing: null,
            support: null,
            adsLeft: null,
        },
        postedAds: null,
    },

    reducers: {
        // setProducts(state, action) {
        //     state.data = action.payload;
        // },
        // setStatus(state, action) {
        //     state.status = action.payload;
        // },

        addActivePlan(state, action) {
            if (action.payload?.plan) {
                let obj = action.payload?.plan[0]?.fields;
                state.plan.category = obj.category;
                state.plan.featured_ads = obj.featured_ads;
                state.plan.ads_limit = obj.ads_limit;
                state.plan.ads_timing = obj.ads_timing;
                state.plan.top_listing = obj.top_listing;
                state.plan.support = obj.support;
                state.plan.adsLeft = obj.adsLeft;
            }
        },
        remove(state, action) {
            return state.delete();
        },
    },
});

export const { addActivePlan, remove } = activePlanSlice.actions;
export default activePlanSlice.reducer;

//Thunk

// export const activeRequest = createAsyncThunk('users/fetch', async () => {
//     const res = await fetch(localUrl+"adsapi/getPricingViews",requestOptions);
//     const data = await res.json();
//     return data;
// });

export function activeRequest(id) {
    return async function fetchProductThunk(dispatch, getState) {
        // dispatch(activeRequest(s?.id));
        try {
            const res = await fetch(localUrl + "adsapi/getPricingViews", {
                formdata: (id) => {
                    var form = new FormData();
                    form.append("user", id);
                },

                method: "POST",
                body: this.formdata.form,
                redirect: "follow",
            });
            const data = await res.json();

            // dispatch(activeRequest(data));
            // dispatch(setStatus(STATUSES.IDLE));
        } catch (err) {
            // dispatch(setStatus(STATUSES.ERROR));
        }
    };
}
