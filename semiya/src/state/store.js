import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { cartReducer } from "./cart";
import { defaultCategoriesReducer } from "./defaultCategories";
import { defaultProductReducer } from "./defaultProducts";
import { filteredCategoryReducer } from "./filteredByCategory";
import { filteredProductReducer } from "./filteredProducts";
import { renderedProductsReducer } from "./renderedProducts";
import { singleProductReducer } from "./singleProduct";
import { userReducer } from "./user";
import { setWayToFilterReducer } from "./wayToFilter";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    defaultProducts: defaultProductReducer,
    defaultCategories: defaultCategoriesReducer,
    filteredProducts: filteredProductReducer,
    filteredByCategory: filteredCategoryReducer,
    singleProduct: singleProductReducer,
    wayToFilter:setWayToFilterReducer,
    renderedProducts:renderedProductsReducer,
    cart: cartReducer,
    totalAmount: totalReducer,
  },
});

export default store;
