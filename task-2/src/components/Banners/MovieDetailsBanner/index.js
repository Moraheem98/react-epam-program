import React from 'react';

import PropTypes from 'prop-types';

import { Movie } from '../../Movie';

export const MovieDetailsBanner = ({ selectedMovie }) => {
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
