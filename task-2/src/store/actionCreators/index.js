import { SET_MOVIES, MOVIE_FILTER, SWITCH_BANNER } from '../actionTypes';

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

export const movieFilter = (filter) => {
	console.log('check', filter);
	return {
		type: MOVIE_FILTER,
		payload: filter,
	};
};
