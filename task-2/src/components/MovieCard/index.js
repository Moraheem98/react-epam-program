import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { deleteMovie } from '../../store/thunk';
import { switchSelectedMovie } from '../../store/actionCreators';

import './index.css';

export const MovieCard = ({ movie, onClick, setOpenModal }) => {
	const dispatch = useDispatch();

	const switchBannerHandler = (event) => {
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
		<div className='movieCardContainer' onClick={onClick}>
			<div className='movieCardImageContainer'>
				<img
					className='moviePoster'
					src={movie.poster_path}
					alt={movie.title}
				/>
			</div>
			<div className='movieCardDetailsContainer'>
				{movie.title}
				{movie.genres}
				{movie.release_date}
			</div>
			<button onClick={deleteMovieHandler}>remove movie</button>
			<button onClick={switchBannerHandler}>edit movie</button>
		</div>
	);
};

MovieCard.propTypes = {
	show: PropTypes.func,
	movie: PropTypes.object,
	onClick: PropTypes.func,
	setOpenModal: PropTypes.func,
};
