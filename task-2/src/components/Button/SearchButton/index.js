import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { switchSelectedMovie } from '../../../store/actionCreators';

export const SearchButton = () => {
	const dispatch = useDispatch();
	return (
		<>
			<button
				className='universalBtn'
				onClick={() => dispatch(switchSelectedMovie(null))}
			>
				search again
			</button>
		</>
	);
};

SearchButton.propTypes = {
	setSelectedMovie: PropTypes.func,
};
