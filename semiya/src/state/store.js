import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { cartReducer } from "./cart";
import { defaultCategoriesReducer } from "./defaultCategories";
import { defaultProductReducer } from "./defaultProducts";
import { filteredCategoryReducer } from "./filteredByCategory";
import { filteredProductReducer } from "./filteredProducts";
import { renderedProductsReducer } from "./renderedProducts";
import { singleProductReducer } from "./singleProduct";
import { totalAmountReducer } from "./totalAmount";
import { userReducer } from "./user";
import { virtualCartReducer } from "./virtualCart";
import { setWayToFilterReducer } from "./wayToFilter";
import { totalReducer } from "./totalAmount";
import { deleteRequestReducer } from "./admin/deleteForAdmin";
import { updateRequestReducer } from "./admin/updateForAdmin";
import { addRequestReducer } from "./admin/addForAdmin";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    user: userReducer,
    defaultProducts: defaultProductReducer,
    defaultCategories: defaultCategoriesReducer,
    filteredProducts: filteredProductReducer,
    filteredByCategory: filteredCategoryReducer,
    singleProduct: singleProductReducer,
    wayToFilter: setWayToFilterReducer,
    renderedProducts: renderedProductsReducer,
    cart: cartReducer,
    virtualCart: virtualCartReducer,
    totalAmount: totalAmountReducer,
    updateRequest: updateRequestReducer,
    deleteRequest: deleteRequestReducer,
    addRequest:addRequestReducer
  },
});

export default store;
