import React, { useState } from 'react';

import { movieData } from '../../core/data';

import { Movie } from '../Movie';

import './index.css';

export const MovieList = () => {
	const movies = movieData.map((movie) => (
		<Movie
			key={movie.id}
			title={movie.title}
			year={movie.year}
			genre={movie.genre}
		/>
	));

	return <div className='movieListContainer'>{movies}</div>;
};
