import {
	SET_MOVIES,
	// ADD_MOVIE,
	// DELETE_MOVIE,
	// EDIT_MOVIE,
} from '../actionTypes';

const initialState = {
	allMovies: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES:
			return {
				...state,
				allMovies: action.payload,
			};
		// case ADD_MOVIE:
		// 	return {
		// 		...state,
		// 		allMovies: [...state.allMovies, action.payload],
		// 	};
		// case DELETE_MOVIE:
		// 	return {
		// 		...state,
		// 		allMovies: state.allMovies.filter(
		// 			(movie) => movie.id !== action.payload,
		// 		),
		// 	};
		default:
			return state;
	}
};
