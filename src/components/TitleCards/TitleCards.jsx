import React, { useEffect, useRef, useState, useMemo } from "react";
import './TitleCards.css';
import { Link } from "react-router-dom";

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();
  const apiKey = process.env.REACT_APP_AUTH_KEY;

  const options = useMemo(() => ({
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`
    }
  }), [apiKey]);

  const handleScroll = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    const ref = cardsRef.current;

    if (ref) {
      ref.addEventListener("wheel", handleScroll);
    }

    fetch(`https://api.themoviedb.org/3/movie/${category || "now_playing"}?api_key=${apiKey}language=en-US&page=1`, options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results||[]))
      .catch((err) => console.error(err));
  }, [category, options, apiKey]);

  return (
    <div className="titlecards">
      <h2>{title || "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`}
              alt={card.title || "Movie"}
            />
            <p>{card.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
