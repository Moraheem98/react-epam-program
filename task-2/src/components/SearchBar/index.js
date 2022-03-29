import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { fetchMoviesBySearch } from '../../store//thunk';

import { AppButton } from '../Button';

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
			console.log('heelo');
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
			<AppButton
				text='submit'
				type='submit'
				clickHandler={submitSearchHandler}
			/>
		</div>
	);
};
