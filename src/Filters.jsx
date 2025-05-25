//Filters and sorting optioin for products
import React, { useState, useEffect } from "react";

function Filters({ products, onFiltered }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    let filtered = products;

    // Search on title
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((p) => p.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }

    // Sort by option, javascript föreläsning sort function
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
      <input type="text" placeholder="Search products..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ flexGrow: 1 }} />
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="">Sort By</option>
        <option value="price-low-high">Price: Low to High</option>
        <option value="price-high-low">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}

export default Filters;
