import React from "react";
import "./SearchBar.css";

export default function ({ query, setQuery, onSubmit }) {
  return (
    <div className="searchbar">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
