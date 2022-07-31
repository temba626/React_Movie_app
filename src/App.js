import React, {useEffect, useState } from "react";
import Movie from "./components/Movie";


  const FEATURED_API= "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=fe18da0a58b8d82ed9e8fdb1314f0e3a"; 
  
  const SEARCH_API= "https://api.themoviedb.org/3/search/movie?&api_key=fe18da0a58b8d82ed9e8fdb1314f0e3a&query="

  function App() {
    const [movies, setMovies] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
      getMovies(FEATURED_API);

    }, []);

    const getMovies = (API) => {
      fetch(API)
        .then((res) => res.json())
        .then((data) => {
            setMovies(data.results);
      });
    }

    const handleOnSubmit = (e) => {
      e.preventDefault();

      if(searchTerm) {
        getMovies(SEARCH_API + searchTerm);


        setSearchTerm('');
      }  
    
    };  

    const hanleOnChange = (e) => {
      setSearchTerm(e.target.value);
    }

    return (
      <>
        < div className="header">
          <h1>Movie app</h1>
          <form onSubmit={handleOnSubmit}>
          <input className="search" type="search"
          placeholder="Search your movie here..." 
          value={searchTerm}
          onChange={hanleOnChange}/>

          </form>
          
        </div>

          <div className="movie-container">
            {movies.length > 0 &&
                movies.map((movie) => <Movie key=
                {movie.id} {...movie} />)}
         </div>
         </>
    );
    
   
  }

export default App;