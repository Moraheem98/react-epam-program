import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { switchBanner } from '../../store/actionCreators';

import PropTypes from 'prop-types';

import './index.css';

export const Movie = (props) => {
	return (
		<div className='movieContainer' onClick={props.onClick}>
			<button className='buttonContainer' onClick={props.show}>
				Title:
				{props.title}
				genre:
				{props.genres}
				year:
				{props.release_date}
			</button>
		</div>
	);
};

Movie.propTypes = {
	show: PropTypes.func,
	title: PropTypes.string,
	genres: PropTypes.array,
	release_date: PropTypes.string,
	onClick: PropTypes.func,
};
