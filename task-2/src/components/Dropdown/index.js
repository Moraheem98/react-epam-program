import React, { useState } from 'react';
import { dropdownOptions } from '../../core/data';

export const Dropdown = () => {
	const [dropdownValue, setDropdownValue] = useState('');

	const dropdownHandler = (e) => {
		setDropdownValue(e.target.value);
	};

	const handleDropdownValues = () => {
		return dropdownOptions.map((option) => (
			<option key={option.value}>{option.label}</option>
		));
	};

	return (
		<>
			<label>
				<select value={dropdownValue} onChange={dropdownHandler}>
					{handleDropdownValues()}
				</select>
			</label>
		</>
	);
};
