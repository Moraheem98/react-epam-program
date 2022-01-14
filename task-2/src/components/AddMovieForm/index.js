import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import './index.css'

export const AddMovieForm = () => {
    const [values, setValues] = useState({
        title: "",
        year: "",
        rating: "",
        runtime: "",
        genre: "", 
        description: ""
    });

    const [selectedDate, setSelectedDate] = useState(null)
    const handleDateChange = date => setSelectedDate(date);

    const handleInputChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues(values => ({...values, [name]: value}))
    };

    const [dropdownValue, setDropdownValue] = useState('')

    const dropdownHandler = (e) => {
        setDropdownValue(e.target.value);
    };

    const dropdownOptions = [
        { label: 'genre', value: 'genre'},
        { label: 'crime', value: 'crime'},
        { label: 'fantasy', value: 'fantasy'},
        { label: 'action', value: 'action'},
        { label: 'drama', value: 'drama'},
    ];

    const Dropdown = ({ label, value, options, onChange }) => {
        return (
          <label>
            {label}
            <select value={dropdownValue} onChange={onChange}>
              {options.map((option) => (
                <option value={option.value}>{option.label}</option>
              ))}
            </select>
          </label>
        );
      };

      // Still need to finish submit function
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const resetInputValues = () => {
        setValues("");
    }

	return (
		<>
            <form onSubmit={handleSubmit} className="formContainer">  
                <input
                    type="text"
                    className="inputField"
                    placeholder="title"
                    name="titleName"
                    values={values.title}
                    onChange={handleInputChanges}
                />
                {/* <input
                    type="number"
                    className="inputField"
                    placeholder="year"
                    name="yearName"
                    values={values.year}
                    onChange={handleInputChanges}
                /> */}
                <DatePicker 
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat='yyyy'
                    name="selectDate"
                    showYearDropdown
                    scrollableYearDropdown
                    isClearable
                    // values={values.year}
                    // onChange={handleInputChanges}
                />
                <input
                    type="number"
                    className="inputField"
                    placeholder="rating"
                    name="ratingName"
                    values={values.rating}
                    onChange={handleInputChanges}
                />
                <input
                    type="number"
                    className="inputField"
                    placeholder="runtime"
                    name="runtimeName"
                    values={values.runtime}
                    onChange={handleInputChanges}
                />
                <>
                    <Dropdown
                        options={dropdownOptions}
                        value={dropdownValue}
                        onChange={dropdownHandler}
                    />
                    {/* <p>{dropdownValue}</p> */}
                </>
                <input
                    type="text"
                    className="inputField"
                    placeholder="description"
                    name="descriptionName"
                    values={values.description}
                    onChange={handleInputChanges}
                />
            </form>
            <button type="submit" value="submit">Submit</button>
            <button onReset={resetInputValues}>Reset</button>
		</>
	);
};
