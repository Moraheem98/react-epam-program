import {
	ALL_MOVIE_ARRAY,
	MOVIE_FILTER,
	SORT_BY,
	SWITCH_BANNER,
} from '../actionTypes/allActionTypes';

export const allMovieArray = (array) => {
	return {
		type: ALL_MOVIE_ARRAY,
		payload: array,
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

export const switchBanner = (movie) => {
	return {
		type: SWITCH_BANNER,
		payload: movie,
	};
};
