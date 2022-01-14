import React from 'react';

import { Home } from './components/Home';
import { ErrorBoundary } from './components/ErrorBoundary';

import './app.css';

const App = function () {
	return (
		<div>
			<ErrorBoundary>
				<Home />
			</ErrorBoundary>
		</div>
	);
};

export default App;
