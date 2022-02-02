import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { movieData } from '../../core/data';
import { switchBanner } from '../../store/actionCreaters/actionCreators';

import { Movie } from '../Movie';

import './index.css';

export const MovieList = ({ show }) => {
	const dispatch = useDispatch();
	const movies = movieData.map((movie) => (
		<Movie
			onClick={() => dispatch(switchBanner(movie))}
			show={show}
			key={movie.id}
			title={movie.title}
			year={movie.year}
			genre={movie.genre}
		/>
	));

	return <div className='movieListContainer'>{movies}</div>;
};

MovieList.propTypes = {
	setSelectedMovie: PropTypes.func,
	show: PropTypes.func,
};
