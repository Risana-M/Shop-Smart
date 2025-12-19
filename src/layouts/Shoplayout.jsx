import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

function Shoplayout() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [priceRange, setPriceRange] = useState(500);

  return (
    <div className="flex gap-6 px-6">
      <Sidebar
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />

      <div className="flex-1">
        <Outlet
          context={{
            selectedCategories,
            selectedRating,
            priceRange,
          }}
        />
      </div>
    </div>
  );
}

export default Shoplayout;
