import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./Row.css";
import YouTube from 'react-youtube'; 
import movieTrailer from 'movie-trailer';
//rfce

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargeRow }) {
  //state
  const [movies, setMovies] = useState([]);

  const [trailerUrl, setTrailerUrl] = useState("");
  //A snippet of code that runs on specific conditions

  useEffect(() => {
    // if [] is blank => run onces when row loads and dont run again
    //async function
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars:{
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("");
    }
    else{
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
        console.log(trailerUrl);
      }).catch(error => {
        console.log(error);
        setTrailerUrl("");
      });
    }
  }

  return (
    <div className='row'>
      <h2> {title}</h2>
      <div className='row_posters'>
        {/** posters */}
        {movies.map(movie => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      <div>


      </div>

      {/** container -> posters */}

    </div>
  )
}

export default Row
