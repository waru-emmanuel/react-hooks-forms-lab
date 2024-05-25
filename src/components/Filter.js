import React , {useState} from "react";


function Filter({ onSearchChange, onCategoryChange }) {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (event) => {
    const searchValue = event.target.value;
    setSearchText(searchValue);
    onSearchChange(searchValue);
  };

  const handleCategoryChange = (event) => {
    onCategoryChange(event.target.value);
  };


  return (
    <div className="Filter">
      <input type="text" 
             name="search" 
             placeholder="Search..." 
             value={searchText} 
             onChange={handleSearchChange}
        />
      <select name="filter" onChange={handleCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
