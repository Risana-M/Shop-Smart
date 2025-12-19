import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cartSlice";
import {
  addToWishlist,
  removeFromWishlist,
} from "../features/wishlistSlice";
import products from "../data/Product";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const wishlist = useSelector((state) => state.wishlist.items);

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <div className="p-6">Product not found</div>;
  }

  const isInWishlist = (pid) =>
    wishlist.some((item) => item.id === pid);

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <section className="p-6 space-y-10">
      {/* 🟢 MAIN PRODUCT CARD */}
       {/* <div className= "relative bg-white p-3 border-2  border-white hover:border-green-400   rounded shadow hover:shadow-lg transition"> */}
      <div className="bg-white rounded-lg shadow p-6 grid md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-contain"
        />

        <div className="space-y-3">
          <h1 className="text-2xl font-bold">
            {product.name}
          </h1>

          <p className="text-gray-500">
            {product.category}
          </p>

          <p className="text-xl text-green-700 font-bold">
            ₹{product.price}
          </p>

          <p className="text-yellow-500">
            ⭐ {product.rating}
          </p>

          <p className="text-gray-600">
            {product.description ||
              "Fresh organic produce directly sourced from trusted local farmers."}
          </p>

          <div className="flex gap-3 pt-4">
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                isInWishlist(product.id)
                  ? dispatch(removeFromWishlist(product.id))
                  : dispatch(addToWishlist(product))
              }
              className="border px-4 py-2 rounded"
            >
              {isInWishlist(product.id)
                ? "❤️ Wishlisted"
                : "🤍 Wishlist"}
            </button>
          </div>
        </div>
      </div>

      {/* 🟢 RELATED PRODUCTS */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Related Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="relative bg-white p-3  border-2  border-white hover:border-green-400    rounded shadow hover:shadow-lg transition cursor-pointer"
            >
              {/* ❤️ Wishlist */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  isInWishlist(item.id)
                    ? dispatch(
                        removeFromWishlist(item.id)
                      )
                    : dispatch(addToWishlist(item));
                }}
                className="absolute top-2 right-2 z-10"
              >
                <span
                  className={`text-xl ${
                    isInWishlist(item.id)
                      ? "text-red-500"
                      : "text-gray-400"
                  }`}
                >
                  ♥
                </span>
              </button>

              {/* CLICK CARD */}
              <div
                onClick={() =>
                  navigate(`/product/${item.id}`)
                }
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-32 object-contain mb-2"
                />

                <p className="font-semibold text-sm">
                  {item.name}
                </p>
                <p className="text-xs text-gray-500">
                  {item.category}
                </p>

                <div className="flex justify-between mt-1">
                  <p className="text-green-700 font-bold">
                    ₹{item.price}
                  </p>
                  <p className="text-yellow-500 text-sm">
                    ⭐ {item.rating}
                  </p>
                </div>
              </div>

              {/* ADD TO CART */}
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
      </div>
    </section>
  );
}

export default ProductDetails;

