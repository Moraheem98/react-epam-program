import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { movieReducer } from './reducers/movieReducer';
import { moviesReducer } from './reducers/moviesReducer';

const reducer = combineReducers({
	selectedMovie: movieReducer,
	allMovies: moviesReducer,
});

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnchancer(applyMiddleware(thunk)),
);
