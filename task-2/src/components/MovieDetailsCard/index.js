import React from 'react';

import PropTypes from 'prop-types';

import './index.scss';

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
	const allGenres = genres.map((g) => <li key={g}>{g}</li>);

	return (
		<div className='selectedMovieCardContainer'>
			<div className='selectedMovieCardImageContainer'>
				<img src={poster_path} alt={title} />
			</div>
			<div className='selectedMovieDetailsContainer'>
				<div className='titleSection'>
					<h2>{title}</h2>
					<button>{vote_average}</button>
				</div>
				<div className='genresList'>{allGenres}</div>
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
};
