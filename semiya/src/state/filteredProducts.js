const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const filteredProductRequest = createAsyncThunk(
  "SEND_FILTEREDPRODUCTS_REQUEST",
  (undefined, thunkAPI) => {
    const { wayToFilter } = thunkAPI.getState();

    const { value, type } = wayToFilter;
    return axios.get(`/api/products?${type}=${value}`).then((res) => res.data);
  }
);

export const filteredProductReducer = createReducer([], {
  [filteredProductRequest.fulfilled]: (state, action) => action.payload,
});
