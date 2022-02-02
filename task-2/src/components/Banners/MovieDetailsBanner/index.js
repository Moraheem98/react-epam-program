import React from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Movie } from '../../Movie';

export const MovieDetailsBanner = () => {
	const selectedMovie = useSelector(
		(state) => state.switchBannerReducer.selectedMovie,
	);
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
