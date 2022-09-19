import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Results from "./components/Results";
import requests from "../src/util/requests";
import { useState, useEffect } from "react";

function App() {
  const [results, setResults] = useState(null);

  const fetchMovies = (url) => {
    console.log(url);
    fetch(`https://api.themoviedb.org/3${url}`).then((data) => {
      data.json().then((data) => setResults(data.results));
    });
  };

  useEffect(() => {
    function getMovies() {
      fetch(`https://api.themoviedb.org/3${requests.fetchTrending.url}`).then(
        (data) => {
          data.json().then((data) => setResults([...data.results]));
        }
      );
    }
    if (!results) {
      getMovies();
    }
  }, [results]);

  return (
    <div>
      <Header />
      <NavBar fetchMovies={fetchMovies} />
      <Results results={results} />
    </div>
  );
}

export default App;
