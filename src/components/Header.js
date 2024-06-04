import React from "react";

function Header({ isDarkMode, onDarkModeClick, onCategoryChange, onSearchChange, searchText }) {
  return (
    <header>
      <h1>Shopping List</h1>
      <button onClick={onDarkModeClick}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      <div>
        <select name="filter" onChange={onCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchText}
          onChange={onSearchChange} 
        />
      </div>
    </header>
  );
}

export default Header;
