import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cartSlice";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Empty cart UI
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">🛒 Your Cart is empty</p>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Go Shopping
        </button>
      </div>
    );
  }
// DERIVED STATE: Calculating the total price based on items currently in Redux
  // .reduce() loops through the cart and adds up (price * quantity) for every item
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 space-y-4">
      {/*  LIST RENDERING: Mapping through the cart array to create a row for each item */}
      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center bg-white rounded-lg shadow p-4"
        >
          {/* LEFT: Image + Name */}
          <div className="flex items-center gap-4 w-full sm:w-1/2">
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
          <div className="w-full sm:w-1/4 text-left sm:text-centertext-center font-semibold text-green-700">
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
              className="px-4 py-1 border border-green-700 text-green-700 rounded hover:bg-green-700 hover:text-white"
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

        <button
          onClick={() => navigate("/products")}
          className="px-6 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default Cart;