import React from "react";
import FetchAnime from "./FetchAnime";
import SearchBar from 'web-project/src/components/SearchBar/SearchBar.jsx' ;
import CategorySearch from 'web-project/src/components/CategorySearch/CategorySearch.jsx';
import './FetchAnime.css';

const Anime = () => {

    return (
      <div>
        <div className="search">
        <CategorySearch />
        <SearchBar />
        </div>
        <FetchAnime />
      </div>
    );
  };
  
  export default Anime;