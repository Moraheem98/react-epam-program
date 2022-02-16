import React from 'react';

import PropTypes from 'prop-types';

import './index.css';

export const MovieCard = ({ title, genres, release_date, show, onClick }) => {
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
