const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const myPurchasesRequest = createAsyncThunk(
  "SEND_myPurchases_REQUEST",
  (undefined, thunkAPI) => {
    const {user} = thunkAPI.getState()
    console.log("🚀 ~ file: myPurchases.js ~ line 8 ~ thunkAPI.getState()", thunkAPI.getState())
    const { id } = user;
    return axios.get(`/api/purchases/${id}`).then((res) => res.data);
  }
);

export const myPurchasesReducer = createReducer([], {
  [myPurchasesRequest.fulfilled]: (state, action) => action.payload,
});
