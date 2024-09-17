import React, { useState } from 'react';

const categories = [
  { id: 1, name: 'Adventure ' },
  { id: 2, name: 'Action' },
  { id: 3, name: 'Fantasy' },
  { id: 4, name: 'Crime ' },
  { id: 5, name: 'Drama' },
  { id: 6, name: 'Romance' },
  { id: 7, name: 'Supernatural' },
  { id: 8, name: 'Magic' },
  { id: 9, name: 'Horror' },
];

const SelectCategorySearchBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log(`Searching for: ${searchTerm} in category: ${selectedCategory}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SelectCategorySearchBar;