import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { switchBanner } from '../../store/actionCreators';

import PropTypes from 'prop-types';

import './index.css';

export const Movie = (props) => {
	const dispatch = useDispatch();
	const allMovies = useSelector((state) => state.allMovies.allMovies[0]);

	const allMovieRenderList = allMovies?.map((movie) => {
		const { id, title, genres, release_date } = movie;
		return (
			<div
				className='movieContainer'
				onClick={() => dispatch(switchBanner(movie))}
				key={id}
			>
				<button className='buttonContainer' onClick={props.show}>
					<div className='movieInfo'>
						Title:
						{title}
						genre:
						{genres}
						year:
						{release_date}
					</div>
				</button>
			</div>
		);
	});

	return <>{allMovieRenderList}</>;
};

Movie.propTypes = {
	show: PropTypes.func,
	title: PropTypes.string,
	genre: PropTypes.string,
	year: PropTypes.number,
	onClick: PropTypes.func,
};
