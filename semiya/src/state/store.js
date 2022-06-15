import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { cartReducer } from "./cart";
import { defaultProductReducer } from "./defaultProducts";
import { filteredProductReducer } from "./filteredProducts";
import { singleProductReducer } from "./singleProduct";
import { userReducer } from "./user";
import { totalReducer } from "./totalAmount";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    defaultProducts: defaultProductReducer,
    filteredProducts: filteredProductReducer,
    singleProduct: singleProductReducer,
    cart: cartReducer,
    totalAmount: totalReducer,
  },
});

export default store;
