import { createAction, createReducer } from "@reduxjs/toolkit";

export const totalAmount = createAction("TOTAL_AMOUNT");

export const totalReducer = createReducer(0, {
  [totalAmount]: (state, action) => action.payload,
});
