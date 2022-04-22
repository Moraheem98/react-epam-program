import React from 'react';
import { useDispatch } from 'react-redux';

import {
	fetchMovies,
	moviesSortedByTitle,
	moviesSortedByDate,
	moviesSortedByRating,
} from '../../store/thunk';

import './index.scss';

export const SortingFilter = () => {
	const dispatch = useDispatch();
	const sortingHandlerFunction = (e) => {
		sortingHandler(e.target.value);
	};
	const sortingHandler = (sortedValue) => {
		switch (sortedValue) {
			case 'title':
				dispatch(moviesSortedByTitle());
				break;
			case 'date':
				dispatch(moviesSortedByDate());
				break;
			case 'rating':
				dispatch(moviesSortedByRating());
				break;
			case 'all':
				dispatch(fetchMovies());
		}
	};
	return (
		<select className='dropDownSelector' onChange={sortingHandlerFunction}>
			<option value='all'>All</option>
			<option value='title'>Title</option>
			<option value='date'>Newest</option>
			<option value='rating'>Rating</option>
		</select>
	);
};
