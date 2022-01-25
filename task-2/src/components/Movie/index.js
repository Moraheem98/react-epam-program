import React from 'react';

import PropTypes from 'prop-types';

import './index.css';

export const Movie = (props) => {
	return (
		<div className='movieContainer' onClick={props.onClick}>
			<button className='buttonContainer' onClick={props.show}>
				Title:
				{props.title}
				genre:
				{props.title}
				year:
				{props.year}
			</button>
		</div>
	);
};

Movie.propTypes = {
	show: PropTypes.func,
	title: PropTypes.string,
	genre: PropTypes.string,
	year: PropTypes.number,
	onClick: PropTypes.func,
};
