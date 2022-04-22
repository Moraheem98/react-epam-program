import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { deleteMovie } from '../../store/thunk';

import { AppButton } from '../Button';

import { MoviePoster } from './MoviePoster';

import './index.scss';

export const MovieCard = ({ movie, setOpenModal }) => {
	const { id, poster_path, title, genres, release_date } = movie;
	const dispatch = useDispatch();

	const editMovieHandler = () => {
		setOpenModal(true);
	};

	const deleteMovieHandler = (event) => {
		event.stopPropagation();
		dispatch(deleteMovie(movie));
	};

	const allGenres = genres.map((g) => <li key={g}>{g}</li>);

	return (
		<div className='movieCardContainer'>
			<Link to={`/movies/${id}`}>
				<div className='movieCardImageContainer'>
					<MoviePoster url={poster_path} />
				</div>
				<div className='movieCardDetailsContainer'>
					<div className='titleDetails'>
						<h4>{title}</h4>
						<span>{release_date}</span>
					</div>
					<div className='genresList'>{allGenres}</div>
				</div>
			</Link>
			<AppButton text='remove movie' clickHandler={deleteMovieHandler} />
			<AppButton text='edit movie' clickHandler={editMovieHandler} />
		</div>
	);
};

MovieCard.propTypes = {
	movie: PropTypes.object,
	setOpenModal: PropTypes.func,
};
