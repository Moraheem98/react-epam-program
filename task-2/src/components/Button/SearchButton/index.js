import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { switchBanner } from '../../../store/actionCreators';

export const SearchButton = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button onClick={() => dispatch(switchBanner(null))}>search again</button>
		</>
	);
};

SearchButton.propTypes = {
	setSelectedMovie: PropTypes.func,
};
