import React from 'react';

import PropTypes from 'prop-types';

import { AppButton } from '../Button';

import './index.css';

export const Navigation = ({ setOpenModal }) => {
	const modalHandler = () => {
		setOpenModal(true);
	};

	return (
		<div className='navigationContainer'>
			<p style={{ color: '#F65261' }}>netflixroulette</p>
			<div className='btnContainer'>
				<AppButton text='search again' url='/search' />
				<AppButton text='+ add movie' clickHandler={modalHandler} />
			</div>
		</div>
	);
};

Navigation.propTypes = {
	setOpenModal: PropTypes.func,
};
