import React from 'react';

import PropTypes from 'prop-types';

import { MovieCard } from '../../MovieCard';

export const MovieDetailsBanner = ({ selectedMovie }) => {
	return <MovieCard key={selectedMovie.id} movie={selectedMovie} />;
};

MovieDetailsBanner.propTypes = {
	selectedMovie: PropTypes.object,
};
