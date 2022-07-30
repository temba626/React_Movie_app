import React, {useEffect, useState } from "react";
import Movie from "./components/Movie";


  const FEATURED_API= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe18da0a58b8d82ed9e8fdb1314f0e3a"; 
  
  const SEARCH_API= "https://api.themoviedb.org/3/search/movie?&api_key=fe18da0a58b8d82ed9e8fdb1314f0e3a&query="

  function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      fetch(FEATURED_API)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setMovies(data.results);
        });

    }, []);

    return (
        <div className="movie-container">
          <header>
            <input className="search" type="text" placeholder="Search your movie here..." />
          </header>
            {movies.length > 0 &&
                movies.map((movie) => <Movie key={movie.
                id} {...movie} />)}
      </div>
    );
    
   
  }

export default App;