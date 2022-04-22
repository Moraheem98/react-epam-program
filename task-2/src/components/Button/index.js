import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import './index.scss';

export const AppButton = ({
	text,
	type = 'button',
	url = null,
	clickHandler = null,
}) => {
	return url ? (
		<Link to={url}>
			<button className='appBtn' type={type} onClick={clickHandler}>
				{text}
			</button>
		</Link>
	) : (
		<button className='appBtn' type={type} onClick={clickHandler}>
			{text}
		</button>
	);
};

AppButton.propTypes = {
	text: PropTypes.string,
	type: PropTypes.string,
	url: PropTypes.string,
	clickHandler: PropTypes.func,
};
