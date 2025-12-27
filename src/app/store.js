import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "../features/wishlistSlice";
import cartReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice";
import filterReducer from "../features/filterSlice";

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
    cart: cartReducer,
    search: searchReducer,
       filters: filterReducer,
  }
});