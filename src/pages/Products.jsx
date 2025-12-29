


import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import productsData from "../data/Product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);
  const searchQuery = useSelector((state) => state.search.query);

  //  FILTER STATES
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState(1000); // Increased max default
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  //  FILTERING LOGIC
  const filteredProducts = productsData.filter((item) => {
    // Search Filter
    if (
      searchQuery &&
      !item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !item.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Category Filter
    if (selectedCategories.length > 0 && !selectedCategories.includes(item.category)) {
      return false;
    }

    // Rating Filter (Matches products with rating >= selected)
    if (selectedRating && item.rating < selectedRating) {
      return false;
    }

    // Price Filter
    if (item.price > priceRange) {
      return false;
    }

    // Tags Filter (Assuming your product data has a 'tags' array)
    if (selectedTags.length > 0 && !item.tags?.some(tag => selectedTags.includes(tag))) {
      return false;
    }

    return true;
  });

  //  SORTING LOGIC
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low": return a.price - b.price;
      case "price-high": return b.price - a.price;
      case "rating": return b.rating - a.rating;
      case "newest": return b.id - a.id;
      default: return 0;
    }
  });

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* <div className="flex flex-col md:flex-row gap-6 p-6 bg-gray-50 min-h-screen"> */}
      {/* SIDEBAR COMPONENT */}

      <Sidebar
        selectedCategories={selectedCategories}  // Is this spelled right?
        setSelectedCategories={setSelectedCategories}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        selectedTags={selectedTags}
        setSelectedTags={setSelectedTags}
      />

      {/* MAIN CONTENT */}
      <section className="flex-1">
        {/* HEADER + SORT */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h1 className="text-3xl font-bold text-green-800">🥦 FreshCo Products</h1>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border-2 border-green-600 text-green-800 px-4 py-2 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 font-medium cursor-pointer"

          >


            <option value="default" className="text-gray-700">Sort By: Featured</option>
            <option value="price-low" className="text-gray-700">Price: Low to High</option>
            <option value="price-high" className="text-gray-700">Price: High to Low</option>
            <option value="rating" className="text-gray-700">Top Rated</option>
            <option value="newest" className="text-gray-700">New Arrivals</option>
          </select>
        </div>

        {/* NO RESULTS */}
        {sortedProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No products found matching your filters 🔍</p>
            <button
              onClick={() => { setSelectedCategories([]); setPriceRange(1000); setSelectedRating(null); setSelectedTags([]) }}
              className="mt-4 text-green-600 font-semibold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          /* PRODUCTS GRID */
          <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {sortedProducts.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white p-4 border border-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:border-green-400 transition-all duration-300"
              >
                {/*  Wishlist */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    isInWishlist(item.id)
                      ? dispatch(removeFromWishlist(item.id))
                      : dispatch(addToWishlist(item));
                  }}
                  className="absolute top-2 right-2 z-10 p-1"
                >
                  <span
                    className={`text-4xl ${isInWishlist(item.id)
                        ? "text-red-500 "
                        : "text-gray-400"
                      }`}
                  >
                    ♥
                  </span>
                </button>

                {/*  CLICKABLE AREA */}
                <div
                  onClick={() => navigate(`/product/${item.id}`)}
                  className="cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 object-contain mb-2"
                  />

                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.category}</p>

                  <div className="flex justify-between items-center mt-1">
                    <p className="text-green-700 font-bold">
                      ₹{item.price}
                    </p>
                    <p className="text-yellow-500 text-sm">
                      ⭐ {item.rating}
                    </p>
                  </div>

                  <p className="text-xs text-gray-400 mt-1">
                    {item.freshness}
                  </p>
                </div>


                {/*  ADD TO CART */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(addToCart(item));
                  }}
                  className="mt-4 w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition shadow-md active:scale-95"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Products;