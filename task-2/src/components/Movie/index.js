import React from 'react';
import './index.css';

function Movie(moviesInfo) { 
   return (
        <div className="movieContainer">
            <p>Title: {moviesInfo.title}</p>
            <p>Genre: {moviesInfo.genre}</p>
            <p>Year: {moviesInfo.year}</p>
            {/* {moviesInfo.image} */}
        </div>
    )
};

export default Movie;