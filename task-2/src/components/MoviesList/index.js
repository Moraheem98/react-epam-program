import React from 'react';

import PropTypes from 'prop-types';

import { movieData } from '../../core/data';

import { Movie } from '../Movie';

import './index.css';

export const MovieList = ({ setSelectedMovie, show }) => {
	const movies = movieData.map((movie) => (
		<Movie
			onClick={() => setSelectedMovie(movie)}
			show={show}
			key={movie.id}
			title={movie.title}
			year={movie.year}
			genre={movie.genre}
		/>
	));

	return <div className='movieListContainer'>{movies}</div>;
};

MovieList.propTypes = {
	setSelectedMovie: PropTypes.func,
	show: PropTypes.func,
};
