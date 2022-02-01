import React from 'react';

// import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';

import { Movie } from '../../Movie';

// import { switchBanner } from '../../../store/actionCreaters/actionCreators';

// const dispatch = useDispatch();
// const selectedMovie = useSelector(
// 	(state) => state.switchBannerReducer.selectedMovie,
// );
// const handleSelectedMovie = (movie) => {
// 	const action = switchBanner(movie);
// 	dispatch(action);
// };

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
