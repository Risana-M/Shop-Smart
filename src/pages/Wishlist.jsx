import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../features/wishlistSlice";
import { addToCart } from "../features/cartSlice";

function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);

  if (wishlist.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-lg">
        ❤️ Your wishlist is empty
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold mb-4">My Wishlist</h1>

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white shadow rounded-lg p-4"
        >
          {/* LEFT: Image + Name */}
          <div className="flex items-center gap-4 w-1/3">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />

            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-sm">⭐ {item.rating}</p>
            </div>
          </div>

          {/* CENTER: Price */}
          <div className="w-1/3 text-center font-semibold text-green-700">
            ₹{item.price}
          </div>

          {/* RIGHT: Small Buttons (like Cart) */}
          <div className="w-1/3 flex justify-end gap-3">
            <button
              onClick={() => dispatch(removeFromWishlist(item.id))}
              className="px-3 py-1 text-sm border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
            >
              Remove
            </button>

            <button
              onClick={() => dispatch(addToCart(item))}
              className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Wishlist;