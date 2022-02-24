import React from 'react';

import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { removeMovie } from '../../store/actionCreators';

import './index.css';

export const MovieCard = ({ title, genres, release_date, show, onClick }) => {
	const dispatch = useDispatch();
	return (
		<div className='movieContainer' onClick={onClick}>
			<button className='buttonContainer' onClick={show}>
				Title:
				{title}
				genre:
				{genres}
				year:
				{release_date}
			</button>
			<button onClick={() => dispatch(removeMovie(id))}>remove movie</button>
		</div>
	);
};

MovieCard.propTypes = {
	show: PropTypes.func,
	title: PropTypes.string,
	genres: PropTypes.array,
	release_date: PropTypes.string,
	onClick: PropTypes.func,
};
