import { createSelector, createSlice } from "@reduxjs/toolkit";
import items from "../../../data/items";

export const productSlice = createSlice({
  name: "product",
  initialState: items,

  reducers: {
    reduceProductStock(state, action) {
      const { id } = action.payload;
      const item = state.find((x) => x.id === id);
      item.count > 0 ? item.count-- : "";
    },
    addProductToStock(state, action) {
      const { productId } = action.payload;
      state.find((x) => x.id === productId).count++;
    },
  },
});

export const selectAllProducts = (state) => state.product;

const selectProductId = (state, productId) => productId;

export const selectProductById = createSelector(
  [selectAllProducts, selectProductId],
  (products, productId) => products.find(x => x.id === productId)
);

export const { reduceProductStock, addProductToStock } = productSlice.actions;

export default productSlice.reducer;
