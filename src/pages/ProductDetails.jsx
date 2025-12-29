import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import products from "../data/Product";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = products.find(//Find the product that matches the URL ID
    (p) => p.id === Number(id)
  );
//If  types a wrong ID in the URL
  if (!product) {
    return (
      <div className="p-6 text-center text-gray-500">
        Product not found
      </div>
    );
  }

  const relatedProducts = products.filter(
    (p) =>
      p.category === product.category &&
      p.id !== product.id
  );

  return (
    <section className="p-6 space-y-10">

      {/*  MAIN PRODUCT CARD */}
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

          <button
            onClick={() => dispatch(addToCart(product))}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Add to Cart
          </button>

          <button onClick={() => navigate("/products")}
            className=" ml-6 mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
            Back
          </button>

        </div>
      </div>

      {/* RELATED PRODUCTS */}
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Related Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {relatedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-3 border-2 border-white hover:border-green-400 rounded shadow hover:shadow-lg transition cursor-pointer"
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


