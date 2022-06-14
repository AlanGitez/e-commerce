const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");


export const defaultCaqteogriesRequest = createAsyncThunk("SEND_ALLCATEGORIES_REQUEST", () => {
    return(
        axios.get('/api/categories')
        .then(res => res.data)
    )
});

export const defaultCategoriesReducer = createReducer([], {
    [defaultCaqteogriesRequest.fulfilled]:(state,action) => action.payload
});