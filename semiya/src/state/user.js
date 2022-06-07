const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const loginRequest = createAsyncThunk("SEND_LOGIN_REQUEST", (data) => {
    
    return(
        axios.post("/api/login", data)
        .then(res => res.data)
    )
});

export const userReducer = createReducer({}, {
    [loginRequest.fulfilled]:(state,action) => action.payload
});