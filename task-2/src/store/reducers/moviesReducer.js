import { SET_MOVIES, MOVIE_FILTER } from '../actionTypes';

const initialState = {
	allMovies: [],
	movieFilter: '',
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES:
			return {
				...state,
				allMovies: [...state.allMovies, action.payload],
			};
		case MOVIE_FILTER:
			return {
				...state,
				movieFilter: action.payload,
			};
		default:
			return state;
	}
};
