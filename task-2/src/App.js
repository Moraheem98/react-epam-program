import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorDisplay404 } from './components/ErrorDisplay404';
import { MoviePage } from './pages/MoviePage';

import './app.scss';

const App = function () {
	return (
		<>
			<ErrorBoundary>
				<Routes>
					<Route path='/search' element={<HomePage />} />
					<Route path='/' element={<Navigate replace to='/search' />} />
					<Route path='/movies/:id' element={<MoviePage />} />
					<Route path='*' element={<ErrorDisplay404 />} />
				</Routes>
			</ErrorBoundary>
		</>
	);
};

export default App;
