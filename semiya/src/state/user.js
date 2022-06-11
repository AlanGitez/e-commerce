const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const loginRequest = createAsyncThunk("SEND_LOGIN_REQUEST", (data) => {
  return axios.post("/api/users/login", data).then((res) => res.data);
});
export const logoutRequest = createAsyncThunk("SEND_LOGOUT_REQUEST", (data) => {
  return axios.post("/api/users/logout", data).then((res) => res.data);
});

export const setUser = createAsyncThunk("SET_USER", () => {
  //  en vez de hacer un pedido al back hacer el pedido al local storage o ambas con

  return JSON.parse(localStorage.getItem("user"));
  //     const localUser= JSON.parse(localStorage.getItem("user"))
  //   return ( (axios.get("/api/users/me")
  //    .then(response =>console.log('localuser', localUser, 'response', response.data) (localUser== response.data) &&  localUser)
  //    .catch((err)=>console.log(err))))
});

export const userReducer = createReducer({},{ 
    // LA LINEA DE ABAJO ES USN PROBLEMA, POR QUE CUANDO SE CUMPLE LA PROMESA, NO SETEA EL USER EN EL ESTADO.
    // [loginRequest.fulfilled]: (state, action) => localStorage.setItem("user", JSON.stringify(action.payload)),
    [loginRequest.fulfilled]: (state, action) => action.payload,
    [setUser.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) => action.payload == "OK" && localStorage.setItem("user", null),
  }
);
