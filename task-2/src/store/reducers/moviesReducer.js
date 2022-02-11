import { ALL_LOADED_MOVIES, MOVIE_FILTER, SORT_BY } from '../actionTypes';

const initialState = {
	allMovies: [],
	movieFilter: [],
	sortBy: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case ALL_LOADED_MOVIES:
			return {
				...state,
				allMovies: [...state.allMovies, action.payload],
			};
		case MOVIE_FILTER:
			return {
				...state,
				movieFilter: [...state.movieFilter, action.payload],
			};
		case SORT_BY:
			return {
				...state,
				sortBy: [...state.sortBy, action.payload],
			};
		default:
			return state;
	}
};
