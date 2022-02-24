import {
	SET_MOVIES,
	SWITCH_BANNER,
	ADD_MOVIE,
	DELETE_MOVIE,
	RESET,
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
	console.log('checking submit', submitMovie);
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

export const resetMovie = (movie) => {
	return {
		type: RESET,
		payload: movie,
	};
};
