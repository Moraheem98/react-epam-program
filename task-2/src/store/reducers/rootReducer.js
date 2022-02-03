import {
	ALL_MOVIE_ARRAY,
	MOVIE_FILTER,
	SORT_BY,
} from '../actionTypes/allActionTypes';

const initialState = {
	allMovieArray: [],
	movieFilter: [],
	sortBy: [],
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case MOVIE_FILTER:
			return {
				...state,
				movieFilter: [...state.movieFilter, action.payload],
			};
		case ALL_MOVIE_ARRAY:
			return {
				...state,
				allMovieArray: [...state.allMovieArray, action.payload],
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
