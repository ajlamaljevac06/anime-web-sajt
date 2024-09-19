import React from "react";
import FetchAnime from "./Fetch/FetchAnime";
import "./animePage.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import CategorySearch from "../../components/CategorySearch/CategorySearch";
const Anime = () => {

    return (
      <div>
        <div className="search">
        <CategorySearch/>
        <SearchBar/>
        </div>
        <FetchAnime />
      </div>
    );
  };
  
  export default Anime;