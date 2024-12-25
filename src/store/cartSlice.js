import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cartProducts = state.cartProducts.concat({
        id: action.payload.id,
        count: 1,
        data: action.payload.data,
      });
    },

    addProductByAmount: (state, action) => {
      state.cartProducts = state.cartProducts.concat({
        id: action.payload.id,
        count: action.payload.count,
        data: action.payload.data,
      });
    },

    increment: (state, action) => {
      const product = state.cartProducts.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        product.count += 1;
      }
    },

    decrement: (state, action) => {
      const productIndex = state.cartProducts.findIndex(
        (product) => product.id === action.payload.id
      );

      if (productIndex !== -1) {
        const product = state.cartProducts[productIndex];
        if (product.count > 1) {
          product.count -= 1;
        } else {
          state.cartProducts.splice(productIndex, 1);
        }
      }
    },

    removeProduct: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
  },
});

export const {
  addProduct,
  increment,
  decrement,
  removeProduct,
  addProductByAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
