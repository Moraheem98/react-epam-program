import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteMovie } from '../../store/thunk';
import { switchSelectedMovie } from '../../store/actionCreators';

import './index.css';

export const MovieCard = ({ movie, onClick, setOpenModal }) => {
	const dispatch = useDispatch();

	const onClickFunction = (event) => {
		event.stopPropagation();
		dispatch(switchSelectedMovie(movie));
		setOpenModal(true);
	};

	const deleteMovieHandler = (event) => {
		event.stopPropagation();
		dispatch(switchSelectedMovie(null));
		dispatch(deleteMovie(movie));
	};

	return (
		<>
			<div className='movieContainer' onClick={onClick}>
				Title:
				{movie.title}
				genre:
				{movie.genres}
				year:
				{movie.release_date}
				<button onClick={deleteMovieHandler}>remove movie</button>
				<button onClick={onClickFunction}>edit movie</button>
			</div>
		</>
	);
};

MovieCard.propTypes = {
	show: PropTypes.func,
	movie: PropTypes.object,
	onClick: PropTypes.func,
	setOpenModal: PropTypes.func,
};
