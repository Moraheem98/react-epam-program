import React, { useState } from 'react';

import PropTypes from 'prop-types';

import './index.css';

export const Movie = (props) => {
	return (
		<div className='movieContainer' onClick={props.onClick}>
			Title:
			{props.title}
			Genre:
			{props.genre}
			Year:
			{props.year}
			{/* {props.image} */}
		</div>
	);
};

Movie.propTypes = {
	title: PropTypes.string,
	genre: PropTypes.string,
	year: PropTypes.number,
	onClick: PropTypes.func,
};
