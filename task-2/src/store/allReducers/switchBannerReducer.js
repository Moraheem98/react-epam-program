import { SWITCH_BANNER } from '../actionTypes/allActionTypes';

const initialState = {
	selectedMovie: undefined,
};

export const switchBannerReducer = (state = initialState, action) => {
	switch (action.type) {
		case SWITCH_BANNER:
        return (
            ...state,
            selectedMovie: 
        );

		default:
			return state;
	}
};
