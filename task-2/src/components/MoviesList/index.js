import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { fetchMovies } from '../../store/thunk';
import { allLoadedMoviesSelector } from '../../store/selectors';

import { MovieCard } from '../MovieCard';

import './index.scss';

export const MovieList = ({ setOpenModal }) => {
	const movies = useSelector(allLoadedMoviesSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	const allMovieRenderList = movies.map((movie) => (
		<MovieCard key={movie.id} movie={movie} setOpenModal={setOpenModal} />
	));
	return <div className='movieListContainer'>{allMovieRenderList}</div>;
};
MovieList.propTypes = {
	setOpenModal: PropTypes.func,
};
