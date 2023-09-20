import React from "react";

export default function SearchBar({ query, setQuery, onSubmit }) {
  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.value)}
      />
      <button onSubmit={onSubmit}>Submit</button>
    </div>
  );
}
