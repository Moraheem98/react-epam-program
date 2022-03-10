import React from 'react';

import PropTypes from 'prop-types';

import { SearchButton } from '../Button/SearchButton';

import './index.css';

export const Navigation = ({ setOpenModal }) => {
	return (
		<div className='navigationContainer'>
			<p style={{ color: '#F65261' }}>netflixroulette</p>
			<div className='btnContainer'>
				<SearchButton />
				<button
					className='universalBtn'
					onClick={() => {
						setOpenModal(true);
					}}
				>
					+ add movie
				</button>
			</div>
		</div>
	);
};

Navigation.propTypes = {
	setOpenModal: PropTypes.func,
};
