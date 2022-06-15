const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const updateRequest = createAsyncThunk(
  "SEND_UPDATE_ADMIN_REQUEST",
  (updateObj, thunkAPI) => {
    const {type, id, body} = updateObj
    
    return axios.put(`/api/${type}/update/${id}`, body).then((res) => res.data);
  }
);

export const updateRequestReducer = createReducer({}, {
  [updateRequest.fulfilled]: (state, action) => action.payload,
});
