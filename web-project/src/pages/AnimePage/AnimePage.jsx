import React, { useEffect, useState } from "react";
import "../../pages/Manga/manga.css"

const AnimePage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedAnime, setSelectedAnime] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kitsu.io/api/edge/anime");  
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data); 
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (anime) => {
    setSelectedAnime(anime);
  };

  const closeModal = () => {
    setSelectedAnime(null); 
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container"> 
      <div className="card-container">
        {data.map((anime) => (
          <div 
            key={anime.id} 
            className="card" 
            onClick={() => handleCardClick(anime)} 
          >
            <div className="card-img-container">
              <img
                src={anime.attributes.posterImage?.small}
                alt={anime.attributes.canonicalTitle}
                className="card-img"
              />
              <div className="card-title">{anime.attributes.canonicalTitle}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedAnime && ( 
        <div className="modal" onClick={closeModal}> 
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
            <img
              src={selectedAnime.attributes.posterImage?.large}
              alt={selectedAnime.attributes.canonicalTitle}
              className="modal-img"
            />
            <div className="modal-text">
              <div className="modal-title">{selectedAnime.attributes.canonicalTitle}</div>
              <div className="modal-description">
                <p>{selectedAnime.attributes.synopsis}</p>
              </div>
            </div>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimePage;
