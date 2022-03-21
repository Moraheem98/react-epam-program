import React from 'react';

import PropTypes from 'prop-types';

import { SearchBanner } from '../Banners/SearchBanner';

import './index.css';

export const Header = () => {
	return (
		<div className='headerContainer'>
			<SearchBanner />
		</div>
	);
};
