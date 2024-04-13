import * as actionTypes from "../actions/actionType";
export const addToCart = (data) => {
    return {
        type: actionTypes.ADD_TO_CART,
        data: data,
    };
};
