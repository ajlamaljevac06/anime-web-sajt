import React, { useContext } from 'react';
import { FavoritesContext } from '../../context/context';
import './favorites.css';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);

  return (
    <div className="favorites-page">
      <h1>Your Favorite Anime</h1>
      {favorites.length === 0 ? (
        <p>You don't have any favorite anime yet.</p>
      ) : (
        <div className="anime-list">
          {favorites.map((anime) => (
            <div key={anime.id} className="anime-card">
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.titles.en || anime.attributes.titles.ja_jp}
              />
              <h3>{anime.attributes.titles.en || anime.attributes.titles.ja_jp}</h3>
              <Link to={`/AnimePage/${anime.id}`}>View Details</Link>
              <button onClick={() => removeFavorite(anime.id)}>Remove from Favorites</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
