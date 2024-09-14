import React, { useEffect, useState } from 'react';
import './Home.css';


function Home() {
  const [trending, setTrending] = useState([]);
  const [romance, setRomance] = useState([]);
  const [action, setAction] = useState([]);
  const [horror, setHorror] = useState([]);

  const getTrending = () => {
    fetch('https://kitsu.io/api/edge/trending/anime')
      .then((res) => res.json())
      .then((json) => setTrending(json.data));
  };

  const getRomance = () => {
    fetch('https://kitsu.io/api/edge/anime?filter[categories]=romance')
      .then((res) => res.json())
      .then((json) => setRomance(json.data));
  };

  const getAction = () => {
    fetch('https://kitsu.io/api/edge/anime?filter[categories]=action')
      .then((res) => res.json())
      .then((json) => setAction(json.data));
  };

  const getHorror = () => {
    fetch('https://kitsu.io/api/edge/anime?filter[categories]=horror')
      .then((res) => res.json())
      .then((json) => setHorror(json.data));
  };
  
  useEffect(() => {
    getTrending();
    getRomance();
    getAction();
    getHorror();
    
  }, []);

  return (
    <div className='home'>

      <h2>Trending </h2>
      <div className="carousel-container">
        {trending.slice(0, 10).map((anime) => (
          <div className="carousel-item" key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            <p className='legend'>{anime.attributes.canonicalTitle}</p>
          </div>
        ))}
      </div>

      <h2>Romance </h2>
      <div className="carousel-container">
        {romance.slice(0, 10).map((anime) => (
          <div className="carousel-item" key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            <p className='legend'>{anime.attributes.canonicalTitle}</p>
          </div>
        ))}
      </div>

     
      <h2>Action Manga</h2>
      <div className="carousel-container">
        {action.slice(0, 10).map((anime) => (
          <div className="carousel-item" key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            <p className='legend'>{anime.attributes.canonicalTitle}</p>
          </div>
        ))}
      </div>

     
      <h2>Horror</h2>
      <div className="carousel-container">
        {horror.slice(0, 10).map((anime) => (
          <div className="carousel-item" key={anime.id}>
            <img src={anime.attributes.posterImage.small} alt={anime.attributes.canonicalTitle} />
            <p className='legend'>{anime.attributes.canonicalTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
