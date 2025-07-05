import React from "react";

export default function FilterSidebar({ filters, setFilters }) {
  const handleCategoryChange = (e) => {
    setFilters((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleBrandChange = (e) => {
    setFilters((prev) => ({ ...prev, brand: e.target.value }));
  };

  return (
    <div className="sticky top-24 h-fit max-h-[80vh] overflow-auto w-full max-w-xs p-4 bg-white rounded shadow">
      <h3 className="text-lg font-semibold mb-2">Filters</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Category</label>
        <select
          onChange={handleCategoryChange}
          value={filters.category}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home & Garden">Home & Garden</option>
          <option value="Accessories">Accessories</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Brand</label>
        <select
          onChange={handleBrandChange}
          value={filters.brand}
          className="w-full border p-2 rounded"
        >
          <option value="">All</option>
          <option value="SoundTech">SoundTech</option>
          <option value="EcoWear">EcoWear</option>
          <option value="HydroLife">HydroLife</option>
          <option value="CraftLeather">CraftLeather</option>
          <option value="RunFast">RunFast</option>
          <option value="TechEase">TechEase</option>
          <option value="UrbanStyle">UrbanStyle</option>
        </select>
      </div>
    </div>
  );
}
