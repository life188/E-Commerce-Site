import React from "react";

export default function SearchFilter({ setQuery, setCategory }) {
  return (
    <div className="flex gap-4">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <select
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Home & Garden">Home & Garden</option>
      </select>
    </div>
  );
}
