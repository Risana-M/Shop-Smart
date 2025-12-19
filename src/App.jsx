import { Routes, Route } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Shoplayout from "./layouts/Shoplayout";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Routes>

      {/* MAIN LAYOUT → Navbar + Footer */}
      <Route element={<Mainlayout />}>

        {/* PAGES WITH SIDEBAR */}
        <Route element={<Shoplayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
              <Route path="/product/:id" element={<ProductDetails />} />
        </Route>

        {/* PAGES WITHOUT SIDEBAR */}
        
        <Route path="/about" element={<About />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />

      </Route>

    </Routes>
  );
}

export default App;

