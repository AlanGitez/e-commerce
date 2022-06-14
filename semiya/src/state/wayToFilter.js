const { createAction, createReducer } = require("@reduxjs/toolkit");
const axios = require("axios");

export const setWayToFilter = createAction("SET_WAY_TO_FILTER");

export const setWayToFilterReducer = createReducer({}, {
    [setWayToFilter]:(state,action) => action.payload
});