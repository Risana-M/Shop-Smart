import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistSlice";
import cartReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    search: searchReducer,
  }
});