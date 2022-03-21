import { SET_MOVIE } from '../actionTypes';

const initialState = {
	selectedMovie: null,
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_MOVIE:
			return {
				...state,
				selectedMovie: action.payload,
			};

		default:
			return state;
	}
};
