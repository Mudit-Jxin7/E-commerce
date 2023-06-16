import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.push(action.payload);
      } else {
        alert("Item already exists in cart");
      }
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
