import React, { useState } from 'react';

import { Movie } from '../Movie';
import movieData from '../../core/data';

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
