import React, { useEffect, useState } from "react";
import './manga.css'; 

const Manga = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [selectedMangaId, setSelectedMangaId] = useState(null); 

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

  const handleCardClick = (id) => {
  
    setSelectedMangaId(selectedMangaId === id ? null : id);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {data.map((manga) => (
        <div 
          key={manga.id} 
          className="card" 
          onClick={() => handleCardClick(manga.id)} 
        >
          <div className="card-img-container">
            <img
              src={manga.attributes.posterImage?.small}
              alt={manga.attributes.canonicalTitle}
              className="card-img"
            />
            <div className="card-title">{manga.attributes.canonicalTitle}</div>
          </div>
          {selectedMangaId === manga.id && ( 
            <div className="card-content">
              <p>{manga.attributes.synopsis}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Manga;
