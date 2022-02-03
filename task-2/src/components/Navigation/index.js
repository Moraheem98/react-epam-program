import React from 'react';

import PropTypes from 'prop-types';

import { SearchButton } from '../Button/SearchButton';

import './index.css';

export const Navigation = ({ displayButton }) => {
	return (
		<div className='navigationContainer'>
			<p>netflixroulette</p>
			{displayButton ? <SearchButton /> : null}
		</div>
	);
};

Navigation.propTypes = {
	setSelectedMovie: PropTypes.func,
	displayButton: PropTypes.bool,
};
