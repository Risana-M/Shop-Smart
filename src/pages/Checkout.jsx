import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../features/cartSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

function Checkout() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // 🟢 Buy Now product (if exists)
  const buyNowProduct = location.state?.product;

  const [addressSaved, setAddressSaved] = useState(false);

  // 🧠 Decide what to show
  const checkoutItems = buyNowProduct
    ? [{ ...buyNowProduct, quantity: 1 }]
    : cart;

  const total = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (checkoutItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        🧾 No items to checkout
      </div>
    );
  }

  const saveAddress = () => {
    setAddressSaved(true);
    alert("Delivery details saved ✅");
  };

  const placeOrder = () => {
    if (!addressSaved) {
      alert("Please save delivery details first 📦");
      return;
    }

    alert("Order placed successfully 🎉");

    if (!buyNowProduct) {
      dispatch(clearCart());
    }

    navigate("/");
  };

  return (
    <>
      {/* MAIN CHECKOUT SECTION */}
      <div className="p-6 grid md:grid-cols-2 gap-6">

        {/* LEFT: Delivery Details */}
        <div className="bg-white p-6 rounded shadow flex flex-col">
          <h2 className="text-xl font-semibold mb-4">
            Delivery Details
          </h2>

          <input className="w-full border p-2 mb-3" placeholder="Name" />
          <input className="w-full border p-2 mb-3" placeholder="Phone" />
          <input className="w-full border p-2 mb-3" placeholder="Address" />
          <input className="w-full border p-2 mb-3" placeholder="City" />
          <input className="w-full border p-2 mb-3" placeholder="Pincode" />

          <button
            onClick={saveAddress}
            className={`mt-auto py-2 rounded text-white ${
              addressSaved
                ? "bg-green-500 cursor-not-allowed"
                : "bg-green-700 hover:bg-green-800"
            }`}
            disabled={addressSaved}
          >
            {addressSaved ? "Address Saved ✓" : "Save Delivery Details"}
          </button>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-semibold mb-4">
            Order Summary
          </h2>

          {checkoutItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center mb-3"
            >
              <div>
                <p className="font-medium">
                  {item.name} × {item.quantity}
                </p>
                <p className="text-sm text-gray-500">
                  ₹{item.price * item.quantity}
                </p>
              </div>

              {!buyNowProduct && (
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
          ))}

          <hr className="my-4" />

          <h3 className="text-lg font-bold mb-4">
            Total: ₹{total}
          </h3>

          <button
            onClick={placeOrder}
            className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
          >
            Place Order
          </button>
        </div>
      </div>

      {/* IMAGE CARD ABOVE FOOTER */}
      <div className="px-6">
        <div className="relative overflow-hidden shadow-lg">
          <img
            src="src/assets/checkout/checkout-banner.jpg"
            alt="Fresh Organic Delivery"
            className="w-full h-64 object-cover"
          />

          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center">
            <h2 className="text-2xl font-bold mb-2">
              100% Fresh & Organic
            </h2>
            <p className="text-sm max-w-md">
              Farm-fresh vegetables delivered straight from local farmers to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;









// import { useSelector, useDispatch } from "react-redux";
// import { clearCart, removeFromCart } from "../features/cartSlice";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function Checkout() {
//   const cart = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [addressSaved, setAddressSaved] = useState(false);

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="min-h-[60vh] flex items-center justify-center">
//         🧾 No items to checkout
//       </div>
//     );
//   }

//   const saveAddress = () => {
//     setAddressSaved(true);
//     alert("Delivery details saved ✅");
//   };

//   const placeOrder = () => {
//     if (!addressSaved) {
//       alert("Please save delivery details first 📦");
//       return;
//     }
//     alert("Order placed successfully 🎉");
//     dispatch(clearCart());
//     navigate("/");
//   };

//   return (
//     <div className="p-6 grid md:grid-cols-2 gap-6">

//       {/* LEFT: Delivery Details */}
//       <div className="bg-white p-6 rounded shadow flex flex-col">
//         <h2 className="text-xl font-semibold mb-4">
//           Delivery Details
//         </h2>

//         <input className="w-full border p-2 mb-3" placeholder="Name" />
//         <input className="w-full border p-2 mb-3" placeholder="Phone" />
//         <input className="w-full border p-2 mb-3" placeholder="Address" />
//         <input className="w-full border p-2 mb-3" placeholder="City" />
//         <input className="w-full border p-2 mb-3" placeholder="Pincode" />

//         {/* SAVE BUTTON */}
//         <button
//           onClick={saveAddress}
//           className={`mt-auto py-2 rounded text-white ${
//             addressSaved
//               ? "bg-green-500 cursor-not-allowed"
//               : "bg-green-700 hover:bg-green-800"
//           }`}
//           disabled={addressSaved}
//         >
//           {addressSaved ? "Address Saved ✓" : "Save Delivery Details"}
//         </button>
        
    

     
//       </div>

//       {/* RIGHT: Order Summary */}
//       <div className="bg-white p-6 rounded shadow">
//         <h2 className="text-xl font-semibold mb-4">
//           Order Summary
//         </h2>

//         {cart.map((item) => (
//           <div
//             key={item.id}
//             className="flex justify-between items-center mb-3"
//           >
//             <div>
//               <p className="font-medium">
//                 {item.name} × {item.quantity}
//               </p>
//               <p className="text-sm text-gray-500">
//                 ₹{item.price * item.quantity}
//               </p>
//             </div>

//             {/* REMOVE BUTTON */}
//             <button
//               onClick={() => dispatch(removeFromCart(item.id))}
//               className="text-red-500 text-sm hover:underline"
//             >
//               Remove
//             </button>
//           </div>
//         ))}

//         <hr className="my-4" />

//         <h3 className="text-lg font-bold mb-4">
//           Total: ₹{total}
//         </h3>

//         <button
//           onClick={placeOrder}
//           className="w-full bg-green-700 text-white py-2 rounded hover:bg-green-800"
//         >
//           Place Order
//         </button>
//       </div>
      
//     </div>
   
//   );
// }

// export default Checkout;