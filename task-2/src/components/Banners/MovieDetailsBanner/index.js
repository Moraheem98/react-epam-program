import React from 'react';

import PropTypes from 'prop-types';

import { MovieDetailsCard } from '../../MovieDetailsCard';

export const MovieDetailsBanner = ({ selectedMovie }) => {
	return <MovieDetailsCard key={selectedMovie.id} movie={selectedMovie} />;
};

MovieDetailsBanner.propTypes = {
	selectedMovie: PropTypes.object,
};
