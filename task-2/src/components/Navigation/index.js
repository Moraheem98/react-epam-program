import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { SearchButton } from '../Button/SearchButton';

import './index.css';

export const Navigation = ({ setOpenModal }) => {
	return (
		<div className='navigationContainer'>
			<p style={{ color: '#F65261' }}>netflixroulette</p>
			<div className='btnContainer'>
				<Link to='/'>
					<SearchButton />
				</Link>
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
