import { configureStore } from "@reduxjs/toolkit";
import wishlistSliceReducer from "./wishlistSlice";
import ShowProductReducer from "./showProductSlice";
import profileImageSlice from "./profileImageSlice";
import adminLoginSlice from "./adminLoginSlice";
import trackUserSlice from "./Track/trackUserSlice";
import searchCategorySlice from "./SearchCategory/searchCategorySlice";
import activePlanSlice from "./activePlanSlice";
import adsPostingExtraFiledSlice from "./adsPostingExtraFiledSlice";
import ProductFilterSlice from "./ProductFilterSlice";
import showProductsliceValue from "./showProductsliceValue";
import signUpSlice from "./signup";
import sortFilter from "./getDataFeature";
import wishlistSlice from "./wishlistSlice";
import userIdSlice from "./userIdSlice";
import planData from "./allPlanDetails";
import userProfileData from "./UserProfileDetailsSlice";
import categoryConsSlice from "./categoryConsSlice";
import ChatSlice from "./ChatSlice";
import ToggleSearchSlice from "./ToggleSearchSlice";
const store = configureStore({
  reducer: {
    wishlist: wishlistSliceReducer,
    showProduct: ShowProductReducer,
    profile: profileImageSlice,
    adminLogin: adminLoginSlice,
    telemetry: trackUserSlice,
    searchCategorySlice: searchCategorySlice,
    activePlan: activePlanSlice,
    adsPostingExtraFiledSlice: adsPostingExtraFiledSlice,
    filter: ProductFilterSlice,
    showProductsliceValue: showProductsliceValue,
    signUpSlice: signUpSlice,
    sortFilter: sortFilter,
    wishlistSlice: wishlistSlice,
    userIdSlice: userIdSlice,
    planData: planData,
    userProfileData: userProfileData,
    categoryConsSlice: categoryConsSlice,
    ChatSlice: ChatSlice,
    ToggleSearchSlice: ToggleSearchSlice,
  },
});

export default store;
