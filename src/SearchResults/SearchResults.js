import React from "react";
import "./SearchResults.css";
import Movie from "../Movie/Movie";

export default function SearchResults({ movies }) {
  return (
    <div className="search-results">
      {movies.map((movie) => (
        <Movie movie={movie} />
      ))}
    </div>
  );
}
