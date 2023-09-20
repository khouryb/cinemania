import "./App.css";
import SearchBar from "./SearchBar";
import { useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState("");

  function handleSubmit() {}

  return (
    <div className="App">
      <SearchBar query={query} setQuery={setQuery} onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
