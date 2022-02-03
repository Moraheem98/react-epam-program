import React from 'react';

import PropTypes from 'prop-types';

import { selectedMovieSelector } from '../../../store/selectors';

import { Movie } from '../../Movie';

export const MovieDetailsBanner = () => {
	const selectedMovie = selectedMovieSelector();
	return (
		<Movie
			key={selectedMovie.id}
			title={selectedMovie.title}
			year={selectedMovie.year}
			genre={selectedMovie.genre}
		/>
	);
};

MovieDetailsBanner.propTypes = {
	selectedMovie: PropTypes.object,
};
