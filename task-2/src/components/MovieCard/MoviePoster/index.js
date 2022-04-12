import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { FallbackImage } from '../FallbackImage';

import './index.scss';

export const MoviePoster = ({ url }) => {
	const [validPosterCheck, setValidPosterCheck] = useState(true);

	if (validPosterCheck) {
		return (
			<img
				onError={() => {
					setValidPosterCheck(false);
				}}
				className='moviePoster'
				src={url}
			/>
		);
	} else {
		return <FallbackImage />;
	}
};

MoviePoster.propTypes = {
	url: PropTypes.string,
};
