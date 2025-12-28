import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: []
  },
  reducers: {
    //Only adds the item if it's not already there
    addToWishlist: (state, action) => {
      // Check if the item already exists using its ID
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );
      // If it DOESN'T exist (!exists), push the new product object to the array
      if (!exists) {
        state.items.push(action.payload);
      }
    },
    removeFromWishlist: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    }
  }
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;