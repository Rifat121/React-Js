import React from "react";
import "./App.css";

 const MovieCard = ({movie}) => {
    return (
    <div className="movie">
        <div className="year">
            <p>{movie.Year}</p>
        </div>
        <div className="poster">
            <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} height={200} alt={movie.Title} />
        </div>
        <div className="type">
            <span>Type - {movie.Type}</span>
            <h3>{movie.Title}</h3>
        </div>
    </div>
    )
 }
 export default MovieCard