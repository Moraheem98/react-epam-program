import { MOVIE_FILTER, SORT_BY, SWITCH_BANNER } from '../actionTypes';

export const switchBanner = (movie) => {
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
