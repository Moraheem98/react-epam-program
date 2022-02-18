import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { formik, form } from 'formik';

import { ADD_FIELDS } from '../../constants';

import { Dropdown } from '../Dropdown';

import 'react-datepicker/dist/react-datepicker.css';
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
				<label>Title</label>
				<input
					type='text'
					className='inputField'
					placeholder='title'
					name={ADD_FIELDS.TITLE_NAME}
					values={values.title}
					onChange={handleInputChanges}
				/>
				<label>Release Year</label>
				<DatePicker
					selected={selectedDate}
					onChange={handleDateChange}
					dateFormat='yyyy'
					name={ADD_FIELDS.SELECT_DATE}
					className='inputField'
					placeholderText='Select a year'
					showYearDropdown
					scrollableYearDropdown
					isClearable
				/>
				<label>Rating</label>
				<input
					type='number'
					className='inputField'
					placeholder='rating'
					name={ADD_FIELDS.RATING_NAME}
					values={values.rating}
					onChange={handleInputChanges}
				/>
				<label>Genre</label>
				<Dropdown
					dropdownOptions={dropdownOptions}
					dropdownValue={dropdownValue}
					onChange={dropdownHandler}
					className='inputField'
				/>
				<label>Runtime</label>
				<input
					type='number'
					className='inputField'
					placeholder='runtime'
					name={ADD_FIELDS.RUNTIME_NAME}
					values={values.runtime}
					onChange={handleInputChanges}
				/>
				<label>description</label>
				<input
					type='text'
					className='inputField'
					placeholder='description'
					name={ADD_FIELDS.DESCRIPTION_NAME}
					values={values.description}
					onChange={handleInputChanges}
				/>
			</form>
			<div className='btnContainer'>
				<button type='submit' value='submit'>
					Submit
				</button>
				<button onReset={resetInputValues}>Reset</button>
			</div>
		</>
	);
};

AddMovieForm.propTypes = {
	dropdownOptions: PropTypes.array,
	dropdownHandler: PropTypes.func,
	dropdownValue: PropTypes.string,
};
