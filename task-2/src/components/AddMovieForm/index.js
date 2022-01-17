import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Dropdown } from '../Dropdown';
import PropTypes from 'prop-types';

import './index.css';

export const AddMovieForm = ({
	dropdownOptions,
	dropdownValue,
	dropdownHandler,
}) => {
	const [values, setValues] = useState({
		title: '',
		year: '',
		rating: '',
		runtime: '',
		genre: '',
		description: '',
	});

	const [selectedDate, setSelectedDate] = useState(null);
	const handleDateChange = (date) => setSelectedDate(date);

	const handleInputChanges = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setValues((values) => ({ ...values, [name]: value }));
	};

	// Still need to finish submit function
	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const resetInputValues = () => {
		setValues('');
	};

	return (
		<>
			<form onSubmit={handleSubmit} className='formContainer'>
				<input
					type='text'
					className='inputField'
					placeholder='title'
					name='titleName'
					values={values.title}
					onChange={handleInputChanges}
				/>
				<DatePicker
					selected={selectedDate}
					onChange={handleDateChange}
					dateFormat='yyyy'
					name='selectDate'
					showYearDropdown
					scrollableYearDropdown
					isClearable
				/>
				<input
					type='number'
					className='inputField'
					placeholder='rating'
					name='ratingName'
					values={values.rating}
					onChange={handleInputChanges}
				/>
				<Dropdown
					dropdownOptions={dropdownOptions}
					dropdownValue={dropdownValue}
					onChange={dropdownHandler}
				/>
				<input
					type='number'
					className='inputField'
					placeholder='runtime'
					name='runtimeName'
					values={values.runtime}
					onChange={handleInputChanges}
				/>
				<input
					type='text'
					className='inputField'
					placeholder='description'
					name='descriptionName'
					values={values.description}
					onChange={handleInputChanges}
				/>
			</form>
			<button type='submit' value='submit'>
				Submit
			</button>
			<button onReset={resetInputValues}>Reset</button>
		</>
	);
};

AddMovieForm.propTypes = {
	dropdownOptions: PropTypes.array,
	dropdownHandler: PropTypes.func,
	dropdownValue: PropTypes.string,
};
