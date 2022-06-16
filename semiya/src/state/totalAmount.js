import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

export const totalAmount = createAsyncThunk(
  "SET_TOTAL_AMOUNT",
  (undefined, thunkAPI) => {
    const thunk = thunkAPI.getState();

    return thunk.cart && thunk.cart.reduce((suma, item) => {
      return (suma += item.price);
    }, 0) || 0;  
  }
);

export const totalAmountReducer = createReducer(0, {
  [totalAmount.fulfilled]: (state, action) => action.payload,
});
