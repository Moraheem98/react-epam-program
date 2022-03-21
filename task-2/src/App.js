import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ErrorDisplay404 } from './components/ErrorDisplay404';
import { MoviePage } from './pages/MoviePage';

import './app.css';

const App = function () {
	return (
		<>
			<ErrorBoundary>
				<Routes>
					{/* These routes sould display movielists */}
					<Route path='/search' element={<HomePage />} />
					{/* These routes sould display movielists */}
					<Route path='/' element={<Navigate replace to='/search' />} />
					{/* should display a single movie (moviecard) */}
					<Route path='/movies/:id' element={<MoviePage />} />
					{/* everything that react router is not able to find (fallback) */}
					<Route path='*' element={<ErrorDisplay404 />} />
				</Routes>
			</ErrorBoundary>
		</>
	);
};

export default App;
