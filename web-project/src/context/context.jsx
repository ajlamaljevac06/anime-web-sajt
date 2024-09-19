import { createContext, useState, useEffect } from 'react';


export const FavoritesContext = createContext();

export const AnimeSearchContext = createContext();

const AnimeSearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (

      <SearchContext.Provider value={{ search, setSearch, category, setCategory }}>
          {children}
      </SearchContext.Provider>

  )
}

export default AnimeSearchProvider;


export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const addFavorite = (anime) => {
    const newFavorites = [...favorites, anime];
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((anime) => anime.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (id) => {
    return favorites.some((anime) => anime.id === id);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

