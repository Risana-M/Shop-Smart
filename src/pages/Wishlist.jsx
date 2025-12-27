

import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">♥️Your wishlist is empty</p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">My Wishlist</h1>

      {/* PRODUCT CARDS LIST */}
      <div className="space-y-4">
        {wishlist.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white shadow rounded-lg p-4 border border-gray-100"
          >
            {/* LEFT: Image + Name */}
            <div className="flex items-center gap-4 w-1/3">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h2 className="font-semibold text-gray-800">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-sm text-yellow-600">⭐ {item.rating}</p>
              </div>
            </div>

            {/* CENTER: Price */}
            <div className="w-1/3 text-center font-bold text-green-700 text-lg">
              ₹{item.price}
            </div>

            {/* RIGHT: Actions */}
            <div className="w-1/3 flex justify-end gap-3">
              <button
                onClick={() => dispatch(removeFromWishlist(item.id))}
                className="px-3 py-1 text-sm border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white transition"
              >
                Remove
              </button>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="px-4 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700 transition shadow-sm"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BACK BUTTON CONTAINER: Outside the loop, centered at bottom */}
      <div className="mt-10 flex justify-center">
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          ← Continue Shopping
        </button>
      </div>


    </div>
  );
}

export default Wishlist;