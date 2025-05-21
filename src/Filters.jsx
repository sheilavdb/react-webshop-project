import React, { useState, useEffect } from "react";

function SearchAndFilter({ products, onFiltered }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let filtered = products;

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    if (sortOption === "price-low-high") {
      filtered = filtered.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "price-high-low") {
      filtered = filtered.slice().sort((a, b) => b.price - a.price);
    } else if (sortOption === "rating") {
      filtered = filtered.slice().sort((a, b) => b.rating - a.rating);
    }

    onFiltered(filtered);
  }, [searchTerm, sortOption, products, onFiltered]);

  return (
    <div className="search-filter-container">
      <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="search-input" />

      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)} className="sort-select">
        <option value="">Sort By</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default SearchAndFilter;
