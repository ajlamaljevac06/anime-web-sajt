import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getAnimeDetails } from '../../api/kitsuApi'; 
import { FavoritesContext } from '../../context/context';
import './animePage.css';

const AnimePage = () => {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);
  const { addFavorite, removeFavorite, isFavorite } = useContext(FavoritesContext);

  useEffect(() => {
    const fetchAnime = async () => {
      const data = await getAnimeDetails(id);
      setAnime(data.data);
    };

    fetchAnime();
  }, [id]);

  if (!anime) {
    return <div>Loading...</div>;
  }

  return (
    <div className="anime-page">
      <h1>{anime.attributes.titles.en || anime.attributes.titles.ja_jp}</h1>
      <img
        src={anime.attributes.posterImage.large}
        alt={anime.attributes.titles.en || anime.attributes.titles.ja_jp}
      />
      <p>{anime.attributes.synopsis}</p>

      {isFavorite(anime.id) ? (
        <button onClick={() => removeFavorite(anime.id)}>Remove from Favorites</button>
      ) : (
        <button onClick={() => addFavorite(anime)}>Add to Favorites</button>
      )}
    </div>
  );
};

export default AnimePage;
