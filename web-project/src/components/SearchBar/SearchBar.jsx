import React, { useContext } from "react";
import './searchBar.css';
import { AnimeSearchContext } from "../../context/context";


const SearchBar = () => {
    const {search, setSearch} = useContext(AnimeSearchContext)
    

    return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <SearchIcon />
        <input type='text' value={search} onChange={(e) => {setSearch(e.target.value)}} placeholder="Search"></input>
      </div>
    </div>
    )
}

export default SearchBar;