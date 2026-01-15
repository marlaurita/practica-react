import React from "react";

function SearchInput({ searchTerm, onSearchChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Buscar producto"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
