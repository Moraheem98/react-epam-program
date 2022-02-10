import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { switchBannerReducer } from '../store/reducers/switchBannerReducer';
import { rootReducer } from './reducers/rootReducer';

const reducer = combineReducers({ switchBannerReducer, rootReducer });

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
	reducer,
	composeEnchancer(applyMiddleware(thunk)),
);
