import React from 'react';

import PropTypes from 'prop-types';

import './index.css';

export const MovieDetailsCard = ({
	movie: {
		poster_path,
		title,
		vote_average,
		genres,
		release_date,
		overview,
		runtime,
	},
}) => {
	return (
		<div className='movieDetailsContainer'>
			<div className='movieDetailsImageContainer'>
				<img className='movieDetailsPoster' src={poster_path} alt={title} />
			</div>
			<div className='movieDetailsContainer'>
				<div>
					{title}
					{vote_average}
				</div>
				<div>{genres}</div>
				<div>
					{release_date}
					{runtime}
				</div>
				<div>{overview}</div>
			</div>
		</div>
	);
};

MovieDetailsCard.propTypes = {
	movie: PropTypes.object,
	setOpenModal: PropTypes.func,
};
