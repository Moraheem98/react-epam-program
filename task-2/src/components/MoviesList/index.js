import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import axios from 'axios';

import { switchBanner, allLoadedMovies } from '../../store/actionCreators';

import { Movie } from '../Movie';

import './index.css';

const movieApi = 'http://localhost:4000/movies?limit=10';

// const apiFetchMovies = async () => {
// 	const response = await axios.get(movieApi);
// 	dispatch(allLoadedMovies([...response.data.data]));
// 	console.log(response.data);
// };

// useEffect(() => {
// 	apiFetchMovies();
// 	console.log(allMovies);
// }, []);

export const MovieList = ({ show }) => {
	const allMovies = useSelector((state) => state.allMovies.allMovies[0]);
	// console.log(allMovies);
	const dispatch = useDispatch();

	const apiFetchMovies = async () => {
		const response = await axios.get(movieApi).catch((err) => {
			console.log('err', err);
		});
		dispatch(allLoadedMovies(response.data.data));
	};

	useEffect(() => {
		apiFetchMovies();
	}, []);
	// console.log('allMovies: ', allMovies);

	const allMovieRenderList = allMovies?.map((movie) => (
		<Movie
			onClick={() => dispatch(switchBanner(movie))}
			show={show}
			id={movie.id}
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
