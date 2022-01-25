import React from 'react';

import { SearchButton } from '../Button/SearchButton';

import './index.css';

export const Navigation = ({ setSelectedMovie, displayButton }) => {
	return (
		<div className='navigationContainer'>
			<p>netflixroulette</p>
			{displayButton ? <SearchButton setSelectedMovie={setSelectedMovie} /> : null}
		</div>
	);
};
