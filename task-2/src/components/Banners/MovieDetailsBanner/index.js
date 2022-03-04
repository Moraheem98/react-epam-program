import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { selectedMovieSelector } from '../../../store/selectors';

import { MovieCard } from '../../MovieCard';

export const MovieDetailsBanner = () => {
	const selectedMovie = useSelector(selectedMovieSelector);
	return (
		<MovieCard
			key={selectedMovie.id}
			title={selectedMovie.title}
			release_date={selectedMovie.release_date}
			genres={selectedMovie.genres}
		/>
	);
};

MovieDetailsBanner.propTypes = {
	selectedMovie: PropTypes.object,
};
