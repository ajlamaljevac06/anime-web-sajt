import React from "react";
import CategorySearch from "../../components/CategorySearch/CategorySearch"
import SearchBar from "../../components/SearchBar/SearchBar"
import FetchAnime from "./FetchAnime";
const Anime = () => {

    return (
      <div>
        <div className="search">
        <CategorySearch/>
        <SearchBar/>
        </div>
        <FetchAnime/>
      </div>
    );
  };
  
  export default Anime;