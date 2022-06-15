const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const deleteRequest = createAsyncThunk(
  "SEND_DELETE_ADMIN_REQUEST",
  (deleteObj, thunkAPI) => {
    const {type, id} = deleteObj
    
    return axios.delete(`/api/${type}/update/${id}`).then((res) => res.data);
  }
);

export const deleteRequestReducer = createReducer({}, {
  [deleteRequest.fulfilled]: (state, action) => action.payload,
});
