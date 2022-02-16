import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { switchBanner } from '../../store/actionCreators';

import { fetchMovies } from '../../store/thunk';

import {
	allLoadedMoviesSelector,
	movieFilterSelector,
} from '../../store/selectors';

import { MovieCard } from '../MovieCard';

import './index.css';

export const MovieList = ({ show }) => {
	const allApiMovies = useSelector(allLoadedMoviesSelector);
	const movieFilterByGenre = useSelector(movieFilterSelector);
	const dispatch = useDispatch();

	const apiFetchMovies = async () => {
		dispatch(fetchMovies());
	};

	useEffect(() => {
		apiFetchMovies();
	}, []);

	// const filterMovie = allApiMovies?.filter((data) => {
	// 	if (movieFilterByGenre === '') {
	// 		return data;
	// 	} else if (data.genres.includes(movieFilterByGenre)) {
	// 		return data;
	// 	}
	// 	return null;
	// });
	const allMovieRenderList = allApiMovies?.map((movie) => (
		<MovieCard
			onClick={() => dispatch(switchBanner(movie))}
			show={show}
			key={movie.id}
			title={movie.title}
			release_date={movie.release_date}
			genres={movie.genres}
		/>
	));

	return <div className='movieListContainer'>{allMovieRenderList}</div>;
};

MovieList.propTypes = {
	setSelectedMovie: PropTypes.func,
	show: PropTypes.func,
	movieApiData: PropTypes.array,
};
