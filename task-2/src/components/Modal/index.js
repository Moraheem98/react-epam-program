import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { selectedMovieSelector } from '../../store/selectors';

import { AddMovieForm } from '../Formik/AddMovie';
import { EditMovieForm } from '../Formik/EditMovie';

import './index.css';

export const Modal = ({ closeModal }) => {
	const selectedMovie = useSelector(selectedMovieSelector);

	return (
		<div className='modalContainer'>
			<div className='modalHeader'>
				<h1>{selectedMovie ? <> edit movie </> : <> add movie</>}</h1>
				<button onClick={() => closeModal(false)}>X</button>
			</div>
			{selectedMovie ? (
				<EditMovieForm movie={selectedMovie} />
			) : (
				<AddMovieForm />
			)}
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func,
};
