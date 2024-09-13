import React, { useEffect, useState } from "react";
import './manga.css'; // Import CSS for styling

const Manga = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set a higher limit to fetch more manga items
        const response = await fetch("https://kitsu.io/api/edge/manga"); // Fetch 50 items
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result.data); // Access the 'data' field in the response
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
      {data.map((manga) => (
        <div key={manga.id} className="card">
          <div className="card-img-container">
            <img
              src={manga.attributes.posterImage?.small}
              alt={manga.attributes.canonicalTitle}
              className="card-img"
            />
            <div className="card-title">{manga.attributes.canonicalTitle}</div>
          </div>
          <div className="card-content">
            <p>{manga.attributes.synopsis}...</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Manga;
