import React from 'react';

import PropTypes from 'prop-types';

import { AppButton } from '../Button';

import './index.scss';

export const Navigation = ({ setOpenModal, selectedMovie }) => {
	const modalHandler = () => {
		setOpenModal(true);
	};

	return (
		<div className='navigationContainer'>
			<p>netflixroulette</p>
			<div className='buttonContainer'>
				<AppButton text='search again' url='/search' />
				{selectedMovie ? (
					<AppButton text='+ edit movie' clickHandler={modalHandler} />
				) : (
					<AppButton text='+ add movie' clickHandler={modalHandler} />
				)}
			</div>
		</div>
	);
};

Navigation.propTypes = {
	setOpenModal: PropTypes.func,
	selectedMovie: PropTypes.object,
};
