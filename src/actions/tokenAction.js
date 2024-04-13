import * as actionTypes from "./actionTypes";

export const createTokenValue = (token) => {
  return {
    type: actionTypes.tokenValue,
    token: token,
  };
};
