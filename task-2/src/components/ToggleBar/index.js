import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviesByGenre } from '../../store/thunk';
import { SortingFilter } from '../SortingFilter';

import './index.css';

export const ToggleBar = () => {
	const dispatch = useDispatch();
	return (
		<div className='filterContainer'>
			<div className='toggleBarContainer'>
				<ul>
					<li onClick={() => dispatch(fetchMoviesByGenre(''))}>All</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Action'))}>Action</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Documentary'))}>
						Documentary
					</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Drama'))}>Drama</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Crime'))}>Crime</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Horror'))}>Horror</li>
					<li onClick={() => dispatch(fetchMoviesByGenre('Romance'))}>
						Romance
					</li>
				</ul>
			</div>
			<SortingFilter />
		</div>
	);
};
