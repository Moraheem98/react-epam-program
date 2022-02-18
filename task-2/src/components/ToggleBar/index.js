import React from 'react';

import PropTypes from 'prop-types';

import { SortingFilter } from '../SortingFilter';

import './index.css';

export const ToggleBar = ({ setFacets }) => {
	return (
		<div className='filterContainer'>
			<div className='toggleBarContainer'>
				<ul>
					<li onClick={() => setFacets('')}>All</li>
					<li onClick={() => setFacets('Action')}>Action</li>
					<li onClick={() => setFacets('Documentary')}>Documentary</li>
					<li onClick={() => setFacets('Drama')}>Drama</li>
					<li onClick={() => setFacets('Crime')}>Crime</li>
					<li onClick={() => setFacets('Horror')}>Horror</li>
					<li onClick={() => setFacets('Romance')}>Romance</li>
				</ul>
			</div>
			<SortingFilter />
		</div>
	);
};

ToggleBar.propTypes = {
	setFacets: PropTypes.func,
};
