const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const filteredProductRequest = createAsyncThunk("SEND_FILTEREDPRODUCTS_REQUEST", (param, wayToFilter, condition) => {
    
    return(
        axios.get(`/api/products/${param}?${wayToFilter}=${condition}`)
        .then(res => res.data)
    )
});

export const filteredProductReducer = createReducer({}, {
    [filteredProductRequest.fulfilled]:(state,action) => action.payload
});