import { SET_MOVIES, SWITCH_BANNER } from '../actionTypes';

export const setMovies = (allMovies) => {
	return {
		type: SET_MOVIES,
		payload: allMovies,
	};
};

export const switchSelectedMovie = (movie) => {
	return {
		type: SWITCH_BANNER,
		payload: movie,
	};
};
