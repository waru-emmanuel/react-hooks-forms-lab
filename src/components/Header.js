import React from "react";

function Header({ isDarkMode, onDarkModeClick, onCategoryChange, onSearchChange }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
      <input
        type="text"
        placeholder="Search..."
        onChange={onSearchChange}
      />
    </header>
  );
}

export default Header;
