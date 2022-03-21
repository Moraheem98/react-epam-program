import { SET_MOVIES } from '../actionTypes';

const initialState = {
	allMovies: [],
	movieInstance: {},
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES:
			return {
				...state,
				allMovies: action.payload,
			};
		// case SET_MOVIE_INSTANCE:
		// 	return {
		// 		...state,
		// 		movieInstance: action.payload.movieInstance,
		// 	};
		default:
			return state;
	}
};
