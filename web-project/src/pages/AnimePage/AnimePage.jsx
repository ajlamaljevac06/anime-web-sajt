import React from "react";
import FetchAnime from "./Fetch/FetchAnime";
import SearchBar from "../../components/SearchBar";
import CategorySearch from "../../components/CategorySearch";
import "./animePage.css";
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