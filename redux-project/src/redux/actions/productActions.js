import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCT,
    payload: products,
  };
};

export const selectedProduct = (product) => {
    return {
      type: ActionTypes.SELECTED_PRODUCT,
      payload: product,
    };
  };

  export const removeSelectedProduct = (product) => {
    return {
      type: ActionTypes.REMOVE_SELCTED_PRODUCT,
    };
  };
