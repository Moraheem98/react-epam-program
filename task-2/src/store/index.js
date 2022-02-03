import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { switchBannerReducer } from '../store/reducers/switchBannerReducer';
import { rootReducer } from './reducers/rootReducer';

const reducer = combineReducers({ switchBannerReducer, rootReducer });

export const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
