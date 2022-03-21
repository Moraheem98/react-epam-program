import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { allLoadedMoviesSelector } from '../../store/selectors';
import { fetchMovies } from '../../store/thunk';

import { MovieCard } from '../MovieCard';

import './index.css';

export const MovieList = ({ facets, setOpenModal }) => {
	const allApiMovies = useSelector(allLoadedMoviesSelector);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies());
	}, []);

	const filterMovie = allApiMovies?.filter(
		(data) => data?.genres?.includes(facets) || facets === '',
	);

	const allMovieRenderList = filterMovie?.map((movie) => (
		<MovieCard key={movie.id} movie={movie} setOpenModal={setOpenModal} />
	));
	return <div className='movieListContainer'>{allMovieRenderList}</div>;
};
MovieList.propTypes = {
	facets: PropTypes.string,
	setOpenModal: PropTypes.func,
};
