import { createSlice } from "@reduxjs/toolkit";
//  INITIAL STATE:  try to load the cart from the browser's LocalStorage.
// If no cart exists, start with an empty array [].
const initialState = {
  items: JSON.parse(localStorage.getItem("cart")) || []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // ADD TO CART: Handles both new items and duplicates
    addToCart: (state, action) => {
      // Check if the product already exists in the cart
      const item = state.items.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        // If it exists, just bump the quantity
        item.quantity += 1;
      } else {
        // If it's new, add it to the array and set initial quantity to 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
// Sync with LocalStorage so data isn't lost on refresh
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
//Deletes an entire product from the cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
//for quantity control
    increaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      if (item) item.quantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.items));
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        (p) => p.id === action.payload
      );
      //Don't let quantity go below 1
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
//clear  the state and the storage
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cart");
    }
  }
});
// Export the actions to be used in components via useDispatch
export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
