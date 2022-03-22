import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { deleteMovie } from '../../store/thunk';

import './index.css';

export const MovieCard = ({
	movie: { id, poster_path, title, genres, release_date },
	setOpenModal,
}) => {
	const dispatch = useDispatch();

	const editMovieHandler = () => {
		setOpenModal(true);
	};

	const deleteMovieHandler = (event) => {
		event.stopPropagation();
		dispatch(deleteMovie(movie));
	};
	return (
		<div className='movieCardContainer'>
			<Link to={`/movies/${id}`}>
				<div className='movieCardImageContainer'>
					<img className='moviePoster' src={poster_path} alt={title} />
				</div>
				<div className='movieCardDetailsContainer'>
					{title}
					{genres}
					{release_date}
				</div>
				<button onClick={deleteMovieHandler}>remove movie</button>
				<button onClick={editMovieHandler}>edit movie</button>
			</Link>
		</div>
	);
};

MovieCard.propTypes = {
	show: PropTypes.func,
	id: PropTypes.number,
	movie: PropTypes.object,
	onClick: PropTypes.func,
	setOpenModal: PropTypes.func,
};
