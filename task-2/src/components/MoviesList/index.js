import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { switchBanner } from '../../store/actionCreators';

import { allLoadedMoviesSelector } from '../../store/selectors';

import { MovieCard } from '../MovieCard';

import { fetchMovies } from '../../store/thunk';

import './index.css';

export const MovieList = ({ show, facets, filters }) => {
	const allApiMovies = useSelector(allLoadedMoviesSelector);
	console.log('checking all movies', allApiMovies);
	const dispatch = useDispatch();

	const apiFetchMovies = async () => {
		dispatch(fetchMovies());
	};

	useEffect(() => {
		apiFetchMovies();
	}, []);

	const filterMovie = allApiMovies?.filter(
		(data) => data?.genres?.includes(facets) || facets === '',
	);

	const allMovieRenderList = filterMovie?.map((movie) => (
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
	facets: PropTypes.string,
	filters: PropTypes.string,
};
