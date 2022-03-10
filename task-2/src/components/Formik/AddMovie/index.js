import React from 'react';
import { useDispatch } from 'react-redux';

import { Formik, Form } from 'formik';

import { formikFieldOptions } from '../../../core/constants';
import { addMovie } from '../../../store/thunk';

import { FormikField } from '../FormikField';
import { movieValidationSchema } from '../movieValidationSchema';

import './index.css';

export const AddMovieForm = () => {
	const dispatch = useDispatch();

	const submitHandler = (values) => {
		dispatch(addMovie(values));
		values.genres = [values.genres];
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
				initialValues={{
					title: '',
					release_date: '',
					poster_path: '',
					genres: '',
					overview: '',
					runtime: 0,
				}}
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
