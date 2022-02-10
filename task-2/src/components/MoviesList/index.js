import React from 'react';

import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { switchBanner } from '../../store/actionCreators';

import { Movie } from '../Movie';

import './index.css';

export const MovieList = ({ show, movieApiData }) => {
	const dispatch = useDispatch();
	const movies = movieApiData?.map((movie) => (
		<Movie
			onClick={() => dispatch(switchBanner(movie))}
			show={show}
			key={movie.id}
			title={movie.title}
			year={movie.release_date}
			genre={movie.genres}
		/>
	));

	return <div className='movieListContainer'>{movies}</div>;
};

MovieList.propTypes = {
	setSelectedMovie: PropTypes.func,
	show: PropTypes.func,
	movieApiData: PropTypes.array,
};
