const { createAction, createReducer, createAsyncThunk } = require("@reduxjs/toolkit");

export const addToCart = createAction("ADD_TO_CART");
export const deleteFromCart = createAction("DELETE_TO_CART");
// export const setTotalAmount = createAction("SET_TOTAL_AMOUNT");
// export const restoreCartFromStorage = createAsyncThunk("RESTORE_CART_STORAGE", (storateCart) => {
//   return JSON.parse(localStorage.getItem("cart"));
// })
export const clearCart = createAction("CLEAR_TO_CART");


export const cartReducer = createReducer([], {
  [addToCart]: (state, action) => [...state, action.payload],
  [deleteFromCart]: (state, action) => {
    let index = state.indexOf(action.payload);
    state.splice(index, 1);
  },
  // [restoreCartFromStorage.fulfilled]: (state, action) => [action.payload],
  // [setTotalAmount]: (state, action) => action.payload, 
  [clearCart]: (state, action) => [],

});