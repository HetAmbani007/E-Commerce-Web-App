import { createSlice } from "@reduxjs/toolkit";
import { INITIAL_STATE } from "./CartInitial";

const cartSlice = createSlice({
  name: "CartList",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      console.log(state, "state");
      console.log(action.payload, "action");
      state.MyCart = [...state.MyCart, action.payload];
    },
    removeCart: (state, action) => {
      const updatedData = state.MyCart.filter(
        (element) => element.id !== action.payload.id
      );
      state.MyCart = updatedData;
      console.log(action.payload, "action");
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeCart } = cartSlice.actions;
