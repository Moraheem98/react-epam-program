import React from 'react';

import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import {
	fetchMovies,
	moviesSortedByTitle,
	moviesSortedByDate,
	moviesSortedByRating,
} from '../../store/thunk';

export const SortingFilter = () => {
	const dispatch = useDispatch();

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
		<aside>
			<select
				onChange={(e) => {
					sortingHandler(e.target.value);
				}}
			>
				<option value='all'>all</option>
				<option value='title'>title</option>
				<option value='date'>newest</option>
				<option value='rating'>rating</option>
			</select>
		</aside>
	);
};

SortingFilter.propTypes = {
	sort: PropTypes.func,
};
