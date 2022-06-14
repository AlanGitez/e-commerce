const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const filteredCategoryRequest = createAsyncThunk(
  "SEND_FILTEREDCATEGORY_REQUEST",
  (undefined, thunkAPI) => {
    const wayToFilter = thunkAPI.getState().wayTofilter;
    console.log("🚀 ~ file: filteredByCategory.js ~ line 8 ~ wayToFilter", wayToFilter)

    const { value } = wayToFilter;
    return axios.get(`/api/categories/${value}`).then((res) => res.data);
  }
);

export const filteredCategoryReducer = createReducer([], {
  [filteredCategoryRequest.fulfilled]: (state, action) => action.payload,
});
