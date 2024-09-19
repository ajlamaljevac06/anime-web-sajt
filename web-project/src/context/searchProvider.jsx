import React, { useState } from "react";
import { SearchContext } from "./searchContextt";

const SearchProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    return (

        <SearchContext.Provider value={{ search, setSearch, category, setCategory }}>
            {children}
        </SearchContext.Provider>

    )
}

export default SearchProvider;