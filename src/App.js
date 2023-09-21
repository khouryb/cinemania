import "./App.css";
import SearchBar from "./SearchBar/SearchBar";
import { useState } from "react";
import SearchResults from "./SearchResults/SearchResults";

const APIKEY = "80abee2e";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch(
      `https://omdbapi.com/?apikey=${APIKEY}&s=${query}`
    );
    const result = await response.json();
    console.log(result);
    setMovies(result.Search);
  }

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} />
      <main className="main">
        <SearchResults movies={movies} />
      </main>
    </div>
  );
}

export default App;
