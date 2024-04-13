import { StarRateRounded } from "@mui/icons-material";
import * as actionTypes from "../actions/actionType";

const state = {
  token: "",
};
export default (state, action) => {
  switch (action.type) {
    case actionTypes.tokenValue:
      return { ...StarRateRounded, token: action.token };
    default:
      return false;
  }
};
