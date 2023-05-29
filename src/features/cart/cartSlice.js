import { createSelector, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],

  reducers: {
    addProductToCart(state, action) {
      const { productId } = action.payload;
      const existingProduct = state.find(
        (cartItem) => cartItem.productId === productId
      );
      if (existingProduct) {
        existingProduct.count++;
      } else {
        state.push({
          productId,
          count: 1,
        });
      }
    },
    reduceProductFromCart(state, action) {
      const { productId } = action.payload;
      const product = state.find((x) => x.productId === productId);
      if (product.count > 1) {
        product.count--;
      } else if (product.count <= 1) {
        const filtered = state.findIndex(x => x.productId === productId)
        state.splice(filtered, 1)
      }
    },
  },
});

export const selectCartItems = (state) => state.cart;

const selectCartItemId = (state, productId) => productId;

export const selectAllCartItemIds = state => state.cart.map(item => item.productId)

export const selectCountById = (state, productId) => state.cart.find(x => x.id === productId).count

export const selectCartItemById = createSelector(
  [selectCartItems, selectCartItemId],
  (items, itemId) => items.find((item) => item.productId === itemId)
);

export const { addProductToCart, reduceProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
