

import { useSelector } from "react-redux";//redux hook to read data
import { Link, NavLink } from "react-router-dom";// rourt hook that add 'active' class to links
import { useDispatch } from "react-redux";//redux hook to send actions and for update
import { setSearchQuery } from "../features/searchSlice";// action, The specific function that updates  search state
import { useNavigate } from "react-router-dom";// router hook 


function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
// SELECTORS: Extracting specific numbers from the global Redux store
  const wishlistCount = useSelector( (state) => state.wishlist.items.length);
  const cartCount = useSelector((state) => state.cart.items.length);
  const searchQuery = useSelector( (state) => state.search.query );

  return (
    <>
      {/* TOP NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-green-700">
          FreshCo 🌱
        </Link>

        {/* SEARCH BAR */}
        <div className="hidden md:flex items-center bg-gray-100 px-4 py-2 rounded-md w-1/2">
          <img
            src="https://img.icons8.com/ios-glyphs/50/search.png"
            className="w-5 h-5 opacity-60"
          />
          <input
            type="text"
            placeholder="Search organic vegetables..."
            value={searchQuery}
            onChange={(e) => {
              dispatch(setSearchQuery(e.target.value));
              navigate("/products");

            }}

            className="w-full bg-transparent outline-none ml-3 text-sm"
          />
        </div>

        {/* ICONS */}
        <div className="flex  gap-6 ">
          <NavLink to="/products" className="flex flex-row items-center cursor-pointer">
            <img src="https://img.icons8.com/fluency-systems-regular/50/bag-front-view.png" className="w-6 h-6" />
            <span className="text-xs">Shop</span>
          </NavLink>

          <NavLink to="/cart" className="flex flex-row items-center cursor-pointer gap-1">
            <img src="https://img.icons8.com/parakeet-line/50/shopping-cart.png" className="w-6 h-6" />
            <span className="text-xs">Cart</span>({cartCount})

          </NavLink>

          <NavLink to="/wishlist" className="flex flex-row items-center cursor-pointer gap-1">
            <img src="https://img.icons8.com/windows/32/like--v1.png" className="w-6 h-6" />
            <span className="text-xs">Wishlist</span>({wishlistCount})
          </NavLink>
        </div>
      </nav>

      {/* SECOND NAVBAR */}
      <nav className="bg-green-800 text-white px-6 py-3 flex gap-8">
        <NavLink to="/" className="hover:text-green-300">
          Home
        </NavLink>
        <NavLink to="/products" className="hover:text-green-300">
          Items
        </NavLink>
        <NavLink to="/about" className="hover:text-green-300">
          About
        </NavLink>
        <NavLink to="/checkout" className="hover:text-green-300">
          Checkout
        </NavLink>



      </nav>
    </>
  );
}

export default Navbar;

