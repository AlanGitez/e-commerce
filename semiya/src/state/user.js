const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const loginRequest = createAsyncThunk("SEND_LOGIN_REQUEST", (data) => {
    
    return(
        axios.post("/api/users/login", data)
        .then(res => res.data)
    )
});

export const setUser = createAsyncThunk("SET_USER", () => {
    return (
        axios.get("/api/users/me")
        .then(response => console.log(response.data))
    )
})

export const userReducer = createReducer({}, {
    [loginRequest.fulfilled]:(state,action) => action.payload,
    [setUser.fulfilled]: (state, action) => action.payload,
});