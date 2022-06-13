const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const filteredProductRequest = createAsyncThunk("SEND_FILTEREDPRODUCTS_REQUEST", (searchQuery) => {
    // const  thunk  = thunkAPI.getState();
    // console.log('thunk',thunk)
    const {value, type}=searchQuery
    return(
        axios.get(`/api/products?${type}=${value}`)
        .then(res => res.data)
    )
});

export const filteredProductReducer = createReducer([], {
    [filteredProductRequest.fulfilled]:(state,action) => action.payload
});