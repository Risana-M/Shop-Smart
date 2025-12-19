import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import productsData from "../data/Product";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  const [sortBy, setSortBy] = useState("default");

  const isInWishlist = (id) =>
    wishlist.some((item) => item.id === id);

  const sortedProducts = [...productsData].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "popular":
        return b.rating - a.rating;
      case "newest":
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <section className="p-4">
      {/* HEADER + SORT */}
      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold text-green-800">
          🥦 FreshCo Products
        </h1>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low → High</option>
          <option value="price-high">Price: High → Low</option>
          <option value="rating">Rating</option>
          <option value="popular">Popularity</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {sortedProducts.map((item) => (
          <div
            key={item.id}
            className="relative bg-white p-3 border-2  border-white hover:border-green-400   rounded shadow hover:shadow-lg transition"
            // className="relative bg-white p-3 border rounded shadow hover:shadow-lg transition"
          >
            {/* ❤️ Wishlist */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                isInWishlist(item.id)
                  ? dispatch(removeFromWishlist(item.id))
                  : dispatch(addToWishlist(item));
              }}
              className="absolute top-2 right-2 z-10"
            >
              <span
                className={`text-2xl ${
                  isInWishlist(item.id)
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                ♥
              </span>
            </button>

            {/* 🔍 CLICKABLE AREA */}
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

            {/* 🛒 ADD TO CART */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch(addToCart(item));
              }}
              className="mt-3 w-full bg-green-600 text-white py-1 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;


