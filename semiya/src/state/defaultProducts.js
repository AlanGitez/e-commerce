const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const defaultProductRequest = createAsyncThunk("SEND_ALLPRODUCTS_REQUEST", () => {
    return(
        axios.get('/api/products')
        .then(res => res.data)
    )
});



export const defaultProductReducer = createReducer([], {
    [defaultProductRequest.fulfilled]:(state,action) => action.payload
});