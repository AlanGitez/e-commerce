import useLocalStorage from "../hooks/useLocalStorage";
import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const loginRequest = createAsyncThunk("SEND_LOGIN_REQUEST", (data) => {
  return axios.post("/api/users/login", data).then((res) => {
    delete res.data.password;
    delete res.data.salt;
    return res.data;
  });
});
export const logoutRequest = createAsyncThunk("SEND_LOGOUT_REQUEST", (data) => {
  return axios.post("/api/users/logout", data).then((res) => res.data);
});

export const promoteAdminRequest = createAsyncThunk(
  "SEND_PROMOTION_REQUEST",
  (data) => {
    return axios.put("/api/users/promote", data).then((res) => res.data);
  }
);
export const editUserRequest = createAsyncThunk(
  "SEND_EDIT_USER_REQUEST",
  (data) => {
    const {id, body}=data
    return axios.put(`/api/users/update/${id}`, body).then((res) => res.data);
  }
);

export const setUser = createAsyncThunk("SET_USER", () => {
  const localUser = JSON.parse(localStorage.getItem("user"));

  if (localUser != null) {
    return axios
      .get("/api/users/me")
      .then((response) =>
        localUser.id === response.data.id ? localUser : null
      )
      .catch((err) => console.log(err));
  } else {
    return null;
  }
});

export const userReducer = createReducer(
  {},
  {
    [loginRequest.fulfilled]: (state, action) =>
      localStorage.setItem("user", JSON.stringify(action.payload)),
    [setUser.fulfilled]: (state, action) => action.payload,
    [logoutRequest.fulfilled]: (state, action) =>
      action.payload === "OK" && localStorage.setItem("user",null),
    [promoteAdminRequest.fulfilled]: (state, action) =>
      localStorage.setItem("user", JSON.stringify(action.payload)),
    [editUserRequest.fulfilled]: (state, action) =>
      localStorage.setItem("user", JSON.stringify(action.payload)),
  }
);
