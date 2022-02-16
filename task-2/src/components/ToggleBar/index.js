import React from 'react';

import { useDispatch } from 'react-redux';

import { movieFilter } from '../../store/actionCreators';

import { SortingFilter } from '../SortingFilter';

import './index.css';

export const ToggleBar = () => {
	const dispatch = useDispatch();
	return (
		<div className='filterContainer'>
			<div className='toggleBarContainer'>
				<ul>
					<li onClick={() => dispatch(movieFilter('All'))}>All</li>
					<li onClick={() => dispatch(movieFilter('Action'))}>Action</li>
					<li onClick={() => dispatch(movieFilter('Documentary'))}>
						Documentary
					</li>
					<li onClick={() => dispatch(movieFilter('Drama'))}>Drama</li>
					<li onClick={() => dispatch(movieFilter('Crime'))}>Crime</li>
					<li onClick={() => dispatch(movieFilter('Horror'))}>Horror</li>
				</ul>
			</div>
			<SortingFilter />
		</div>
	);
};
