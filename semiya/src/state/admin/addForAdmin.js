const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const addRequest = createAsyncThunk(
  "SEND_ADD_ADMIN_REQUEST",
  (newObj, thunkAPI) => {
    const {type, body} = newObj
    
    return axios.post(`/api/${type}`, body).then((res) => res.data);
  }
);

export const addRequestReducer = createReducer({}, {
  [addRequest.fulfilled]: (state, action) => action.payload,
});
