import React, { useContext } from "react";
import './CategorySearch.css'
import { AnimeSearchContext } from "../../context/context";

const CategorySearch = () => {
    const { setCategory } = useContext(AnimeSearchContext);
    const categories = [
        { id: 1, name: 'Choose a category'},
        { id: 2, name: 'Adventure' },
        { id: 3, name: 'Action' },
        { id: 4, name: 'Fantasy' },
        { id: 5, name: 'Crime' },
        { id: 6, name: 'Drama' },
        { id: 7, name: 'Romance' },
        { id: 8, name: 'Supernatural' },
        { id: 9, name: 'Magic' },
        { id: 10, name: 'Horror' },
        
        
      ];
    
    return(
    <div className="categoryContainer">
        <select className="categorySearch" onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
    );
}

export default CategorySearch;