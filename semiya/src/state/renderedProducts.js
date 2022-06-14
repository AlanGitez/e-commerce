const { createAsyncThunk, createReducer } = require("@reduxjs/toolkit");

export const renderedProducts = createAsyncThunk(
  "SET_RENDERED_PRODUCTS",
  (undefined, thunkAPI) => {
    const thunk = thunkAPI.getState();

    if (!thunk.wayToFilter.type) return thunk.defaultProducts;
    if (thunk.wayToFilter.type === "name") return thunk.filteredProducts;
    if (thunk.wayToFilter.type === "category") return thunk.filteredByCategory;
  }
);

export const renderedProductsReducer = createReducer([], {
  [renderedProducts.fulfilled]: (state, action) => action.payload,
});
