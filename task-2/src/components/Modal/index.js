import React from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { selectedMovieSelector } from '../../store/selectors';

import { AddMovieForm } from '../Formik/AddMovie';
import { EditMovieForm } from '../Formik/EditMovie';

import './index.scss';

export const Modal = ({ closeModal }) => {
	const selectedMovie = useSelector(selectedMovieSelector);
	return (
		<div className='modalBackground'>
			<div className='modalContainer'>
				<div className='modalHeader'>
					<h1>{selectedMovie ? <> edit movie </> : <> add movie</>}</h1>
					<button className='modalCloseBtn' onClick={() => closeModal(false)}>
						X
					</button>
				</div>
				{selectedMovie ? (
					<EditMovieForm
						movie={selectedMovie}
						closeModal={() => closeModal(false)}
					/>
				) : (
					<AddMovieForm />
				)}
			</div>
		</div>
	);
};

Modal.propTypes = {
	closeModal: PropTypes.func,
};
