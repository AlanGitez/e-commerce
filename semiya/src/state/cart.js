const { createAction, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const addToCart = createAction("ADD_TO_CART");
export const deleteFromCart = createAction("DELETE_TO_CART");
export const clearCart = createAction('CLEAR_TO_CART');

export const cartReducer = createReducer([], {
  [addToCart]: (state, action) => state.push(action.payload),
  [deleteFromCart]: (state, action) => {
    let index = state.indexOf(action.payload);
    state.splice(index, 1);
  },
  [clearCart]: (state, action) => [],
});