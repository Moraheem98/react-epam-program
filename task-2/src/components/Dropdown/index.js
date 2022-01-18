import React, { useState } from 'react';

import { dropdownOptions } from '../../constants';

export const Dropdown = () => {
	const [dropdownValue, setDropdownValue] = useState('');

	const dropdownHandler = (e) => {
		setDropdownValue(e.target.value);
	};

	const renderOptions = () => {
		return dropdownOptions.map((option) => (
			<option key={option.value}>{option.label}</option>
		));
	};

	return (
		<>
			<label>
				<select
					className='inputField'
					value={dropdownValue}
					onChange={dropdownHandler}
				>
					{renderOptions()}
				</select>
			</label>
		</>
	);
};
