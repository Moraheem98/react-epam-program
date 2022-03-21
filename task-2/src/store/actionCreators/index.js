import { SET_MOVIE, SET_MOVIES } from '../actionTypes';

export const setMovies = (allMovies) => {
	return {
		type: SET_MOVIES,
		payload: allMovies,
	};
};

export const setMovie = (movie) => {
	return {
		type: SET_MOVIE,
		payload: movie,
	};
};
