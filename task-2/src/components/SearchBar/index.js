import React from 'react';

import './index.css';

export const SearchBar = () => {
	return (
		<div className='searchContainer'>
			<h2>FIND YOUR MOVIE</h2>
			<input placeholder='Search any Movie...' />
			<button className='searchBtn'>search</button>
		</div>
	);
};
