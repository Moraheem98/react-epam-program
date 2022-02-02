import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import { rootReducer } from './allReducers/rootReducer';
import { switchBannerReducer } from '../store/allReducers/switchBannerReducer';

const reducer = combineReducers({ switchBannerReducer });

export const store = createStore(
	reducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
