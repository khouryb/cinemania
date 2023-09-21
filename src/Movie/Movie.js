import React from "react";
import "./Movie.css";

export default function Movie({ movie }) {
  const { Title: title, Year: year, Poster: poster } = movie;

  return (
    <div className="movie">
      <h3>{title}</h3>
      <p>{year}</p>
      <img src={poster} alt="movie poster" />
    </div>
  );
}
