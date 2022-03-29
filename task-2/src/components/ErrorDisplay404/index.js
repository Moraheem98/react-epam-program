import React from 'react';

import { AppButton } from '../Button';

export const ErrorDisplay404 = () => {
	return (
		<div>
			<p>Page Not Found</p>
			<p>404</p>
			<AppButton text='back to home' url='/search' />
		</div>
	);
};
