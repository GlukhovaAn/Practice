import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.cart = state.cart.push(action.payload);
    },
    increment: (state, action) => {
      return state.cart.map((el) => {
        if (el.id === action.payload) {
          return { ...el, count: el.count + 1 };
        } else {
          return el;
        }
      });
    },
    decrement: (state, action) => {
      return state.cart.map((el) => {
        if (el.id === action.payload) {
          return { ...el, count: el.count - 1 };
        } else {
          return el;
        }
      });
    },
    removeProduct: (state, action) => {
      return state.cart.filter((el) => el.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, increment, decrement, removeProduct } =
  cartSlice.actions;

export default cartSlice.reducer;
