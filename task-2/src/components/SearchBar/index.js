import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviesBySearch } from '../../store//thunk';

import './index.css';

export const SearchBar = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState('');

	const textInputHandler = useCallback(
		(e) => {
			setTextInput(e.target.value);
		},
		[textInput],
	);

	const submitSearchHandler = useCallback(
		(e) => {
			e.preventDefault();
			dispatch(fetchMoviesBySearch(textInput));
			setTextInput('');
		},
		[textInput],
	);

	return (
		<div className='searchContainer'>
			<h2>FIND YOUR MOVIE</h2>
			<input
				value={textInput}
				onChange={textInputHandler}
				type='text'
				placeholder='Search any Movie...'
			/>
			<button onClick={submitSearchHandler} className='searchBtn'>
				search
			</button>
		</div>
	);
};
