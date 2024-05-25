import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";


function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchTextChange(event) {
    setSearchText(event.target.value); // Define handleSearchTextChange function
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === "") return true;

    if (selectedCategory === "All") {
      return item.name.toLowerCase().includes(searchText.toLowerCase());
    }

    return item.category === selectedCategory && item.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} />
      <input
      type="text"
      placeholder="Search..."
      value={searchText}
      onChange={handleSearchTextChange}
    />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
