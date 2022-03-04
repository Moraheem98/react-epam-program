import {
	SET_MOVIES,
	SWITCH_BANNER,
	ADD_MOVIE,
	DELETE_MOVIE,
} from '../actionTypes';

export const setMovies = (allMovies) => {
	return {
		type: SET_MOVIES,
		payload: allMovies,
	};
};

export const switchBanner = (movie) => {
	return {
		type: SWITCH_BANNER,
		payload: movie,
	};
};

export const submitMovie = (movie) => {
	return {
		type: ADD_MOVIE,
		payload: movie,
	};
};
export const removeMovie = (movieId) => {
	return {
		type: DELETE_MOVIE,
		payload: movieId,
	};
};
