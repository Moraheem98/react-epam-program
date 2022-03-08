import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { Formik, Form } from 'formik';

import { formikFieldOptions } from '../../../core/constants';
import { editMovie } from '../../../store/thunk';

import { FormikField } from '../FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

import './index.css';

export const EditMovieForm = ({ movie }) => {
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		dispatch(editMovie(values));
	};

	const formikFieldMapHandler = ({ errors, touched }) =>
		formikFieldOptions.map((field) => (
			<FormikField
				key={field.title}
				id={field.path}
				path={field.path}
				title={field.title}
				type={field.type}
				errors={errors}
				touched={touched}
			/>
		));

	return (
		<>
			<Formik
				initialValues={movie}
				validationSchema={movieValidationSchema}
				onSubmit={submitHandler}
			>
				{({ errors, touched }) => (
					<Form>
						<div>
							{formikFieldMapHandler({ errors, touched })}
							<button type='submit'>Submit</button>
							<button type='reset'>reset</button>
						</div>
					</Form>
				)}
			</Formik>
		</>
	);
};
EditMovieForm.propTypes = {
	movie: PropTypes.object,
};
