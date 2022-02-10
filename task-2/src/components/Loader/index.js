import React from 'react';

import { Oval } from 'react-loader-spinner';

import './index.css';

export const LoaderSpinner = () => {
	return (
		<div className='loaderContainer'>
			<h3>Loading All Movies ...</h3>
			<Oval height={75} width={75} />
		</div>
	);
};
