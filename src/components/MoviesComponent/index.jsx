import React from 'react';
import { movies } from '../../components/MoviesComponent/data.json';

export const Movies = () => {
    return (
        <>
            {movies.map((movie) => (
            <p>{movie.name}</p>
        ))}
        </>
        
    );
};

