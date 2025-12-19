






function Sidebar({
  selectedCategories = [],
  setSelectedCategories = () => {},
  selectedRating = null,
  setSelectedRating = () => {},
  priceRange = 200,
  setPriceRange = () => {},
  selectedTags = [],
  setSelectedTags = () => {},
}) {
  const categories = [
    "Vegetables",
    "Fruits",
    "Leafy Greens",
    "Fresh Herbs",
    "Seasonal Veggies",
    "Organic Fruits",
    "Root Veggies",
  ];

  const tags = [
    "Organic",
    "Farm Fresh",
    "Seasonal",
    "Best Seller",
    "Chemical Free",
  ];

  const toggleCategory = (cat) => {
    setSelectedCategories(
      selectedCategories.includes(cat)
        ? selectedCategories.filter((c) => c !== cat)
        : [...selectedCategories, cat]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags(
      selectedTags.includes(tag)
        ? selectedTags.filter((t) => t !== tag)
        : [...selectedTags, tag]
    );
  };

  return (
    <aside className="w-72 bg-white p-5 rounded-lg shadow-sm mt-4 text-sm">

      {/* FILTER HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button className="text-green-600 text-sm hover:underline">
          Clear
        </button>
      </div>

      {/* CATEGORY */}
      <div className="border-b pb-4 mb-4">
        <h3 className="font-semibold mb-3">All Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                  className="accent-green-600"
                />
                <span>{cat}</span>
              </div>
              <span className="text-gray-400 text-xs">(12)</span>
            </label>
          ))}
        </div>
      </div>

      {/* PRICE */}
      <div className="border-b pb-4 mb-4">
        <h3 className="font-semibold mb-2">Price</h3>
        <input
          type="range"
          min="10"
          max="200"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-green-600"
        />
        <div className="flex justify-between text-gray-500 text-xs mt-1">
          <span>₹10</span>
          <span>₹{priceRange}</span>
        </div>
      </div>

      {/* RATING */}
      <div className="border-b pb-4 mb-4">
        <h3 className="font-semibold mb-2">Rating</h3>
        <div className="space-y-2">
          {[5, 4, 3].map((r) => (
            <label key={r} className="flex items-center gap-2">
              <input
                type="radio"
                checked={selectedRating === r}
                onChange={() => setSelectedRating(r)}
                className="accent-green-600"
              />
              <span className="text-yellow-500">
                {"⭐".repeat(r)}
              </span>
              <span className="text-gray-400 text-xs">& up</span>
            </label>
          ))}
        </div>
      </div>

      {/* TAGS */}
      <div className="border-b pb-4 mb-4">
        <h3 className="font-semibold mb-3">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded-full border text-xs transition
                ${
                  selectedTags.includes(tag)
                    ? "bg-green-600 text-white border-green-600"
                    : "hover:bg-green-100 text-gray-600"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* OFFER BANNER IMAGE */}
      {/* <div className="mb-4">
        <img
          src="src/assets/sidebar/offer-banner.jpg.avif"
          alt="Offer"
          className=" w-full cursor-pointer hover:opacity-90 transition"
        />
      </div> */}

      {/* SMALL PROMO IMAGE */}
      {/* <div>
        <img
          src="src/assets/sidebar/promo-small.jpg.jpg"
          alt="Promo"
          className=" w-full cursor-pointer hover:opacity-90 transition"
        />
      </div>  */}

    </aside>
  );
}

export default Sidebar;

