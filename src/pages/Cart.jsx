import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty
} from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Empty cart UI
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-gray-500 text-lg">
        🛒 Your cart is empty
      </div>
    );
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 space-y-4">
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white rounded-lg shadow p-4"
        >
          {/* LEFT: Image + Name */}
          <div className="flex items-center gap-4 w-1/3">
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
            </div>
          </div>

          {/* CENTER: Price */}
          <div className="w-1/3 text-center font-semibold text-green-700">
            ₹{item.price * item.quantity}
          </div>

          {/* RIGHT: Quantity + Remove */}
          <div className="w-1/3 flex justify-end items-center gap-4">
            {/* Quantity Controls */}
            <div className="flex items-center border rounded">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                −
              </button>

              <span className="px-3 font-semibold">
                {item.quantity}
              </span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="px-4 py-1 border border-red-500 text-red-500 rounded hover:bg-red-500 hover:text-white"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {/* CART TOTAL */}
      <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow mt-6">
        <h2 className="text-xl font-semibold">
          Total: ₹{total}
        </h2>

        <button
          onClick={() => navigate("/checkout")}
          className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;