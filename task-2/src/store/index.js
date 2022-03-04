import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { switchBannerReducer } from '../store/reducers/switchBannerReducer';
import { moviesReducer } from './reducers/moviesReducer';

const reducer = combineReducers({
	switchBanner: switchBannerReducer,
	allMovies: moviesReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnchancer(applyMiddleware(thunk)),
);
