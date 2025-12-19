import { useNavigate } from "react-router-dom";

function ProductQuickView({ product, onClose }) {
  const navigate = useNavigate();

//   const handleBuyNow = () => {
//     onClose();
//     navigate("/checkout", {
//       state: { product }, // ✅ send product
//     });
//   };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] md:w-[700px] rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-contain"
          />

          <div>
            <h2 className="text-2xl font-bold mb-2">
              {product.name}
            </h2>

            <p className="text-green-700 font-bold text-xl mb-2">
              ₹{product.price}
            </p>

            <p className="text-yellow-500 mb-4">
              ⭐ {product.rating}
            </p>

            {/* <button
              onClick={handleBuyNow}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
            >
              Buy Now
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductQuickView;




