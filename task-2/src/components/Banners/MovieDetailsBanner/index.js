import React from 'react';

import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';

import { selectedMovieSelector } from '../../../store/selectors';

import { Movie } from '../../Movie';

export const MovieDetailsBanner = () => {
	const selectedMovie = useSelector(selectedMovieSelector);
	return (
		<Movie
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
