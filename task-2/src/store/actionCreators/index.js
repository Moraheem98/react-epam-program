import {
	ALL_LOADED_MOVIES,
	MOVIE_FILTER,
	SORT_BY,
	SWITCH_BANNER,
} from '../actionTypes';

export const allLoadedMovies = (allMovies) => {
	return {
		type: ALL_LOADED_MOVIES,
		payload: allMovies,
	};
};

export const switchBanner = (movie) => {
	console.log('check', movie);
	return {
		type: SWITCH_BANNER,
		payload: movie,
	};
};

export const movieFilter = (filter) => {
	return {
		type: MOVIE_FILTER,
		payload: filter,
	};
};

export const sortBy = (sort) => {
	return {
		type: SORT_BY,
		payload: sort,
	};
};
