import React, { useEffect, useState } from "react";
import './manga.css'; 

const Manga = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedManga, setSelectedManga] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kitsu.io/api/edge/manga"); 
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

  const handleCardClick = (manga) => {
    setSelectedManga(manga);
  };

  const closeModal = () => {
    setSelectedManga(null); 
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
        {data.map((manga) => (
          <div 
            key={manga.id} 
            className="card" 
            onClick={() => handleCardClick(manga)} 
          >
            <div className="card-img-container">
              <img
                src={manga.attributes.posterImage?.small}
                alt={manga.attributes.canonicalTitle}
                className="card-img"
              />
              <div className="card-title">{manga.attributes.canonicalTitle}</div>
            </div>
          </div>
        ))}
      </div>

      {selectedManga && ( 
        <div className="modal" onClick={closeModal}> 
          <div className="modal-content" onClick={(e) => e.stopPropagation()}> 
            <img
              src={selectedManga.attributes.posterImage?.large}
              alt={selectedManga.attributes.canonicalTitle}
              className="modal-img"
            />
            <div className="modal-text">
              <div className="modal-title">{selectedManga.attributes.canonicalTitle}</div>
              <div className="modal-description">
                <p>{selectedManga.attributes.synopsis}</p>
              </div>
            </div>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Manga;
