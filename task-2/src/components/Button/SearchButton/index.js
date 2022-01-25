import React from 'react';

import PropTypes from 'prop-types';

export const SearchButton = ({ setSelectedMovie }) => {
	return (
		<>
			<button onClick={() => setSelectedMovie(null)}>search again</button>
		</>
	);
};

SearchButton.propTypes = {
	setSelectedMovie: PropTypes.func,
};
