import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from './allReducers/rootReducer';

export const store = createStore(rootReducer);

//middleware - async stuff and devtools
