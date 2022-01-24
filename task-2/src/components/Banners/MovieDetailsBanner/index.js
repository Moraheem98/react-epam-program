import React from 'react';

import PropTypes from 'prop-types';

import { Movie } from '../../Movie';

export const MovieDetailsBanner = ({ selectedMovie, setSelectedMovie }) => {
	return (
		<div>
			<button onClick={() => setSelectedMovie(null)}>search again</button>
			<Movie
				key={selectedMovie.id}
				title={selectedMovie.title}
				year={selectedMovie.year}
				genre={selectedMovie.genre}
			/>
		</div>
	);
};

MovieDetailsBanner.propTypes = {
	selectedMovie: PropTypes.object,
	setSelectedMovie: PropTypes.object,
};
