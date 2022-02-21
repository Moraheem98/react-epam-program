import { SET_MOVIES } from '../actionTypes';

const initialState = {
	allMovies: [],
};

export const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIES:
			return {
				...state,
				allMovies: [action.payload],
			};
		default:
			return state;
	}
};
