import React from 'react';
import { Link } from 'react-router-dom';

export const SearchButton = () => {
	return (
		<Link to='/search'>
			<button className='universalBtn'>search again</button>
		</Link>
	);
};
