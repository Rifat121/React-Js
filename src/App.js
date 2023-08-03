import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=58f8189d';

const App = () => {
    const [movies,setMovies] = useState([]);
    const [search, setSearch]= useState('')
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
        console.log(typeof(data));
    }
    


    useEffect(() => {
        searchMovies('Avengers');
    }, [])
    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                placeholder="Search for your movies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>

                {/* <img
                src="../first_app/icon/search7780.jpg"
                alt="search"
                onClick={() => {searchMovies(search)}}
                /> */}
                <button onClick={() => searchMovies(search)}>Search</button>
            </div>
                <div className="sort">
                    <h3>Sort movies by Year</h3>
                    <input className="radio" type="radio" value={"Ascending"} name="sortByYear"/>Ascending
                    <input className="radio" type="radio" value={"Descending"} name="sortByYear"/>Descending
                </div>
            {
                movies?.length > 0
                ? (
                    movies.sort((a,b) => a.Year>b.Year ? -1 : 1)
                    .map((movie,index) => (
                        <div className="container">
                            <div key={index} className="cart">
                                <MovieCard movie={movie} />
                            </div>
                        </div>
                    ))
                ) :
                (
                <div className="empty">
                    <h3>No Movies Found</h3>
                </div>
                )
            }
            
        </div>
    );
}
export default App;