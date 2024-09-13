import React, { useEffect, useState } from "react";
import './KitsuData.css'; // Import CSS for styling

const KitsuData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://kitsu.io/api/edge/anime");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data); // Access 'data' field in the response
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card-container">
      {data.map((anime) => (
        <div key={anime.id} className="card">
          <img
            src={anime.attributes.posterImage?.small}
            alt={anime.attributes.canonicalTitle}
            className="card-img"
          />
          <div className="card-content">
            <h3>{anime.attributes.canonicalTitle}</h3>
            <p>{anime.attributes.synopsis.substring(0, 100)}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KitsuData;
