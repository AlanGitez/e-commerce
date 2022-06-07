import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { defaultProductReducer } from "./defaultProducts";
import { filteredProductReducer } from "./filteredProducts";
import { singleProductReducer } from "./singleProduct";
import { userReducer } from "./user";

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
    reducer: {
        user: userReducer,
        defaultProducts: defaultProductReducer,
        filteredProducts: filteredProductReducer,
        singleProduct: singleProductReducer,
    },
});


export default store;