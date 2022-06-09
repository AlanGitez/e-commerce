const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const filteredProductRequest = createAsyncThunk("SEND_FILTEREDPRODUCTS_REQUEST", (condition) => {
    
    // const  thunk  = thunkAPI.getState();
    // console.log('thunk',thunk)

    return(
        axios.get(`/api/products?name=${condition}`)
        .then(res => res.data)
    )
});

export const filteredProductReducer = createReducer({}, {
    [filteredProductRequest.fulfilled]:(state,action) => action.payload
});