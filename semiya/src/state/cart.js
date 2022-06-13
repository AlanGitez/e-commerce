const { createAction, createReducer, createAsyncThunk } = require("@reduxjs/toolkit");



export const addToCart = createAction("ADD_TO_CART");
export const deleteFromCart = createAction("DELETE_TO_CART");
export const updateFromStorage = createAsyncThunk("UPDATE_FROM_STORAGE", () => {
  return JSON.parse(localStorage.getItem("cart")) || [];
});
export const removeOne = createAction("REMOVE_ONE");
export const clearCart = createAction("CLEAR_TO_CART");


export const cartReducer = createReducer([], {
  [updateFromStorage.fulfilled]: (state, action) => action.payload,
  [addToCart]: (state, action) => [...state, action.payload],
  [deleteFromCart]: (state, action) => state.filter(item => item.id !== action.payload.id),
  [removeOne]: (state, action) => {
    const index = state.indexOf(action.payload);
    state.splice(index, 1);
    return state;
  },
  [clearCart]: (state, action) => [],

});