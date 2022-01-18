import React from 'react';

import PropTypes from 'prop-types';

import { AddMovieForm } from '../AddMovieForm';

import './index.css';

export const Modal = ({ closeModal }) => {
	return (
		<div className='modalContainer'>
			<div className='modalHeader'>
				<h1>ADD MOVIE</h1>
				<button onClick={() => closeModal(false)}>X</button>
			</div>
			<AddMovieForm />
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func,
};
