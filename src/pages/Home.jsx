import { useNavigate } from "react-router-dom";
import homeDeals from "../data/homedeals";
import HomeDealCard from "../components/HomeDealCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProductQuickView from "../components/ProductQuickView";

function Home() {
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      {/* HERO BANNER */}
      <section className="my-3 mx-4 w-[98%] h-[40vh] md:h-[60vh] bg-white rounded-md overflow-hidden relative">
        <img
          //src="src/assets/banner/freshco banner.jpg"
          src="https://img.pikbest.com/backgrounds/20241223/a-basket-of-vegetables-and-fruits-on-a-table-with-green-background_11290096.jpg!bw700"
          alt="Farm Fresh Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">
            Farm Fresh Vegetables
          </h1>
          <p className="text-lg md:text-xl mb-5 max-w-xl">
            Fresh • Organic • Healthy <br />
            Directly from local farmers
          </p>

          <Link to="/products">
            <button className="bg-green-600 px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:scale-110">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* DEAL ROW */}
      <section className="my-3 mx-4 w-[98%] flex gap-3">
        <div className="w-full md:w-[85%] bg-white rounded-md">
          <h2 className="m-3 text-2xl font-semibold text-green-800">
            🌱 Farm Fresh Deals
          </h2>

          <div className="flex overflow-x-auto gap-4 p-3">
            {homeDeals.map((item) => (
              <HomeDealCard
                key={item.id}
                item={item}
                onClick={() => setSelectedProduct(item)}
              />
            ))}
          </div>
        </div>

        <div className="w-[15%] hidden md:block">
          <img

            src="https://cdn.create.vista.com/downloads/aea8f36b-cd15-4e5b-9733-4d9b563840d5_1024.jpeg"
            alt="Offer"
            className="w-full h-full object-cover rounded-md"
          />
        </div>
      </section>

      {/* QUICK VIEW MODAL */}
      {selectedProduct && (
        <ProductQuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default Home;


