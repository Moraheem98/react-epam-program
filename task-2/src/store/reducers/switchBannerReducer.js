import { SWITCH_BANNER } from '../actionTypes';

const initialState = {
	selectedMovie: null,
};

export const switchBannerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_BANNER:
			return {
				...state,
				selectedMovie: action.payload,
			};

		default:
			return state;
	}
};
